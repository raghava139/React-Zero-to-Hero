import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserTestContext from "./Utils/UserTestContext";

class About extends Component {

    constructor(props) {
        super(props)
        // console.log('parent constructor')
    }

    componentDidMount() {
        // console.log('parent mounting')
    }
    render() {
        // console.log('parent render')
        return (
            <div>
                <UserTestContext.Consumer>
                    {(data) => <h1>{data?.DefaultUserInfo}</h1>}
                </UserTestContext.Consumer>
                About Page
                <User />
                {/* <UserClass name={'testing-name(class-based)'} /> */}
            </div>
        )
    }
}
export default About;