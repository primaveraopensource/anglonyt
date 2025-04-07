from google import genai

def generate_questions(transcript, api_key):
    """Genera preguntas basadas en la transcripción"""
    client = genai.Client(api_key=api_key)


    
    prompt = f"""Genera preguntas relevantes basadas en el siguiente contenido:
    
    {transcript}
    
    Devuelve un JSON con la estructura: [{"question": "Texto de la pregunta", "options": [], "answer": "opcion correcta", "justification": "una breve justificacion"}]"""
    
    response = client.models.generate_content(
      model="gemini-2.0-flash",
      contents=prompt,
      config={
        'response_mime_type': 'application/json',
      }
    )

    response_text = response.text
    return response_text