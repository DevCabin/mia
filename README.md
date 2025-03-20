# Chatbot Integration with LLaMA and Notion

This project is a Flask-based web application that integrates a chatbot using the LLaMA language model and retrieves data from a Notion database. The application provides a `/chat` endpoint that accepts user input, generates a response using the LLaMA model, and combines it with data from a specified Notion page.

## Features

- **Chatbot Integration**: Uses the LLaMA language model to generate responses based on user input.
- **Notion API Integration**: Retrieves relevant data from a Notion database to enhance the chatbot's responses.
- **CORS Handling**: Supports Cross-Origin Resource Sharing (CORS) for the `/chat` endpoint.

## Requirements

- Python 3.x
- Flask
- Notion API client
- LLaMA model client

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/DevCabin/mia.git
    cd mia
    ```

2. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Set up environment variables for the Notion API token and LLaMA API key:
    ```sh
    export NOTION_API_TOKEN=your_notion_api_token
    export LLAMA_API_KEY=your_llama_api_key
    export NOTION_PAGE_ID=your_notion_page_id
    ```

## Usage

1. Run the Flask application:
    ```sh
    python app.py
    ```

2. Send a POST request to the `/chat` endpoint with a JSON payload containing an `input` field:
    ```json
    {
      "input": "Your message here"
    }
    ```

3. The application will respond with a JSON object containing the generated response and data from the Notion page.

## Example

```sh
curl -X POST http://localhost:5000/chat -H "Content-Type: application/json" -d '{"input": "Hello, chatbot!"}'