var user = {
    name: 'Rob',
    occupation: 'App Developer',
    skill_level: 'intermediate'
};

// var template = (
//     <div>
//        <h1>Hey {user.name}</h1>
//        <p>Let's get started!</p>
//        {user.skill_level == 'basic' && <p>Remember to ask questions!</p>}
//     </div>
// );  // Will only print the header and first paragraph


// create an initial counter variable
// let counter = 10;

// // create the event function
// const countdown = () => {
//     counter--;
//     console.log(counter);
// };

// // use the event arrowfunction inside of the button
// const template = (
//     <div>
//        <h1>Countdown!</h1>
//        <p>T-Minus: {counter} seconds.</p>
//        <button onClick={countdown}>Next</button>
//     </div>
// );


// const formDidSubmit = (e) => {
//     e.preventDefault();

//     const theName = e.target.elements.yourName.value;
//     if (theName) {
//         console.log(theName);
//     }
// };

// const template = (
//     <div>
//        <h1>My Form!</h1>
//        <form onSubmit={formDidSubmit}>
//            <input type="text" name="yourName" />
//            <button>Submit Your Name</button>
//         </form>
//     </div>
// );

// const arrayOfJSX = [
//     <p key="first">My first paragraph!</p>,
//     <p key="second">My second paragraph!</p>,
//     <p key="third">My third paragraph!</p>
// ];


const roster = ['Sidney Crosby', 'Evgeni Malkin', 'Phil Kessel'];
const template = (
    <ul>
        { roster.map((player) => <li key={player}>Name: {player}</li>) }
    </ul>
);


ReactDOM.render(template, document.getElementById('app'));

