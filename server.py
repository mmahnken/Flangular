from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route("/")
def launch_app():
    return render_template("base.html")


@app.route("/homepage")
def get_homepage():
    return render_template("homepage.html")

@app.route("/resume")
def get_resume():
    return render_template("resume.html")

@app.route("/blog")
def get_blog():
    return render_template("blog.html")

@app.route("/posts.json")
def get_posts():
    f = open("posts.json")
    file_content = f.read()
    making_a_dict = json.loads(file_content)
    return jsonify(making_a_dict)

if __name__ == "__main__":
    app.run()
