from google import genai

def generate_questions(transcript, api_key):
    """Generate questions based on the transcript"""
    client = genai.Client(api_key=api_key)

    prompt = f"""
      Task: Create an English language learning quiz based on a YouTube video transcript.

      Description:
      You are an English language teaching assistant. Analyze the following transcript from a YouTube video and generate relevant questions to help learners practice their English comprehension and language skills. Each question should have a corresponding correct answer.

      Video Transcript:
      {transcript}

      Requirements:

      1.  Generate questions that focus on key vocabulary, phrases, and grammatical structures presented in the video.
      2.  Questions should be clear, concise, and target common challenges faced by English learners.
      3.  Include a variety of question types, such as:
          * Vocabulary definition questions.
          * Sentence completion questions.
          * Comprehension questions about the video's content.
          * Questions targeting specific grammar points (e.g., verb tenses, prepositions).
      4.  Provide precise and accurate correct answers, including possible variations that are still correct.
      5.  Return the output ONLY in valid JSON format, adhering strictly to the following structure:

          [
              {{
                  "question": "Question text",
                  "correct_answer": "Expected correct answer"
              }},
              {{
                  "question": "Another question",
                  "correct_answer": "Its answer"
              }},
              ...
          ]

      Additional Instructions:

      * Focus on practical English usage and common phrases that learners can use in everyday conversation.
      * If the video transcript contains examples of specific grammar points, create questions that test understanding of those points.
      * If the video includes vocabulary explanations or definitions, use that information to create vocabulary questions.
      * Ensure the JSON output is valid and easily parsed by a program.
      * Avoid overly complex or ambiguous questions.

      Output Format:
      JSON
    """

    response = client.models.generate_content(
      model="gemini-2.0-flash",
      contents=prompt,
      config={
        'response_mime_type': 'application/json',
      }
    )

    response_text = response.text
    return response_text