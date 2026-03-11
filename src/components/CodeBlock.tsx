"use client";

import { useState, useRef } from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    const code = preRef.current?.textContent || "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract language from className (e.g., "language-python")
  const langMatch =
    typeof props["data-language"] === "string"
      ? props["data-language"]
      : undefined;

  return (
    <div className="relative group my-6">
      {/* Language badge + Copy button */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 rounded-t-[var(--radius-card)] bg-[var(--color-bg-card)] border-b border-[var(--color-border)] z-10">
        {langMatch && (
          <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
            {langMatch}
          </span>
        )}
        {!langMatch && <span />}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
          aria-label="Copy code"
          id="copy-code-button"
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <pre ref={preRef} className="!pt-12 !rounded-[var(--radius-card)]" {...props}>
        {children}
      </pre>
    </div>
  );
}
