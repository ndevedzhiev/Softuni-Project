export default function About () {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    <div className="w-full lg:w-5/12 flex flex-col justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4"
      style={{color: '#E11D48'}}
      >
        About Us
      </h1>
      <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
      At Prime Cars, we connect buyers and sellers in the vibrant world of used cars. Our platform simplifies the process of buying and selling pre-owned vehicles, making it easier for you to find your next car or list your current one. We are committed to providing a seamless, trustworthy experience with a focus on quality and transparency. Whether you're searching for a reliable used car or looking to sell your vehicle, our dedicated team is here to support you every step of the way. Discover the convenience and confidence of buying and selling with Prime Cars
      </p>
    </div>
    <div className="w-full lg:w-8/12">
      <img
        className="w-full h-full"
        src="https://img.freepik.com/premium-photo/group-professional-auto-mechanics-working-together-car_1034924-382.jpg"
        alt="A group of People"
      />
    </div>
  </div>
  <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
    <div className="w-full lg:w-5/12 flex flex-col justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4"
      style={{color: '#E11D48'}}
      >
        Our Story
      </h1>
      <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
      Our journey began with a simple mission: to make buying and selling used cars a transparent and enjoyable experience. Founded by a team of automotive enthusiasts and industry experts, Prime Cars was created to bridge the gap between buyers seeking quality pre-owned vehicles and sellers looking for a reliable marketplace. Driven by a passion for excellence, we strive to offer a platform where trust, efficiency, and innovation converge to provide the best possible experience for every customer.
      </p>
    </div>
    <div className="w-full lg:w-8/12 lg:pt-8">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
        <div className="p-4 pb-6 flex justify-center flex-col items-center">
          <img
            className="md:block hidden"
            src="https://img.freepik.com/premium-photo/portrait-successful-car-mechanic-clean-uniform-against-background-car-lift-service-station_307890-5578.jpg"
            alt="Alexa featured Image"
          />
          <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
            Vasko
          </p>
        </div>
        <div className="p-4 pb-6 flex justify-center flex-col items-center">
          <img
            className="md:block hidden"
            src="https://t3.ftcdn.net/jpg/04/35/89/26/360_F_435892680_6r3bwoH0puBT3jRjNdQWxOnCCG2GhSne.jpg"
            alt="Olivia featured Image"
          />
          <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
            Genadi
          </p>
        </div>
        <div className="p-4 pb-6 flex justify-center flex-col items-center">
          <img
            className="md:block hidden"
            src="https://static.vecteezy.com/system/resources/previews/006/948/116/non_2x/portrait-of-smiling-male-mechanic-technician-holding-wrench-in-arms-crossed-at-auto-garage-repair-and-maintenance-career-after-service-checking-car-damage-broken-part-free-photo.jpg"
            alt="Liam featued Image"
          />
          <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
            Jivko
          </p>
        </div>
        <div className="p-4 pb-6 flex justify-center flex-col items-center">
          <img
            className="md:block hidden"
            src="https://media.istockphoto.com/id/488150958/photo/garage-owner.jpg?s=612x612&w=0&k=20&c=fmcJeM6iJMGC-rjxHrZgf6vaPkKDLb6ktzk-SVRzN7M="
            alt="Elijah featured image"
          />
          <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
            Tsonko
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}