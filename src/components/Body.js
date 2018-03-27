import React from 'react';

import PlayersList from './PlayersList';

const Body = (props) => {
    return (
        <div className="container">
            <PlayersList
                players={props.players}
                handleShowPlayer={props.handleShowPlayer}
                handleAddPlayer={props.handleAddPlayer}
                handleDeletePlayers={props.handleDeletePlayers}
                handleDeletePlayer={props.handleDeletePlayer}
            />
        </div>
    );
}

export default Body;