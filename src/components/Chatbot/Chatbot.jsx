import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm BrainEdify's AI assistant 🎓\n\nআমি BrainEdify এর AI সহায়ক! আমি আপনাকে সাহায্য করতে পারি:\n\n📚 Course details (কোর্সের বিস্তারিত)\n💰 Pricing info (মূল্য তথ্য)\n📝 Enrollment process (ভর্তি প্রক্রিয়া)\n👨‍🏫 Teacher info (শিক্ষক তথ্য)\n⏰ Class schedule (ক্লাসের সময়সূচী)\n\nআপনি English, বাংলা, বা Banglish - যেকোনো ভাষায় প্রশ্ন করতে পারেন। How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const maxRetries = 2;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Enhanced sendMessage with retry logic and better error handling
  const sendMessage = useCallback(
    async (messageToSend = null, isRetry = false) => {
      const messageContent = messageToSend || inputMessage.trim();

      if (!messageContent || isLoading) return;

      // Clear previous error
      setError(null);

      // Add user message (only if not a retry)
      if (!isRetry) {
        const userMessage = {
          id: Date.now(),
          role: "user",
          content: messageContent,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");
      }

      setIsLoading(true);

      try {
        // Add timeout for Vercel compatibility
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout

        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageContent,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          // Handle specific HTTP errors
          if (response.status === 429) {
            throw new Error(
              "Too many requests. Please wait a moment before trying again.",
            );
          } else if (response.status === 503) {
            throw new Error(
              "Service temporarily unavailable. Please try again in a moment.",
            );
          } else if (response.status >= 500) {
            throw new Error(
              "Server error. Please try again or contact support.",
            );
          } else {
            throw new Error(`Request failed with status ${response.status}`);
          }
        }

        const data = await response.json();

        if (data.success && data.message) {
          const assistantMessage = {
            id: Date.now() + 1,
            role: "assistant",
            content: data.message,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
          setRetryCount(0); // Reset retry count on success
        } else {
          throw new Error(
            data.error || "Failed to get response from AI assistant",
          );
        }
      } catch (error) {
        console.error("Chatbot error:", error);

        let errorMessage =
          "I'm having trouble responding right now. Please try again or contact us directly at 01538309105! 😊";
        let canRetry = true;

        // Handle specific error types
        if (error.name === "AbortError") {
          errorMessage =
            "Response took too long. Please try a shorter question or contact us at 01538309105! ⏰";
        } else if (error.message.includes("Too many requests")) {
          errorMessage =
            "I'm getting too many requests right now. Please wait a moment and try again! 😊";
          canRetry = false; // Don't auto-retry rate limit errors
        } else if (error.message.includes("Service temporarily unavailable")) {
          errorMessage =
            "The AI service is temporarily unavailable. Please contact us directly at 01538309105! 📞";
        } else if (
          error.message.includes("Failed to fetch") ||
          error.message.includes("network")
        ) {
          errorMessage =
            "Network connection issue. Please check your connection and try again! 🌐";
        }

        // Auto-retry logic for certain errors
        if (
          canRetry &&
          retryCount < maxRetries &&
          !error.message.includes("Too many requests")
        ) {
          setRetryCount((prev) => prev + 1);
          setError({
            message: `${errorMessage} Retrying... (${retryCount + 1}/${maxRetries})`,
            canRetry: false,
          });

          // Retry after a short delay
          setTimeout(() => {
            sendMessage(messageContent, true);
          }, 2000);
          return;
        }

        // Set error state for user to manually retry
        setError({
          message: errorMessage,
          canRetry: canRetry && retryCount < maxRetries,
          originalMessage: messageContent,
        });

        // Add error message to chat
        const errorChatMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: errorMessage,
          timestamp: new Date(),
          isError: true,
        };
        setMessages((prev) => [...prev, errorChatMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [inputMessage, isLoading, retryCount],
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleRetry = () => {
    if (error?.originalMessage) {
      setRetryCount(0);
      sendMessage(error.originalMessage, true);
    }
  };

  const getSuggestedQuestions = () => [
    "What subjects do you offer?", // English
    "Course er fees koto?", // Banglish
    "ইংরেজি কোর্স আছে?", // Bengali
    "How do I enroll?", // English
    "Teacher kemon?", // Banglish
    "কোর্সের সময়সূচী কেমন?", // Bengali
    "IELTS preparation ache?", // Banglish
    "Group discount আছে?", // Mixed
    "What's the enrollment deadline?", // English
    "bKash e payment kora jay?", // Banglish
    "অনলাইন ক্লাস হয়?", // Bengali
    "Physics and Chemistry together nite pari?", // Banglish
  ];

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Chat Assistant"
        >
          <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask me anything!
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-slideInUp chatbot-window">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">BrainEdify Assistant</h3>
                <p className="text-sm opacity-90">
                  {error ? "Connection issue" : "Always here to help"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Error Banner */}
          {error && error.canRetry && (
            <div className="bg-yellow-50 border-b border-yellow-200 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  Connection issue
                </span>
              </div>
              <button
                onClick={handleRetry}
                className="text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Retry
              </button>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isError ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {message.isError ? (
                      <AlertCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                )}

                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : message.isError
                        ? "bg-red-50 text-red-800 border border-red-200"
                        : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <div
                    className={`text-xs mt-2 ${
                      message.role === "user"
                        ? "text-blue-100"
                        : message.isError
                          ? "text-red-600"
                          : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {retryCount > 0
                      ? `Retrying... (${retryCount}/${maxRetries})`
                      : "Thinking..."}
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (show only if first message and no errors) */}
          {messages.length <= 1 && !error && (
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3 font-medium">
                Quick questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {getSuggestedQuestions()
                  .slice(0, 3)
                  .map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs bg-blue-50 text-blue-600 px-3 py-2 rounded-full hover:bg-blue-100 transition-colors border border-blue-200 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {question}
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about BrainEdify..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                maxLength={500}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="w-12 h-12 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                aria-label="Send message"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Powered by AI • {inputMessage.length}/500
            </p>
          </div>
        </div>
      )}

      {/* Chatbot Styles */}
      <style jsx global>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        /* Custom scrollbar for chat messages */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }

        /* Mobile responsiveness for chatbot */
        @media (max-width: 640px) {
          .chatbot-window {
            width: calc(100vw - 2rem);
            height: 80vh;
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
