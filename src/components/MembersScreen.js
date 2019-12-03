import React, { Component } from 'react';
import User from './User';
import {ListView, StyleSheet, View,} from 'react-native';

const users = [
    {
      "id": "c5368bbe-adfb-424f-ade3-9d783befa2b6",
      "firstName": "Hahn",
      "lastName": "Rojas",
      "avatarUrl": "https://placehold.it/100x100",
      "isOnline": true,
      "company": "Orbixtar",
      "email": "hahnrojas@orbixtar.com"
    },
    {
      "id": "15ef2834-3ba5-4621-abf1-d771d39c2dd6",
      "firstName": "Helen",
      "lastName": "Stout",
      "avatarUrl": "https://placehold.it/100x100",
      "isOnline": true,
      "company": "Ebidco",
      "email": "helenstout@ebidco.com"
    },
    {
      "id": "1ef05de1-fd8e-41ae-85ac-620b6d716b62",
      "firstName": "Floyd",
      "lastName": "Mcpherson",
      "avatarUrl": "https://placehold.it/100x100",
      "isOnline": false,
      "company": "Ecraze",
      "email": "floydmcpherson@ecraze.com"
    }
];


const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(users),
    };
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.ds}
          style={styles.list}
          renderRow={(user) =>
            <User
              key={user.id}
              {...user}
              navigation={this.props.navigation}
            />
          }
        />
      </View>
    );
  }
}

