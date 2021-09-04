import React from 'react';

class Activity extends React.Component {
    constructor(props) {

        // bind the required methods to this
        super(props);
        this.deleteActivity = this.deleteActivity.bind(this);
        this.showActivityModal = this.showActivityModal.bind(this);
    }

    // deleteActivity: used to pass up the activity to delete into the handleDeleteActivity() method
    deleteActivity() {

        // delete the activity via the handler method
        this.props.handleDeleteActivity(this.props.activity);
    }

    showActivityModal() {

        // delete the activity via the handler method
        this.props.handleShowActivity(this.props.activity);
    }

    render() {
        return (
            <div class="activity">
                <div class="activity-info">
                    <p onClick={this.showActivityModal}>{this.props.activity.name} - {this.props.activity.activity}, {this.props.activity.distance}</p>

                    <button 
                        onClick={this.deleteActivity}
                        className="button button-clear"
                    >
                        Remove
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Activity;