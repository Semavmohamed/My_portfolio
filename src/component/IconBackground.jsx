import { faCode, faLaptopCode, faDatabase, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faJs, faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconBackground() {
    const icons = [
        { icon: faReact, size: 'text-6xl', position: 'top-1/2 md:top-10 left-10', rotate: true },
        { icon: faCss3Alt, size: 'text-7xl', position: 'top-1/3 right-16', float: true },
        { icon: faHtml5, size: 'text-5xl', position: 'top-1left-1 md:right-40', float: true },
        { icon: faCode, size: 'text-5xl', position: 'md:top-1/2 left-1/4', display: 'hidden md:block', rotate: true },
        { icon: faDatabase, size: 'text-6xl', position: 'bottom-20 right-10', float: true },
        { icon: faLaptopCode, size: 'text-4xl', position: 'bottom-10 left-10', float: true }
    ];
    return (

        <div className="max-w-7xl mx-auto px-4">
            {/* for animated background */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                {icons.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${item.top} ${item.position || ''} text-white opacity-10 ${item.size} ${item.display || ''}`}
                        animate={item.rotate
                            ? { rotate: [0, 360] }
                            : { y: [0, -10, 0] }
                        }
                        transition={{
                            duration: item.rotate ? 20 : 6,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}