import sqlite3
from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__)
db = sqlite3.connect('auto.db', check_same_thread=False)

@staticmethod
def get_cars():
    data = db.execute('SELECT * FROM autos').fetchall()
    if data:
        return data
    else:
        return None

@app.route('/', methods=['GET'])
def home():
    return render_template('pages/prices.html')

if __name__ == "__main__":
    app.run()