export interface Video {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
  category: string;
  date: string;
  difficulty: number; // 1-5 stars
  gear: string[];
  tips: string[];
}

export const latestVideos: Video[] = [
  {
    id: '1',
    title: 'You\'re So Ugly When You Cry',
    artist: 'The Funeral Portrait',
    thumbnail: 'https://img.youtube.com/vi/ANytShaOdGY/maxresdefault.jpg',
    youtubeId: 'ANytShaOdGY',
    description: 'This time, my niece (Samantha) introduced this rock song to me. I think it\'s pretty okay after listening, so I went ahead and made a drum score to practice. The Funeral Portrait - You\'re So Ugly When You Cry (One Take Drum Cover).',
    category: 'rock',
    date: '2024-03-01',
    difficulty: 3,
    gear: ['Roland TD-17KVX', 'Vic Firth 5A Sticks', 'Iron Cobra 900 Pedals'],
    tips: ['Focus on the half-time groove in the chorus', 'Keep the ghost notes subtle but consistent', 'Watch the timing on the crash accents']
  },
  {
    id: '2',
    title: 'Because Of You',
    artist: 'Kelly Clarkson',
    thumbnail: 'https://img.youtube.com/vi/LVlEopOnkm0/maxresdefault.jpg',
    youtubeId: 'LVlEopOnkm0',
    description: 'All of this happened because Spotify suggested this song in my 2000s throwback playlist, which inspired me to work on it. So I decided to make it happen as a one take drum cover.',
    category: 'ballad',
    date: '2024-03-05',
    difficulty: 2,
    gear: ['Roland TD-17KVX', 'Vic Firth 5A Sticks'],
    tips: ['Maintain the slow tempo without dragging', 'The crescendo in the final chorus is key', 'Soft snare hits in the verses']
  },
  {
    id: '3',
    title: '新聞報道',
    artist: 'Anodize 亞龍大',
    thumbnail: 'https://img.youtube.com/vi/8_zRsgAMcT8/maxresdefault.jpg',
    youtubeId: '8_zRsgAMcT8',
    description: 'Finally! After two years of learning the drums, I\'ve reached one of my little but important goals! Achieving this milestone for myself feels absolutely great. Drum cover of the classic Anodize track.',
    category: 'hard-rock',
    date: '2024-03-10',
    difficulty: 4,
    gear: ['Roland TD-17KVX', 'Evans Drumheads', 'Zildjian A Custom Cymbals (Triggered)'],
    tips: ['Fast double-kick sections require stamina', 'The fill before the solo is tricky, practice at half speed', 'Keep the hi-hat tight']
  },
  {
    id: '4',
    title: 'Grunge',
    artist: 'The Word Alive',
    thumbnail: 'https://img.youtube.com/vi/iOPiVau3A7g/maxresdefault.jpg',
    youtubeId: 'iOPiVau3A7g',
    description: 'My drum coach Herry Lo suggested this song to motivate me to strengthen my odd beat drumming and improve overall hand–foot coordination. At first, it seemed challenging but the result was worth it.',
    category: 'rock',
    date: '2024-03-15',
    difficulty: 4,
    gear: ['Roland TD-17KVX', 'Vic Firth sticks', 'Double Bass Pedal'],
    tips: ['Count the odd time signatures out loud initially', 'Left foot independence is crucial here', 'Emphasize the snare on 2 and 4']
  },
  {
    id: '5',
    title: 'Misery',
    artist: 'Memphis May Fire',
    thumbnail: 'https://img.youtube.com/vi/xtjmz8n87I8/maxresdefault.jpg',
    youtubeId: 'xtjmz8n87I8',
    description: 'My drum sifu (coach) Herry Lo suggested this song to motivate me to work on strengthening my hand speed and overall stability. I decided to give it a shot and it was a great learning experience.',
    category: 'hard-rock',
    date: '2024-03-20',
    difficulty: 5,
    gear: ['Roland TD-17KVX', 'Iron Cobra 900', 'High-tension Snare'],
    tips: ['Strict 16th note triplets on the kick', 'Linear fills throughout the bridge', 'Stay relaxed during high-speed sections']
  },
  {
    id: '6',
    title: 'End of You',
    artist: 'Poppy, Amy Lee & Courtney LaPlante',
    thumbnail: 'https://img.youtube.com/vi/Yi98_RXXot0/maxresdefault.jpg',
    youtubeId: 'Yi98_RXXot0',
    description: 'I recently discovered the mind-blowing collab hit "End of You" by Poppy, Amy Lee & Courtney LaPlante on YouTube and was instantly hooked! The energy and explosive drum patterns make it a blast to play.',
    category: 'rock',
    date: '2024-03-25',
    difficulty: 3,
    gear: ['Roland TD-17KVX', 'Vic Firth 5A'],
    tips: ['The syncopated intro needs to be locked with the bass', 'Use rimshots for the heavy rock feel', 'Watch the timing of the electronic elements']
  }
];
