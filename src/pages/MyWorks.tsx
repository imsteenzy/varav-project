import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// Geçici resim importu
import WhiteImg from '../images/white.png';
import { Signature } from '../components/Signature';

const ekip = [
  "Arda Dincer",
  "Hatice Karais",
  "Kübra Çolak",
  "Eray Ersavaş",
  "Salih Yusuf Köse"
];

const PictureLeft = ({ src, alt, children }: { src: string; alt: string; children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flexWrap: 'wrap',
    margin: '24px 0'
  }}>
    <div style={{ flex: '0 0 320px', textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ maxWidth: '320px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.13)' }} />
      <div style={{ fontSize: '0.95rem', opacity: 0.7, marginTop: '4px' }}>{alt}</div>
    </div>
    <div style={{ flex: '1 1 300px', minWidth: '220px' }}>
      {children}
    </div>
  </div>
);

const Picture = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ width: '100%', textAlign: 'center', margin: '18px 0' }}>
    <img src={src} alt={alt} style={{ maxWidth: '420px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.13)' }} />
    <div style={{ fontSize: '0.95rem', opacity: 0.7, marginTop: '4px' }}>{alt}</div>
  </div>
);

const sections = [
  {
    title: "Logomuz ve Proje Teması",
    content: (
      <PictureLeft src={WhiteImg} alt="Proje Logosu">
        <p>
          Logomuz, Projemizin adı olan TOPLAN HAYAT temasını tasarımsal olarak yansıtmaktadır. Arka planda yer alan saat, afet anı ve sonrasında zamanın kritik önemini aynı zamanda afet sırasında durmuş veya kırılmış saatleri simgelemektedir. Saatin içerisinden yükselen kuş figürü ise haberleşmeyi, umut ve özgürlüğü temsil eder. Bu kuş projemizin afet sonrasında hızlı ve doğru bilgi akışı sağlamayı hedefleyen yönü vurgular. Saat ile kuşun birleşimi hem afetin yarattığı duraksamayı hem de yeniden toparlanma ve iletişimle hayata olan umudu anlatır.
        </p>
      </PictureLeft>
    )
  },
  {
    title: "Neden TOPLAN HAYAT?",
    content: (
      <p>
        TOPLAN HAYAT, afet sonrası yaşamın devam edebilmesi için insanların bir araya gelmesini ifade eder. Bu ifade hem fiziksel olarak toplanma alanlarında buluşmayı hem de toplumsal dayanışmayı simgeler. Projemizin amacı, afet anı ve sonrasında hızlı haberleşme, güvenli toplanmayı ve koordineli hareket ile hayatı yeniden düzene koymaktır. Toplan Hayat adı, bu sürecin ilk adımını temsil eder: Bir araya gel, hayata tutun.
      </p>
    )
  },
  {
    title: "GRUP ADI Neden VARAV?",
    content: (
      <p>
        VARAV, iki tarafından okunabilen özel bir kelime yapısına sahiptir. Her iki uçtan da bakıldığında anlamını koruyarak, farklı yönlerden gelen insanların ortada R harfinde birleşmesini simgeler. Bu birleşme, afet sonrasında dayanışmayı, kenetlenmeyi ve ortak amaç için toplanmayı ifade eder. Grup adımız, yaratıcılığı hem de birlikle hareket etmenin gücünü yansıtır.
      </p>
    )
  },
  {
    title: "AMAÇ",
    content: (
      <p>
        Toplan Hayat Projesi, üniversitemizde afet anı ve sonrasında kullanılmak üzere resmi ve güvenilir acil toplanma alanları oluşturmayı amaçlamaktadır. Kampüsümüzde ve Google Maps üzerinde net olarak belirtilmiş toplanma alanlarının bulunmaması, olası bir afet durumunda hem yönlendirme hem de güvenlik açısından ciddi bir eksiklik oluşturmaktadır.
        Bu nedenle, kampüsün büyüklüğünü dikkate alarak iki farklı toplanma alanı tasarladık. Proje kapsamında, afet anında güvenli toplanmayı sağlayacak şekilde özelleştirilmiş konteynerler, aydınlatma ve yönlendirme sistemleri geliştirdik. Ayrıca, bilinçlendirme amacıyla afişler hazırladık ve kampüsün afet anı ile sonrasındaki eksikliklerini tespit ederek çözüm önerileri geliştirdik.
        Amacımız, afetlerin kendisinden çok afet sırasında ortaya çıkan istismar ve bilinçsizlikten kaynaklanan kayıpları önlemek; güvenli, erişilebilir ve verimli bir toplanma alanı altyapısı ile farkındalık yaratmaktır.
      </p>
    )
  },
  {
    title: "JAPONYA VE DEPREM RAPORU",
    content: (
      <PictureLeft src={WhiteImg} alt="Japonya Deprem Araştırma ve Üniversite Çalışmaları">
        <div>
          <p>
            Japonya, Pasifik bölgesinin fay hattı üzerinde tehlikeli bir noktada bulunmaktadır. Sık sık büyük depremler yaşanır. Bu durum Japonya’nın Deprem Afet Yönetimi için dünyanın en gelişmiş sistemlerini kurmasına neden olmuştur.
          </p>
          <p>
            Örnek olarak, 2011 Yılında Büyük Doğu Tōhoku Depreminde, Japonya’nın Deprem ve Tsunami için yeni sistemler geliştirmek için dönüm noktası olmuştur. Bu Büyük Felaket, ülkenin afet yönetimi sistemlerinin gözden geçirilmesine, teknolojik altyapısını güçlendirmesine ve yeni erken uyarı sistemleri geliştirmesine neden oldu.
          </p>
          <p>
            Tōhoku bölgesinde gerçekleşen 2011 Depreminden sonra Tōhoku Üniversitesi Deprem Afet Araştırma Enstitüsü kurulmuş ve Japonya’nın afet ve deprem yönetiminde en gelişmiş üniversiteleri arasında 1. sırada yer bulmuştur. Araştırmaları ve uluslararası kaynaklara sahip olmasıyla beraber afet yönetiminde üst seviye bilgiye sahiplerdir. Enstitü’ye olan sponsorların sağladığı maddi kaynakla erken uyarı sistemleri, dayanıklı yapılar ve yenilenebilir destekli çözümler geliştirmişlerdir.
          </p>
          <p>
            Tohoku Üniversitesi dışında, Kyoto Üniversitesi de güneş enerji destekli sistemler, sirenler ve dayanıklı altyapılar üzerinde çalışmışlardır.
          </p>
        </div>
      </PictureLeft>
    )
  },
  {
    title: "YÖNTEM",
    content: (
      <>
        <PictureLeft src={WhiteImg} alt="Saha Alanına Yakın Binalar">
          <p>
            Saha Alanına Yakın Binalar: Mavi Yurtlar, DK Binası, Spor Salonu, Kahve Dünyası, Sosyal Alan(Yukarı Yol)
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Park Alanına Yakın Binalar">
          <p>
            Park Alanına Yakın Binalar: AMF, LMF, DMF binaları, Turuncu Yurt, Bordo Yurt ve Hazırlık Binası, Sosyal Alan(Aşağı Yol)
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Ana toplanma alanı ile saha toplanma alanı arasındaki yol">
          <p>
            Ana toplanma alanı ile saha toplanma alanı arasında bir yol bulunmaktadır. Ancak, bu yolun ışıklandırma altyapısı yetersizdir ve afet anı için güvenlik açısından risk oluşturabilecek eksiklikler barındırmaktadır. Ayrıca, ana toplanma alanından sağa doğru giden yolda güvenlik sıkıntıları mevcuttur. Bu durum, özellikle acil tahliye sırasında kişilerin güvenliğini tehlikeye atabilecek önemli bir unsurdur. Mevcut ışıklandırmanın ve güvenlik önlemlerinin geliştirilmesi, afet yönetimi planlarının etkinliği açısından kritik öneme sahiptir.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Yol Işıklandırmaları">
          <p>
            Yol Işıklandırmaları: Küçük boyutlu, minimal alan kaplayan, LED teknolojili ve geniş ışık yayılımına sahip aydınlatmalar. Bu sistem enerji tasarrufu sağlarken, elektrik kesintilerinde kesintisiz aydınlatma sunar.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Güneş Paneli ve Basit Işıklandırma Sistemi">
          <p>
            Acil toplanma alanlarında kullanılmak üzere tasarlanan basit ışıklandırma sisteminin zemin kısmına yüksek verimli güneş panelleri entegre edilmiştir. Bu paneller, park alanında güneş ışığını engelleyecek herhangi bir obje bulunmaması sayesinde maksimum verimlilikle enerji toplar.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Yerleşim Planı ve Panel Alanı">
          <p>
            Sistem, toplanma alanında gereksiz yer kaplamamak için yalnızca belirli stratejik noktalara yerleştirilir. Güneş paneli yüzey alanı dikkate alınarak, yerleşim planı hem enerji verimliliğini hem de alan kullanımını optimize edecek şekilde yapılmıştır.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Sarsıntı Sistemli Aydınlatma">
          <p>
            Toplanma Alanındaki sarsıntı sistemli daha fazla aydınlatma sağlayan sistemimizin iyi aydınlatma sağlamasını okul içerisinde bulunan ara yollar için kullanmayı amaçladık: Sosyal-Saha, Sosyal-Spor Salonu, Saha-Otopark, Otopark-Locmanlar gibi. Güneş Paneli sayesinde elektrik kesintilerinde aydınlatma sağlamaya devam edebilecek.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Tabelalı Yönlendirme Sistemi">
          <p>
            Kampüs içi yollar üzerinde yerleştirilen tabelalı yönlendirme sistemleri, afet sırasında hem görsel hem de işitsel bilgilendirme yaparak insanların doğru toplanma alanına yönelmesini sağlar. Sistemde LED aydınlatmalı yön tabelaları, hoparlör ve siren bulunur, siren fonksiyonu ile acil uyarılar verir.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Konteyner Tasarım 1">
          <p>
            Konteynerler afet sonrası kullanım verimliliğini artırmak ve alanda kolay taşınabilirlik sağlamak amacıyla, hava geçirmez kapaklara sahip ve sürüklenebilir özelliğe sahip özel olarak tasarlanmıştır. İçerisinde gıda, su, ilk yardım ve sağlık malzemeleri, hijyen ve tuvalet, ısınma ve barınma gibi temel ihtiyaçlar için bölümler yer alır.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Konteyner Tasarım 2">
          <p>
            Konteynerin alt kısmında yer alan sürüklenebilir tekerlek sistemi hem kolay taşınabilirlik hem de güvenli sabitleme imkânı sunar. Dayanıklı malzemeleri sayesinde dört mevsim kullanılabilir ve olumsuz hava koşullarına karşı koruma sağlar.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Konteyner Tasarım 3">
          <p>
            Üst kısımda bulunan güneş panelleri, afet sonrası enerji ihtiyacını karşılar (telefon şarjı, aydınlatma, telsiz ve küçük elektrikli cihazlar). Güneş panellerinin yerleşimi, maksimum güneş ışığı alacak şekilde tasarlanmıştır.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Konteyner Tasarım 4">
          <p>
            Hava almayan sürgülü kapaklı dolap sistemi sayesinde gıdaların bozulma riski azaltılmıştır. Tasarım, bireylerin kendi ihtiyaçlarına göre eklemeler ve düzenlemeler yapabilmesine imkân tanıyacak esneklikte oluşturuldu.
          </p>
        </PictureLeft>
        <PictureLeft src={WhiteImg} alt="Proje Afişi ve QR Kod">
          <p>
            İnsanları bilinçlendirmek ve farkındalıklarını aktif tutmak amacıyla projemiz kapsamında özel bir afiş tasarladık. Afişin tam ortasına, maksimum dikkat çekmesi ve doğrudan farkındalık yaratması için bir QR kod yerleştirildi. Bu QR kod, izleyenleri doğrudan proje konumuz olan bilgilendirici videoya yönlendirmektedir.
          </p>
        </PictureLeft>
      </>
    )
  },
  {
    title: "SONUÇLAR VE TARTIŞMA",
    content: (
      <p>
        Bu proje ile kampüsümüzde mevcutta resmi olarak tanımlanmamış bir acil toplanma alanı belirlenmiş ve resmileştirilmiştir. Ayrıca kampüsün büyüklüğü ve öğrenci yoğunluğu göz önünde bulundurularak iki ek acil toplanma alanı tasarlanmıştır. Afet anında ve sonrasında yönlendirme ve güvenli alan sağlamak amacıyla, farklı amaçlara hizmet eden iki tip ışıklandırma sistemi geliştirilmiştir.
        Proje kapsamında, afet sonrası kullanım verimliliğini artırmak ve alanda kolay taşınabilirlik sağlamak amacıyla, hava geçirmez kapaklara sahip ve sürüklenebilir özelliğe sahip özel konteynerler tasarlanmıştır. Bu konteynerler; gıda ve su, ilk yardım ve sağlık malzemeleri, hijyen ve tuvalet, ısınma ve barınma gibi temel ihtiyaçlar için bölümlendirilmiştir.
        Afet öncesinde toplumsal bilinç ve güven duygusunu artırmak amacıyla bilgilendirici afişler hazırlanmış, bu afişlere QR kod eklenerek proje tanıtım videosuna yönlendirme yapılmıştır. Böylece hem farkındalık hem de güvenilirlik sağlanmıştır.
        Projenin en önemli kazanımlarından biri, kısa süre içerisinde etkili bir ekip çalışması yürütülebileceğinin deneyimlenmiş olmasıdır. Ayrıca kampüs içerisinde acil toplanma alanlarının önemi konusunda farkındalık yaratılmıştır.
      </p>
    )
  },
  {
    title: "ÖNERİLER",
    content: (
      <p>
        • Gelecek ekipler için düzenli iletişim protokolleri oluşturulmalıdır.<br />
        • Teknik zorluklar ve beklenmedik durumlar için yedek planlar hazırlanmalıdır.<br />
        • Sosyal medya platformları aktif biçimde kullanılarak toplumdan geri bildirimler toplanmalıdır.<br />
        • Proje tasarımları periyodik olarak gözden geçirilip güncellenmelidir.<br />
        Genel Değerlendirme:<br />
        Bu proje, hem afet öncesi hem de afet sonrası süreçleri kapsayan bütüncül bir yaklaşım ile hazırlanmış, kampüsün ihtiyaçlarına doğrudan çözüm sunan, farkındalık ve güvenlik odaklı bir çalışma olmuştur. Hedeflerimize büyük oranda ulaşılmıştır.
      </p>
    )
  },
  {
    title: "KAYNAKLAR",
    content: (
      <p>
        Salih Yusuf Köse:<br />
        Tokyo Metropolitan Government – Disaster Preparedness<br />
        https://www.bousai.metro.tokyo.lg.jp<br />
        Osaka City – Emergency Evacuation Maps (Chuo Ward)<br />
        https://www.city.osaka.lg.jp/contents/wdu020/chuo/english/images/chuoward_emergency_map_e.pdf<br />
        Fukuoka City Disaster Prevention Map<br />
        https://www.city.fukuoka.lg.jp<br />
        Fukuoka Now – Mamoru-kun Disaster App<br />
        https://www.fukuoka-now.com/en/news/fukuoka-disaster-app-adds-live-river-camera-feeds<br />
        Japan Living Guide – Evacuation Measures<br />
        https://www.japanlivingguide.com/expatinfo/emergencies/evacuation-measures<br />
        GFDRR/World Bank – Community Preparedness Maps<br />
        https://www.gfdrr.org/sites/default/files/publication/121516_drmhubtokyo_Preparedness_Map_for_<br />
        <br />
        Eray Ersavaş:<br />
        https://fikirturu.com/toplum/japonyada-devlet-ve-kurumlar-dogal-afetlere<br />
        https://www.arkitera.com/haber/japonyadaki-afet-bolgelerindeki-komunite-merkezi-konseptini-turkiyeye-tasiyan-girisim<br />
        https://www.jeotermalhaberler.com/repg-sebeke-bagimsiz-afet-konteyner-sistemi-hatayda-kuruldu<br />
        https://www.resmigazete.gov.tr/eskiler/2013/06/20130618-8.htm<br />
        https://www.csgb.gov.tr/Media/vnfptwuo/acil-durum-plani-hazirlama-rehberi_mdb.pdf<br />
        https://www.lexpera.com.tr/resmi-gazete/metin/afet-ve-acil-durum-mudahale-hizmetleri-yonetmeligi-31760-5211<br />
        <br />
        Arda Dincer:<br />
        Tasarımlar için; Adobe Photoshop, Premier Pro, After Effects ve Blender.<br />
        Yazılım için: Visual Studio Code, ReactJs, Typescript, Github, Git.<br />
        Üniversite Araştırması için: Tyoko Üniversitesi resmi makale, Tyoko Youtube kanalı Araştırma sunumu, Kyoko Üniversitesi Akademisyen Röportajları, Büyük Doğu Depremi Resmi Uluslararası makaleler( Boğaziçi Üniversitesi )
      </p>
    )
  }
];

const MyWorks: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 60%, #333 100%)',
        color: '#fff',
        minHeight: '100vh',
        padding: '48px 0 32px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Trokia, Arial, sans-serif',
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
        fontFamily: 'Trokia, Arial, sans-serif'
      }}>
        Ana Sayfa
      </Link>
      <h1 style={{
        fontSize: '2.6rem',
        fontWeight: 'bold',
        marginBottom: '12px',
        letterSpacing: '2px',
        textAlign: 'center'
      }}>
        TOPLAN HAYAT PROJE RAPORU
      </h1>
      <div style={{
        display: 'flex',
        gap: '18px',
        marginBottom: '32px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {ekip.map((isim, idx) => (
          <div key={idx} style={{
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '12px',
            padding: '14px 28px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            border: '1px solid #444',
            minWidth: '160px',
            textAlign: 'center'
          }}>
            {isim}
          </div>
        ))}
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
        padding: '32px 24px',
        maxWidth: '900px',
        width: '90%',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '18px',
          letterSpacing: '1px',
          textAlign: 'center'
        }}>
          İÇİNDEKİLER
        </h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '2', marginLeft: '16px' }}>
          <li>Logomuz ve Proje Teması</li>
          <li>Neden TOPLAN HAYAT?</li>
          <li>GRUP ADI Neden VARAV?</li>
          <li>1.1. Amaç</li>
          <li>Japonya ve Deprem Raporu</li>
          <li>1.2. Giriş</li>
          <li>1.3. Yöntem</li>
          <li>1.4. Sonuçlar ve Tartışma</li>
          <li>1.5. Öneriler</li>
          <li>1.6. Kaynaklar</li>
        </ul>
      </div>
      {sections.map((sec, idx) => (
        <div key={idx} style={{
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          padding: '28px 22px',
          maxWidth: '900px',
          width: '90%',
          marginBottom: '28px'
        }}>
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#ffb347',
            letterSpacing: '1px'
          }}>
            {sec.title}
          </h2>
          <div style={{
            fontSize: '1.08rem',
            lineHeight: '1.7',
            whiteSpace: 'pre-line',
            margin: 0
          }}>
            {sec.content}
          </div>
        </div>
      ))}
   <Signature name="©L' CHANCE 2025 · Varav " color="white" status="Aktif" isDarkMode={true} />

    </div>
  );
};

export default MyWorks;