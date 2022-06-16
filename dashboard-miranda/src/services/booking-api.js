import axios from "axios";

const BOOKINGS_API = "http://localhost:4500/bookings/";

export function getAll() {
    return axios.get(BOOKINGS_API);
}
export function get(id) {
    return axios.get(BOOKINGS_API + id);
}
export function set(booking) {
    return axios.post(BOOKINGS_API, booking);
}
export function update(id, parcialBooking) {
    return axios.patch(BOOKINGS_API + id, parcialBooking);
}
export function remove(id) {
    return axios.delete(BOOKINGS_API + id);
}
