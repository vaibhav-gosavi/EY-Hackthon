export const bn = {
  navigation: {
    dashboard: 'ড্যাশবোর্ড',
    learningPaths: 'শিক্ষার পথ',
    achievements: 'অর্জন',
    opportunities: 'সুযোগ',
    profile: 'প্রোফাইল',
    coPilot: 'সহ-পাইলট',
    quiz: 'কুইজ',
    careerInsights: 'ক্যারিয়ার অন্তর্দৃষ্টি',
  },
  welcome: {
    greeting: 'স্বাগতম, {{name}}!',
    subtitle: 'আপনার শেখার যাত্রা চলছে...',
  },
  skills: {
    title: 'দক্ষতা বিশ্লেষণ',
    level: 'স্তর {{level}}',
    list: ['জাভাস্ক্রিপ্ট', 'রিঅ্যাক্ট', 'ইউআই/ইউএক্স', 'পাইথন', 'ডেটা বিশ্লেষণ'],
  },
  achievements: {
    title: 'সাম্প্রতিক অর্জন',
    unlocked: 'আনলক করা হয়েছে!',
    items: [
      { name: 'কোড ওয়ারিয়র', description: '৫টি কোডিং চ্যালেঞ্জ সম্পন্ন করুন' },
      { name: 'শিক্ষার অগ্রগামী', description: 'আপনার প্রথম শিক্ষার পথ শেষ করুন' },
      { name: 'দলীয় খেলোয়াড়', description: '৩টি দলগত প্রকল্পে সহযোগিতা করুন' },
      { name: 'সমস্যা সমাধানকারী', description: '১০টি অ্যালগরিদমিক চ্যালেঞ্জ সমাধান করুন' },
    ],
  },
  opportunities: {
    title: 'আপনার দক্ষতার সাথে মিল থাকা ইন্টার্নশিপ এবং প্রকল্পগুলি আবিষ্কার করুন',
    items: [
      {
        title: 'ফ্রন্টএন্ড ডেভেলপার ইন্টার্ন',
        company: 'টেক সলিউশনস ইনক.',
        type: 'ইন্টার্নশিপ',
        location: 'দূরবর্তী',
        duration: '৩ মাস',
        description: 'রিঅ্যাক্ট এবং সম্পর্কিত প্রযুক্তি ব্যবহার করে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করতে আমাদের দলে যোগ দিন।',
        skills: ['রিঅ্যাক্ট', 'জাভাস্ক্রিপ্ট', 'সিএসএস'],
        action: 'এখন আবেদন করুন',
      },
      {
        title: 'ইউআই/ইউএক্স ডিজাইন প্রকল্প',
        company: 'ক্রিয়েটিভ স্টুডিও',
        type: 'প্রকল্প',
        location: 'হাইব্রিড',
        duration: '৬ সপ্তাহ',
        description: 'আমাদের আসন্ন মোবাইল অ্যাপ্লিকেশনের জন্য ব্যবহারকারী ইন্টারফেস ডিজাইন করতে সাহায্য করুন।',
        skills: ['ফিগমা', 'ব্যবহারকারী গবেষণা', 'প্রোটোটাইপিং'],
        action: 'এখন আবেদন করুন',
      },
    ],
  },
  profile: {
    title: 'আপনার অ্যাকাউন্ট এবং পছন্দগুলি পরিচালনা করুন',
    user: {
      name: 'অ্যালেক্স জনসন',
      xp: '১২০০ এক্সপি পয়েন্ট',
      email: 'alex@example.com',
      location: 'সান ফ্রান্সিসকো, সিএ',
      education: 'কম্পিউটার বিজ্ঞান, স্ট্যানফোর্ড বিশ্ববিদ্যালয়',
      careerGoals: ['ফুল স্ট্যাক ডেভেলপার', 'এআই/এমএল ইঞ্জিনিয়ার'],
    },
    actions: {
      edit: 'প্রোফাইল সম্পাদনা করুন',
      signOut: 'সাইন আউট',
    },
  },
  careerInsights: {
    title: 'আপনার পছন্দসই ক্ষেত্রে প্রবণতা, দক্ষতা এবং সুযোগগুলি অন্বেষণ করুন।',
    roles: [
      {
        name: 'ফ্রন্টএন্ড ডেভেলপার',
        trend: '⬆ ১৫% চাহিদা বৃদ্ধি',
        skills: ['রিঅ্যাক্ট', 'সিএসএস', 'জাভাস্ক্রিপ্ট'],
        companies: ['গুগল', 'ফেসবুক', 'আমাজন'],
      },
      {
        name: 'ডেটা সায়েন্টিস্ট',
        trend: '⬆ ২০% চাহিদা বৃদ্ধি',
        skills: ['পাইথন', 'মেশিন লার্নিং', 'এসকিউএল'],
        companies: ['মাইক্রোসফট', 'আইবিএম', 'টেসলা'],
      },
      {
        name: 'ক্লাউড ইঞ্জিনিয়ার',
        trend: '⬆ ১৮% চাহিদা বৃদ্ধি',
        skills: ['এডব্লিউএস', 'ডকার', 'কুবেরনেটস'],
        companies: ['এডব্লিউএস', 'আজুর', 'গুগল ক্লাউড'],
      },
      {
        name: 'ইউআই/ইউএক্স ডিজাইনার',
        trend: '⬆ ১২% চাহিদা বৃদ্ধি',
        skills: ['ফিগমা', 'অ্যাডোবি এক্সডি', 'প্রোটোটাইপিং'],
        companies: ['এয়ারবিএনবি', 'স্পোটিফাই', 'ড্রিবল'],
      },
    ],
    resources: [
      { name: 'কোর্সেরা', description: 'দক্ষতা বিকাশের জন্য শীর্ষ কোর্স' },
      { name: 'উডেমি', description: 'শিল্প-নির্দিষ্ট প্রশিক্ষণ' },
      { name: 'লিংকডইন লার্নিং', description: 'পেশাদার বৃদ্ধির জন্য' },
      { name: 'গিটহাব', description: 'সহযোগিতামূলক ওপেন-সোর্স প্রকল্প' },
    ],
  },
  language: {
    select: 'ভাষা নির্বাচন করুন',
  },
  darkMode: 'ডার্ক মোড',
};