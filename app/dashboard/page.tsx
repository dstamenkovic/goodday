import Stack from 'components/dashboard/Stack'

const fakeItems = [
  { id: '1rt', title: 'Item 1 with a longer title' },
  { id: '2rt', title: 'Item 2' },
]

const Dashboard = () => {
  return (
    <div className="flex-1 p-8">
      <Stack items={fakeItems} />
    </div>
  )
}

export default Dashboard
