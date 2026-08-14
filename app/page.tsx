import { About } from "@/components/about";
import { ClientWork } from "@/components/client-work";
import { CustomCursor } from "@/components/custom-cursor";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      author: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: profile.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/profile/akhmad-rafi-oktavian.webp`,
      jobTitle: profile.role,
      description: profile.bio,
      sameAs: profile.socials.map((social) => social.href),
      knowsAbout: profile.skills.flatMap((skill) => skill.items),
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#projects`,
      name: "Selected web development projects",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.category,
          image: `${siteConfig.url}${project.image}`,
          ...(project.url ? { url: project.url } : {}),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteNav />
      <CustomCursor />
      <ScrollEffects />
      <main>
        <Hero />
        <ClientWork />
        <ProjectGrid />
        <About />
      </main>
      <SiteFooter />
    </div>
  );
}
