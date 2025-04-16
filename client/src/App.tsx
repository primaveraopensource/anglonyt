import React, { useEffect } from 'react'
import VideoInput from './components/video-url-input'
import VideoPlayer from './components/video-player'
import { useVideoStore } from './stores/use-video-store'
import GenerativeViewLayout from './layouts/generative-view-layout'
import { BsChatSquareTextFill } from 'react-icons/bs'

const App: React.FC = () => {
  const { error, generateTopics, transcript } = useVideoStore()

  useEffect(() => {
    if(transcript) {
      generateTopics()
    }
  }, [transcript, generateTopics])
  
  return (
    <div className="flex min-h-screen">
      <button className='absolute bottom-5 left-5 flex justify-center items-center w-12 h-12 bg-teal-600 hover:-translate-y-1 shadow-lg shadow-teal-500/30 p-3 text-white font-bold text-2xl rounded-full duration-300'><BsChatSquareTextFill /></button>
      <div className="bg-stone-950 p-4 w-1/2">
        <VideoPlayer />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
      </div>
      <div className='relative flex flex-col border-l bg-stone-900 border-stone-800 w-1/2 max-h-screen p-4 overflow-y-auto gap-4'>
        <VideoInput />
        <GenerativeViewLayout />
      </div>
    </div>
  )
}

export default App