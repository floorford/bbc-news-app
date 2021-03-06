import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment';

const news = require('../resources/news.json');

class List extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {

    onPress = (item) => {
      this.props.navigation.navigate('Detail', {
        title: 'BBC News',
        body: item
      })
    }

    const time = item.publishedAt.toString()
    return (
      <View>
        <TouchableHighlight underlayColor='#e4e4e4' style={ styles.news } onPress={ () => onPress(item) }>
          <Text style={ styles.text }>
            { item.title }
          </Text>
        </TouchableHighlight>
        <Text style={ styles.time }>
          { moment(time).fromNow() }
        </Text>
      </View>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList data={ news } renderItem={ this.renderItem } keyExtractor={this.keyExtractor} />
      </View>
    )
  }
}

List.navigationOptions = {
  title: 'BBC News',
  headerBackTitle:'Back'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  news: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    paddingLeft: 10
  },
  time: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 10,
    marginBottom: 5
  },
});

export default List
