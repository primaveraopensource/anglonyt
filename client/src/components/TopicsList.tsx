import React from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const TopicsList: React.FC = () => {
  const { topics, isLoading } = useVideoStore()
  
  if (isLoading) return <div className="p-4">Cargando Notas...</div>
  if (!topics.cards.length) return null
  console.log(topics)
  
  return (
    <section className="animate-fade-in">
        <div className="flex flex-col gap-4">
          {topics.cards.map((topic, index) => (
            <article key={index}>
              <span className='bg-stone-800 p-1 rounded text-sm text-stone-400'>{topic.start_minute}</span>
              <div className="border border-stone-800 rounded p-3 mt-3">
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{topic.summary}</p>
                <ul className="mt-2 pl-5 list-disc">
                  {topic.english_grammar.map((point, i) => (
                    <li key={i} className="text-sm text-stone-400">{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}

export default TopicsList