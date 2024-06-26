import { useEffect } from 'react';

const useClickSound = () => {
  useEffect(() => {
    const clickSound = new Audio(`${process.env.PUBLIC_URL}/click.mp3`);

    const playClickSound = () => {
      clickSound.currentTime = 0; // Rewind to the start
      clickSound.play();
    };

    document.addEventListener('click', playClickSound);

    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, []);
};

export default useClickSound;