import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: '2019 - 2023',
      title: 'Computer Science Graduate',
      company: 'CVR College Of Engineering',
      // Chuyển description thành Array để chứa nhiều dòng
      description: [
        "1. Bachelor's degree with focus on software engineering and cloud computing.",
        "2. Core subjects included Data Structures, Algorithms, and Operating Systems.",
        "3. Completed multiple hands-on projects related to distributed systems."
      ],
      icon: Calendar,
    },
    {
      year: '2022 - 2023',
      title: 'Full-Stack Developer',
      company: 'Tech Agency',
      description: [
        "1. Built scalable web applications using Java, React, and Node.js.",
        "2. Collaborated with cross-functional teams to deliver client projects.",
        "3. Started transitioning towards infrastructure and deployment pipelines."
      ],
      icon: Code,
    },
    {
      year: '2023 - Present',
      title: 'Freelance DevOps & Cloud Engineer',
      company: 'Self-Employed',
      description: [
        "1. Working on freelance projects focusing on cloud automation and CI/CD.",
        "2. Managing container orchestration using AWS, Docker, and Kubernetes.",
        "3. Implementing Infrastructure as Code (IaC) with Terraform."
      ],
      icon: Zap,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Automation First',
      description: 'Every manual process should be automated, every deployment should be reproducible.',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Treat infrastructure with the same discipline as application code.',
    },
    {
      icon: MapPin,
      title: 'Cloud Native',
      description: 'Build for the cloud from day one, embrace containerization and orchestration.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="Hello, I'm Neeraj Chandra Nakka, and I turn code into production reality."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    I design, automate, and deploy systems that turn code into production-grade reality. 
                    My journey began with full-stack development—building web apps with Java, React, and Node.js.
                  </p>
                  <p>
                    Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, 
                    where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments.
                  </p>
                  <p>
                    I work across AWS and Azure, orchestrate containers with Docker and Kubernetes, 
                    and define infrastructure with Terraform and automation scripts. Behind the command line, 
                    I'm equally comfortable in version control and workflow automation, using Git, GitHub, 
                    and GitLab CI/CD to bridge collaboration and delivery.
                  </p>
                  <p className="text-primary-500 font-medium">
                    For me, DevOps isn't just about speed—it's about precision, repeatability, 
                    and creating systems that empower developers to ship confidently and innovate faster.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="text-primary-500 font-mono">1+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="text-primary-500 font-mono">AWS, Azure</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Projects</span>
                    <span className="text-primary-500 font-mono">7+ deployed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Technologies</span>
                    <span className="text-primary-500 font-mono">19+ mastered</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Architecture', 'CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Microservices'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Timeline Section */}
      <section className="py-24 bg-bg-surface/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-40" 
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My journey from full-stack development to DevOps engineering
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto pb-16">
            {/* Đường thẳng ngang mờ */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent -translate-y-1/2" />

            {/* Các Node và Tooltip */}
            <div className="relative flex justify-between items-center z-10 w-full px-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group flex flex-col items-center cursor-pointer"
                  >
                    {/* Tooltip Card (Hiển thị khi hover) */}
                    <div className="absolute bottom-[120%] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:-translate-y-2 z-20 w-72 md:w-80 pointer-events-none">
                      <div className="bg-bg-elevated border border-primary-500/30 rounded-lg p-5 shadow-card-hover relative">
                        {/* Mũi tên chỉ xuống của tooltip */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-elevated border-b border-r border-primary-500/30 transform rotate-45"></div>
                        
                        <h3 className="font-semibold text-lg text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium text-sm mb-3">{item.company}</div>
                        
                        {/* Render Description dạng mảng với space-y-1.5 để tạo khoảng cách giữa các dòng */}
                        <div className="text-neutral-400 text-xs leading-relaxed space-y-1.5">
                          {item.description.map((descLine, i) => (
                            <p key={i}>{descLine}</p>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Timeline Node tròn */}
                    <div className="w-12 h-12 bg-bg-page rounded-full flex items-center justify-center border-2 border-primary-500 shadow-glow hover:bg-primary-500/10 transition-colors z-10 relative">
                      <IconComponent size={20} className="text-primary-500 group-hover:text-primary-400 transition-colors" />
                      
                      {/* Hiệu ứng pulse tỏa ra xung quanh node */}
                      <div className="absolute inset-0 rounded-full border border-primary-500/50 animate-ping opacity-20"></div>
                    </div>

                    {/* Nhãn năm (Luôn hiển thị bên dưới node) */}
                    <div className="absolute top-[140%] text-center w-32 font-mono text-accent-500 text-sm font-medium mt-2">
                      {item.year}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};