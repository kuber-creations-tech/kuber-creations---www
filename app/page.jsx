const BUSINESS_MOBILE = "+917490822732";


const CONTACT_BTN = "https://wa.me/" + BUSINESS_MOBILE + "?text=I%20am%20interested%20in%20CNC%20Wood%20works.";
const QUOTE_BTN = "https://wa.me/" + BUSINESS_MOBILE + "?text=Please%20give%20me%20a%20quote%20for%20my%20CNC%20work.";
const BROCHURE_BTN = "https://wa.me/" + BUSINESS_MOBILE + "?text=Please%20share%20me%20your%20Brochure.";

export const metadata = {
  title: 'Kuber Creations | Luxury Woodwork, Engineered with CNC Perfection',
  description: 'Kuber Creations specializes in premium CNC job work for wood, delivering precision-crafted solutions for architecture and interior design.',
}

export default function Page() {
    return (

        <>

            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50 bg-white">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Kuber Creations</span>
                                <img src="/BrandLogo.png" alt="" className="h-16 w-auto" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="#services" className="text-sm/6 font-semibold text-gray-900">Services</a>
                            <a href="#why-us" className="text-sm/6 font-semibold text-gray-900">Why Us</a>
                            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a> */}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href={CONTACT_BTN} className="text-sm/6 font-semibold text-gray-900">Contact Us <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>
                    <el-dialog>
                        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
                            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                                <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                    <div className="flex items-center justify-between">
                                        <a href="/" className="-m-1.5 p-1.5">
                                            <span className="sr-only">Kuber Creations</span>
                                            <img src="/BrandLogo.png" alt="" className="h-16 w-auto" />
                                        </a>
                                        <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                            <span className="sr-only">Close menu</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500/10">
                                            <div className="space-y-2 py-6">
                                                <a href="#services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Services</a>
                                                <a href="#why-us" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Why Us</a>
                                                {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a> */}
                                                {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a> */}
                                            </div>
                                            <div className="py-6">
                                                <a href={CONTACT_BTN} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact us</a>
                                            </div>
                                        </div>
                                    </div>
                                </el-dialog-panel>
                            </div>
                        </dialog>
                    </el-dialog>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div style={{
                            "clipPath": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                            </div>
                        </div> */}
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Premium CNC Job Work for Wood
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                From Concept to Creation — Crafted with Unmatched Precision
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href={QUOTE_BTN} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Get a Quote
                                </a>
                                <a href={BROCHURE_BTN} className="text-sm/6 font-semibold text-gray-900">
                                    Download Brochure &nbsp;
                                    <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <div style={{
                            "clipPath": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
                    </div>
                </div>
            </div>


            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-600">
                                Expertise
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                35 Years
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-600">
                                Sq. Ft. Work Done.
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                2 lakhs+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-600">
                                Unique Designs
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                10,000+
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>













            <div id="services" className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-indigo-600">
                        What We Offer
                    </h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                        Our CNC Job Work Services
                    </p>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        CNC cutting for different materials
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Expert CNC routing through hardwoods, softwoods, MDF, plywood, and laminates for flawless results every time.
                                    </p>
                                </div>
                                <div className="@container relative min-h-56 md:min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden bg-gray-900 shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1684564577719-1e9944866a45?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Custom design execution
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        From sketch to showroom: We execute bespoke designs with pixel-perfect CNC translation and hand-refined details.
                                    </p>
                                </div>
                                <div className="@container relative min-h-56 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden bg-gray-900 shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1560846389-e4e6d764cd61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Precision manufacturing details
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Achieve flawless joints, inlays, and finishes with our state-of-the-art CNC technology and skilled craftsmanship.
                                    </p>
                                </div>
                                <div className="@container relative min-h-56 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-4 bottom-0 overflow-hidden bg-gray-900 shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1595844730289-b248c919d6f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5"></div>
                        </div>
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Experienced Team
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        In-house designers and programmers collaborate closely to refine every project from concept to completion.
                                    </p>
                                </div>
                                <div className="@container relative min-h-56 md:min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden bg-gray-900 shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1619759247378-6a73e3ad45f1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="size-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                        </div>
                    </div>
                </div>
            </div>












            <div id="why-us" className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">
                                    Architecture & Interior Design
                                </h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    A Modern Furnishing.
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-700">
                                    Our precision-driven CNC machines translate creativity into reality with millimeter-perfect detail and premium-grade finishes.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            {/* <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600">
                                                <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-0.5 left-1 size-6 text-indigo-600">
                                                <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                                            </svg>

                                            Precision & Quality :&nbsp;
                                        </dt>
                                        <dd className="inline">
                                            {/* Description for Precision & Quality */}
                                            With advanced CNC technology and expert craftsmanship, we deliver woodwork that meets the highest standard of precision and finish.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            {/* <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600">
                                                <path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-0.5 left-1 size-6 text-indigo-600">
                                                <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                                                <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                                            </svg>

                                            Enterprise-Grade Equipment :&nbsp;
                                        </dt>
                                        <dd className="inline">
                                            We combine cutting-edge CNC machinery with hand-finished detailing to achieve the perfect balance of accuracy and artistry.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-0.5 left-1 size-6 text-indigo-600">
                                                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                                            </svg>
                                            Competitive Pricing :&nbsp;
                                        </dt>
                                        <dd className="inline">
                                            By merging innovation with tradition, we transform wood into refined, high-performance works of art.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <img width="2432" height="1442" src="https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product screenshot" className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" />
                    </div>
                </div>
            </div>






            <footer>
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 flex flex-col md:flex-row justify-between">
                    <p className="text-center text-sm/6 text-gray-500">&copy; 2026 Kuber Creations, Inc. All rights reserved.</p>
                    <p className="text-center text-sm/6 text-gray-500"> Design and Developed by HoneyHexa.</p>
                </div>
            </footer>
        </>

    );
}


