'use client';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

interface TypeWriterProps {
  strings: string[];
  colorClass: string;
}

export default function TypeWriter({
  strings = [],
  colorClass = 'color-primary-1',
}: TypeWriterProps) {
  return (
    <div className={`${colorClass}`}>
      <TypewriterComponent
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
