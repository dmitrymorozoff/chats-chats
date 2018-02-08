// @flow
import validator from "validator";

export const reduxFormValidator = {
    validators: {
        required: value => (value ? undefined : "Поле должно быть заполнено"),
        isEmail: value =>
            value && !validator.isEmail(value)
                ? "Неверный формат email адреса"
                : undefined,
        maxLength: max => value =>
            value && value.length > max
                ? `Максимальная длина ${max} символов`
                : undefined,
        minLength: min => value =>
            value && value.length < min
                ? `Минимальная длина ${min} символов`
                : undefined,
        isNumber: value =>
            value && !validator.isNumeric(value) ? "Только цифры" : undefined,
    },
};
