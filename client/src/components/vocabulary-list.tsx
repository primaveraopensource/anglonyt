import React from 'react'
import { useVideoStore } from '../stores/use-video-store'

const VocabularyList: React.FC = () => {
  const { topics, isLoading } = useVideoStore()

  if (isLoading) return <div className="p-4">Cargando Vocabulario...</div>
  if (!topics.cards.length) return null

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
        {
          topics.vocabulary.map(el => (
            <article key={el.word} className='flex flex-col gap-3 bg-stone-800 p-4 rounded'>
              <span className='bg-stone-900 p-2 rounded w-full font-semibold text-sm'>{el.word}</span>
              <p className='text-stone-400'>{el.meaning}</p>
            </article>
          ))
        }
      </div>
  )
}

export default VocabularyList