import { useState, useRef} from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [ form , setForm ] = useState({
    name: '',
    email: '',
    message: '',
  });

  // template_2q286jo
  // service_w35zmtf
  // ntQo6daAUysnn0cLZ
  const [loading, setLoading ] = useState(false);
  
  const handleChange = (e) =>{
    const {name, value } = e.target;
    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_w35zmtf",
      "template_2q286jo",
      {
        from_name: form.name,
        to_name: 'Irfan shaikH',
        from_email: form.email,
        to_email: "414irfann@gmail.com",
        message: form.message
      },"ntQo6daAUysnn0cLZ"

      ).then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible')
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong.')
      })
    
  
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[1] xl:h-[740px] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action=""
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-10 flex flex-col gap-6'
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none  focus-within:border-[0.2px] tracking-[1px] font-normal"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none focus:border-2 tracking-[1px] font-normal"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={6}  name='message' value={form.message} onChange={handleChange}
            placeholder="What do want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none tracking-[1px] font-normal"
            />
          </label>
          <button type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-semibold  shadow-md shadow-primary rounded-xl"
          >
          {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
     

    </div>
  )
}

export default SectionWrapper(Contact, "contact")