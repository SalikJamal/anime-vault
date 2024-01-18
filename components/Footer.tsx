import Image from "next/image"


export default function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <a className="text-base font-bold text-white" href='https://twitter.com/salikjamal20' target="_blank">
        @salikjamal20
      </a>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <a href='https://twitter.com/salikjamal20' target="_blank">
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  )
}