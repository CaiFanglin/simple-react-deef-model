import React from 'react';
// import logo from './logo.svg';
import './App.css';

import deef from 'deef';
const Base = deef();
Base.model({
    namespace: 'cfl',
    state: {
        num: 0
    },
    reducers: {
        plus(state, action) {
            return {
                ...state,
                num: state.num + action.payload
            };
        },
        reduce(state, action) {
            return {
                ...state,
                num: state.num - action.payload
            };
        }
    }
})

const App = Base.connect(({cfl:num}) => {return num}, {
    onPlus({dispatch}, value) {
        dispatch(
            {
                type: 'cfl/plus',
                payload: value
            }
        )
    },
    onReduce({dispatch}, value) {
        dispatch(
            {
                type: 'cfl/reduce',
                payload: value
            }
        )
    }
})(({num, ...callbacks}) => {
    const {onPlus, onReduce} = callbacks;
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => onReduce(3)}>-3</button>
            <button onClick={() => onPlus(2)}>+2</button>
        </div>
    )
});

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
export { Base };
export default App;
