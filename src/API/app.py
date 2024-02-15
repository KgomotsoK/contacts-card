from flask import Flask, jsonify
import pyodbc
import os
from flask_cors import CORS

app = Flask(__name__)
current_directory = os.path.dirname(os.path.abspath(__file__))

database_folder = os.path.join(current_directory, '..', 'Database')

DATABASE_PATH = os.path.join(database_folder, 'Contacts.accdb')

def get_contacts():
    connection = pyodbc.connect('DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=' + DATABASE_PATH)
    cursor = connection.cursor()
    
    cursor.execute('SELECT * FROM People')
    
    people = []
    
    for row in cursor.fetchall():
        info = {
            'id': row[0],
            'names': row[1],
            'Occupation': row[2],
            'Phone': row[3],
            'Email': row[4],
            'Quote': row[5]
        }
        people.append(info)
        
    
    connection.close()
    return people
    
@app.route('/api/people')
def people():
    contacts_data = get_contacts()
    return jsonify(contacts_data)

if __name__ == '__main__':
    app.run(debug=True)
    
CORS(app)