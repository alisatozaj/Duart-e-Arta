export interface Plan {
    name: string;
    price: string;
    note: string;
    audience: string;
    featured?: boolean;
  }
  
  export const plans: Plan[] = [
    {
      name: 'Class A',
      price: '75,000',
      note: 'Kujdes i plotë bazë',
      audience: 'Për banorët që kanë nevojë për kujdesin bazë të përditshëm.',
    },
    {
      name: 'Class Excellent',
      price: '95,000',
      note: 'Zgjedhja më e kërkuar',
      audience: 'Për banorët që kanë nevojë edhe për terapi, mbështetje psikologjike dhe aktivitete.',
      featured: true,
    },
    {
      name: 'Class Premium',
      price: '140,000',
      note: 'Kujdes maksimal privat',
      audience: 'Për ata që kërkojnë banim privat dhe shërbime shtesë, si ato juridike dhe spitalore.',
    },
  ];
  
  // `from` = index of the first plan that includes the service
  // (0 = all plans, 1 = Excellent and Premium, 2 = Premium only)
  export const features = [
    { name: 'Banim / Fjetje', from: 0 },
    { name: 'Ushqimi', from: 0 },
    { name: 'Shërbimi personal', from: 0 },
    { name: 'Shërbimi mjekësor', from: 0 },
    { name: 'Shërbimi terapi', from: 1 },
    { name: 'Shërbimi psikologji', from: 1 },
    { name: 'Shërbimi argëtim', from: 1 },
    { name: 'Banim privat', from: 2 },
    { name: 'Shërbimi juridik', from: 2 },
    { name: 'Shërbimi spitalor', from: 2 },
  ];