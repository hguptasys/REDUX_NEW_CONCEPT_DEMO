import React, {Component} from "react"

class ErrorBoundries extends Component{
    constructor(){
        super()
        this.state={
            error: null
        }
    }
    static getDerivedStateFromError(){
        return {error: true}
    }
    render(){
        return (
            <div>
                {
                    this.state.error ? <h1>user page is getting crashed </h1> : this.props.children
                }
            </div>
        )
    }
}

export default ErrorBoundries 

