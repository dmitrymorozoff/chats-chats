import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import "./style.scss";
import { InputField } from "../../components/input-field/index";

class SignUp extends PureComponent {
    usernameInput = () => {};
    submitHandler = () => {};
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="registration-page">
                <div className="registration-card">
                    <div className="registration-card__title">Sign UP</div>
                    <div className="registration-card__desc">
                        Enter your email address to create your account
                    </div>
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
                        <Field
                            name="email"
                            type="text"
                            className="registration-form__input"
                            component={InputField}
                            placeholder="Email"
                        />
                        <Field
                            name="password"
                            type="text"
                            className="registration-form__input"
                            component={InputField}
                            placeholder="Password"
                        />
                        <Field
                            name="confirm-password"
                            type="text"
                            className="registration-form__input"
                            component={InputField}
                            placeholder="Confirm Password"
                        />
                        <button
                            type="submit"
                            className="button registration-form__submit"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: "registration",
})(SignUp);
