export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <span>&#10038;</span>
            <span>Try it for free</span>
          </div>
        ))}
      </div>
    </section>
  );
}
