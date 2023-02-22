

export const getContact = state => state.contacts;

export const getFilter = state => state.filter;

export const  getFilterContacts = ({contacts, filter}) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    
}