import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-light-surface dark:bg-dark-surface">
      <h1 className="text-5xl text-light-onSurface dark:text-dark-onSurface">
        Работает!
      </h1>
      <p className="bg-light-primaryContainer dark:bg-dark-primaryContainer text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer">
        Этот текст находится на primary container
      </p>
      <ThemeToggle />
    </main>
  )
}
