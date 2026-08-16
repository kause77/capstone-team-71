'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'
import type { TeamMember } from '../types'

export function TeamCard({ member }: { member: TeamMember }) {
  const { name, role, blurb, photoUrl } = member
  const [expanded, setExpanded] = useState(false)

  const [trunked, setTrunk] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {     //measure the text length for button display
    const measure = () => {
    const el = textRef.current 
    if (el) {
      setTrunk(el.scrollHeight > el.clientHeight)
    }
  }
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => requestAnimationFrame(measure))
  } else {requestAnimationFrame(measure)}
  
  window.addEventListener('resize', measure) //recalculate on page resize

  return () => window.removeEventListener('resize', measure)

  
  },[blurb])

  


  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-6 text-center shadow-sm">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-input-blue">
        {photoUrl ? (
          <Image src={photoUrl} alt={name} fill className="object-cover" unoptimized />
        ) : (
          <div className="flex size-full items-center justify-center" aria-hidden="true">
            <User className="size-10 text-white/70" />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <p className="font-bold text-white">{name}</p>
        <p className="text-xs text-cream">{role}</p>
      </div>

      <p ref={textRef} className={`text-sm text-white/70 ${expanded ? '' : 'line-clamp-3'}`}>{blurb}</p>
     {trunked && //only show if text is cut off 
      (
     <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-medium text-cream underline hover:text-white"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>) }
    </div>
  )
}
