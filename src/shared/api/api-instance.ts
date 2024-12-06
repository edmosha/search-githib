import axios from 'axios';
import * as process from 'node:process';

export const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: process.env?.GIT_TOKEN
      ? 'Bearer ' + process.env.GIT_TOKEN
      : undefined,
  },
});
