import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { withRouter } from 'react-router-dom';

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    color: '#000',
  }
});

class User extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.openUserDetail}>
        <View style={styles.user}>
          <Image
            style={[styles.avatar, { borderColor: this.props.isOnline ? '#9d9' : '#d99' }]}
            source={{ uri: this.props.avatarUrl }} />

          <View>
            <Text style={styles.name}>{this.props.firstName} {this.props.lastName}</Text>
            <Text style={styles.company}>{this.props.company}</Text>
            <Text style={styles.email}>{this.props.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  openUserDetail = () => {
    const { history } = this.props;
    history.push(`/members/${this.props.firstName}`);
  }
}

export default withRouter(User);
