import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            username : '',
            comments: '',
            topic : 'Vue'
        }
    }

    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea cols="30" rows="10" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Select Tag</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            )
    }
}

export default Form