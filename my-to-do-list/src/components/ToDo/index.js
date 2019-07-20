import React, {Component} from 'react';
import Item from './Item';
import AddItem from './AddItem';
import {connect} from 'react-redux';

class ToDo extends Component {
    _renderTasks = (tasks) => {
        if(!(Array.isArray(tasks) && tasks.length > 0)) return null;

        return (
            <table className="table" style={{marginTop: 50+'px'}}>
                <thead>
                <tr>
                    <th scope="col">Активность</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Очки</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                {
                    (tasks !== null && tasks !== undefined && tasks.length > 0) ?
                        tasks.map((_item) => {
                            return (<tr><Item key={_item.id} item={_item}/></tr>);
                        })
                        : "нет тасков"
                }
            </table>
        )
    };

    render() {
        const {quests} = this.props;
        return (
            <div>
                <div>
                    <AddItem place='title'/>
                </div>
                {this._renderTasks(quests)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { quests } = state.questsData;

    return {
        quests,
    };
};

export default connect(mapStateToProps)(ToDo);