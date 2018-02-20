import { History } from "history";
import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Field, reduxForm } from "redux-form";
import { Account, Store } from "services/redux/root/interfaces/IStore";
import { InputField } from "../../components/input-field/index";
import { reduxFormValidator } from "../../services/redux-form-validators/";
import { SignInActionCreators } from "../../services/redux/root/sign-in/actions";

interface Props {
    handleSubmit: any;
    submitSignIn: any;
    history: History;
    account: Account;
}

class SignIn extends React.Component<Props> {
    public componentWillReceiveProps(nextProps: Props) {
        if (nextProps.account.isAuth) {
            this.props.history.push("/chat");
        }
    }
    public submitHandler = (values: any) => {
        this.props.submitSignIn({
            ...values,
            redirect: () => {
                this.props.history.push("/");
            },
        });
    };
    public render() {
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
                            type="password"
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

const mapStateToProps = (state: Store) => ({
    account: state.account,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitSignIn: (values: any) => {
            dispatch(SignInActionCreators.submitSignIn(values));
        },
    };
};

const connected = withRouter(connect(mapStateToProps, mapDispatchToProps)(
    SignIn as any,
) as any);

export default reduxForm({
    form: "login",
})(connected as any);
