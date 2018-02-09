// @flow
import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import "./style.scss";
import { InputField } from "../../components/input-field/index";
import { reduxFormValidator } from "../../services/redux-form-validators/";
import { connect } from "react-redux";
import { SignUpActionCreators } from "../../services/redux/root/sign-up/actions";

type Props = {
    handleSubmit: Function,
    submitSignUp: Function,
};

class SignUp extends PureComponent<Props> {
    submitHandler = values => {
        this.props.submitSignUp({
            ...values,
            redirect: () => {
                this.props.history.push("/sign-in");
            },
        });
    };
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
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Firstname"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <Field
                            name="username"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Username"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <Field
                            name="email"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Email"
                            validate={[
                                reduxFormValidator.validators.isEmail,
                                reduxFormValidator.validators.required,
                            ]}
                        />
                        <Field
                            name="password"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Password"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <Field
                            name="confirmPassword"
                            type="text"
                            className="registration-form-item__input"
                            component={InputField}
                            placeholder="Confirm Password"
                            validate={[reduxFormValidator.validators.required]}
                        />
                        <button
                            type="submit"
                            className="button registration-form-item__submit"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
    return {
        submitSignUp: values => {
            dispatch(SignUpActionCreators.submitSignUp(values));
        },
    };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default reduxForm({
    form: "registration",
})(connected);
