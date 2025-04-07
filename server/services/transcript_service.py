from youtube_transcript_api import YouTubeTranscriptApi

def get_video_transcript(video_url):
    """Obtiene la transcripción de un video de YouTube"""
    video_id = extract_video_id(video_url)
    ytt_api = YouTubeTranscriptApi()
    fetched_transcript = ytt_api.fetch(video_id)
    transcript = fetched_transcript.to_raw_data()
    return transcript

def extract_video_id(url):
    """Extrae el ID del video de una URL de YouTube"""
    if 'youtu.be/' in url:
        return url.split('youtu.be/')[-1].split('?')[0]
    elif 'youtube.com/watch?v=' in url:
        return url.split('v=')[1].split('&')[0]
    return url