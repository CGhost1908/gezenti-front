import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';
import { Icon } from '@iconify/react';

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const suggestions = [
    {
      image: 'suggestions/konak.jpg',
      title: 'Safranbolu Konakları',
      publisher: '@username',
      description: "Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.",
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: false,
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: ''
    },
    {
      image: 'suggestions/oludeniz.jpg',
      title: 'Ölüdeniz Plajı',
      publisher: '@username',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsum natus reprehenderit voluptatibus tenetur! Ab fuga eaque harum dignissimos obcaecati consectetur ipsam eum. Magni excepturi expedita eaque, veniam quia natus!
      Delectus, illo repellendus. Perspiciatis assumenda, quod illo labore aliquam voluptas inventore odit corporis, itaque nobis reprehenderit, cupiditate dolorum dolores facilis similique consectetur id delectus repudiandae consequatur cum ipsam aliquid! Similique.
      Officiis, eligendi magni! Eligendi consequuntur at incidunt ducimus sequi natus nam maiores, dolore, libero culpa, ea voluptatem quisquam ipsam facilis harum corrupti temporibus iure. Odio iusto modi aspernatur sint nemo?
      Numquam quibusdam repellendus iure unde minima aliquid suscipit rerum error? Et quisquam molestiae rem, itaque autem, molestias soluta cupiditate corrupti aperiam, impedit aliquid excepturi! Maiores aperiam officia praesentium saepe accusamus!
      Voluptatem, eum officia in maiores distinctio inventore. Maxime vitae consequuntur aliquam dolorum, possimus sunt dicta? Vero, quas porro eos, iste labore exercitationem consectetur et illo facere ipsum, praesentium doloribus odio?
      Voluptas, rem illo placeat blanditiis libero adipisci molestias neque qui quam. Aliquam dolore reiciendis recusandae id cum soluta perspiciatis eum rerum? Deleniti reprehenderit deserunt sed temporibus neque at sit excepturi.
      Enim impedit amet, nisi cupiditate quas temporibus doloremque a sit! Molestiae quis consequuntur asperiores exercitationem, amet esse tempora quas non suscipit eos fugiat expedita eius in nihil commodi eum nostrum?
      Porro recusandae doloremque voluptatem ad sit sed rem fugiat nam vero iusto, in excepturi quidem, aut iure maiores esse ea culpa numquam nobis quisquam dolorum nisi. Velit corporis molestias harum?
      Et consequuntur maiores repellat dicta, esse nobis beatae deleniti assumenda aliquid facere in cumque perferendis ab! Id ipsam libero ullam laboriosam! Nisi similique animi voluptas voluptatum in adipisci, eaque ut?`,
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: true,
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #000)',
      url: ''
    },
    {
      image: 'suggestions/baca.jpg',
      title: 'Cappadocia Peribacaları',
      publisher: '@username',
      description: "Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.",
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: false,
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: ''
    },
    {
      image: 'suggestions/pamukkale.jpg',
      title: 'Pamukkale Travertenleri',
      publisher: '@username',
      description: "Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.",
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: false,
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
      url: ''
    },
    {
      image: 'suggestions/efes.jpg',
      title: 'Efes Antik Kenti',
      publisher: '@username',
      description: "Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.",
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: false,
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
      url: ''
    },
    {
      image: 'suggestions/amasra.jpg',
      title: 'Amasra Sahili',
      publisher: '@username',
      description: "Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.Osmanlı dönemine ait görkemli konaklar ve tarihi doku. Eski İstanbul'u andıran sokakları gezmek bir zaman yolculuğu gibi.",
      categories: ['Doğa', 'Manzara', 'Deniz'],
      rating: "4.5/5",
      views: "121K",
      isLiked: false,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: ''
    }
  ];
  const data = items?.length ? items : suggestions;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: c.url ? 'pointer' : 'default'
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="title">
              {c.title}
              {c.isLiked ? <Icon icon="iconamoon:heart-fill" className='like' width="36px" height="36px" color="red" /> : <Icon icon="iconamoon:heart-light" className='like' width="36px" height="36px" />}
            </h3>
            {c.publisher && <span className="publisher">{c.publisher}</span>}
            <p className="description">{c.description}</p>
            <div className="categories">
              {c.categories.map((category, i)=> (
                  <span key={i} className="category">{category}</span>
              ))}
            </div>
            <div className="vertical-seperator"></div>
            <div className="stats">
              <span className="rating"><Icon icon="ic:baseline-star" width="24" height="24" color='yellow' /> {c.rating}</span>
              <span className="views"><Icon icon="fluent-mdl2:view" width="18" height="18" /> {c.views}</span>
            </div>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
