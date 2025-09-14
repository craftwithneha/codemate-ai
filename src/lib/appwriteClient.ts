'use client';

import { Client, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('68c698340005c2b8089a'); // Your project ID

export const account = new Account(client);
