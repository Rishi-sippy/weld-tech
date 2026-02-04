'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ValentinePage() {
  const [position, setPosition] = useState({ top: '50%', left: '65%' })
  const [accepted, setAccepted] = useState(false)
  const [hoverCount, setHoverCount] = useState(0)

  const moveButton = () => {
    const top = Math.random() * 80
    const left = Math.random() * 80

    setPosition({
      top: `${top}%`,
      left: `${left}%`
    })

    setHoverCount((prev) => prev + 1)
  }

  const scale = Math.min(1 + hoverCount * 0.15, 2.5)

  // 🎉 Celebration Screen
  if (accepted) {
    return (
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-rose-400 to-red-400">
        {/* Floating Hearts */}
        <div className="absolute inset-0 animate-pulse opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_30%,white,transparent_25%),radial-gradient(circle_at_40%_70%,white,transparent_25%)]" />

        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 text-center max-w-xl z-10">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZ4bWVvYnVyMGQzOXlmYnUwdHM1Z3czM2VuZGJka2M0cGNxcGhncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LEnV6ub31k9zSiuHGS/giphy.gif"
            alt="celebration"
            className="w-72 mx-auto mb-6 rounded-2xl shadow-lg hover:scale-110 transition duration-500"
          />

          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">🎉 Congratulations!</h1>

          <p className="text-xl text-white leading-relaxed">
            I knew it 😌 <br />
            <br />
            You are now officially
            <span className="font-bold text-yellow-200"> Rishi’s Valentine</span> — forever and always ❤️
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-pink-50 overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-20 text-center">Will you be my Valentine? 💘</h1>

      {/* YES BUTTON */}
      <button
        onClick={() => setAccepted(true)}
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.25s ease'
        }}
        className="px-10 py-4 bg-pink-600 text-white text-xl rounded-2xl shadow-lg hover:scale-110"
      >
        Yes ❤️
      </button>

      {/* NO BUTTON */}
      <button
        onMouseEnter={moveButton}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -50%)'
        }}
        className="px-10 py-4 bg-gray-800 text-white text-xl rounded-2xl shadow-lg transition-all duration-200"
      >
        No 😈
      </button>
    </div>
  )
}
