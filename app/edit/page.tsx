import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

const ClientSideWrapperEdit = dynamic(() => import('components/edit/ClientSideWrapperEdit'), {
  ssr: false,
})

const Edit = ({ searchParams }: { searchParams: { id: string } }) => {
  if (!searchParams.id) {
    redirect('/dashboard')
  }
  return <ClientSideWrapperEdit />
}

export default Edit
