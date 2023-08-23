import { ActivityIndicator, View } from 'react-native'

import { colors } from '@utils/colors'

import { styles } from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} />
    </View>
  )
}
