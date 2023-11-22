import * as React from 'react'
import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export const ChevronDownIcon = (props: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-chevron-down"
        viewBox="0 0 24 24"
    >
        <path d="M6 9l6 6 6-6"></path>
    </svg>
)
