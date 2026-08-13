import Image from 'next/image'
import { User } from 'lucide-react'
import type { TeamMember } from '../types'

export function TeamCard({ member }: { member: TeamMember }) {
  const { name, role, blurb, photoUrl } = member

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

      <p className="line-clamp-3 text-sm text-white/70">{blurb}</p>
    </div>
  )
}
