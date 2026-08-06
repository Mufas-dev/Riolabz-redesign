import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef5ff] via-white to-[#f8fbff] pt-36 pb-24">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Technology Partner
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
            Transforming
            <span className="block text-blue-600">
              Business Through
            </span>
            Technology
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Riolabz delivers modern websites, scalable software,
            mobile applications and digital solutions that help
            businesses innovate, grow and stay ahead in a
            competitive market.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

              Get Started

              <ArrowRight size={18} />

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50">

              <PlayCircle size={20} />

              View Portfolio

            </button>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white p-5 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600">
                12+
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600">
                500+
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Projects
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Support
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Business Team"
              className="w-full max-w-[620px] rounded-[32px] object-cover shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute -left-8 top-10 rounded-2xl bg-white p-5 shadow-xl">

              <p className="text-sm text-slate-500">
                Client Satisfaction
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                98%
              </h3>

            </div>

            {/* Floating Card */}

            <div className="absolute -right-6 bottom-10 rounded-2xl bg-white p-5 shadow-xl">

              <p className="text-sm text-slate-500">
                Active Projects
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                42
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;