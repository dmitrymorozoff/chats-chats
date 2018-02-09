// @flow
import React from "react";
import "./style.scss";

export const InputField = (field: any) => {
    let errorClass = "";
    if (field.meta.touched && field.meta.error) {
        errorClass = "registration-form-item--error";
    }
    return (
        <div className={`registration-form-item ${errorClass}`}>
            <input {...field.input} {...field} />
        </div>
    );
};
