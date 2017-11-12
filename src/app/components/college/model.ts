import {CollegeInterface} from "./base";

export class CollegeModel implements CollegeInterface {
    username: string;
    college_name: string;
    location: string;
    email: string;
    phone: number;
    id: string;
    password: string;
    
    static create(resource) {
    }

    static update(resource) {
    }

    static remove(resource) {
    }

    static by_id(resource_id){
    }

    static by_ids(resource_ids) {
    }

    static by_name(name){
    }
}
