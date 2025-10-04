
export default function Title({text}) {
  return (
<h2 className=" text-3xl lg:text-[47px] font-semibold relative mb-[48px] before:absolute before:w-20 lg:before:w-20 before:h-10 lg:before:h-15 before:bg-orange-400 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
  <span className="relative z-10">{text} </span>
</h2>  )
}
