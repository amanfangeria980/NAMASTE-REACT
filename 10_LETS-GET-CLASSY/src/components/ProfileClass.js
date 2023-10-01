import {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "Dummy",
                image: "not found",
                location: "Location"
            },
        };
        console.log("constructor")
    }

    async componentDidMount(){
        // Let's make an API call
        const data=await fetch("https://api.github.com/users/amanfangeria980");
        const json=await data.json();
        this.setState({
            userInfo: json,
        })
        // console.log(json);
        console.log("Component Did Mount"); 
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