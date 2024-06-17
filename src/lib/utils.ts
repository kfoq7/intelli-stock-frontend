import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function getRandomTime({
  minSeconds,
  maxSeconds
}: {
  minSeconds: number
  maxSeconds: number
}) {
  return (
    Math.floor(Math.random() * (maxSeconds - minSeconds + 1) + minSeconds) *
    1000
  )
}

export function getRandomNumber({ min, max }: { min: number; max: number }) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
