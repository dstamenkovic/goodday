// import Header from 'components/edit/Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col p-4">
      {/* <Header /> */}
      {children}
    </div>
  )
}
