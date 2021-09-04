import React from 'react';

import ActivitiesList from './ActivitiesList';

const Body = (props) => {
    return (
        <div className="container">
            <ActivitiesList
                activities={props.activities}
                handleShowActivity={props.handleShowActivity}
                handleAddActivity={props.handleAddActivity}
                handleDeleteActivities={props.handleDeleteActivities}
                handleDeleteActivity={props.handleDeleteActivity}
            />
        </div>
    );
}

export default Body;