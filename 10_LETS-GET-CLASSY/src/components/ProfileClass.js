import {Component} from 'react';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 25,
        };
        console.log("constructor")
    }

    componentDidMount(){
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


/* If there is two another child components inside ProfileClass render method, this will the lifecycle process for them, for eg,
ProfileClass
render(
    <Profile1/>
    <Profile2/>
)

* Parent - Constructor
* Parent - Render
*   First Child - Constructor
*   First Child - Render
*   Second Child - Constructor
*   Second Child - Render
*   First Child - componentDidMount 
*   Second Child - componentDidMount 
* Parent - componentDidMount 
*This above discrepancy is happening because, as we know render phase is faster as compared to commit phase, because in commit phase, we have to update the dom. So that's why to be fast, react first batches up all the rendering and then go to commit phase for multiple sibling components.

Reference : Checkout React Lifecycle Diagram
*/