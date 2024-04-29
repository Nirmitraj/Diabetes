from flask import Flask, request, jsonify
from app_1 import some_function_from_app1
from chatgpt_1 import some_function_from_chatgpt1
from models_1 import some_model_function

app = Flask(__name__)

@app.route('/use_app1')
def use_app1():
    result = some_function_from_app1()
    return jsonify(result)

@app.route('/use_chatgpt')
def use_chatgpt():
    data = request.args.get('input')
    result = some_function_from_chatgpt1(data)
    return jsonify(result)

@app.route('/use_model')
def use_model():
    result = some_model_function()
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
