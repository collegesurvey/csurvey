import { UserView } from "./user";
import { GuestView } from "./guest";

export class Factory {

    getComponent(name) {
        if (name == "Guest") {
            return GuestView
        } else {
            return UserView
        }
    }
}
