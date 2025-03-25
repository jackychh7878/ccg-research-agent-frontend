import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import './App.css'
import CCGLogo from './assets/CCG_Logo_V.png'

function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://steveykyu.app.n8n.cloud/webhook/838b8a3c-76de-41ea-8a6a-da3938fe8283/chat',
      target: '#n8n-chat-container',
      mode: 'fullscreen',
      showWelcomeScreen: true,
      initialMessages: ['Hello! Welcome to CCG Cost Research Agent', 'How can I help you today?']
    });
  }, []);

  return (
    <div className="chat-app-wrapper">
      <header className="app-header">
        <img src={CCGLogo} alt="CCG Logo" className="ccg-logo" />
        <h1 className="app-title">Cost Library Research Agent</h1>
      </header>
        <div id="n8n-chat-container" className="full-height-chat"></div>
    </div>
  )
}

export default App
