# Code Reviewer AI 🤖

A powerful AI-powered code review assistant that leverages Google's Gemini AI to provide professional code reviews with 7+ years of simulated experience. This tool helps developers improve their code quality, identify potential issues, and learn best practices.

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
   GOOGLE_GEMINI_KEY=your_gemini_api_key_here
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
