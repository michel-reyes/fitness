import { useState, useEffect, useRef } from 'react';
import { useBeginnerContext } from '@/context/BeginnerContext';
import { useRange } from '@/hooks/useRange';
import useSwipe from 'beautiful-react-hooks/useSwipe';

import { fixRounds } from '@/utils';

function Workout() {
  const ref = useRef();
  const options = {
    threshold: 50,
    preventDefault: false,
    usePassiveEvents: true,
  };
  const swipeState = useSwipe(ref, options);

  const {
    currentDay: { workouts },
  } = useBeginnerContext();
  const [currentExercise, setCurrentExercise] = useRange(
    0,
    workouts.length - 1
  );
  const { title, sets, time, reps, image } = workouts[currentExercise];
  const rounds = fixRounds(sets, time, reps);

  useEffect(() => {
    if (swipeState.swiping) return;
    if (swipeState.direction === 'left') {
      setCurrentExercise(currentExercise + 1);
    } else {
      setCurrentExercise(currentExercise - 1);
    }
  }, [swipeState.swiping]);

  return (
    <main className="relative">
      <header className="flex fixed top-0 left-0 right-0 p-2 justify-between z-10 ">
        <button className="p-4 rounded-full bg-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>
        <button className="p-4 rounded-full bg-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>

      <section
        ref={ref}
        className="absolute top-0 h-screen left-0 w-screen flex items-center justify-center"
      >
        <img src={`./assets/${image}`} alt="sample" className="w-full" />
      </section>

      <footer className="flex fixed bottom-0 left-0 right-0 px-6 py-2 flex-col ">
        {/* current workout name, time and reps */}
        <div className="mb-3">
          <h1 className="text-3xl font-bold">{rounds}</h1>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        {/* full workout time */}
        <div className="flex gap-2 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <div className="h-1 w-full bg-slate-300 relative rounded-full">
            <div
              className="absolute h-1 left-0 bg-slate-800 rounded-full"
              style={{ width: '20%' }}
            ></div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export { Workout };
