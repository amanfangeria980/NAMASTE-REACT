import {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 25,
        };
        console.log("constructor")
    }

    async componentDidMount(){
        // Let's make an API call
        const data=await fetch("https://api.github.com/users/amanfangeria980");
        const json=await data.json();
        console.log(json);
        console.log("Component Did Mount"); 
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: 1,
                    })
                }}>Set Count</button>
            </div>
        )
    }

}

export default Profile;
