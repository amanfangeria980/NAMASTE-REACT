import {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location",
            },
        };
        console.log("constructor")
    }

    componentDidMount(){
        // this is what senior developer get paid for, as a maintainer, you have to act like ki remove this setInterval or cleanup the mess you have created only after that I will approve your PR
        this.timer = setInterval(() => {
            console.log("HELLO AMAN") 
        }, 1000);
        console.log("Component Did Mount"); 
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component Unmounted");

    }
    render(){
        console.log("render");
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo?.avatar_url} alt="not found" />
                <h2>Name: {this.state.userInfo?.name}</h2>
                <h2>Location: {this.state.userInfo?.location}</h2>

            </div>
        )
    }

}

export default Profile; 