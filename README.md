# Chatbot Integration with LLaMA, Notion, and Web Search

This project is a Flask-based web application that integrates a chatbot using the LLaMA language model, retrieves data from a Notion database, and performs web searches. The application provides a `/chat` endpoint that accepts user input, determines the type of query, and routes it to the appropriate source for the answer.

## Features

- **Chatbot Integration**: Uses the LLaMA language model to generate responses based on user input.
- **Notion API Integration**: Retrieves relevant data from a Notion database to enhance the chatbot's responses.
- **Web Search**: Performs web searches for queries that require external information.
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

3. Set up environment variables for the Notion API token, LLaMA API key, and Notion page ID:
    ```sh
    export NOTION_API_TOKEN=your_notion_api_token
    export LLAMA_API_KEY=your_llama_api_key
    export NOTION_PAGE_ID=your_notion_page_id
    ```

## Usage

1. Deploy the application to Vercel:
    ```sh
    vercel
    ```

2. Set up environment variables in Vercel for the Notion API token, LLaMA API key, and Notion page ID.

3. Send a POST request to the `/chat` endpoint with a JSON payload containing an `input` field:
    ```json
    {
      "input": "Your message here"
    }
    ```

4. The application will respond with a JSON object containing the generated response, data from the Notion page, or web search results.

## Example

```sh
curl -X POST https://<your-vercel-deployment-url>/chat -H "Content-Type: application/json" -d '{"input": "Hello, chatbot!"}'