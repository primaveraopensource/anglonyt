import axios, { AxiosInstance } from 'axios'
import {
  TranscriptResponse,
  Topic,
  Question
} from '../models/video'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const fetchTranscript = async (videoUrl: string): Promise<TranscriptResponse> => {
  const response = await apiClient.post<TranscriptResponse>('/api/transcript', {
    video_url: videoUrl
  })
  return response.data
}

export const generateTopics = async (transcript: string): Promise<Topic[]> => {
  const response = await apiClient.post<{ topics: string }>('/api/generate/topics', {
    transcript
  })
  return JSON.parse(response.data.topics) as Topic[]
}

export const generateQuestions = async (transcript: string): Promise<Question[]> => {
  const response = await apiClient.post<{ questions: string }>('/api/generate/questions', {
    transcript
  })
  return JSON.parse(response.data.questions) as Question[]
}