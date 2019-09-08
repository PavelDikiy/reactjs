import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        const {name, lvl, completed, all, coins} = this.props;

        console.log(coins);

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://www.gravatar.com/avatar/ac0e53fe80b528c0d4a3b9bbd7e2bd91?size=200&d=https%3A%2F%2Fsalesforce-developer.ru%2Fwp-content%2Fuploads%2Favatars%2Fno-avatar.jpg" className="card-img-top" alt="no-avatar" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>lvl</b>: {lvl}</li>
                                <li className="list-group-item"><b>Готово</b>: {completed}</li>
                                <li className="list-group-item"><b>Всего</b>: {all}</li>
                                <li className="list-group-item"><b>Всего бабла</b>: {coins}</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, lvl, completed, all, coins} = state.profileData;

    return {
        name, lvl, completed, all, coins
    };
};

export default connect(mapStateToProps)(Profile);