import axios from "axios";

export const URL_BASE = "http://localhost:3000/";

export async function RequestPostWithCredential(
  url: string,
  token: string,
  dados: any
) {
  const options = {
    method: "POST",
    url: `${URL_BASE}${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      ...dados,
    },
  };

  return await axios(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error);
    });
}
export async function RequestPostWithoutCredential(url: string,dados: any) {
  const options = {
    method: "POST",
    url: `${URL_BASE}${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      ...dados,
    },
  };

  return await axios(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error);
    });
}
export async function RequestGetWithCredential(url: string, token: string) {
  const response = await axios(`${URL_BASE}${url}`, {headers: {Authorization: `Bearer ${token}`,Accept: "application/json","Content-Type": "application/json",},}
  ).then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
  return response;
}
export async function RequestGetWithoutCredential(url: string) {
  const response = await axios(`${URL_BASE}${url}`, {headers: {Accept: "application/json","Content-Type": "application/json",},}
  ).then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
  return response;
  
}