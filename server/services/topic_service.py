from google import genai
import json

def generate_topics(transcript, api_key):
    """Genera tarjetas de temas usando la API de Gemini 1.0"""
    try:
        client = genai.Client(api_key=api_key)
        
        prompt = f"""Analiza el siguiente texto de una transcripción de video y genera los temas principales en formato de tarjetas:
        
        {transcript}
        
        Devuelve SOLO en formato JSON válido con la siguiente estructura:
        [
            {{
                "title": "Título del tema", 
                "summary": "Resumen breve", 
                "key_points": ["punto 1", "punto 2"]
            }}
        ]"""
        
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