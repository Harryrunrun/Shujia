import { useState } from 'react'
import Countdown from './components/Countdown'
import TodoList from './components/TodoList'
import Timeline from './components/Timeline'

const TABS = [
  { key: 'countdown', label: '倒计时', icon: '⏳' },
  { key: 'todo', label: '待办打卡', icon: '✅' },
  { key: 'timeline', label: '计划时间表', icon: '🗓️' },
]

export default function App() {
  const [active, setActive] = useState('countdown')

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          我的暑假计划 <span className="sun">☀️</span>
        </h1>
        <p className="subtitle">把假期过得有计划、有期待</p>
      </header>

      <nav className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={'tab' + (active === t.key ? ' active' : '')}
            onClick={() => setActive(t.key)}
          >
            <span className="tab-icon">{t.icon}</span>
            <span className="tab-label">{t.label}</span>
          </button>
        ))}
      </nav>

      <main className="content">
        {active === 'countdown' && <Countdown />}
        {active === 'todo' && <TodoList />}
        {active === 'timeline' && <Timeline />}
      </main>

      <footer className="app-footer">
        Made with React + Vite · 数据自动保存在本地浏览器
      </footer>
    </div>
  )
}
