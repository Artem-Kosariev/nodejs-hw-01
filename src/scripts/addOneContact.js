import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    existingContacts.push(newContact);
    await writeContacts(existingContacts);
    console.log('Added one contact.');
  } catch (err) {
    console.error('Error adding contact:', err);
  }
};

addOneContact();
