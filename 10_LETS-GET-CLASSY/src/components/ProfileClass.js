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
        // This setInverval will keep on printing this, even if I change my page or move to another page, that's why we have to do some cleanup after the Component is Unmounted - this is the answer to why we should unmount our component
        this.timer = setInterval(() => {
            console.log("HELLO AMAN") 
        }, 1000);
        console.log("Component Did Mount"); 
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        // Clearing our setInterval used above
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