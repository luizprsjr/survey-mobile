import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Loading } from '@presentation/components/Loading'
import Login from '@presentation/screens/Login/login'

export default function App() {
  const [isFontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {isFontsLoaded ? <Login /> : <Loading />}
      </View>
    </SafeAreaProvider>
  )
}

registerRootComponent(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
