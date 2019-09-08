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
                        <th scope="col">Наименование</th>
                        <th scope="col">Очки</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (tasks !== null && tasks !== undefined && tasks.length > 0) ?
                            tasks.map((_item) => {
                                return (<tr key={_item.id}><Item item={_item}/></tr>);
                            })
                            : "нет тасков"
                    }
                </tbody>
            </table>
        )
    };

    render() {
        const { quests } = this.props;

        const _quests = quests.slice().sort((a,b)=> {
            if(a.isChecked > b.isChecked){return 1;}
            else{return -1;}
        });
//console.log(_quests);
        return (
            <div>
                <div>
                    <AddItem place='title'/>
                </div>
                {this._renderTasks(_quests)}
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