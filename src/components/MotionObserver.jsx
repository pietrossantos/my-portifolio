import { useEffect } from "react";

export default function MotionObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || reducedMotion.matches) return;

    const observed = new WeakSet();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });

    const scan = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => {
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };

    // Wait for initial layout/paint so elements already on screen animate too.
    let firstFrame = requestAnimationFrame(() => {
      document.documentElement.classList.add("motion-enabled");
      scan();
    });

    const mutation = new MutationObserver(scan);
    mutation.observe(document.getElementById("root"), { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(firstFrame);
      mutation.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
