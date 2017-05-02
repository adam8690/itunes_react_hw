import React from 'react';


class SongItem extends React.Component {
  render(){
    console.log('songitemprops', this.props)
      
      const list = this.props.songs.map((song, index) => {
        console.log('song', song["im:artist"].label)
        return <li value={index + 1} key={index}>
           <p>{song["im:name"].label}</p>
           <p>Artist: { song["im:artist"].label}</p>  
           
           </li>
      })

      return <div>{list}</div>
    
  }
}

export default SongItem;
