import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";
import React from "react";

interface DraggableItemsProps {
  id: string;
  element: FormElement;
}

const DraggableItem = ({ id, element }: DraggableItemsProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: element,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`bg-gray-700 text-gray-50 p-3 border-b border-gray-50 cursor-move hover:bg-orange-500 flex items-center gap-3 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <Image src={element.imgSrc} alt={element.label} width={24} height={24} />
      {element.label}
    </div>
  );
};

export default DraggableItem;
