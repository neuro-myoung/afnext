import { RefObject } from "react";

export const useDropdown = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    //Calculate initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    //Check if dropdown would go off right edge of viewport
    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;
    }

    //if still offscreen align to right edge of viewport with padding
    if (left < 0) {
      left = window.innerWidth - dropdownWidth - 16;
    }

    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
