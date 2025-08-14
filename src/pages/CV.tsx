import React from 'react';
import { Link } from 'react-router-dom'; // Eklendi
import CVComp from '../components/CVComp';
import { Signature } from '../components/Signature';
import Pic1 from '../images/ARDA.png';
import Pic2 from '../images/HATICE.jpg';
import Pic3 from '../images/KUBRA.png';
import Pic4 from '../images/ERAY.jpg';
import Pic5 from '../images/SALIH.png';

const cvList = [
   {
    name: "Arda Dincer",
    description: "Tasarımcı-Yazılımcı-Sözcü-Yönetici",
    about: "Isık Üniversitesi 2. Sınıf Görsel Iletisim Tasarımı Ögrencisi. Proje Yöneticisi olarak ekibin çalısma programını ve gelecek gelismeler için fikirleri planladım ve uyguladım. Tasarımcı olarak projenin ana konseptine uygun Çizimler, Modeller ve Animasyonlar ürettim. Yazılımcı olarak projenin web arayüzünü React ile gelistirdim.",
    image: Pic1,
  },
  {
    name: "Hatice Karais",
    description: "Arastırmacı-Rapor Yazarı",
    about: "Isık Üniversitesi 2. Sınıf Psikoloji Ögrencisi. Proje için gerekli olan arastırmaları yaparak, ekibin ihtiyaç duyduğu bilgileri topladım. Rapor yazarı olarak projenin tüm asamalarını ve elde edilen sonuçları detaylı bir sekilde raporladım.",
    image: Pic2,
  },
  {
    name: "Kübra Çolak",
    description: "Tasarımcı - Yardımcı Arastırmacı",
    about: "Isık Üniversitesi 2. Sınıf Iç Mimarlık ve Çevre Tasarımı Ögrencisi. Proje için gerekli olan görsel tasarımları ve grafik ögeleri ürettim. Yardımcı arastırmacı olarak, projenin gereksinimlerini destekleyen ek bilgi ve verileri topladım.",
    image: Pic3,
  },
  {
    name: "Eray Ersavas",
    description: "Miro Yöneticisi - Rapor Yazarı",
    about: "Isık Üniversitesi 2. Sınıf Yönetim Bilisim Sistemleri Ögrencisi. Proje için Miro platformunu yönettim ve ekibin isbirliği yapmasını sağladım. Rapor yazarı olarak, projenin tüm asamalarını ve elde edilen sonuçları detaylı bir sekilde raporladım.",
    image: Pic4,
  },
  {
    name: "Salih Yusuf Köse",
    description: "Tasarımcı",
    about: "Salih Yusuf Köse Isık Üniversitesi 3. Sınıf Endüstriyel Tasarım Ögrencisiyim. Proje için gerekli olan görsel tasarımların eskizlerini tasarladım.",
    image: Pic5,
  },
];

const CV: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #1a1a1a 60%, #333 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 0',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Link to="/" style={{
        position: 'absolute',
        top: '20px',
        right: '40px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#FFF',
        color: '#1a1a1a',
        border: '2px solid #1a1a1a',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
      }}>
        Ana Sayfa
      </Link>
      <Signature name="©L' CHANCE 2025 · Varav " color="white" status="Aktif" isDarkMode={true} />
      <div style={{
        maxWidth: '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        {cvList.map((cv, idx) => (
          <CVComp
            key={idx}
            name={cv.name}
            description={cv.description}
            about={cv.about}
            image={cv.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CV;