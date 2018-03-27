



// class Header extends React.Component {
//     render() {
        // return (
        //     <div>
        //         <h1>{this.props.title}</h1>
        //         <h2>{this.props.subtitle}</h2>
        //     </div>
        // );
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: "This is the default title."
};

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.saySomething = this.saySomething.bind(this);
    }
    saySomething() {
        alert(this.props.children);
    }
    render() {
        return (
            <div>
                <button onClick={this.saySomething}>Say Something</button>
            </div>
        );
    }
}

class FreeAgentTracker extends React.Component {
    render() {
        const theTitle = "Free Agent Tracker";
        const theSubtitle = "Get active after work!";
        return (
            <div>
                <Header title={theTitle} subtitle={theSubtitle} />
                <Body>Hey there you!</Body>
            </div>
        );
    }
}

ReactDOM.render(<FreeAgentTracker />, document.getElementById('app'));