import { ExploreCard, ExploreGrid, SharedLayout } from "../Export"
const Home = () => {
  return (
    <SharedLayout>
      <main className='max-w-[2000px] mx-auto px-8'>
        <section className='md:flex gap-4 items-center'>
          <div className='md:w-[65%] mt-10'>
            <h2 className='font-bold capitalize text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 block leading-[3rem]'>
              Build your{" "}
              <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900'>
                Credit Score
                <img src="./Assets/round.png" className='absolute -top-3 right-0' alt='' />{" "}
              </span>{" "}
              While You Shop For Your Favourite Items Online.
            </h2>
            <p className='font-medium text-lg md:text-2xl my-5 md:my-10 '>
              Don’t just spend, Get the best deal and build your credit score for
              everytime you buy.
            </p>
          </div>
          <div className='flex justify-center items-center md:w-[35%]'>
            <img src="./Assets/hero-image.png" alt='' />
          </div>
        </section>
        <section className='relative mt-16'>
          <h2 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-900 font-bold text-center'>
            Explore Our Various Options
          </h2>
          <ExploreCard
            dir='flex-col md:flex-row'
            header='Pay How You Like'
            text='Enjoy the freedom to how you intend to pay for purchases made. Buy your favourite item and pay later according to your convienience'
            image="./Assets/pay.png"
          />
          <ExploreCard
            dir='flex-col md:flex-row-reverse'
            header='Spread Payment'
            text='Whether online or in-store, you can conveniently shop from our partnered merchants while enjoying discounts and credit points.'
            image="./Assets/spread.png"
          />
          <ExploreCard
            dir='flex-col md:flex-row'
            header='Manage your budget'
            text='Manage your finances better by paying in small chunks every month and save more.'
            image="./Assets/manage.png"
          />
          <div className='relative mt-40'>
            <h4 className='text-center font-bold capitalize text-2xl md:text-3xl text-blue-800'>
              Shop, Save and Build Your <br />Credit Score And Earn on Ruubby In 3 Simple Steps
            </h4>
            <img
              src="./Assets/spiral.png"
              className='absolute bottom-24 left-0 md:left-10 w-32 md:w-fit'
              alt=''
            />
          </div>
          <div className='grid md:grid-cols-3 my-10 -mx-8'>
            <div className='bg-blue-800'>
              <ExploreGrid
                header='Download and Register'
                text='Download Ruubby on Play Store or App Store and register'
                index='1'
              />
            </div>
            <div className='bg-purple-800 relative'>
              <ExploreGrid
                header='Choose your desired product'
                text='Select from any of our featured stores and start saving'
                index='2'
              />
            </div>
            <div className='bg-purple-900'>
              <ExploreGrid
                header='Build a Better Financial Profile and Save'
                text='Spread payment across 2-6 months with a low interest rate'
                index='3'
              />
            </div>
          </div>
          <img src="./Assets/polygon.png" className='absolute -top-20 left-10' alt='' />
        </section>
        {/* <section className='bg-gray-50 -mx-8 -mt-10 p-8'>
          <Slide data={category} seeAll title='Categories' />
          <Slide data={store} title='Featured Store' />
        </section> */}
      </main>
    </SharedLayout>
  )
}

export default Home