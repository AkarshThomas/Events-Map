import { HistoricalEvent } from "./Components/MapsApp";

const eventsData: HistoricalEvent[] = [

 // Example 1: Religion
 {
    id: 1,
    title: "Construction of the Taj Mahal",
    description: "The Taj Mahal, a UNESCO World Heritage Site, was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal between 1632 and 1653 in Agra, India.",
    position: [27.1751, 78.0421], // Coordinates of Agra, India
    category: "Religion",
  },

  // Example 2: Politics
  {
    id: 2,
    title: "Independence of India",
    description: "India gained independence from British rule on August 15, 1947, following a non-violent resistance movement led by Mahatma Gandhi and various other freedom fighters.",
    position: [28.6139, 77.2090], // Coordinates of New Delhi, India
    category: "Politics",
  },

  // Example 3: Art
  {
    id: 3,
    title: "Publication of 'The Discovery of India'",
    description: "'The Discovery of India' is a book written by Jawaharlal Nehru, India's first Prime Minister, during his imprisonment in 1942–46 at Ahmednagar Fort in Maharashtra, India.",
    position: [19.0896, 74.7487], // Coordinates of Ahmednagar, India
    category: "Art",
  },

  // Example 4: Science
  {
    id: 4,
    title: "Discovery of the Raman Effect",
    description: "In 1928, Indian physicist C.V. Raman discovered the Raman Effect, which demonstrated the scattering of light by molecules and earned him the Nobel Prize in Physics in 1930.",
    position: [13.0827, 80.2707], // Coordinates of Chennai, India
    category: "Science",
  },

  // Example 5: Other
  {
    id: 5,
    title: "Establishment of the Indian Space Research Organisation (ISRO)",
    description: "The Indian Space Research Organisation (ISRO) was founded on August 15, 1969, with its headquarters in Bengaluru, Karnataka, India, to advance space technology and exploration.",
    position: [12.9716, 77.5946], // Coordinates of Bengaluru, India
    category: "Other",
  },
  // Example 6: Sport
  {
    id: 6,
    title: "First Rugby World Cup Victory",
    description: "In 1991, the Australian national rugby union team, the Wallabies, won their first Rugby World Cup, defeating England in the final held at Twickenham Stadium.",
    position: [-33.8922, 151.2210], // Coordinates of Sydney, Australia
    category: "Sport",
  },

  // Example 7: Exploration
  {
    id: 7,
    title: "Exploration of the Great Barrier Reef",
    description: "In 1770, Captain James Cook explored and charted the Great Barrier Reef off the coast of Queensland, Australia, during his first voyage to the Pacific Ocean aboard HMS Endeavour.",
    position: [-16.8379, 145.6509], // Coordinates of Cairns, Australia
    category: "Other",
  },

  // Example 8: Art
  {
    id: 8,
    title: "Opening of the Sydney Opera House",
    description: "The Sydney Opera House, one of the most iconic performing arts venues in the world, was officially opened on October 20, 1973, by Queen Elizabeth II.",
    position: [-33.8568, 151.2153], // Coordinates of Sydney Opera House, Sydney, Australia
    category: "Art",
  },

  // Example 9: Science
  {
    id: 9,
    title: "Discovery of Gold in Victoria",
    description: "In 1851, gold was discovered in Ballarat and Bendigo in Victoria, Australia, leading to a gold rush that significantly shaped the nation's economy and demographics.",
    position: [-37.5622, 143.8503], // Coordinates of Ballarat, Australia
    category: "Science",
  },

  // Example 10: Politics
  {
    id: 10,
    title: "Foundation of Canberra as the Capital",
    description: "Canberra, located in the Australian Capital Territory, was established as the capital city of Australia on March 12, 1913, following a long dispute between Sydney and Melbourne.",
    position: [-35.3081, 149.1245], // Coordinates of Canberra, Australia
    category: "Politics",
  },

  {
  id: 11,
  title: "Birth of Mahatma Gandhi",
  description: "Mohandas Karamchand Gandhi, commonly known as Mahatma Gandhi, was born on October 2, 1869, in Porbandar, Gujarat, India. He became a prominent leader in India's independence movement through nonviolent civil disobedience.",
  position: [21.6417, 69.6293], // Coordinates of Porbandar, India
  category: "Religion",
},

// Example 12: Politics
{
  id: 12,
  title: "Dandi March",
  description: "The Dandi March, also known as the Salt March, was a nonviolent protest led by Mahatma Gandhi against the British salt monopoly. It began on March 12, 1930, and culminated in the defiance of the salt tax laws in Dandi, Gujarat, India.",
  position: [21.3867, 72.1253], // Coordinates of Dandi, India
  category: "Politics",
},

// Example 13: Art
{
  id: 13,
  title: "Indus Valley Civilization",
  description: "The Indus Valley Civilization, one of the world's oldest urban civilizations, flourished in the northwestern region of the Indian subcontinent from around 3300 BCE to 1300 BCE, with major cities like Mohenjo-Daro and Harappa.",
  position: [26.3721, 68.0378], // Coordinates of Mohenjo-Daro, Pakistan (representative of the civilization)
  category: "Art",
},

// Example 14: Science
{
  id: 14,
  title: "Launch of Mangalyaan",
  description: "Mangalyaan, also known as the Mars Orbiter Mission, is India's first interplanetary mission launched by the Indian Space Research Organisation (ISRO) on November 5, 2013. It successfully entered Mars' orbit on September 24, 2014.",
  position: [12.9716, 77.5946], // Coordinates of Bengaluru, India (ISRO headquarters)
  category: "Science",
},

// Example 15: Other
{
  id: 15,
  title: "Reformation Era",
  description: "The Reformation Era in Indonesia refers to a period of political and social reform that began in 1998 following the fall of President Suharto's authoritarian regime. The era saw significant changes in Indonesia's political landscape, including democratization, decentralization, and the strengthening of civil society.",
  position: [-6.2088, 106.8456], // Coordinates of Jakarta, Indonesia
  category: "Politics",
},
{
    id: 16,
    title: "Construction of the Great Wall of China",
    description: "Construction of the Great Wall of China began as early as the 7th century BCE and continued over several centuries, serving as a series of fortifications to protect China's northern borders.",
    position: [40.6769, 117.2319], // Coordinates of the Great Wall of China (representative)
    category: "Religion",
  },

  // Example 17: Politics
  {
    id: 17,
    title: "Establishment of the People's Republic of China",
    description: "The People's Republic of China (PRC) was proclaimed by Mao Zedong on October 1, 1949, following the Chinese Communist Party's victory in the Chinese Civil War, marking the end of the Republic of China era.",
    position: [39.9042, 116.4074], // Coordinates of Beijing, China (capital)
    category: "Politics",
  },

  // Example 18: Art
  {
    id: 18,
    title: "Construction of the Terracotta Army",
    description: "The Terracotta Army, buried with the first Emperor of China, Qin Shi Huang, around 210–209 BCE, consists of thousands of life-sized clay soldiers and horses, serving as funerary art to protect the emperor in the afterlife.",
    position: [34.3840, 109.2797], // Coordinates of Xi'an, China (near Terracotta Army site)
    category: "Art",
  },

  // Example 19: Science
  {
    id: 19,
    title: "Invention of Papermaking",
    description: "Papermaking was invented in China during the Han Dynasty around 105 CE, revolutionizing communication, education, and the spread of knowledge worldwide.",
    position: [31.9686, 118.7820], // Coordinates of Nantong, China (location of the earliest known papermaking)
    category: "Science",
  },

  // Example 20: Other
  {
    id: 20,
    title: "Construction of the Forbidden City",
    description: "The Forbidden City, a UNESCO World Heritage Site, was constructed from 1406 to 1420 during the Ming Dynasty, serving as the imperial palace and political center of China for over 500 years.",
    position: [39.9163, 116.3972], // Coordinates of Beijing, China (Forbidden City location)
    category: "Other",
  },
// Example 21: Religion
{
    id: 21,
    title: "Construction of Saint Basil's Cathedral",
    description: "Saint Basil's Cathedral, located on Red Square in Moscow, Russia, was built between 1555 and 1561 by order of Ivan the Terrible to commemorate the capture of Kazan and Astrakhan.",
    position: [55.7525, 37.6231], // Coordinates of Moscow, Russia (Saint Basil's Cathedral)
    category: "Religion",
  },

  // Example 22: Politics
  {
    id: 22,
    title: "October Revolution",
    description: "The October Revolution, also known as the Bolshevik Revolution, took place in Russia in October 1917 (November in the Gregorian calendar). Led by the Bolshevik Party, it resulted in the overthrow of the Provisional Government and the establishment of Soviet rule.",
    position: [59.9343, 30.3351], // Coordinates of Saint Petersburg, Russia (formerly Petrograd)
    category: "Politics",
  },

  // Example 23: Art
  {
    id: 23,
    title: "Construction of the Winter Palace",
    description: "The Winter Palace, located in Saint Petersburg, Russia, was constructed between 1754 and 1762 as the official residence of the Russian monarchs. It now houses the State Hermitage Museum.",
    position: [59.9401, 30.3136], // Coordinates of Saint Petersburg, Russia (Winter Palace)
    category: "Art",
  },

  // Example 24: Science
  {
    id:24,
    title: "Launch of Sputnik 1",
    description: "Sputnik 1, the world's first artificial satellite, was launched by the Soviet Union on October 4, 1957, initiating the space age and the space race between the United States and the Soviet Union.",
    position: [51.8874, 59.1532], // Coordinates of Baikonur Cosmodrome, Kazakhstan (launch site)
    category: "Science",
  },

  // Example 25: Other
  {
    id: 25,
    title: "Foundation of Saint Petersburg",
    description: "Saint Petersburg, originally known as Petrograd (1914–1924) and later Leningrad (1924–1991), was founded by Tsar Peter the Great on May 27, 1703. It served as the capital of the Russian Empire for over two centuries.",
    position: [59.9343, 30.3351], // Coordinates of Saint Petersburg, Russia
    category: "Other",
  },
  {
    id: 26,
    title: "Construction of Cologne Cathedral",
    description: "Cologne Cathedral, a renowned example of High Gothic architecture, began construction in 1248 and was completed in 1880. It is located in Cologne, Germany, and is a UNESCO World Heritage Site.",
    position: [50.9413, 6.9581], // Coordinates of Cologne, Germany (Cologne Cathedral)
    category: "Religion",
  },

  // Example 27: Politics
  {
    id: 27,
    title: "Treaty of Versailles",
    description: "The Treaty of Versailles was signed on June 28, 1919, in the Hall of Mirrors at the Palace of Versailles, France, officially ending World War I. Germany was forced to accept responsibility for the war and agree to various territorial and financial reparations.",
    position: [48.8047, 2.1204], // Coordinates of Versailles, France (Palace of Versailles)
    category: "Politics",
  },

  // Example 28: Art
  {
    id: 28,
    title: "Bauhaus Movement",
    description: "The Bauhaus movement, founded by architect Walter Gropius in 1919 in Weimar, Germany, revolutionized modern design, architecture, and art education. It emphasized the combination of crafts and fine arts and the integration of art into everyday life.",
    position: [50.9795, 11.3235], // Coordinates of Weimar, Germany (location of Bauhaus School)
    category: "Art",
  },

  // Example 29: Science
  {
    id: 29,
    title: "Discovery of X-Rays",
    description: "German physicist Wilhelm Conrad Röntgen discovered X-rays on November 8, 1895, while experimenting with cathode rays. His discovery revolutionized medical diagnosis and earned him the first Nobel Prize in Physics in 1901.",
    position: [50.1109, 8.6821], // Coordinates of Frankfurt, Germany (Röntgen's birthplace)
    category: "Science",
  },

  // Example 30: Other
  {
    id: 30,
    title: "Fall of the Berlin Wall",
    description: "The Berlin Wall, erected by East Germany in 1961 to prevent East Berliners from fleeing to West Berlin, fell on November 9, 1989, marking the symbolic end of the Cold War division in Germany.",
    position: [52.5200, 13.4050], // Coordinates of Berlin, Germany (site of the Berlin Wall)
    category: "Other",
  },
{
    id: 31,
    title: "French Revolution",
    description: "The French Revolution, which began in 1789, marked a period of profound social and political upheaval in France. It led to the abolition of the monarchy, the establishment of a republic, and significant changes in French society, politics, and culture.",
    position: [48.8566, 2.3522], // Coordinates of Paris, France
    category: "Politics",
  },

  // Example 32: Politics
  {
    id: 32,
    title: "French Revolution",
    description: "The French Revolution, a period of radical social and political upheaval in France from 1789 to 1799, marked the end of the monarchy and the rise of republican government. It was characterized by the storming of the Bastille, the Reign of Terror, and the rise of Napoleon Bonaparte.",
    position: [48.8566, 2.3522], // Coordinates of Paris, France
    category: "Politics",
  },

  // Example 33: Art
  {
    id: 33,
    title: "Impressionist Movement",
    description: "The Impressionist movement, led by artists such as Claude Monet, Pierre-Auguste Renoir, and Edgar Degas, emerged in France in the late 19th century. It emphasized capturing the transient effects of light and atmosphere through plein air painting and loose brushwork.",
    position: [48.8566, 2.3522], // Coordinates of Paris, France
    category: "Art",
  },

  // Example 34: Science
  {
    id: 34,
    title: "Declaration of Arbroath",
    description: "The Declaration of Arbroath, signed on April 6, 1320, asserted Scotland's independence from England and affirmed the right of the Scottish people to choose their king. It played a significant role in shaping Scotland's national identity and legal framework.",
    position: [56.5564, -2.5831], // Coordinates of Arbroath Abbey, Scotland
    category: "Independence",
  },

  // Example 35: Other
  {
    id: 35,
    title: "1992 Summer Olympics",
    description: "Barcelona hosted the 1992 Summer Olympics from July 25 to August 9, marking the first time the Olympics were held in Spain. The games revitalized the city, showcasing its cultural heritage and urban development to the world.",
    position: [41.3851, 2.1734], // Coordinates of Barcelona, Spain
    category: "Sports",
  },
 // Example 36: Religion
 {
    id: 36,
    title: "Formation of the National Eisteddfod",
    description: "The National Eisteddfod of Wales, a celebration of Welsh culture, literature, and music, was established in 1861. It has since become the largest cultural festival in Wales, attracting thousands of participants and visitors to Cardiff and other Welsh cities.",
    position: [51.4816, -3.1791], // Coordinates of Cardiff, Wales
    category: "Culture"},

  // Example 37: Politics
  {
    id: 37,
    title: "Easter Rising",
    description: "The Easter Rising, a rebellion against British rule, began on April 24, 1916, when Irish republicans seized key locations in Dublin. Although initially suppressed, the event led to increased support for Irish independence and paved the way for the establishment of the Irish Free State.",
    position: [53.3498, -6.2603], // Coordinates of Dublin, Ireland
    category: "Rebellion",
  },

  // Example 38: Art
  {
    id: 38,
    title: "Publication of 'Hamlet'",
    description: "'Hamlet', a tragedy by William Shakespeare, was first published in 1603. It is one of Shakespeare's most famous and frequently performed plays, exploring themes of revenge, madness, and mortality.",
    position: [52.3555, -1.1743], // Coordinates of Stratford-upon-Avon, England (Shakespeare's birthplace)
    category: "Art",
  },

  // Example 39: Science
  {
    id: 39,
    title: "Discovery of Gravity",
    description: "Sir Isaac Newton formulated his law of universal gravitation, which states that every mass attracts every other mass in the universe with a force proportional to the product of their masses and inversely proportional to the square of the distance between their centers, in 1687.",
    position: [52.2297, 0.5301], // Coordinates of Cambridge, England (Newton's university)
    category: "Science",
  },

  // Example 40: Other
  {
    id: 40,
    title: "Industrial Revolution",
    description: "The Industrial Revolution, which began in Britain in the late 18th century, marked the transition to new manufacturing processes, including the mechanization of production and the adoption of steam power. It had profound socioeconomic and cultural effects and paved the way for modern industrial society.",
    position: [53.8008, -1.5491], // Coordinates of Leeds, England (representative of industrial cities)
    category: "Other",
  },
// Example 41: Religion
{
    id: 41,
    title: "Signing of the Declaration of Independence",
    description: "The Declaration of Independence, adopted by the Continental Congress on July 4, 1776, announced that the thirteen American colonies regarded themselves as independent states and no longer a part of the British Empire.",
    position: [39.9489, -75.1416], // Coordinates of Philadelphia, Pennsylvania (Independence Hall)
    category: "Religion",
  },

  // Example 42: Politics
  {
    id: 42,
    title: "Emancipation Proclamation",
    description: "The Emancipation Proclamation, issued by President Abraham Lincoln on January 1, 1863, during the American Civil War, declared that all enslaved people in Confederate territory were to be set free.",
    position: [38.8895, -77.0353], // Coordinates of Washington, D.C., United States
    category: "Politics",
  },

  // Example 43: Art
  {
    id: 43,
    title: "Publication of 'The Great Gatsby'",
    description: "'The Great Gatsby', a novel by F. Scott Fitzgerald, was published in 1925. It is considered a masterpiece of American literature and explores themes of decadence, idealism, and the American Dream during the Roaring Twenties.",
    position: [40.7128, -74.0060], // Coordinates of New York City, New York (setting of the novel)
    category: "Art",
  },

  // Example 44: Science
  {
    id: 44,
    title: "Moon Landing",
    description: "On July 20, 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to land and walk on the Moon, while Michael Collins orbited above in the command module.",
    position: [29.5513, -95.0934], // Coordinates of Houston, Texas (Johnson Space Center)
    category: "Science",
  },

  // Example 45: Other
  {
    id: 45,
    title: "Ratification of the Constitution",
    description: "The United States Constitution, drafted in 1787 and ratified by the states in 1788, established the framework for the federal government and remains the supreme law of the United States.",
    position: [39.9526, -75.1652], // Coordinates of Philadelphia, Pennsylvania (Independence Hall)
    category: "Other",
  },
// Example 46: Religion
{
    id: 46,
    title: "First Nations Arrival",
    description: "The arrival of Indigenous peoples, often referred to as First Nations, in Canada dates back thousands of years. They established diverse cultures, languages, and societies across the land.",
    position: [56.1304, -106.3468], // Coordinates of Canada (representative)
    category: "Religion",
  },

  // Example 47: Politics
  {
    id: 47,
    title: "Confederation of Canada",
    description: "The Confederation of Canada, also known as the birth of Canada, occurred on July 1, 1867, when the British North America Act created the Dominion of Canada, uniting the provinces of Ontario, Quebec, New Brunswick, and Nova Scotia.",
    position: [45.4215, -75.6919], // Coordinates of Ottawa, Ontario (Parliament Hill)
    category: "Politics",
  },

  // Example 48: Art
  {
    id: 48,
    title: "Group of Seven",
    description: "The Group of Seven, a collective of Canadian landscape painters, formed in 1920 and included artists such as Lawren Harris, Emily Carr, and Tom Thomson. They played a crucial role in the development of a distinctly Canadian art movement.",
    position: [43.6532, -79.3832], // Coordinates of Toronto, Ontario (Art Gallery of Ontario)
    category: "Art",
  },

  // Example 49: Science
  {
    id: 49,
    title: "Discovery of Insulin",
    description: "Canadian scientists Frederick Banting, Charles Best, and their team discovered insulin in 1921 at the University of Toronto. Their breakthrough revolutionized the treatment of diabetes and saved countless lives.",
    position: [43.6629, -79.3957], // Coordinates of Toronto, Ontario (University of Toronto)
    category: "Science",
  },

  // Example 50: Other
  {
    id: 50,
    title: "Charter of Rights and Freedoms",
    description: "The Canadian Charter of Rights and Freedoms, enacted as part of the Constitution Act, 1982, guarantees fundamental rights and freedoms to all Canadians, including freedom of expression, equality rights, and minority language rights.",
    position: [45.4215, -75.6919], // Coordinates of Ottawa, Ontario (Parliament Hill)
    category: "Other",
  },
// Example 51: Art
{
    id: 51,
    title: "Establishment of the Israel Philharmonic Orchestra",
    description: "The Israel Philharmonic Orchestra, founded in 1936 as the Palestine Orchestra, has played a significant role in Israel's cultural landscape. It has performed worldwide and featured renowned conductors and soloists.",
    position: [32.0807, 34.7806], // Coordinates of Tel Aviv, Israel (Israel Philharmonic Orchestra headquarters)
    category: "Art",
  },

  // Example 52: War
  {
    id: 52,
    title: "Six-Day War",
    description: "The Six-Day War, fought between Israel and neighboring Arab states in June 1967, resulted in a decisive Israeli victory and significant territorial gains, including the capture of the Sinai Peninsula, West Bank, Gaza Strip, and Golan Heights.",
    position: [31.7683, 35.2137], // Coordinates of Jerusalem, Israel (site of significant battles)
    category: "War",
  },

  // Example 53: Religion
  {
    id: 53,
    title: "Western Wall",
    description: "The Western Wall, also known as the Wailing Wall, is a remnant of the ancient Jewish Temple's retaining wall in Jerusalem's Old City. It is one of the holiest sites in Judaism, attracting millions of visitors and worshippers annually.",
    position: [31.7767, 35.2345], // Coordinates of Jerusalem, Israel (Western Wall)
    category: "Religion",
  },
// Example 54: Art
{
    id: 54,
    title: "Construction of Himeji Castle",
    description: "Himeji Castle, also known as White Heron Castle due to its elegant white exterior, is a UNESCO World Heritage Site and one of Japan's most iconic landmarks. Construction began in 1333, with subsequent expansions and renovations, resulting in its current form as a masterpiece of Japanese castle architecture.",
    position: [34.8394, 134.6939], // Coordinates of Himeji, Japan (Himeji Castle)
    category: "Art",
  },

  // Example 55: War
  {
    id: 55,
    title: "Atomic Bombings of Hiroshima and Nagasaki",
    description: "During World War II, the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki on August 6 and 9, 1945, respectively. The bombings resulted in significant loss of life and accelerated Japan's surrender, leading to the end of the war.",
    position: [34.3955, 132.4536], // Coordinates of Hiroshima, Japan (Hiroshima Peace Memorial Park)
    category: "War",
  },

  // Example 56: Science
  {
    id: 56,
    title: "Discovery of the Sakoku Policy",
    description: "The Sakoku policy, implemented by the Tokugawa shogunate in the 17th century, restricted foreign trade and contact with the outside world, effectively isolating Japan for over two centuries. It contributed to internal stability but also hindered technological and cultural exchange.",
    position: [35.6895, 139.6917], // Coordinates of Tokyo, Japan (site of Tokugawa shogunate)
    category: "Science",
  },

  // Example 57: Religion
  {
    id: 57,
    title: "Foundation of Shintoism",
    description: "Shinto, Japan's indigenous religion, has its roots in ancient animistic beliefs and practices. It emphasizes reverence for kami (spirits or deities) and the connection between humans, nature, and the divine.",
    position: [34.6851, 135.8048], // Coordinates of Kyoto, Japan (Shinto shrines)
    category: "Religion",
  },

  // Example 58: Politics
  {
    id: 58,
    title: "Meiji Restoration",
    description: "The Meiji Restoration, beginning in 1868, marked the end of the Tokugawa shogunate and the restoration of imperial rule under Emperor Meiji. It initiated significant political, social, and economic reforms that transformed Japan into a modern nation-state.",
    position: [35.6895, 139.6917], // Coordinates of Tokyo, Japan (Imperial Palace)
    category: "Politics",
  },
 // Example 59: Art
 {
    id: 59,
    title: "Opening of the National Museum of Korea",
    description: "The National Museum of Korea, located in Seoul, South Korea, is the country's largest museum and houses a vast collection of artifacts and cultural treasures spanning Korean history and art.",
    position: [37.5231, 126.9809], // Coordinates of Seoul, South Korea (National Museum of Korea)
    category: "Art",
  },

  // Example 60: War
  {
    id: 60,
    title: "Korean War Armistice",
    description: "The Korean War Armistice Agreement was signed on July 27, 1953, effectively ending the Korean War. While a ceasefire was established, a formal peace treaty was never signed, leaving North and South Korea technically still at war.",
    position: [37.5439, 126.9717], // Coordinates of Panmunjom, South Korea (site of armistice signing)
    category: "War",
  },

  // Example 61: Science
  {
    id: 61,
    title: "Development of Samsung Electronics",
    description: "Samsung Electronics, founded in 1969 in Suwon, South Korea, has grown into one of the world's largest technology companies, producing a wide range of consumer electronics, semiconductors, and telecommunications equipment.",
    position: [37.2656, 127.0286], // Coordinates of Suwon, South Korea (Samsung Electronics headquarters)
    category: "Science",
  },

  // Example 62: Religion
  {
    id: 62,
    title: "Spread of Buddhism to Korea",
    description: "Buddhism was introduced to the Korean Peninsula in the 4th century CE and became one of the major religions in Korea, influencing culture, art, and society. Many ancient Buddhist temples and artifacts still exist throughout the country.",
    position: [35.8428, 128.5693], // Coordinates of Gyeongju, South Korea (Bulguksa Temple)
    category: "Religion",
  },

  // Example 63: Politics
  {
    id: 63,
    title: "Establishment of the Republic of Korea",
    description: "The Republic of Korea, commonly known as South Korea, was officially established on August 15, 1948, following the end of Japanese colonial rule. It is a democratic republic with a presidential system of government.",
    position: [37.5665, 126.9780], // Coordinates of Seoul, South Korea (capital)
    category: "Politics",
  },
  // Example 64: Art
  {
    id: 64,
    title: "Grand Mass Gymnastics and Artistic Performance Arirang",
    description: "The Grand Mass Gymnastics and Artistic Performance Arirang is an annual event held in Pyongyang, North Korea, featuring synchronized gymnastics, dance, and music performances. It is one of the largest choreographed mass performances in the world.",
    position: [39.0387, 125.7625], // Coordinates of Pyongyang, North Korea (May Day Stadium)
    category: "Art",
  },

  // Example 65: War
  {
    id: 65,
    title: "Division of Korea",
    description: "The division of Korea into North Korea and South Korea occurred after World War II, with the Korean Peninsula divided along the 38th parallel. The division led to the Korean War in 1950, resulting in a lasting separation between the two Koreas.",
    position: [39.0392, 125.7625], // Coordinates of DMZ, North Korea (Demilitarized Zone)
    category: "War",
  },

  // Example 66: Science
  {
    id: 66,
    title: "North Korea's Nuclear Program",
    description: "North Korea's nuclear program, initiated in the 20th century, has been a source of international concern and tension. Despite international sanctions and diplomatic efforts, North Korea has continued to develop and test nuclear weapons.",
    position: [39.0392, 125.7625], // Coordinates of Pyongyang, North Korea (nuclear facilities)
    category: "Science",
  },

  // Example 67: Religion
  {
    id: 67,
    title: "Juche Ideology",
    description: "Juche, the official state ideology of North Korea, was developed by Kim Il-sung and emphasizes self-reliance, nationalism, and independence. It plays a central role in North Korean politics, culture, and society.",
    position: [39.0392, 125.7625], // Coordinates of Pyongyang, North Korea (Juche Tower)
    category: "Religion",
  },

  // Example 68: Politics
  {
    id: 68,
    title: "Establishment of the Democratic People's Republic of Korea",
    description: "The Democratic People's Republic of Korea, commonly known as North Korea, was officially established on September 9, 1948, following the division of Korea. It is a socialist state with a totalitarian regime.",
    position: [39.0392, 125.7625], // Coordinates of Pyongyang, North Korea (capital)
    category: "Politics",
  },
  // Example 69: Religion
  {
    id: 69,
    title: "Construction of the Kaaba",
    description: "The Kaaba, located in the center of the Great Mosque of Mecca (Masjid al-Haram), is a sacred structure in Islam believed to have been built by the prophet Ibrahim (Abraham) and his son Isma'il (Ishmael). It is the holiest site in Islam and the focal point of the Hajj pilgrimage.",
    position: [21.4225, 39.8262], // Coordinates of Mecca, Saudi Arabia (Great Mosque of Mecca)
    category: "Religion",
  },

  // Example 70: Politics
  {
    id: 70,
    title: "Unification of Saudi Arabia",
    description: "The unification of Saudi Arabia, led by Abdulaziz Ibn Saud (known as Ibn Saud), occurred in the early 20th century through a series of military conquests and diplomatic agreements. It resulted in the establishment of the Kingdom of Saudi Arabia in 1932.",
    position: [24.7136, 46.6753], // Coordinates of Riyadh, Saudi Arabia (capital)
    category: "Politics",
  },

  // Example 71: Other
  {
    id: 71,
    title: "Discovery of Oil",
    description: "The discovery of oil in commercial quantities in Saudi Arabia in the 1930s transformed the country's economy and geopolitical significance. It led to rapid industrialization, infrastructure development, and the rise of Saudi Arabia as a major player in the global energy market.",
    position: [25.2048, 55.2708], // Coordinates of Dhahran, Saudi Arabia (site of first oil well)
    category: "Other",
  },
  // Example 72: Politics
  {
    id: 72,
    title: "Formation of the United Arab Emirates",
    description: "The United Arab Emirates (UAE) was formed on December 2, 1971, when six emirates – Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al-Quwain, and Fujairah – came together to create a unified nation. Ras Al Khaimah joined the federation later in 1972.",
    position: [24.4539, 54.3773], // Coordinates of Abu Dhabi, UAE (capital)
    category: "Politics",
  },

  // Example 73: Art
  {
    id: 73,
    title: "Opening of the Louvre Abu Dhabi",
    description: "The Louvre Abu Dhabi, an art and civilization museum located on Saadiyat Island in Abu Dhabi, opened its doors to the public on November 11, 2017. It showcases a diverse collection of artworks from different cultures and historical periods.",
    position: [24.5218, 54.3693], // Coordinates of Abu Dhabi, UAE (Louvre Abu Dhabi)
    category: "Art",
  },

  // Example 74: Other
  {
    id: 74,
    title: "Dubai Expo 2020",
    description: "Dubai Expo 2020, originally scheduled for 2020 but postponed to 2021 due to the COVID-19 pandemic, is a World Expo hosted by Dubai in the UAE. It showcases innovations, advancements, and achievements from around the world under the theme 'Connecting Minds, Creating the Future.'",
    position: [25.2048, 55.2708], // Coordinates of Dubai, UAE (Expo 2020 site)
    category: "Other",
  },
  // Example 75: Art
  {
    id: 75,
    title: "Construction of Persepolis",
    description: "Persepolis, also known as Takht-e-Jamshid, was the ceremonial capital of the Achaemenid Empire, located near the modern city of Shiraz, Iran. Built during the reign of Darius the Great in the 6th century BCE, Persepolis is renowned for its impressive architecture, royal palaces, and monumental staircases.",
    position: [29.9358, 52.8916], // Coordinates of Persepolis, Iran
    category: "Art",
  },

  // Example 76: Religion
  {
    id: 76,
    title: "Islamic Revolution",
    description: "The Islamic Revolution of Iran, led by Ayatollah Ruhollah Khomeini, culminated in the overthrow of the Pahlavi dynasty and the establishment of an Islamic Republic in Iran in 1979. It marked a significant turning point in Iranian history, leading to profound political, social, and religious changes.",
    position: [35.6892, 51.3890], // Coordinates of Tehran, Iran (Azadi Tower)
    category: "Religion",
  },

  // Example 77: Politics
  {
    id: 77,
    title: "Hostage Crisis at the U.S. Embassy",
    description: "In 1979, Iranian revolutionaries seized the U.S. Embassy in Tehran and held 52 American diplomats and citizens hostage for 444 days. The hostage crisis strained relations between Iran and the United States and had far-reaching implications for international diplomacy.",
    position: [35.6892, 51.3890], // Coordinates of Tehran, Iran (U.S. Embassy)
    category: "Politics",
  },
  // Example 78: Art
  {
    id: 78,
    title: "Construction of the Great Pyramid of Giza",
    description: "The Great Pyramid of Giza, built around 2560 BCE, is one of the Seven Wonders of the Ancient World and the only one still largely intact.",
    position: [29.9792, 31.1342], // Coordinates of Giza, Egypt (Great Pyramid of Giza)
    category: "Art",
  },

  // Example 79: Religion
  {
    id: 79,
    title: "Founding of Islam in Egypt",
    description: "Islam was introduced to Egypt in the 7th century CE, shaping the country's culture, society, and architecture.",
    position: [30.0444, 31.2357], // Coordinates of Cairo, Egypt (Al-Azhar Mosque)
    category: "Religion",
  },

  // Example 80: Politics
  {
    id: 80,
    title: "Suez Crisis",
    description: "The Suez Crisis of 1956 saw Egypt nationalizing the Suez Canal, leading to a confrontation with Britain, France, and Israel and ultimately resulting in Egypt retaining control of the canal.",
    position: [30.0444, 31.2357], // Coordinates of Cairo, Egypt (Suez Canal)
    category: "Politics",
  },
// Example 81: Politics
{
    id: 81,
    title: "Independence from British Rule",
    description: "Nigeria gained independence from British colonial rule on October 1, 1960, becoming a sovereign nation.",
    position: [9.0820, 8.6753], // Coordinates of Abuja, Nigeria (capital)
    category: "Politics",
  },

  // Example 82: Art
  {
    id: 82,
    title: "Nollywood Emergence",
    description: "Nollywood, Nigeria's film industry, emerged in the late 20th century, becoming the second-largest film industry in the world by the number of film productions annually, surpassing Hollywood and second only to Bollywood.",
    position: [6.5244, 3.3792], // Coordinates of Lagos, Nigeria (center of Nollywood)
    category: "Art",
  },
 // Example 83: Exploration
 {
    id: 83,
    title: "Voyage of Vasco da Gama",
    description: "Vasco da Gama, a Portuguese explorer, completed the first maritime journey from Europe to India, establishing a sea route that connected Europe with the lucrative spice trade of the East.",
    position: [38.7223, -9.1393], // Coordinates of Lisbon, Portugal (launch site)
    category: "Other",
  },
// Example 84: Art
{
    id: 84,
    title: "Construction of the Alhambra",
    description: "The Alhambra, a majestic palace and fortress complex in Granada, Spain, was constructed during the Nasrid dynasty in the 14th century, showcasing exquisite Islamic architecture and serving as a symbol of Spain's rich cultural heritage.",
    position: [37.1760, -3.5889], // Coordinates of Granada, Spain (Alhambra)
    category: "Art",
  },

// Example 85: Renaissance
{
    id: 85,
    title: "Renaissance in Florence",
    description: "The Renaissance, a period of cultural rebirth and artistic innovation, flourished in Florence, Italy, during the 14th to 17th centuries, with prominent figures such as Leonardo da Vinci, Michelangelo, and Galileo Galilei shaping the era.",
    position: [43.7696, 11.2558], // Coordinates of Florence, Italy (center of the Renaissance)
    category: "History",
  },
  // Example 86: Philosophy
  {
    id: 86,
    title: "Founding of the Academy of Athens",
    description: "The Academy of Athens, founded by the philosopher Plato in the 4th century BCE, was one of the earliest institutions of higher learning in the Western world and a center for philosophical and scientific inquiry.",
    position: [37.9847, 23.7275], // Coordinates of Athens, Greece (site of the Academy)
    category: "History",
  },  
  // Example 87: War
  {
    id: 87,
    title: "Gulf War",
    description: "The Gulf War, also known as the First Gulf War, was a conflict that took place in 1990-1991, following Iraq's invasion of Kuwait. It resulted in a coalition of forces led by the United States driving Iraqi forces out of Kuwait.",
    position: [33.3152, 44.3661], // Coordinates of Baghdad, Iraq
    category: "War",
  },
// Example 88: Conflict
{
    id: 88,
    title: "Syrian Civil War",
    description: "The Syrian Civil War, which began in 2011, is a complex and ongoing conflict involving various factions and international actors. It has resulted in widespread devastation, displacement of millions, and a humanitarian crisis.",
    position: [33.5138, 36.2765], // Coordinates of Damascus, Syria
    category: "War",
  },

  // Example 89: Independence
  {
    id: 89,
    title: "Independence from European Colonization",
    description: "Somalia gained independence from European colonization in 1960, merging former British Somaliland and Italian Somaliland to form the Somali Republic.",
    position: [2.0469, 45.3182], // Coordinates of Mogadishu, Somalia
    category: "Politics",
  },
// Example 90: Politics
{
    id: 90,
    title: "Independence from British Colonial Rule",
    description: "Kenya gained independence from British colonial rule on December 12, 1963, becoming a sovereign nation.",
    position: [-1.2921, 36.8219], // Coordinates of Nairobi, Kenya
    category: "Politics",
  },
 // Example 91: Religion
 {
    id: 91,
    title: "Establishment of Christianity",
    description: "Christianity was established in Ethiopia in the 4th century CE, making it one of the earliest Christian nations in the world.",
    position: [9.1450, 40.4897], // Coordinates of Addis Ababa, Ethiopia
    category: "Religion",
  },

// Example 92: Exploration
{
    id: 92,
    title: "First European Exploration",
    description: "The first European explorer to reach Tanzania was Vasco da Gama in 1498 during his voyage to India.",
    position: [-6.3690, 34.8888], // Coordinates of Dar es Salaam, Tanzania
    category: "Other",
  },
// Example 93: Apartheid
{
    id: 93,
    title: "End of Apartheid",
    description: "Apartheid, a system of institutionalized racial segregation and discrimination, officially ended in South Africa with the election of Nelson Mandela as the country's first black president in 1994.",
    position: [-25.7460, 28.1881], // Coordinates of Pretoria, South Africa
    category: "History",
  },
 // Example 94: Politics
 {
    id: 94,
    title: "Declaration of Independence",
    description: "Venezuela declared its independence from Spanish rule on July 5, 1811, marking the beginning of the Venezuelan War of Independence.",
    position: [10.4806, -66.9036], // Coordinates of Caracas, Venezuela
    category: "Politics",
  },
// Example 95: Discovery
{
    id: 95,
    title: "Discovery of Brazil",
    description: "Brazil was officially discovered by Portuguese explorer Pedro Álvares Cabral on April 22, 1500, during a voyage to establish trade routes to India.",
    position: [-14.2350, -51.9253], // Coordinates of Brasília, Brazil
    category: "Other",
  },
// Example 96: Independence
{
    id: 96,
    title: "Declaration of Independence",
    description: "Argentina declared its independence from Spanish rule on July 9, 1816, following the Argentine War of Independence.",
    position: [-34.6037, -58.3816], // Coordinates of Buenos Aires, Argentina
    category: "Politics",
  },
// Example 97: Politics
{
    id: 97,
    title: "Pinochet Regime",
    description: "General Augusto Pinochet seized power in a military coup on September 11, 1973, leading to a dictatorship characterized by human rights abuses and political repression.",
    position: [-33.4489, -70.6693], // Coordinates of Santiago, Chile
    category: "Politics",
  },
// Example 98: Conflict
{
    id: 98,
    title: "Colombian Conflict",
    description: "The Colombian Conflict, a protracted armed conflict between government forces, paramilitary groups, and guerrillas, has resulted in significant violence, displacement, and human rights abuses since the 1960s.",
    position: [4.7110, -74.0721], // Coordinates of Bogotá, Colombia
    category: "War",
  },
// Example 99: Culture
{
    id: 99,
    title: "UNESCO World Heritage Sites",
    description: "Mexico boasts numerous UNESCO World Heritage Sites, including the historic center of Mexico City, the ancient city of Teotihuacan, the Mayan archaeological sites of Chichen Itza and Palenque, and the historic town of Guanajuato, showcasing the country's rich cultural and historical heritage.",
    position: [19.4326, -99.1332], // Coordinates of Mexico City, Mexico
    category: "Other",
  },
// Example 100: Modernization
{
    id: 100,
    title: "Meiji Restoration",
    description: "The Meiji Restoration, initiated in 1868, marked the end of the Tokugawa shogunate and the restoration of imperial rule in Japan. It led to rapid modernization, industrialization, and westernization of Japan.",
    position: [35.6895, 139.6917], // Coordinates of Tokyo, Japan
    category: "History",
  },
// Example 101: Independence
{
    id: 101,
    title: "Declaration of Independence",
    description: "The Philippines declared its independence from Spanish colonial rule on June 12, 1898, following the Philippine Revolution against Spanish rule.",
    position: [14.5995, 120.9842], // Coordinates of Manila, Philippines
    category: "Politics",
  },
 // Example 102: Independence
 {
    id: 102,
    title: "Independence Day",
    description: "Pakistan gained independence from British colonial rule on August 14, 1947, becoming a sovereign nation.",
    position: [30.3753, 69.3451], // Coordinates of Islamabad, Pakistan
    category: "Politics",
  },
// Example 103: Independence
{
    id: 103,
    title: "Independence Day",
    description: "Afghanistan gained full independence from British influence on August 19, 1919, after the Third Anglo-Afghan War.",
    position: [34.5553, 69.2075], // Coordinates of Kabul, Afghanistan
    category: "Politics",
  },
 // Example 104: Peace Prize
 {
    id: 104,
    title: "Nobel Peace Prize",
    description: "The Nobel Peace Prize, established by the Swedish inventor Alfred Nobel, has been awarded annually in Oslo, Norway, since 1901, recognizing individuals and organizations for their efforts to promote peace and resolve conflicts.",
    position: [59.9139, 10.7522], // Coordinates of Oslo, Norway
    category: "Other",
  },
  {
    id: 105,
    title: "Mongolian Revolution",
    description: "The Mongolian Revolution of 1921 led to the establishment of the Mongolian People's Republic, marking the end of centuries of Qing dynasty and Manchu rule in Mongolia. The revolution was led by the Mongolian People's Party and resulted in the country's transition to a socialist state.",
    position: [47.9212, 106.9186], // Coordinates of Ulaanbaatar, Mongolia
    category: "Politics",
  },
  {
    id: 106,
    title: "Jallianwala Bagh Massacre",
    description:
      "The Jallianwala Bagh Massacre of 1919 involved British troops firing on a large crowd of unarmed Indians in Amritsar, Punjab, significantly escalating the Indian independence movement.",
    position: [31.62, 74.8765], // Amritsar, India
    category: "Politics",
  },
  {
    id: 107,
    title: "Dandi March",
    description:
      "The Dandi March, or Salt Satyagraha, was a nonviolent protest led by Mahatma Gandhi in 1930 against the British salt tax in colonial India.",
    position: [20.9517, 72.9324], // Dandi, India
    category: "Politics",
  },
  {
    id: 108,
    title: "India's First Satellite, Aryabhata",
    description:
      "India launched its first satellite, Aryabhata, in 1975, marking a milestone in its space program.",
    position: [13.0621, 77.4748], // Bangalore, India
    category: "Science",
  },
  {
    id: 109,
    title: "Foundation of Saint Petersburg",
    description:
      "Tsar Peter the Great founded the city of Saint Petersburg in 1703, which later became the capital of the Russian Empire for more than two centuries.",
    position: [59.9343, 30.3351], // Saint Petersburg, Russia
    category: "Politics",
  },
  {
    id: 110,
    title: "Treaty of Kuchuk-Kainarji",
    description:
      "The Treaty of Kuchuk-Kainarji in 1774 concluded the Russo-Turkish War (1768–1774), marking the rise of Russia as a major European power.",
    position: [45.3333, 36.4539], // Near Kuchuk-Kainarji, Crimea
    category: "Politics",
  },
  {
    id:111,
    title: "Sputnik Launch",
    description:
      "The Soviet Union launched Sputnik 1, the world's first artificial satellite, in 1957, initiating the space age and the space race.",
    position: [45.9646, 63.3052], // Baikonur Cosmodrome, Kazakhstan
    category: "Science",
  },
  {
    id: 112,
    title: "Charles Darwin's On the Origin of Species",
    description:
      "Charles Darwin's book, published in 1859, introduced the scientific theory of evolution by natural selection.",
    position: [51.5118, -0.1445], // London, UK
    category: "Science",
  },
  {
    id: 113,
    title: "1952 Summer Olympics",
    description: "Helsinki hosted the 1952 Summer Olympics from July 19 to August 3, marking the first time the Olympics were held in Finland. The games showcased Finnish culture and sportsmanship on the global stage.",
    position: [60.1695, 24.9354], // Coordinates of Helsinki, Finland
    category: "Sports",
  },
  {
    id: 114,
    title: "Solidarity Movement",
    description: "The Solidarity Movement, led by Lech Wałęsa, emerged in Poland in the 1980s as a trade union and social movement advocating for workers' rights and political reform. It played a crucial role in the collapse of communism in Poland and the broader Eastern Bloc.",
    position: [52.2297, 21.0122], // Coordinates of Warsaw, Poland
    category: "Politics",
  },
  {
    id: 115,
    title: "Orange Revolution",
    description: "The Orange Revolution, a series of protests and political events that began in 2004, led to the annulment of fraudulent presidential elections in Ukraine and the establishment of a more democratic political system. It symbolized the aspirations of the Ukrainian people for greater transparency and accountability in government.",
    position: [50.4501, 30.5234], // Coordinates of Kyiv, Ukraine
    category: "Politics",
  },
  {
    id: 116,
    title: "Chernobyl Disaster",
    description: "The Chernobyl nuclear disaster occurred on April 26, 1986, at the Chernobyl Nuclear Power Plant in present-day Ukraine, then part of the Soviet Union. However, Belarus suffered significant consequences from the disaster, including widespread contamination and health effects due to radioactive fallout.",
    position: [53.7098, 27.9534], // Coordinates of Minsk, Belarus
    category: "Other",
  },
  {
    id: 117,
    title: "Romanian Revolution",
    description: "The Romanian Revolution of 1989 was a series of protests and violent events that led to the overthrow of the communist regime of Nicolae Ceaușescu. The revolution resulted in the execution of Ceaușescu and his wife, Elena, and marked the end of communist rule in Romania.",
    position: [44.4268, 26.1025], // Coordinates of Bucharest, Romania
    category: "Other",
  },
  {
    id: 118,
    title: "Premiere of Mozart's Requiem",
    description: "The premiere of Wolfgang Amadeus Mozart's Requiem, one of his most famous compositions, took place on December 5, 1791, at the Karlskirche in Vienna, Austria. The Requiem remains a masterpiece of classical music and is performed worldwide.",
    position: [48.2082, 16.3738], // Coordinates of Vienna, Austria
    category: "Art",
  },
  {
    id: 119,
    title: "Velvet Revolution",
    description: "The Velvet Revolution, also known as the Gentle Revolution, was a non-violent transition of power in Czechoslovakia, culminating in the overthrow of the communist regime in 1989. Led by figures like Václav Havel, the revolution brought about democratic reforms and the end of communist rule.",
    position: [50.0755, 14.4378], // Coordinates of Prague, Czech Republic
    category: "Other",
  },
  {
    id: 120,
    title: "Formation of the Republic of Turkey",
    description: "The Republic of Turkey was officially established on October 29, 1923, under the leadership of Mustafa Kemal Atatürk, following the fall of the Ottoman Empire. The establishment of the republic marked the beginning of a new era of modernization and secularization in Turkey.",
    position: [39.9334, 32.8597], // Coordinates of Ankara, Turkey
    category: "Politics",
  },
  {
    id: 121,
    title: "Algerian War of Independence",
    description: "The Algerian War of Independence, also known as the Algerian Revolution, was a protracted conflict between Algeria and France from 1954 to 1962. It resulted in Algeria gaining independence from French colonial rule on July 5, 1962, after years of struggle and sacrifice.",
    position: [36.7372, 3.0866], // Coordinates of Algiers, Algeria
    category: "Politics",
  },
  {
    id: 122,
    title: "Mali Empire's Golden Age",
    description: "The Mali Empire, one of the largest and wealthiest empires in West Africa, reached its peak during the reign of Mansa Musa in the 14th century. Known for its wealth in gold and salt trade, the Mali Empire fostered a flourishing culture and Islamic scholarship.",
    position: [12.6392, -8.0029], // Coordinates of Timbuktu, Mali
    category: "History",
  },
  {
    id: 123,
    title: "Independence from France",
    description: "Niger gained independence from French colonial rule on August 3, 1960. The country's independence marked the end of colonialism in Niger and the beginning of a new era of self-governance and nation-building.",
    position: [13.5127, 2.1126], // Coordinates of Niamey, Niger
    category: "Politics",
  },
  {
    id: 124,
    title: "Declaration of Independence",
    description: "Libya declared its independence from Italian colonial rule on December 24, 1951, becoming the Kingdom of Libya. The declaration of independence marked the end of Italian occupation and the beginning of Libya's sovereignty.",
    position: [32.8872, 13.1913], // Coordinates of Tripoli, Libya
    category: "Politics",
  },
  {
    id: 125,
    title: "Moroccan Independence",
    description: "Morocco gained independence from French and Spanish colonial rule on March 2, 1956. The achievement of independence marked the culmination of nationalist movements and efforts to end foreign domination in Morocco.",
    position: [31.7917, -7.0926], // Coordinates of Rabat, Morocco
    category: "Politics",
  },
  {
    id: 126,
    title: "Libyan Civil War",
    description: "The Libyan Civil War, which began in 2011, resulted in the overthrow of Muammar Gaddafi's regime and led to ongoing political instability and conflict in Libya. The war involved multiple factions and foreign interventions, shaping the country's modern history.",
    position: [32.8872, 13.1913], // Coordinates of Tripoli, Libya
    category: "War",
  },
  {
    id: 127,
    title: "Independence from France",
    description: "Chad gained independence from French colonial rule on August 11, 1960. The country's independence marked the end of colonialism in Chad and the beginning of a new era of self-governance and nation-building.",
    position: [15.4542, 18.7322], // Coordinates of N'Djamena, Chad
    category: "Politics",
  },
  {
    id: 128,
    title: "Independence from France",
    description: "The Central African Republic gained independence from French colonial rule on August 13, 1960. The country's independence marked the end of colonialism in the region and the beginning of a new era of self-governance and nation-building.",
    position: [6.6111, 20.9394], // Coordinates of Bangui, Central African Republic
    category: "Politics",
  },
  {
    id: 129,
    title: "Angolan War of Independence",
    description: "The Angolan War of Independence was a conflict between the Portuguese colonial authorities and Angolan nationalist movements from 1961 to 1974. It led to the independence of Angola on November 11, 1975, and the end of Portuguese colonial rule.",
    position: [-8.8383, 13.2344], // Coordinates of Luanda, Angola
    category: "Politics",
  },
  {
    id: 130,
    title: "Independence from South Africa",
    description: "Namibia gained independence from South African occupation and rule on March 21, 1990. The achievement of independence marked the end of apartheid-era control in Namibia and the beginning of a new era of self-governance and nation-building.",
    position: [-22.9576, 18.4904], // Coordinates of Windhoek, Namibia
    category: "Politics",
  },
  {
    id: 131,
    title: "Bangladesh Liberation War",
    description: "The Bangladesh Liberation War, also known as the Bangladesh War of Independence, was a conflict between East Pakistan (now Bangladesh) and West Pakistan (now Pakistan) in 1971. It resulted in the independence of Bangladesh on December 16, 1971, and the end of Pakistani rule.",
    position: [23.8103, 90.4125], // Coordinates of Dhaka, Bangladesh
    category: "War",
  },
  {
    id: 132,
    title: "End of Civil War",
    description: "The Sri Lankan Civil War, a protracted conflict between the Sri Lankan government and the separatist Liberation Tigers of Tamil Eelam (LTTE), ended on May 18, 2009, with the defeat of the LTTE. The end of the civil war brought an end to decades of violence and marked a new chapter in Sri Lanka's history.",
    position: [7.8731, 80.7718], // Coordinates of Colombo, Sri Lanka
    category: "War",
  },
  {
    id: 133,
    title: "Independence from Britain",
    description: "Myanmar (formerly Burma) gained independence from British colonial rule on January 4, 1948. The country's independence marked the end of British colonialism in Burma and the beginning of a new era of self-governance and nation-building.",
    position: [16.8496, 96.1289], // Coordinates of Yangon, Myanmar
    category: "Politics",
  },
  {
    id: 134,
    title: "Laotian Independence",
    description: "Laos gained independence from French colonial rule on July 19, 1949. The country's independence marked the end of colonialism in Laos and the beginning of a new era of self-governance and nation-building.",
    position: [19.8563, 102.4955], // Coordinates of Vientiane, Laos
    category: "Politics",
  },
  {
    id: 135,
    title: "Siamese Revolution",
    description: "The Siamese Revolution of 1932, also known as the Siamese Coup d'état, transformed Thailand (then Siam) from an absolute monarchy to a constitutional monarchy. The revolution marked a significant shift in Thai politics and paved the way for democratic reforms.",
    position: [13.7563, 100.5018], // Coordinates of Bangkok, Thailand
    category: "Politics",
  },
  {
    id: 136,
    title: "Khmer Rouge Regime",
    description: "The Khmer Rouge regime, led by Pol Pot, ruled Cambodia from 1975 to 1979 and is responsible for one of the worst genocides in history. The regime's radical policies resulted in the deaths of an estimated 1.7 to 2.2 million people through execution, forced labor, and starvation.",
    position: [11.5564, 104.9282], // Coordinates of Phnom Penh, Cambodia
    category: "Politics",
  },
  {
    id: 137,
    title: "Vietnam War",
    description: "The Vietnam War, a prolonged conflict from 1955 to 1975, was fought between North Vietnam (supported by the Soviet Union and China) and South Vietnam (supported by the United States and other anti-communist allies). The war ended with the fall of Saigon and the reunification of Vietnam under communist rule.",
    position: [21.0285, 105.8542], // Coordinates of Hanoi, Vietnam
    category: "Politics",
  },
  {
    id: 138,
    title: "Formation of Malaysia",
    description: "The Federation of Malaysia was formed on September 16, 1963, through the merger of Malaya, Singapore, Sabah (North Borneo), and Sarawak. The formation of Malaysia marked a significant milestone in the region's history and led to the establishment of a multi-ethnic federation.",
    position: [3.139, 101.6869], // Coordinates of Kuala Lumpur, Malaysia
    category: "Politics",
  },
  {
    id: 139,
    title: "Independence from Malaysia",
    description: "Singapore gained independence from Malaysia on August 9, 1965, following a period of political tensions and racial strife. The achievement of independence marked the beginning of Singapore's journey as a sovereign and independent nation-state.",
    position: [1.3521, 103.8198], // Coordinates of Singapore City, Singapore
    category: "Politics",
  },
  {
    id: 140,
    title: "Founding of Los Angeles",
    description: "Los Angeles was founded on September 4, 1781, by Spanish governor Felipe de Neve. The city has since grown to become one of the largest and most culturally diverse cities in the United States, known for its entertainment industry, diverse population, and iconic landmarks.",
    position: [34.0522, -118.2437], // Coordinates of Los Angeles, USA
    category: "History",
  },
  {
    id: 141,
    title: "Incorporation of Vancouver",
    description: "Vancouver was incorporated as a city on April 6, 1886. Since its founding, Vancouver has become a vibrant and multicultural city known for its stunning natural scenery, thriving economy, and diverse cultural attractions.",
    position: [49.2827, -123.1207], // Coordinates of Vancouver, Canada
    category: "History",
  },
  {
    id: 142,
    title: "Bolivian War of Independence",
    description: "The Bolivian War of Independence, which began in 1809 and lasted until 1825, was a series of conflicts between Spanish royalists and independence movements led by figures like Simón Bolívar. The war resulted in the establishment of the Republic of Bolivia on August 6, 1825.",
    position: [-16.2902, -63.5887], // Coordinates of Sucre, Bolivia
    category: "Politics",
  },
  {
    id: 143,
    title: "Inca Empire",
    description: "The Inca Empire, also known as Tawantinsuyu, was the largest empire in pre-Columbian America, covering much of modern-day Peru, Bolivia, Ecuador, Chile, and parts of Colombia and Argentina. The empire reached its peak in the 15th and early 16th centuries, with its capital at Cusco.",
    position: [-13.5319, -71.9675], // Coordinates of Cusco, Peru
    category: "History",
  },
  {
    id: 144,
    title: "Settlement of Norse Explorers",
    description: "Greenland was settled by Norse explorers, led by Erik the Red, in the late 10th century. The Norse settlements, known as the Eastern Settlement and the Western Settlement, thrived for several centuries before disappearing around the 15th century, likely due to factors such as climate change and contact with the Inuit.",
    position: [71.7069, -42.6043], // Coordinates of Nuuk, Greenland
    category: "History",
  },
  {
    id: 145,
    title: "Declaration of Independence",
    description: "Iceland declared its independence from Danish rule on June 17, 1944, establishing the Republic of Iceland. The declaration of independence marked the culmination of Iceland's nationalist movement and the beginning of a new era of self-governance.",
    position: [64.1265, -21.8174], // Coordinates of Reykjavik, Iceland
    category: "Politics",
  },
];

export default eventsData;