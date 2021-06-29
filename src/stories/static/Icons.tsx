import React from 'react'

export const EditIcon = ({ className = '' }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
  </svg>
)

export const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
      fillRule="evenodd"
    ></path>
  </svg>
)
