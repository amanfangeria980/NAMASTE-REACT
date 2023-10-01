import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        // Create State Here! 
        this.state={
            count: 25,
        };
    }

    render(){
        // can also destructure it and use like this:
        // const {count}=this.state and directly use {count}
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
                {/* we do not mutate or change state directly */}
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