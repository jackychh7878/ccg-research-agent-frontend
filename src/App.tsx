import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'
import './App.css'
import CCGLogo from './assets/catomind_logo.png'

function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://steveykyu.app.n8n.cloud/webhook/062b213b-7862-4d1d-bcdf-1dfcc963de3f/chat',
      target: '#n8n-chat-container',
      mode: 'fullscreen',
      showWelcomeScreen: true,
      initialMessages: ['Hello! Welcome to T-Flow Project Management Agent', 'How can I help you today?']
    });
  }, []);

  return (
    <div className="chat-app-wrapper">
      <header className="app-header">
        <img src={CCGLogo} alt="CCG Logo" className="ccg-logo" />
        <h1 className="app-title">T-Flow Project Management Agent</h1>
      </header>
        <div id="n8n-chat-container" className="full-height-chat"></div>
    </div>
  )
}

export default App
