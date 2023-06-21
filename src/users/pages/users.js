import React from "react";
import UsersList from "../components/usersList";

const Users = () => {
    const USERS = [
        { id: 'u1', name: 'user1', image: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/2683dfb6-47e9-44f9-a1b5-78315738a1f6/23ed0ed9-9cef-4d4a-921c-146a282d9105/1280x720/match/image.jpg', places: 4 },
        { id: 'u2', name: 'user2', image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/07/20202710/10-famous-historical-places-in-India.jpg', places: 1 },
        { id: 'u3', name: 'user3', image: 'https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg', places: 6 },
        { id: 'u4', name: 'user4', image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/06/28095201/15-worlds-best-places-to-visit-03.jpg', places: 3 },
        { id: 'u5', name: 'user5', image: 'https://images.herzindagi.info/image/2022/Oct/delhi-pl.jpg', places: 7 },
        { id: 'u6', name: 'user6', image: 'https://img.jagranjosh.com/images/2021/October/19102021/pisa.png', places: 2 },
    ]

    return(
        <UsersList items={USERS} />
    )
}

export default Users;