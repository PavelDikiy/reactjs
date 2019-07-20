import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addQuest} from '../../redux/actions';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            coin: ""
        };

        this._addItems = this._addItems.bind(this);
    }

    _addItems() {
        if(this.state.title && this.state.coin) {
            return this.props.dispatch(
                addQuest(
                    this.state.title,
                    this.state.coin,
                )
            )
        }
        return null;
    };

    _onChangeTitle = (e) => {
        return this.setState({title: e.target.value});
    };

    _onChangeCoin = (e) => {
        return this.setState({coin: e.target.value});
    };


    render() {
        return (
            <div>
                <input className="form-control" onChange={this._onChangeTitle} placeholder={this.props.place} value={this.state.title}/>
                <input className="form-control" onChange={this._onChangeCoin} placeholder="200" value={this.state.coin}/>
                <button className="btn btn-success" onClick={this._addItems}>OK Bleat</button>
            </div>
        )
    }
};

export default connect()(AddItem);

