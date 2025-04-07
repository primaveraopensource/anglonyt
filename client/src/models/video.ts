export interface TranscriptResponse {
  transcript: string
}

interface TopicCard {
  title: string
  start_minute: string
  summary: string
  key_points: string[]
}

interface Word {
  word: string
  meaning: string
}
export interface Topics {
  cards: TopicCard[]
  vocabulary: Word[]
}

export interface Question {
  question: string
  options: []
  answer: string
  justification: string
}