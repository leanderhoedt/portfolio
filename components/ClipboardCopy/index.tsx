import {ReactNode, useState} from 'react';
import Tooltip from '../Tooltip';

interface ClipboardCopyTooltipProps {
  text: string;
  copiedText: string;
  textToCopy: string;
  children: ReactNode
}

const ClipboardCopyTooltip = ({text, copiedText, textToCopy, children}: ClipboardCopyTooltipProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }
  const handleCopyClick = async () => {
    try {
      // Asynchronously call copyTextToClipboard
      await copyTextToClipboard(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);

    } catch (err) {
      setIsCopied(false);
      console.log(err);
    }
  }
  return (
    <div>
      <Tooltip text={isCopied ? copiedText : text}>
        <button onClick={handleCopyClick}>
          {children}
        </button>
      </Tooltip>
    </div>
  )
}

export default ClipboardCopyTooltip
