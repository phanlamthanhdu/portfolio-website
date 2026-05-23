import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Twitter',
      url: CONTACT.social.twitter,
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ping contact.server"
        description="Establishing connection to communication endpoint"
      />

      <section className="py-24">
        {/* Đổi max-w-7xl thành max-w-3xl để bóp gọn layout vào giữa màn hình */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Methods */}
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center">
              <h3 className="font-mono text-xl font-semibold text-primary-500 mb-8">
                Contact Methods
              </h3>
              <div className="space-y-6 max-w-md mx-auto">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={method.label} className="flex flex-col items-center sm:flex-row sm:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-6 bg-bg-surface p-4 rounded-lg border border-neutral-800">
                      <div className={`p-3 bg-bg-elevated rounded-lg ${method.color} mx-auto sm:mx-0`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="sm:text-left text-center flex-1">
                        <div className="font-medium text-lg text-neutral-200">{method.label}</div>
                        <div className="text-neutral-400 font-mono mt-0.5 break-all">{method.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center">
              <h3 className="font-mono text-xl font-semibold text-primary-500 mb-6">
                Availability Status
              </h3>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-3.5 h-3.5 bg-primary-500 rounded-full animate-pulse" />
                  <span className="font-mono text-base text-neutral-200 font-medium">Available for new projects</span>
                </div>
                <div className="text-base text-neutral-400 font-mono space-y-1">
                  <div>Response time: Within 24 hours</div>
                  <div>Time zone: IST (UTC+5:30)</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center">
              <h3 className="font-mono text-xl font-semibold text-primary-500 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center p-5 bg-bg-surface rounded-lg text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card border border-neutral-800`}
                    >
                      <IconComponent size={28} className="mb-2" />
                      <span className="text-sm font-mono">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal-style footer message */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Thank you for visiting!"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>I'm always interested in discussing new opportunities and challenging projects.</p>
              <p className="text-primary-500">
                Let's build something amazing together.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400">
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>Connection established. Awaiting your message...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};