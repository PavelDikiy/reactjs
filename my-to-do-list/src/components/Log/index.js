import React, {Component} from "react";
import {connect} from "react-redux";

class Log extends Component {
/*    constructor(props) {
        super(props);
    }*/

    render() {
        const {logsList} = this.props;

        const containerLog = {
            width: '35%',
            height: 200,
            background: '#222',
            color: '#fff',
            marginBottom: 5,
            fontSize: 10,
            paddingLeft: 5,
            paddingRight: 5
        }

        return (
            <div style={containerLog}>
                {logsList.map((_item) => {

                    const _date = new Date(_item.time);
                    const dateString = _date.toString();

                    return (
                        <div key={_item.id}>
                            <span>{_item.complete}</span> - <span>{_item.title}</span> (<span>{_item.id}</span>)  <span>{dateString}</span>
                        </div>
                    );
                })}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const {logsList} = state.logsData;
    return {logsList: logsList};
};

export default connect(mapStateToProps)(Log);