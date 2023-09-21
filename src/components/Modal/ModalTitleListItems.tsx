import { ReactNode } from "react";

type ModalTitleListItemsProps = {
  items: ReactNode[];
};

export default function ModalTitleListItems({
  items
}: ModalTitleListItemsProps) {
  return (
    <div className="flex flex-row gap-1 items-center overflow-hidden text-ellipsis">
      {items.map((item, idx) => {
        return (
          <>
            {item}
            {idx !== items.length - 1 && (
              <span className="w-auto flex-shrink">/</span>
            )}
          </>
        );
      })}
    </div>
  );
}
