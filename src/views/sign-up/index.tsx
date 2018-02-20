import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../components/input-field/index";
import { reduxFormValidator } from "../../services/redux-form-validators/";
import { SignUpActionCreators } from "../../services/redux/root/sign-up/actions";
import "./style.scss";

interface Props {
    handleSubmit: any;
    submitSignUp: any;
    history: any;
}

class SignUp extends React.Component<Props> {
    public submitHandler = (values: any) => {
        this.props.submitSignUp({
            ...values,
            redirect: () => {
                this.props.history.push("/sign-in");
            },
        });
    };
    public render() {
        const { handleSubmit } = this.props;
        return (
            <div className="registration-page">
                <div className="registration-card">
                    <div className="registration-card__title">Sign Up</div>
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

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => {
    return {
        submitSignUp: (values: any) => {
            dispatch(SignUpActionCreators.submitSignUp(values));
        },
    };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(SignUp as any);
export default reduxForm({
    form: "registration",
})(connected as any);
