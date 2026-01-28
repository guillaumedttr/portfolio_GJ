"use client";
import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const query = `*[_type == "project"] | order(_createdAt desc) {
      _id, title, client, "slug": slug.current, "videoUrl": videoFile.asset->url, "imageUrl": image.asset->url
    }`;
    client.fetch(query).then(setProjects);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen pb-32"
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/project/${project.slug}`} className="group cursor-pointer">
                <div className="relative aspect-video bg-gray-100 overflow-hidden mb-5">
                  {project.videoUrl ? (
                    <video 
                      src={project.videoUrl} autoPlay loop muted playsInline 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                    />
                  ) : (
                    <img src={project.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                  )}
                </div>
                <div className="flex justify-between items-baseline uppercase">
                  <h2 className="font-bold text-sm tracking-tight">{project.client}</h2>
                  <span className="opacity-40 text-[11px] tracking-normal">{project.title}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}