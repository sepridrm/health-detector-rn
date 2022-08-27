import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor: 'white' }}>
        <WebView
          source={{ uri: 'https://sepridrm-health-detector-py-main-fzinqn.streamlitapp.com/' }}
          style={{ marginTop: Platform.OS === 'ios' ? 42 : 0 }}
        />
      </View>
    );
  }
}

export default App