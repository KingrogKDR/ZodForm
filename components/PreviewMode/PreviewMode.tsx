import React from "react";

const PreviewMode = () => {
  return (
    <div className="flex gap-3 items-center md:border-l-2 md:border-gray-300 md:pl-10">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors"></div>
        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
      </label>
      <span>Preview</span>
    </div>
  );
};

export default PreviewMode;
