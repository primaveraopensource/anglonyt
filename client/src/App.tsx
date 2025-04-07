import React, { useEffect } from 'react'
import VideoInput from './components/VideoInput'
import VideoPlayer from './components/VideoPlayer'
import TopicsList from './components/TopicsList'
import { useVideoStore } from './stores/useVideoStore'

const App: React.FC = () => {
  const { isLoading, error, generateTopics, transcript } = useVideoStore()

  useEffect(() => {
    if(transcript) {
      generateTopics()
    }
  }, [transcript, generateTopics])
  
  return (
    <div className="flex min-h-screen">
      <div className="p-4 w-1/2">
        <VideoPlayer />
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
      <div className='flex flex-col border-l border-gray-600 w-1/2 max-h-screen p-4 overflow-y-auto'>
        <VideoInput />
        <TopicsList />
      </div>
    </div>
  )
}

export default App