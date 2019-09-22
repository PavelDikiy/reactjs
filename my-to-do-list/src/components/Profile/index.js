// # Core
import React, { Component } from "react";

// # Redux
import { connect } from "react-redux";

// # Components
import Icon from '../Icon';

// # Instruments
import ProfileImage from './profile.jpg';


class Profile extends Component {
  render() {
    const { name, lvl, completedQuests, coins } = this.props;
    const questsForLevel = lvl * 3;

    return (
      <div className="profile">
        <div className="profile__left profile__image">
          <img src={ProfileImage} alt="User"/>
        </div>

        <div className="profile__right">
          <div className="profile__name">{name}</div>
          <div className="profile__info">Уровень {lvl}</div>
          <div className="profile__expirience">
            <div className="profile__expirience-line">
              <div className="profile__expirience-line-complete" style={{ width: `${Math.floor(completedQuests / questsForLevel * 100)}%` }}></div>
              <div className="profile__expirience-label">Выполнено задач</div>
            </div>
            <div className="profile__expirience-points">{completedQuests} / {questsForLevel}</div>
          </div>
          <div className="profile__cash">
            <div className="profile__cash-icon">
              <Icon type="coin" />
            </div>
            <div className="profile__cash-value">{coins}</div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { completedQuests, coins, name, lvl } = state.profileData;

  return {
    completedQuests,
    coins,
    name,
    lvl,
  };
};


export default connect(mapStateToProps)(Profile);
