import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContact: {
        reducer(state, {payload}) {
      
          state.push(payload);
          
        },
        prepare(name, number, contacts) {
   
          const normalizedName = name.toLowerCase();
          if (!name.trim() || !number.trim()) {
            toast.error('Please, enter Name and Number', { position: 'top-center' });
            return;
           
          }
         if(contacts.find(({name}) =>name.toLowerCase() === normalizedName)){
          toast.warn(`${name} is already in contacts`);
          return;
         }
          
          return {
            payload: {
              name,
              id: nanoid(),
             number,
            },
          };
        },
         },
        deleteContact: (state,{payload})=> state.filter(contact => contact.id !== payload)
           
       
    },
 
  });

export const { addContact, deleteContact,  } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;