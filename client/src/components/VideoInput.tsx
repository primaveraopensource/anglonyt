import React from 'react'
import { useVideoStore } from '../stores/useVideoStore'

const VideoInput: React.FC = () => {
  const { videoUrl, setVideoUrl, fetchTranscript, isLoading } = useVideoStore()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTranscript()
  }
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="flex-1 p-2 border rounded"
          required
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={`px-4 py-2 rounded text-white ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load'}
        </button>
      </form>
    </div>
  )
}

export default VideoInput