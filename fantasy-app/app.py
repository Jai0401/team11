from flask import Flask

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)
import sqlite3

DATABASE = 'database.db'

def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_db(error):
    db = get_db()
    db.close()

from flask import request, redirect, url_for, render_template

@app.route('/predict/<int:match_id>', methods=['GET', 'POST'])
def predict(match_id):
    if request.method == 'POST':
        prediction = request.form['prediction']
        db = get_db()
        db.execute('INSERT INTO predictions (match_id, user_id, prediction) VALUES (?, ?, ?)', [match_id, user_id, prediction])
        db.commit()
        return redirect(url_for('results', match_id=match_id))
    else:
        return render_template('predict.html', match_id=match_id)

@app.route('/results/<int:match_id>')
def results(match_id):
    db = get_db()
    cur = db.execute('SELECT prediction FROM predictions WHERE match_id = ? AND user_id = ?', [match_id, user_id])
    prediction
