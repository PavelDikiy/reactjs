import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {removeQuest, checkedQuest, updateProfileDataQuests, updateProfileDataCoins,
    activeLogs} from '../../redux/actions';

class Item extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
        }
    }

    componentDidMount() {
        const {isChecked} = this.props.item;
        this.setState({isChecked});
    }

    _buildLogs(boll){
        return {
            id: this.props.item.id,
            title: this.props.item.title,
            complete: boll ? "Выполнено" : "Накуя ты удалил?",
            time: Date.now(),
        }
    }

    _onDelete = () => {
        this.props.dispatch(removeQuest(this.props.item.id));
        this.props.dispatch(activeLogs(this._buildLogs(false)));
    };

    _onChanged = () => {
        this.props.dispatch(updateProfileDataQuests());
        this.props.dispatch(updateProfileDataCoins(this.props.item.coin));
        this.props.dispatch(checkedQuest(this.props.item.id));
        this.props.dispatch(activeLogs(this._buildLogs(true)));
        this.setState({isChecked: !this.state.isChecked});
    };

    _activeClass= (valid, _class)=>{
        return valid ? _class : null;
    };

    render() {
        const {item} = this.props;

        return (
            <>
                <td className={this._activeClass(item.isChecked, "alert-success") }>{item.title}</td>
                <td className={this._activeClass(item.isChecked, "alert-success") }>{item.coin}</td>
                <td className={this._activeClass(item.isChecked, "alert-success") }>
                    <button disabled={item.isChecked ? "disabled" : false} className="btn btn-danger" onClick={this._onDelete}>x</button>
                    <button disabled={item.isChecked ? "disabled" : false} className="btn btn-success" onClick={this._onChanged}>готово</button>
                </td>
            </>
        )
    }
};

export default connect()(Item);