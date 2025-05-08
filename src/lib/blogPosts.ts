export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: {
    name: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'zukunft-web-design-2024',
    title: "Die Zukunft des Web Designs",
    excerpt: "Entdecken Sie die neuesten Trends und Technologien, die das Web Design von morgen prägen werden.",
    content: `
# Die Zukunft des Web Designs: Trends und Innovationen für 2024

In einer sich ständig weiterentwickelnden digitalen Landschaft steht das Web Design vor spannenden Herausforderungen und Möglichkeiten. Dieser Artikel beleuchtet die wichtigsten Trends und Innovationen, die das Web Design im Jahr 2024 prägen werden.

## 1. Immersive Erlebnisse durch 3D und WebGL

Die Integration von 3D-Elementen und WebGL-Technologien ermöglicht es Designern, fesselnde und interaktive Erlebnisse zu schaffen. Von subtilen Animationen bis hin zu vollständig navigierbaren 3D-Umgebungen – die Möglichkeiten sind endlos.

## 2. Micro-Interactions und Animation

Kleine, aber bedeutungsvolle Animationen verbessern die User Experience und machen Websites lebendiger. Diese Micro-Interactions geben dem Nutzer unmittelbares Feedback und machen die Navigation intuitiver.

## 3. Dark Mode und Farbtrends

Dark Mode ist nicht nur ein vorübergehender Trend, sondern entwickelt sich zum Standard-Feature moderner Websites. Kombiniert mit lebendigen Neonfarben und subtilen Farbverläufen entstehen kontraststarke und augenschonende Designs.

## 4. Performance und Nachhaltigkeit

Nachhaltiges Webdesign gewinnt an Bedeutung. Optimierte Ladezeiten, effiziente Codierung und ressourcenschonende Designs sind nicht nur gut für die Umwelt, sondern verbessern auch das Nutzererlebnis.

## Fazit

Die Zukunft des Web Designs liegt in der perfekten Balance zwischen Innovation und Benutzerfreundlichkeit. Erfolgreiche Designs werden jene sein, die neue Technologien sinnvoll einsetzen, ohne dabei die grundlegenden Prinzipien guter User Experience zu vernachlässigen.
    `,
    date: "15. März 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "Alma"
    }
  },
  {
    id: 'seo-strategien-2024',
    title: "SEO Strategien für 2024",
    excerpt: "Wie Sie Ihre Website für die neuesten Suchmaschinen-Algorithmen optimieren können.",
    content: `
# SEO Strategien für 2024: Der ultimative Guide

Die Suchmaschinenoptimierung entwickelt sich ständig weiter. Hier sind die wichtigsten Strategien, die Sie 2024 kennen müssen.

## 1. KI-gestützte Content-Optimierung

Künstliche Intelligenz revolutioniert die Art und Weise, wie wir Content erstellen und optimieren. Lernen Sie, wie Sie KI-Tools effektiv einsetzen können, ohne die menschliche Note zu verlieren.

## 2. Core Web Vitals und Page Experience

Google legt immer mehr Wert auf die technische Performance von Websites. Wir zeigen Ihnen, wie Sie Ihre Core Web Vitals optimieren und ein besseres Nutzererlebnis schaffen.

## 3. Mobile-First Indexing

Mit der zunehmenden Dominanz mobiler Geräte ist Mobile-First nicht mehr optional. Erfahren Sie, wie Sie Ihre Website optimal für mobile Nutzer gestalten.

## 4. Lokale SEO und Google Business Profile

Lokale Präsenz wird immer wichtiger. Nutzen Sie die Macht von Google Business Profile und lokaler Optimierung für mehr Sichtbarkeit in Ihrer Region.

## Fazit

SEO ist ein kontinuierlicher Prozess der Anpassung und Optimierung. Bleiben Sie am Ball und implementieren Sie diese Strategien für langfristigen Erfolg.
    `,
    date: "10. März 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "Melina"
    }
  },
  {
    id: 'social-media-marketing-guide',
    title: "Social Media Marketing Guide",
    excerpt: "Ein umfassender Leitfaden für erfolgreiches Social Media Marketing im Jahr 2024.",
    content: `
# Der ultimative Social Media Marketing Guide für 2024

Social Media Marketing entwickelt sich rasant weiter. Dieser Guide hilft Ihnen, auf dem neuesten Stand zu bleiben.

## 1. Content-Strategie und Storytelling

Authentisches Storytelling ist der Schlüssel zum Erfolg. Lernen Sie, wie Sie fesselnde Geschichten erzählen, die Ihre Zielgruppe begeistern.

## 2. Video-Content und Reels

Kurze Videoformate dominieren die sozialen Medien. Wir zeigen Ihnen, wie Sie mit minimalem Aufwand maximale Wirkung erzielen.

## 3. Community Management

Der Aufbau einer engagierten Community ist wichtiger denn je. Erfahren Sie, wie Sie echte Beziehungen zu Ihren Followern aufbauen.

## 4. Analytics und ROI-Messung

Datengetriebene Entscheidungen sind der Schlüssel zum Erfolg. Lernen Sie, wie Sie Ihre Social Media Performance effektiv messen und optimieren.

## Fazit

Social Media Marketing erfordert Strategie, Kreativität und Konsistenz. Mit den richtigen Tools und Techniken können Sie Ihre Ziele erreichen.
    `,
    date: "5. März 2024",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "Alma"
    }
  }
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};