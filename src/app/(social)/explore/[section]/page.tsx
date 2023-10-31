export default function ExplorePage({
  params: { section },
}: {
  params: { section: string };
}) {
  return (
    <div className="border-2 border-red-500">
      <h1>Explore Page: {section}</h1>
    </div>
  );
}
