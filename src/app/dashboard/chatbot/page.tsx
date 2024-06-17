'use client'

import { Container } from '@/features/core'
import { useState } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola', sender: 'user' },
    { id: 2, text: 'Hola, ¿cómo puedo ayudarte hoy?', sender: 'bot' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: 'user' }
      ])
      setNewMessage('')
    }

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: `
        El análisis de mercado es fundamental para cualquier empresa que quiera tener éxito en un entorno competitivo. Este proceso incluye la recolección y el estudio de datos sobre el mercado, los consumidores y los competidores para entender las dinámicas y tendencias actuales y anticipar cambios futuros.
        
        1. **Identificación del mercado objetivo**: Es esencial conocer quiénes son tus consumidores potenciales. Esto incluye segmentar el mercado en grupos basados en características como la demografía, la ubicación geográfica y los comportamientos de compra.
        
        2. **Estudio de la competencia**: Analizar a tus competidores te ayuda a entender sus fortalezas y debilidades. Esto te permite encontrar oportunidades para diferenciarte y ofrecer algo único a tus clientes.
        
        3. **Análisis de la demanda y tendencias del mercado**: Conocer la demanda actual y predecir tendencias futuras es crucial. Esto puede incluir estudiar los patrones de compra de los consumidores y las innovaciones tecnológicas que puedan afectar al mercado.
        
        4. **Evaluación del entorno económico y regulador**: Las condiciones económicas y las regulaciones gubernamentales pueden influir significativamente en el mercado. Evaluar factores como la inflación, el desempleo y las políticas fiscales te ayudará a prepararte para posibles desafíos y aprovechar oportunidades.
        
        5. **Análisis FODA**: Realizar un análisis de Fortalezas, Oportunidades, Debilidades y Amenazas proporciona una visión completa de tu posición en el mercado y te ayuda a desarrollar estrategias efectivas.
        
        Realizar un análisis de mercado detallado te permite tomar decisiones informadas, adaptarte a los cambios del mercado y satisfacer mejor las necesidades de tus clientes. ¿Te gustaría saber más sobre algún aspecto específico del análisis de mercado?
        `,
        sender: 'bot'
      }
      setMessages(prevMessages => [...prevMessages, botMessage])
    }, 1000) // 1 second delay
  }

  return (
    <Container className="flex flex-col h-screen bg-gray-100">
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
