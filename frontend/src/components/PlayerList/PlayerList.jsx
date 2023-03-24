import React from 'react';
import Player from '../Player/Player';
const PlayerList = ({game}) => {
    let PlayerUserName = game.players.map((player) => <Player player={player}/>)

    return (<div>{PlayerUserName}</div>  );
}
 
export default PlayerList;