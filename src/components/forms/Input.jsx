import { useId, forwardRef } from "react";

/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {(s:string) => void} onChange
 * @returns
 */

export const Input = forwardRef(function Input(
  { placeholder, value, onChange, label },
  ref
) {
  const id = useId();

  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
});
