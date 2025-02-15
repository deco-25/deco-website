import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useFallingBarAnimation = (id) => {
  useGSAP(() => {
    if (!id) return; // Prevent errors if no ID is provided

    gsap.fromTo(
      `#${id}`,
      { top: "-100%" },
      { top: "100%", duration: 2, delay: 1, repeat: -1 }
    );
  }, [id]); // Re-run if `id` changes
};

export default useFallingBarAnimation;
