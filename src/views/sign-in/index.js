import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../components/input-field/index";

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
                            name="firstname"
                            type="text"
                            className="registration-form__input"
                            component={InputField}
                            placeholder="Firstname"
                        />
                        <Field
                            name="username"
                            type="text"
                            className="registration-form__input"
                            component={InputField}
                            placeholder="Username"
                        />
                        <button
                            type="submit"
                            className="button registration-form__submit"
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
