import { SiTheboringcompany } from "react-icons/si";

const Header = () => {
  return (  
    <div className='w-full h-[4rem] flex items-center py-[3rem]'>
        <div className='h-full w-[25%] flex items-center gap-3 pl-[3rem]'>
            <SiTheboringcompany className="text-5xl text-white"/>
            <div className="text-sm font-semibold uppercase text-white underline">The Boring Company</div>
        </div>
        <div className='h-full w-[70%] flex justify-center items-center'>
            <div className="text-left w-full text-4xl font-semibold text-white pl-[10rem]">Invoice Management Dashboard</div>
        </div>
    </div>
  )
}

export default Header