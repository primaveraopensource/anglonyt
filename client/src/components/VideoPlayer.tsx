import React from 'react'
import YouTube from 'react-youtube'
import { useVideoStore } from '../stores/useVideoStore'

const VideoPlayer: React.FC = () => {
  const { videoUrl } = useVideoStore()
  
  const extractVideoId = (url: string): string | null => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }
  
  const videoId = extractVideoId(videoUrl)
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  }
  
  if (!videoId) return null
  
  return (
    <div className="mt-4">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  )
}

export default VideoPlayer