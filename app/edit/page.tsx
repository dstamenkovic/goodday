import dynamic from 'next/dynamic'

const ClientSideWrapperEdit = dynamic(() => import('components/edit/ClientSideWrapperEdit'), {
  ssr: false,
})

const Create = () => <ClientSideWrapperEdit />

export default Create
