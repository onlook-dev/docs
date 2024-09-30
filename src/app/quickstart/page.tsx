export default function DocumentationPage() {
  return (
    <div className="h-full w-full border-0 flex">
      <div className="flex justify-start pl-[10px] font-semibold h-full items-start border w-1/5">
        <p className="w-full h-[40px] flex items-center">Quick Start</p>
      </div>
      <div className="w-full h-full border flex flex-col gap-[20px] p-[60px]">
        <div className="w-full flex items-start justify-start flex-col h-[fit-content]">
          <p className="w-[fit-content] h-[fit-content] font-bold text-[36px]">
            Quick Start
          </p>
          <p className="w-[fit-content] h-[fit-content]">
            Start building modern documentation in under five minutes
          </p>
        </div>
        <div className="w-[824px] h-[385px] bg-[#E3F3FF] flex justify-center items-center">
          <p className="w-[fit-content] h-[fit-content]">Placeholder image</p>
        </div>
      </div>
    </div>
  )
}
