import React from 'react'
import YouTube from 'react-youtube'
import { useVideoStore } from '../stores/use-video-store'

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
  
  return (
    <div>
      {
        videoId
          ? <YouTube videoId={videoId} opts={opts} />
          : <div className='border border-stone-800 text-stone-700 text-center p-4 rounded'>¡Tu video aparecera aqui!</div>
      }
    </div>
  )
}

export default VideoPlayer