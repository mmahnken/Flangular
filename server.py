from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)


@app.route("/")
def launch_app():
    return render_template("base.html")


@app.route("/posts.json")
def get_posts():
    f = open("posts.json")
    file_content = f.read()
    making_a_dict = json.loads(file_content)
    return jsonify(making_a_dict)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)
