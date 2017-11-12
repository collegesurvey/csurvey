import {constants} from '../common/constants'


//data binding helper function
export function binds(data) {
    return function(e) {
        data[e.target.name] = e.target.value;
    }
}

export function get_current_user() {
    return JSON.parse(localStorage.getItem(constants.META));
}