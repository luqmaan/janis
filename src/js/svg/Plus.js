import React from 'react';

function PlusSVG(props) {
  const { size, title } = props

  return (
    <svg width={size} height={size} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title">
      <title id="title">{ title || 'Plus' }</title>
      <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/>
    </svg>
  )
}
export default PlusSVG;