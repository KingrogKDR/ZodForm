import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import BuilderSidebar from "../Sidebar/BuilderSidebar";

const availableElements: FormElement[] = [
  {
    id: "text",
    type: "text",
    label: "Text Input",
    imgSrc: "/icons/textInput.svg",
    placeholder: "Enter text",
  },
  {
    id: "email",
    type: "email",
    label: "Email Input",
    imgSrc: "/icons/email.svg",
    placeholder: "Enter email",
  },
  {
    id: "number",
    type: "number",
    label: "Number Input",
    imgSrc: "/icons/number.svg",
    placeholder: "Enter number",
  },
  {
    id: "textarea",
    type: "textarea",
    label: "Text Area",
    imgSrc: "/icons/textArea.svg",
    placeholder: "Enter long text",
  },
  {
    id: "select",
    type: "select",
    label: "Dropdown",
    imgSrc: "/icons/dropdown.svg",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    id: "checkbox",
    type: "checkbox",
    label: "Checkbox",
    imgSrc: "/icons/checkbox.svg",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    id: "radio",
    type: "radio",
    label: "Radio Button",
    imgSrc: "/icons/radio.svg",
    options: ["Option 1", "Option 2", "Option 3"],
  },
];

const FormBuilder = ({ formId }: { formId: string;  }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DndContext>
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {/* Sidebar component */}
        <BuilderSidebar
          availableElements={availableElements}
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
        />

        {/* Main Form building area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white w-full rounded-lg shadow-md p-4 md:p-6 min-h-full font-[Inter]">
            <input
              type="text"
              className="text-xl md:text-2xl font-bold border-b-2 border-gray-200 pb-2 w-full md:w-auto mb-4 md:mb-0 focus:outline-none focus:border-blue-500"
              placeholder="Form Title"
            />
            <button
              disabled={isSaving}
              className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
                isSaving ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSaving ? "Saving..." : "Save Form"}
            </button>
          </div>

          <div></div>
        </div>
        <div></div>
      </div>
    </DndContext>
  );
};

export default FormBuilder;
