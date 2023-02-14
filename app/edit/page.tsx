import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('components/edit/Editor'), { ssr: false })

const Create = () => (
  <div className="mt-4 pl-2">
    <Editor />
  </div>
)

export default Create
