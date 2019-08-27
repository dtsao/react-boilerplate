import React, { useState, useEffect } from 'react';

function HelloHooks() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    document.title = show ? 'Hi There' : 'I\'m hiding';
  });

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <h1>HELLO HOOKS</h1>}
    </>
  )
}

export default HelloHooks;