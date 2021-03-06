import { AuthConstants } from '../../types'

export const authCallbackRequest = () => ({
  type: AuthConstants.AUTH_CALLBACK_REQUEST,
})

export const authCallbackError = (errorMessage) => ({
  type: AuthConstants.AUTH_CALLBACK_ERROR,
  payload: errorMessage,
})

export const authCallbackSucess = (credentials) => ({
  type: AuthConstants.AUTH_CALLBACK_SUCCESS,
  payload: { ...credentials },
})
