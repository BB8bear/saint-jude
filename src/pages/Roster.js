import React from 'react';
import Profile from '../components/Profile';

class Roster extends React.PureComponent {
    render() {
        return(
            <div className="container" align="center">
                <div>
                    <h1>Company Roster</h1>
                    <p>
                        Herein are listed , by their order of induction, the members of the Company of Saint Jude, their rank in the Company and Arts studied.
                    </p>
                </div>
                <div>
                    <table>
                        <tr>
                            <td><Profile /></td>
                            <td><Profile /></td>
                            <td><Profile /></td>
                        </tr>
                        <tr>
                            <td><Profile /></td>
                            <td><Profile /></td>
                            <td><Profile /></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Roster;