'use client'

import { motion } from 'framer-motion'

export default function Template({
    children
}: {
    children: React.ReactNode
}) {
    return (
        // Add y:20 to initial and y:0 to animate for vertical movement as part of transition 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            {children}
        </motion.div>
    )

}