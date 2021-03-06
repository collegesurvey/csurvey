import {CollegeInfoModel} from '../collegeInfo/model'

export class ArticleModel {

    static get(resource) {
        return {
            id: 12,
            body: "this is a article with id 12",
            createdAt: "22-6-2017",
            modifiedAt: "23-6-2017"
        }
    }

    static update(id, data) {
        return data
    }

    static create(resource) {
        var college = CollegeInfoModel.by_name(resource.name)
        if (!college) {
            console.log("Collge found lets get rollin")
            CollegeInfoModel.create(resource)
        } else {
            // create it here
            console.log("Article create is not implemented")
        } 
    }

    static remove(id) {
        return id
    }

    static list(resource) {
        return [
            {
                id: 1,
                body: "this is a article with id 1",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 2,
                body: "this is a article with id 2",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 3,
                body: "this is a article with id 3",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            },
            {
                id: 4,
                body: "this is a article with id 4",
                createdAt: "22-6-2017",
                modifiedAt: "23-6-2017"
            }
        ]
    }
}
