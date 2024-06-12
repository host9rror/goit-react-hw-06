import PropTypes from 'prop-types';
import { FaPhone, FaUser } from "react-icons/fa6";
import css from "./Contact.module.css"

const Contact = ({ name, number, id, deleteContact }) => {
    return (
        <li className={css.contactItem}>
            <div className={css.contactContainer}>
                <div>
                    <div>
                        <h2 className={css.contactText}><FaUser /> {name}</h2>
                    </div>
                    <div>
                        <h2 className={css.contactText}><FaPhone /> {number}</h2>
                    </div>
                </div>
                <button onClick={() => deleteContact(id)} type="button" className={css.deleteBtn}>Delete</button>
            </div>
        </li>
        
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired 
};

export default Contact;
