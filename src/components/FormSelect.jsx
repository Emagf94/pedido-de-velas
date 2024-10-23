import React from 'react';

export default function FormSelect({ label, value, onChange, options, required = false }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg"
        required={required}
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}