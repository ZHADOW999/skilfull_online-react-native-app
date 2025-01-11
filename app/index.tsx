import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <View className='flex-1'>
      {isLoading && (
        <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ffc107] size-20">
          <ActivityIndicator size="large" color="#ffc107" />
        </View>
      )}
      <WebView 
        source={{ uri: 'https://skilfulonline.site/' }} // Replace with your website URL
        className='flex-1'
        onLoadEnd={() => setIsLoading(false)}
        // startInLoadingState={true}
        scalesPageToFit={false} // Prevent zoom
        javaScriptEnabled={true}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
