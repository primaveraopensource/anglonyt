import React from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const VideoInput: React.FC = () => {
  const { videoUrl, setVideoUrl, fetchTranscript, isLoading } = useVideoStore()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTranscript()
  }
  
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="flex-1 py-2 px-4 border border-gray-700 rounded-full"
          required
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={`px-4 py-2 rounded-full text-white ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-800'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Generar'}
        </button>
      </form>
    </div>
  )
}

export default VideoInput