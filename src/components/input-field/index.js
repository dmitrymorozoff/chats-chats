import React from "react";
import "./style.scss";

export const InputField = field => (
    <div className="registration-form-item">
        <input {...field.input} {...field} />
        {field.meta.touched &&
            field.meta.error && (
                <span className="input-error">{field.meta.error}</span>
            )}
    </div>
);
