import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] =useState({});;
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then (data => setFriend(data))
    })
    return (
        <div>
            <h2>This is detail about : {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email:{friend.email}</h4>
            <h5>Website: {friend.website}</h5>
            <p><small>city:{friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetail;