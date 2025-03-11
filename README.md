# AI Code Reviewer

An AI-powered code review application that provides instant feedback on your code.

## Project Structure

```
.
├── BackEnd/         # Express backend server
├── FrontEnd/        # React + Vite frontend
└── package.json     # Root package.json for deployment
```

## Environment Variables

### Backend (.env)

```
PORT=3000
GOOGLE_API_KEY=your_google_api_key
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:3000 # Development
VITE_API_URL=https://your-backend-url.onrender.com # Production
```

## Deployment

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - Root Directory: BackEnd
   - Environment: Node
   - Build Command: npm install
   - Start Command: npm start
4. Add environment variables in Render dashboard

### Frontend (Vercel)

1. Import your repository to Vercel
2. Configure:
   - Framework Preset: Vite
   - Root Directory: FrontEnd
   - Build Command: npm run build
   - Output Directory: dist
3. Add VITE_API_URL environment variable

## Local Development

1. Clone the repository
2. Install dependencies:

   ```bash
   # Install backend dependencies
   cd BackEnd
   npm install

   # Install frontend dependencies
   cd ../FrontEnd
   npm install
   ```

3. Create .env files in both directories
4. Start the servers:

   ```bash
   # Start backend (from BackEnd directory)
   npm start

   # Start frontend (from FrontEnd directory)
   npm run dev
   ```

## Tech Stack

- Frontend: React, Vite, Prism.js
- Backend: Express.js, Google AI
- Deployment: Vercel (Frontend), Render (Backend)

## 🌟 Features

- **Automated Code Reviews**: Get instant, detailed code reviews
- **Best Practices**: Receive suggestions based on industry standards
- **Performance Analysis**: Identify potential performance bottlenecks
- **Security Checks**: Get alerts about security vulnerabilities
- **Code Quality**: Suggestions for improving code maintainability
- **Modern Practices**: Updates on latest frameworks and patterns

## 🛠️ Tech Stack

- **Backend**:

  - Node.js
  - Express.js
  - Google Gemini AI API
  - Docker

- **Frontend**:
  - React/Next.js
  - Modern UI components
  - Responsive design

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18 or higher installed
- npm or yarn package manager
- Google Gemini API key
- Git installed
- Docker (optional, for containerization)

## 🚀 Getting Started

### Local Development Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/code-reviewer.git
   cd code-reviewer
   ```

2. **Backend Setup**

   ```bash
   cd BackEnd
   npm install
   ```

3. **Environment Variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` file and add:

   ```
   PORT=8000
   GOOGLE_GEMINI_KEY=your_gemini_api_key
   ```

4. **Start Backend Server**

   ```bash
   npm run dev
   ```

   Server will start at http://localhost:8000

5. **Frontend Setup**

   ```bash
   cd ../FrontEnd
   npm install
   ```

6. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```
   Frontend will be available at http://localhost:3000

## 🐳 Docker Setup

1. **Build Docker Image**

   ```bash
   docker build -t code-reviewer .
   ```

2. **Run Docker Container**
   ```bash
   docker run -p 8000:8000 --env-file .env code-reviewer
   ```

## 🌐 API Endpoints

### GET /ai/get-response

- **Purpose**: Get AI code review
- **Query Parameters**:
  - `prompt`: Code snippet or review request
- **Response**: AI-generated code review
- **Example**:
  ```bash
  curl "http://localhost:8000/ai/get-response?prompt=Review%20this%20code"
  ```

## 💻 Usage Instructions

1. **Submit Code for Review**

   - Paste your code snippet
   - Add any specific review requirements
   - Click "Get Review"

2. **Review Feedback**

   - AI will analyze your code
   - Review suggestions and improvements
   - Implementation recommendations
   - Best practices advice

3. **Apply Changes**
   - Follow the suggested improvements
   - Implement security fixes
   - Optimize performance
   - Enhance code quality

## 🚀 Deployment

### Backend Deployment (Render.com)

1. Fork this repository
2. Sign up on [Render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     - `PORT`: 8000
     - `GOOGLE_GEMINI_KEY`: Your API key

### Frontend Deployment (Vercel)

1. Sign up on [Vercel.com](https://vercel.com)
2. Import your frontend repository
3. Configure environment variables
4. Deploy

## 🔒 Security

- Never commit your `.env` file
- Keep your API keys secure
- Regular security updates
- Input validation
- Rate limiting implementation

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit changes
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push to branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Google Gemini AI
- OpenAI Documentation
- React Documentation
- Express.js Community

---

Made with ❤️ by SHIVAM SHUKLA
