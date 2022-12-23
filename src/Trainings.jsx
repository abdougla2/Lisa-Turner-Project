import './Index.css'

function Trainings (){
    return(
        <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br/> awesome Trainings!</h1>

                    <div className="mt-2">
                        <span id='trainingLines' className="inline-block w-40 h-1 bg-black rounded-full"></span>
                        <span id='trainingLines' className="inline-block w-3 h-1 ml-1 bg-black rounded-full"></span>
                        <span id='trainingLines' className="inline-block w-1 h-1 ml-1 bg-black rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500  rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <img className = "checkBox" src="https://cdn-icons-png.flaticon.com/512/2089/2089632.png" alt="" />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Intro to CRMs</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500  rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <img className = "checkBox" src="https://cdn-icons-png.flaticon.com/512/2089/2089632.png" alt="" />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Intro to Software Design</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Software design is the process by which an agent creates a specification of a software artifact intended to accomplish goals, using a set of primitive components and subject to constraints.
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <img className = "checkBox" src="https://cdn-icons-png.flaticon.com/512/2089/2089632.png" alt="" />
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Entrepreneurship 101</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Entrepreneurship is the creation or extraction of economic value. With this definition, entrepreneurship is viewed as change, generally entailing risk beyond what is normally encountered in starting a business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                <img className="trainingsPic" src="https://img.freepik.com/premium-photo/millennial-african-american-female-employee-headphones-watch-webinar-laptop-making-notes-smiling-young-biracial-woman-worker-headset-write-enjoy-online-training-course-computer_704049-281.jpg" alt="" />
            </div>
        </div>

        <hr class="my-12 border-gray-200 dark:border-gray-700" /><div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <a href='https://www.salesforce.com/form/demo/salesforce-products/?gclid=Cj0KCQiAwJWdBhCYARIsAJc4idBzvgZycVsLtIzWQAAgDi8ptvxwrPhnFfv5e36geE_JsSlJmFQDK8UaAkcdEALw_wcB&d=7010M000001ynfX&nc=7010M000002QR17&DCMP=KNC-Google&ef_id=Cj0KCQiAwJWdBhCYARIsAJc4idBzvgZycVsLtIzWQAAgDi8ptvxwrPhnFfv5e36geE_JsSlJmFQDK8UaAkcdEALw_wcB:G:s&s_kwcid=AL!4604!3!605326008619!e!!g!!salesforce&gclsrc=aw.ds'><img src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png" alt="" /></a>
                </div>

                <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <a href='https://www.intuit.com/oa/products/?cid=ppc_G_e_US_.SBG-US-GGL-Brand-Top-Terms-Exact-Search-Desktop-lp-icom._intuit_txt&&cid=ppc_G_e_US_.SBG_US_GGL_Brand_Search_Mobile%26DesktopDE_tCPA._intuit_txt&gclsrc=aw.ds&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idDzNh1YhmZIQk0BEGLPDG9VFFxHgU9XdFp4kt20DulhMDbkJZdNAGUaAl56EALw_wcB&gclsrc=aw.ds'><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Intuit_QuickBooks_logo.png" alt="" /></a>
                </div>

                <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                    <a href='https://www.canva.com/'><img src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" alt="" /></a>
                </div>

                <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                    <a href='https://monday.com/crm/?cq_src=google_ads&cq_cmp=12662074050&cq_term=monday%20crm&cq_plac=&cq_net=g&cq_plt=gp&utm_source=adwordsbrand&utm_campaign=us-en-prm-workos-work_mgmt-brand-e-search-desktop-core-aw&aw_keyword=monday%20crm&aw_match_type=e&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idAQYNZWrOTRF3teJvoCeKwLIJFDKMki3q2-2tp2cSbqUdfYvzmCehEaAlT4EALw_wcB'><img src="https://monday.com/p/wp-content/uploads/2020/07/Logo_Black.png" alt="" /></a>
                </div>

                <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                    <a href='https://www.figma.com/?fuid='> <img src="https://assets.stickpng.com/images/62c6bc0beee9410fe137d91e.png" alt="" /></a>
                </div>
        </div>
    </div>
</section>
        </div>
    
            )
}

export default Trainings