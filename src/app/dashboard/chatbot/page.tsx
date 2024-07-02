'use client'

import { useState } from 'react'
import { Container } from '@/features/core'

interface Message {
  id: number
  text: string
  sender: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user'
      }

      setMessages([...messages, userMessage])
      setNewMessage('')

      try {
        // Send the user message to the backend API
        const response = await fetch(
          'http://localhost:8000/api/chat-completion',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: newMessage,
              userId: 'kasjdfk' // Replace with actual user ID
            })
          }
        )

        const result = await response.json()
        if (result.ok && result.data && result.data.content) {
          const botMessage = {
            id: result.data.id, // Use the id from the response
            text: result.data.content,
            sender: 'bot'
          }

          setMessages(prevMessages => [...prevMessages, botMessage])
        }
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  return (
    <Container className="flex flex-col bg-gray-100">
      <div className="flex-none bg-[#214a75] text-white p-4 rounded-md">
        <h1 className="text-xl">Chat Application</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} my-2`}
          >
            <div
              className={`rounded-lg p-3 max-w-2xl break-words ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            >
              {message.text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-none p-4 bg-white border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-[#214a75] text-white rounded-lg p-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </Container>
  )
}
