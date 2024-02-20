import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.contact} key={id}>
      <div className={css.contactTitle}>
        <p className={css.contactName}>
          <FaUserLarge className={css.icon} />
          {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btnContact} type="submit" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
