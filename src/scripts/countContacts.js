import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Quantity of contacts: ${contacts.length}`);
  } catch (err) {
    console.error('Error when counting contacts:', err);
  }
};

countContacts();
