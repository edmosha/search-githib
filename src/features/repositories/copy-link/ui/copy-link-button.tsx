import { useState } from 'react';

import copy from 'clipboard-copy';

import { LinkBlueIcon, LinkIcon } from '@/shared/assets';
import { IconButton } from '@/shared/ui';

type CopyLinkButtonProps = {
  url: string;
};

export const CopyLinkButton = ({ url }: CopyLinkButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    copy(url);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <IconButton onClick={handleCopy}>
      {isCopied ? <LinkBlueIcon /> : <LinkIcon />}
    </IconButton>
  );
};
