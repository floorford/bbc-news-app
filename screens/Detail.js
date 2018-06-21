import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { WebBrowser } from 'expo';

import moment from 'moment';

class Detail extends Component {

  handlePressButtonAsync = async (url) => {
    return await WebBrowser.openBrowserAsync(url);
  };

  render() {
    const data = this.props.navigation.getParam('body');

    const source = {
      uri: data.urlToImage
    };

    const style = {
      height: 300,
      width: 450,
      marginBottom: 10,
      alignSelf: 'center'
    };

    const time = data.publishedAt.toString()

    return (
      <View style={ styles.container }>
        <Image source={ source } style={ style }/>
        <Text style={ styles.pub }>
          Published { moment(time).fromNow() }
        </Text>
        <Text style={ styles.title }>
          { data.title }
        </Text>
        <Text style={ styles.text }>
          { data.description }
        </Text>
        <TouchableHighlight onPress={ () => this.handlePressButtonAsync(data.url) }>
          <Text style={ styles.link }>
            Read More...
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Detail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title')
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  link: {
    marginTop: 12,
    color: '#bb1521',
    fontWeight: 'bold',
    fontSize: 18
  },
  pub: {
    fontSize: 18,
    color: 'grey'
  }
});

export default Detail
