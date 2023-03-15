import dynamic from 'next/dynamic'

const ClientSideWrapperEdit = dynamic(() => import('components/edit/ClientSideWrapperEdit'), {
  ssr: false,
})

const Edit = () => {
  return <ClientSideWrapperEdit />
}

export default Edit
