export const BG_ALL_URL = "/bg-all.png";

let preloadPromise: Promise<void> | null = null;

export function preloadBgAllImage(): Promise<void> {
  if (preloadPromise) return preloadPromise;

  preloadPromise = new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const img = new Image();
    img.src = BG_ALL_URL;

    if (img.complete) {
      resolve();
      return;
    }

    img.onload = () => resolve();
    img.onerror = () => resolve();
  });

  return preloadPromise;
}

if (typeof window !== "undefined") {
  preloadBgAllImage();
}
