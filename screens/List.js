import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import moment from 'moment';

class List extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  renderItem({ item }) {

    onPress = (item) => {
      this.props.navigation.navigate('Detail', {
        title: `Source: ${item.source.name}`,
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
    const { news } = this.props;
    return (
      <View style={ styles.container }> { news.length > 0 ?
        <FlatList data={ news } renderItem={ this.renderItem } keyExtractor={this.keyExtractor} /> : <Text>There's no news to display!</Text> }
      </View>
    )
  }
}

List.navigationOptions = {
  title: 'Lastest News',
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
