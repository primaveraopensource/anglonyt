from google import genai

def generate_topics(transcript, api_key):
    """Genera tarjetas de temas usando la API de Gemini"""
    try:
        client = genai.Client(api_key=api_key)
        
        prompt = f"""Eres un instructor de inglés especializado en enseñanza para principiantes. Tu tarea es analizar el siguiente texto, que es una transcripción de un video, y extraer los temas principales. Presenta estos temas en formato de tarjetas didácticas, adecuadas para personas que están aprendiendo inglés. Asegúrate de que cada tarjeta sea clara, concisa y útil para reforzar el aprendizaje del idioma.
        
        {transcript}
        
        Devuelve SOLO en formato JSON válido con la siguiente estructura:
        {{
            "cards": [
                {{
                    "title": "Título del tema",
                    "start_minute": "00:00", 
                    "summary": "Resumen breve", 
                    "key_points": ["punto 1", "punto 2"]
                }}
            ],
            "vocabulary": [
                {{
                    "word": "palabra",
                    "meaning": "significado"
                }}
            ]
        }}
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