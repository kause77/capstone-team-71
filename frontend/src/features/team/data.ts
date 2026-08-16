import type { TeamMember } from './types'

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Jonathan Tan',
    role: 'Project Manager',
    blurb:
      'Coordinates the team and oversees the overall architecture of the project, keeping everyone aligned on scope and deadlines.',
    photoUrl: '/team/jt.jpg',
  },
  {
    id: 'member-2',
    name: 'Alyssa Luu',
    role: 'Business Analyst',
    blurb:
      'Analyzes business requirements and translates them into technical specifications for the development team.',
    photoUrl: '/team/al.jpg',
  },
  {
    id: 'member-3',
    name: 'Austin Kwok',
    role: 'Developer',
    blurb:
      'One of two developers responsible for implementing the core features of the application, writing clean and maintainable code.',
    photoUrl: '/team/ak.jpg',
  },
  {
    id: 'member-4',
    name: 'Caleb Ganci',
    role: 'Developer',
    blurb:
      'One of two developers responsible for implementing the core features of the application, writing clean and maintainable code.',
    photoUrl: '/team/cg.jpg',
  },
  {
    id: 'member-5',
    name: 'Hunter Hawksworth',
    role: 'UX Designer',
    blurb:
      'Owns the visual design system and user experience research, translating requirements into clear, consistent interfaces.',
    photoUrl: '/team/hh.jpg',
  },
]
