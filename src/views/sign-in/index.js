import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../components/input-field/index";
import { reduxFormValidator } from "../../services/redux-form-validators/";

class SignIn extends PureComponent {
    usernameInput = () => {};
    submitHandler = () => {};
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="registration-page">
                <div className="registration-card">
                    <div className="registration-card__title">Sign In</div>
                    <form
                        className="registration-form"
                        onSubmit={handleSubmit(this.submitHandler)}
                    >
                        <Field
                            name="username"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Username"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <Field
                            name="password"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Password"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <button
                            type="submit"
                            className="button registration-form-item__submit"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: "login",
})(SignIn);
