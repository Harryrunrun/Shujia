import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function TodoList() {
  const [todos, setTodos] = useLocalStorage('sp.todos', [
    { id: 1, text: '读完两本喜欢的书', done: false },
    { id: 2, text: '学会做三道菜', done: false },
    { id: 3, text: '每周运动三次', done: false },
    { id: 4, text: '整理一次房间', done: false },
  ])
  const [input, setInput] = useState('')

  const add = () => {
    const text = input.trim()
    if (!text) return
    setTodos((list) => [...list, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggle = (id) =>
    setTodos((list) =>
      list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )

  const remove = (id) => setTodos((list) => list.filter((t) => t.id !== id))

  const doneCount = todos.filter((t) => t.done).length
  const pct = todos.length ? Math.round((doneCount / todos.length) * 100) : 0

  return (
    <div className="card todo">
      <div className="todo-head">
        <h2>待办打卡</h2>
        <span className="muted">
          {doneCount} / {todos.length} 完成
        </span>
      </div>

      <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <p className="muted progress-text">完成度 {pct}%</p>

      <div className="todo-add">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && add()}
          placeholder="添加一个暑假小目标…"
        />
        <button onClick={add}>添加</button>
      </div>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              <span>{t.text}</span>
            </label>
            <button
              className="btn-remove"
              onClick={() => remove(t.id)}
              aria-label="删除"
            >
              ✕
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <p className="muted empty">还没有任务，先加一个吧～</p>
        )}
      </ul>
    </div>
  )
}
