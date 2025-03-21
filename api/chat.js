from flask import Flask, request, jsonify
import notion
from llm import LLaMA

app = Flask(__name__)

# Initialize Notion API client
notion_client = notion.Client(auth=NOTION_API_TOKEN)

# Initialize LLaMA model client
llama_client = LLaMA(API_KEY=LLAMA_API_KEY)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['input']
    # Use LLaMA model to generate response
    response = llama_client.generate(text=user_input)
    # Retrieve relevant data from Notion database
    notion_data = notion_client.get_page(NOTION_PAGE_ID)
    # Generate final response
    final_response = f"{response} {notion_data}"
    return jsonify({'response': final_response})

if __name__ == '__main__':
    app.run(debug=True)