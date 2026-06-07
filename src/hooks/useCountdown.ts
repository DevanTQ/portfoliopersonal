import { useState, useEffect } from 'react'

type CountdownResult = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function useCountdown(targetDate: string): CountdownResult {
  const target = new Date(targetDate).getTime()

  const calc = (): CountdownResult => {
    const now = Date.now()
    const diff = target - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
    }

    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isExpired: false,
    }
  }

  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calc)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}
