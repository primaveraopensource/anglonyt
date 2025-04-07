import React from 'react'
import VideoInput from './components/VideoInput'
import VideoPlayer from './components/VideoPlayer'
import TopicsList from './components/TopicsList'
import { useVideoStore } from './stores/useVideoStore'

const App: React.FC = () => {
  const { isLoading, error, generateTopics } = useVideoStore()
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Video Learning Assistant</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <VideoInput />
        
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        <VideoPlayer />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <button onClick={generateTopics}>Generete Topic Cards</button>
          <TopicsList />
        </div>
        
      </div>
    </div>
  )
}

export default App