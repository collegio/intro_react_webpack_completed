import React from 'react';

import Activity from './Activity';
import NewActivityForm from './NewActivityForm';

const ActivitiesList = (props) => {
    return (
        <div>
            <div className="list-removeall">
                {props.activities.length <= 0 && <h3>No activities.</h3>}
                {props.activities.length > 0 && <h3>Delete all Activities?</h3>}
                {props.activities.length > 0 && <button className="button button-clear" onClick={props.handleDeleteActivities}>Remove All Activities</button>}
            </div>
            <div className="activity-list">
                    {
                    props.activities.map((activity) => <Activity key={activity.name} activity={activity} handleShowActivity={props.handleShowActivity} handleDeleteActivity={props.handleDeleteActivity} />)
                    }
                
                <NewActivityForm handleAddActivity={props.handleAddActivity} />
            </div>
        </div>
    );
}

export default ActivitiesList;