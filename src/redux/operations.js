import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64525eefbce0b0a0f744d446.mockapi.io";

async function fetchContactList(search) {
  const contacts = await axios.get(`/contacts`, {
    params: { search },
  });
  return contacts;
}

async function postContacts(newContatact) {
  const { data } = await axios.post(`/contacts`, newContatact);
  return data;
}

async function deleteContact(contactId) {
  const contact = await axios.delete(`/contacts/${contactId}`);
  return contact;
}

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async search => {
    const contacts = await fetchContactList(search);
    return contacts.data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async data => {
    const contact = await postContacts(data);
    return contact;
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const contact = await deleteContact(contactId);
    return contact.contactId;
  }
);

