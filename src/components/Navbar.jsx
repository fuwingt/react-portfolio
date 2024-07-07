import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="m-8 flex items-center justify-left gap-4 text-2xl">
            <FaLinkedin />
            <FaInstagram />
            {/* <FaGithub /> */}
        </div>
    </nav>
  )
}

export default Navbar