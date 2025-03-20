from flask import Flask, request, jsonify
from llm import LLaMA
import notion

app = Flask(__name__)

# Initialize Notion API client
notion_client = notion.Client(auth=NOTION_API_TOKEN)

# Initialize LLaMA model client
llama_client = LLaMA(API_KEY=LLAMA_API_KEY)

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
        
        if 'mine' in user_input.lower() or 'my' in user_input.lower():
            notion_data = notion_client.get_page(NOTION_PAGE_ID)
            final_response = f"Notion data: {notion_data}"
        elif 'search' in user_input.lower():
            final_response = web_search(user_input)
        else:
            response = llama_client.generate(text=user_input)
            final_response = response
        
        return jsonify({'response': final_response}), 200, {'Access-Control-Allow-Origin': '*'}
    except Exception as e:
        return jsonify({'error': str(e)}), 500, {'Access-Control-Allow-Origin': '*'}

if __name__ == '__main__':
    app.run(debug=True)