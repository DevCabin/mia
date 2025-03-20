from flask import Flask, request, jsonify
import os
import logging

app = Flask(__name__)

# Initialize Notion API client
NOTION_API_TOKEN = os.getenv('NOTION_API_TOKEN')
NOTION_PAGE_ID = os.getenv('NOTION_PAGE_ID')
# notion_client = notion.Client(auth=NOTION_API_TOKEN)  # Commented out for simplification

# Initialize LLaMA model client
LLAMA_API_KEY = os.getenv('LLAMA_API_KEY')
# llama_client = LLaMA(API_KEY=LLAMA_API_KEY)  # Commented out for simplification

# Configure logging
logging.basicConfig(level=logging.INFO)

def web_search(query):
    # Placeholder function for web search
    return f"Search results for '{query}'"

@app.route('/')
def index():
    return "Welcome to the Chatbot API!"

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'OK'}), 200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}
    
    try:
        user_input = request.json['input']
        logging.info(f"Received input: {user_input}")
        
        # Simplified response for testing
        final_response = f"Echo: {user_input}"
        
        logging.info(f"Generated response: {final_response}")
        return jsonify({'response': final_response}), 200, {'Access-Control-Allow-Origin': '*'}
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500, {'Access-Control-Allow-Origin': '*'}

if __name__ == '__main__':
    app.run(debug=True)