import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import TabNavigator from './src/components/navigator/TabNavigator';

export default function App() {
  return (
    <PaperProvider>
      <TabNavigator />
    </PaperProvider>
  );
}
