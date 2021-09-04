import React from 'react';

class NewActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.formDidSubmit = this.formDidSubmit.bind(this);

        // set an error state for form submission
        this.state = {
            error: undefined
        };
    }

    // The form was submitted. We need to wrap the form submission into a function 
    // so that we can attach the form data
    formDidSubmit(e) {
        e.preventDefault();

        const activity = {
            name: e.target.elements.yourName.value.trim(),
            activity: e.target.elements.yourActivity.value.trim(),
            distance: e.target.elements.yourDistance.value.trim()
        };
        const error = this.props.handleAddActivity(activity);

        // update the state
        this.setState(() => {
            return { error };
        });

        if (!error) {
            e.target.elements.yourName.value = '';
            e.target.elements.yourActivity.value = 'Running';
            e.target.elements.yourDistance.value = '';
        }
    }

    render() {
        return (
            <div className="new-activity-form">
                <h3>Add a New Activity</h3>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formDidSubmit}>
                    <div className="form-group flex-form-group">
                        <label>Name: </label>
                        <input type="text" name="yourName" />
                    </div>
                    <div className="form-group flex-form-group">
                        <label>Activity: </label>
                        <select name="yourActivity">
                            <option value="Running">Running</option>
                            <option value="Walking">Walking</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                    </div>
                    <div className="form-group flex-form-group">
                        <label>Distance: </label>
                        <input type="text" name="yourDistance" />
                    </div>
                    <div className="form-group">
                        <button className="button item-block">Submit Activity</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewActivityForm;