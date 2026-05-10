const GROQ_API_KEY = "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";
const YOUTUBE_API_KEY = "AIzaSyDjFjGieCcLGgF20bhAM8-oNK-6LDEBRY8";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

const syllabus = {
  CBSE: {
    "6th": {
      Mathematics: ["Knowing Our Numbers","Whole Numbers","Playing with Numbers","Basic Geometrical Ideas","Understanding Elementary Shapes","Integers","Fractions","Decimals","Data Handling","Mensuration","Algebra","Ratio and Proportion","Symmetry","Practical Geometry"],
      Science: ["Food: Where Does It Come From?","Components of Food","Fibre to Fabric","Sorting Materials into Groups","Separation of Substances","Changes Around Us","Getting to Know Plants","Body Movements","The Living Organisms","Motion and Measurement","Light, Shadows and Reflections","Electricity and Circuits","Fun with Magnets","Water","Air Around Us","Garbage In, Garbage Out"],
      "Social Science": ["What, Where, How and When?","From Hunting to Growing Food","In the Earliest Cities","What Books and Burials Tell Us","Kingdoms, Kings and an Early Republic","New Questions and Ideas","Ashoka: The Emperor Who Gave Up War","Vital Villages, Thriving Towns","Traders, Kings and Pilgrims","New Empires and Kingdoms","Buildings, Paintings and Books"],
      English: ["Who Did Patrick's Homework?","How the Dog Found Himself a New Master!","Taro's Reward","An Indian-American Woman in Space","A Different Kind of School","Who I Am","Fair Play","A Game of Chance","Desert Animals","The Banyan Tree"]
    },
    "7th": {
      Mathematics: ["Integers","Fractions and Decimals","Data Handling","Simple Equations","Lines and Angles","The Triangle and its Properties","Congruence of Triangles","Comparing Quantities","Rational Numbers","Practical Geometry","Perimeter and Area","Algebraic Expressions","Exponents and Powers","Symmetry","Visualising Solid Shapes"],
      Science: ["Nutrition in Plants","Nutrition in Animals","Fibre to Fabric","Heat","Acids, Bases and Salts","Physical and Chemical Changes","Weather, Climate and Adaptations","Winds, Storms and Cyclones","Soil","Respiration in Organisms","Transportation in Animals and Plants","Reproduction in Plants","Motion and Time","Electric Current and Its Effects","Light","Water: A Precious Resource","Forests: Our Lifeline","Wastewater Story"],
      "Social Science": ["Tracing Changes Through a Thousand Years","New Kings and Kingdoms","The Delhi Sultans","The Mughal Empire","Rulers and Buildings","Towns, Traders and Craftspersons","Tribes, Nomads and Settled Communities","Devotional Paths to the Divine","The Making of Regional Cultures","Eighteenth-Century Political Formations"],
      English: ["Three Questions","A Gift of Chappals","Gopal and the Hilsa Fish","The Ashes That Made Trees Bloom","Quality","Expert Detectives","The Invention of Vita Wonk","Fire: Friend and Foe","A Bicycle in Good Repair","The Story of Cricket"]
    },
    "8th": {
      Mathematics: ["Rational Numbers","Linear Equations in One Variable","Understanding Quadrilaterals","Practical Geometry","Data Handling","Squares and Square Roots","Cubes and Cube Roots","Comparing Quantities","Algebraic Expressions and Identities","Visualising Solid Shapes","Mensuration","Exponents and Powers","Direct and Inverse Proportions","Factorisation","Introduction to Graphs","Playing with Numbers"],
      Science: ["Crop Production and Management","Microorganisms: Friend and Foe","Synthetic Fibres and Plastics","Materials: Metals and Non-Metals","Coal and Petroleum","Combustion and Flame","Conservation of Plants and Animals","Cell Structure and Functions","Reproduction in Animals","Reaching the Age of Adolescence","Force and Pressure","Friction","Sound","Chemical Effects of Electric Current","Some Natural Phenomena","Light","Stars and the Solar System","Pollution of Air and Water"],
      "Social Science": ["How, When and Where","From Trade to Territory","Ruling the Countryside","Tribals, Dikus and the Vision of a Golden Age","When People Rebel","Weavers, Iron Smelters and Factory Owners","Civilising the Native, Educating the Nation","Women, Caste and Reform","The Making of the National Movement","India After Independence"],
      English: ["The Best Christmas Present in the World","The Tsunami","Glimpses of the Past","Bepin Choudhury's Lapse of Memory","The Summit Within","This is Jody's Fawn","A Visit to Cambridge","A Short Monsoon Diary","The Great Stone Face"]
    },
    "9th": {
      Mathematics: ["Number Systems","Polynomials","Coordinate Geometry","Linear Equations in Two Variables","Introduction to Euclid's Geometry","Lines and Angles","Triangles","Quadrilaterals","Areas of Parallelograms and Triangles","Circles","Constructions","Heron's Formula","Surface Areas and Volumes","Statistics","Probability"],
      Science: ["Matter in Our Surroundings","Is Matter Around Us Pure?","Atoms and Molecules","Structure of the Atom","The Fundamental Unit of Life","Tissues","Diversity in Living Organisms","Motion","Force and Laws of Motion","Gravitation","Work and Energy","Sound","Why Do We Fall Ill?","Natural Resources","Improvement in Food Resources"],
      "Social Science": ["The French Revolution","Socialism in Europe and the Russian Revolution","Nazism and the Rise of Hitler","Forest Society and Colonialism","Pastoralists in the Modern World","Peasants and Farmers","History and Sport","Clothing: A Social History","What is Democracy? Why Democracy?","Constitutional Design","Electoral Politics","Working of Institutions","Democratic Rights"],
      English: ["The Fun They Had","The Sound of Music","The Little Girl","A Truly Beautiful Mind","The Snake and the Mirror","My Childhood","Packing","Reach for the Top","The Bond of Love","Kathmandu","If I Were You"]
    },
    "10th": {
      Mathematics: ["Real Numbers","Polynomials","Pair of Linear Equations in Two Variables","Quadratic Equations","Arithmetic Progressions","Triangles","Coordinate Geometry","Introduction to Trigonometry","Some Applications of Trigonometry","Circles","Constructions","Areas Related to Circles","Surface Areas and Volumes","Statistics","Probability"],
      Science: ["Chemical Reactions and Equations","Acids, Bases and Salts","Metals and Non-metals","Carbon and its Compounds","Periodic Classification of Elements","Life Processes","Control and Coordination","How do Organisms Reproduce?","Heredity and Evolution","Light Reflection and Refraction","Human Eye and Colourful World","Electricity","Magnetic Effects of Electric Current","Sources of Energy","Our Environment","Management of Natural Resources"],
      "Social Science": ["The Rise of Nationalism in Europe","Nationalism in India","The Making of a Global World","The Age of Industrialisation","Print Culture and the Modern World","Resources and Development","Forest and Wildlife Resources","Water Resources","Agriculture","Minerals and Energy Resources","Manufacturing Industries","Lifelines of National Economy","Power Sharing","Federalism","Democracy and Diversity","Gender, Religion and Caste","Popular Struggles and Movements","Political Parties","Outcomes of Democracy","Challenges to Democracy"],
      English: ["A Letter to God","Nelson Mandela: Long Walk to Freedom","Two Stories about Flying","From the Diary of Anne Frank","Glimpses of India","Mijbil the Otter","Madam Rides the Bus","The Sermon at Benares","The Proposal","A Triumph of Surgery","The Thief's Story","The Midnight Visitor","A Question of Trust","Footprints without Feet","The Making of a Scientist","The Necklace","The Hack Driver","Bholi","The Book That Saved the Earth"]
    },
    "11th": {
      Science: {
        Physics: ["Physical World","Units and Measurements","Motion in a Straight Line","Motion in a Plane","Laws of Motion","Work, Energy and Power","Systems of Particles and Rotational Motion","Gravitation","Mechanical Properties of Solids","Mechanical Properties of Fluids","Thermal Properties of Matter","Thermodynamics","Kinetic Theory","Oscillations","Waves"],
        Chemistry: ["Some Basic Concepts of Chemistry","Structure of Atom","Classification of Elements and Periodicity","Chemical Bonding and Molecular Structure","States of Matter","Thermodynamics","Equilibrium","Redox Reactions","Hydrogen","The s-Block Elements","The p-Block Elements","Organic Chemistry: Basic Principles","Hydrocarbons","Environmental Chemistry"],
        Mathematics: ["Sets","Relations and Functions","Trigonometric Functions","Principle of Mathematical Induction","Complex Numbers and Quadratic Equations","Linear Inequalities","Permutations and Combinations","Binomial Theorem","Sequences and Series","Straight Lines","Conic Sections","Introduction to 3D Geometry","Limits and Derivatives","Mathematical Reasoning","Statistics","Probability"],
        Biology: ["The Living World","Biological Classification","Plant Kingdom","Animal Kingdom","Morphology of Flowering Plants","Anatomy of Flowering Plants","Structural Organisation in Animals","Cell: The Unit of Life","Biomolecules","Cell Cycle and Cell Division","Transport in Plants","Mineral Nutrition","Photosynthesis","Respiration in Plants","Plant Growth and Development","Digestion and Absorption","Breathing and Exchange of Gases","Body Fluids and Circulation","Excretory Products","Locomotion and Movement","Neural Control and Coordination","Chemical Coordination and Integration"]
      },
      Commerce: {
        Accountancy: ["Introduction to Accounting","Theory Base of Accounting","Recording of Transactions I","Recording of Transactions II","Bank Reconciliation Statement","Trial Balance and Rectification of Errors","Depreciation, Provisions and Reserves","Bills of Exchange","Financial Statements I","Financial Statements II","Accounts from Incomplete Records","Applications of Computers in Accounting"],
        "Business Studies": ["Nature and Purpose of Business","Forms of Business Organisation","Private, Public and Global Enterprises","Business Services","Emerging Modes of Business","Social Responsibilities of Business","Formation of a Company","Sources of Business Finance","Small Business","Internal Trade","International Business"],
        Economics: ["Indian Economy on the Eve of Independence","Indian Economy 1950-1990","Liberalisation, Privatisation and Globalisation","Poverty","Human Capital Formation","Rural Development","Employment: Growth, Informalisation","Infrastructure","Environment and Sustainable Development","Comparative Development Experiences"],
        Mathematics: ["Sets","Relations and Functions","Trigonometric Functions","Principle of Mathematical Induction","Complex Numbers and Quadratic Equations","Linear Inequalities","Permutations and Combinations","Binomial Theorem","Sequences and Series","Straight Lines","Conic Sections","Introduction to 3D Geometry","Limits and Derivatives","Mathematical Reasoning","Statistics","Probability"]
      },
      Arts: {
        History: ["From the Beginning of Time","Early Cities","An Empire Across Three Continents","The Central Islamic Lands","Nomadic Empires","The Three Orders","Changing Cultural Traditions","Confrontation of Cultures","The Industrial Revolution","Displacing Indigenous Peoples","Paths to Modernisation"],
        "Political Science": ["Political Theory: An Introduction","Freedom","Equality","Social Justice","Rights","Citizenship","Nationalism","Secularism","Peace","Development"],
        Geography: ["Geography as a Discipline","The Origin and Evolution of the Earth","Interior of the Earth","Distribution of Oceans and Continents","Minerals and Rocks","Geomorphic Processes","Landforms and their Evolution","Composition and Structure of Atmosphere","Solar Radiation, Heat Balance","Atmospheric Circulation","Water in the Atmosphere","World Climate and Climate Change","Water (Oceans)","Movements of Ocean Water","Life on the Earth","Biodiversity and Conservation"],
        Economics: ["Indian Economy on the Eve of Independence","Indian Economy 1950-1990","Liberalisation, Privatisation and Globalisation","Poverty","Human Capital Formation","Rural Development","Employment: Growth, Informalisation","Infrastructure","Environment and Sustainable Development","Comparative Development Experiences"]
      }
    },
    "12th": {
      Science: {
        Physics: ["Electric Charges and Fields","Electrostatic Potential and Capacitance","Current Electricity","Moving Charges and Magnetism","Magnetism and Matter","Electromagnetic Induction","Alternating Current","Electromagnetic Waves","Ray Optics and Optical Instruments","Wave Optics","Dual Nature of Radiation and Matter","Atoms","Nuclei","Semiconductor Electronics","Communication Systems"],
        Chemistry: ["The Solid State","Solutions","Electrochemistry","Chemical Kinetics","Surface Chemistry","General Principles of Isolation of Elements","The p-Block Elements","The d and f Block Elements","Coordination Compounds","Haloalkanes and Haloarenes","Alcohols, Phenols and Ethers","Aldehydes, Ketones and Carboxylic Acids","Amines","Biomolecules","Polymers","Chemistry in Everyday Life"],
        Mathematics: ["Relations and Functions","Inverse Trigonometric Functions","Matrices","Determinants","Continuity and Differentiability","Application of Derivatives","Integrals","Application of Integrals","Differential Equations","Vector Algebra","Three Dimensional Geometry","Linear Programming","Probability"],
        Biology: ["Reproduction in Organisms","Sexual Reproduction in Flowering Plants","Human Reproduction","Reproductive Health","Principles of Inheritance and Variation","Molecular Basis of Inheritance","Evolution","Human Health and Disease","Strategies for Enhancement in Food Production","Microbes in Human Welfare","Biotechnology: Principles and Processes","Biotechnology and its Applications","Organisms and Populations","Ecosystem","Biodiversity and Conservation","Environmental Issues"]
      },
      Commerce: {
        Accountancy: ["Accounting for Partnership: Basic Concepts","Reconstitution of Partnership","Reconstitution: Retirement/Death","Dissolution of Partnership Firm","Accounting for Share Capital","Issue and Redemption of Debentures","Financial Statements of a Company","Analysis of Financial Statements","Accounting Ratios","Cash Flow Statement"],
        "Business Studies": ["Nature and Significance of Management","Principles of Management","Business Environment","Planning","Organising","Staffing","Directing","Controlling","Financial Management","Financial Markets","Marketing Management","Consumer Protection","Entrepreneurship Development"],
        Economics: ["Introduction to Macroeconomics","National Income Accounting","Money and Banking","Determination of Income and Employment","Government Budget and the Economy","Open Economy Macroeconomics","Introduction to Microeconomics","Theory of Consumer Behaviour","Production and Costs","The Theory of the Firm under Perfect Competition","Market Equilibrium","Non-competitive Markets"],
        Mathematics: ["Relations and Functions","Inverse Trigonometric Functions","Matrices","Determinants","Continuity and Differentiability","Application of Derivatives","Integrals","Application of Integrals","Differential Equations","Vector Algebra","Three Dimensional Geometry","Linear Programming","Probability"]
      },
      Arts: {
        History: ["Bricks, Beads and Bones","Kings, Farmers and Towns","Kinship, Caste and Class","Thinkers, Beliefs and Buildings","Through the Eyes of Travellers","Bhakti-Sufi Traditions","An Imperial Capital: Vijayanagara","Peasants, Zamindars and the State","Kings and Chronicles","Colonialism and the Countryside","Rebels and the Raj","Colonial Cities","Mahatma Gandhi and the Nationalist Movement","Understanding Partition","Framing the Constitution"],
        "Political Science": ["The Cold War Era","The End of Bipolarity","US Hegemony in World Politics","Alternative Centres of Power","Contemporary South Asia","International Organisations","Security in the Contemporary World","Environment and Natural Resources","Globalisation","Challenges of Nation Building","Era of One-Party Dominance","Politics of Planned Development","India's External Relations","Challenges to the Congress System","Crisis of the Constitutional Order","Rise of Popular Movements","Regional Aspirations","Recent Developments in Indian Politics"],
        Geography: ["Human Geography: Nature and Scope","The World Population","Population Composition","Human Development","Primary Activities","Secondary Activities","Tertiary and Quaternary Activities","Transport and Communication","International Trade","Human Settlements","Population Distribution, Density, Growth","Migration: Types, Causes and Consequences","Land Resources and Agriculture","Water Resources","Mineral and Energy Resources","Manufacturing Industries","Planning and Sustainable Development"],
        Economics: ["Introduction to Macroeconomics","National Income Accounting","Money and Banking","Determination of Income and Employment","Government Budget and the Economy","Open Economy Macroeconomics","Introduction to Microeconomics","Theory of Consumer Behaviour","Production and Costs","The Theory of the Firm under Perfect Competition","Market Equilibrium","Non-competitive Markets"]
      }
    }
  },
  ICSE: {
    "6th": {
      Mathematics: ["Number System","Fractions","Decimals","Ratio and Proportion","Percentage","Unitary Method","Profit and Loss","Simple Interest","Algebra","Geometry","Mensuration","Data Handling"],
      Science: ["Matter","Physical and Chemical Changes","Elements, Compounds and Mixtures","Living World","Cells","Human Body","Plants","Environment","Natural Disasters"],
      History: ["Ancient Civilizations","Indus Valley Civilisation","Vedic Age","Mauryan Empire","Gupta Empire"],
      Geography: ["Earth and Universe","Landforms","Climate","Natural Vegetation","Human Resources"],
      English: ["Reading Comprehension","Grammar","Writing Skills","Literature"]
    },
    "7th": {
      Mathematics: ["Number System","Fractions and Decimals","Exponents","Ratio and Proportion","Percentage","Profit Loss Discount","Simple Interest","Algebra","Linear Equations","Geometry","Congruence","Mensuration","Data Handling","Probability"],
      Science: ["Matter and its Composition","Physical and Chemical Changes","Elements and Compounds","Heat","Light","Sound","Electricity","Magnetism","Living World","Nutrition","Respiration","Transportation","Excretion","Nervous System","Reproduction","Ecosystem"],
      History: ["Medieval India","Delhi Sultanate","Vijayanagara Empire","Mughal Empire","Bhakti and Sufi Movements"],
      Geography: ["Environment","Land","Water","Climate","Natural Vegetation","Human Geography"],
      English: ["Reading Comprehension","Grammar","Writing Skills","Literature"]
    },
    "8th": {
      Mathematics: ["Rational Numbers","Exponents","Squares and Square Roots","Cubes and Cube Roots","Playing with Numbers","Sets","Ratio and Proportion","Percentage","Profit Loss Discount","Compound Interest","Algebra","Linear Equations","Geometry","Mensuration","Data Handling","Probability"],
      Science: ["Matter","Synthetic Fibres and Plastics","Metals and Non-metals","Coal and Petroleum","Combustion","Cell","Microorganisms","Conservation","Crop Production","Reproduction","Force and Pressure","Friction","Light","Sound","Electricity","Chemical Effects","Natural Phenomena"],
      History: ["Modern India","European Powers","British Rule","Social Reforms","Indian National Movement"],
      Geography: ["Resources","Land Resources","Forest Resources","Water Resources","Mineral Resources","Agriculture","Industries","Transport and Communication"],
      English: ["Reading Comprehension","Grammar","Writing Skills","Literature"]
    },
    "9th": {
      Mathematics: ["Pure Arithmetic","Commercial Mathematics","Algebra","Geometry","Statistics"],
      Physics: ["Measurements and Experimentation","Motion in One Dimension","Laws of Motion","Fluids","Heat and Energy","Light","Sound","Electricity and Magnetism"],
      Chemistry: ["The Language of Chemistry","Chemical Changes and Reactions","Water","Atomic Structure and Chemical Bonding","The Periodic Table","Study of the First Element Hydrogen","Study of Gas Laws"],
      Biology: ["Basic Biology","Plant Physiology","Diversity in Living Organisms","Economic Importance of Plants","Human Anatomy and Physiology","Health and Hygiene","Waste Generation and Management"],
      History: ["The Harappa Civilisation","The Vedic Period","Jainism and Buddhism","The Mauryan Empire","The Sangam Age","The Age of the Guptas","Medieval India"],
      Geography: ["Our World","Lithosphere","Hydrosphere","Atmosphere","Natural Regions"],
      English: ["Reading Comprehension","Grammar","Writing Skills","Literature","Poetry"]
    },
    "10th": {
      Mathematics: ["Commercial Mathematics","Algebra","Geometry","Mensuration","Trigonometry","Statistics","Probability"],
      Physics: ["Force","Work, Energy and Power","Machines","Refraction of Light at Plane Surfaces","Refraction Through a Lens","Spectrum","Sound","Electricity","Magnetic Effect of Current","Household Circuits"],
      Chemistry: ["Periodic Table","Chemical Bonding","Study of Acids, Bases and Salts","Analytical Chemistry","Mole Concept","Electrolysis","Metallurgy","Study of Compounds","Organic Chemistry"],
      Biology: ["Cell Division","Genetics","Absorption by Roots","Transpiration","Photosynthesis","Chemical Coordination in Plants","The Circulatory System","The Excretory System","The Nervous System","The Endocrine System","The Reproductive System","Population"],
      History: ["The Rise of Nationalism in Europe","The Rise of Nationalism in India","Industrialisation","Nationalism in Indo-China","The Age of Imperialism","World War I","Inter-War Years","World War II","The United Nations","Contemporary World"],
      Geography: ["Map Work","Natural Regions of the World","Regional Study South and South East Asia","Regional Study Africa","Regional Study North America","Regional Study Europe"],
      English: ["Reading Comprehension","Grammar","Writing Skills","Literature","Poetry"]
    },
    "11th": {
      Science: {
        Physics: ["Physical World and Measurement","Kinematics","Laws of Motion","Work Energy Power","Motion of System of Particles","Gravitation","Properties of Bulk Matter","Thermodynamics","Behaviour of Perfect Gas","Oscillations and Waves"],
        Chemistry: ["Basic Concepts of Chemistry","Structure of Atom","Classification of Elements","Chemical Bonding","States of Matter","Thermodynamics","Equilibrium","Redox Reactions","Hydrogen","s-Block Elements","p-Block Elements","Organic Chemistry Basics","Hydrocarbons","Environmental Chemistry"],
        Mathematics: ["Sets","Relations and Functions","Trigonometry","Algebra","Coordinate Geometry","Calculus","Statistics","Probability"],
        Biology: ["Diversity of Living Organisms","Structural Organisation","Cell Biology","Plant Physiology","Human Physiology"]
      },
      Commerce: {
        Accountancy: ["Introduction to Accounting","Recording of Transactions","Bank Reconciliation","Trial Balance","Financial Statements","Partnership Accounts"],
        "Business Studies": ["Business Environment","Forms of Business","Sources of Finance","Internal Trade","International Business"],
        Economics: ["Introduction to Economics","Theory of Consumer Behaviour","Production and Costs","Market Structures","National Income","Money and Banking"],
        Mathematics: ["Sets","Relations and Functions","Trigonometry","Algebra","Coordinate Geometry","Calculus","Statistics","Probability"]
      },
      Arts: {
        History: ["Ancient Civilisations","Medieval World","Early Modern Period","Modern Era","Indian History"],
        "Political Science": ["Political Theory","Indian Constitution","Government","Democracy","International Relations"],
        Geography: ["Physical Geography","Human Geography","Regional Geography","Environmental Geography"],
        Economics: ["Introduction to Economics","Theory of Consumer Behaviour","Production and Costs","Market Structures","National Income","Money and Banking"]
      }
    },
    "12th": {
      Science: {
        Physics: ["Electrostatics","Current Electricity","Magnetic Effects","Electromagnetic Induction","Alternating Current","Electromagnetic Waves","Optics","Dual Nature of Matter","Atoms and Nuclei","Electronic Devices","Communication Systems"],
        Chemistry: ["Solid State","Solutions","Electrochemistry","Chemical Kinetics","Surface Chemistry","Isolation of Elements","p-Block Elements","d and f Block Elements","Coordination Compounds","Organic Compounds","Polymers","Biomolecules","Chemistry in Everyday Life"],
        Mathematics: ["Relations and Functions","Algebra","Calculus","Vectors","Linear Programming","Probability"],
        Biology: ["Reproduction","Genetics and Evolution","Biology in Human Welfare","Biotechnology","Ecology"]
      },
      Commerce: {
        Accountancy: ["Partnership Reconstitution","Company Accounts","Financial Statements Analysis","Cash Flow Statement"],
        "Business Studies": ["Management","Planning","Organising","Staffing","Directing","Controlling","Financial Management","Marketing","Consumer Protection"],
        Economics: ["Macroeconomics","National Income","Money and Banking","Fiscal Policy","International Trade","Economic Growth"],
        Mathematics: ["Relations and Functions","Algebra","Calculus","Vectors","Linear Programming","Probability"]
      },
      Arts: {
        History: ["Sources of Ancient History","Indus Valley","Vedic Culture","Buddhism and Jainism","Mauryas","Guptas","Medieval India","Mughal Period","British Period","Freedom Movement","Post Independence"],
        "Political Science": ["Indian Constitution","Political Parties","Democracy","International Relations","Foreign Policy","Global Issues"],
        Geography: ["Physical Geography","Human Geography","Economic Geography","Regional Planning","Environmental Issues"],
        Economics: ["Macroeconomics","National Income","Money and Banking","Fiscal Policy","International Trade","Economic Growth"]
      }
    }
  }
};

let currentState = { cls:'', board:'', stream:'', subject:'', chapter:'' };

function goToScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  if (id === 'screen-videos') loadVideos();
}

function onClassChange() {
  currentState.cls = document.getElementById('sel-class').value;
  const is1112 = currentState.cls === '11th' || currentState.cls === '12th';
  document.getElementById('grp-stream').style.display = is1112 ? 'block' : 'none';
  document.getElementById('grp-subject').style.display = 'none';
  document.getElementById('grp-chapter').style.display = 'none';
  currentState.stream = ''; currentState.subject = ''; currentState.chapter = '';
  if (!is1112 && currentState.board) populateSubjects();
}

function onBoardChange() {
  currentState.board = document.getElementById('sel-board').value;
  currentState.subject = ''; currentState.chapter = '';
  document.getElementById('grp-subject').style.display = 'none';
  document.getElementById('grp-chapter').style.display = 'none';
  if (currentState.cls && currentState.cls !== '11th' && currentState.cls !== '12th') populateSubjects();
}

function onStreamChange() {
  currentState.stream = document.getElementById('sel-stream').value;
  currentState.subject = ''; currentState.chapter = '';
  document.getElementById('grp-chapter').style.display = 'none';
  populateSubjects();
}

function populateSubjects() {
  if (!currentState.board || !currentState.cls) return;
  const boardData = syllabus[currentState.board]?.[currentState.cls];
  if (!boardData) return;
  let subjects = [];
  if (currentState.cls === '11th' || currentState.cls === '12th') {
    if (!currentState.stream) return;
    subjects = Object.keys(boardData[currentState.stream] || {});
  } else {
    subjects = Object.keys(boardData);
  }
  const sel = document.getElementById('sel-subject');
  sel.innerHTML = '<option value="">-- Choose Subject --</option>';
  subjects.forEach(s => {
    const o = document.createElement('option');
    o.value = s; o.textContent = s; sel.appendChild(o);
  });
  document.getElementById('grp-subject').style.display = 'block';
  document.getElementById('grp-chapter').style.display = 'none';
}

function onSubjectChange() {
  currentState.subject = document.getElementById('sel-subject').value;
  if (!currentState.subject) return;
  const boardData = syllabus[currentState.board]?.[currentState.cls];
  let chapters = [];
  if (currentState.cls === '11th' || currentState.cls === '12th') {
    chapters = boardData?.[currentState.stream]?.[currentState.subject] || [];
  } else {
    chapters = boardData?.[currentState.subject] || [];
  }
  const sel = document.getElementById('sel-chapter');
  sel.innerHTML = '<option value="">-- Choose Chapter --</option>';
  chapters.forEach(c => {
    const o = document.createElement('option');
    o.value = c; o.textContent = c; sel.appendChild(o);
  });
  document.getElementById('grp-chapter').style.display = 'block';
}

function proceedToDashboard() {
  currentState.cls     = document.getElementById('sel-class').value;
  currentState.board   = document.getElementById('sel-board').value;
  currentState.stream  = document.getElementById('sel-stream')?.value || '';
  currentState.subject = document.getElementById('sel-subject').value;
  currentState.chapter = document.getElementById('sel-chapter').value;
  if (!currentState.cls || !currentState.board || !currentState.subject || !currentState.chapter) {
    alert('Please fill all details!'); return;
  }
  document.getElementById('dash-title').textContent = `${currentState.subject} — ${currentState.chapter}`;
  document.getElementById('dash-subtitle').textContent = `Class ${currentState.cls} | ${currentState.board}${currentState.stream ? ' | '+currentState.stream : ''}`;
  goToScreen('screen-dashboard');
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

async function callGroq(prompt) {
  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048,
      temperature: 0.7
    })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Groq error: ${res.status} - ${err.error?.message || 'Unknown'}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response.';
}

async function callGroqWithImage(prompt, base64Image, mimeType) {
  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-4-scout-17b-16e-instruct',
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64Image}` } }
        ]
      }],
      max_tokens: 2048
    })
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Groq error: ${res.status} - ${err.error?.message || 'Unknown'}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response.';
}

async function solveHW() {
  const question = document.getElementById('hw-text').value.trim();
  if (!question) { alert('Please type your question!'); return; }
  document.getElementById('hw-loading').style.display = 'block';
  document.getElementById('hw-result').style.display = 'none';
  const prompt = `You are an expert teacher for Class ${currentState.cls} ${currentState.board} students.
Subject: ${currentState.subject} | Chapter: ${currentState.chapter}
Solve this homework question step by step clearly:
"${question}"
Make it easy to understand for a school student.`;
  try {
    const answer = await callGroq(prompt);
    document.getElementById('hw-answer').textContent = answer;
    document.getElementById('hw-result').style.display = 'block';
  } catch(e) {
    alert('Error: ' + e.message);
  } finally {
    document.getElementById('hw-loading').style.display = 'none';
  }
}

function previewImage(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('img-preview').innerHTML = `<img src="${e.target.result}" alt="HW"/>`;
    document.getElementById('btn-solve-photo').style.display = 'block';
  };
  reader.readAsDataURL(file);
}

async function solveHWPhoto() {
  const file = document.getElementById('hw-file').files[0];
  if (!file) return;
  document.getElementById('hw-loading').style.display = 'block';
  document.getElementById('hw-result').style.display = 'none';
  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64 = e.target.result.split(',')[1];
    const prompt = `You are an expert teacher for Class ${currentState.cls} ${currentState.board}.
Subject: ${currentState.subject} | Chapter: ${currentState.chapter}
Look at this homework image and solve the question step by step clearly.`;
    try {
      const answer = await callGroqWithImage(prompt, base64, file.type);
      document.getElementById('hw-answer').textContent = answer;
      document.getElementById('hw-result').style.display = 'block';
    } catch(e) {
      alert('Error: ' + e.message);
    } finally {
      document.getElementById('hw-loading').style.display = 'none';
    }
  };
  reader.readAsDataURL(file);
}

async function loadVideos() {
  const { cls, board, subject, chapter } = currentState;
  document.getElementById('video-chapter-title').textContent = `${subject} — ${chapter}`;
  document.getElementById('video-loading').style.display = 'block';
  document.getElementById('video-results').style.display = 'none';
  document.getElementById('notes-title').textContent = `${chapter} Notes`;

  const queries = [
    `${chapter} ${subject} class ${cls} ${board} Physics Wallah`,
    `${chapter} ${subject} class ${cls} Khan Academy`,
    `${chapter} ${subject} class ${cls} Vedantu`,
    `${chapter} ${subject} class ${cls} Magnet Brains`,
    `${chapter} ${subject} class ${cls} Next Toppers`,
  ];

  const preferredNames = ['Physics Wallah','PW','Khan Academy','Vedantu','Unacademy','Magnet Brains','BYJU','Next Toppers','Toppers'];

  try {
    let allItems = [];
    for (const q of queries) {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${encodeURIComponent(q)}&type=video&videoDuration=medium&key=${YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      if (data.items) allItems = allItems.concat(data.items);
    }

    const seen = new Set();
    const unique = allItems.filter(item => {
      if (!item.id?.videoId || seen.has(item.id.videoId)) return false;
      seen.add(item.id.videoId); return true;
    });

    unique.sort((a, b) => {
      const aMatch = preferredNames.some(c => a.snippet.channelTitle.toLowerCase().includes(c.toLowerCase()));
      const bMatch = preferredNames.some(c => b.snippet.channelTitle.toLowerCase().includes(c.toLowerCase()));
      return (bMatch ? 1 : 0) - (aMatch ? 1 : 0);
    });

    const top4 = unique.slice(0, 4);
    const list = document.getElementById('video-list');
    list.innerHTML = '';

    if (top4.length > 0) {
      top4.forEach((item, index) => {
        const vid = item.id.videoId;
        const title = item.snippet.title;
        const channel = item.snippet.channelTitle;
        const thumb = item.snippet.thumbnails.medium?.url || `https://i.ytimg.com/vi/${vid}/mqdefault.jpg`;
        const isTop = preferredNames.some(c => channel.toLowerCase().includes(c.toLowerCase()));
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => window.open(`https://www.youtube.com/watch?v=${vid}`, '_blank');
        card.innerHTML = `
          <img class="video-thumb" src="${thumb}" alt="${title}" onerror="this.src='https://i.ytimg.com/vi/${vid}/mqdefault.jpg'"/>
          <div class="video-info">
            ${isTop ? `<span class="video-badge">⭐ Top Educator</span>` : `<span class="video-badge" style="background:rgba(255,255,255,0.08);color:#94a3b8">#${index+1}</span>`}
            <h4>${title}</h4>
            <p>📺 ${channel} &nbsp;•&nbsp; 🔗 Click to Watch</p>
          </div>`;
        list.appendChild(card);
      });
    } else {
      list.innerHTML = '<p style="color:#94a3b8;text-align:center;padding:1rem">No videos found.</p>';
    }

    document.getElementById('video-loading').style.display = 'none';
    document.getElementById('video-results').style.display = 'block';
  } catch(e) {
    document.getElementById('video-loading').style.display = 'none';
    document.getElementById('video-results').style.display = 'block';
    document.getElementById('video-list').innerHTML = `<p style="color:#e74c3c;text-align:center">Error: ${e.message}</p>`;
  }
}

async function downloadNotes() {
  const btn = document.getElementById('btn-download-notes');
  btn.disabled = true;
  btn.textContent = 'Generating...';
  document.getElementById('notes-loading').style.display = 'block';

  const existingViewer = document.getElementById('notes-viewer');
  if (existingViewer) existingViewer.remove();

  const prompt = `Create detailed, well-structured study notes for:
Class: ${currentState.cls} | Board: ${currentState.board}
Subject: ${currentState.subject} | Chapter: ${currentState.chapter}

Use this EXACT structure:
# ${currentState.chapter} - Complete Notes

## 1. Chapter Overview
## 2. Key Concepts
## 3. Important Definitions
## 4. Important Formulas
## 5. Solved Examples
## 6. Quick Revision Points
## 7. Important Exam Questions

Make it detailed, exam-focused, and student-friendly.`;

  try {
    const notes = await callGroq(prompt);
    document.getElementById('notes-loading').style.display = 'none';

    const formatted = notes
      .replace(/^# (.+)$/gm, '<h1 style="font-size:1.4rem;font-weight:800;color:#a78bfa;margin:0 0 1rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(167,139,250,0.3)">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 style="font-size:1rem;font-weight:700;color:#60a5fa;margin:1.4rem 0 0.6rem;background:rgba(96,165,250,0.1);padding:6px 14px;border-radius:20px;display:inline-block">$1</h2><div style="clear:both"></div>')
      .replace(/^### (.+)$/gm, '<h3 style="font-size:0.95rem;font-weight:700;color:#34d399;margin:1rem 0 0.4rem">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fbbf24">$1</strong>')
      .replace(/^[-•] (.+)$/gm, '<div style="display:flex;gap:8px;margin:0.3rem 0;align-items:flex-start"><span style="color:#a78bfa;flex-shrink:0;margin-top:3px">▸</span><span style="color:#cbd5e1;line-height:1.7">$1</span></div>')
      .replace(/^\d+\. (.+)$/gm, '<div style="display:flex;gap:8px;margin:0.35rem 0"><span style="color:#60a5fa;font-weight:700;flex-shrink:0">•</span><span style="color:#cbd5e1;line-height:1.7">$1</span></div>')
      .replace(/\n\n/g, '<br/>')
      .replace(/\n/g, '<br/>');

    const viewer = document.createElement('div');
    viewer.id = 'notes-viewer';
    viewer.style.cssText = 'margin-top:1.5rem;background:linear-gradient(135deg,#1a1040,#0d1b2a);border:1px solid rgba(167,139,250,0.3);border-radius:20px;overflow:hidden;animation:fadeIn 0.4s ease';

    viewer.innerHTML = `
      <div style="background:rgba(255,255,255,0.05);padding:1rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem">
        <div>
          <div style="font-size:0.75rem;color:#94a3b8;margin-bottom:2px">📄 Youthful Minds Study Notes</div>
          <div style="font-size:1rem;font-weight:700;color:#e2e8f0">${currentState.subject} — ${currentState.chapter}</div>
          <div style="font-size:0.78rem;color:#94a3b8;margin-top:2px">Class ${currentState.cls} | ${currentState.board}</div>
        </div>
        <button onclick="downloadNotesFile()" style="padding:0.55rem 1.2rem;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:white;border:none;border-radius:10px;font-size:0.85rem;font-weight:600;cursor:pointer">⬇️ Download</button>
      </div>
      <div style="padding:1.5rem 1.8rem;font-family:'Segoe UI',sans-serif;line-height:1.8;max-height:560px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(167,139,250,0.4) transparent;font-size:0.93rem">
        ${formatted}
      </div>`;

    document.getElementById('video-results').appendChild(viewer);
    viewer.scrollIntoView({ behavior:'smooth', block:'start' });

    window._notesRawText = `YOUTHFUL MINDS - Study Notes\n${'='.repeat(50)}\nSubject: ${currentState.subject}\nChapter: ${currentState.chapter}\nClass: ${currentState.cls} | Board: ${currentState.board}\n${'='.repeat(50)}\n\n${notes}`;

  } catch(e) {
    alert('Error: ' + e.message);
    document.getElementById('notes-loading').style.display = 'none';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa fa-download"></i> View Notes';
  }
}

window.downloadNotesFile = function() {
  if (!window._notesRawText) return;
  const blob = new Blob([window._notesRawText], { type:'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `YouthfulMinds_${currentState.subject}_${currentState.chapter}.txt`;
  a.click();
  URL.revokeObjectURL(url);
};

async function sendDoubt() {
  const input = document.getElementById('doubt-input');
  const question = input.value.trim();
  if (!question) return;
  addChatMsg(question, 'user');
  input.value = '';
  const thinking = addChatMsg('⏳ Thinking...', 'ai');
  const prompt = `You are a friendly AI tutor for Class ${currentState.cls} ${currentState.board} at Youthful Minds.
Subject: ${currentState.subject} | Chapter: ${currentState.chapter}
Answer this doubt clearly, simply, with examples if needed:
"${question}"`;
  try {
    const answer = await callGroq(prompt);
    thinking.querySelector('.chat-bubble').textContent = answer;
  } catch(e) {
    thinking.querySelector('.chat-bubble').textContent = '❌ Error: ' + e.message;
  }
  document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function addChatMsg(text, role) {
  const chatBox = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sel-subject').addEventListener('change', onSubjectChange);
});
