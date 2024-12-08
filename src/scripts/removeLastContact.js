import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('The last contact has been deleted.');
    } else {
      console.log('There are no contacts to delete.');
    }
  } catch (err) {
    console.error('Error deleting the last contact:', err);
  }
};

removeLastContact();
