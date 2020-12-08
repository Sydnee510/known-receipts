import React from 'react'
class LikeButton extends React.Component{
    state = {
        like: 0
    }

    handleClick = () => {
        this.setState({
            like: this.state.like + 1
        })

        
    }

    render(){
        return (
            <div>
                {this.state.like}
                <button onClick={this.handleClick}>Likes</button>
            </div>
        )
    }
}

export default LikeButton;