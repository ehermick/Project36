import redis
from flask import Flask

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

@app.route('/')
def hello():
    return 'Docker Learning Task For Christian Senz! This will allow for me to better grasp a new pull request from a team mate.\n'