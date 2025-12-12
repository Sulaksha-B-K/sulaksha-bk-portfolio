import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

// 🎯 Map pretty text → actual section IDs
const navMap = [
  { label: "Me", target: "Homepage" },
  { label: "What I Do", target: "Services" },
  { label: "What I Did", target: "Portfolio" },
  { label: "What I Won", target: "Achievements" },
  { label: "Connect", target: "Contact" },
];

const Links = ({ setOpen }) => {
  return (
    <motion.div className="links" variants={variants}>
      {navMap.map((item) => (
        <motion.a
          key={item.label}
          href={`#${item.target}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(false)}   // ⭐ close menu
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};


export default Links;
