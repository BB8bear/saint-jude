import React from 'react';
import Navigation from './components/Navigation';
import Routes from './Routes';


class App extends React.PureComponent {
    render() {
        return(
            <div>
                <Navigation/>
                <Routes/>
            </div>
        );
    }
}

export default App;