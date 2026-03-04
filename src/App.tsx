import { motion } from "motion/react";
import { Share2, MoreHorizontal, Sparkles } from "lucide-react";

export default function App() {
  const links = [
    {
      title: "Personal Website",
      url: "https://www.fanvue.com/madisonlux",
      image: "https://imgur.com/472YfPA.jpg",
      isLarge: false,
    },
    {
      title: "Light Therapy Facial - X7",
      url: "https://andbalanced.com/products/light-therapy-facial-x7-seven-light-treatments-in-one-v1-2-dg#aff=thechaup33",
      image: "https://imgur.com/MxcI1XT.jpg",
      isLarge: true,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-white selection:bg-white/30">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #f43f5e 0%, #fb923c 50%, #4ade80 100%)",
            "radial-gradient(circle at 50% 50%, #fb923c 0%, #4ade80 50%, #f43f5e 100%)",
            "radial-gradient(circle at 50% 50%, #4ade80 0%, #f43f5e 50%, #fb923c 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
        {/* Top Navigation */}
        <div className="w-full flex justify-between items-center mb-12">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
          >
            <Share2 className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative mb-6"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src="https://imgur.com/c3pwtJR.jpg"
                alt="Madison Luxy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold mb-3 tracking-tight drop-shadow-md">
            madisonluxy
          </h1>
          <p className="text-sm font-medium leading-relaxed max-w-xs opacity-90 drop-shadow-sm">
            Miami Beach 🌴 Soft lifestyle & daily moments ✨
            <br />
            Simple luxury 🤍 Follow my daily routine ✨ 🤍
          </p>
        </motion.div>

        {/* TikTok Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-10"
        >
          <svg
            className="w-8 h-8 fill-current text-white drop-shadow-lg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.69.69 1.74 1.02 2.71.83 1.02-.16 1.99-.83 2.41-1.77.29-.66.36-1.39.35-2.11.01-4.63 0-9.26.01-13.89z" />
          </svg>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4 mb-12">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full bg-white text-gray-800 rounded-2xl overflow-hidden shadow-xl transition-shadow hover:shadow-2xl ${
                link.isLarge ? "p-0" : "p-2"
              }`}
            >
              <div className="flex items-center">
                {link.isLarge ? (
                  <div className="w-full flex flex-col">
                    <div className="w-full h-64 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={link.image}
                        alt={link.title}
                        className="w-full h-full object-contain p-2"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="font-semibold text-lg">{link.title}</span>
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={link.image}
                        alt={link.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow text-center font-semibold text-lg">
                      {link.title}
                    </div>
                    <div className="w-16 flex justify-center">
                      <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </div>
                  </>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Join Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg mb-12"
        >
          Junte-se a madisonluxy no Linktree
        </motion.button>

        {/* Footer */}
        <footer className="mt-auto py-6 text-[10px] font-medium opacity-70 flex gap-4">
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <span>•</span>
          <a href="#" className="hover:underline">Report</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy</a>
        </footer>
      </div>
    </div>
  );
}
