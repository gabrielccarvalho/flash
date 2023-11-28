import { api } from '../lib/axios'
import { cookies } from 'next/headers'

const cookieStore = cookies()

export function fetchCards() {
  const res = api
    .get(`/cards`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get('@flashcards:token')?.value}`,
      },
    })
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}

export function fetchReviewCards() {
  const res = api
    .get(`/cards/review`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get('@flashcards:token')?.value}`,
      },
    })
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}

export function completeCard(cardId: string, difficulty: string) {
  const res = api
    .post(
      '/cards/complete',
      {
        cardId,
        newDifficulty: difficulty,
      },
      {
        headers: {
          Authorization: `Bearer ${cookieStore.get('@flashcards:token')
            ?.value}`,
        },
      },
    )
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}

export function createCard(
  front: string,
  back: string,
  tags: string[],
  media?: string,
) {
  const res = api
    .post(
      '/cards/create',
      {
        front,
        back,
        media,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${cookieStore.get('@flashcards:token')
            ?.value}`,
        },
      },
    )
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}

export function editCard(
  cardId: string,
  front: string,
  back: string,
  tags: string[],
  media?: string,
) {
  const res = api
    .post(
      '/cards/create',
      {
        cardId,
        front,
        back,
        media,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${cookieStore.get('@flashcards:token')
            ?.value}`,
        },
      },
    )
    .then((response) => {
      return response.data
    })
  return Promise.resolve(res)
}
