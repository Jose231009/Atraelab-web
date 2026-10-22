import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-white font-black text-3xl sm:text-4xl mt-10 mb-4 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-white font-bold text-2xl mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-white font-semibold text-xl mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-[#a1a1aa] text-base leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="text-[#a1a1aa] space-y-1 list-disc pl-6 mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="text-[#a1a1aa] space-y-1 list-decimal pl-6 mb-4">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
    em: ({ children }) => <em className="text-[#c8f000] not-italic font-medium">{children}</em>,
    a: ({ href, children }) => (
      <a href={href} className="text-[#c8f000] hover:underline font-medium" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 border-[#c8f000] pl-5 py-2 my-6 italic"
        style={{ background: "rgba(200,240,0,0.04)", borderRadius: "0 8px 8px 0" }}
      >
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th
        className="text-left px-4 py-2 text-xs font-black uppercase tracking-wider text-[#c8f000]"
        style={{ background: "rgba(200,240,0,0.08)", borderBottom: "1px solid rgba(200,240,0,0.2)" }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="px-4 py-2 text-[#a1a1aa]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-white/10" />,
    code: ({ children }) => (
      <code
        className="text-[#c8f000] text-sm px-1.5 py-0.5 rounded font-mono"
        style={{ background: "rgba(200,240,0,0.1)" }}
      >
        {children}
      </code>
    ),
    ...components,
  };
}
