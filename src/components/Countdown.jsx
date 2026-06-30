import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// 计算距离目标时间还剩多少天/时/分/秒
function calcRemaining(targetIso) {
  const target = new Date(targetIso).getTime()
  const diff = target - Date.now()
  if (Number.isNaN(target) || diff <= 0) {
    return { past: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    past: false,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

const UNITS = [
  { key: 'days', label: '天' },
  { key: 'hours', label: '时' },
  { key: 'minutes', label: '分' },
  { key: 'seconds', label: '秒' },
]

export default function Countdown() {
  const [eventName, setEventName] = useLocalStorage('sp.eventName', '暑假开始')
  const [eventDate, setEventDate] = useLocalStorage('sp.eventDate', '2026-07-01')
  const [remaining, setRemaining] = useState(() => calcRemaining(eventDate))
  const [editing, setEditing] = useState(false)

  // 每秒刷新一次倒计时
  useEffect(() => {
    setRemaining(calcRemaining(eventDate))
    const id = setInterval(() => setRemaining(calcRemaining(eventDate)), 1000)
    return () => clearInterval(id)
  }, [eventDate])

  return (
    <div className="card countdown">
      <div className="countdown-head">
        <div>
          <p className="muted">距离</p>
          <h2 className="event-name">{eventName}</h2>
        </div>
        <button className="btn-ghost" onClick={() => setEditing((e) => !e)}>
          {editing ? '完成' : '修改'}
        </button>
      </div>

      {editing && (
        <div className="countdown-edit">
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="事件名称，比如：暑假开始"
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
      )}

      {remaining.past ? (
        <p className="past-msg">{eventName} 已经开始啦 🎉 好好享受暑假！</p>
      ) : (
        <div className="countdown-grid">
          {UNITS.map((u) => (
            <div className="time-box" key={u.key}>
              <span className="time-num">
                {String(remaining[u.key]).padStart(2, '0')}
              </span>
              <span className="time-label">{u.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
