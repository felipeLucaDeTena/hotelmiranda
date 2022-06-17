import axios from "axios";

const USERS_API = "http://localhost:4500/users/";

export function getAll() {
    return axios.get(USERS_API);
}
export function get(id) {
    return axios.get(USERS_API + id);
}
export function set(user) {
    return axios.post(USERS_API, user);
}
export function update(id, parcialUser) {
    return axios.patch(USERS_API + id, parcialUser);
}
export function remove(id) {
    return axios.delete(USERS_API + id);
}
