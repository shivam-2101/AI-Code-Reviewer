import { useState, useEffect } from "react";
import "prismjs/themes/prism-okaidia.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    prism.highlightAll();
    console.log("API URL:", API_URL); // Log the API URL to verify it's correct
  }, []);

  async function reviewCode() {
    try {
      setLoading(true);
      setError(null);
      console.log("Sending request to:", `${API_URL}/ai/get-review`);
      const response = await axios.post(`${API_URL}/ai/get-review`, {
        code,
      });
      console.log("Response:", response.data);
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setError(error.message);
      setReview(`Error: ${error.message}. Please try again.`);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: 15,
                fontWeight: "500",
                overflow: "auto",
                border: "1px solid #2d2d2d",
                borderRadius: "8px",
                height: "100%",
                width: "100%",
                lineHeight: "1.6",
                letterSpacing: "0.5px",
                color: "#e4e4e4",
                backgroundColor: "#1e1e1e",
              }}
            />
          </div>
          <div
            onClick={loading ? null : reviewCode}
            className={`review ${loading ? "loading" : ""}`}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Reviewing..." : "Review"}
          </div>
        </div>
        <div className="right">
          {error && (
            <div style={{ color: "#ff6b6b", marginBottom: "1rem" }}>
              Error: {error}
            </div>
          )}
          <Markdown
            rehypePlugins={[rehypeHighlight]}
            components={{
              p: ({ node, ...props }) => (
                <p
                  style={{ color: "#e4e4e4", marginBottom: "1rem" }}
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1
                  style={{
                    color: "#ffffff",
                    marginBottom: "1.5rem",
                    fontSize: "1.8rem",
                  }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    color: "#ffffff",
                    marginBottom: "1.2rem",
                    fontSize: "1.5rem",
                  }}
                  {...props}
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  style={{
                    backgroundColor: "#2d2d2d",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    color: "#e4e4e4",
                  }}
                  {...props}
                />
              ),
            }}
          >
            {review}
          </Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
