"use client";

export default function ExperienceSection({ sweetwaterItems }) {
  return (
    <div>
      {sweetwaterItems.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
