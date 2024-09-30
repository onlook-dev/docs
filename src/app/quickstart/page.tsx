export default function DocumentationPage() {
    return (
        <div className="h-full w-full border-0 flex">
            <div className="flex justify-start pl-[10px] font-semibold h-full items-start border w-1/5">
                <p className="w-full h-[40px] flex items-center">Quick Start</p>
            </div>
            <div className="w-full h-full border flex flex-col gap-[30px] p-[50px]">
                <div className="w-full flex items-start justify-start flex-col h-[fit-content]">
                    <p className="w-[fit-content] h-[fit-content] font-bold text-[36px]">
                        Quick Start
                    </p>
                    <p className="w-[fit-content] h-[fit-content]">
                        Start building modern documentation in under five minutes
                    </p>
                </div>
                <div className="flex justify-center items-center w-3/5 h-[400px] bg-transparent border-[#000000] border rounded-[10px]"></div>
                <div>
                    <p className="w-[fit-content] h-[fit-content] font-bold text-[36px]">
                        Getting Started
                    </p>
                    <p className="w-[fit-content] h-[fit-content]">
                        Welcome! Follow the instructions below to learn how to setup, update and
                        supercharge your app with Onlook.
                    </p>
                </div>
                <p className="text-[26px] h-[fit-content] w-[fit-content] text-[#000000]">
                    1. Set up your app repository
                </p>
                <p className="w-full h-[fit-content]">Use npx onlook create</p>
                <div className="w-3/5 h-[400px] border-[#000000] border bg-transparent rounded-[10px]"></div>
            </div>
        </div>
    );
}
