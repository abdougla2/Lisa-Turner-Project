import './Index.css'

function Aboutus(){
    return(
        <div>
            <section class=" dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
                <h1 id= "abpic1" class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">About Us</h1>

                <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                Silla Rochester is the owner and operator of Soap and Candle by Silla. This is a small business which
started a few years ago, making soap out of my kitchen with ingredients that was already in the pantry.
The reason I started soap making was to have control of the ingredients I wanted to have in the soap I
wanted to use. I figured I could make soap with skin loving oils and butters that was not harsh on the
skin, and something that would provide moisture to the skin as well.
<br></br>
<br></br>
I started my research as to how I could accomplish this task and jumped right into the process. I first
started out making bar soaps which was introduced to friends and family members, who all appreciated
the way the soap felt on their skin. From there the idea came that this could be a small business, which
it eventually turned into.
<br></br>
<br></br>
In addition to making soap, I thought candles would be a nice addition to the business, so I started
making 100% soy candles. I didn’t stop there, the wheels of entrepreneurship started spinning which got
me to thinking. Now the line has extended to include body wash, face wash, shampoo, feminine wash,
face serum and moisturizer. I am excited and cannot wait to see what will be next.
I appreciate everyone who takes the time to support my small business! With God’s help I anticipate
great success.
Silla.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2">
                
                <div>
                    <img class=" rounded-xl aspect-square" id='ownerPic' src="./ownerPic.jpg" alt=""/>

                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Lisa Turner</h1>

                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300" id="bioPic">Owner, PMP</p>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}
export default Aboutus