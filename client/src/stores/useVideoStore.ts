import { create } from 'zustand'
import { TranscriptResponse, Topic, Question } from '../models/video'
import { fetchTranscript as ft, generateQuestions as gq, generateTopics as gt } from '../services/api'

interface VideoState {
  videoUrl: string
  transcript: string
  topics: Topic[]
  questions: Question[]
  isLoading: boolean
  error: string | null
  setVideoUrl: (url: string) => void
  fetchTranscript: () => Promise<void>
  generateTopics: () => Promise<void>
  generateQuestions: () => Promise<void>
  reset: () => void
}

export const useVideoStore = create<VideoState>((set, get) => ({
  videoUrl: '',
  transcript: '',
  topics: [],
  questions: [],
  isLoading: false,
  error: null,

  setVideoUrl: (url: string) => set({ videoUrl: url }),

  fetchTranscript: async () => {
    set({ isLoading: true, error: null })
    try {
      const { videoUrl } = get()
      console.log("video url: ", videoUrl)
      const { transcript }: TranscriptResponse = await ft(videoUrl)
      console.log("transcription: ", transcript)
      set({ transcript, isLoading: false })
    } catch (err) {
      set({ error: (err as Error).message, isLoading: false })
    }
  },

  generateTopics: async () => {
    set({ isLoading: true, error: null })
    try {
      const { transcript } = get()
      const topics = await gt(transcript)
      set({ topics, isLoading: false })
    } catch (err) {
      set({ error: (err as Error).message, isLoading: false })
    }
  },

  generateQuestions: async () => {
    set({ isLoading: true, error: null })
    try {
      const { transcript } = get()
      const questions = await gq(transcript)
      set({ questions, isLoading: false })
    } catch (err) {
      set({ error: (err as Error).message, isLoading: false })
    }
  },


  reset: () => set({
    videoUrl: '',
    transcript: '',
    topics: [],
    questions: [],
    isLoading: false,
    error: null
  })
}))