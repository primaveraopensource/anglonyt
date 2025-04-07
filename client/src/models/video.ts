export interface TranscriptResponse {
  transcript: string
}

export interface Topic {
  title: string
  summary: string
  key_points: string[]
}

export interface Question {
  question: string
  options: []
  answer: string
  justification: string
}