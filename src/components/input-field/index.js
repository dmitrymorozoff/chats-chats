import React from "react";

export const InputField = field => (
    <div>
        <input {...field.input} {...field} />
        {field.meta.touched &&
            field.meta.error && (
                <span className="input-error">{field.meta.error}</span>
            )}
    </div>
);
