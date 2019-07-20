import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {removeQuest, checkedQuest} from '../../redux/actions';

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

    _onDelete = () => {
        this.props.dispatch(removeQuest(this.props.item.id));
    };

    _onChanged = () => {
        this.props.dispatch(checkedQuest(this.props.item.id));
        this.setState({isChecked: !this.state.isChecked});
    };

    _activeClass= (valid, _class)=>{
        return valid ? _class : null;
    }

    render() {
        const {item} = this.props;

        return (
            <>
                <input type='hidden' value={item.id}/>
                <td className={this._activeClass(item.isChecked, "alert-success") }>
                    <label>
                        <input type="checkbox" checked={item.isChecked} onClick={this._onChanged}/>
                    </label>
                </td>
                <td className={this._activeClass(item.isChecked, "alert-success") }>{item.title}</td>
                <td className={this._activeClass(item.isChecked, "alert-success") }>{item.coin}</td>
                <td className={this._activeClass(item.isChecked, "alert-success") }>
                    <button className="btn btn-danger" onClick={this._onDelete}>x</button>
                </td>
            </>
        )
    }
};


const mapStateToProps = (state) => {
    console.log('state', state);

    return;
};

export default connect(mapStateToProps)(Item);