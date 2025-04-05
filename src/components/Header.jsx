export default function Header({firstname, lastname, intro}){
    return (
      <header>
        <div className="flex flex-col justify-between min-w-400 px-20 pt-20 pb-15 font-montserrat bg-[#FD4245]">
          <h1 className="text-7xl font-semibold tracking-widest text-white">{lastname.toUpperCase()} {firstname.toUpperCase()}</h1>
          <p className="text-3xl text-[#253446] font-medium tracking-widest my-5">{intro}</p>
        </div>
      </header>
    )
}