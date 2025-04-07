import React from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const TopicsList: React.FC = () => {
  const { topics, isLoading } = useVideoStore()
  
  if (isLoading) return <div className="p-4">Cargando Notas...</div>
  if (!topics.cards.length) return null
  console.log(topics)
  
  return (
    <div className="p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Notas</h2>
      <div className="flex flex-col gap-4">
        {topics.cards.map((topic, index) => (
          <div>
            <span className='bg-gray-800 p-1 rounded'>{topic.start_minute}</span>
            <div key={index} className="border border-gray-800 rounded p-3 mt-3">
              <h3 className="font-semibold">{topic.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{topic.summary}</p>
              <ul className="mt-2 pl-5 list-disc">
                {topic.key_points.map((point, i) => (
                  <li key={i} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicsList