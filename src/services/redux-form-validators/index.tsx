import * as validator from "validator";

export const reduxFormValidator = {
    validators: {
        required: (value: any) =>
            value ? undefined : "Поле должно быть заполнено",
        isEmail: (value: any) =>
            value && !validator.isEmail(value)
                ? "Неверный формат email адреса"
                : undefined,
        maxLength: (max: number) => (value: string) =>
            value && value.length > max
                ? `Максимальная длина ${max} символов`
                : undefined,
        minLength: (min: number) => (value: string) =>
            value && value.length < min
                ? `Минимальная длина ${min} символов`
                : undefined,
        isNumber: (value: any) =>
            value && !validator.isNumeric(value) ? "Только цифры" : undefined,
    },
};
