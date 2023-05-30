import axios from "axios";

export const callApis = axios.create({baseURL: "https://646e37d69c677e23218b4bde.mockapi.io"})
export const callApisTodos = axios.create({baseURL: "https://64722f466a9370d5a41b2130.mockapi.io"})