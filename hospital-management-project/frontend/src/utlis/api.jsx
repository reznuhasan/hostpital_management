import axios from "axios";

export const apiURI=axios.create({
    baseURL:"http://localhost:8000/api/v1/"
})

