import Navigation from 'components/dashboard/Navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-row">
      <Navigation />
      {children}
    </div>
  )
}
