declare interface FormElement {
  id: string;
  type:
    | "text"
    | "email"
    | "number"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | string;
  label: string;
  imgSrc: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select, checkbox, radio
  defaultValue?: string | string[] | boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    custom?: string;
  };
}

declare interface FormConfig {
  title: string;
  elements: FormElement[];
  settings?: {
    submitButtonText?: string;
    showProgress?: string;
    redirectUrl?: string;
    enableCaptcha?: boolean;
    theme?: string;
  } 
}
