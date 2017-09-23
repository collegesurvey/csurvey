import {CollegeInterface} from "./base";

export class CollegeModel implements CollegeInterface {
    username: string;
    college_name: string;
    location: string;
    email: string;
    phone: string;
    id: string;
    password: string;

    create(resource) {
    }

    update(resource) {
    }

    remove(resource) {
    }

    by_id(resource_id){
    }

    by_ids(resource_ids) {
    }

    by_filter(filter){
    }
}