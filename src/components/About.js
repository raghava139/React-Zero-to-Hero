import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props) {
        super(props)
        // console.log('parent constructor')
    }

    componentDidMount(){
        // console.log('parent mounting')
    }
    render() {
        // console.log('parent render')
        return (
            <div>
                About Page
                <User/>
                {/* <UserClass name={'testing-name(class-based)'} /> */}
            </div>
        )
    }
}
export default About;