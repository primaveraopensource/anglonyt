import React from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const TopicsList: React.FC = () => {
  const { topics, isLoading } = useVideoStore()
  
  if (isLoading) return <div className="p-4">Loading topics...</div>
  if (!topics.length) return null
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Topics</h2>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="border rounded p-3">
            <h3 className="font-semibold">{topic.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{topic.summary}</p>
            <ul className="mt-2 pl-5 list-disc">
              {topic.key_points.map((point, i) => (
                <li key={i} className="text-sm">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicsList