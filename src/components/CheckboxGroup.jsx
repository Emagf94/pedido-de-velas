import React from 'react';

export default function CheckboxGroup({ label, options, selectedValues, onChange, columns = 2 }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className={`grid grid-cols-${columns} gap-2`}>
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={(e) => {
                const newValues = e.target.checked
                  ? [...selectedValues, option]
                  : selectedValues.filter(v => v !== option);
                onChange(newValues);
              }}
              className="form-checkbox"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}