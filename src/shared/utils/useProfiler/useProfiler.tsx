/* eslint-disable no-console */
import {Profiler, ProfilerOnRenderCallback} from 'react';

export const useProfiler = (componentId: string) => {
  const callback: ProfilerOnRenderCallback = (
    id,
    phase,
    actualTime,
    baseTime,
    startTime,
    commitTime,
  ) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };

  return ({children}: {children: React.ReactNode}) => (
    <Profiler id={componentId} onRender={callback}>
      {children}
    </Profiler>
  );
};
