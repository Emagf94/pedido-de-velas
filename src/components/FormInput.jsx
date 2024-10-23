import React from 'react';

export default function FormInput({ label, type = "text", value, onChange, required = false, readOnly = false, min, className = "" }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        min={min}
        className={`w-full px-3 py-2 border rounded-lg ${readOnly ? 'bg-gray-100' : ''} ${className}`}
      />
    </div>
  );
}