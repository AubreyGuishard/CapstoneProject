import React from 'react';
import Player from '../Player/Player';
const PlayerList = ({game}) => {
    let PlayerUserName = game.players.map((player) => <Player player={player}/>)
    console.log(PlayerUserName)

    return (<div><button onClick={PlayerUserName}>PlayerUserName</button></div>  );
}
 
export default PlayerList;