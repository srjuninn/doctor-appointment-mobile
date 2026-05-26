import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Home } from './src/pages/home';
import { SafeAreaView } from 'react-native-safe-area-context';

const Status = styled.StatusBar``

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden/>
      <Home/>      
    </SafeAreaView>
  );
}

