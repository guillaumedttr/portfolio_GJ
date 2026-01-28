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
      // On enlève min-h-screen pour ne pas forcer la hauteur
      className="pt-10 pb-8" 
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* On réduit le gap-y à 6 pour vraiment coller les lignes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              // mb-2 pour réduire l'espace sous le bloc complet
              className="mb-2" 
            >
              <Link href={`/project/${project.slug}`} className="group cursor-pointer">
                {/* mb-2 pour coller le titre à la vidéo */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden mb-2">
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
                  <h2 className="font-bold text-[12px] tracking-tight">{project.client}</h2>
                  <span className="opacity-40 text-[10px] tracking-normal">{project.title}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}