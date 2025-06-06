import axios from 'axios';

export const key = "0658444623ab548864e7822f3548cfa404c08f40";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api

//d31e1abd81d34ae658b71c87841411316e941872
//https://api-ssl.bitly.com/v4/shorten