import React from "react";
import DraggableItem from "../ui/DraggableItem";
import Image from "next/image";

interface FormBuilderSidebarProps {
  availableElements: FormElement[];
  isOpen: boolean;
  onToggle: () => void;
}
const BuilderSidebar = ({
  availableElements,
  isOpen,
  onToggle,
}: FormBuilderSidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <div className="font-[Poppins] text-xs md:hidden p-4 bg-white border-b">
        <button
          onClick={onToggle}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {isOpen ? "Hide Elements" : "Show Elements"}
        </button>
      </div>

      {/* Sidebar with Available Elements */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } font-[Poppins] md:block w-full md:w-64 bg-gray-600 text-white shadow-md overflow-y-auto ${
          isOpen ? "h-64" : ""
        } md:h-auto`}
      >
        <h2 className="text-lg font-semibold shadow p-4">Form Elements</h2>

        <div className="text-xs">
          {availableElements.map((element, index) => (
            <DraggableItem key={index} id={element.id} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BuilderSidebar;
