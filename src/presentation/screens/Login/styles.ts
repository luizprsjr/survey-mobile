import { StyleSheet } from 'react-native'

import { colors } from '@utils/colors'
import { fonts } from '@utils/fonts'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: 40,
    gap: 16,
  },
  form: {
    padding: 40,
    backgroundColor: colors.white,
    gap: 12,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 1,
  },
  formTitle: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.primaryDark,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primaryLight,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: 14,
    flex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  submitButton: {
    marginTop: 20,
  },
  newAccount: {
    textAlign: 'center',
    color: colors.primary,
    textTransform: 'lowercase',
    marginTop: 20,
  },
  footer: {
    backgroundColor: colors.primary,
    height: 48,
  },
})
