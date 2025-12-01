import banner from '../../assets/banner.png'

export default function Banner() {
  return (
    <div className=' flex py-10  md:py-20 px-12 md:px-28 bg-gray-300 mt-5 md:mt-12 mb-5 md:mb-10 rounded-xl'>
        <div>
            <h1 className='text-2xl md:text-6xl/[84px] font-bold mb-5 md:mb-10'>Books to freshen up your bookshelf</h1>
            <button className='btn  bg-[#23BE0A] text-white font-bold'>View The List</button>
        </div>
      <div>
         <img src={banner} alt="" />
      </div>
    </div>
  )
}
