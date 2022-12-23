import './Index.css'

function Services (){
    return(
        <div>
            <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <img className='servicesPic' src="https://www.incimages.com/uploaded_files/image/1920x1080/IN1218FSU31-1_381640.jpg"/>

                <a href="#" id = "serviceLinks" className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Start Up!</a>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Starting a business can be scary but we provide services to make the journey smooth and less intimidating!</p>
            </div>

            <div>
            <img className='servicesPic' src="https://s3.amazonaws.com/mentoring.redesign/s3fs-public/young-black-business-owners-entrepreneurs_0.jpg"/>

                <a href="#" id = "serviceLinks" className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Grow!</a>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Started your business but still need help getting it to the next level? LRT Associates provies an array of services to make your businss more marketable!</p>
            </div>

            <div>
            <img className='servicesPic' src="https://images.squarespace-cdn.com/content/v1/6011ce08663bad3a50903423/1623800422710-P3BJAUJXVCLJJ04LXBEL/AdobeStock_284694477+%281%29.jpeg"/>

                <a href="#" id = "serviceLinks" className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Exit!</a>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Leaving the job security of corporate America can be super intimidating; however, let us help make the transitition seamless! We will provide services to give you the confidence you need to take the leap!</p>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}
export default Services