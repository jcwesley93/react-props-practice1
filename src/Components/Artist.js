import React from "react"; 

class Artist extends React.Component{
    render() {
        return <div>
            <h2>{this.props.artistName}</h2>
            <h3>Most Popular Song:{this.props.artistSong}</h3>
            <img src={this.props.artistImage} />
            
            </div>
    }
}

export default Artist;