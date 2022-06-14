import axios from "axios";

const CONTACT_API = "http://localhost:4500/contact/";

export function getAll() {
    return axios.get(CONTACT_API);
}
export function get(id) {
    return axios.get(CONTACT_API + id);
}
export function set(comment) {
    return axios.post(CONTACT_API, comment);
}
export function update(comment) {
    return axios.patch(CONTACT_API + comment.id, comment);
}
export function remove(id) {
    return axios.delete(CONTACT_API + id);
}
