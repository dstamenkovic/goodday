import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'
import {} from 'next'

const ClientSideWrapperEdit = dynamic(() => import('components/edit/ClientSideWrapperEdit'), {
  ssr: false,
})

type Props = {
  searchParams: { id: string }
}

const Edit = ({ searchParams }: Props) => {
  if (!searchParams.id) {
    redirect('/dashboard')
  }
  return <ClientSideWrapperEdit />
}

export default Edit
