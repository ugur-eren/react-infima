import React from 'react';
import dedent from 'dedent';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import vsDark from 'prism-react-renderer/themes/vsDark';
import LiveScope from './ReactLiveScope';

const Playground = ({code: codeProp, componentContainerProps, ...props}) => {
  const code = dedent(codeProp);

  return (
    <LiveProvider code={code} scope={LiveScope} theme={vsDark} {...props}>
      <LivePreview {...componentContainerProps} />

      <div className="card" style={{marginTop: '12px'}}>
        <LiveEditor />
      </div>

      <LiveError />
    </LiveProvider>
  );
};

export default Playground;
