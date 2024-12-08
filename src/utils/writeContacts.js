import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log(
      'Contact information has been successfully written to the file.',
    );
  } catch (error) {
    console.error('Error when writing contacts:', error);
  }
};
