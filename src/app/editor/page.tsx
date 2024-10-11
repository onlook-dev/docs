import LinkedHeader from '@/components/ui/linked-header';
import PackageSelector from '@/components/ui/package-selector';
import HeadingList from '@/components/ui/headinglist';
import { useState, useEffect } from 'react';
import LeftNavBar from '@/components/ui/leftnavbar';

export default function DocumentationPage() {
    return (
        <div className="h-full w-full border-0 flex">
            <LeftNavBar />
            <div className="flex flex-col gap-[30px] p-[50px] border-transparent border-0 h-[fit-content] items-center justify-center w-[fit-content] pr-[100px]">
                <div className="max-w-[700px] flex flex-col gap-[24px] mb-[400px] h-[fit-content]">
                    <div className="flex flex-col gap-[12px]">
                        <LinkedHeader level="h1" title="Editor" link="#" id="onlook" />
                        <p className="w-[fit-content] h-[fit-content] text-gray-800">
                            The Onlook editor makes it very easy to visually design in your app.
                        </p>
                    </div>
                    <div className="w-[646px] bg-gray-200 h-[1px]"></div>

                    <div className="items-center group hidden" key="1728518791939">
                        <LinkedHeader level="h3" title="Getting Started" link="#" />
                    </div>
                    <div
                        className="w-full h-[fit-content] flex-row gap-[12px] items-center p-[20px] rounded-[2px] border bg-[#d6e4ff] rounded-br-[2px] hidden"
                        key="1728518740198"
                    >
                        <div className="h-[30px] bg-blue-500 w-[30px] rounded-br-[20p]"></div>
                        <p className="w-[fit-content] h-[fit-content] text-blue-500">
                            More information can go here
                        </p>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        <div className="flex items-center group text-[20px]">
                            <LinkedHeader level="h2" title="Tour of the Editor" link="#" />
                        </div>

                        <div>
                            <p className="h-[fit-content] w-[fit-content] text-gray-800 text-[16px]">
                                We'll walk through the editor from the top to the bottom.
                            </p>
                        </div>

                        <div className="bg-[#E3F3FF] rounded-md overflow-hidden aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/WuigA6cVgw4?si=ZeQVq-reCvLI7msy"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="bg-gray-300 w-[200px] h-[200px] border-gray-300 border-[3px]"></div>
                        <LinkedHeader level="h4" title="App Bar" link="#" />
                        <p className="w-full h-[fit-content]">
                            The app bar is at the very top of the editor and has links to various
                            resources as well as where you will find new updates.
                        </p>
                        <ul className="list-none">
                            <li className="before:content-['-'] before:mr-2">Visit our Discord</li>
                            <li className="before:content-['-'] before:mr-2">Submit an Issue</li>
                            <li className="before:content-['-'] before:mr-2">
                                Update the app (Only shown when there's a new update) More info
                                jhdfgjkhsdjkfghsfdkgskjdhgkjsdfhgsdf
                            </li>
                        </ul>
                        <p className="w-[fit-content] h-[fit-content]">More information</p>
                    </div>
                </div>
            </div>

            <HeadingList />

            <div className="absolute bottom-[10px] right-[10px] flex justify-center items-center p-[8px] pl-[8px] pt-[8px] pr-[8px] pb-[8px] h-[fit-content] w-[fit-content] rounded-[4px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[4px] bg-[#212c35] border-[#434343] border">
                <p className="w-[fit-content] text-[#ffffff] leading-[20px] h-[fit-content]">
                    Built with Onlook.dev
                </p>
            </div>
        </div>
    );
}
