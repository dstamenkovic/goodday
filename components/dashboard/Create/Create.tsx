import { IoAddOutline } from 'react-icons/io5'

type Props = {
  onClickHandler: () => Promise<void>
}

const Create = ({ onClickHandler }: Props) => {
  return (
    <div className="item cursor-pointer justify-center" onClick={onClickHandler}>
      <IoAddOutline size={45} title="Create" />
    </div>
  )
}

export default Create
