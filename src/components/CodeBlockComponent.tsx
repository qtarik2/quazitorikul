import { CodeBlock } from "react-code-blocks";

interface Props {
  code: string;
  language?: string;
  showLineNumber?: boolean;
  theme?: object;
  highlight?:string
}
function CodeBlockComponent({ code, language, showLineNumber, theme, highlight }: Props) {
  const formattedCode = code.replace(/\\n/g, "\n");
  return (
    <CodeBlock
      text={formattedCode}
      language={language}
      showLineNumbers={showLineNumber}
      theme={theme}
      highlight={highlight}
    />
  );
}

export default CodeBlockComponent;
