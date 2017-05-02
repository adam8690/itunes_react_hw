import React from 'react';
import SongItem from './SongItem'

class SongList extends React.Component {



  render() {
    return (
      <div>
        {console.log('SongList props', this.props)}
        <ol>
        <SongItem songs={this.props.songs}/>
        </ol>  
      </div>
    )
  }
}

export default SongList;