import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been deleted.');
  } catch (err) {
    console.error('Error deleting contacts:', err);
  }
};

removeAllContacts();
