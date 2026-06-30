import { useState, useEffect } from 'react'

// 一个把 state 自动同步到 localStorage 的小 hook
// 用法：const [value, setValue] = useLocalStorage('key', 初始值)
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 写入失败（如无痕模式）时静默忽略
    }
  }, [key, value])

  return [value, setValue]
}
