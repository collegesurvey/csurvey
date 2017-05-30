var m = require("mithril")
var CollegeModel = require("../models/college.js")


var CollegeView = {
    view: function(){
        return (
            m(".school-neaby-map", 
                m(
                    "iframe", {
                        allowfullscreen:'',
                        frameborder: '0', 
                        height: '600', 
                        src: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15552.48458032294!2d77.6478851!3d12.96409905!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1495293009481', 
                        width:'800',
                        style: {"border": "0"}
                    }
                )
            )
        )
    }
}

module.exports = CollegeView
