import React, { useState } from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const TopicsList: React.FC = () => {
  const { topics, isLoading } = useVideoStore()
  const [viewType, setViewType] = useState<"cards" | "vocabulary">("cards")
  
  if (isLoading) return <div className="p-4">Cargando Notas...</div>
  if (!topics.cards.length) return null
  console.log(topics)
  
  return (
    <section className="p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 border-b border-b-gray-900 pb-2">Notas</h2>
      <div className='flex gap-4 mb-6'>
        <button
          className='p-2 bg-gray-950 hover:bg-gray-900 disabled:bg-gray-800 border border-gray-600 rounded'
          onClick={() => setViewType("cards")}
          disabled={viewType === "cards" ? true : false}
        >
          Temas
        </button>
        <button
        className='p-2 bg-gray-950 hover:bg-gray-900 disabled:bg-gray-800 border border-gray-600 rounded'
          onClick={() => setViewType("vocabulary")}
          disabled={viewType === "vocabulary" ? true : false}
        >
          Vocabulario
        </button>
      </div>
      {
        viewType === "cards"
        ? 
        <div className="flex flex-col gap-4">
          {topics.cards.map((topic, index) => (
            <article key={index}>
              <span className='bg-gray-800 p-1 rounded'>{topic.start_minute}</span>
              <div className="border border-gray-800 rounded p-3 mt-3">
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{topic.summary}</p>
                <ul className="mt-2 pl-5 list-disc">
                  {topic.key_points.map((point, i) => (
                    <li key={i} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>
      : 
      <div className="flex flex-col gap-4">
        {
          topics.vocabulary.map(el => (
            <article key={el.word} className='flex flex-col gap-3 bg-gray-800 p-4 rounded'>
              <span className='bg-gray-900 p-2 rounded w-full'>{el.word}</span>
              <p>{el.meaning}</p>
            </article>
          ))
        }
      </div>
      }
    </section>
  )
}

export default TopicsList