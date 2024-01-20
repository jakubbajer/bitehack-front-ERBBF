const SERVER_IP = "http://192.168.50.40:5000";

export const api = (path: string, requestInit: RequestInit) =>
  fetch(`${SERVER_IP}${path}`, requestInit).then((res) => res.json());
