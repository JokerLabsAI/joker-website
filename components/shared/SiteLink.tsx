"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Anchors on the current page ("#id", or "/path#id" while on /path) scroll smoothly;
// "/" while on the home page scrolls to the top; anything else navigates.
export function useSiteNavigation() {
  const pathname = usePathname();
  return (event: React.MouseEvent, href: string) => {
    const [path, hash] = href.split("#");
    const id = hash ?? (href === "/" && pathname === "/" ? "home" : undefined);
    if (!id || (path !== "" && path !== pathname)) return false;
    const target = document.getElementById(id);
    if (!target) return false;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", hash ? `${pathname}#${hash}` : pathname);
    return true;
  };
}

export function SiteLink({ href, afterClick, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string; afterClick?: () => void }) {
  const navigate = useSiteNavigation();
  return <Link href={href} {...props} onClick={(event) => { props.onClick?.(event); navigate(event, href); afterClick?.(); }} />;
}
