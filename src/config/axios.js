import axios from "axios";
import { HOST_URL } from "./env";

axios.defaults.baseURL = HOST_URL;

export default axios;
