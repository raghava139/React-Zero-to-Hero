import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'sample'
            }

        }
        // console.log(this.props.name + 'constructor')
    }

    async componentDidMount() {
        // const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
        // const json = await data.json();
        // this.setState({ userInfo: json })
        console.log('didMount')
       this.timer = setInterval(()=>{
            console.log("setInterval started")
        },1000)
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('update')
    }

    componentWillUnmount(){
        console.log('unmount')
        clearInterval(this.timer)
    }
    render() {
        // console.log(this.props.name + 'render')
        console.log('render')
        const { name } = this.state.userInfo
        return (
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h3>Location: Hyderabad</h3>
                <h3>Email: Raghava@gmail.com</h3>
            </div>
        )
    }
}
export default UserClass;