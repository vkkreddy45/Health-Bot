# run application using - flask run

from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc
import os
import pandas as pd

app = Flask(__name__)
CORS(app)

# Set up the database connection
server = 'dataeserver.database.windows.net'
database = 'authentication'
username = 'sqleadmin'
password = 'dataeserveradmin007$'
conn_str = f'Driver={{ODBC Driver 18 for SQL Server}};Server={server},1433;Database={database};Uid={username};Pwd={password};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'

@app.route('/signupcreation', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        print(data)
        firstname = data['firstName']
        lastname = data['lastName']
        email = data['email']
        password = data['password']
        
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (FirstName, LastName, EmailID, [Password]) VALUES (?, ?, ?, ?)", (firstname, lastname, email, password))
        conn.commit()
        cursor.close()
        
        return jsonify({'message': 'User signed up successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})
    
@app.route('/login', methods=['POST'])
def signin():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE EmailID = ? AND [Password] = ?", (email, password))
        user = cursor.fetchone()
        cursor.close()

        if user:
            return jsonify({'success': True, 'message': 'Sign-in successful'})
        else:
            return jsonify({'success': False, 'message': 'Invalid email or password'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
    
@app.route('/profile/<string:email>', methods=['GET'])
def get_profile(email):
    try:
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("SELECT FirstName, LastName, EmailID FROM users WHERE EmailID = ?", (email,))
        user = cursor.fetchone()
        cursor.close()

        if user:
            user_details = {
                'firstName': user[0],
                'lastName': user[1],
                'email': user[2]
            }
            return jsonify(user_details)
        else:
            return jsonify({'error': 'User not found'})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/upload_and_parse_file', methods=['POST'])
def upload_and_parse_file():
    try:
        # Check if file is uploaded
        if 'file' not in request.files:
            return jsonify({'error': 'No file is Uploaded'})
        print("File is Uploaded Successfully!")
        uploaded_file = request.files['file']
        filename = uploaded_file.filename
        file_type = os.path.splitext(filename)[1]
        uploaded_by = request.form['uploadedBy']
        file_size = request.content_length
        
        # Check file type and handle accordingly
        if file_type == '.csv':
            # Read CSV file using pandas
            df = pd.read_csv(uploaded_file)
            df = df[:50]
        elif file_type in ['.xls', '.xlsx']:
            # Read Excel file using pandas
            df = pd.read_excel(uploaded_file)
            df = df[:50]
        else:
            return jsonify({'error': 'Unsupported file format'})

        # Convert DataFrame to JSON
        json_data = df.to_json(orient='records')
        
        dtypes_dict = df.dtypes.apply(lambda x: x.name).to_dict()
        
        print(filename,'$', file_type,'$', file_size,'$', uploaded_by)
        # Store file information and user in the database
        conn = pyodbc.connect(conn_str)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO uploadedfiles (FileName, FileType, FileSize, UploadedBy) VALUES (?, ?, ?, ?)", (filename, file_type, file_size, uploaded_by))
        conn.commit()
        cursor.close()

        return jsonify({'message': 'File uploaded and parsed successfully', 'data': json_data, 'data_types': dtypes_dict})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)