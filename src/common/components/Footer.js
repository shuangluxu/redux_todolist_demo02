import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container " style={{backgroundColor: 'blue'}}>
                <div className="row">
                    <div className="navbar navbar-fixed-bottom" style={{background: '#eeeeee'}}>
                        <p className="text-center strong">CopyRight:it-force 2019</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer