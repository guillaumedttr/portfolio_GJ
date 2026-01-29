"use client";
import { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    // Requête mise à jour avec production et photographer
    const query = `*[_type == "project" && slug.current == "${slug}"][0] {
      title, client, description, agency, creativeDirector, director, dop, production, photographer,
      "gallery": gallery[] { "_type": _type, "imageUrl": asset->url, "videoUrl": videoFile.asset->url }
    }`;
    client.fetch(query).then(setProject);
  }, [slug]);

  if (!project) return null;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen pb-20 pt-10"
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* MÉDIAS (80%) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full md:w-[80%] flex flex-col gap-6"
          >
            {project.gallery?.map((item: any, index: number) => (
              <div key={index} className="w-full bg-black/5">
                {item._type === 'videoItem' ? (
                  <video src={item.videoUrl} controls autoPlay={false} loop={false} playsInline className="w-full h-auto" />
                ) : (
                  <img src={item.imageUrl} className="w-full h-auto object-cover" alt="" />
                )}
              </div>
            ))}
          </motion.div>

          {/* INFOS (20%) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-full md:w-[20%] flex flex-col gap-8 md:sticky md:top-24"
          >
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-sm uppercase tracking-tight">{project.client}</h2>
              <h3 className="opacity-40 text-[10px] uppercase tracking-wider">{project.title}</h3>
            </div>

            <div className="border-t border-black/5 pt-6 flex flex-col gap-6">
              {/* Utilisation de PortableText pour la description */}
              {project.description && (
                <div className="text-[11px] leading-relaxed opacity-80 normal-case tracking-normal">
                  <PortableText value={project.description} />
                </div>
              )}

              {project.agency && (
                <div className="flex flex-col">
                  <span className="opacity-30 mb-0.5 tracking-widest text-[8px] uppercase">Agency</span>
                  <span className="text-[10px] font-bold uppercase">{project.agency}</span>
                </div>
              )}

              {project.creativeDirector && (
                <div className="flex flex-col">
                  <span className="opacity-30 mb-0.5 tracking-widest text-[8px] uppercase">Creative Director</span>
                  <span className="text-[10px] font-bold uppercase">{project.creativeDirector}</span>
                </div>
              )}
            </div>

            {/* Crédits techniques mis à jour */}
            <div className="flex flex-col gap-5 text-[9px] uppercase">
              {[
                ['Director', project.director], 
                ['DOP', project.dop], 
                ['Photographer', project.photographer],
                ['Production', project.production]
              ].map(([label, value]) => (
                value && (
                  <div key={label} className="flex flex-col">
                    <span className="opacity-30 mb-0.5 tracking-widest text-[8px] uppercase">{label}</span>
                    <span className="font-bold leading-tight uppercase">{value}</span>
                  </div>
                )
              ))}
            </div>

            <Link href="/" className="mt-4 text-[9px] font-bold opacity-30 hover:opacity-100 transition-all uppercase">
              ← BACK
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}