# Diabetes Prediction Frontend

This is a Next.js application that serves as the frontend for the Diabetes Prediction project. It integrates with Clerk for authentication.

## Backend Repository & API

The backend API code for this project is hosted in a separate repository. You can find it and set it up from here:
[https://github.com/chinni-d/diabetes_predictor_api](https://github.com/chinni-d/diabetes_predictor_api)

### About the Backend API
The backend is a REST API built with Flask that predicts the likelihood of diabetes based on clinical input features. It exposes two machine learning models: a **basic model** and an **ensemble model**, which outputs a prediction along with a confidence score.

#### API Endpoints
- **`GET /`**: Returns a welcome message and basic usage information.
- **`POST /predict`**: Predicts diabetes risk for a given set of clinical features (e.g., pregnancies, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age, modelType). 
  - Required Header: `Content-Type: application/json`
  - Returns the prediction (1 for High risk, 0 for Low risk), confidence score, risk level, and the model used.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Clerk account and project for authentication.

### Installation

1. Clone this repository or open the project directory.
2. Install the necessary dependencies:

   ```bash
   npm install
   ```

### Environment Variables

To run this project properly, you will need to configure your environment variables for Clerk authentication.

1. You will find an `.env.example` file in the root directory. Copy it to create a new file named `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and substitute the placeholders with your actual Clerk keys from your Clerk dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk Publishable Key.
   - `CLERK_SECRET_KEY`: Your Clerk Secret Key.

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
