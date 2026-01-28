"use client";
import { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const query = `*[_type == "project" && slug.current == "${slug}"][0] {
      title, client, description, agency, creativeDirector, director, dop, producer,
      "gallery": gallery[] { "_type": _type, "imageUrl": asset->url, "videoUrl": videoFile.asset->url }
    }`;
    client.fetch(query).then(setProject);
  }, [slug]);

  if (!project) return null;

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pb-32 pt-10"
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* MÉDIAS (80%) */}
          <div className="w-full md:w-[80%] flex flex-col gap-6">
            {project.gallery?.map((item: any, index: number) => (
              <div key={index} className="w-full bg-black/5">
                {item._type === 'videoItem' ? (
                  <video src={item.videoUrl} controls autoPlay={false} loop={false} playsInline className="w-full h-auto" />
                ) : (
                  <img src={item.imageUrl} className="w-full h-auto object-cover" alt="" />
                )}
              </div>
            ))}
          </div>

          {/* INFOS (20%) */}
          <div className="w-full md:w-[20%] flex flex-col gap-8 md:sticky md:top-24">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-sm uppercase tracking-tight">{project.client}</h2>
              <h3 className="opacity-40 text-[10px] uppercase tracking-wider">{project.title}</h3>
            </div>

            {/* Description + Agency + Creative Director */}
            <div className="border-t border-black/5 pt-6 flex flex-col gap-6">
              {project.description && (
                <p className="text-[11px] leading-relaxed opacity-80 normal-case tracking-normal">
                  {project.description}
                </p>
              )}

              {/* Agency mis en avant après la description */}
              {project.agency && (
                <div className="flex flex-col">
                  <span className="opacity-30 mb-0.5 tracking-widest text-[8px] uppercase">Agency</span>
                  <span className="text-[10px] font-bold uppercase">{project.agency}</span>
                </div>
              )}

              {/* Creative Director juste après l'Agency */}
              {project.creativeDirector && (
                <div className="flex flex-col">
                  <span className="opacity-30 mb-0.5 tracking-widest text-[8px] uppercase">Creative Director</span>
                  <span className="text-[10px] font-bold uppercase">{project.creativeDirector}</span>
                </div>
              )}
            </div>

            {/* Reste des crédits technique */}
            <div className="flex flex-col gap-5 text-[9px] uppercase">
              {[
                ['Director', project.director], 
                ['DOP', project.dop], 
                ['Producer', project.producer]
              ].map(([label, value]) => (
                value && (
                  <div key={label} className="flex flex-col">
                    <span className="opacity-30 mb-0.5 tracking-widest text-[8px]">{label}</span>
                    <span className="font-bold leading-tight">{value}</span>
                  </div>
                )
              ))}
            </div>

            <Link href="/" className="mt-4 text-[9px] font-bold opacity-30 hover:opacity-100 transition-all uppercase">
              ← BACK
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
}