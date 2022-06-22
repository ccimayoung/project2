import axios from "axios";

import { FieldValues } from "react-hook-form";

import setupInterceptorsTo from "./Interceptiors";

const baseApi = axios.create({
  baseURL: "http://13.209.65.162/api",
  timeout: 1000,
});

const callApi = setupInterceptorsTo(baseApi);

const joinApi = async (data: FieldValues) => {
  const ja = await callApi.post("/signup", data);
  return ja;
};

const loginApi = async (data: FieldValues) => {
  const la = await callApi.post("/login", data);
  return la;
};

const logoutApi = async () => {
  const loa = await callApi.get("/logout");
  return loa;
};

const postWriteApi = async (forms: FormData) => {
  // console.log("aa", tokenUse);
  const pwa = await callApi.post("/boards", forms, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return pwa;
};

const deleteApi = async (Id: number) => {
  const da = await callApi.delete(`/boards/${Id}`);
  return da;
};

const editApi = async (Id: number, formData: FormData) => {
  const ea = await callApi.put(`/boards/${Id}`, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return ea;
};

const likeApi = async (Id: number) => {
  const la = await callApi.post(`/boards/${Id}/likes`);
  return la;
};

const unlikeApi = async (Id: number) => {
  const la = await callApi.delete(`/boards/${Id}/likes`);
  return la;
};

export const registerApi = {
  joinApi: (data: FieldValues) => joinApi(data),
  loginApi: (data: FieldValues) => loginApi(data),
  logoutApi: () => logoutApi(),
};

export const boardApi = {
  postWriteApi: (data: FormData) => postWriteApi(data),
  deleteApi: (Id: number) => deleteApi(Id),
  editApi: (Id: number, formData: FormData) => editApi(Id, formData),
  likeApi: (Id: number) => likeApi(Id),
  unlikeApi: (Id: number) => unlikeApi(Id),
};
