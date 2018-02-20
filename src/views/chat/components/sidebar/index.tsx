import * as React from "react";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";
import { ContactsActionCreators } from "services/redux/root/contacts/actions";
import { Account, Contact, Store } from "services/redux/root/interfaces/IStore";
import { AccountItem } from "../../../../components/account-item/";

interface Props {
    fetchContacts: any;
    account: Account;
    contacts: Contact[];
}

class Siderbar extends React.PureComponent<Props> {
    public componentDidMount() {
        const { username } = this.props.account.data.user;
        this.props.fetchContacts(username);
    }
    public renderContacts = () => {
        const contacts = [];
        for (const contact of this.props.contacts) {
            contacts.push(
                <AccountItem {...contact} key={contact._id.toString()} />,
            );
        }
        return contacts.length > 0 ? (
            contacts
        ) : (
            <HashLoader color={"#3bd077"} />
        );
    };
    public render() {
        return <div className="sidebar">{this.renderContacts()}</div>;
    }
}

const mapStateToProps = (state: Store) => ({
    contacts: state.contacts,
    account: state.account,
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContacts: (username: string) => {
            dispatch(ContactsActionCreators.fetchAll(username));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Siderbar as any);
