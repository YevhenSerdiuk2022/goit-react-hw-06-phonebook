// import { StatusFilter } from "components/StatusFilter/StatusFilter";
// import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import css from "./AppBar.module.css";
import {Filter} from '../Filter/Filter'
import { ContactsList } from "components/ContactsList/ContactsList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Phonebook</h2>
     <ContactsForm/>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
      <Filter/>  
      <ContactsList/>  
      <ToastContainer autoClose={3000} />   
      </section>
    </header>
  );
};