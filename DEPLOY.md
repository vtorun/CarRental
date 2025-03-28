İşte Canlı Skor & Maç Takip Uygulaması için detaylı proje dokümanı (Markdown formatında). Dilerseniz bu dokümanı .md uzantılı bir dosya olarak kaydedip, proje klasörünüze ekleyebilirsiniz:

# 📝 Canlı Skor & Maç Takip Uygulaması - Teknik Doküman

## 📌 Proje Özeti
**Amaç**: Futbol maçlarını canlı takip edebilen, kullanıcıların favori takımlarını kaydedebildiği bir React uygulaması.

## 🛠 Kullanılan Teknolojiler
| Teknoloji       | Kullanım Amacı                              |
|-----------------|--------------------------------------------|
| React + TypeScript | Dinamik UI ve tip güvenliği               |
| Tanstack Query  | API verilerini yönetme ve önbellekleme     |
| Redux Toolkit   | Global state yönetimi (favori takımlar)    |
| Firebase        | Kullanıcı auth ve veritabanı (Firestore)   |
| Football API    | Canlı skor ve istatistik verileri          |

## 📂 Proje Mimarisi
```bash
src/
├── api/                 # API ve Firebase bağlantıları
├── components/          # UI bileşenleri (MatchCard, LeagueTable)
├── features/            # Özellik modülleri (auth, favorites)
├── pages/               # Sayfalar (Home, MatchDetail)
├── store/               # Redux yapılandırması
└── types/               # TypeScript tipleri


🔧 Kritik Entegrasyonlar
1. Tanstack Query + API

// Canlı maç verisi çekme
const { data: liveMatches } = useQuery({
  queryKey: ['live-matches'],
  queryFn: fetchMatches,
  refetchInterval: 60000 // 1 dakikada bir güncelle
});



2. Firebase Auth + Firestore
// Kullanıcı favorilerini kaydetme
const saveFavorites = async (userId: string, teams: string[]) => {
  await setDoc(doc(db, 'users', userId), { favorites: teams });
};


3. Redux Toolkit Slice