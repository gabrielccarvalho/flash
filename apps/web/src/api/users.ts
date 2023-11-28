import { api } from '../lib/axios'
import { cookies } from 'next/headers'

const cookieStore = cookies()

export function fetchUser() {
  const res = api
    .get(`/user`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get('@flashcards:token')?.value}`,
      },
    })
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}

export function authenticateUser({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const res = api
    .post(`/sessions`, {
      email,
      password,
    })
    .then((response) => {
      cookieStore.set('@flashcards:token', response.data.access_token, {
        expires: 7 * 24 * 60 * 60, // 7 days in seconds
      })
    })
  return Promise.resolve(res)
}

export function registerUser({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) {
  const res = api
    .post(`/accounts`, {
      name,
      email,
      password,
    })
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}
