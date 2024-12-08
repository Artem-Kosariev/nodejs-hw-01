import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
  } catch (err) {
    console.error('Error while receiving contacts:', err);
  }
};

getAllContacts();
