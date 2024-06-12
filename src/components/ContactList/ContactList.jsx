import PropTypes from 'prop-types';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
    if (contacts.length === 0) {
        return <p className={css.contactsNotFound} >No contacts found...</p>;
    } else {
        return (
            <div>
                <ul className={css.contactList}>
                    {contacts.map(contact => (
                        <Contact key={contact.id} name={contact.name} number={contact.number} deleteContact={deleteContact} id={contact.id} />
                    ))}
                </ul>
            </div>
        );
    }
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default ContactList;
