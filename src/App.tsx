import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import './App.css'

function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://steveykyu.app.n8n.cloud/webhook/838b8a3c-76de-41ea-8a6a-da3938fe8283/chat',
      mode: 'fullscreen',
      showWelcomeScreen: true,
      initialMessages: ['Hello! How can I help you today?']
    });
  }, []);

  return (
    // <div className="app-container">
    //   <header className="app-header">
    //     <h1>N8N Chatbot Demo</h1>
    //     <p>Ask me anything using the chat widget in the bottom right corner!</p>
    //   </header>
    //   <div id="n8n-chat"></div>
    // </div>
      <div id="n8n-chat"></div>
  )
}

export default App
