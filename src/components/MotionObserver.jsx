import { useEffect } from "react";

export default function MotionObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-enabled");
    const observed = new WeakSet();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -35px 0px" });
    const scan = () => document.querySelectorAll(".reveal").forEach(el => {
      if (!observed.has(el)) {
        observed.add(el);
        observer.observe(el);
      }
    });
    scan();
    const mutation = new MutationObserver(scan);
    mutation.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => {
      mutation.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, []);
  return null;
}
