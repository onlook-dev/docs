import LinkedHeader from '@/components/ui/linked-header';
import PackageSelector from '@/components/ui/package-selector';
import HeadingList from '@/components/ui/headinglist';
import { useState, useEffect } from 'react';

export default function DocumentationPage() {
    return (
        <div className="h-full w-full border-0 flex">
            <div className="flex justify-start font-semibold h-full items-start w-1/5 flex-col gap-[4px] p-[20px] pl-[20px] pt-[20px] pr-[20px] pb-[20px] border-[01px]">
                <h6 className="w-full flex items-center uppercase h-[fit-content] text-[12px]">
                    Quick Start
                </h6>
                <p className="w-full h-[fit-content]">Overview</p>
            </div>
            <div className="flex flex-col gap-[30px] p-[50px] border-transparent border-0 h-[fit-content] items-center justify-center w-[fit-content] pr-[100px]">
                <div className="max-w-[700px] flex flex-col gap-[24px] mb-[400px] h-[fit-content]">
                    <div className="flex flex-col gap-[12px]">
                        <LinkedHeader level="h2" title="Onlook" link="#" id="onlook" />
                        <p className="w-[fit-content] h-[fit-content] text-gray-800">
                            Onlook is a visual editor for React apps running with Tailwind.
                            Developers and designers can use the visual editor to see and edit the
                            output of their app, all while reliably writing changes to code.
                        </p>
                    </div>
                    <div className="justify-center items-center h-[400px] bg-transparent rounded-[10px] border-[#8a8a8a] border hidden"></div>
                    <div className="flex items-center group">
                        <LinkedHeader level="h3" title="Getting Started" link="#" />
                    </div>
                    <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] hidden">
                        1. Set up your app repository
                    </p>
                    <p className="w-full h-[fit-content] hidden">Use npx onlook create</p>
                    <div className="bg-transparent rounded-[10px] border-[#909090] border h-[300px] w-full hidden"></div>

                    <div className="flex flex-col gap-[24px]">
                        <div className="flex items-center group text-[20px]">
                            <LinkedHeader level="h3" title="Quick Start" link="#" />
                        </div>
                        <div>
                            <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px]">
                                Follow these steps to integrate Onlook into a new web app.
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        1
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] text-[18px] font-medium">
                                        Create the Project Folder
                                    </h4>
                                </div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-gray-200 mb-0 pt-[8px] pl-[40px] h-[fit-content] pb-[36px] flex flex-col items-start gap-[12px]">
                                <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] text-gray-800">
                                    Run this command where you'd like to create the project folder.
                                </p>
                                <PackageSelector
                                    managers={{
                                        npm: 'npx onlook create my-onlook-project',
                                        yarn: 'yarn dlx onlook create my-onlook-project',
                                        bun: 'bunx onlook create my-onlook-project',
                                    }}
                                />
                            </div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        2
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] font-medium text-[18px]">
                                        Run the project
                                    </h4>
                                </div>
                                <div className="w-[30px] h-[30px] bg-[#E3F3FF] hidden"></div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-gray-200 mb-0 pl-[40px] h-[fit-content] pt-[8px] pb-[36px] flex flex-col gap-[12px]">
                                <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] text-gray-800">
                                    Run your app so you can edit it.
                                </p>
                                <PackageSelector
                                    managers={{
                                        npm: 'cd my-onlook-project && npm run dev',
                                        yarn: 'cd my-onlook-project && yarn dev',
                                        bun: 'cd my-onlook-project && bun run dev',
                                    }}
                                />
                            </div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        3
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] font-medium text-[18px]">
                                        Open Onlook
                                    </h4>
                                </div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-transparent mb-0 pl-[40px] h-[fit-content] pt-[8px] pb-[36px]">
                                <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] text-gray-800">
                                    Open Onlook and make sure the browser points to
                                    <span className="code-span">http://localhost:3000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex items-center group">
                            <LinkedHeader
                                level="h2"
                                title="Use your own React project"
                                link="#"
                                id="use-react"
                            />
                        </div>
                        <div>
                            <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px]">
                                To try Onlook with your own React + TailwindCSS project, follow the
                                following steps:
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        1
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] text-[18px] font-medium">
                                        Setup Onlook on the project root
                                    </h4>
                                </div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-gray-200 mb-0 pt-[8px] pl-[40px] h-[fit-content] pb-[36px] flex flex-col items-start gap-[12px]">
                                <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] text-gray-800">
                                    Run this command on your project's root folder:
                                </p>
                                <PackageSelector
                                    managers={{
                                        npm: 'npx onlook setup',
                                        yarn: 'yarn dlx onlook setup',
                                        bun: 'bunx onlook setup',
                                    }}
                                />
                            </div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        2
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] font-medium text-[18px]">
                                        Run your project
                                    </h4>
                                </div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-gray-200 mb-0 pl-[40px] h-[fit-content] pt-[8px] pb-[36px] flex flex-col gap-[12px]"></div>
                            <div className="flex gap-[16px] items-center flex-row h-[fit-content]">
                                <div className="rounded-[40px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] w-[50px] h-[50px] border-gray-200 border bg-transparent flex justify-center items-center">
                                    <p className="w-full h-full flex justify-center items-center">
                                        3
                                    </p>
                                </div>
                                <div>
                                    <h4 className="h-[fit-content] w-[fit-content] text-[#000000] font-medium text-[18px]">
                                        Open Onlook
                                    </h4>
                                </div>
                            </div>
                            <div className="ml-[25px] p-[30px] pr-[30px] border-l-[1px] border-transparent mb-0 pl-[40px] h-[fit-content] pt-[8px] pb-[36px]">
                                <p className="h-[fit-content] w-[fit-content] text-[#000000] text-[16px] text-gray-800">
                                    Open Onlook where your project is running (i.e.
                                    <span className="code-span">http://localhost:3000</span>)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeadingList />
        </div>
    );
}
