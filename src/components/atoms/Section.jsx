import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16">
      <h3 className="mb-6 text-2xl font-bold text-white">{title}</h3>
      {children}
    </section>
  );
}
