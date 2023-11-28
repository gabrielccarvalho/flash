import { api } from '../lib/axios'
import { cookies } from 'next/headers'

const cookieStore = cookies()

export function fetchDecks() {
  const res = api
    .get(`/decks`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get('@flashcards:token')?.value}`,
      },
    })
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}
