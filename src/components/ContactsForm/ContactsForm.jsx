import { useDispatch, useSelector,} from "react-redux";
import { Button } from "components/Button/Button";
import { nanoid } from "@reduxjs/toolkit";
import css from "./ContactsForm.module.css";
import {MdContactPhone} from 'react-icons/md';
import { addContact } from "redux/contactsSlice";
import { getContact } from "redux/selectors";

const inputNameId = nanoid();
const inputNumberId = nanoid();

export const ContactsForm = () => {
  const dispatch = useDispatch();
 const contacts = useSelector(getContact);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number, contacts));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.contactLabel} htmlFor={inputNameId}>
        Name
      </label>
      <input
        className={css.field}
        type="text"
        name="name"
        id={inputNameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Enter name..."
      />
      <label className={css.contactLabel} htmlFor={inputNumberId}>
        Number
      </label>
      <input
        className={css.field}
        type="tel"
        name="number"
        id={inputNumberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button type="submit">
      <MdContactPhone style={{ marginRight: 5 }} />
        Add Contact
        </Button>
    </form>
  );
};
