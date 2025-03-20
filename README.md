# Chatbot Integration with LLaMA, Notion, and Web Search

This project is a web application that integrates a chatbot using the LLaMA language model, retrieves data from a Notion database, and performs web searches. The application provides a `/chat` endpoint that accepts user input, determines the type of query, and routes it to the appropriate source for the answer.

## Features

- **Chatbot Integration**: Uses the LLaMA language model to generate responses based on user input.
- **Notion API Integration**: Retrieves relevant data from a Notion database to enhance the chatbot's responses.
- **Web Search**: Performs web searches for queries that require external information.
- **CORS Handling**: Supports Cross-Origin Resource Sharing (CORS) for the `/chat` endpoint.
- **UI Chat App**: A React-based web app for interacting with the chatbot.

## Requirements

- Python 3.x
- Flask
- Notion API client
- LLaMA model client
- Node.js

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/DevCabin/mia.git
    cd mia
    ```

2. Install the required dependencies for the Flask API:
    ```sh
    pip install -r requirements.txt
    ```

3. Set up environment variables for the Notion API token, LLaMA API key, and Notion page ID:
    ```sh
    export NOTION_API_TOKEN=your_notion_api_token
    export LLAMA_API_KEY=your_llama_api_key
    export NOTION_PAGE_ID=your_notion_page_id
    ```

4. Install the required dependencies for the React app:
    ```sh
    npm install
    ```

## Usage

1. Deploy the Flask API and React app to Vercel:
    ```sh
    vercel
    ```

2. Set up environment variables in Vercel for the Notion API token, LLaMA API key, and Notion page ID.

3. Open the provided URL in your web browser and interact with the chatbot.

## Example


```sh
curl -X POST https://<your-vercel-deployment-url>/api/chat -H "Content-Type: application/json" -d '{"input": "Hello, chatbot!"}'