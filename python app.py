from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    bot_response = chatbot_function(user_input)  # Replace with your chatbot logic
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)

    