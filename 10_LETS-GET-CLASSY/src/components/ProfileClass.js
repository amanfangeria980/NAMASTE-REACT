import React from 'react';


// first of all constructor is called, then, render is done and after that componentDidMount is called.


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 25,
        };
        console.log("constructor")
    }

    componentDidMount(){
        console.log("Component Did Mount"); 
        // Best place to make an API call. or useEffect alternative
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