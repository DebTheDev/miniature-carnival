import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { listDecks } from '../utils/api'
import Deck from './Deck'




export default function DeckList({ deckList, setDeckList }) {
  useEffect(() => {
    const abortController = new AbortController()

    listDecks(abortController.signal).then(setDeckList)

    return () => abortController.abort()
  }, [setDeckList])

  const deckCardList =
    deckList && deckList.map((deck) => <Deck key={deck.id} deck={deck} />)

  return (
    <main className='container mb-3'>
      <Link to='decks/new'>
        <button type='button' className='btn btn-secondary btn-lg m-1'>
          <i className='fas fa-plus'></i> Create Deck
        </button>
      </Link>
      <section className='column'>{deckCardList}</section>
    </main>
  )
}
