import { useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { deleteContact } from "redux/contactsSlice";
import {MdDeleteForever} from 'react-icons/md';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));



  return (
    <div className={css.wrapper}>
   
      <p >{contact.name}: {contact.number}</p>
      <Button  onClick={handleDelete}>
        <MdDeleteForever size={18} />
      </Button>
    </div>
  );
};
