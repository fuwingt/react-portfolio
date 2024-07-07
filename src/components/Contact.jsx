import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
      <div className="border-b border-neutral-900 pb-20">
          <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="my-10 text-center text-4xl">Contact</motion.h1>
          <div className="text-center tracking-tighter">
              {/* <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1 }}
                  className="my-4">{CONTACT.address}
              </motion.p> */}
              <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1 }}
                  className="my-4">
                  Tel: {CONTACT.phoneNo}
              </motion.p>
              <a href=
                  {`mailto:${CONTACT.email}`}
                  className="border-b"
                  onClick={(e) => {
                      e.preventDefault();
                      window.open(`mailto:${CONTACT.email}`)
                  }}
              >
                  {CONTACT.email}
              </a>
          </div>
    </div>
  )
}

export default Contact