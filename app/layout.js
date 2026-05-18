import './globals.css'

export const metadata = {
  title: 'Asit Piri | Enterprise AI Strategist & Quantum-AI Architect',
  description:
    'Visionary Enterprise AI Strategist and Quantum-AI Architect with 25+ years transforming large-scale data, cloud, and AI ecosystems into revenue-generating platforms. Expert in Generative AI, Agentic AI, Graph-RAG, LLMOps, and Quantum–Classical Hybrid Systems.',
  keywords: [
    'AI Strategy', 'Enterprise AI', 'Generative AI', 'Agentic AI', 'Graph-RAG',
    'LLMOps', 'Quantum AI', 'Data Science', 'Machine Learning', 'AI Consulting',
    'Freelance AI Architect', 'AI Engineering Leadership',
  ],
  authors: [{ name: 'Asit Piri' }],
  creator: 'Asit Piri',
  openGraph: {
    title: 'Asit Piri | Enterprise AI Strategist & Quantum-AI Architect',
    description: '25+ years building enterprise AI platforms that deliver measurable commercial impact.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asit Piri | Enterprise AI Strategist',
    description: '25+ years building enterprise AI platforms.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
