import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Logo from '@presentation/assets/logo.svg'
import { colors } from '@utils/colors'

import { styles } from './styles'

const Login: React.FC = () => {
  const isLoading = false
  const hasError = false

  const { top } = useSafeAreaInsets()
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primaryDark} />
      <View style={[styles.header, { marginTop: top }]}>
        <Logo style={{ aspectRatio: 1 }} />
        <Text>4Dev - Surveys</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Login</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
          />
          <Text>🔴</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
          <Text>🔴</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          disabled={isLoading}
        >
          {!isLoading ? (
            <Text style={styles.buttonText}>Entrar</Text>
          ) : (
            <ActivityIndicator color={colors.white} size={24} />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.newAccount}>Criar conta</Text>
        </TouchableOpacity>

        {hasError && (
          <View>
            <Text>fahsdfiuhsdufihsauifhsdui</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}></View>
    </View>
  )
}

export default Login
