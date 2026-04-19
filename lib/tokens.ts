export const colors = {
  bg: {
    base: '#05080f',
    card: '#0a101a',
  },
  brand: {
    green: '#9bf11c',
    blue:  '#2589ff',
  },
  text: {
    body:  '#9ca3af',
    muted: '#6b7280',
  },
  border: {
    default: '#1f2937',
  },
} as const;

export const gradients = {
  brand:   `linear-gradient(to right, #2589ff, #9bf11c)`,
  heroBgH: `linear-gradient(to right, #05080f 40%, transparent 100%)`,
  heroBgV: `linear-gradient(to top, #05080f 0%, transparent 30%)`,
  greenCta: `linear-gradient(to right, #9bf11c, #4ADE80)`,
} as const;

export const container = {
  maxWidth: '1400px',
  paddingX: { base: '1.5rem', lg: '3rem' },
} as const;
