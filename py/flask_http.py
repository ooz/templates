#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, abort

app = Flask(__name__)

@app.route("/")
def root():
    buf = []
    buf.append("<h1>ROOT</h1>")
    return "\n".join(buf)

@app.route('/error')
def error():
    abort(404)

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404 File Not Found! :(</h1>", 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
