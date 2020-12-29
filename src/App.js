import React, {Component} from 'react'

class Contador extends Component{
  state = {
    video: {
      title: 'Super Video Test',
      likes: 0
    }
  }

  add = () => {
    this.setState((state)=> ({
      video: {
        ...state.video,
        likes: state.video.likes + 1
      }
    }))
  }

  render(){
    return(
      <div>
        <h1>
          {this.state.video.title}
        </h1>
        <button onClick = {this.add}>
          Likes: ({this.state.video.likes})
        </button>
      </div>
    )
  }
}

const App = () => (
  <div>
    <Contador />
  </div>
)

export default App
