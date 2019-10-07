import React from 'react';

class Home extends React.PureComponent {
    render() {
        return(
            <div className="container" align="center">
                <img src="/st_jude_logo.png" alt="Company of Saint Jude, God Help Us All. A sailboat in a circle with three weapons at the top."></img>
                <p>
                    "The Company of St. Jude is a group dedicated to the study of historic combat primarily within the auspices of the Society of Creative Anachronism. Taking inspiration from the renaissance fencing guilds and militia companies of western Europe, we focus mainly on combat but also explore other aspects of reenactment including arts and crafts of the period. We strive to present an accurate presentation, using techiques and weapons as appropriate. Most of us concentrate on the late 16th and early 17th centuries."
                </p>
            </div>
        );
    }
}

export default Home;