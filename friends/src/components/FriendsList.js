import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {getFriends} from '../actions';
import Friend from './Friend';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        return (
            <div>
                {this.props.friends.map( (friend, id) =>
                <Friend key ={id}friend ={friend}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.friend)
    return{
    friends: state.friend}
}

export default withRouter(
    connect(
        mapStateToProps,
        {getFriends}
    ) (FriendsList)
)