"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>This page failed</h1>
      <p>The clinic hub could not render this view.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </>
  );
}
