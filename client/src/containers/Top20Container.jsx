import React from 'react';
import SongList from '../components/SongList';

class Top20Container extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
  const request = new XMLHttpRequest()
  request.open("GET", url)

  request.onload = () => {
    if(request.status === 200){
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      console.log('data', data)
      this.setState( {songs: data.feed.entry} )
    }
  }
  request.send()
}

  render(){
    return (
      <div>
        <h2>iTunes UK Top 20</h2>
        {console.log('container songs', this.state.songs)}
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default Top20Container;