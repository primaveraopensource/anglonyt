import React from 'react'
import { useVideoStore } from '../stores/use-video-store'
import { GiPlayButton } from 'react-icons/gi'
import LoadingSpin from './loading-spin'

const VideoInput: React.FC = () => {
  const { videoUrl, setVideoUrl, fetchTranscript, isLoading } = useVideoStore()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTranscript()
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="flex-1 py-2 px-4 border border-stone-800 rounded-full shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 duration-300 focus:shadow-teal-500/50 outline-0 text-stone-400"
          required
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={`px-4 py-2 rounded-full text-white duration-300 ${isLoading ? 'bg-stone-900' : 'bg-teal-600 hover:bg-teal-800 hover:translate-y-1'}`}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpin /> : <GiPlayButton />}
        </button>
      </form>
    </div>
  )
}

export default VideoInput