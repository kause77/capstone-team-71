import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamCard } from '@/features/team/components/TeamCard'
import type { TeamMember } from '@/features/team/types'

const baseMember: TeamMember = {
  id: '1',
  name: 'Test User',
  role: 'Developer',
  blurb: 'Test blurb for the team member. This is a short description.',
  photoUrl: 'https://example.com/photo.jpg',
}

describe('TeamCard', () => {
  it('renders name and role', () => {
    render(<TeamCard member={baseMember} />)
    expect(screen.getByText(baseMember.name)).toBeInTheDocument()
    expect(screen.getByText(baseMember.role)).toBeInTheDocument()
  })

  it('renders the photo when photoUrl is provided', () => {
    render(<TeamCard member={baseMember} />)
    expect(screen.getByAltText(baseMember.name)).toBeInTheDocument()
  })

  // Edge case 2c - missing photo
  it('renders a fallback icon instead of a broken image when photoUrl is missing', () => {
    const memberWithoutPhoto = { ...baseMember, photoUrl: undefined }
    render(<TeamCard member={memberWithoutPhoto} />)

    // No <img> should render at all - TeamCard only renders <Image> when photoUrl is truthy
    expect(screen.queryByAltText(baseMember.name)).not.toBeInTheDocument()

    // The fallback icon should be present in the DOM
    const fallback = document.querySelector('[aria-hidden="true"]')
    expect(fallback).toBeInTheDocument()
  })

  // Edge case 2d - long blurb (non-visual half; see manual test script for the visual overflow check)
  it('renders without crashing when the blurb is unusually long', () => {
    const longBlurb = 'A'.repeat(1000)
    const memberWithLongBlurb = { ...baseMember, blurb: longBlurb }
    render(<TeamCard member={memberWithLongBlurb} />)
    expect(screen.getByText(longBlurb)).toBeInTheDocument()
  })

  it('applies the line-clamp-3 class so overflow is CSS-handled rather than breaking layout', () => {
    render(<TeamCard member={baseMember} />)
    const blurbEl = screen.getByText(baseMember.blurb)
    expect(blurbEl.className).toContain('line-clamp-3')
  })
})