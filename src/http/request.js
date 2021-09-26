import axios from "axios";

// 默认配置
const config = {
  baseURL: "",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  timeout: 1000 * 20,
};

const instance = axios.create(config);

// 请求拦截器
instance.interceptors.request.use(
  (requestConfig) => {
    const { data } = requestConfig;
    return data;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!axios.isCancel(error)) {
      let msg = "网络错误！";
      if (error instanceof Error) {
        msg = error.message;
      }
      alert.error(msg);
    }
    return Promise.reject(error);
  }
);

export default instance;
