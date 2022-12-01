import Navigation from 'components/dashboard/Navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-screen w-full">
      <Navigation />
      {children}
    </div>
  )
}
