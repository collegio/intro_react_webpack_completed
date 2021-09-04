import React from 'react';
import Modal from 'react-modal';
import Header from './Header';
import Body from './Body';

class ActivityTracker extends React.Component {
    constructor(props) {
        super(props);

        // bind the required methods to this
        this.handleAddActivity = this.handleAddActivity.bind(this);
        this.handleDeleteActivities = this.handleDeleteActivities.bind(this);
        this.handleDeleteActivity = this.handleDeleteActivity.bind(this);
        this.handleShowActivity = this.handleShowActivity.bind(this);
        this.closeModal = this.closeModal.bind(this);

        // Set the initial state of the activities here. Even though we're not directly
        // rendering it inside of this component, we will be performing almost all of
        // the functionality of it at this level.
        this.state = {
            activities: [],
            curActivity: {}
        };
    }

    // componentDidMount: we're going to use this to retrieve our activities from local storage
    componentDidMount() {

        try {
            const activityJSON = localStorage.getItem('activities');
            const activities = JSON.parse(activityJSON);

            if (activities) {
                this.setState(() => ({ activities }));
            }
        } catch (e) {
            // No action required.
        }
    }

    // componentDidUpdate: we're going to use this to save our updated activity state in local storage
    componentDidUpdate(prevProps, prevState) {

        if (prevState.activities.length !== this.state.activities.length) {

            const activityJSON = JSON.stringify(this.state.activities);
            localStorage.setItem('activities', activityJSON);
        }
    }

    // handleAddActivity: Used to add a new activity to the list of activities
    handleAddActivity(activity) {

        if (!activity.name) {
            return 'Please enter a valid activity name.';
        }

        // update the state
        this.setState((prevState) => {
            return {
                activities: prevState.activities.concat(activity)
            };
        });
    }

    // handleDeleteActivities: Used to clear all activities from the list
    handleDeleteActivities() {

        // update the state
        this.setState((prevState) => {
            return {
                activities: []
            };
        });
    }

    // handleDeleteActivity: Used to remove a specific activity from the list
    handleDeleteActivity(activity) {

        const newActivityList = this.state.activities.filter((theActivity) => {
            if (theActivity.name == activity.name) {
                return false;
            }
            else {
                return true;
            }
        });

        // update the state
        this.setState((prevState) => {
            return {
                activities: newActivityList
            };
        });
    }

    handleShowActivity(activity) {
        this.setState((prevState) => {
            return {
                curActivity: activity,
                modalIsOpen: true
            }
        })
    }

    closeModal() {
        this.setState((prevState) => {
            return {
                modalIsOpen: false
            }
        })
    }
    
    render() {
        return (
            <div>
                <Header>Activity Tracker</Header>
                <Body 
                    handleAddActivity={this.handleAddActivity}
                    handleShowActivity={this.handleShowActivity}
                    handleDeleteActivities={this.handleDeleteActivities}
                    handleDeleteActivity={this.handleDeleteActivity}
                    activities={this.state.activities}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Show Activity Modal"
                    className="modal"
                >
                    <h2>{this.state.curActivity.name}</h2>
                    <h3>{this.state.curActivity.activity}</h3>
                    <p><strong>Distance: </strong>{this.state.curActivity.distance}</p>
                    <button className="button" onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }
}

export default ActivityTracker;