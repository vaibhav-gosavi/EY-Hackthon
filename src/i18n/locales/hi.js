export const hi = {
  navigation: {
    dashboard: 'डैशबोर्ड',
    learningPaths: 'सीखने का रास्ता',
    achievements: 'उपलब्धियां',
    opportunities: 'अवसर',
    profile: 'प्रोफ़ाइल',
    coPilot: 'सह-पायलट',
    quiz: 'क्विज़',
    careerInsights: 'करियर अंतर्दृष्टि',
  },
  welcome: {
    greeting: 'वापसी पर स्वागत है, {{name}}!',
    subtitle: 'आपकी सीखने की यात्रा जारी है...',
  },
  skills: {
    title: 'कौशल विश्लेषण',
    level: 'स्तर {{level}}',
    list: ['जावास्क्रिप्ट', 'रिएक्ट', 'यूआई/यूएक्स', 'पायथन', 'डेटा विश्लेषण'],
  },
  achievements: {
    title: 'हाल की उपलब्धियां',
    unlocked: 'अनलॉक किया गया!',
    items: [
      { name: 'कोड योद्धा', description: '5 कोडिंग चुनौतियों को पूरा करें' },
      { name: 'शिक्षा अग्रणी', description: 'अपना पहला शिक्षण मार्ग पूरा करें' },
      { name: 'टीम खिलाड़ी', description: '3 समूह परियोजनाओं में सहयोग करें' },
      { name: 'समस्या समाधानकर्ता', description: '10 एल्गोरिथ्मिक चुनौतियों का समाधान करें' },
    ],
  },
  opportunities: {
    title: 'अपनी कौशल के साथ मेल खाने वाली इंटर्नशिप और प्रोजेक्ट खोजें',
    items: [
      {
        title: 'फ्रंटएंड डेवलपर इंटर्न',
        company: 'टेक सॉल्यूशन्स इंक.',
        type: 'इंटर्नशिप',
        location: 'दूरस्थ',
        duration: '3 महीने',
        description: 'React और संबंधित तकनीकों का उपयोग करके आधुनिक वेब एप्लिकेशन बनाने के लिए हमारी टीम में शामिल हों।',
        skills: ['React', 'JavaScript', 'CSS'],
        action: 'अभी आवेदन करें',
      },
      {
        title: 'UI/UX डिज़ाइन प्रोजेक्ट',
        company: 'क्रिएटिव स्टूडियो',
        type: 'प्रोजेक्ट',
        location: 'हाइब्रिड',
        duration: '6 सप्ताह',
        description: 'हमारे आगामी मोबाइल एप्लिकेशन के लिए उपयोगकर्ता इंटरफ़ेस डिज़ाइन में सहायता करें।',
        skills: ['Figma', 'यूज़र रिसर्च', 'प्रोटोटाइपिंग'],
        action: 'अभी आवेदन करें',
      },
    ],
  },
  profile: {
    title: 'अपने खाता और प्राथमिकताएं प्रबंधित करें',
    user: {
      name: 'एलेक्स जॉनसन',
      xp: '1200 एक्सपी पॉइंट्स',
      email: 'alex@example.com',
      location: 'सैन फ्रांसिस्को, सीए',
      education: 'कंप्यूटर विज्ञान, स्टैनफोर्ड विश्वविद्यालय',
      careerGoals: ['फुल स्टैक डेवलपर', 'एआई/एमएल इंजीनियर'],
    },
    actions: {
      edit: 'प्रोफ़ाइल संपादित करें',
      signOut: 'साइन आउट करें',
    },
  },
  careerInsights: {
    title: 'अपनी पसंद के क्षेत्र में प्रवृत्तियों, कौशल और अवसरों का अन्वेषण करें।',
    roles: [
      {
        name: 'फ्रंटएंड डेवलपर',
        trend: '⬆ 15% मांग में वृद्धि',
        skills: ['React', 'CSS', 'JavaScript'],
        companies: ['Google', 'Facebook', 'Amazon'],
      },
      {
        name: 'डेटा वैज्ञानिक',
        trend: '⬆ 20% मांग में वृद्धि',
        skills: ['Python', 'मशीन लर्निंग', 'SQL'],
        companies: ['Microsoft', 'IBM', 'Tesla'],
      },
      {
        name: 'क्लाउड इंजीनियर',
        trend: '⬆ 18% मांग में वृद्धि',
        skills: ['AWS', 'Docker', 'Kubernetes'],
        companies: ['AWS', 'Azure', 'Google Cloud'],
      },
      {
        name: 'UI/UX डिज़ाइनर',
        trend: '⬆ 12% मांग में वृद्धि',
        skills: ['Figma', 'Adobe XD', 'प्रोटोटाइपिंग'],
        companies: ['Airbnb', 'Spotify', 'Dribbble'],
      },
    ],
    resources: [
      { name: 'कौर्सेरा', description: 'कौशल विकास के लिए शीर्ष पाठ्यक्रम' },
      { name: 'उडेमी', description: 'उद्योग-विशिष्ट प्रशिक्षण' },
      { name: 'लिंक्डइन लर्निंग', description: 'पेशेवर विकास के लिए' },
      { name: 'गिटहब', description: 'सहयोगात्मक ओपन-सोर्स प्रोजेक्ट्स' },
    ],
  },
  language: {
    select: 'भाषा चुनें',
  },
  darkMode: 'डार्क मोड',
};
