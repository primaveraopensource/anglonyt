from flask import Blueprint, request, jsonify, current_app
from services.transcript_service import get_video_transcript
from services.topic_service import generate_topics
from services.question_service import generate_questions

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.post('/transcript')
def get_transcript():
    data = request.get_json()
    video_url = data.get('video_url')
    
    try:
        transcript = get_video_transcript(video_url)
        return jsonify({'transcript': transcript})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@bp.post('/generate/topics')
def get_topics():
    data = request.get_json()
    transcript = data.get('transcript')
    
    try:
        topics = generate_topics(transcript, current_app.config['GEMINI_API_KEY'])
        return jsonify({'topics': topics})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@bp.post('/generate/questions')
def get_questions():
    data = request.get_json()
    transcript = data.get('transcript')
    
    try:
        questions = generate_questions(transcript, current_app.config['GEMINI_API_KEY'])
        return jsonify({'questions': questions})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# TODO: Create chat service