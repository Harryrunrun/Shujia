# 我的暑假计划 ☀️

一个用 **React + Vite** 做的暑假计划单页应用，包含三个功能：

- ⏳ **倒计时** —— 距离暑假（或任意事件）还有多少天/时/分/秒，支持自定义事件名和日期
- ✅ **待办打卡** —— 列出暑假小目标，勾选完成、实时查看进度
- 🗓️ **计划时间表** —— 按时间阶段展示整个暑假的安排

> 所有数据会自动保存在浏览器本地（localStorage），关掉再打开还在。

## 本地运行

需要先装好 [Node.js](https://nodejs.org/)（建议 18 以上）。

```bash
npm install      # 安装依赖（首次运行才需要）
npm run dev      # 启动开发服务器，按终端提示打开 http://localhost:5173
```

## 打包构建

```bash
npm run build    # 构建到 dist/ 目录
npm run preview  # 本地预览构建产物
```

## 怎么改成自己的

| 想改什么 | 改哪里 |
|---------|--------|
| 计划时间表的内容 | `src/components/Timeline.jsx` 里的 `PLAN` 数组 |
| 倒计时的默认事件（运行时也能在页面上改） | `src/components/Countdown.jsx` |
| 待办默认项 | `src/components/TodoList.jsx` 里的初始数组 |
| 配色 | `src/index.css` 顶部 `:root` 里的颜色变量 |
| 其它样式 | `src/index.css` |

## 目录结构

```
summer-plan/
├─ index.html               入口 HTML
├─ src/
│  ├─ main.jsx             React 入口
│  ├─ App.jsx              主页面（Tab 切换）
│  ├─ index.css            全局样式
│  ├─ components/
│  │  ├─ Countdown.jsx     倒计时
│  │  ├─ TodoList.jsx      待办打卡
│  │  └─ Timeline.jsx      计划时间表
│  └─ hooks/
│     └─ useLocalStorage.js   把数据存到浏览器的小工具
└─ package.json
```

---

Built with React 19 + Vite.
