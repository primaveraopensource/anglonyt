from google import genai

def generate_topics(transcript, api_key):
    """Generate topic cards using the Gemini API"""
    try:
        client = genai.Client(api_key=api_key)
        
        prompt = f"""
            Task: Create English learning flashcards and vocabulary list from a video transcript.

            Description:
            You are an expert English language instructor for beginners. Analyze the following video transcript and extract key learning topics and vocabulary. Present these topics as flashcards with summaries and relevant grammar points, suitable for beginner English learners.

            Transcript:
            {transcript}

            Requirements:

            1.  Identify the main learning topics covered in the transcript.
            2.  Create flashcards for each topic, including:
                * A clear and concise title.
                * The start minute in the video where the topic is discussed.
                * A brief summary of the topic.
                * Relevant English grammar points illustrated in the topic.
            3.  Generate a vocabulary list with words and their meanings from the transcript.
            4.  Return the output ONLY in valid JSON format, adhering strictly to the following structure:

                {{
                    "cards": [
                        {{
                            "title": "Topic title",
                            "start_minute": "00:00",
                            "summary": "Brief summary",
                            "english_grammar": ["point 1", "point 2"]
                        }}
                    ],
                    "vocabulary": [
                        {{
                            "word": "word",
                            "meaning": "meaning"
                        }}
                    ]
                }}

            Additional Instructions:

            * Ensure the JSON output is valid and easily parsable.
            * Focus on clarity and conciseness for beginner learners.
            * If the transcript contains examples, use them to illustrate grammar points.
            * If the transcript contains lists, or any other structured data use that data to create the flashcards.

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
        
    except Exception as e:
        raise ValueError(f"Error en la generación: {str(e)}")
            
    except Exception as e:
        raise ValueError(f"Error al generar temas: {str(e)}")