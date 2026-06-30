// 暑假计划时间表 —— 想改计划，直接修改下面这个数组就行
const PLAN = [
  {
    date: '7 月上旬',
    title: '休整 & 规划',
    desc: '调整作息，列好暑假想完成的事，给自己定个小目标。',
    icon: '🌱',
  },
  {
    date: '7 月中下旬',
    title: '学习充电',
    desc: '每天固定时间学习/看书，推进一个感兴趣的小项目。',
    icon: '📚',
  },
  {
    date: '8 月上旬',
    title: '出行 & 体验',
    desc: '安排一次旅行或周边游玩，多出去走走看看。',
    icon: '🧳',
  },
  {
    date: '8 月中下旬',
    title: '收心 & 复盘',
    desc: '查漏补缺、回顾暑假收获，从容迎接开学。',
    icon: '✨',
  },
]

export default function Timeline() {
  return (
    <div className="card timeline">
      <h2>暑假计划时间表</h2>
      <ol className="timeline-list">
        {PLAN.map((p, i) => (
          <li key={i}>
            <div className="tl-icon">{p.icon}</div>
            <div className="tl-content">
              <span className="tl-date">{p.date}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="muted hint">
        想改计划？打开 <code>src/components/Timeline.jsx</code> 修改 <code>PLAN</code> 数组即可。
      </p>
    </div>
  )
}
