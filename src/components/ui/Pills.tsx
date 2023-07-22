interface IPill {
  str: string;
}

const Pill = ({str}:IPill ) => {

  return (
    <div className={`flex justify-center place-items-center h-6 bg-tertiary-600 w-fit rounded-md px-3 py-1`}>
      <span className={` text-base font-medium text-light-secondary-100`}>{str}</span>
    </div>
    
  )
}

export default Pill