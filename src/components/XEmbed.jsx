import React, { useEffect, useRef, useState } from 'react';

export default function XEmbed({ url }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (visible && ref.current && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(ref.current);
    }
  }, [visible, url]);

  return (
    <div ref={ref} className="mb-3 rounded-xl overflow-hidden">
      {visible ? (
        <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
          <a href={url}>{url}</a>
        </blockquote>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-xs text-gray-400">Loading post...</div>
      )}
    </div>
  );
}
