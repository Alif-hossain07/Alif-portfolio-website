import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, X, Minus } from 'lucide-react';

const COMMANDS = {
  help: 'Available commands:\n  about    - read about me\n  skills   - list my technical skills\n  projects - view top projects\n  contact  - get my contact info\n  clear    - clear the terminal',
  about: 'I am Md Alif Hossain, a passionate Full-Stack Web Developer from Bangladesh. I love crafting clean code and pixel-perfect interfaces.',
  skills: 'Tech Stack:\n- Frontend: React, Next.js, HTML/CSS, Tailwind\n- Backend: Node.js, Express, Python, Django\n- Databases: MongoDB, PostgreSQL',
  projects: '1. ShopVerse (E-Commerce)\n2. TaskFlow (Project Management)\n3. DevNotes (Developer Blog)',
  contact: 'Email: alifhossain72003@gmail.com\nLinkedIn: linkedin.com/in/md-alif-hossain-a00537345\nGitHub: github.com/alifhossainmia',
  sudo: 'Permission denied. Nice try though! ;)'
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to AlifOS (v1.0.0)' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      
      const newHistory = [...history, { type: 'input', text: input }];
      
      if (!cmd) {
        setHistory(newHistory);
        return;
      }
      
      if (cmd === 'clear') {
        setHistory([]);
        return;
      }

      if (COMMANDS[cmd]) {
        newHistory.push({ type: 'output', text: COMMANDS[cmd] });
      } else if (cmd.startsWith('sudo')) {
        newHistory.push({ type: 'output', text: COMMANDS.sudo });
      } else {
        newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
      }
      
      setHistory(newHistory);
    }
  };

  if (!isOpen) {
    return (
      <button className="terminal-toggle-btn" onClick={() => setIsOpen(true)}>
        <TerminalIcon size={24} />
      </button>
    );
  }

  return (
    <div className={`terminal-window ${isMinimized ? 'minimized' : ''}`}>
      <div className="terminal-header">
        <div className="terminal-title">
          <TerminalIcon size={14} /> guest@alif-os:~
        </div>
        <div className="terminal-controls">
          <button onClick={() => setIsMinimized(!isMinimized)}><Minus size={14} /></button>
          <button><Maximize2 size={12} /></button>
          <button onClick={() => setIsOpen(false)} className="close"><X size={14} /></button>
        </div>
      </div>
      
      {!isMinimized && (
        <div className="terminal-body">
          {history.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type}`}>
              {line.type === 'input' && <span className="prompt">guest@alif-os:~$</span>}
              <span style={{ whiteSpace: 'pre-wrap' }}>{line.text}</span>
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="prompt">guest@alif-os:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}
