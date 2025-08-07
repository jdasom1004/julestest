# Korean News Feed App

This project consists of a Python (Django) backend and a React Expo (TypeScript) frontend. The application fetches the latest news from a Korean Google News RSS feed via the backend and displays it in a mobile app.

## Project Structure

- `/backend`: Contains the Django backend server.
- `/client`: Contains the React Expo mobile application.

## How to Run

You will need two terminal sessions to run both the backend and the frontend simultaneously.

### 1. Run the Backend Server

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install Python dependencies:**
    *(If you haven't already)*
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: The `requirements.txt` file needs to be created from the current environment. For now, the required packages are `Django`, `djangorestframework`, `django-cors-headers`, `feedparser`)*

3.  **Run the Django development server:**
    ```bash
    python manage.py runserver
    ```
    The server will start on `http://127.0.0.1:8000`.

### 2. Run the Frontend Client

1.  **Navigate to the client directory:**
    ```bash
    cd client
    ```

2.  **Install Node.js dependencies:**
    *(If you haven't already)*
    ```bash
    npm install
    ```

3.  **Start the Expo development server:**
    ```bash
    npm start
    ```
    This will open the Expo developer tools in your browser. You can then:
    -   Scan the QR code with the Expo Go app on your physical device.
    -   Press `w` to run the app in a web browser.
    -   Run on an Android or iOS simulator.
