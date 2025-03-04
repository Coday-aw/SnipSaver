import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ value, onChange }: CodeEditorProps) => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      name="codeEditor"
      onChange={onChange}
      fontSize={14}
      lineHeight={19}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      value={value}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        enableMobileMenu: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      width="100%"
      height="500px"
      className="hover:border-blue-500 hover:border-4  rounded-md mt-2"
    />
  );
};
export default CodeEditor;
