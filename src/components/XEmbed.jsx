import React, { useEffect, useRef } from 'react';

export default function XEmbed({ url }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(ref.current);
    }
  }, [url]);

  return (
    <div ref={ref} className="mb-3 rounded-xl overflow-hidden">
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
        <a href={url}>{url}</a>
      </blockquote>
    </div>
  );
}
