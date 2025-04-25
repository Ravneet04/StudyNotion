import React from 'react'
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./ChatAi.css"

const ChatAi = () => {
    const [chatHistory, setChatHistory] = useState(() => {
        return JSON.parse(localStorage.getItem("chatHistory")) || [];
      });
      const [question, setQuestion] = useState("");
      const [answer, setAnswer] = useState("");
      const [generatingAnswer, setGeneratingAnswer] = useState(false);
    
      const chatContainerRef = useRef(null);
    
      // Update localStorage whenever chat history changes
      useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      }, [chatHistory]);
    
      useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [chatHistory, generatingAnswer]);
    
      async function generateAnswer(e) {
        e.preventDefault();
        if (!question.trim()) return;
        
        setGeneratingAnswer(true);
        const currentQuestion = question;
        setQuestion(""); // Clear input immediately after sending
        
        // Add user question to chat history
        setChatHistory(prev =>  [...prev, { type: 'question', content: currentQuestion }]
        );
        
        try {
          const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBQFrZ4mMp3U4ugtDDyV5S5VWfLz2Pnnqc`,
            method: "post",
            data: {
              contents: [{ parts: [{ text: currentQuestion }] }],
            },
          });
    
          const aiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                             "Sorry - No response received.";
                             
          setChatHistory(prev =>[...prev, { type: 'answer', content: aiResponse }]);
          setAnswer(aiResponse);
        } catch (error) {
          console.error("Error fetching response:", error);
          setAnswer("Sorry - Something went wrong. Please try again!");
        }
        setGeneratingAnswer(false);
      }
    
      return (
        <div className="h-[85vh] inset-0 bg-richblack-800 -mt-3">
          <div className=" max-w-4xl mx-auto flex flex-col p-3">
            <header className="text-center py-4">
              <a href="" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block">
                <h1 className="text-4xl bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
                    StudyBot – Think smarter, learn faster
                </h1>
              </a>
            </header>
    
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-scroll mb-4 rounded-lg bg-transparent shadow-lg p-4 hide-scrollbar"
            >
              {chatHistory.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-richblack-700 rounded-xl p-8 max-w-2xl">
                    <h2 className="text-2xl bg-gradient-to-r from-yellow-50 via-pink-400 to-caribbeangreen-300 bg-clip-text text-transparent font-bold mb-4">Welcome to Chat AI! </h2>
                    <p className="text-white mb-4">
                      I'm here to help you with anything you'd like to know. You can ask me about:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="text-blue-500">💡</span> General knowledge
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="text-blue-500">🔧</span> Technical questions
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="text-blue-500">📝</span> Writing assistance
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="text-blue-500">🤔</span> Problem solving
                      </div>
                    </div>
                    <p className="text-white mt-6 text-sm">
                      Just type your question below and press Enter or click Send!
                    </p>
                  </div>
                </div>
              ) : (
                <div className='h-[50vh]'>
                    {chatHistory.map((chat, index) => (
                    <div key={index} className={`mb-4 ${chat.type === 'question' ? 'text-right' : 'text-left'} `}>
                      <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                        chat.type === 'question' 
                          ? 'bg-richblack-500 text-white rounded-br-none'
                          : ' bg-richblack-50 rounded-bl-none'
                      }`}>
                        <div className="">
                        <ReactMarkdown>{chat.content}</ReactMarkdown>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
              {generatingAnswer && (
                <div className="text-left">
                  <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
    
            <form onSubmit={generateAnswer} className="bg-transparent rounded-lg shadow-lg p-3">
              <div className="flex gap-2">
                <textarea
                  required
                  className="flex-1 text-pure-greys-50 border border-pure-greys-500 rounded-md focus:outline-none focus:border-pure-greys-400 p-2 resize-none bg-transparent"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask anything..."
                  rows="1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      generateAnswer(e);
                    }
                  }}
                ></textarea>
                <button
                  type="submit"
                  className={`px-5 bg-richblack-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
                    generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={generatingAnswer}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

export default ChatAi