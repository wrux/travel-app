export default function SocialLayout({ children, ...props }) {
  return (
    <main className="flex gap-16 p-8">
      <div className="max-w-[20%] flex-1">side</div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
