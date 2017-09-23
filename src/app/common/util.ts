//data binding helper function
export function binds(data) {
    return function(e) {
        data[e.target.name] = e.target.value;
    }
}