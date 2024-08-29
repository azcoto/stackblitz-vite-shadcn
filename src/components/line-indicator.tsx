

const LineIndicator = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
      <div className="flex-grow h-[2px] bg-gray-700"></div>
      <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
    </div>
  )
}

export default LineIndicator;