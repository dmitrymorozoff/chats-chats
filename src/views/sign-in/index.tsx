import * as React from "react";
import { Field, reduxForm } from "redux-form";
import { InputField } from "../../components/input-field/index";
import { reduxFormValidator } from "../../services/redux-form-validators/";
import { connect } from "react-redux";
import { SignInActionCreators } from "../../services/redux/root/sign-in/actions";

type Props = {
    handleSubmit: Function;
    submitSignIn: Function;
    history: any;
};

class SignIn extends React.PureComponent<Props> {
    submitHandler = (values: any) => {
        this.props.submitSignIn({
            ...values,
            redirect: () => {
                this.props.history.push("/");
            },
        });
    };
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

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => {
    return {
        submitSignIn: (values: any) => {
            dispatch(SignInActionCreators.submitSignIn(values));
        },
    };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(SignIn as any);
export default reduxForm({
    form: "login",
})(connected as any);
