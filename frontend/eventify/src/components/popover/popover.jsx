import React, { useState } from "react";
import { usePopper } from "react-popper";
import Portal from "../portal/portal";
import ClickOutside from "./click-outside";

export const Popover = ({
  isOpen,
  reference,
  onClose,
  placement = "bottom-end",
  children,
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(reference, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
      {
        name: "preventOverflow",
        options: {
          padding: 24,
        },
      },
    ],
    placement,
  });

  if (!isOpen) return null;

  return (
    <Portal>
      <ClickOutside
        reference={[popperElement, reference]}
        onClickOutside={onClose}
      >
        {isOpen && (
          <ul
            className={`dropdown-menu shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]`}
            style={{ ...styles.popper }}
            ref={setPopperElement}
            {...attributes.popper}
          >
            {children}
          </ul>
        )}
      </ClickOutside>
    </Portal>
  );
};
