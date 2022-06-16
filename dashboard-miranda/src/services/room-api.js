import axios from "axios";

const ROOMS_API = "http://localhost:4500/rooms/";

export function getAll() {
    return axios.get(ROOMS_API);
}
export function get(id) {
    return axios.get(ROOMS_API + id);
}
export function set(room) {
    return axios.post(ROOMS_API, room);
}
export function update(id, parcialRoom) {
    return axios.patch(ROOMS_API + id, parcialRoom);
}
export function remove(id) {
    return axios.delete(ROOMS_API + id);
}
