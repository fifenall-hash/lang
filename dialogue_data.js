/**
 * dialogue_data.js
 * 주제별(6개) / 언어별(5개) 20개씩의 실전 여행 회화 데이터 구조
 * - 카페(cafe) 1번, 2번, 3번 예문 5개 국어 완비
 */

const TOPICS_META = [
  { id: 'airport', name: '공항', icon: '✈️', desc: '체크인, 수하물, 입국심사, 탑승구 안내' },
  { id: 'cafe', name: '카페', icon: '☕', desc: '음료/디저트 주문, 얼음·사이즈 조절, 결제' },
  { id: 'restaurant', name: '식당', icon: '🍽️', desc: '테이블 배정, 메뉴 추천, 추가 주문, 계산' },
  { id: 'hotel', name: '호텔', icon: '🏨', desc: '체크인/아웃, 조식 문의, 룸서비스, 짐 보관' },
  { id: 'pharmacy', name: '약국', icon: '💊', desc: '증상 설명, 상비약 구매, 복용법 및 주의사항' },
  { id: 'convenience', name: '편의점', icon: '🏪', desc: '간식 구매, 도시락 데우기, 교통카드 충전' }
];

const LANGUAGES_META = [
  { id: 'en', name: '영어 (English)', langCode: 'en', dir: 'ltr', sampleText: 'Hello! Have a great trip.' },
  { id: 'ja', name: '일본어 (日本語)', langCode: 'ja', dir: 'ltr', sampleText: 'こんにちは。良いご旅行を。' },
  { id: 'zh', name: '중국어 (中文)', langCode: 'zh', dir: 'ltr', sampleText: '您好！祝您旅途愉快。' },
  { id: 'vi', name: '베트남어 (Tiếng Việt)', langCode: 'vi', dir: 'ltr', sampleText: 'Xin chào! Chúc bạn có một chuyến đi vui vẻ.' },
  { id: 'ar', name: '아랍어 (العربية)', langCode: 'ar', dir: 'rtl', sampleText: 'مرحباً! أتمنى لك رحلة سعيدة.' }
];

// 상세 예문 데이터베이스
const RAW_DIALOGUES = {
  cafe: {
    // ==========================================
    // 1. 영어 (English) - 카페 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hi there! Welcome in. What can I get started for you today?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴로 준비해 드릴까요?",
            expressions: [{ phrase: "What can I get started for you?", meaning: "어떤 메뉴로 준비해 드릴까요? (카페나 식당 직원이 주문을 받을 때 자주 쓰는 표현)" }],
            vocabulary: [{ word: "welcome in", meaning: "어서 오세요" }, { word: "get started", meaning: "(주문·준비를) 시작하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! Could I get an iced Americano and a blueberry muffin, please?",
            translation: "안녕하세요! 아이스 아메리카노 한 잔이랑 블루베리 머핀 하나 주시겠어요?",
            expressions: [{ phrase: "Could I get ~, please?", meaning: "~을 주시겠어요? (가장 자연스럽고 정중한 주문 표현)" }],
            vocabulary: [{ word: "iced Americano", meaning: "아이스 아메리카노 ('ice'가 아닌 'iced'로 표기)" }, { word: "blueberry muffin", meaning: "블루베리 머핀" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing. What size would you like for the iced Americano?",
            translation: "물론이죠. 아이스 아메리카노는 어떤 사이즈로 드릴까요?",
            expressions: [{ phrase: "Sure thing.", meaning: "물론이죠, 문제없습니다." }, { phrase: "What size would you like for ~?", meaning: "~은 어떤 사이즈로 하시겠어요?" }],
            vocabulary: [{ word: "size", meaning: "크기, 컵 사이즈" }]
          },
          {
            role: "손님", side: "right",
            text: "Medium, please. Oh, and could you go light on the ice?",
            translation: "미디엄 사이즈로 주세요. 아, 그리고 얼음은 조금만 넣어 주시겠어요?",
            expressions: [{ phrase: "go light on the ice", meaning: "얼음을 적게 넣다 (얼음을 많이 달라고 할 때는 extra ice)" }],
            vocabulary: [{ word: "medium", meaning: "중간 사이즈" }, { word: "light on ~", meaning: "(양이나 재료를) 적게 넣은" }]
          },
          {
            role: "직원", side: "left",
            text: "No problem at all. Will that be for here or to go?",
            translation: "네, 문제없습니다. 매장에서 드시나요, 아니면 가져가시나요?",
            expressions: [{ phrase: "for here or to go", meaning: "매장에서 먹고 갈지 포장해 갈지 묻는 표현" }],
            vocabulary: [{ word: "no problem at all", meaning: "전혀 문제없습니다" }]
          },
          {
            role: "손님", side: "right",
            text: "For here, please.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [{ phrase: "For here, please.", meaning: "매장에서 먹고 갈게요. (포장은 'To go, please.')" }],
            vocabulary: [{ word: "for here", meaning: "매장 내 취식" }]
          },
          {
            role: "직원", side: "left",
            text: "Great, your total comes to $7.50. You can tap your card right here, and your order will be ready at the pickup counter shortly!",
            translation: "좋습니다, 총 7달러 50센트입니다. 여기에 카드를 태그해 주시면 되고, 주문하신 메뉴는 곧 픽업대에서 준비될 예정입니다!",
            expressions: [{ phrase: "Your total comes to ~", meaning: "총 결제 금액은 ~입니다" }, { phrase: "tap your card", meaning: "카드를 단말기에 찍다(태그하다)" }],
            vocabulary: [{ word: "total", meaning: "총액, 합계" }, { word: "pickup counter", meaning: "음료 수령대 (픽업대)" }, { word: "shortly", meaning: "곧, 잠시 후에" }]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Good morning! What can I make for you today?",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 만들어 드릴까요?",
            expressions: [{ phrase: "What can I make for you?", meaning: "어떤 메뉴를 만들어 드릴까요?" }],
            vocabulary: [{ word: "good morning", meaning: "좋은 아침입니다" }, { word: "make", meaning: "(음료를) 만들다, 제조하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! Can I get a medium hot vanilla latte, and could you make it decaf?",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈로 주시고, 디카페인으로 해 주실 수 있나요?",
            expressions: [{ phrase: "Could you make it decaf?", meaning: "디카페인으로 만들어 주실 수 있나요?" }],
            vocabulary: [{ word: "hot vanilla latte", meaning: "따뜻한 바닐라 라떼" }, { word: "decaf", meaning: "디카페인 (decaffeinated의 줄임말)" }]
          },
          {
            role: "직원", side: "left",
            text: "Absolutely, we can do decaf espresso. Would you like regular whole milk with that?",
            translation: "물론이죠, 디카페인 에스프레소로 가능합니다. 우유는 일반 우유로 넣어 드릴까요?",
            expressions: [{ phrase: "We can do ~", meaning: "~으로 해 드릴 수 있습니다" }],
            vocabulary: [{ word: "absolutely", meaning: "물론이죠, 당연하죠" }, { word: "regular whole milk", meaning: "일반(전지) 우유" }]
          },
          {
            role: "손님", side: "right",
            text: "Actually, could I swap the regular milk for oat milk, please?",
            translation: "아, 일반 우유 대신 오트 밀크(귀리 우유)로 변경해 주실 수 있을까요?",
            expressions: [{ phrase: "swap A for B", meaning: "A를 B로 바꾸다(교체하다)" }],
            vocabulary: [{ word: "actually", meaning: "실은, 아 참 (추가 요청할 때)" }, { word: "oat milk", meaning: "귀리 우유 (오트 밀크)" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure! Just so you know, there's an extra charge of 80 cents for oat milk. Is that okay?",
            translation: "물론입니다! 참고로 오트 밀크 변경 시 80센트의 추가 요금이 있는데 괜찮으신가요?",
            expressions: [{ phrase: "Just so you know", meaning: "참고로 말씀드리자면" }, { phrase: "extra charge of ~", meaning: "~의 추가 요금" }],
            vocabulary: [{ word: "extra", meaning: "추가의" }, { word: "charge", meaning: "요금, 비용" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, that works for me. I'll pay with Apple Pay.",
            translation: "네, 괜찮습니다. 애플 페이로 결제할게요.",
            expressions: [{ phrase: "That works for me.", meaning: "네, 저는 좋습니다 / 괜찮습니다." }, { phrase: "pay with ~", meaning: "~(결제 수단)으로 결제하다" }],
            vocabulary: [{ word: "work", meaning: "(조건·상황이) 괜찮다, 문제없다" }]
          },
          {
            role: "직원", side: "left",
            text: "All set! We'll call out your drink at the end of the bar when it's ready.",
            translation: "결제 완료되었습니다! 음료가 준비되면 바 끝쪽에서 메뉴 이름을 불러 드리겠습니다.",
            expressions: [{ phrase: "All set!", meaning: "다 됐습니다! / 완료되었습니다!" }, { phrase: "call out ~", meaning: "(이름이나 메뉴를) 크게 부르다" }],
            vocabulary: [{ word: "bar", meaning: "카페의 음료 제조 카운터" }, { word: "ready", meaning: "준비된" }]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hi! Welcome in. What can I get for you today?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴로 드릴까요?",
            expressions: [{ phrase: "What can I get for you?", meaning: "무엇을 준비해 드릴까요?" }],
            vocabulary: [{ word: "today", meaning: "오늘" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! I'm thinking of getting an iced mocha. Does it come with whipped cream on top?",
            translation: "안녕하세요! 아이스 카페모카를 마시려고 하는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [{ phrase: "I'm thinking of getting ~", meaning: "~을 주문할까 생각 중인데요" }, { phrase: "Does it come with ~?", meaning: "그 메뉴에 ~이 기본으로 포함되어 나오나요?" }],
            vocabulary: [{ word: "iced mocha", meaning: "아이스 카페모카" }, { word: "whipped cream", meaning: "휘핑크림" }, { word: "on top", meaning: "맨 위에" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, it comes with whipped cream and chocolate drizzle by default.",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 드리즐이 올라갑니다.",
            expressions: [{ phrase: "by default", meaning: "기본 설정으로, 기본적으로" }],
            vocabulary: [{ word: "chocolate drizzle", meaning: "초콜릿 드리즐 (가늘게 뿌린 소스)" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it. Could you please hold the whipped cream and do only half the syrup so it's less sweet?",
            translation: "알겠습니다. 휘핑크림은 빼 주시고, 덜 달게 시럽은 절반만 넣어 주시겠어요?",
            expressions: [{ phrase: "hold the whipped cream", meaning: "휘핑크림을 빼다 ('no whipped cream'과 동일)" }, { phrase: "do only half the syrup", meaning: "시럽을 절반만 넣다" }],
            vocabulary: [{ word: "hold", meaning: "(재료를 넣지 않고) 빼다" }, { word: "syrup", meaning: "시럽" }, { word: "less sweet", meaning: "덜 단" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing! So that's an iced mocha, half sweet, no whip. What size would you like?",
            translation: "물론이죠! 아이스 모카 당도 절반에 휘핑크림 빼고 말이죠. 사이즈는 어떻게 하시겠어요?",
            expressions: [{ phrase: "half sweet, no whip", meaning: "당도 절반, 휘핑크림 없음 (바리스타 축약 표현)" }],
            vocabulary: [{ word: "no whip", meaning: "휘핑크림 빼기" }]
          },
          {
            role: "손님", side: "right",
            text: "Large, please. And that'll be all for me, to go.",
            translation: "라지 사이즈로 주세요. 주문은 그게 전부이고, 포장해 갈게요.",
            expressions: [{ phrase: "That'll be all for me.", meaning: "제 주문은 그게 전부입니다." }],
            vocabulary: [{ word: "large", meaning: "큰 사이즈 (라지)" }, { word: "to go", meaning: "포장, 테이크아웃" }]
          },
          {
            role: "직원", side: "left",
            text: "Perfect! That'll be $5.75 whenever you're ready.",
            translation: "좋습니다! 총 5달러 75센트입니다. 편하실 때 결제해 주세요.",
            expressions: [{ phrase: "whenever you're ready", meaning: "손님이 준비되셨을 때 언제든 (결제를 재촉하지 않는 정중한 표현)" }],
            vocabulary: [{ word: "perfect", meaning: "완벽한, 좋습니다" }, { word: "whenever", meaning: "언제든지" }]
          }
        ]
      },
      {
        id: 4,
        title: "추천 디저트 및 시즌 음료 문의하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Welcome! Are you looking for anything in particular today?",
            translation: "어서 오세요! 오늘 특별히 찾으시는 메뉴가 있으신가요?",
            expressions: [{ phrase: "looking for anything in particular", meaning: "특별히 찾고 있는 것이 있다" }],
            vocabulary: [{ word: "in particular", meaning: "특별히, 특히" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! Do you have any seasonal drinks right now?",
            translation: "안녕하세요! 지금 나오는 시즌 한정 음료가 있나요?",
            expressions: [{ phrase: "Do you have any seasonal drinks?", meaning: "계절(시즌) 한정 음료가 있나요?" }],
            vocabulary: [{ word: "seasonal", meaning: "계절의, 시즌 한정의" }, { word: "right now", meaning: "지금 현재" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, our pistachio cream latte is our seasonal special and very popular.",
            translation: "네, 피스타치오 크림 라떼가 이번 시즌 스페셜 메뉴인데 인기가 아주 많습니다.",
            expressions: [{ phrase: "seasonal special", meaning: "시즌 특별(한정) 메뉴" }],
            vocabulary: [{ word: "pistachio", meaning: "피스타치오" }, { word: "popular", meaning: "인기 있는" }]
          },
          {
            role: "손님", side: "right",
            text: "That sounds delicious! What dessert goes well with it?",
            translation: "맛있겠네요! 그 음료와 잘 어울리는 디저트는 어떤 게 있나요?",
            expressions: [{ phrase: "What dessert goes well with it?", meaning: "그것과 어떤 디저트가 잘 어울리나요?" }],
            vocabulary: [{ word: "delicious", meaning: "맛있는" }, { word: "go well with ~", meaning: "~와 잘 어울리다" }]
          },
          {
            role: "직원", side: "left",
            text: "I highly recommend our lemon tart or classic tiramisu.",
            translation: "저희 매장의 레몬 타르트나 클래식 티라미수를 강력히 추천해 드립니다.",
            expressions: [{ phrase: "I highly recommend ~", meaning: "~을 강력히 추천합니다" }],
            vocabulary: [{ word: "highly", meaning: "크게, 강력히" }, { word: "classic", meaning: "정통의, 기본의" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll take the iced pistachio latte and a piece of tiramisu, please.",
            translation: "아이스 피스타치오 라떼 한 잔이랑 티라미수 한 조각 주세요.",
            expressions: [{ phrase: "I'll take ~", meaning: "~으로 할게요 (결정 후 주문할 때)" }],
            vocabulary: [{ word: "a piece of ~", meaning: "(케이크·타르트 등) 한 조각의 ~" }]
          },
          {
            role: "직원", side: "left",
            text: "Great choice! I'll get the dessert from the display case for you right away.",
            translation: "탁월한 선택이십니다! 진열장에서 바로 디저트를 꺼내 준비해 드리겠습니다.",
            expressions: [{ phrase: "Great choice!", meaning: "좋은(탁월한) 선택이십니다!" }],
            vocabulary: [{ word: "display case", meaning: "(쇼케이스) 진열장" }, { word: "right away", meaning: "즉시, 바로" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 라떼 사이즈업 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hi there! What can I get started for you?",
            translation: "안녕하세요! 어떤 메뉴로 준비해 드릴까요?",
            expressions: [{ phrase: "What can I get started for you?", meaning: "어떤 메뉴로 주문을 도와드릴까요?" }],
            vocabulary: [{ word: "get started", meaning: "(주문을) 시작하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Could I get a hot cafe latte, please?",
            translation: "따뜻한 카페라떼 한 잔 주시겠어요?",
            expressions: [{ phrase: "Could I get ~, please?", meaning: "~을 주시겠어요?" }],
            vocabulary: [{ word: "hot cafe latte", meaning: "따뜻한 카페라떼" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure! Would you like a small or a medium?",
            translation: "물론이죠! 스몰 사이즈와 미디엄 사이즈 중 어떤 것으로 드릴까요?",
            expressions: [{ phrase: "Would you like A or B?", meaning: "A와 B 중 어떤 것으로 하시겠어요?" }],
            vocabulary: [{ word: "small", meaning: "작은 사이즈 (스몰)" }, { word: "medium", meaning: "중간 사이즈 (미디엄)" }]
          },
          {
            role: "손님", side: "right",
            text: "Actually, could I upgrade the size to a large and add an extra shot of espresso?",
            translation: "아, 라지 사이즈로 사이즈업하고 에스프레소 샷을 하나 추가할 수 있을까요?",
            expressions: [{ phrase: "upgrade the size to a large", meaning: "라지 사이즈로 사이즈업하다" }, { phrase: "add an extra shot", meaning: "에스프레소 샷을 하나 추가하다" }],
            vocabulary: [{ word: "upgrade", meaning: "(크기나 등급을) 높이다" }, { word: "extra shot", meaning: "추가 샷" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! A large hot latte with an extra shot. Anything else for you?",
            translation: "그럼요! 따뜻한 라떼 라지 사이즈에 샷 추가 말씀이시죠. 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "Anything else for you?", meaning: "추가로 더 주문하실 것이 있으신가요?" }],
            vocabulary: [{ word: "of course", meaning: "물론이죠, 당연하죠" }]
          },
          {
            role: "손님", side: "right",
            text: "No, that's all. Oh, could you please make it extra hot?",
            translation: "네, 그게 전부입니다. 아, 온도를 아주 뜨겁게 해 주실 수 있나요?",
            expressions: [{ phrase: "make it extra hot", meaning: "(따뜻한 음료를) 평소보다 더 뜨겁게 만들다" }],
            vocabulary: [{ word: "extra hot", meaning: "아주 뜨겁게" }]
          },
          {
            role: "직원", side: "left",
            text: "You got it! Your total is $6.20, and you can pay right here.",
            translation: "알겠습니다! 총 6달러 20센트이며, 여기서 결제해 주시면 됩니다.",
            expressions: [{ phrase: "You got it!", meaning: "알겠습니다! / 기꺼이 해 드리겠습니다!" }],
            vocabulary: [{ word: "total", meaning: "총액" }, { word: "pay", meaning: "지불하다, 결제하다" }]
          }
        ]
      },
      {
        id: 6,
        title: "매장 와이파이 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, do you have free Wi-Fi here in the cafe?",
            translation: "실례합니다, 카페 내에서 이용할 수 있는 무료 와이파이가 있나요?",
            expressions: [{ phrase: "Do you have free Wi-Fi here?", meaning: "여기에 무료 와이파이가 있나요?" }],
            vocabulary: [{ word: "excuse me", meaning: "실례합니다" }, { word: "free Wi-Fi", meaning: "무료 와이파이" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we do! The network name is 'Cafe_Guest'.",
            translation: "네, 있습니다! 와이파이 네트워크 이름은 'Cafe_Guest'입니다.",
            expressions: [{ phrase: "The network name is ~", meaning: "와이파이(네트워크) 이름은 ~입니다" }],
            vocabulary: [{ word: "network", meaning: "네트워크, 통신망" }, { word: "guest", meaning: "손님, 방문객" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you. Does it require a password to connect?",
            translation: "감사합니다. 연결하려면 비밀번호를 입력해야 하나요?",
            expressions: [{ phrase: "Does it require a password?", meaning: "비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "require", meaning: "필요로 하다, 요구하다" }, { word: "connect", meaning: "연결하다, 접속하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, the Wi-Fi password is printed at the bottom of your receipt.",
            translation: "네, 와이파이 비밀번호는 받으신 영수증 맨 아래쪽에 인쇄되어 있습니다.",
            expressions: [{ phrase: "at the bottom of your receipt", meaning: "영수증 맨 하단에" }],
            vocabulary: [{ word: "printed", meaning: "인쇄된" }, { word: "receipt", meaning: "영수증 ('p'는 묵음)" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I threw away my receipt earlier. Could you tell me what it is?",
            translation: "아, 아까 영수증을 버렸는데 비밀번호가 뭔지 알려주실 수 있나요?",
            expressions: [{ phrase: "I threw away ~", meaning: "~을 버렸다" }, { phrase: "Could you tell me what it is?", meaning: "그것이 무엇인지 알려주실 수 있나요?" }],
            vocabulary: [{ word: "earlier", meaning: "아까, 조금 전에" }]
          },
          {
            role: "직원", side: "left",
            text: "No problem! It's 'coffee1234', all in lowercase letters.",
            translation: "문제없습니다! 모두 소문자로 'coffee1234'입니다.",
            expressions: [{ phrase: "all in lowercase letters", meaning: "전부 알파벳 소문자로" }],
            vocabulary: [{ word: "lowercase", meaning: "소문자" }, { word: "letter", meaning: "글자, 문자" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it, I'm connected now. Thanks so much!",
            translation: "알겠습니다, 이제 연결되었네요. 정말 감사합니다!",
            expressions: [{ phrase: "I'm connected now.", meaning: "이제 (와이파이에) 연결되었습니다." }],
            vocabulary: [{ word: "got it", meaning: "알겠습니다, 확인했습니다" }]
          }
        ]
      },
      {
        id: 7,
        title: "콘센트 있는 좌석 위치 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, my phone battery is almost dead. Are there any seats with power outlets?",
            translation: "실례합니다, 제 휴대폰 배터리가 거의 다 닳았는데요. 콘센트가 있는 좌석이 있나요?",
            expressions: [{ phrase: "my phone battery is almost dead", meaning: "휴대폰 배터리가 거의 다 닳았다(방전되기 직전이다)" }, { phrase: "seats with power outlets", meaning: "전기 콘센트가 있는 좌석" }],
            vocabulary: [{ word: "power outlet", meaning: "전기 콘센트 (영국에서는 주로 socket/plug point 사용)" }, { word: "almost", meaning: "거의" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! There are outlets along the wall by the window and under the long communal table.",
            translation: "네! 창가 쪽 벽면을 따라서 콘센트가 있고, 긴 다인용 테이블 아래쪽에도 있습니다.",
            expressions: [{ phrase: "along the wall by the window", meaning: "창가 쪽 벽면을 따라서" }],
            vocabulary: [{ word: "along", meaning: "~을 따라서" }, { word: "communal table", meaning: "여러 사람이 함께 앉는 긴 대형 테이블" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, great! Do you mind if I plug in my laptop and work for a bit?",
            translation: "아, 좋네요! 노트북을 꽂고 잠시 작업을 좀 해도 괜찮을까요?",
            expressions: [{ phrase: "Do you mind if I ~?", meaning: "제가 ~해도 괜찮을까요?" }, { phrase: "plug in ~", meaning: "~의 플러그를 콘센트에 꽂다" }],
            vocabulary: [{ word: "laptop", meaning: "노트북 컴퓨터" }, { word: "for a bit", meaning: "잠시 동안" }]
          },
          {
            role: "직원", side: "left",
            text: "Not at all! On weekdays, there's no time limit for laptop users.",
            translation: "전혀 문제없습니다! 평일에는 노트북 이용 손님을 위한 시간제한이 따로 없습니다.",
            expressions: [{ phrase: "Not at all!", meaning: "전혀 괜찮습니다! ('Do you mind ~?'에 대한 승낙 응답)" }, { phrase: "no time limit", meaning: "시간제한이 없다" }],
            vocabulary: [{ word: "weekday", meaning: "평일, 주중 (주말은 weekend)" }]
          },
          {
            role: "손님", side: "right",
            text: "That's wonderful. By the way, do you happen to rent out phone chargers as well?",
            translation: "정말 다행이네요. 그런데 혹시 휴대폰 충전기도 대여해 주시나요?",
            expressions: [{ phrase: "Do you happen to ~?", meaning: "혹시 ~하시나요? (부담스럽지 않게 정중히 물어볼 때)" }],
            vocabulary: [{ word: "by the way", meaning: "그나저나, 덧붙여 말하자면" }, { word: "rent out", meaning: "대여해 주다, 빌려주다" }]
          },
          {
            role: "직원", side: "left",
            text: "Sorry, we don't rent out chargers, so you'll need to use your own adapter.",
            translation: "죄송하지만 충전기 대여는 하지 않아서, 개인 어댑터를 사용해 주셔야 합니다.",
            expressions: [{ phrase: "use your own adapter", meaning: "본인의 개인 충전 어댑터를 사용하다" }],
            vocabulary: [{ word: "adapter", meaning: "충전 어댑터, 플러그" }]
          },
          {
            role: "손님", side: "right",
            text: "No worries, I have my cable and adapter in my bag. Thank you!",
            translation: "괜찮습니다, 가방에 케이블이랑 어댑터가 있거든요. 감사합니다!",
            expressions: [{ phrase: "No worries", meaning: "괜찮습니다, 신경 쓰지 마세요" }],
            vocabulary: [{ word: "cable", meaning: "충전 케이블, 선" }]
          }
        ]
      },
      {
        id: 8,
        title: "주문한 음료가 잘못 나왔을 때 교환 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "Order number 42! One hot cafe latte for here!",
            translation: "42번 손님! 매장용 따뜻한 카페라떼 한 잔 나왔습니다!",
            expressions: [{ phrase: "Order number ~!", meaning: "주문번호 ~번 손님!" }],
            vocabulary: [{ word: "order number", meaning: "주문 번호" }]
          },
          {
            role: "손님", side: "right",
            text: "Excuse me, I'm number 42, but I think there was a mix-up with my order.",
            translation: "실례합니다, 제가 42번인데요, 제 주문이 착오가 있었던 것 같습니다.",
            expressions: [{ phrase: "there was a mix-up with my order", meaning: "제 주문에 착오(혼선)가 있었다" }],
            vocabulary: [{ word: "mix-up", meaning: "혼동, 착오, 실수" }]
          },
          {
            role: "직원", side: "left",
            text: "Oh, I'm sorry! What did you originally order?",
            translation: "아, 죄송합니다! 원래 어떤 메뉴를 주문하셨나요?",
            expressions: [{ phrase: "What did you originally order?", meaning: "원래 무엇을 주문하셨나요?" }],
            vocabulary: [{ word: "originally", meaning: "원래, 애초에" }]
          },
          {
            role: "손님", side: "right",
            text: "I ordered an iced vanilla latte with soy milk, not a hot regular latte. Here's my receipt.",
            translation: "따뜻한 일반 라떼가 아니라 두유로 변경한 아이스 바닐라 라떼를 주문했어요. 여기 영수증이 있습니다.",
            expressions: [{ phrase: "Here's my receipt.", meaning: "여기 제 영수증이 있습니다." }],
            vocabulary: [{ word: "soy milk", meaning: "두유" }, { word: "regular", meaning: "일반의, 기본의" }]
          },
          {
            role: "직원", side: "left",
            text: "You're completely right! I'm so sorry about that. I'll remake your iced soy vanilla latte right away.",
            translation: "손님 말씀이 맞네요! 정말 죄송합니다. 지금 바로 아이스 두유 바닐라 라떼로 다시 만들어 드리겠습니다.",
            expressions: [{ phrase: "You're completely right!", meaning: "손님 말씀이 전적으로 맞습니다!" }, { phrase: "I'll remake ~ right away", meaning: "즉시 ~을 다시 만들어 드리겠습니다" }],
            vocabulary: [{ word: "completely", meaning: "완전히, 전적으로" }, { word: "remake", meaning: "다시 만들다" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you so much. I'm lactose intolerant, so I wanted to make sure.",
            translation: "정말 감사합니다. 제가 유당불내증이 있어서 확실히 확인하고 싶었어요.",
            expressions: [{ phrase: "I'm lactose intolerant", meaning: "저는 유당불내증이 있습니다 (우유를 소화하지 못할 때 쓰는 표현)" }],
            vocabulary: [{ word: "lactose intolerant", meaning: "유당불내증이 있는" }, { word: "make sure", meaning: "확실히 하다, 확인하다" }]
          },
          {
            role: "직원", side: "left",
            text: "I'm glad you told me! Here is your new drink, and please take this complimentary cookie for the wait.",
            translation: "말씀해 주셔서 정말 다행입니다! 새로 만든 음료 여기 있고요, 기다리시게 한 사과의 의미로 무료 쿠키를 받아 주세요.",
            expressions: [{ phrase: "complimentary cookie for the wait", meaning: "기다림에 대한 보상(서비스)으로 드리는 무료 쿠키" }],
            vocabulary: [{ word: "glad", meaning: "다행인, 기쁜" }, { word: "complimentary", meaning: "무료로 제공되는, 서비스의" }]
          }
        ]
      },
      {
        id: 9,
        title: "텀블러 할인 및 개인 컵 사용 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hi there! What can I get for you today?",
            translation: "안녕하세요! 오늘 어떤 메뉴로 드릴까요?",
            expressions: [{ phrase: "What can I get for you today?", meaning: "오늘 무엇을 준비해 드릴까요?" }],
            vocabulary: [{ word: "get", meaning: "준비해 주다, 가져다주다" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! I brought my own tumbler. Could you make an iced caramel macchiato in this?",
            translation: "안녕하세요! 제 개인 텀블러를 가져왔는데요. 여기에 아이스 카라멜 마키아토를 담아 주실 수 있나요?",
            expressions: [{ phrase: "I brought my own tumbler.", meaning: "제 개인 텀블러를 가져왔습니다." }, { phrase: "make ~ in this", meaning: "이 용기에 ~을 만들어 담아 주다" }],
            vocabulary: [{ word: "bring (brought)", meaning: "가져오다 (과거형 brought)" }, { word: "tumbler", meaning: "텀블러, 보온·보냉 컵" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! How many ounces does your tumbler hold?",
            translation: "물론이죠! 텀블러 용량이 몇 온스(oz)인가요?",
            expressions: [{ phrase: "How many ounces does ~ hold?", meaning: "~에 몇 온스가 들어가나요? (미국의 컵 용량 단위: 12oz=약 355ml, 16oz=약 473ml)" }],
            vocabulary: [{ word: "ounce (oz)", meaning: "온스 (액체 용량 단위)" }, { word: "hold", meaning: "(용기가 분량을) 담다, 수용하다" }]
          },
          {
            role: "손님", side: "right",
            text: "It's 16 ounces, so a medium size should fit perfectly.",
            translation: "16온스(약 470ml)짜리라서 미디엄 사이즈가 딱 맞을 거예요.",
            expressions: [{ phrase: "should fit perfectly", meaning: "용량이 딱 맞게 들어갈 것이다" }],
            vocabulary: [{ word: "fit", meaning: "(크기·용량이) 맞다, 들어가다" }, { word: "perfectly", meaning: "완벽하게, 딱 맞게" }]
          },
          {
            role: "직원", side: "left",
            text: "Awesome. Could you please take the lid off before handing it to me?",
            translation: "좋습니다. 저에게 건네주시기 전에 뚜껑은 열어서 빼 주시겠어요?",
            expressions: [{ phrase: "take the lid off", meaning: "뚜껑을 열다(분리하다) - 위생 규정상 매장 직원이 뚜껑을 만지지 않는 경우가 많음" }],
            vocabulary: [{ word: "lid", meaning: "컵 뚜껑" }, { word: "hand", meaning: "건네주다" }]
          },
          {
            role: "손님", side: "right",
            text: "Sure, here you go! Do I get a discount for using a reusable cup?",
            translation: "네, 여기 있습니다! 다회용 개인 컵을 사용하면 할인이 되나요?",
            expressions: [{ phrase: "Do I get a discount for ~?", meaning: "~하면 할인을 받을 수 있나요?" }],
            vocabulary: [{ word: "discount", meaning: "할인" }, { word: "reusable cup", meaning: "다회용 컵, 개인 컵" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we take 50 cents off your order! Your total comes to $4.80.",
            translation: "네, 주문 금액에서 50센트 할인해 드립니다! 총 결제 금액은 4달러 80센트입니다.",
            expressions: [{ phrase: "take 50 cents off", meaning: "50센트를 깎아주다(할인하다)" }],
            vocabulary: [{ word: "off", meaning: "(가격에서) 할인하여, 뺀" }]
          }
        ]
      },
      {
        id: 10,
        title: "케이크 포크와 냅킨 추가 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Here is your iced tea and strawberry cheesecake. Enjoy!",
            translation: "주문하신 아이스티와 딸기 치즈케이크 나왔습니다. 맛있게 드세요!",
            expressions: [{ phrase: "Enjoy!", meaning: "맛있게 드세요! (음식을 건네줄 때)" }],
            vocabulary: [{ word: "strawberry cheesecake", meaning: "딸기 치즈케이크" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! Could I get an extra fork, please? I'm sharing the cake with my friend.",
            translation: "감사합니다! 포크 하나만 더 주시겠어요? 친구와 케이크를 나눠 먹으려고요.",
            expressions: [{ phrase: "Could I get an extra fork?", meaning: "포크를 하나 더 받을 수 있을까요?" }, { phrase: "sharing ~ with my friend", meaning: "친구와 ~을 나눠 먹다" }],
            vocabulary: [{ word: "extra", meaning: "여분의, 추가의" }, { word: "fork", meaning: "포크" }, { word: "share", meaning: "나누다, 공유하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! Here's another fork for you. Do you need a small plate as well?",
            translation: "물론이죠! 여기 포크 하나 더 있습니다. 작은 앞접시도 하나 필요하신가요?",
            expressions: [{ phrase: "Do you need a small plate as well?", meaning: "작은 앞접시도 필요하신가요?" }],
            vocabulary: [{ word: "small plate", meaning: "작은 접시 (앞접시)" }, { word: "as well", meaning: "~도 또한, 마찬가지로" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! And could I also have a few more napkins?",
            translation: "네, 부탁드려요! 그리고 냅킨도 몇 장 더 주실 수 있나요?",
            expressions: [{ phrase: "a few more napkins", meaning: "냅킨 몇 장 더" }],
            vocabulary: [{ word: "a few", meaning: "몇 개의" }, { word: "napkin", meaning: "냅킨, 휴지" }]
          },
          {
            role: "직원", side: "left",
            text: "Here you go. Also, extra napkins and drinking water are available at the self-service bar over there.",
            translation: "여기 있습니다. 그리고 추가 냅킨과 식수는 저쪽 셀프서비스 바에서도 자유롭게 이용하실 수 있어요.",
            expressions: [{ phrase: "available at the self-service bar", meaning: "셀프 바에 비치되어 있어 이용 가능하다" }],
            vocabulary: [{ word: "drinking water", meaning: "식수, 마시는 물" }, { word: "self-service bar", meaning: "셀프서비스 바 (컨디바)" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I didn't see that. Thanks for letting me know!",
            translation: "아, 미처 못 봤네요. 알려주셔서 감사합니다!",
            expressions: [{ phrase: "Thanks for letting me know!", meaning: "알려주셔서 감사합니다!" }],
            vocabulary: [{ word: "let ~ know", meaning: "~에게 알려주다" }]
          }
        ]
      },
      {
        id: 11,
        title: "음료 캐리어와 빨대 챙겨 달라고 하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Here are your four drinks to go! Two iced lattes and two hot Americanos.",
            translation: "포장 주문하신 음료 네 잔 나왔습니다! 아이스 라떼 두 잔과 따뜻한 아메리카노 두 잔입니다.",
            expressions: [{ phrase: "four drinks to go", meaning: "테이크아웃 음료 네 잔" }],
            vocabulary: [{ word: "to go", meaning: "포장용의" }]
          },
          {
            role: "손님", side: "right",
            text: "Thanks! Since I'm carrying four cups, could you put them in a drink carrier for me?",
            translation: "감사합니다! 제가 네 잔을 들고 가야 해서 그러는데, 음료 캐리어에 담아 주실 수 있나요?",
            expressions: [{ phrase: "put them in a drink carrier", meaning: "음료 캐리어(홀더 트레이)에 담아 주다" }],
            vocabulary: [{ word: "carry", meaning: "들고 가다, 운반하다" }, { word: "drink carrier", meaning: "음료 캐리어 (cup tray / cup carrier)" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing! Let me place them in a four-cup tray so they don't tip over.",
            translation: "물론이죠! 쓰러지지 않도록 4구짜리 트레이에 담아 드리겠습니다.",
            expressions: [{ phrase: "so they don't tip over", meaning: "컵이 넘어지지(쓰러지지) 않도록" }],
            vocabulary: [{ word: "tray", meaning: "트레이, 받침대" }, { word: "tip over", meaning: "넘어지다, 엎질러지다" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! Could you also put stoppers in the hot drinks so they don't spill while I walk?",
            translation: "감사합니다! 걸어가는 동안 쏟아지지 않게 따뜻한 음료에는 마개(스플래시 스틱)도 꽂아 주시겠어요?",
            expressions: [{ phrase: "put stoppers in the hot drinks", meaning: "따뜻한 음료 입구에 넘침 방지 마개를 꽂다" }],
            vocabulary: [{ word: "stopper", meaning: "음료 입구 마개 (splash stick이라고도 함)" }, { word: "spill", meaning: "쏟아지다, 흘리다" }]
          },
          {
            role: "직원", side: "left",
            text: "Good idea! I just plugged both hot lids. Do you need straws for the iced lattes?",
            translation: "좋은 생각이네요! 따뜻한 음료 뚜껑 두 개 모두 마개를 꽂았습니다. 아이스 라떼용 빨대도 필요하신가요?",
            expressions: [{ phrase: "Do you need straws for ~?", meaning: "~용 빨대가 필요하신가요?" }],
            vocabulary: [{ word: "plug", meaning: "(구멍을) 막다" }, { word: "straw", meaning: "빨대" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, two straws, please. Thank you for packing everything so carefully!",
            translation: "네, 빨대 두 개 챙겨 주세요. 꼼꼼하게 포장해 주셔서 감사합니다!",
            expressions: [{ phrase: "packing everything so carefully", meaning: "모든 것을 아주 꼼꼼하게(조심스럽게) 포장해 주다" }],
            vocabulary: [{ word: "pack", meaning: "포장하다, 챙기다" }, { word: "carefully", meaning: "세심하게, 꼼꼼히" }]
          }
        ]
      },
      {
        id: 12,
        title: "원두 종류(산미/고소함) 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I'd like an iced Americano. Can I choose the coffee beans here?",
            translation: "안녕하세요! 아이스 아메리카노 한 잔 주문할게요. 여기서 원두 종류를 고를 수 있나요?",
            expressions: [{ phrase: "Can I choose the coffee beans?", meaning: "원두를 선택할 수 있나요?" }],
            vocabulary: [{ word: "coffee beans", meaning: "커피 원두" }, { word: "choose", meaning: "고르다, 선택하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! We offer two options: our dark roast House Blend and our light roast Single Origin.",
            translation: "네! 두 가지 옵션이 있습니다. 다크 로스트인 하우스 블렌드와 라이트 로스트인 싱글 오리진이 있어요.",
            expressions: [{ phrase: "We offer two options", meaning: "저희는 두 가지 선택지를 제공합니다" }],
            vocabulary: [{ word: "dark roast", meaning: "강배전 (진하게 볶은 원두)" }, { word: "light roast", meaning: "약배전 (산미를 살려 볶은 원두)" }]
          },
          {
            role: "손님", side: "right",
            text: "What's the difference in flavor between the two?",
            translation: "두 원두의 맛 차이가 어떻게 되나요?",
            expressions: [{ phrase: "What's the difference in flavor?", meaning: "맛(풍미)에서 어떤 차이가 있나요?" }],
            vocabulary: [{ word: "difference", meaning: "차이" }, { word: "flavor", meaning: "맛, 풍미" }]
          },
          {
            role: "직원", side: "left",
            text: "The House Blend is nutty and chocolatey with low acidity, while the Single Origin has bright, fruity acidity.",
            translation: "하우스 블렌드는 산미가 적고 고소하며 초콜릿 풍미가 나고, 싱글 오리진은 화사하고 과일 같은 산미가 있습니다.",
            expressions: [{ phrase: "nutty and chocolatey with low acidity", meaning: "산미가 낮고 고소하며 초콜릿 풍미가 나는" }],
            vocabulary: [{ word: "nutty", meaning: "견과류처럼 고소한" }, { word: "acidity", meaning: "(커피·와인의) 산미, 신맛" }, { word: "fruity", meaning: "과일 향이 나는" }]
          },
          {
            role: "손님", side: "right",
            text: "I prefer nutty coffee over sour coffee, so I'll go with the House Blend, please.",
            translation: "저는 신맛 나는 커피보다 고소한 커피를 선호해서, 하우스 블렌드로 할게요.",
            expressions: [{ phrase: "I prefer A over B", meaning: "B보다 A를 더 선호합니다" }, { phrase: "I'll go with ~", meaning: "~으로 선택하겠습니다" }],
            vocabulary: [{ word: "prefer", meaning: "선호하다, 더 좋아하다" }, { word: "sour", meaning: "신맛이 나는" }]
          },
          {
            role: "직원", side: "left",
            text: "Great choice! One iced Americano with the House Blend coming right up.",
            translation: "좋은 선택이십니다! 하우스 블렌드로 내린 아이스 아메리카노 한 잔 바로 준비해 드리겠습니다.",
            expressions: [{ phrase: "coming right up", meaning: "(주문하신 메뉴가) 곧바로 준비되어 나옵니다" }],
            vocabulary: [{ word: "house blend", meaning: "매장 대표 혼합 원두" }]
          }
        ]
      },
      {
        id: 13,
        title: "얼음 없이 차가운 음료 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hello! What can I get started for you?",
            translation: "안녕하세요! 어떤 메뉴로 준비해 드릴까요?",
            expressions: [{ phrase: "What can I get started for you?", meaning: "무엇을 준비해 드릴까요?" }],
            vocabulary: [{ word: "hello", meaning: "안녕하세요" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! Could I get a medium iced matcha latte, but with no ice at all?",
            translation: "안녕하세요! 아이스 말차 라떼 미디엄 사이즈로 주시되, 얼음은 아예 빼 주실 수 있나요?",
            expressions: [{ phrase: "with no ice at all", meaning: "얼음을 완전히(아예) 빼고" }],
            vocabulary: [{ word: "matcha latte", meaning: "말차(녹차) 라떼" }, { word: "not ~ at all", meaning: "전혀 ~ 없는" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure! Just to let you know, if we make it with no ice, the cup won't be completely full. Is that okay?",
            translation: "물론이죠! 다만 미리 말씀드리면, 얼음을 빼고 만들 경우 컵이 끝까지 가득 차지 않을 수 있는데 괜찮으신가요?",
            expressions: [{ phrase: "Just to let you know", meaning: "미리 참고로 말씀드리자면" }, { phrase: "the cup won't be completely full", meaning: "컵이 끝까지 가득 채워지지 않는다" }],
            vocabulary: [{ word: "full", meaning: "가득 찬" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I see. Is it possible to fill the rest of the cup with cold milk?",
            translation: "아, 그렇군요. 혹시 비는 공간을 차가운 우유로 채워 주실 수도 있나요?",
            expressions: [{ phrase: "fill the rest of the cup with ~", meaning: "컵의 나머지 빈 공간을 ~으로 채우다" }],
            vocabulary: [{ word: "possible", meaning: "가능한" }, { word: "the rest", meaning: "나머지 부분" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we can top it off with cold milk at no extra charge!",
            translation: "네, 추가 요금 없이 차가운 우유로 끝까지 채워 드릴 수 있습니다!",
            expressions: [{ phrase: "top it off with ~", meaning: "~을 부어 컵 끝까지 가득 채우다" }, { phrase: "at no extra charge", meaning: "추가 요금 없이, 무료로" }],
            vocabulary: [{ word: "top off", meaning: "(음료 등을) 끝까지 채우다" }]
          },
          {
            role: "손님", side: "right",
            text: "That's awesome! Thank you so much.",
            translation: "정말 좋네요! 대단히 감사합니다.",
            expressions: [{ phrase: "That's awesome!", meaning: "정말 좋네요! / 멋지네요!" }],
            vocabulary: [{ word: "awesome", meaning: "굉장한, 아주 좋은" }]
          }
        ]
      },
      {
        id: 14,
        title: "화장실 위치 및 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, could you tell me where the restroom is?",
            translation: "실례합니다, 화장실이 어디에 있는지 알려주실 수 있나요?",
            expressions: [{ phrase: "where the restroom is", meaning: "화장실이 어디에 있는지 (간접의문문 어순 주의)" }],
            vocabulary: [{ word: "restroom", meaning: "화장실 (미국에서 가장 흔히 쓰이며, 캐나다는 washroom, 영국은 toilet/loo)" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure! Go past the pickup counter and walk down the hallway to your left.",
            translation: "물론이죠! 픽업대를 지나서 왼쪽에 있는 복도를 따라 걸어가시면 됩니다.",
            expressions: [{ phrase: "Go past ~", meaning: "~을 지나쳐 가다" }, { phrase: "walk down the hallway", meaning: "복도를 따라 걸어가다" }],
            vocabulary: [{ word: "past", meaning: "~을 지나서" }, { word: "hallway", meaning: "복도" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you. Do I need a key or a passcode to get in?",
            translation: "감사합니다. 들어가려면 열쇠나 비밀번호가 필요한가요?",
            expressions: [{ phrase: "Do I need a key or a passcode?", meaning: "열쇠나 비밀번호(도어락 코드)가 필요한가요?" }],
            vocabulary: [{ word: "passcode", meaning: "(숫자로 된) 비밀번호, 출입 코드" }, { word: "get in", meaning: "들어가다" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, there's a keypad on the door. The code is 2-5-8-0 followed by the pound key.",
            translation: "네, 문에 키패드가 있습니다. 비밀번호는 2580을 누른 뒤 우물 정(#) 자를 누르시면 됩니다.",
            expressions: [{ phrase: "followed by the pound key", meaning: "그 뒤에 이어서 우물 정(#) 키를 누르다 (영국·호주에서는 hash key)" }],
            vocabulary: [{ word: "keypad", meaning: "번호키, 키패드" }, { word: "pound key", meaning: "# 버튼 (별표 * 버튼은 star key)" }]
          },
          {
            role: "손님", side: "right",
            text: "2-5-8-0 and the pound sign. Got it, thank you!",
            translation: "2580 누르고 # 버튼이요. 알겠습니다, 감사합니다!",
            expressions: [{ phrase: "pound sign", meaning: "# 기호" }],
            vocabulary: [{ word: "sign", meaning: "기호, 표시" }]
          },
          {
            role: "직원", side: "left",
            text: "You're welcome! Let me know if you have any trouble opening it.",
            translation: "천만에요! 혹시 문 여는 데 어려움이 있으시면 말씀해 주세요.",
            expressions: [{ phrase: "have any trouble ~ing", meaning: "~하는 데 어려움을 겪다" }],
            vocabulary: [{ word: "trouble", meaning: "어려움, 문제" }]
          }
        ]
      },
      {
        id: 15,
        title: "테이블 위 흘린 음료 정리 도움 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I'm so sorry, but I accidentally knocked over my cup and spilled coffee on the table.",
            translation: "실례합니다, 정말 죄송한데 제가 실수로 컵을 건드려 넘어뜨려서 테이블에 커피를 쏟았어요.",
            expressions: [{ phrase: "accidentally knocked over my cup", meaning: "실수로 컵을 쳐서 넘어뜨렸다" }, { phrase: "spilled coffee on the table", meaning: "테이블 위에 커피를 쏟았다" }],
            vocabulary: [{ word: "accidentally", meaning: "실수로, 우연히" }, { word: "knock over", meaning: "쳐서 넘어뜨리다" }, { word: "spill", meaning: "쏟다, 흘리다" }]
          },
          {
            role: "직원", side: "left",
            text: "Oh no, don't worry about it at all! Are you okay? Did any hot coffee get on you?",
            translation: "아이고, 전혀 걱정하지 마세요! 괜찮으신가요? 뜨거운 커피가 몸에 튀지는 않았나요?",
            expressions: [{ phrase: "Did any ~ get on you?", meaning: "~이 몸이나 옷에 묻지(튀지) 않았나요?" }],
            vocabulary: [{ word: "worry", meaning: "걱정하다" }]
          },
          {
            role: "손님", side: "right",
            text: "No, I'm totally fine, it was an iced drink. Could I get a towel or some rags to wipe it up?",
            translation: "네, 저는 전혀 괜찮아요, 아이스 음료였거든요. 닦을 수 있게 행주나 타월을 좀 주실 수 있나요?",
            expressions: [{ phrase: "wipe it up", meaning: "(흘린 액체를) 닦아내다" }],
            vocabulary: [{ word: "totally", meaning: "완전히" }, { word: "rag", meaning: "행주, 걸레" }, { word: "wipe", meaning: "닦다" }]
          },
          {
            role: "직원", side: "left",
            text: "Please don't worry about cleaning it! I'll grab a mop and a cloth and come wipe the table right now.",
            translation: "직접 안 치우셔도 괜찮습니다! 제가 지금 바로 대걸레와 행주를 가지고 가서 테이블을 닦아 드리겠습니다.",
            expressions: [{ phrase: "I'll grab a mop and a cloth", meaning: "제가 대걸레와 행주를 챙겨 갈게요" }],
            vocabulary: [{ word: "grab", meaning: "집어 들다, 챙기다" }, { word: "mop", meaning: "대걸레" }, { word: "cloth", meaning: "천, 행주" }]
          },
          {
            role: "손님", side: "right",
            text: "I really appreciate it. Sorry for the mess!",
            translation: "정말 감사드립니다. 어지럽혀서 죄송해요!",
            expressions: [{ phrase: "Sorry for the mess!", meaning: "어지럽혀서(쏟아서) 죄송합니다!" }],
            vocabulary: [{ word: "appreciate", meaning: "고마워하다, 감사하다" }, { word: "mess", meaning: "엉망인 상태, 어질러진 것" }]
          },
          {
            role: "직원", side: "left",
            text: "It happens all the time! Have a seat, and I'll also bring you a free replacement drink on the house.",
            translation: "늘 있는 일인걸요! 자리에 앉아 계시면, 쏟으신 음료도 매장 서비스로 새로 한 잔 가져다드리겠습니다.",
            expressions: [{ phrase: "It happens all the time!", meaning: "늘 있는 일입니다! (손님을 안심시킬 때)" }, { phrase: "on the house", meaning: "가게 부담으로, 무료 서비스로" }],
            vocabulary: [{ word: "replacement", meaning: "교체품, 새로 내어주는 음료" }]
          }
        ]
      },
      {
        id: 16,
        title: "영수증 발급 및 분할 결제 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Alright, for two paninis and two iced lattes, your total comes to $24.00.",
            translation: "자, 파니니 두 개와 아이스 라떼 두 잔 해서 총 24달러입니다.",
            expressions: [{ phrase: "your total comes to ~", meaning: "총합은 ~입니다" }],
            vocabulary: [{ word: "panini", meaning: "파니니 (이탈리아식 그릴 샌드위치)" }]
          },
          {
            role: "손님", side: "right",
            text: "Could we split the bill evenly between two credit cards?",
            translation: "신용카드 두 장으로 금액을 반반씩 나누어 분할 결제할 수 있을까요?",
            expressions: [{ phrase: "split the bill evenly", meaning: "계산서를 똑같이 반반 나누어 결제하다" }],
            vocabulary: [{ word: "split", meaning: "나누다, 쪼개다" }, { word: "evenly", meaning: "균등하게, 똑같이" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing! I can charge $12.00 to each card. Whenever the first person is ready, go ahead and tap.",
            translation: "물론이죠! 각 카드에 12달러씩 결제해 드릴게요. 첫 번째 분 준비되셨으면 카드를 태그해 주세요.",
            expressions: [{ phrase: "charge $12.00 to each card", meaning: "각 카드에 12달러씩 청구(결제)하다" }, { phrase: "go ahead and tap", meaning: "편하게 카드를 찍어(태그해) 주세요" }],
            vocabulary: [{ word: "charge", meaning: "(요금을) 청구하다, 결제하다" }, { word: "each", meaning: "각각의" }]
          },
          {
            role: "손님", side: "right",
            text: "Okay, I just tapped mine. Could I get a printed receipt for my half, please?",
            translation: "네, 제 카드는 방금 태그했습니다. 제 결제분은 종이 영수증으로 뽑아 주시겠어요?",
            expressions: [{ phrase: "a printed receipt for my half", meaning: "제가 낸 절반 금액에 대한 종이 영수증" }],
            vocabulary: [{ word: "printed receipt", meaning: "인쇄된 종이 영수증" }, { word: "half", meaning: "절반, 내 몫" }]
          },
          {
            role: "직원", side: "left",
            text: "Here's your receipt for the first $12.00. Now I'm ready for the second card!",
            translation: "첫 번째 12달러 결제 영수증 여기 있습니다. 이제 두 번째 카드 결제 도와드릴게요!",
            expressions: [{ phrase: "I'm ready for the second card", meaning: "두 번째 카드 결제 준비가 되었습니다" }],
            vocabulary: [{ word: "second", meaning: "두 번째의" }]
          },
          {
            role: "손님", side: "right",
            text: "My friend just tapped her card too. Thank you for splitting it for us!",
            translation: "제 친구도 방금 카드를 태그했어요. 나눠서 결제해 주셔서 감사합니다!",
            expressions: [{ phrase: "Thank you for splitting it for us!", meaning: "나눠서 계산해 주셔서 감사합니다!" }],
            vocabulary: [{ word: "friend", meaning: "친구" }]
          }
        ]
      },
      {
        id: 17,
        title: "브런치 세트 가능 시간 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I saw the brunch set sign outside. Are you still serving brunch right now?",
            translation: "안녕하세요! 밖에서 브런치 세트 안내판을 봤는데요. 지금도 브런치 주문이 가능한가요?",
            expressions: [{ phrase: "Are you still serving brunch?", meaning: "아직 브런치 메뉴를 제공하고(판매하고) 있나요?" }],
            vocabulary: [{ word: "sign", meaning: "간판, 안내판" }, { word: "serve", meaning: "(음식·메뉴를) 제공하다, 내어주다" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we serve our brunch menu until 2:00 PM, so you made it just in time!",
            translation: "네, 브런치 메뉴는 오후 2시까지 운영해서 딱 맞춰서 잘 오셨어요!",
            expressions: [{ phrase: "you made it just in time!", meaning: "시간에 딱 맞춰서 잘 오셨습니다(성공하셨습니다)!" }],
            vocabulary: [{ word: "until", meaning: "~까지" }, { word: "just in time", meaning: "제시간에 딱 맞춰" }]
          },
          {
            role: "손님", side: "right",
            text: "What a relief! Does the avocado toast brunch set come with a coffee?",
            translation: "다행이네요! 아보카도 토스트 브런치 세트에 커피가 포함되어 나오나요?",
            expressions: [{ phrase: "What a relief!", meaning: "정말 다행이네요! (안도할 때 쓰는 표현)" }, { phrase: "Does ~ come with a coffee?", meaning: "~에 커피가 세트로 포함되어 나오나요?" }],
            vocabulary: [{ word: "relief", meaning: "안도, 다행" }, { word: "avocado toast", meaning: "아보카도 토스트" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, it includes a hot or iced Americano, or you can switch to a latte for an extra dollar.",
            translation: "네, 따뜻하거나 차가운 아메리카노가 기본 포함이며, 1달러를 추가하시면 라떼로 변경하실 수 있습니다.",
            expressions: [{ phrase: "switch to ~ for an extra dollar", meaning: "1달러를 추가하고 ~으로 변경하다" }],
            vocabulary: [{ word: "include", meaning: "포함하다" }, { word: "switch", meaning: "바꾸다, 전환하다" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll do the avocado toast set with an iced latte, please. How long will the food take?",
            translation: "아보카도 토스트 세트에 아이스 라떼로 변경할게요. 음식 나오는 데 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "How long will the food take?", meaning: "음식이 준비되는 데 시간이 얼마나 걸릴까요?" }],
            vocabulary: [{ word: "take", meaning: "(시간이) 걸리다, 소요되다" }]
          },
          {
            role: "직원", side: "left",
            text: "It takes about 10 minutes. Take this table buzzer, and it'll vibrate when your brunch is ready!",
            translation: "약 10분 정도 걸립니다. 이 진동벨을 가지고 계시면 브런치가 준비되었을 때 울릴 거예요!",
            expressions: [{ phrase: "Take this table buzzer", meaning: "이 진동벨을 가져가세요" }],
            vocabulary: [{ word: "table buzzer", meaning: "진동벨 (pager / coaster pager라고도 함)" }, { word: "vibrate", meaning: "진동하다, 울리다" }]
          }
        ]
      },
      {
        id: 18,
        title: "알레르기 유발 성분(견과류 등) 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! Before I order, could I ask about ingredients? My child has a peanut and tree nut allergy.",
            translation: "안녕하세요! 주문하기 전에 성분 좀 여쭤봐도 될까요? 제 아이에게 땅콩 및 견과류 알레르기가 있어서요.",
            expressions: [{ phrase: "ask about ingredients", meaning: "식재료(성분)에 대해 문의하다" }, { phrase: "peanut and tree nut allergy", meaning: "땅콩 및 나무 견과류(호두·아몬드 등) 알레르기" }],
            vocabulary: [{ word: "ingredient", meaning: "재료, 성분" }, { word: "tree nut", meaning: "나무에서 열리는 견과류 (호두, 아몬드, 캐슈넛 등)" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! Please let me know which bakery item you're looking at, and I'll check our allergen chart.",
            translation: "물론이죠! 어떤 베이커리 메뉴를 보고 계신지 말씀해 주시면 알레르기 유발 성분표를 확인해 드리겠습니다.",
            expressions: [{ phrase: "check our allergen chart", meaning: "알레르기 유발 성분표를 확인하다" }],
            vocabulary: [{ word: "bakery item", meaning: "빵·베이커리 품목" }, { word: "allergen", meaning: "알레르기 유발 물질" }]
          },
          {
            role: "손님", side: "right",
            text: "Does the chocolate chip scone or the banana bread contain any nuts?",
            translation: "초콜릿 칩 스콘이나 바나나 브레드에 견과류가 들어가 있나요?",
            expressions: [{ phrase: "Does ~ contain any nuts?", meaning: "~에 견과류가 조금이라도 함유되어 있나요?" }],
            vocabulary: [{ word: "scone", meaning: "스콘" }, { word: "contain", meaning: "함유하다, 포함하다" }]
          },
          {
            role: "직원", side: "left",
            text: "The banana bread contains walnuts. The scone has no nuts in the recipe, but it's baked in the same oven.",
            translation: "바나나 브레드에는 호두가 들어갑니다. 스콘은 레시피에 견과류가 없지만, 같은 오븐에서 구워집니다.",
            expressions: [{ phrase: "baked in the same oven", meaning: "같은 오븐에서 구워진다 (교차 오염 가능성을 안내할 때)" }],
            vocabulary: [{ word: "walnut", meaning: "호두" }, { word: "recipe", meaning: "레시피, 조리법" }]
          },
          {
            role: "손님", side: "right",
            text: "Ah, we need to avoid cross-contamination too. Do you have any pre-packaged nut-free snacks?",
            translation: "아, 교차 오염도 피해야 해서요. 혹시 개별 밀봉 포장된 견과류 무첨가 간식이 있나요?",
            expressions: [{ phrase: "avoid cross-contamination", meaning: "교차 오염(조리 도구 공유 등으로 인한 혼입)을 피하다" }, { phrase: "pre-packaged nut-free snacks", meaning: "미리 개별 포장된 견과류 무첨가 간식" }],
            vocabulary: [{ word: "cross-contamination", meaning: "교차 오염" }, { word: "nut-free", meaning: "견과류가 전혀 들어가지 않은" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! These sealed organic fruit pouches and butter shortbread cookies are certified nut-free.",
            translation: "네! 여기 밀봉된 유기농 과일 파우치와 버터 쇼트브레드 쿠키는 견과류 무첨가 인증을 받은 제품입니다.",
            expressions: [{ phrase: "certified nut-free", meaning: "견과류 무첨가 공식 인증을 받은" }],
            vocabulary: [{ word: "sealed", meaning: "밀봉된" }, { word: "certified", meaning: "인증된, 검증된" }]
          },
          {
            role: "손님", side: "right",
            text: "That's so helpful! I'll take one fruit pouch and a cup of babyccino for my kid, please.",
            translation: "정말 큰 도움이 되었어요! 아이 먹을 과일 파우치 하나랑 베이비치노(우유 거품 음료) 한 잔 주세요.",
            expressions: [{ phrase: "That's so helpful!", meaning: "정말 큰 도움이 되었습니다!" }],
            vocabulary: [{ word: "babyccino", meaning: "베이비치노 (에스프레소 없이 따뜻한 우유 거품만 낸 어린이용 음료)" }]
          }
        ]
      },
      {
        id: 19,
        title: "마감 시간 및 라스트 오더 시간 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! Are you guys still open, or are you getting ready to close?",
            translation: "안녕하세요! 아직 영업 중인가요, 아니면 마감 준비 중이신가요?",
            expressions: [{ phrase: "Are you guys still open?", meaning: "아직 영업 중인가요?" }, { phrase: "getting ready to close", meaning: "문을 닫을(마감할) 준비를 하는 중이다" }],
            vocabulary: [{ word: "open", meaning: "영업 중인" }, { word: "close", meaning: "문을 닫다, 마감하다" }]
          },
          {
            role: "직원", side: "left",
            text: "We're still open! We close at 10:00 PM tonight, and last order is at 9:30 PM.",
            translation: "아직 영업 중입니다! 오늘 밤 10시에 마감하고, 라스트 오더(마지막 주문)는 9시 30분입니다.",
            expressions: [{ phrase: "last order is at ~", meaning: "마지막 주문 마감 시간은 ~입니다 (last call이라고도 함)" }],
            vocabulary: [{ word: "tonight", meaning: "오늘 밤" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, good! Can we still sit inside and have a cup of herbal tea for about 40 minutes?",
            translation: "아, 다행이네요! 매장 안에 앉아서 40분 정도 허브티를 마시고 가도 될까요?",
            expressions: [{ phrase: "sit inside and have ~", meaning: "매장 안에 앉아서 ~을 마시다" }],
            vocabulary: [{ word: "inside", meaning: "실내에, 매장 안에" }, { word: "herbal tea", meaning: "허브티 (카페인 없는 차)" }]
          },
          {
            role: "직원", side: "left",
            text: "Absolutely! Our kitchen is closed for hot sandwiches, but all drinks and display cakes are available.",
            translation: "물론이죠! 주방 마감으로 따뜻한 샌드위치 조리는 끝났지만, 모든 음료와 쇼케이스 케이크는 주문 가능합니다.",
            expressions: [{ phrase: "Our kitchen is closed for ~", meaning: "주방이 마감되어 ~ 조리는 종료되었습니다" }],
            vocabulary: [{ word: "kitchen", meaning: "주방, 조리실" }, { word: "available", meaning: "이용 가능한, 주문 가능한" }]
          },
          {
            role: "손님", side: "right",
            text: "That's fine! We'll just have two hot chamomile teas for here, please.",
            translation: "괜찮습니다! 매장에서 마실 따뜻한 캐모마일 티 두 잔만 주세요.",
            expressions: [{ phrase: "We'll just have ~", meaning: "저희는 그냥 ~만 주문할게요" }],
            vocabulary: [{ word: "chamomile tea", meaning: "캐모마일 차" }]
          },
          {
            role: "직원", side: "left",
            text: "Sounds good! Just so you know, we'll serve them in to-go cups since we close in less than an hour.",
            translation: "좋습니다! 참고로 마감까지 1시간이 채 남지 않아서 테이크아웃 컵에 담아 제공해 드리겠습니다.",
            expressions: [{ phrase: "in less than an hour", meaning: "1시간 이내에 (1시간도 안 남았을 때)" }],
            vocabulary: [{ word: "to-go cup", meaning: "일회용 테이크아웃 컵" }]
          }
        ]
      },
      {
        id: 20,
        title: "선물용 원두 분쇄도 지정해 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I'd like to buy this bag of Ethiopian coffee beans as a gift for a friend.",
            translation: "안녕하세요! 친구에게 줄 선물로 이 에티오피아 커피 원두 한 봉지를 사고 싶은데요.",
            expressions: [{ phrase: "buy ~ as a gift for a friend", meaning: "친구에게 줄 선물용으로 ~을 구매하다" }],
            vocabulary: [{ word: "bag of coffee beans", meaning: "커피 원두 한 봉지" }, { word: "gift", meaning: "선물" }]
          },
          {
            role: "직원", side: "left",
            text: "Great choice! That's a whole bean bag. Would you like to keep it whole bean, or should we grind it for you?",
            translation: "탁월한 선택이십니다! 그 제품은 홀빈(갈지 않은 통원두)인데요. 그대로 드릴까요, 아니면 분쇄해 드릴까요?",
            expressions: [{ phrase: "keep it whole bean", meaning: "갈지 않은 통원두 상태 그대로 두다" }, { phrase: "should we grind it for you?", meaning: "원두를 갈아(분쇄해) 드릴까요?" }],
            vocabulary: [{ word: "whole bean", meaning: "홀빈 (분쇄하지 않은 원두)" }, { word: "grind", meaning: "(원두·곡물 등을) 갈다, 분쇄하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Could you grind it for me, please? My friend doesn't have a coffee grinder at home.",
            translation: "분쇄해 주시겠어요? 친구 집에 커피 그라인더가 없거든요.",
            expressions: [{ phrase: "Could you grind it for me?", meaning: "원두를 갈아 주시겠어요?" }],
            vocabulary: [{ word: "coffee grinder", meaning: "커피 분쇄기 (그라인더)" }]
          },
          {
            role: "직원", side: "left",
            text: "No problem! Do you know what kind of coffee maker your friend uses?",
            translation: "문제없습니다! 친구분이 어떤 커피 추출 기구를 사용하시는지 아시나요?",
            expressions: [{ phrase: "what kind of coffee maker ~ uses", meaning: "어떤 종류의 커피 메이커(추출 기구)를 사용하는지" }],
            vocabulary: [{ word: "coffee maker", meaning: "커피 추출 기구, 커피 메이커" }]
          },
          {
            role: "손님", side: "right",
            text: "She uses a paper filter dripper for hand-drip coffee.",
            translation: "종이 필터를 끼우는 핸드드립(푸어오버) 드리퍼를 사용해요.",
            expressions: [{ phrase: "paper filter dripper", meaning: "종이 필터용 드리퍼 (영어권에서는 핸드드립을 주로 pour-over라고 부름)" }],
            vocabulary: [{ word: "paper filter", meaning: "종이 필터, 여과지" }, { word: "dripper", meaning: "드리퍼" }]
          },
          {
            role: "직원", side: "left",
            text: "Got it! I'll grind it to a medium-fine setting for pour-over using a paper filter.",
            translation: "알겠습니다! 종이 필터용 핸드드립(푸어오버)에 맞게 중간보다 약간 가는 굵기로 분쇄해 드리겠습니다.",
            expressions: [{ phrase: "medium-fine setting for pour-over", meaning: "핸드드립(푸어오버)에 맞춘 중세분쇄 설정" }],
            vocabulary: [{ word: "medium-fine", meaning: "중세분쇄 (중간보다 약간 가는 입자)" }, { word: "pour-over", meaning: "핸드드립 커피" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! Also, could I get a small gift bag and a sticker to wrap it?",
            translation: "감사합니다! 그리고 포장할 수 있게 작은 선물용 쇼핑백과 스티커도 하나 주실 수 있나요?",
            expressions: [{ phrase: "a small gift bag and a sticker", meaning: "작은 선물용 가방(봉투)과 포장 스티커" }],
            vocabulary: [{ word: "wrap", meaning: "포장하다, 싸다" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! I'll seal the ground coffee bag tightly and put a gift bag inside for you.",
            translation: "물론이죠! 분쇄된 원두 봉투를 단단히 밀봉해서 선물용 봉투와 함께 챙겨 드리겠습니다.",
            expressions: [{ phrase: "seal the ground coffee bag tightly", meaning: "분쇄 원두 봉투를 공기가 안 통하게 단단히 밀봉하다" }],
            vocabulary: [{ word: "ground coffee", meaning: "분쇄된 원두커피 (grind의 과거분사)" }, { word: "tightly", meaning: "단단히, 꽉" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 카페 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ。ご注文はお決まりですか？",
            translation: "어서 오세요. 주문은 결정하셨나요?",
            expressions: [{ phrase: "ご注文はお決まりですか？", meaning: "주문하실 메뉴를 정하셨나요? (카페·식당 직원의 기본 응대 표현)" }],
            vocabulary: [{ word: "注文(ちゅうもん)", meaning: "주문" }, { word: "決まり(きまり)", meaning: "결정됨, 정해짐" }]
          },
          {
            role: "손님", side: "right",
            text: "アイスアメリカーノ1つと、ブルーベリーマフィンを1つお願いします。",
            translation: "아이스 아메리카노 한 잔과 블루베리 머핀 하나 부탁합니다.",
            expressions: [{ phrase: "〜を1つお願いします", meaning: "~을 하나 부탁합니다" }],
            vocabulary: [{ word: "1つ(ひとつ)", meaning: "한 개, 하나" }, { word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。アイスアメリカーノのサイズはどうなさいますか？",
            translation: "알겠습니다. 아이스 아메리카노 사이즈는 어떻게 하시겠습니까?",
            expressions: [{ phrase: "どうなさいますか？", meaning: "어떻게 하시겠습니까? ('どうしますか'의 높임 표현)" }],
            vocabulary: [{ word: "かしこまりました", meaning: "알겠습니다 (정중한 표현)" }, { word: "サイズ", meaning: "사이즈, 크기" }]
          },
          {
            role: "손님", side: "right",
            text: "Mサイズでお願いします。あと、氷を少なめにしてもらえますか？",
            translation: "M 사이즈로 부탁합니다. 그리고 얼음을 조금만 넣어 주실 수 있나요?",
            expressions: [{ phrase: "氷を少なめにしてもらえますか？", meaning: "얼음을 적게 해 주실 수 있나요?" }],
            vocabulary: [{ word: "氷(こおり)", meaning: "얼음" }, { word: "少なめ(すくなめ)", meaning: "조금 적게, 소량" }]
          },
          {
            role: "직원", side: "left",
            text: "承知いたしました。店内でお召し上がりですか？それともお持ち帰りですか？",
            translation: "알겠습니다. 매장에서 드시나요? 아니면 포장해 가시나요?",
            expressions: [{ phrase: "店内でお召し上がりですか？", meaning: "매장에서 드시고 가시나요?" }, { phrase: "お持ち帰りですか？", meaning: "포장(테이크아웃)이신가요?" }],
            vocabulary: [{ word: "承知(しょうち)いたしました", meaning: "알겠습니다 (정중한 승낙)" }, { word: "店内(てんない)", meaning: "매장 내" }, { word: "召し上がり(めしあがり)", meaning: "드심 (먹다·마시다의 높임말)" }, { word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" }]
          },
          {
            role: "손님", side: "right",
            text: "店内でお願いします。",
            translation: "매장에서 먹고 갈게요.",
            expressions: [{ phrase: "店内でお願いします", meaning: "매장 이용으로 부탁드립니다" }],
            vocabulary: [{ word: "店内(てんない)", meaning: "가게 안, 매장 내부" }]
          },
          {
            role: "직원", side: "left",
            text: "合計で750円になります。こちらにカードをタッチしてください。商品はあちらのカウンターでお渡しします。",
            translation: "총 750엔입니다. 여기에 카드를 터치해 주세요. 상품은 저쪽 카운터에서 전달해 드리겠습니다.",
            expressions: [{ phrase: "合計で〜円になります", meaning: "총 ~엔입니다" }, { phrase: "カードをタッチしてください", meaning: "카드를 태그(터치)해 주세요" }],
            vocabulary: [{ word: "合計(ごうけい)", meaning: "합계, 총액" }, { word: "円(えん)", meaning: "엔 (일본 화폐 단위)" }, { word: "商品(しょうひん)", meaning: "상품, 주문 메뉴" }, { word: "お渡し(おわたし)します", meaning: "건네드리다, 전달해 드리다" }]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "おはようございます。本日のお飲み物は何になさいますか？",
            translation: "좋은 아침입니다. 오늘 음료는 어떤 것으로 하시겠습니까?",
            expressions: [{ phrase: "何になさいますか？", meaning: "무엇으로 하시겠습니까? ('何にしますか'의 존경어 표현)" }],
            vocabulary: [{ word: "本日(ほんじつ)", meaning: "오늘, 금일" }, { word: "飲み物(のみもの)", meaning: "음료, 마실 것" }, { word: "何(なに)", meaning: "무엇" }]
          },
          {
            role: "손님", side: "right",
            text: "ホットのバニララテをMサイズでお願いします。ディカフェに変更することはできますか？",
            translation: "따뜻한 바닐라 라떼 M 사이즈로 부탁합니다. 디카페인으로 변경할 수 있나요?",
            expressions: [{ phrase: "〜に変更することはできますか？", meaning: "~으로 변경하는 것이 가능한가요?" }],
            vocabulary: [{ word: "ディカフェ", meaning: "디카페인 (일본에서는 カフェインレス라고도 자주 표현함)" }, { word: "変更(へんこう)する", meaning: "변경하다, 바꾸다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、プラス50円でディカフェに変更可能です。ミルクは通常の牛乳でよろしいですか？",
            translation: "네, 50엔 추가로 디카페인 변경이 가능합니다. 우유는 일반 우유로 해 드리면 될까요?",
            expressions: [{ phrase: "プラス〜円で変更可能です", meaning: "~엔 추가로 변경 가능합니다" }, { phrase: "〜でよろしいですか？", meaning: "~으로 괜찮으시겠습니까?" }],
            vocabulary: [{ word: "円(えん)", meaning: "엔 (화폐 단위)" }, { word: "可能(かのう)", meaning: "가능" }, { word: "通常(つうじょう)", meaning: "통상, 일반(기본)" }, { word: "牛乳(ぎゅうにゅう)", meaning: "우유" }]
          },
          {
            role: "손님", side: "right",
            text: "牛乳ではなく、オーツミルクに変えていただけますか？",
            translation: "일반 우유 말고, 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [{ phrase: "〜に変えていただけますか？", meaning: "~으로 바꿔 주실 수 있으신가요?" }],
            vocabulary: [{ word: "牛乳(ぎゅうにゅう)", meaning: "우유" }, { word: "オーツミルク", meaning: "오트 밀크 (귀리 우유, 두유는 豆乳(とうにゅう))" }, { word: "変える(かえる)", meaning: "바꾸다, 변경하다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。オーツミルクへの変更もプラス50円になりますが、よろしいでしょうか？",
            translation: "알겠습니다. 오트 밀크로 변경하는 것도 50엔이 추가되는데 괜찮으신가요?",
            expressions: [{ phrase: "〜になりますが、よろしいでしょうか？", meaning: "~이 되는데 괜찮으시겠습니까?" }],
            vocabulary: [{ word: "変更(へんこう)", meaning: "변경" }, { word: "円(えん)", meaning: "엔" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、大丈夫です。支払いはクレジットカードでお願いします。",
            translation: "네, 괜찮습니다. 결제는 신용카드로 부탁합니다.",
            expressions: [{ phrase: "支払いは〜でお願いします", meaning: "결제는 ~(수단)으로 부탁합니다" }],
            vocabulary: [{ word: "大丈夫(だいじょうぶ)", meaning: "괜찮음, 문제없음" }, { word: "支払い(しはらい)", meaning: "지불, 결제" }, { word: "クレジットカード", meaning: "신용카드" }]
          },
          {
            role: "직원", side: "left",
            text: "ありがとうございます。レシートの番号でお呼びしますので、少々お待ちください。",
            translation: "감사합니다. 영수증 번호로 불러 드릴 테니 잠시만 기다려 주세요.",
            expressions: [{ phrase: "番号でお呼びします", meaning: "번호로 호명해 드리겠습니다" }, { phrase: "少々お待ちください", meaning: "잠시만 기다려 주십시오" }],
            vocabulary: [{ word: "番号(ばんごう)", meaning: "번호" }, { word: "呼ぶ(よぶ)", meaning: "부르다, 호명하다" }, { word: "少々(しょうしょう)", meaning: "잠시, 조금" }, { word: "待つ(まつ)", meaning: "기다리다" }]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원", side: "left",
            text: "こんにちは！ご注文をお伺いいたします。",
            translation: "안녕하세요! 주문을 도와드리겠습니다.",
            expressions: [{ phrase: "ご注文をお伺いいたします", meaning: "주문을 여쭙겠습니다 (점원이 주문을 받을 때 쓰는 정중한 겸양 표현)" }],
            vocabulary: [{ word: "注文(ちゅうもん)", meaning: "주문" }, { word: "伺う(うかがう)", meaning: "여쭙다, 듣다 (겸양어)" }]
          },
          {
            role: "손님", side: "right",
            text: "アイスのカフェモカをお願いします。上にホイップクリームは乗っていますか？",
            translation: "아이스 카페모카 부탁합니다. 위에 휘핑크림이 올라가 있나요?",
            expressions: [{ phrase: "上に〜は乗っていますか？", meaning: "위에 ~이 올라가(토핑되어) 있나요?" }],
            vocabulary: [{ word: "上(うえ)", meaning: "위" }, { word: "ホイップクリーム", meaning: "휘핑크림" }, { word: "乗る(のる)", meaning: "올라가다, 얹어지다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、通常はホイップクリームとチョコレートソースが乗っております。",
            translation: "네, 기본적으로는 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [{ phrase: "通常は〜が乗っております", meaning: "기본적으로는 ~이 올라가 있습니다" }],
            vocabulary: [{ word: "通常(つうじょう)", meaning: "통상, 보통(기본)" }, { word: "乗る(のる)", meaning: "(토핑 등이) 얹히다, 올라가다" }]
          },
          {
            role: "손님", side: "right",
            text: "では、ホイップクリームは抜きでお願いします。あと、シロップも半分に減らせますか？",
            translation: "그럼 휘핑크림은 빼 주세요. 그리고 시럽도 절반으로 줄일 수 있나요?",
            expressions: [{ phrase: "〜は抜きでお願いします", meaning: "~은 빼고 주세요 (크림, 와사비, 고수 등을 뺄 때 필수 표현)" }, { phrase: "半分に減らせますか？", meaning: "절반으로 줄일 수 있나요?" }],
            vocabulary: [{ word: "抜き(ぬき)", meaning: "뺌, 제외함" }, { word: "半分(はんぶん)", meaning: "절반, 반" }, { word: "減らす(へらす)", meaning: "(양을) 줄이다, 덜다" }]
          },
          {
            role: "직원", side: "left",
            text: "承知いたしました。ホイップ抜き、シロップ少なめですね。サイズはいかがなさいますか？",
            translation: "알겠습니다. 휘핑크림 빼고 시럽 적게 말씀이시죠. 사이즈는 어떻게 하시겠습니까?",
            expressions: [{ phrase: "サイズはいかがなさいますか？", meaning: "사이즈는 어떻게 하시겠습니까?" }],
            vocabulary: [{ word: "承知(しょうち)いたしました", meaning: "알겠습니다" }, { word: "抜き(ぬき)", meaning: "제외, 뺌" }, { word: "少なめ(すくなめ)", meaning: "적게, 소량" }]
          },
          {
            role: "손님", side: "right",
            text: "Lサイズで、持ち帰りでお願いします。注文は以上です。",
            translation: "L 사이즈로 하고, 포장으로 부탁합니다. 주문은 이상입니다.",
            expressions: [{ phrase: "注文は以上です", meaning: "주문은 이상(여기까지)입니다" }],
            vocabulary: [{ word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" }, { word: "注文(ちゅうもん)", meaning: "주문" }, { word: "以上(いじょう)", meaning: "이상, 끝" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。お会計は620円になります。すぐにお作りいたしますね。",
            translation: "알겠습니다. 결제 금액은 620엔입니다. 바로 만들어 드리겠습니다.",
            expressions: [{ phrase: "お会計は〜円になります", meaning: "계산(결제 금액)은 ~엔입니다" }, { phrase: "すぐにお作りいたします", meaning: "바로 만들어 드리겠습니다" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 결제 금액" }, { word: "円(えん)", meaning: "엔" }, { word: "作る(つくる)", meaning: "만들다, 제조하다" }]
          }
        ]
      },
      {
        id: 4,
        title: "추천 디저트 및 시즌 음료 문의하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ。何かお探しですか？",
            translation: "어서 오세요. 뭔가 찾으시는 메뉴가 있으신가요?",
            expressions: [{ phrase: "何かお探しですか？", meaning: "무언가 찾고 계신 것이 있나요?" }],
            vocabulary: [{ word: "何(なに)か", meaning: "무언가, 어떤 것" }, { word: "探す(さがす)", meaning: "찾다" }]
          },
          {
            role: "손님", side: "right",
            text: "こんにちは。今、季節限定のドリンクはありますか？",
            translation: "안녕하세요. 지금 나오는 계절(시즌) 한정 음료가 있나요?",
            expressions: [{ phrase: "季節限定のドリンク", meaning: "계절(시즌) 한정 음료" }],
            vocabulary: [{ word: "今(いま)", meaning: "지금, 현재" }, { word: "季節限定(きせつげんてい)", meaning: "계절 한정, 시즌 한정" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、春限定のピスタチオクリームラテがとても人気ですよ。",
            translation: "네, 봄 시즌 한정인 피스타치오 크림 라떼가 인기가 아주 많습니다.",
            expressions: [{ phrase: "〜がとても人気ですよ", meaning: "~이 아주 인기가 많습니다" }],
            vocabulary: [{ word: "春限定(はるげんてい)", meaning: "봄 시즌 한정" }, { word: "人気(にんき)", meaning: "인기" }]
          },
          {
            role: "손님", side: "right",
            text: "おいしそうですね！それに合うおすすめのデザートは何ですか？",
            translation: "맛있겠네요! 그 음료와 잘 어울리는 추천 디저트는 무엇인가요?",
            expressions: [{ phrase: "それに合うおすすめの〜", meaning: "그것과 잘 어울리는 추천 ~" }],
            vocabulary: [{ word: "合う(あう)", meaning: "어울리다, 맞다" }, { word: "何(なん)ですか", meaning: "무엇입니까" }]
          },
          {
            role: "직원", side: "left",
            text: "爽やかなレモンタルトや、濃厚なティラミスがよく合いますよ。",
            translation: "상큼한 레몬 타르트나 진한 티라미수가 아주 잘 어울립니다.",
            expressions: [{ phrase: "よく合いますよ", meaning: "궁합이 잘 맞습니다 / 잘 어울립니다" }],
            vocabulary: [{ word: "爽(さわ)やか", meaning: "상큼함, 상쾌함" }, { word: "濃厚(のうこう)", meaning: "(맛이) 진함, 농후함" }]
          },
          {
            role: "손님", side: "right",
            text: "では、アイスのピスタチオラテとティラミスを1つずつお願いします。",
            translation: "그럼 아이스 피스타치오 라떼와 티라미수를 하나씩 부탁합니다.",
            expressions: [{ phrase: "〜を1つずつお願いします", meaning: "~을 하나씩(각 1개) 부탁합니다" }],
            vocabulary: [{ word: "1つ(ひとつ)ずつ", meaning: "하나씩" }, { word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 라떼 사이즈업 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ。ご注文をどうぞ。",
            translation: "어서 오세요. 주문하시겠어요?",
            expressions: [{ phrase: "ご注文をどうぞ", meaning: "편하게 주문해 주세요" }],
            vocabulary: [{ word: "注文(ちゅうもん)", meaning: "주문" }]
          },
          {
            role: "손님", side: "right",
            text: "ホットのカフェラテを1ついただきたいのですが。",
            translation: "따뜻한 카페라떼를 한 잔 마시고 싶은데요.",
            expressions: [{ phrase: "〜を1ついただきたいのですが", meaning: "~을 하나 주문하고 싶은데요 (정중한 표현)" }],
            vocabulary: [{ word: "1つ(ひとつ)", meaning: "하나, 한 잔" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。サイズはSとMのどちらになさいますか？",
            translation: "알겠습니다. 사이즈는 S와 M 중 어느 것으로 하시겠습니까?",
            expressions: [{ phrase: "AとBのどちらになさいますか？", meaning: "A와 B 중 어느 것으로 하시겠습니까?" }],
            vocabulary: [{ word: "どちら", meaning: "어느 쪽, 어느 것" }]
          },
          {
            role: "손님", side: "right",
            text: "Lサイズにサイズアップして、エスプレッソショットを1つ追加できますか？",
            translation: "L 사이즈로 사이즈업하고, 에스프레소 샷을 하나 추가할 수 있나요?",
            expressions: [{ phrase: "エスプレッソショットを1つ追加できますか？", meaning: "에스프레소 샷을 하나 추가할 수 있나요?" }],
            vocabulary: [{ word: "追加(ついか)", meaning: "추가" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、可能です！ホットラテのLサイズにショット追加ですね。他にございますか？",
            translation: "네, 가능합니다! 따뜻한 라떼 L 사이즈에 샷 추가 말씀이시죠. 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "他にございますか？", meaning: "그 밖에 더 주문하실 것이 있으신가요?" }],
            vocabulary: [{ word: "可能(かのう)", meaning: "가능" }, { word: "他(ほか)に", meaning: "그 밖에, 외에" }]
          },
          {
            role: "손님", side: "right",
            text: "いえ、以上です。あと、温度を熱めにしていただけますか？",
            translation: "네, 그게 전부입니다. 아, 그리고 온도를 좀 더 뜨겁게 해 주실 수 있나요?",
            expressions: [{ phrase: "温度を熱めにしていただけますか？", meaning: "음료 온도를 평소보다 뜨겁게(Extra hot) 해 주실 수 있나요?" }],
            vocabulary: [{ word: "以上(いじょう)", meaning: "이상, 끝" }, { word: "温度(おんど)", meaning: "온도" }, { word: "熱め(あつめ)", meaning: "더 뜨겁게" }]
          }
        ]
      },
      {
        id: 6,
        title: "매장 와이파이 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、店内で使える無料Wi-Fiはありますか？",
            translation: "실례합니다, 매장 안에서 쓸 수 있는 무료 와이파이가 있나요?",
            expressions: [{ phrase: "店内で使える無料Wi-Fi", meaning: "매장 내에서 사용 가능한 무료 와이파이" }],
            vocabulary: [{ word: "店内(てんない)", meaning: "매장 내" }, { word: "使える(つかえる)", meaning: "사용할 수 있다" }, { word: "無料(むりょう)", meaning: "무료" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、ございます。ネットワーク名は「Cafe_Guest」です。",
            translation: "네, 있습니다. 네트워크 이름은 'Cafe_Guest'입니다.",
            expressions: [{ phrase: "ネットワーク名は〜です", meaning: "와이파이 네트워크 이름은 ~입니다" }],
            vocabulary: [{ word: "ネットワーク名(めい)", meaning: "네트워크 이름" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。接続するのにパスワードは必要ですか？",
            translation: "감사합니다. 연결하는 데 비밀번호가 필요한가요?",
            expressions: [{ phrase: "接続するのにパスワードは必要ですか？", meaning: "접속(연결)하는 데 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "接続(せつぞく)する", meaning: "접속하다, 연결하다" }, { word: "必要(ひつよう)", meaning: "필요" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、パスワードはレシートの一番下に印字されています。",
            translation: "네, 비밀번호는 영수증 맨 아래쪽에 인쇄되어 있습니다.",
            expressions: [{ phrase: "レシートの一番下に", meaning: "영수증 가장 아랫부분에" }],
            vocabulary: [{ word: "一番下(いちばんした)", meaning: "맨 아래, 최하단" }, { word: "印字(いんじ)される", meaning: "인쇄되다, 찍히다" }]
          },
          {
            role: "손님", side: "right",
            text: "あ、先ほどレシートを捨ててしまったのですが、教えていただけますか？",
            translation: "아, 아까 영수증을 버려버렸는데 비밀번호를 알려주실 수 있나요?",
            expressions: [{ phrase: "レシートを捨ててしまったのですが", meaning: "영수증을 버리고 말았는데요" }],
            vocabulary: [{ word: "先ほど(さきほど)", meaning: "아까, 방금 전" }, { word: "捨てる(すてる)", meaning: "버리다" }, { word: "教える(おしえる)", meaning: "알려주다, 가르치다" }]
          },
          {
            role: "직원", side: "left",
            text: "もちろんです！すべて英語の小文字で「coffee1234」です。",
            translation: "물론이죠! 모두 영어 소문자로 'coffee1234'입니다.",
            expressions: [{ phrase: "すべて英語の小文字で", meaning: "모두 알파벳 소문자로 (대문자는 大文字(おおもじ))" }],
            vocabulary: [{ word: "英語(えいご)", meaning: "영어, 알파벳" }, { word: "小文字(こもじ)", meaning: "소문자" }]
          }
        ]
      },
      {
        id: 7,
        title: "콘센트 있는 좌석 위치 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、スマホの充電が切れそうなのですが、コンセントのある席はありますか？",
            translation: "실례합니다, 스마트폰 배터리가 다 되어 가는데 콘센트가 있는 좌석이 있나요?",
            expressions: [{ phrase: "充電が切れそうなのですが", meaning: "배터리(충전)가 다 닳아 꺼질 것 같은데요" }, { phrase: "コンセントのある席", meaning: "전기 콘센트가 있는 자리" }],
            vocabulary: [{ word: "充電(じゅうでん)", meaning: "충전, 배터리" }, { word: "切れる(きれる)", meaning: "(배터리 등이) 다 되다, 끊기다" }, { word: "席(せき)", meaning: "좌석, 자리" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、窓際のカウンター席と、中央の大きなテーブルの足元にコンセントがございます。",
            translation: "네, 창가 쪽 카운터석과 중앙 큰 테이블 아래쪽에 콘센트가 있습니다.",
            expressions: [{ phrase: "窓際のカウンター席", meaning: "창가 쪽 바(카운터) 좌석" }],
            vocabulary: [{ word: "窓際(まどぎわ)", meaning: "창가" }, { word: "中央(ちゅうおう)", meaning: "중앙" }, { word: "大きな(おおきな)", meaning: "큰" }, { word: "足元(あしもと)", meaning: "발밑, 아래쪽" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！ノートパソコンを繋いで少し作業しても大丈夫ですか？",
            translation: "다행이네요! 노트북을 연결해서 잠시 작업을 좀 해도 괜찮을까요?",
            expressions: [{ phrase: "少し作業しても大丈夫ですか？", meaning: "잠시 작업을 해도 괜찮을까요?" }],
            vocabulary: [{ word: "繋ぐ(つなぐ)", meaning: "(전원·선을) 연결하다, 꽂다" }, { word: "少し(すこし)", meaning: "조금, 잠시" }, { word: "作業(さぎょう)", meaning: "작업, 업무" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、平日はお席の時間制限もございませんので、ごゆっくりどうぞ。",
            translation: "네, 평일에는 좌석 이용 시간제한도 없으니 편하게 계세요.",
            expressions: [{ phrase: "お席の時間制限もございません", meaning: "좌석 이용 시간제한도 없습니다" }],
            vocabulary: [{ word: "平日(へいじつ)", meaning: "평일" }, { word: "時間制限(じかんせいげん)", meaning: "시간제한" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。ちなみに、スマホの充電器の貸し出しはありますか？",
            translation: "감사합니다. 혹시 스마트폰 충전기 대여도 해 주시나요?",
            expressions: [{ phrase: "充電器の貸し出しはありますか？", meaning: "충전기를 빌려주기도(대여도) 하나요?" }],
            vocabulary: [{ word: "充電器(じゅうでんき)", meaning: "충전기" }, { word: "貸し出し(かしだし)", meaning: "대여, 대출" }]
          },
          {
            role: "직원", side: "left",
            text: "申し訳ございませんが、貸し出しは行っておりませんので、ご自身の充電器をお使いください。",
            translation: "죄송하지만 충전기 대여는 하지 않아서, 본인의 개인 충전기를 사용해 주셔야 합니다.",
            expressions: [{ phrase: "ご自身の充電器をお使いください", meaning: "본인의 충전기를 사용해 주십시오" }],
            vocabulary: [{ word: "申し訳(もうしわけ)ございません", meaning: "대단히 죄송합니다" }, { word: "行う(おこなう)", meaning: "행하다, 실시하다" }, { word: "ご自身(じしん)", meaning: "자기 자신, 본인" }]
          }
        ]
      },
      {
        id: 8,
        title: "주문한 음료가 잘못 나왔을 때 교환 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "42番のお客様、店内用のホットカフェラテをお待たせいたしました！",
            translation: "42번 손님, 매장용 따뜻한 카페라떼 나왔습니다!",
            expressions: [{ phrase: "42番のお客様", meaning: "주문번호 42번 손님" }, { phrase: "お待たせいたしました", meaning: "오래 기다리셨습니다" }],
            vocabulary: [{ word: "番(ばん)", meaning: "~번 (번호)" }, { word: "お客様(おきゃくさま)", meaning: "손님, 고객님" }, { word: "店内用(てんないよう)", meaning: "매장 취식용" }]
          },
          {
            role: "손님", side: "right",
            text: "すみません、42番なのですが、注文した商品と違うようです。",
            translation: "실례합니다, 제가 42번인데요, 주문한 상품과 다른 것 같습니다.",
            expressions: [{ phrase: "注文した商品と違うようです", meaning: "제가 주문한 상품(메뉴)과 다른 것 같습니다" }],
            vocabulary: [{ word: "注文(ちゅうもん)", meaning: "주문" }, { word: "商品(しょうひん)", meaning: "상품, 메뉴" }, { word: "違う(ちがう)", meaning: "다르다" }]
          },
          {
            role: "직원", side: "left",
            text: "あ、申し訳ございません！もともとのご注文は何でしたか？",
            translation: "아, 죄송합니다! 원래 주문하신 메뉴가 무엇이었나요?",
            expressions: [{ phrase: "もともとのご注文は何でしたか？", meaning: "원래 주문하셨던 메뉴는 무엇이었나요?" }],
            vocabulary: [{ word: "もともと", meaning: "원래, 애초에" }, { word: "何(なん)でしたか", meaning: "무엇이었습니까" }]
          },
          {
            role: "손님", side: "right",
            text: "豆乳に変更したアイスのバニララテを注文しました。こちらがレシートです。",
            translation: "두유로 변경한 아이스 바닐라 라떼를 주문했어요. 여기 영수증이 있습니다.",
            expressions: [{ phrase: "豆乳に変更した〜", meaning: "두유로 변경한 ~" }, { phrase: "こちらがレシートです", meaning: "여기 영수증이 있습니다" }],
            vocabulary: [{ word: "豆乳(とうにゅう)", meaning: "두유" }, { word: "変更(へんこう)する", meaning: "변경하다" }]
          },
          {
            role: "직원", side: "left",
            text: "大変失礼いたしました！すぐにアイスのソイバニララテをお作り直しいたします。",
            translation: "정말 실례했습니다! 지금 바로 아이스 두유 바닐라 라떼로 다시 만들어 드리겠습니다.",
            expressions: [{ phrase: "お作り直しいたします", meaning: "새로 다시 만들어 드리겠습니다" }],
            vocabulary: [{ word: "大変(たいへん)", meaning: "대단히, 매우" }, { word: "失礼(しつれい)いたしました", meaning: "실례했습니다, 죄송합니다" }, { word: "作り直し(つくりなおし)", meaning: "다시 만듦" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。牛乳でお腹が痛くなりやすいので、確認してよかったです。",
            translation: "감사합니다. 우유를 마시면 배가 자주 아파서(유당불내증이 있어서) 확인하길 잘했네요.",
            expressions: [{ phrase: "お腹が痛くなりやすい", meaning: "배가 쉽게 아파지다(배탈이 잘 나다)" }],
            vocabulary: [{ word: "牛乳(ぎゅうにゅう)", meaning: "우유" }, { word: "お腹(おなか)", meaning: "배" }, { word: "痛い(いたい)", meaning: "아프다" }, { word: "確認(かくにん)する", meaning: "확인하다" }]
          }
        ]
      },
      {
        id: 9,
        title: "텀블러 할인 및 개인 컵 사용 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ。本日のお飲み物は何になさいますか？",
            translation: "어서 오세요. 오늘 음료는 어떤 것으로 하시겠습니까?",
            expressions: [{ phrase: "本日のお飲み物", meaning: "오늘의 음료" }],
            vocabulary: [{ word: "本日(ほんじつ)", meaning: "오늘, 금일" }, { word: "飲み物(のみもの)", meaning: "음료" }]
          },
          {
            role: "손님", side: "right",
            text: "マイタンブラーを持ってきたのですが、これにアイスのキャラメルマキアートを入れてもらえますか？",
            translation: "개인 텀블러를 가져왔는데요, 여기에 아이스 카라멜 마키아토를 담아 주실 수 있나요?",
            expressions: [{ phrase: "マイタンブラーを持ってきたのですが", meaning: "개인 텀블러를 가져왔는데요" }, { phrase: "これに〜を入れてもらえますか？", meaning: "이 용기에 ~을 담아 주실 수 있나요?" }],
            vocabulary: [{ word: "持ってくる(もってくる)", meaning: "가지고 오다" }, { word: "入れる(いれる)", meaning: "넣다, 담다" }]
          },
          {
            role: "직원", side: "left",
            text: "もちろんです！タンブラーの容量は何ミリリットルですか？",
            translation: "물론이죠! 텀블러 용량이 몇 밀리리터(mL)인가요?",
            expressions: [{ phrase: "タンブラーの容量", meaning: "텀블러의 용량" }],
            vocabulary: [{ word: "容量(ようりょう)", meaning: "용량" }, { word: "何(なん)ミリリットル", meaning: "몇 밀리리터" }]
          },
          {
            role: "손님", side: "right",
            text: "470ミリリットルなので、Mサイズがちょうど入ると思います。",
            translation: "470mL짜리라서 M 사이즈가 딱 맞게 들어갈 것 같아요.",
            expressions: [{ phrase: "Mサイズがちょうど入る", meaning: "M 사이즈 용량이 딱 맞게 들어가다" }],
            vocabulary: [{ word: "入る(はいる)", meaning: "들어가다" }, { word: "思う(おもう)", meaning: "생각하다" }]
          },
          {
            role: "직원", side: "left",
            text: "承知いたしました。お預かりする前に、フタを外していただけますか？",
            translation: "알겠습니다. 텀블러를 건네받기 전에 뚜껑을 열어서 빼 주시겠어요?",
            expressions: [{ phrase: "フタを外していただけますか？", meaning: "뚜껑을 분리해(열어) 주실 수 있나요?" }],
            vocabulary: [{ word: "預かる(あずかる)", meaning: "맡다, 건네받다" }, { word: "前(まえ)に", meaning: "~하기 전에" }, { word: "外す(はずす)", meaning: "(뚜껑 등을) 떼어내다, 분리하다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、どうぞ！マイタンブラーを使うと割引はありますか？",
            translation: "네, 여기 있습니다! 개인 텀블러를 사용하면 할인이 되나요?",
            expressions: [{ phrase: "マイタンブラーを使うと割引はありますか？", meaning: "개인 텀블러를 쓰면 할인이 있나요?" }],
            vocabulary: [{ word: "使う(つかう)", meaning: "사용하다" }, { word: "割引(わりびき)", meaning: "할인" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、カップ割引で30円引きになり、お会計は490円になります。",
            translation: "네, 컵 할인으로 30엔이 할인되어 총 결제 금액은 490엔입니다.",
            expressions: [{ phrase: "30円引きになり", meaning: "30엔 할인이 적용되어" }],
            vocabulary: [{ word: "引き(びき)", meaning: "(금액) 할인, 차감" }, { word: "会計(かいけい)", meaning: "계산, 결제 금액" }]
          }
        ]
      },
      {
        id: 10,
        title: "케이크 포크와 냅킨 추가 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "アイスティーとイチゴのチーズケーキでございます。ごゆっくりどうぞ！",
            translation: "주문하신 아이스티와 딸기 치즈케이크 나왔습니다. 편히 드세요!",
            expressions: [{ phrase: "ごゆっくりどうぞ", meaning: "천천히 편하게 즐기세요" }],
            vocabulary: [{ word: "イチゴ", meaning: "딸기 (苺)" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！ケーキを一緒に分けて食べるので、フォークをもう1ついただけますか？",
            translation: "감사합니다! 케이크를 같이 나눠 먹으려고 하는데, 포크를 하나 더 주시겠어요?",
            expressions: [{ phrase: "フォークをもう1ついただけますか？", meaning: "포크를 하나 더 주실 수 있나요?" }],
            vocabulary: [{ word: "一緒(いっしょ)に", meaning: "함께, 같이" }, { word: "分ける(わける)", meaning: "나누다" }, { word: "食べる(たべる)", meaning: "먹다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！取り分け用の小皿もお持ちしましょうか？",
            translation: "알겠습니다! 덜어 드실 작은 앞접시도 하나 가져다드릴까요?",
            expressions: [{ phrase: "取り分け用の小皿", meaning: "음식을 덜어 먹는 앞접시" }],
            vocabulary: [{ word: "取り分け用(とりわけよう)", meaning: "덜어 먹기 위한 용도" }, { word: "小皿(こざら)", meaning: "작은 접시, 앞접시" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、お願いします！あと、紙ナプキンも何枚かいただけますか？",
            translation: "네, 부탁드립니다! 그리고 종이 냅킨도 몇 장 더 주실 수 있나요?",
            expressions: [{ phrase: "紙ナプキンも何枚かいただけますか？", meaning: "종이 냅킨도 몇 장 받을 수 있을까요?" }],
            vocabulary: [{ word: "紙(かみ)ナプキン", meaning: "종이 냅킨" }, { word: "何枚(なんまい)か", meaning: "(종이·접시 등) 몇 장" }]
          },
          {
            role: "직원", side: "left",
            text: "どうぞ。追加のナプキンとお水は、あちらのセルフコーナーでもご自由にお取りいただけます。",
            translation: "여기 있습니다. 추가 냅킨과 식수는 저쪽 셀프 코너에서도 자유롭게 가져다 쓰실 수 있어요.",
            expressions: [{ phrase: "ご自由にお取りいただけます", meaning: "자유롭게 가져다 쓰실 수 있습니다" }],
            vocabulary: [{ word: "追加(ついか)", meaning: "추가" }, { word: "お水(みず)", meaning: "물, 식수" }, { word: "自由(じゆう)に", meaning: "자유롭게" }]
          },
          {
            role: "손님", side: "right",
            text: "そうなんですね。教えてくださってありがとうございます！",
            translation: "아, 그렇군요. 알려주셔서 감사합니다!",
            expressions: [{ phrase: "教えてくださってありがとうございます", meaning: "친절히 알려주셔서 감사합니다" }],
            vocabulary: [{ word: "教える(おしえる)", meaning: "알려주다" }]
          }
        ]
      },
      {
        id: 11,
        title: "음료 캐리어와 빨대 챙겨 달라고 하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "お持ち帰りのドリンク4つ、お待たせいたしました！アイスラテ2つとホットアメリカーノ2つです。",
            translation: "포장 음료 네 잔 나왔습니다! 아이스 라떼 두 잔과 따뜻한 아메리카노 두 잔입니다.",
            expressions: [{ phrase: "お持ち帰りのドリンク", meaning: "테이크아웃(포장) 음료" }],
            vocabulary: [{ word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！4つ持って歩くので、ドリンクホルダーに入れていただけますか？",
            translation: "감사합니다! 네 잔을 들고 걸어가야 해서 그러는데, 음료 캐리어(홀더 트레이)에 넣어 주실 수 있나요?",
            expressions: [{ phrase: "ドリンクホルダーに入れていただけますか？", meaning: "음료 캐리어에 담아 주실 수 있나요?" }],
            vocabulary: [{ word: "持つ(もつ)", meaning: "들다" }, { word: "歩く(あるく)", meaning: "걷다" }, { word: "入れる(いれる)", meaning: "넣다, 담다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！カップが倒れないように4個用のトレーにお入れして袋に入れますね。",
            translation: "알겠습니다! 컵이 쓰러지지 않도록 4구짜리 트레이에 고정해서 봉투에 넣어 드리겠습니다.",
            expressions: [{ phrase: "カップが倒れないように", meaning: "컵이 넘어지지(쓰러지지) 않도록" }],
            vocabulary: [{ word: "倒れる(たおれる)", meaning: "쓰러지다, 넘어지다" }, { word: "4個用(よんこよう)", meaning: "4개용, 4구용" }, { word: "袋(ふくろ)", meaning: "봉투" }]
          },
          {
            role: "손님", side: "right",
            text: "助かります！こぼれないように、ホットドリンクの飲み口にシールか栓をしてもらえますか？",
            translation: "다행이네요! 쏟아지지 않도록 따뜻한 음료 마시는 입구에 방지 스티커나 마개를 해 주실 수 있나요?",
            expressions: [{ phrase: "ホットドリンクの飲み口", meaning: "따뜻한 음료 뚜껑의 마시는 입구" }],
            vocabulary: [{ word: "助かる(たすかる)", meaning: "도움이 되다" }, { word: "飲み口(のみぐち)", meaning: "컵 뚜껑의 마시는 구멍" }, { word: "栓(せん)", meaning: "마개 (스플래시 스틱)" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、飲み口に漏れ防止のシールをお貼りしました。アイス用のストローは2本お入れしますね。",
            translation: "네, 마시는 입구에 누수 방지 스티커를 붙여 드렸습니다. 아이스 음료용 빨대는 2개 넣어 드릴게요.",
            expressions: [{ phrase: "漏れ防止のシール", meaning: "음료가 새는 것을 막는 방지 스티커" }],
            vocabulary: [{ word: "漏れ防止(もれぼうし)", meaning: "누수 방지, 넘침 방지" }, { word: "貼る(はる)", meaning: "붙이다" }, { word: "2本(にほん)", meaning: "(빨대 등 가늘고 긴 물건) 2개" }]
          },
          {
            role: "손님", side: "right",
            text: "丁寧に包んでくださってありがとうございます！",
            translation: "꼼꼼하게 포장해 주셔서 감사합니다!",
            expressions: [{ phrase: "丁寧に包んでくださって", meaning: "정성스럽고 꼼꼼하게 포장해 주셔서" }],
            vocabulary: [{ word: "丁寧(ていねい)に", meaning: "정중하게, 꼼꼼하게" }, { word: "包む(つつむ)", meaning: "싸다, 포장하다" }]
          }
        ]
      },
      {
        id: 12,
        title: "원두 종류(산미/고소함) 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "アイスアメリカーノをお願いします。こちらはコーヒー豆の種類を選べますか？",
            translation: "아이스 아메리카노 부탁합니다. 여기는 커피 원두 종류를 고를 수 있나요?",
            expressions: [{ phrase: "コーヒー豆の種類を選べますか？", meaning: "커피 원두의 종류를 선택할 수 있나요?" }],
            vocabulary: [{ word: "豆(まめ)", meaning: "콩, 원두" }, { word: "種類(しゅるい)", meaning: "종류" }, { word: "選ぶ(えらぶ)", meaning: "고르다, 선택하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！深煎りのハウスブレンドと、浅煎りのシングルオリジンの2種類からお選びいただけます。",
            translation: "네! 다크 로스트(강배전)인 하우스 블렌드와 라이트 로스트(약배전)인 싱글 오리진 두 종류 중에서 고르실 수 있습니다.",
            expressions: [{ phrase: "2種類からお選びいただけます", meaning: "두 가지 종류 중에서 선택하실 수 있습니다" }],
            vocabulary: [{ word: "深煎り(ふかいり)", meaning: "강배전 (진하게 볶은 원두)" }, { word: "浅煎り(あさいり)", meaning: "약배전 (산미를 살려 볶은 원두)" }]
          },
          {
            role: "손님", side: "right",
            text: "それぞれの味の特徴はどのような感じですか？",
            translation: "각 원두의 맛 특징은 어떤 느낌인가요?",
            expressions: [{ phrase: "味の特徴はどのような感じですか？", meaning: "맛의 특징은 어떤 느낌인가요?" }],
            vocabulary: [{ word: "味(あじ)", meaning: "맛" }, { word: "特徴(とくちょう)", meaning: "특징" }, { word: "感じ(かんじ)", meaning: "느낌" }]
          },
          {
            role: "직원", side: "left",
            text: "ハウスブレンドは酸味が少なくて香ばしく、シングルオリジンはフルーティーで華やかな酸味があります。",
            translation: "하우스 블렌드는 산미가 적고 고소하며, 싱글 오리진은 과일 향이 나고 화사한 산미가 있습니다.",
            expressions: [{ phrase: "酸味が少なくて香ばしく", meaning: "산미(신맛)가 적고 고소하며" }],
            vocabulary: [{ word: "酸味(さんみ)", meaning: "산미, 신맛" }, { word: "香ばしい(こうばしい)", meaning: "고소하다, 향기롭다" }, { word: "華やか(はなやか)", meaning: "화사함, 화려함" }]
          },
          {
            role: "손님", side: "right",
            text: "酸っぱいコーヒーより香ばしい方が好きなので、深煎りのハウスブレンドでお願いします。",
            translation: "신맛 나는 커피보다 고소한 쪽을 좋아해서, 강배전 하우스 블렌드로 부탁합니다.",
            expressions: [{ phrase: "AよりBの方が好きなので", meaning: "A보다 B 쪽을 더 좋아해서" }],
            vocabulary: [{ word: "酸っぱい(すっぱい)", meaning: "시다, 신맛이 나다" }, { word: "方(ほう)", meaning: "~쪽, ~편" }, { word: "好き(すき)", meaning: "좋아함" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！ハウスブレンドのアイスアメリカーノをすぐにお淹れしますね。",
            translation: "알겠습니다! 하우스 블렌드로 내린 아이스 아메리카노를 바로 준비해 드리겠습니다.",
            expressions: [{ phrase: "すぐにお淹れしますね", meaning: "바로 (커피·차를) 내려 드리겠습니다" }],
            vocabulary: [{ word: "淹れる(いれる)", meaning: "(커피·차 등을) 내리다, 우리다" }]
          }
        ]
      },
      {
        id: 13,
        title: "얼음 없이 차가운 음료 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "こんにちは！ご注文をお伺いいたします。",
            translation: "안녕하세요! 주문을 도와드리겠습니다.",
            expressions: [{ phrase: "ご注文をお伺いいたします", meaning: "주문을 받겠습니다" }],
            vocabulary: [{ word: "注文(ちゅうもん)", meaning: "주문" }, { word: "伺う(うかがう)", meaning: "여쭙다, 듣다" }]
          },
          {
            role: "손님", side: "right",
            text: "アイスの抹茶ラテをMサイズでお願いします。氷なしでお願いできますか？",
            translation: "아이스 말차(녹차) 라떼 M 사이즈로 부탁합니다. 얼음은 아예 빼 주실 수 있나요?",
            expressions: [{ phrase: "氷なしでお願いできますか？", meaning: "얼음 없이(No ice) 해 주실 수 있나요?" }],
            vocabulary: [{ word: "抹茶(まっちゃ)", meaning: "말차, 녹차" }, { word: "氷(こおり)なし", meaning: "얼음 없음" }]
          },
          {
            role: "직원", side: "left",
            text: "氷なしですね。氷を抜くとカップの液量が少し減ってしまいますが、よろしいでしょうか？",
            translation: "얼음 빼기 말씀이시죠. 얼음을 빼면 컵의 음료 높이가 조금 줄어드는데 괜찮으신가요?",
            expressions: [{ phrase: "氷を抜くと〜が減ってしまいます", meaning: "얼음을 빼면 ~이 줄어들게 됩니다" }],
            vocabulary: [{ word: "抜く(ぬく)", meaning: "빼다" }, { word: "液量(えきりょう)", meaning: "음료(액체)의 양" }, { word: "減る(へる)", meaning: "줄어들다" }]
          },
          {
            role: "손님", side: "right",
            text: "あ、そうなんですね。減った分を冷たいミルクで満たしてもらうことはできますか？",
            translation: "아, 그렇군요. 혹시 줄어든 만큼 차가운 우유로 채워 주실 수도 있나요?",
            expressions: [{ phrase: "冷たいミルクで満たしてもらう", meaning: "차가운 우유로 가득 채워 받다" }],
            vocabulary: [{ word: "分(ぶん)", meaning: "분량, 몫" }, { word: "冷たい(つめたい)", meaning: "차가운" }, { word: "満たす(みたす)", meaning: "채우다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、追加料金なしで冷たいミルクを多めにお入れできますよ！",
            translation: "네, 추가 요금 없이 차가운 우유를 넉넉히 채워 드릴 수 있습니다!",
            expressions: [{ phrase: "追加料金なしで", meaning: "추가 요금 없이, 무료로" }, { phrase: "ミルクを多めに", meaning: "우유를 많이(가득)" }],
            vocabulary: [{ word: "追加料金(ついかりょうきん)", meaning: "추가 요금" }, { word: "多め(おおめ)", meaning: "좀 더 많이, 넉넉히" }]
          },
          {
            role: "손님", side: "right",
            text: "それはうれしいです！氷なしのミルク多めでお願いします。",
            translation: "정말 좋네요! 얼음 빼고 우유 많이로 부탁드립니다.",
            expressions: [{ phrase: "氷なしのミルク多めで", meaning: "얼음 없이 우유 많이로 (일본 카페에서 자주 쓰는 커스텀 주문법)" }],
            vocabulary: [{ word: "氷(こおり)", meaning: "얼음" }]
          }
        ]
      },
      {
        id: 14,
        title: "화장실 위치 및 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、お手洗いはどこにありますか？",
            translation: "실례합니다, 화장실은 어디에 있나요?",
            expressions: [{ phrase: "お手洗いはどこにありますか？", meaning: "화장실은 어디에 있나요? ('トイレ'보다 정중한 표현)" }],
            vocabulary: [{ word: "お手洗い(おてあらい)", meaning: "화장실" }]
          },
          {
            role: "직원", side: "left",
            text: "受取カウンターを過ぎて、左側の廊下を進んだ奥にございます。",
            translation: "픽업 카운터를 지나서 왼쪽 복도를 따라 쭉 들어가신 안쪽에 있습니다.",
            expressions: [{ phrase: "左側の廊下を進んだ奥", meaning: "왼쪽 복도를 따라 들어간 안쪽" }],
            vocabulary: [{ word: "受取(うけとり)", meaning: "수령, 픽업" }, { word: "過ぎる(すぎる)", meaning: "지나가다" }, { word: "左側(ひだりがわ)", meaning: "왼쪽" }, { word: "廊下(ろうか)", meaning: "복도" }, { word: "奥(おく)", meaning: "안쪽, 끝" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。入るのに鍵や暗証番号は必要ですか？",
            translation: "감사합니다. 들어가려면 열쇠나 비밀번호가 필요한가요?",
            expressions: [{ phrase: "鍵や暗証番号は必要ですか？", meaning: "열쇠나 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "入る(はいる)", meaning: "들어가다" }, { word: "鍵(かぎ)", meaning: "열쇠" }, { word: "暗証番号(あんしょうばんごう)", meaning: "비밀번호(숫자 코드)" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、ドアにボタン式の鍵がついています。「2580」を押してからシャープを押してください。",
            translation: "네, 문에 버튼식 번호키가 있습니다. '2580'을 누른 뒤 우물 정(#) 버튼을 눌러주세요.",
            expressions: [{ phrase: "「2580」を押してからシャープを押す", meaning: "2580을 누른 후 # 버튼을 누르다" }],
            vocabulary: [{ word: "ボタン式(しき)", meaning: "버튼식" }, { word: "押す(おす)", meaning: "누르다" }]
          },
          {
            role: "손님", side: "right",
            text: "「2580」とシャープですね。ありがとうございます！",
            translation: "'2580'과 # 버튼이요. 감사합니다!",
            expressions: [{ phrase: "〜とシャープですね", meaning: "~와 우물 정(#) 자 말씀이시죠" }],
            vocabulary: [{ word: "シャープ", meaning: "# 기호 (우물 정 자)" }]
          },
          {
            role: "직원", side: "left",
            text: "どういたしまして。もし開かない場合はお気軽にお声がけください。",
            translation: "천만에요. 혹시 문이 열리지 않으면 편하게 말씀해 주세요.",
            expressions: [{ phrase: "お気軽にお声がけください", meaning: "부담 없이 편하게 말을 걸어 주세요" }],
            vocabulary: [{ word: "開く(あく)", meaning: "(문이) 열리다" }, { word: "場合(ばあい)", meaning: "경우" }, { word: "気軽(きがる)に", meaning: "부담 없이, 편하게" }]
          }
        ]
      },
      {
        id: 15,
        title: "테이블 위 흘린 음료 정리 도움 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、うっかりコップを倒して、テーブルにコーヒーをこぼしてしまいました。",
            translation: "실례합니다, 실수로 컵을 넘어뜨려서 테이블에 커피를 쏟아버렸어요.",
            expressions: [{ phrase: "うっかりコップを倒して", meaning: "실수로(깜빡하고) 컵을 넘어뜨려서" }, { phrase: "コーヒーをこぼしてしまいました", meaning: "커피를 쏟고 말았습니다" }],
            vocabulary: [{ word: "倒す(たおす)", meaning: "쓰러뜨리다, 넘어뜨리다" }, { word: "こぼす", meaning: "(액체를) 쏟다, 흘리다" }]
          },
          {
            role: "직원", side: "left",
            text: "大丈夫ですか？お洋服は汚れていませんか？やけどはございませんか？",
            translation: "괜찮으신가요? 옷은 버리지 않으셨나요? 데이지는 않으셨고요?",
            expressions: [{ phrase: "お洋服は汚れていませんか？", meaning: "옷에 묻어 더러워지진 않았나요?" }],
            vocabulary: [{ word: "大丈夫(だいじょうぶ)", meaning: "괜찮음" }, { word: "洋服(ようふく)", meaning: "옷, 의류" }, { word: "汚れる(よごれる)", meaning: "더러워지다, 묻다" }, { word: "やけど", meaning: "화상 (火傷)" }]
          },
          {
            role: "손님", side: "right",
            text: "アイスコーヒーだったので私は大丈夫です。拭くための台拭きをいただけますか？",
            translation: "아이스커피여서 저는 괜찮습니다. 닦을 수 있게 행주를 좀 주실 수 있나요?",
            expressions: [{ phrase: "拭くための台拭き", meaning: "테이블을 닦기 위한 행주" }],
            vocabulary: [{ word: "私(わたし)", meaning: "저, 나" }, { word: "拭く(ふく)", meaning: "닦다" }, { word: "台拭き(だいふき)", meaning: "식탁용 행주" }]
          },
          {
            role: "직원", side: "left",
            text: "お気になさらないでください！私どもで片付けますので、お隣の席へご移動いただけますか？",
            translation: "신경 쓰지 마세요! 저희가 치울 테니 옆자리로 잠시 이동해 주시겠어요?",
            expressions: [{ phrase: "お気になさらないでください", meaning: "전혀 신경 쓰지 마십시오" }, { phrase: "私どもで片付けます", meaning: "저희(직원)가 치우겠습니다" }],
            vocabulary: [{ word: "気(き)にする", meaning: "신경 쓰다" }, { word: "片付ける(かたづける)", meaning: "치우다, 정리하다" }, { word: "隣(となり)", meaning: "옆" }, { word: "移動(いどう)", meaning: "이동" }]
          },
          {
            role: "손님", side: "right",
            text: "ご迷惑をおかけして本当にすみません。ありがとうございます。",
            translation: "폐를 끼쳐서 정말 죄송합니다. 감사합니다.",
            expressions: [{ phrase: "ご迷惑をおかけしてすみません", meaning: "폐(번거로움)를 끼쳐 드려 죄송합니다" }],
            vocabulary: [{ word: "迷惑(めいわく)", meaning: "폐, 민폐" }, { word: "本当(ほんとう)に", meaning: "정말로" }]
          },
          {
            role: "직원", side: "left",
            text: "とんでもございません！新しいコーヒーも無料でお持ちしますので、どうぞおかけになってお待ちください。",
            translation: "별말씀을요! 새 커피도 무료로 다시 가져다드릴 테니 자리에 앉아서 기다려 주세요.",
            expressions: [{ phrase: "新しいコーヒーも無料でお持ちします", meaning: "새 커피도 무료 서비스로 가져다드리겠습니다" }],
            vocabulary: [{ word: "新しい(あたらしい)", meaning: "새로운" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "待つ(まつ)", meaning: "기다리다" }]
          }
        ]
      },
      {
        id: 16,
        title: "영수증 발급 및 분할 결제 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "ホットサンド2つとアイスラテ2つで、合計2,400円になります。",
            translation: "핫샌드위치 두 개와 아이스 라떼 두 잔 해서 총 2,400엔입니다.",
            expressions: [{ phrase: "合計〜円になります", meaning: "합계 ~엔입니다" }],
            vocabulary: [{ word: "合計(ごうけい)", meaning: "합계, 총액" }, { word: "円(えん)", meaning: "엔" }]
          },
          {
            role: "손님", side: "right",
            text: "クレジットカード2枚で、半分ずつ別々に支払うことはできますか？",
            translation: "신용카드 두 장으로 절반씩 따로 분할 결제할 수 있나요?",
            expressions: [{ phrase: "半分ずつ別々に支払う", meaning: "절반씩 나누어 각각 따로 계산하다 (더치페이는 割り勘(わりかん))" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "(카드·종이 등) 두 장" }, { word: "半分(はんぶん)ずつ", meaning: "절반씩" }, { word: "別々(べつべつ)に", meaning: "따로따로, 개별로" }, { word: "支払う(しはらう)", meaning: "지불하다, 결제하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、お一人様1,200円ずつに分けてお会計いたします。まず1枚目の方からタッチをお願いします。",
            translation: "네, 한 분당 1,200엔씩 나누어 결제해 드리겠습니다. 먼저 첫 번째 분 카드부터 터치해 주세요.",
            expressions: [{ phrase: "お一人様〜円ずつに分けて", meaning: "1인당 ~엔씩 나누어서" }],
            vocabulary: [{ word: "お一人様(ひとりさま)", meaning: "한 분, 1인" }, { word: "分ける(わける)", meaning: "나누다" }, { word: "1枚目(いちまいめ)", meaning: "첫 번째 장(카드)" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、タッチしました。私の分のレシートと領収書を出していただけますか？",
            translation: "네, 터치했습니다. 제 결제분 영수증을 뽑아 주시겠어요?",
            expressions: [{ phrase: "レシートと領収書を出していただけますか？", meaning: "영수증을 발급(출력)해 주실 수 있나요?" }],
            vocabulary: [{ word: "私(わたし)の分(ぶん)", meaning: "내 몫, 내 결제분" }, { word: "領収書(りょうしゅうしょ)", meaning: "공식 영수증" }, { word: "出す(だす)", meaning: "내어주다, 발급하다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。こちらが1人目の控えです。続いて2枚目の方もタッチをお願いします。",
            translation: "알겠습니다. 여기 첫 번째 분 영수증입니다. 이어서 두 번째 분도 카드를 터치해 주세요.",
            expressions: [{ phrase: "続いて2枚目の方も", meaning: "이어서 두 번째 카드로 결제하실 분도" }],
            vocabulary: [{ word: "1人目(ひとりめ)", meaning: "첫 번째 사람" }, { word: "控え(ひかえ)", meaning: "영수증 전표(고객 보관용)" }, { word: "続いて(つづいて)", meaning: "이어서, 계속해서" }]
          },
          {
            role: "손님", side: "right",
            text: "友達も決済できました。別々に計算してくださってありがとうございます！",
            translation: "친구도 결제 완료되었네요. 따로 계산해 주셔서 감사합니다!",
            expressions: [{ phrase: "別々に計算してくださって", meaning: "따로따로 나누어 계산해 주셔서" }],
            vocabulary: [{ word: "友達(ともだち)", meaning: "친구" }, { word: "決済(けっさい)", meaning: "결제" }, { word: "計算(けいさん)", meaning: "계산" }]
          }
        ]
      },
      {
        id: 17,
        title: "브런치 세트 가능 시간 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "こんにちは！外の看板でブランチセットを見たのですが、今も注文できますか？",
            translation: "안녕하세요! 밖의 간판에서 브런치 세트를 봤는데, 지금도 주문할 수 있나요?",
            expressions: [{ phrase: "外の看板で〜を見たのですが", meaning: "밖의 안내판(간판)에서 ~을 봤는데요" }],
            vocabulary: [{ word: "外(そと)", meaning: "밖, 외부" }, { word: "看板(かんばん)", meaning: "간판, 안내판" }, { word: "見る(みる)", meaning: "보다" }, { word: "今(いま)", meaning: "지금" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、ブランチセットは午後2時までご注文いただけますので、ちょうど間に合いましたよ！",
            translation: "네, 브런치 세트는 오후 2시까지 주문 가능해서 시간에 딱 맞춰 잘 오셨어요!",
            expressions: [{ phrase: "ちょうど間に合いましたよ！", meaning: "시간에 딱 맞춰 늦지 않게 오셨습니다!" }],
            vocabulary: [{ word: "午後(ごご)2時(にじ)", meaning: "오후 2시" }, { word: "間に合う(まにあう)", meaning: "(시간에) 늦지 않다, 맞추다" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！アボカドトーストのセットにはコーヒーも付いていますか？",
            translation: "다행이네요! 아보카도 토스트 세트에는 커피도 포함되어 있나요?",
            expressions: [{ phrase: "〜にはコーヒーも付いていますか？", meaning: "~에는 커피도 세트로 포함되어 나오나요?" }],
            vocabulary: [{ word: "付く(つく)", meaning: "(세트로) 포함되다, 딸려 나오다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、ブレンドコーヒーまたは紅茶が付いており、プラス100円でカフェラテにも変更できます。",
            translation: "네, 아메리카노(블렌드 커피)나 홍차가 기본 포함이며, 100엔을 추가하시면 카페라떼로도 변경하실 수 있습니다.",
            expressions: [{ phrase: "プラス100円で〜にも変更できます", meaning: "100엔 추가로 ~로도 변경할 수 있습니다" }],
            vocabulary: [{ word: "紅茶(こうちゃ)", meaning: "홍차" }, { word: "変更(へんこう)", meaning: "변경" }]
          },
          {
            role: "손님", side: "right",
            text: "では、アボカドトーストセットをアイスラテに変更してお願いします。料理はどれくらいかかりますか？",
            translation: "그럼 아보카도 토스트 세트에 아이스 라떼로 변경해서 부탁합니다. 요리는 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "料理はどれくらいかかりますか？", meaning: "음식이 나오는 데 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "料理(りょうり)", meaning: "요리, 음식" }, { word: "かかる", meaning: "(시간이) 걸리다" }]
          },
          {
            role: "직원", side: "left",
            text: "10分ほどお時間をいただきます。こちらの呼び出しベルが鳴りましたらカウンターへお越しください！",
            translation: "약 10분 정도 걸립니다. 이 진동벨이 울리면 카운터로 와 주세요!",
            expressions: [{ phrase: "呼び出しベルが鳴りましたら", meaning: "진동벨(호출벨)이 울리면" }],
            vocabulary: [{ word: "10分(じゅっぷん)ほど", meaning: "10분 정도" }, { word: "呼び出し(よびだし)ベル", meaning: "진동벨, 호출벨" }, { word: "鳴る(なる)", meaning: "(벨이) 울리다" }]
          }
        ]
      },
      {
        id: 18,
        title: "알레르기 유발 성분(견과류 등) 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "注文の前に原材料についてお聞きしたいのですが、子どもにピーナッツとナッツ類のアレルギーがあります。",
            translation: "주문하기 전에 원재료(성분)에 대해 여쭤보고 싶은데요, 아이에게 땅콩과 견과류 알레르기가 있어요.",
            expressions: [{ phrase: "原材料についてお聞きしたいのですが", meaning: "원재료(식재료 성분)에 대해 여쭤보고 싶은데요" }],
            vocabulary: [{ word: "原材料(げんざいりょう)", meaning: "원재료, 성분" }, { word: "聞く(きく)", meaning: "묻다, 질문하다" }, { word: "子ども(こども)", meaning: "아이, 자녀" }, { word: "ナッツ類(るい)", meaning: "견과류" }]
          },
          {
            role: "직원", side: "left",
            text: "おっしゃっていただきありがとうございます！気になる商品を教えていただければ、アレルギー一覧表をお調べします。",
            translation: "미리 말씀해 주셔서 감사합니다! 보고 계신 상품을 알려주시면 알레르기 성분표를 확인해 드리겠습니다.",
            expressions: [{ phrase: "アレルギー一覧表をお調べします", meaning: "알레르기 유발 성분 일람표를 확인해 드리겠습니다" }],
            vocabulary: [{ word: "商品(しょうひん)", meaning: "상품" }, { word: "一覧表(いちらんひょう)", meaning: "일람표, 성분표" }, { word: "調べる(しらべる)", meaning: "조사하다, 확인하다" }]
          },
          {
            role: "손님", side: "right",
            text: "チョコチップスコーンやバナナブレッドにナッツは入っていますか？",
            translation: "초콜릿 칩 스콘이나 바나나 브레드에 견과류가 들어가 있나요?",
            expressions: [{ phrase: "〜にナッツは入っていますか？", meaning: "~에 견과류가 들어 있나요?" }],
            vocabulary: [{ word: "入る(はいる)", meaning: "들어가다, 함유되다" }]
          },
          {
            role: "직원", side: "left",
            text: "バナナブレッドにはクルミが入っています。スコーンには入っていませんが、同じオーブンで焼いております。",
            translation: "바나나 브레드에는 호두가 들어 있습니다. 스콘에는 들어 있지 않지만 같은 오븐에서 굽고 있어요.",
            expressions: [{ phrase: "同じオーブンで焼いております", meaning: "같은 오븐에서 구워내고 있습니다 (교차 오염 안내)" }],
            vocabulary: [{ word: "クルミ", meaning: "호두 (胡桃)" }, { word: "同じ(おなじ)", meaning: "같은, 동일한" }, { word: "焼く(やく)", meaning: "굽다" }]
          },
          {
            role: "손님", side: "right",
            text: "微量でも危ないので避けたいのですが、ナッツ不使用の個包装のお菓子はありますか？",
            translation: "미량이라도 위험해서 피하고 싶은데요, 견과류가 들어가지 않은 개별 포장 간식이 있나요?",
            expressions: [{ phrase: "ナッツ不使用の個包装のお菓子", meaning: "견과류 무첨가 개별 포장 과자(간식)" }],
            vocabulary: [{ word: "微量(びりょう)", meaning: "미량, 아주 적은 양" }, { word: "危ない(あぶない)", meaning: "위험하다" }, { word: "避ける(さける)", meaning: "피하다" }, { word: "不使用(ふしよう)", meaning: "무첨가, 사용하지 않음" }, { word: "個包装(こほうそう)", meaning: "개별 밀봉 포장" }, { word: "お菓子(おかし)", meaning: "과자, 간식" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！こちらの有機りんごジュレと米粉クッキーは、アレルゲン不使用の専用工場で作られております。",
            translation: "네! 여기 유기농 사과 젤리 파우치와 쌀가루 쿠키는 알레르기 유발 물질을 쓰지 않는 전용 공장에서 만들어졌습니다.",
            expressions: [{ phrase: "専用工場で作られております", meaning: "전용 공장에서 제조되어 교차 오염 위험이 없습니다" }],
            vocabulary: [{ word: "有機(ゆうき)", meaning: "유기농" }, { word: "米粉(こめこ)", meaning: "쌀가루" }, { word: "専用工場(せんようこうじょう)", meaning: "전용 공장" }]
          }
        ]
      },
      {
        id: 19,
        title: "마감 시간 및 라스트 오더 시간 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、まだ営業していますか？それとももうすぐ閉店ですか？",
            translation: "실례합니다, 아직 영업 중인가요? 아니면 곧 마감인가요?",
            expressions: [{ phrase: "まだ営業していますか？", meaning: "아직 영업하고 있나요?" }, { phrase: "もうすぐ閉店ですか？", meaning: "곧 폐점(마감)인가요?" }],
            vocabulary: [{ word: "営業(えいぎょう)", meaning: "영업" }, { word: "閉店(へいてん)", meaning: "폐점, 영업 마감" }]
          },
          {
            role: "직원", side: "left",
            text: "まだ営業しております！本日は夜10時閉店で、ラストオーダーは9時30分です。",
            translation: "아직 영업 중입니다! 오늘은 밤 10시 마감이고, 라스트 오더(마지막 주문)는 9시 30분입니다.",
            expressions: [{ phrase: "本日は夜10時閉店で", meaning: "오늘은 밤 10시에 문을 닫고" }],
            vocabulary: [{ word: "本日(ほんじつ)", meaning: "오늘" }, { word: "夜(よる)10時(じゅうじ)", meaning: "밤 10시" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！店内で40分ほどハーブティーを飲んでいっても大丈夫ですか？",
            translation: "다행이네요! 매장 안에서 40분 정도 허브티를 마시고 가도 괜찮을까요?",
            expressions: [{ phrase: "店内で〜を飲んでいっても大丈夫ですか？", meaning: "매장 안에서 ~을 마시고 가도 될까요?" }],
            vocabulary: [{ word: "店内(てんない)", meaning: "매장 내" }, { word: "40分(よんじゅっぷん)ほど", meaning: "40분 정도" }, { word: "飲む(のむ)", meaning: "마시다" }]
          },
          {
            role: "직원", side: "left",
            text: "もちろんです！温かい食事メニューの調理は終了しましたが、ドリンクとケーキはすべてご注文いただけます。",
            translation: "물론이죠! 따뜻한 식사 메뉴 조리는 끝났지만, 음료와 케이크는 모두 주문하실 수 있습니다.",
            expressions: [{ phrase: "調理は終了しましたが", meaning: "주방 조리는 마감되었지만" }],
            vocabulary: [{ word: "温かい(あたたかい)", meaning: "따뜻한" }, { word: "食事(しょくじ)", meaning: "식사" }, { word: "調理(ちょうり)", meaning: "조리" }, { word: "終了(しゅうりょう)", meaning: "종료, 마감" }]
          },
          {
            role: "손님", side: "right",
            text: "では、ホットのカモミールティーを2つ、店内でお願いします。",
            translation: "그럼 따뜻한 캐모마일 티 두 잔을 매장 이용으로 부탁합니다.",
            expressions: [{ phrase: "〜を2つ、店内でお願いします", meaning: "~ 두 개를 매장 취식으로 부탁합니다" }],
            vocabulary: [{ word: "2つ(ふたつ)", meaning: "두 개, 두 잔" }, { word: "店内(てんない)", meaning: "매장 내" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。閉店まで1時間を切っておりますので、持ち帰り用の紙カップでのご提供でもよろしいでしょうか？",
            translation: "알겠습니다. 마감까지 1시간이 채 남지 않아서 테이크아웃용 종이컵에 담아 드려도 괜찮으실까요?",
            expressions: [{ phrase: "閉店まで1時間を切っておりますので", meaning: "마감 시간까지 1시간도 남지 않아서" }],
            vocabulary: [{ word: "1時間(いちじかん)", meaning: "1시간" }, { word: "紙(かみ)カップ", meaning: "종이컵" }, { word: "提供(ていきょう)", meaning: "제공" }]
          }
        ]
      },
      {
        id: 20,
        title: "선물용 원두 분쇄도 지정해 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "友達へのプレゼント用に、このエチオピアのコーヒー豆を1袋買いたいです。",
            translation: "친구에게 줄 선물용으로 이 에티오피아 커피 원두를 한 봉지 사고 싶습니다.",
            expressions: [{ phrase: "友達へのプレゼント用に", meaning: "친구에게 줄 선물용으로" }],
            vocabulary: [{ word: "友達(ともだち)", meaning: "친구" }, { word: "プレゼント用(よう)", meaning: "선물용" }, { word: "1袋(ひとふくろ)", meaning: "한 봉지" }, { word: "買う(かう)", meaning: "사다, 구매하다" }]
          },
          {
            role: "직원", side: "left",
            text: "ありがとうございます！こちらは豆のままですが、このままになさいますか？それともお挽きしましょうか？",
            translation: "감사합니다! 이 제품은 갈지 않은 홀빈(통원두) 상태인데, 그대로 드릴까요? 아니면 분쇄해 드릴까요?",
            expressions: [{ phrase: "豆のままですが", meaning: "갈지 않은 통원두 상태인데" }, { phrase: "お挽きしましょうか？", meaning: "원두를 갈아(분쇄해) 드릴까요?" }],
            vocabulary: [{ word: "豆(まめ)のまま", meaning: "통원두(홀빈) 그대로" }, { word: "挽く(ひく)", meaning: "(커피 원두 등을) 갈다, 분쇄하다" }]
          },
          {
            role: "손님", side: "right",
            text: "友達の家にはコーヒーミルがないので、挽いていただけますか？",
            translation: "친구 집에는 커피 그라인더(밀)가 없어서 그러는데, 분쇄해 주실 수 있나요?",
            expressions: [{ phrase: "コーヒーミルがないので", meaning: "커피 분쇄기(그라인더)가 없어서" }],
            vocabulary: [{ word: "家(いえ)", meaning: "집" }, { word: "挽く(ひく)", meaning: "갈다, 분쇄하다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！ご友人はどのような器具でコーヒーを淹れられますか？",
            translation: "알겠습니다! 친구분께서는 어떤 추출 기구로 커피를 내려 드시나요?",
            expressions: [{ phrase: "どのような器具でコーヒーを淹れられますか？", meaning: "어떤 기구로 커피를 내려 드시나요?" }],
            vocabulary: [{ word: "ご友人(ゆうじん)", meaning: "친구분 (높임말)" }, { word: "器具(きぐ)", meaning: "기구, 도구" }, { word: "淹れる(いれる)", meaning: "(커피를) 내리다" }]
          },
          {
            role: "손님", side: "right",
            text: "紙フィルターを使うハンドドリップ用のドリッパーを使っています。",
            translation: "종이 필터를 사용하는 핸드드립용 드리퍼를 쓰고 있어요.",
            expressions: [{ phrase: "紙フィルターを使うハンドドリップ用", meaning: "종이 필터를 쓰는 핸드드립용" }],
            vocabulary: [{ word: "紙(かみ)フィルター", meaning: "종이 필터, 여과지" }, { word: "使う(つかう)", meaning: "사용하다" }]
          },
          {
            role: "직원", side: "left",
            text: "では、ペーパードリップに合う「中細挽き」でお挽きしますね。プレゼント用の小袋とシールもお付けしましょうか？",
            translation: "그럼 페이퍼 드립에 맞는 '중세분쇄(중간보다 약간 가는 입자)'로 갈아 드리겠습니다. 선물용 쇼핑백과 스티커도 챙겨 드릴까요?",
            expressions: [{ phrase: "ペーパードリップに合う「中細挽き」", meaning: "종이 필터 핸드드립에 적합한 '중세분쇄'" }],
            vocabulary: [{ word: "中細挽き(ちゅうぼそびき)", meaning: "중세분쇄 (핸드드립용 표준 굵기)" }, { word: "小袋(こぶくろ)", meaning: "작은 선물용 봉투/쇼핑백" }, { word: "付ける(つける)", meaning: "함께 챙겨 주다, 첨부하다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、お願いします！親切に対応してくださってありがとうございます。",
            translation: "네, 부탁드립니다! 친절하게 응대해 주셔서 감사합니다.",
            expressions: [{ phrase: "親切に対応してくださってありがとうございます", meaning: "친절하게 응대해 주셔서 감사합니다" }],
            vocabulary: [{ word: "親切(しんせつ)に", meaning: "친절하게" }, { word: "対応(たいおう)する", meaning: "응대하다, 대응하다" }]
          }
        ]
      }
    ],

    // ==========================================
    // 3. 중국어 (中文) - 카페 1~3번
    // ==========================================
    zh: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "您好！欢迎光临。请问今天想喝点什么？",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 음료를 드시겠어요?",
            expressions: [
              { phrase: "请问今天想喝点什么？", meaning: "오늘 무엇을 마시고 싶으신가요?" }
            ],
            vocabulary: [
              { word: "欢迎光临 (huānyíng guānglín)", meaning: "어서 오세요" },
              { word: "喝 (hē)", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！请给我一杯冰美式和一个蓝莓马芬。",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주세요.",
            expressions: [
              { phrase: "请给我 ~", meaning: "저에게 ~을 주세요" }
            ],
            vocabulary: [
              { word: "冰美式 (bīng měishì)", meaning: "아이스 아메리카노" },
              { word: "蓝莓马芬 (lánméi mǎfēn)", meaning: "블루베리 머핀" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的。请问冰美式需要中杯还是大杯？",
            translation: "네. 아이스 아메리카노는 미디엄 사이즈로 드릴까요, 라지 사이즈로 드릴까요?",
            expressions: [
              { phrase: "需要 A 还是 B？", meaning: "A로 하시겠어요, 아니면 B로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "中杯 (zhōngbēi)", meaning: "미디엄(중간) 사이즈" },
              { word: "大杯 (dàbēi)", meaning: "라지(큰) 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "要中杯，谢谢。另外，可以做成少冰吗？",
            translation: "미디엄 사이즈로 할게요, 감사합니다. 그리고 얼음을 적게 해 주실 수 있나요?",
            expressions: [
              { phrase: "可以做成少冰吗？", meaning: "얼음을 적게 만들어 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "另外 (lìngwài)", meaning: "그 밖에, 추가로" },
              { word: "少冰 (shǎobīng)", meaning: "얼음 적게 (아예 빼는 것은 去冰 qùbīng)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "没问题。请问是在这里用还是打包带走？",
            translation: "문제없습니다. 매장에서 드시나요, 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "在这里用还是打包带走？", meaning: "여기서 드시나요, 포장해 가시나요?" }
            ],
            vocabulary: [
              { word: "打包 (dǎbāo)", meaning: "포장하다" },
              { word: "带走 (dàizǒu)", meaning: "가지고 가다 (테이크아웃)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "在这里用。",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "在这里用", meaning: "여기서 먹고 가다 (매장 이용)" }
            ],
            vocabulary: [
              { word: "这里 (zhèlǐ)", meaning: "여기, 이곳" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的，一共是三十五元。您可以在这里刷卡，稍后请在取餐台取餐！",
            translation: "좋습니다, 총 35위안입니다. 여기에 카드를 찍어 주시면 되고, 잠시 후 픽업대에서 메뉴를 수령해 주세요!",
            expressions: [
              { phrase: "一共是 ~ 元", meaning: "모두 합쳐서 ~위안입니다" }
            ],
            vocabulary: [
              { word: "刷卡 (shuākǎ)", meaning: "카드를 긁다/찍다" },
              { word: "取餐台 (qǔcāntái)", meaning: "픽업대, 음식 수령대" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "早上好！请问今天想喝点什么？",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 드시겠어요?",
            expressions: [
              { phrase: "早上好！", meaning: "좋은 아침입니다!" }
            ],
            vocabulary: [
              { word: "早上 (zǎoshang)", meaning: "아침" },
              { word: "请问 (qǐngwèn)", meaning: "실례지만 여쭙겠습니다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！我想要一杯中杯的热香草拿铁，可以换成低因咖啡吗？",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈 한 잔 주시고, 디카페인 커피로 바꿀 수 있나요?",
            expressions: [
              { phrase: "可以换成 ~ 吗？", meaning: "~으로 변경할 수 있나요?" }
            ],
            vocabulary: [
              { word: "热香草拿铁 (rè xiāngcǎo nátiě)", meaning: "따뜻한 바닐라 라떼" },
              { word: "低因咖啡 (dīyīn kāfēi)", meaning: "디카페인 커피" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "当然可以，我们可以做低因浓缩。牛奶需要用普通全脂牛奶吗？",
            translation: "물론이죠, 디카페인 에스프레소로 가능합니다. 우유는 일반 전지우유로 해 드릴까요?",
            expressions: [
              { phrase: "当然可以", meaning: "당연히 가능합니다, 물론이죠" }
            ],
            vocabulary: [
              { word: "浓缩 (nóngsuō)", meaning: "에스프레소 (浓缩咖啡의 줄임말)" },
              { word: "全脂牛奶 (quánzhī niúnǎi)", meaning: "일반(전지) 우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "可以把普通牛奶换成燕麦奶吗？",
            translation: "일반 우유를 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "把 A 换成 B", meaning: "A를 B로 바꾸다(변경하다)" }
            ],
            vocabulary: [
              { word: "燕麦奶 (yànmàinǎi)", meaning: "오트 밀크 (귀리 우유, 두유는 豆奶 dòunǎi)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的！跟您说明一下，换燕麦奶需要额外加收五元，可以吗？",
            translation: "네! 안내 말씀드리자면, 오트 밀크로 변경 시 5위안이 추가되는데 괜찮으신가요?",
            expressions: [
              { phrase: "跟您说明一下", meaning: "잠깐 안내(설명) 말씀드리겠습니다" },
              { phrase: "额外加收 ~ 元", meaning: "추가로 ~위안의 요금을 받다" }
            ],
            vocabulary: [
              { word: "额外 (éwài)", meaning: "추가의, 별도의" },
              { word: "加收 (jiāshōu)", meaning: "추가 징수하다, 더 받다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "没问题，我扫二维码支付。",
            translation: "문제없습니다, QR 코드를 스캔해서 결제할게요.",
            expressions: [
              { phrase: "扫二维码支付", meaning: "QR 코드를 스캔하여 결제하다" }
            ],
            vocabulary: [
              { word: "二维码 (èrwéimǎ)", meaning: "QR 코드" },
              { word: "支付 (zhīfù)", meaning: "지불하다, 결제하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "支付成功！做好后会叫您的取餐号，请稍等。",
            translation: "결제 완료되었습니다! 음료가 완성되면 픽업 번호를 불러 드릴 테니 잠시만 기다려 주세요.",
            expressions: [
              { phrase: "做好后会叫您的取餐号", meaning: "다 만들어지면 픽업 번호를 불러 드리겠습니다" }
            ],
            vocabulary: [
              { word: "取餐号 (qǔcānhào)", meaning: "픽업 번호, 대기 번호" },
              { word: "稍等 (shāoděng)", meaning: "잠시 기다리다" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "您好！欢迎光临，请问需要点什么？",
            translation: "안녕하세요! 어서 오세요, 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "请问需要点什么？", meaning: "무엇을 주문하시겠습니까?" }
            ],
            vocabulary: [
              { word: "点 (diǎn)", meaning: "(메뉴를) 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "您好！我想点一杯冰摩卡。请问上面会有奶油吗？",
            translation: "안녕하세요! 아이스 카페모카 한 잔 주문하려는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "上面会有 ~ 吗？", meaning: "위에 ~이 올라가나요(있나요)?" }
            ],
            vocabulary: [
              { word: "冰摩卡 (bīng mókǎ)", meaning: "아이스 카페모카" },
              { word: "奶油 (nǎiyóu)", meaning: "크림, 휘핑크림" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "是的，默认会加上奶油和巧克力酱。",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "默认会加上 ~", meaning: "기본 설정으로 ~이 추가됩니다" }
            ],
            vocabulary: [
              { word: "默认 (mòrèn)", meaning: "기본 설정, 디폴트" },
              { word: "巧克力酱 (qiǎokèlì jiàng)", meaning: "초콜릿 소스/드리즐" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "好的，那请帮我去掉奶油。另外，糖浆可以减半吗？我不想喝太甜。",
            translation: "네, 그럼 휘핑크림은 빼 주세요. 그리고 시럽은 절반으로 줄여 주실 수 있나요? 너무 달게 마시고 싶지 않아서요.",
            expressions: [
              { phrase: "帮我去掉奶油", meaning: "휘핑크림을 빼 주세요 ('不要奶油'라고 해도 됨)" },
              { phrase: "糖浆可以减半吗？", meaning: "시럽을 절반으로 줄일 수 있나요? (반당은 半糖 bàntáng)" }
            ],
            vocabulary: [
              { word: "去掉 (qùdiào)", meaning: "빼다, 제거하다" },
              { word: "糖浆 (tángjiāng)", meaning: "시럽" },
              { word: "减半 (jiǎnbàn)", meaning: "절반으로 줄이다" },
              { word: "甜 (tián)", meaning: "달다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "没问题！冰摩卡去奶油、半糖。请问需要什么杯型？",
            translation: "문제없습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 컵 사이즈는 어떻게 하시겠어요?",
            expressions: [
              { phrase: "去奶油、半糖", meaning: "크림 빼고, 당도 절반" },
              { phrase: "需要什么杯型？", meaning: "어떤 컵 사이즈로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "半糖 (bàntáng)", meaning: "당도 50% (절반 당도)" },
              { word: "杯型 (bēixíng)", meaning: "컵 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "要大杯，打包带走。就这些，谢谢。",
            translation: "라지 사이즈로 주시고, 포장해 갈게요. 주문은 이게 전부입니다, 감사합니다.",
            expressions: [
              { phrase: "就这些", meaning: "이게 전부입니다 / 여기까지입니다" }
            ],
            vocabulary: [
              { word: "大杯 (dàbēi)", meaning: "라지 사이즈" },
              { word: "打包带走 (dǎbāo dàizǒu)", meaning: "포장해 가다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "好的，一共是三十二元。马上为您制作！",
            translation: "네, 총 32위안입니다. 바로 만들어 드리겠습니다!",
            expressions: [
              { phrase: "马上为您制作", meaning: "즉시 제조해 드리겠습니다" }
            ],
            vocabulary: [
              { word: "制作 (zhìzuò)", meaning: "만들다, 제조하다" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "추천 디저트 및 시즌 음료 문의하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "您好！请问今天想找什么特别的饮品吗？",
            translation: "안녕하세요! 오늘 특별히 찾으시는 음료가 있으신가요?",
            expressions: [{ phrase: "想找什么特别的饮品吗？", meaning: "특별히 찾으시는 음료가 있으신가요?" }],
            vocabulary: [{ word: "特别 (tèbié)", meaning: "특별하다" }, { word: "饮品 (yǐnpǐn)", meaning: "음료" }]
          },
          {
            role: "손님", side: "right",
            text: "您好！请问现在有什么季节限定饮品吗？",
            translation: "안녕하세요! 지금 나오는 계절(시즌) 한정 음료가 있나요?",
            expressions: [{ phrase: "季节限定饮品", meaning: "계절(시즌) 한정 음료" }],
            vocabulary: [{ word: "现在 (xiànzài)", meaning: "지금, 현재" }, { word: "季节限定 (jìjié xiàndìng)", meaning: "계절 한정, 시즌 한정" }]
          },
          {
            role: "직원", side: "left",
            text: "有的，我们春季限定的开心果奶油拿铁非常受欢迎。",
            translation: "네, 저희 봄 시즌 한정인 피스타치오 크림 라떼가 인기가 아주 많습니다.",
            expressions: [{ phrase: "非常受欢迎", meaning: "인기가 매우 많다" }],
            vocabulary: [{ word: "春季 (chūnjì)", meaning: "봄철, 봄 시즌" }, { word: "开心果 (kāixīnguǒ)", meaning: "피스타치오" }, { word: "受欢迎 (shòu huānyíng)", meaning: "인기가 있다, 환영받다" }]
          },
          {
            role: "손님", side: "right",
            text: "听起来很好喝！请问有什么甜点适合搭配这款咖啡吗？",
            translation: "맛있겠네요! 이 커피와 잘 어울리는 추천 디저트는 어떤 게 있나요?",
            expressions: [{ phrase: "听起来很好喝", meaning: "듣기에 아주 맛있어 보인다" }, { phrase: "适合搭配这款咖啡", meaning: "이 커피와 곁들이기에(매치하기에) 잘 어울리다" }],
            vocabulary: [{ word: "好喝 (hǎohē)", meaning: "(음료 등이) 맛있다" }, { word: "甜点 (tiándiǎn)", meaning: "디저트" }, { word: "搭配 (dāpèi)", meaning: "조합하다, 곁들이다" }]
          },
          {
            role: "직원", side: "left",
            text: "清爽的柠檬挞或者浓郁的提拉米苏都很搭。",
            translation: "상큼한 레몬 타르트나 진한 티라미수 모두 아주 잘 어울립니다.",
            expressions: [{ phrase: "都很搭", meaning: "모두 궁합이 잘 맞다 / 잘 어울린다" }],
            vocabulary: [{ word: "清爽 (qīngshuǎng)", meaning: "상큼하다, 산뜻하다" }, { word: "柠檬挞 (níngméngtà)", meaning: "레몬 타르트" }, { word: "浓郁 (nóngyù)", meaning: "(맛·향이) 진하다, 농후하다" }, { word: "提拉米苏 (tílāmǐsū)", meaning: "티라미수" }]
          },
          {
            role: "손님", side: "right",
            text: "那请给我一杯冰开心果拿铁和一份提拉米苏。",
            translation: "그럼 아이스 피스타치오 라떼 한 잔과 티라미수 하나 주세요.",
            expressions: [{ phrase: "那请给我 ~", meaning: "그럼 저에게 ~을 주세요" }],
            vocabulary: [{ word: "一杯 (yìbēi)", meaning: "한 잔" }, { word: "一份 (yífèn)", meaning: "(디저트·음식) 1인분, 한 개" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 라떼 사이즈업 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "您好！请问需要点什么？",
            translation: "안녕하세요! 어떤 메뉴를 주문하시겠어요?",
            expressions: [{ phrase: "请问需要点什么？", meaning: "무엇을 주문하시겠습니까?" }],
            vocabulary: [{ word: "需要 (xūyào)", meaning: "필요하다" }, { word: "点 (diǎn)", meaning: "주문하다" }]
          },
          {
            role: "손님", side: "right",
            text: "请给我一杯热拿铁。",
            translation: "따뜻한 카페라떼 한 잔 주세요.",
            expressions: [{ phrase: "请给我一杯 ~", meaning: "~ 한 잔 주세요" }],
            vocabulary: [{ word: "热拿铁 (rè nátiě)", meaning: "따뜻한 카페라떼" }]
          },
          {
            role: "직원", side: "left",
            text: "好的，请问需要中杯还是大杯？",
            translation: "네, 사이즈는 톨(중간) 사이즈로 드릴까요, 그란데(큰) 사이즈로 드릴까요?",
            expressions: [{ phrase: "中杯还是大杯？", meaning: "미디엄 사이즈인가요, 라지 사이즈인가요?" }],
            vocabulary: [{ word: "中杯 (zhōngbēi)", meaning: "중간 사이즈" }, { word: "大杯 (dàbēi)", meaning: "큰 사이즈" }]
          },
          {
            role: "손님", side: "right",
            text: "可以升级成超大杯，再加一份浓缩咖啡吗？",
            translation: "가장 큰(벤티) 사이즈로 사이즈업하고, 에스프레소 샷을 하나 추가할 수 있나요?",
            expressions: [{ phrase: "升级成超大杯", meaning: "특대 사이즈(벤티)로 사이즈업하다" }, { phrase: "加一份浓缩咖啡", meaning: "에스프레소 1샷을 추가하다" }],
            vocabulary: [{ word: "升级 (shēngjí)", meaning: "업그레이드하다, 사이즈업하다" }, { word: "超大杯 (chāodàbēi)", meaning: "특대 사이즈 (벤티 사이즈)" }, { word: "浓缩咖啡 (nóngsuō kāfēi)", meaning: "에스프레소" }]
          },
          {
            role: "직원", side: "left",
            text: "当然可以！超大杯热拿铁加一份浓缩。还需要别的吗？",
            translation: "물론이죠! 특대 사이즈 따뜻한 라떼에 샷 추가 말씀이시죠. 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "还需要别的吗？", meaning: "그 밖에 더 필요한 것이 있으신가요?" }],
            vocabulary: [{ word: "当然 (dāngrán)", meaning: "물론, 당연히" }, { word: "别的 (biéde)", meaning: "다른 것" }]
          },
          {
            role: "손님", side: "right",
            text: "没有了，谢谢。另外，可以帮我做得稍微烫一点吗？",
            translation: "그게 전부입니다, 감사합니다. 아, 그리고 온도를 좀 더 뜨겁게 해 주실 수 있나요?",
            expressions: [{ phrase: "做得稍微烫一点", meaning: "(음료 온도를) 평소보다 조금 더 뜨겁게 만들다" }],
            vocabulary: [{ word: "稍微 (shāowēi)", meaning: "조금, 약간" }, { word: "烫 (tàng)", meaning: "뜨겁다" }]
          }
        ]
      },
      {
        id: 6,
        title: "매장 와이파이 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "不好意思，请问店里有免费Wi-Fi可以使用吗？",
            translation: "실례합니다, 매장 안에 사용할 수 있는 무료 와이파이가 있나요?",
            expressions: [{ phrase: "店里有免费Wi-Fi可以使用吗？", meaning: "가게 안에 무료 와이파이를 쓸 수 있나요?" }],
            vocabulary: [{ word: "不好意思 (bù hǎoyìsi)", meaning: "실례합니다" }, { word: "店里 (diànlǐ)", meaning: "매장 안" }, { word: "免费 (miǎnfèi)", meaning: "무료" }]
          },
          {
            role: "직원", side: "left",
            text: "有的！无线网络名称是“Cafe_Guest”。",
            translation: "네, 있습니다! 와이파이 네트워크 이름은 'Cafe_Guest'입니다.",
            expressions: [{ phrase: "无线网络名称是 ~", meaning: "무선 네트워크(와이파이) 이름은 ~입니다" }],
            vocabulary: [{ word: "无线网络 (wúxiàn wǎngluò)", meaning: "무선 네트워크, 와이파이" }, { word: "名称 (míngchēng)", meaning: "명칭, 이름" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢。请问连接需要密码吗？",
            translation: "감사합니다. 연결하는 데 비밀번호가 필요한가요?",
            expressions: [{ phrase: "连接需要密码吗？", meaning: "연결(접속)할 때 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "连接 (liánjiē)", meaning: "연결하다, 접속하다" }, { word: "密码 (mìmǎ)", meaning: "비밀번호" }]
          },
          {
            role: "직원", side: "left",
            text: "需要的，密码印在您小票的最下面。",
            translation: "네, 비밀번호는 받으신 영수증 맨 아래쪽에 인쇄되어 있습니다.",
            expressions: [{ phrase: "印在您小票的最下面", meaning: "영수증 가장 아래쪽에 인쇄되어 있다" }],
            vocabulary: [{ word: "印 (yìn)", meaning: "인쇄되다, 찍히다" }, { word: "小票 (xiǎopiào)", meaning: "영수증 (收据 shōujù)" }, { word: "最下面 (zuì xiàmiàn)", meaning: "맨 아래쪽" }]
          },
          {
            role: "손님", side: "right",
            text: "啊，我刚才不小心把小票扔掉了，可以告诉我是多少吗？",
            translation: "아, 제가 아까 실수로 영수증을 버렸는데 비밀번호가 뭔지 알려주실 수 있나요?",
            expressions: [{ phrase: "不小心把小票扔掉了", meaning: "실수로 영수증을 버려버렸다" }],
            vocabulary: [{ word: "刚才 (gāngcái)", meaning: "방금, 아까" }, { word: "不小心 (bù xiǎoxīn)", meaning: "실수로, 부주의하게" }, { word: "扔掉 (rēngdiào)", meaning: "버리다" }, { word: "告诉 (gàosu)", meaning: "알려주다" }]
          },
          {
            role: "직원", side: "left",
            text: "没问题！全部是英文小写字母，“coffee1234”。",
            translation: "문제없습니다! 모두 영문 소문자로 'coffee1234'입니다.",
            expressions: [{ phrase: "全部是英文小写字母", meaning: "모두 알파벳 소문자입니다 (대문자는 大写字母 dàxiě zìmǔ)" }],
            vocabulary: [{ word: "小写字母 (xiǎoxiě zìmǔ)", meaning: "소문자 알파벳" }]
          }
        ]
      },
      {
        id: 7,
        title: "콘센트 있는 좌석 위치 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "不好意思，我手机快没电了，请问哪里有带插座的座位？",
            translation: "실례합니다, 제 휴대폰 배터리가 거의 다 닳았는데 콘센트가 있는 좌석은 어디인가요?",
            expressions: [{ phrase: "我手机快没电了", meaning: "휴대폰 배터리가 거의 다 나갔다" }, { phrase: "带插座的座位", meaning: "콘센트가 있는 좌석" }],
            vocabulary: [{ word: "没电 (méidiàn)", meaning: "배터리가 방전되다" }, { word: "插座 (chāzuò)", meaning: "전기 콘센트" }, { word: "座位 (zuòwèi)", meaning: "좌석, 자리" }]
          },
          {
            role: "직원", side: "left",
            text: "靠窗的吧台座位和中间大长桌下面都有电源插座。",
            translation: "창가 쪽 바 좌석과 중앙 긴 테이블 아래쪽에 모두 전원 콘센트가 있습니다.",
            expressions: [{ phrase: "靠窗的吧台座位", meaning: "창가 쪽 바(카운터) 좌석" }],
            vocabulary: [{ word: "靠窗 (kàochuāng)", meaning: "창가에 붙은" }, { word: "中间 (zhōngjiān)", meaning: "중앙, 가운데" }, { word: "电源插座 (diànyuán chāzuò)", meaning: "전원 콘센트" }]
          },
          {
            role: "손님", side: "right",
            text: "太好了！我可以在这里插着笔记本电脑办公一会儿吗？",
            translation: "다행이네요! 여기서 노트북을 꽂아 두고 잠시 업무를 좀 봐도 괜찮을까요?",
            expressions: [{ phrase: "插着笔记本电脑办公一会儿", meaning: "노트북 전원을 꽂아 두고 잠시 작업(업무)을 하다" }],
            vocabulary: [{ word: "笔记本电脑 (bǐjìběn diànnǎo)", meaning: "노트북 컴퓨터" }, { word: "办公 (bàngōng)", meaning: "업무를 보다, 작업하다" }, { word: "一会儿 (yíhuìr)", meaning: "잠시 동안" }]
          },
          {
            role: "직원", side: "left",
            text: "当然可以！工作日我们的座位没有时间限制，请随意使用。",
            translation: "물론이죠! 평일에는 좌석 이용 시간제한이 없으니 편하게 이용하세요.",
            expressions: [{ phrase: "没有时间限制", meaning: "시간제한이 없다" }],
            vocabulary: [{ word: "工作日 (gōngzuòrì)", meaning: "평일" }, { word: "时间限制 (shíjiān xiànzhì)", meaning: "시간제한" }, { word: "随意 (suíyì)", meaning: "자유롭게, 편하게" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢！顺便问一下，店里有共享充电宝可以租借吗？",
            translation: "감사합니다! 혹시 매장 안에 대여할 수 있는 공유 보조배터리가 있나요?",
            expressions: [{ phrase: "有共享充电宝可以租借吗？", meaning: "빌릴 수 있는 공유 보조배터리가 있나요? (중국 카페·식당에서 매우 흔한 대여 기기)" }],
            vocabulary: [{ word: "顺便 (shùnbiàn)", meaning: "겸사겸사, 묻는 김에" }, { word: "共享充电宝 (gòngxiǎng chōngdiànbǎo)", meaning: "공유 보조배터리" }, { word: "租借 (zūjiè)", meaning: "대여하다, 빌리다" }]
          },
          {
            role: "직원", side: "left",
            text: "有的，入口右手边的架子上就有共享充电宝，扫码就能借。",
            translation: "네, 입구 오른쪽 선반에 공유 보조배터리 기기가 있어서 QR 코드를 스캔하시면 바로 빌릴 수 있습니다.",
            expressions: [{ phrase: "扫码就能借", meaning: "QR 코드를 스캔하면 바로 대여할 수 있다" }],
            vocabulary: [{ word: "入口 (rùkǒu)", meaning: "입구" }, { word: "右手边 (yòushǒubiān)", meaning: "오른편" }, { word: "扫码 (sǎomǎ)", meaning: "QR 코드를 스캔하다" }]
          }
        ]
      },
      {
        id: 8,
        title: "주문한 음료가 잘못 나왔을 때 교환 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "四十二号顾客，您的堂食热拿铁做好了！",
            translation: "42번 손님, 매장용 따뜻한 카페라떼 나왔습니다!",
            expressions: [{ phrase: "四十二号顾客", meaning: "주문번호 42번 손님" }],
            vocabulary: [{ word: "顾客 (gùkè)", meaning: "손님, 고객" }, { word: "堂食 (tángshí)", meaning: "매장 내 취식" }]
          },
          {
            role: "손님", side: "right",
            text: "不好意思，我是四十二号，但这杯好像不是我点的饮品。",
            translation: "실례합니다, 제가 42번인데요, 이 음료는 제가 주문한 메뉴가 아닌 것 같아요.",
            expressions: [{ phrase: "这杯好像不是我点的饮品", meaning: "이 잔은 제가 주문한 음료가 아닌 것 같습니다" }],
            vocabulary: [{ word: "好像 (hǎoxiàng)", meaning: "~인 것 같다" }, { word: "点 (diǎn)", meaning: "주문하다" }]
          },
          {
            role: "직원", side: "left",
            text: "啊，非常抱歉！请问您原本点的是什么呢？",
            translation: "아, 정말 죄송합니다! 원래 어떤 메뉴를 주문하셨나요?",
            expressions: [{ phrase: "您原本点的是什么呢？", meaning: "원래 주문하셨던 메뉴는 무엇인가요?" }],
            vocabulary: [{ word: "非常抱歉 (fēicháng bàoqiàn)", meaning: "대단히 죄송합니다" }, { word: "原本 (yuánběn)", meaning: "원래, 애초에" }]
          },
          {
            role: "손님", side: "right",
            text: "我点的是换豆奶的冰香草拿铁，这是我的小票。",
            translation: "저는 두유로 변경한 아이스 바닐라 라떼를 주문했어요. 여기 제 영수증이 있습니다.",
            expressions: [{ phrase: "换豆奶的冰香草拿铁", meaning: "두유로 변경한 아이스 바닐라 라떼" }],
            vocabulary: [{ word: "豆奶 (dòunǎi)", meaning: "두유" }, { word: "香草拿铁 (xiāngcǎo nátiě)", meaning: "바닐라 라떼" }, { word: "小票 (xiǎopiào)", meaning: "영수증" }]
          },
          {
            role: "직원", side: "left",
            text: "真是对不起！我马上为您重新做一杯冰豆奶香草拿铁。",
            translation: "정말 죄송합니다! 지금 바로 아이스 두유 바닐라 라떼로 새로 다시 만들어 드리겠습니다.",
            expressions: [{ phrase: "马上为您重新做一杯", meaning: "즉시 새로 한 잔 다시 만들어 드리겠습니다" }],
            vocabulary: [{ word: "重新 (chóngxīn)", meaning: "다시, 새로" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢。因为我喝普通牛奶容易肚子疼，幸好先确认了一下。",
            translation: "감사합니다. 제가 일반 우유를 마시면 배가 자주 아파서(유당불내증이 있어서) 미리 확인하길 잘했네요.",
            expressions: [{ phrase: "喝普通牛奶容易肚子疼", meaning: "일반 우유를 마시면 쉽게 배가 아프다" }],
            vocabulary: [{ word: "容易 (róngyì)", meaning: "쉽게 ~하다" }, { word: "肚子疼 (dùzi téng)", meaning: "배가 아프다, 복통이 나다" }, { word: "幸好 (xìnghǎo)", meaning: "다행히도" }, { word: "确认 (quèrèn)", meaning: "확인하다" }]
          }
        ]
      },
      {
        id: 9,
        title: "텀블러 할인 및 개인 컵 사용 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "您好！请问今天想喝点什么？",
            translation: "안녕하세요! 오늘 어떤 음료를 드시겠어요?",
            expressions: [{ phrase: "今天想喝点什么？", meaning: "오늘 무엇을 마시고 싶으신가요?" }],
            vocabulary: [{ word: "今天 (jīntiān)", meaning: "오늘" }, { word: "喝 (hē)", meaning: "마시다" }]
          },
          {
            role: "손님", side: "right",
            text: "您好！我带了自己的随行杯，可以把冰焦糖玛奇朵做在这个杯子里吗？",
            translation: "안녕하세요! 제 개인 텀블러를 가져왔는데, 여기에 아이스 카라멜 마키아토를 담아 주실 수 있나요?",
            expressions: [{ phrase: "我带了自己的随行杯", meaning: "제 개인 텀블러를 가져왔습니다" }, { phrase: "做在这个杯子里", meaning: "이 컵 안에 음료를 만들어 담다" }],
            vocabulary: [{ word: "带 (dài)", meaning: "가지고 오다" }, { word: "随行杯 (suíxíngbēi)", meaning: "텀블러, 휴대용 개인 컵 (保温杯 bǎowēnbēi)" }, { word: "焦糖玛奇朵 (jiāotáng mǎqíduǒ)", meaning: "카라멜 마키아토" }]
          },
          {
            role: "직원", side: "left",
            text: "当然可以！请问您的杯子容量是多少毫升？",
            translation: "물론이죠! 텀블러 용량이 몇 밀리리터(mL)인가요?",
            expressions: [{ phrase: "容量是多少毫升？", meaning: "용량이 몇 밀리리터인가요?" }],
            vocabulary: [{ word: "容量 (róngliàng)", meaning: "용량" }, { word: "毫升 (háoshēng)", meaning: "밀리리터 (mL)" }]
          },
          {
            role: "손님", side: "right",
            text: "是四百七十毫升的，装中杯应该刚刚好。",
            translation: "470mL짜리라서 미디엄 사이즈가 딱 맞게 들어갈 거예요.",
            expressions: [{ phrase: "装中杯应该刚刚好", meaning: "미디엄 사이즈를 담으면 딱 맞을 것이다" }],
            vocabulary: [{ word: "装 (zhuāng)", meaning: "(용기에) 담다" }, { word: "刚刚好 (gānggāng hǎo)", meaning: "딱 알맞다" }]
          },
          {
            role: "직원", side: "left",
            text: "好的，递给我之前请先把杯盖拿下来。",
            translation: "알겠습니다, 저에게 건네주시기 전에 먼저 뚜껑을 열어서 빼 주시겠어요?",
            expressions: [{ phrase: "请先把杯盖拿下来", meaning: "먼저 컵 뚜껑을 분리해 주세요" }],
            vocabulary: [{ word: "递 (dì)", meaning: "건네주다" }, { word: "之前 (zhīqián)", meaning: "~하기 전에" }, { word: "杯盖 (bēigài)", meaning: "컵 뚜껑" }]
          },
          {
            role: "손님", side: "right",
            text: "给您！请问自带杯有环保折扣吗？",
            translation: "여기 있습니다! 개인 컵을 가져오면 친환경 할인이 되나요?",
            expressions: [{ phrase: "自带杯有环保折扣吗？", meaning: "개인 컵 지참 시 환경보호 할인이 있나요?" }],
            vocabulary: [{ word: "自带杯 (zìdàibēi)", meaning: "개인 지참 컵(텀블러)" }, { word: "环保 (huánbǎo)", meaning: "환경보호, 친환경" }, { word: "折扣 (zhékòu)", meaning: "할인" }]
          },
          {
            role: "직원", side: "left",
            text: "有的，自带杯可以减免四元，一共是二十八元。",
            translation: "네, 개인 컵 할인으로 4위안이 차감되어 총 결제 금액은 28위안입니다.",
            expressions: [{ phrase: "可以减免四元", meaning: "4위안을 할인(감면)받을 수 있다" }],
            vocabulary: [{ word: "减免 (jiǎnmiǎn)", meaning: "감면하다, 할인하여 빼주다" }, { word: "一共 (yígòng)", meaning: "모두 합쳐서" }]
          }
        ]
      },
      {
        id: 10,
        title: "케이크 포크와 냅킨 추가 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "这是您的冰红茶和草莓芝士蛋糕，请慢用！",
            translation: "주문하신 아이스티와 딸기 치즈케이크 나왔습니다, 맛있게 드세요!",
            expressions: [{ phrase: "请慢用！", meaning: "천천히 맛있게 드세요!" }],
            vocabulary: [{ word: "冰红茶 (bīng hóngchá)", meaning: "아이스 홍차, 아이스티" }, { word: "草莓芝士蛋糕 (cǎoméi zhīshì dàngāo)", meaning: "딸기 치즈케이크" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢！我和朋友要分着吃这块蛋糕，可以再给我一个叉子吗？",
            translation: "감사합니다! 친구와 이 케이크를 나눠 먹으려고 하는데 포크를 하나 더 주실 수 있나요?",
            expressions: [{ phrase: "分着吃这块蛋糕", meaning: "이 케이크를 나누어 먹다" }, { phrase: "可以再给我一个叉子吗？", meaning: "포크를 하나 더 주실 수 있나요?" }],
            vocabulary: [{ word: "分着吃 (fēnzhe chī)", meaning: "나눠 먹다" }, { word: "叉子 (chāzi)", meaning: "포크" }]
          },
          {
            role: "직원", side: "left",
            text: "好的！需要再给您拿一个分餐用的小盘子吗？",
            translation: "네! 덜어 드실 작은 앞접시도 하나 더 가져다드릴까요?",
            expressions: [{ phrase: "分餐用的小盘子", meaning: "음식을 덜어 먹는 작은 앞접시" }],
            vocabulary: [{ word: "分餐 (fēncān)", meaning: "음식을 덜어 나누다" }, { word: "小盘子 (xiǎopánzi)", meaning: "작은 접시, 앞접시" }]
          },
          {
            role: "손님", side: "right",
            text: "好的，麻烦您了！另外可以多给我几张纸巾吗？",
            translation: "네, 부탁드립니다! 그리고 냅킨도 몇 장 더 주실 수 있나요?",
            expressions: [{ phrase: "多给我几张纸巾", meaning: "냅킨(휴지)을 몇 장 더 주다" }],
            vocabulary: [{ word: "麻烦您了 (máfán nín le)", meaning: "번거롭게 해 드려 감사합니다, 부탁드립니다" }, { word: "几张 (jǐzhāng)", meaning: "몇 장" }, { word: "纸巾 (zhǐjīn)", meaning: "냅킨, 티슈" }]
          },
          {
            role: "직원", side: "left",
            text: "给您。如果还需要纸巾和饮用水，那边自助台也可以免费自取。",
            translation: "여기 있습니다. 혹시 냅킨이나 식수가 더 필요하시면 저쪽 셀프 바에서도 무료로 가져다 쓰실 수 있어요.",
            expressions: [{ phrase: "自助台也可以免费自取", meaning: "셀프 바에서도 무료로 직접 가져다 쓸 수 있다" }],
            vocabulary: [{ word: "饮用水 (yǐnyòngshuǐ)", meaning: "식수, 마시는 물" }, { word: "自助台 (zìzhùtái)", meaning: "셀프서비스 바" }, { word: "自取 (zìqǔ)", meaning: "직접 가져가다" }]
          },
          {
            role: "손님", side: "right",
            text: "原来是这样，谢谢您的提醒！",
            translation: "아, 그렇군요. 알려주셔서 감사합니다!",
            expressions: [{ phrase: "原来是这样", meaning: "원래 이렇군요 / 아, 그렇군요" }],
            vocabulary: [{ word: "提醒 (tíxǐng)", meaning: "알려주다, 귀띔해 주다" }]
          }
        ]
      },
      {
        id: 11,
        title: "음료 캐리어와 빨대 챙겨 달라고 하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "您的四杯打包饮品做好了！两杯冰拿铁和两杯热美式。",
            translation: "포장 주문하신 음료 네 잔 나왔습니다! 아이스 라떼 두 잔과 따뜻한 아메리카노 두 잔입니다.",
            expressions: [{ phrase: "四杯打包饮品", meaning: "포장(테이크아웃) 음료 4잔" }],
            vocabulary: [{ word: "打包 (dǎbāo)", meaning: "포장, 테이크아웃" }, { word: "热美式 (rè měishì)", meaning: "따뜻한 아메리카노" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢！因为我要拿着四杯走，可以帮我装在杯托里吗？",
            translation: "감사합니다! 네 잔을 들고 걸어가야 해서 그러는데 음료 캐리어(홀더)에 담아 주실 수 있나요?",
            expressions: [{ phrase: "可以帮我装在杯托里吗？", meaning: "음료 캐리어(컵 트레이)에 담아 주실 수 있나요?" }],
            vocabulary: [{ word: "拿着 (názhe)", meaning: "손에 들고" }, { word: "杯托 (bēituō)", meaning: "음료 캐리어, 컵 홀더 트레이" }]
          },
          {
            role: "직원", side: "left",
            text: "没问题！我帮您放在四孔纸杯托里，再装进袋子，这样就不会倒了。",
            translation: "문제없습니다! 4구짜리 종이 캐리어에 고정해서 봉투에 넣어 드릴게요. 이러면 쓰러지지 않을 겁니다.",
            expressions: [{ phrase: "这样就不会倒了", meaning: "이렇게 하면 컵이 넘어지지 않는다" }],
            vocabulary: [{ word: "四孔 (sìkǒng)", meaning: "4구 (구멍 4개짜리)" }, { word: "袋子 (dàizi)", meaning: "봉투" }, { word: "倒 (dǎo)", meaning: "쓰러지다, 넘어지다" }]
          },
          {
            role: "손님", side: "right",
            text: "太感谢了！为了防止洒出来，热饮的杯口可以贴上防漏贴纸吗？",
            translation: "정말 감사합니다! 쏟아지지 않도록 따뜻한 음료 마시는 입구에 누수 방지 스티커를 붙여 주실 수 있나요?",
            expressions: [{ phrase: "为了防止洒出来", meaning: "음료가 쏟아지는 것을 방지하기 위해" }, { phrase: "贴上防漏贴纸", meaning: "누수 방지 스티커를 붙이다" }],
            vocabulary: [{ word: "防止 (fángzhǐ)", meaning: "방지하다" }, { word: "洒出来 (sǎ chūlái)", meaning: "쏟아지다, 흘러나오다" }, { word: "杯口 (bēikǒu)", meaning: "컵 입구" }, { word: "防漏贴纸 (fánglòu tiēzhǐ)", meaning: "누수 방지 스티커" }]
          },
          {
            role: "직원", side: "left",
            text: "好的，已经为您贴好防漏贴纸了。两根冰饮用的吸管也放在袋子里了。",
            translation: "네, 누수 방지 스티커를 잘 붙여 드렸습니다. 아이스 음료용 빨대 두 개도 봉투 안에 넣어 두었어요.",
            expressions: [{ phrase: "两根冰饮用的吸管", meaning: "아이스 음료용 빨대 2개" }],
            vocabulary: [{ word: "贴好 (tiēhǎo)", meaning: "잘 붙이다" }, { word: "两根 (liǎnggēn)", meaning: "(빨대 등 가늘고 긴 물건) 두 개" }, { word: "吸管 (xīguǎn)", meaning: "빨대" }]
          },
          {
            role: "손님", side: "right",
            text: "包装得真仔细，非常感谢！",
            translation: "포장을 정말 꼼꼼하게 해 주시네요, 대단히 감사합니다!",
            expressions: [{ phrase: "包装得真仔细", meaning: "포장을 정말 꼼꼼하고 세심하게 잘했다" }],
            vocabulary: [{ word: "包装 (bāozhuāng)", meaning: "포장하다" }, { word: "仔细 (zǐxì)", meaning: "꼼꼼하다, 세심하다" }]
          }
        ]
      },
      {
        id: 12,
        title: "원두 종류(산미/고소함) 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "请给我一杯冰美式。请问这里的咖啡豆可以选吗？",
            translation: "아이스 아메리카노 한 잔 주세요. 여기는 커피 원두 종류를 고를 수 있나요?",
            expressions: [{ phrase: "这里的咖啡豆可以选吗？", meaning: "이곳은 커피 원두를 선택할 수 있나요?" }],
            vocabulary: [{ word: "咖啡豆 (kāfēidòu)", meaning: "커피 원두" }, { word: "选 (xuǎn)", meaning: "고르다, 선택하다" }]
          },
          {
            role: "직원", side: "left",
            text: "可以的！我们有深烘的拼配豆和浅烘的单一产地豆两种选择。",
            translation: "가능합니다! 다크 로스트(강배전)인 블렌드 원두와 라이트 로스트(약배전)인 싱글 오리진 원두 두 가지가 있습니다.",
            expressions: [{ phrase: "深烘的拼配豆和浅烘的单一产地豆", meaning: "강배전 블렌드 원두와 약배전 싱글 오리진 원두" }],
            vocabulary: [{ word: "深烘 (shēnhōng)", meaning: "강배전, 다크 로스트 (深度烘焙)" }, { word: "拼配豆 (pīnpèidòu)", meaning: "블렌드 원두" }, { word: "浅烘 (qiǎnhōng)", meaning: "약배전, 라이트 로스트" }]
          },
          {
            role: "손님", side: "right",
            text: "请问这两种咖啡豆的风味有什么区别？",
            translation: "이 두 가지 원두의 풍미(맛)는 어떤 차이가 있나요?",
            expressions: [{ phrase: "风味有什么区别？", meaning: "맛과 향(풍미)에 어떤 차이가 있나요?" }],
            vocabulary: [{ word: "风味 (fēngwèi)", meaning: "풍미, 맛과 향" }, { word: "区别 (qūbié)", meaning: "차이" }]
          },
          {
            role: "직원", side: "left",
            text: "深烘豆酸度低、坚果香气浓郁；浅烘豆则带有明亮的果酸和花香。",
            translation: "다크 로스트 원두는 산미가 적고 견과류의 고소한 향이 진하며, 라이트 로스트 원두는 화사한 과일 산미와 꽃향기가 납니다.",
            expressions: [{ phrase: "酸度低、坚果香气浓郁", meaning: "산미가 낮고 견과류의 고소한 향이 진하다" }],
            vocabulary: [{ word: "酸度 (suāndù)", meaning: "산미, 신맛의 정도" }, { word: "坚果 (jiānguǒ)", meaning: "견과류" }, { word: "香气 (xiāngqì)", meaning: "향기" }, { word: "果酸 (guǒsuān)", meaning: "과일 산미" }]
          },
          {
            role: "손님", side: "right",
            text: "比起酸的咖啡，我更喜欢香醇浓郁的，请帮我用深烘豆。",
            translation: "신맛 나는 커피보다 고소하고 진한 맛을 더 좋아해서, 다크 로스트(강배전) 원두로 부탁합니다.",
            expressions: [{ phrase: "比起 A，我更喜欢 B", meaning: "A보다 저는 B를 더 좋아합니다" }],
            vocabulary: [{ word: "酸 (suān)", meaning: "시다, 신맛이 나다" }, { word: "更喜欢 (gèng xǐhuan)", meaning: "더 좋아하다, 선호하다" }, { word: "香醇 (xiāngchún)", meaning: "향기롭고 맛이 깊다(고소하다)" }]
          },
          {
            role: "직원", side: "left",
            text: "好的！马上为您用深烘拼配豆制作冰美式。",
            translation: "알겠습니다! 바로 다크 로스트 블렌드 원두로 아이스 아메리카노를 내려 드리겠습니다.",
            expressions: [{ phrase: "用深烘拼配豆制作", meaning: "강배전 블렌드 원두를 사용해 제조하다" }],
            vocabulary: [{ word: "马上 (mǎshàng)", meaning: "바로, 즉시" }]
          }
        ]
      },
      {
        id: 13,
        title: "얼음 없이 차가운 음료 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "您好！请问需要点什么？",
            translation: "안녕하세요! 어떤 메뉴를 주문하시겠어요?",
            expressions: [{ phrase: "请问需要点什么？", meaning: "무엇을 주문하시겠습니까?" }],
            vocabulary: [{ word: "点 (diǎn)", meaning: "주문하다" }]
          },
          {
            role: "손님", side: "right",
            text: "请给我一杯中杯的冰抹茶拿铁，可以做成完全去冰吗？",
            translation: "아이스 말차(녹차) 라떼 미디엄 사이즈로 한 잔 주시고, 얼음은 아예 빼 주실 수 있나요?",
            expressions: [{ phrase: "可以做成完全去冰吗？", meaning: "얼음을 완전히 빼고(완전 거빙으로) 만들어 주실 수 있나요?" }],
            vocabulary: [{ word: "冰抹茶拿铁 (bīng mǒchá nátiě)", meaning: "아이스 말차 라떼" }, { word: "完全去冰 (wánquán qùbīng)", meaning: "얼음 완전히 빼기 (No ice)" }]
          },
          {
            role: "직원", side: "left",
            text: "去冰是吗？完全去冰的话，杯子里的液面会稍微不满一点，可以吗？",
            translation: "얼음 빼기 말씀이시죠? 얼음을 완전히 빼면 컵의 음료 높이가 살짝 덜 찰 수 있는데 괜찮으신가요?",
            expressions: [{ phrase: "杯子里的液面会稍微不满一点", meaning: "컵 안의 음료 높이가 약간 가득 차지 않을 수 있다" }],
            vocabulary: [{ word: "液面 (yèmiàn)", meaning: "액체 표면 높이, 음료량" }, { word: "不满 (bùmǎn)", meaning: "가득 차지 않다" }]
          },
          {
            role: "손님", side: "right",
            text: "啊，是这样啊。少掉的部分可以用冷牛奶帮我补满吗？",
            translation: "아, 그렇군요. 혹시 줄어든 공간만큼 차가운 우유로 가득 채워 주실 수도 있나요?",
            expressions: [{ phrase: "可以用冷牛奶帮我补满吗？", meaning: "차가운 우유로 끝까지 채워 주실 수 있나요?" }],
            vocabulary: [{ word: "少掉的部分 (shǎodiào de bùfen)", meaning: "줄어든(비어 있는) 부분" }, { word: "冷牛奶 (lěng niúnǎi)", meaning: "차가운 우유" }, { word: "补满 (bǔmǎn)", meaning: "보충해서 가득 채우다" }]
          },
          {
            role: "직원", side: "left",
            text: "可以的，我们可以免费用冷牛奶帮您加满！",
            translation: "네, 가능합니다! 추가 요금 없이 차가운 우유로 가득 채워 드릴 수 있어요.",
            expressions: [{ phrase: "免费用冷牛奶帮您加满", meaning: "무료로 차가운 우유를 부어 가득 채워 드리다" }],
            vocabulary: [{ word: "免费 (miǎnfèi)", meaning: "무료로" }, { word: "加满 (jiāmǎn)", meaning: "가득 채우다" }]
          },
          {
            role: "손님", side: "right",
            text: "太好了！那就请帮我做去冰、满杯牛奶，谢谢。",
            translation: "정말 좋네요! 그럼 얼음 빼고 우유 가득으로 부탁드립니다, 감사합니다.",
            expressions: [{ phrase: "去冰、满杯牛奶", meaning: "얼음 빼고 우유 가득 채우기" }],
            vocabulary: [{ word: "太好了 (tàihǎole)", meaning: "정말 잘됐다, 아주 좋다" }, { word: "满杯 (mǎnbēi)", meaning: "컵 가득" }]
          }
        ]
      },
      {
        id: 14,
        title: "화장실 위치 및 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "不好意思，请问洗手间在哪里？",
            translation: "실례합니다, 화장실은 어디에 있나요?",
            expressions: [{ phrase: "请问洗手间在哪里？", meaning: "실례지만 화장실이 어디에 있나요?" }],
            vocabulary: [{ word: "洗手间 (xǐshǒujiān)", meaning: "화장실 (卫生间 wèishēngjiān)" }, { word: "哪里 (nǎlǐ)", meaning: "어디" }]
          },
          {
            role: "직원", side: "left",
            text: "走过取餐台，沿着左边的走廊一直往里走就是了。",
            translation: "픽업대를 지나서 왼쪽 복도를 따라 쭉 안쪽으로 들어가시면 됩니다.",
            expressions: [{ phrase: "沿着左边的走廊一直往里走", meaning: "왼쪽 복도를 따라 쭉 안으로 걸어 들어가다" }],
            vocabulary: [{ word: "取餐台 (qǔcāntái)", meaning: "픽업대" }, { word: "沿着 (yánzhe)", meaning: "~을 따라서" }, { word: "走廊 (zǒuláng)", meaning: "복도" }, { word: "往里走 (wǎng lǐ zǒu)", meaning: "안쪽으로 걸어가다" }]
          },
          {
            role: "손님", side: "right",
            text: "谢谢。请问进去需要钥匙或者密码吗？",
            translation: "감사합니다. 들어가려면 열쇠나 비밀번호가 필요한가요?",
            expressions: [{ phrase: "进去需要钥匙或者密码吗？", meaning: "들어갈 때 열쇠나 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "进去 (jìnqù)", meaning: "들어가다" }, { word: "钥匙 (yàoshi)", meaning: "열쇠" }, { word: "密码 (mìmǎ)", meaning: "비밀번호" }]
          },
          {
            role: "직원", side: "left",
            text: "需要的，门上有密码锁。请按“2580”，然后再按井号键。",
            translation: "네, 문에 번호키가 있습니다. '2580'을 누르신 뒤 우물 정(#) 버튼을 눌러주세요.",
            expressions: [{ phrase: "请按“2580”，然后再按井号键", meaning: "2580을 누른 다음 우물 정(#) 키를 누르세요" }],
            vocabulary: [{ word: "密码锁 (mìmǎsuǒ)", meaning: "번호키, 도어락" }, { word: "按 (àn)", meaning: "(버튼을) 누르다" }, { word: "井号键 (jǐnghàojiàn)", meaning: "# 버튼 (우물 정 자 키)" }]
          },
          {
            role: "손님", side: "right",
            text: "“2580”加井号键是吧，谢谢您！",
            translation: "'2580' 누르고 # 버튼이요, 감사합니다!",
            expressions: [{ phrase: "加井号键是吧", meaning: "그리고 # 버튼을 누르면 되는 거죠" }],
            vocabulary: [{ word: "加 (jiā)", meaning: "더하다, 추가하다" }]
          },
          {
            role: "직원", side: "left",
            text: "不客气，如果打不开的话请随时叫我们。",
            translation: "천만에요, 혹시 문이 열리지 않으면 언제든 말씀해 주세요.",
            expressions: [{ phrase: "如果打不开的话", meaning: "만약 문이 열리지 않는다면" }],
            vocabulary: [{ word: "不客气 (bú kèqi)", meaning: "천만에요, 별말씀을요" }, { word: "打不开 (dǎbu kāi)", meaning: "열리지 않는다, 열 수 없다" }, { word: "随时 (suíshí)", meaning: "언제든지" }]
          }
        ]
      },
      {
        id: 15,
        title: "테이블 위 흘린 음료 정리 도움 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "不好意思，我刚才不小心把杯子碰倒，把咖啡洒在桌子上了。",
            translation: "실례합니다, 제가 방금 실수로 컵을 건드려 넘어뜨려서 테이블에 커피를 쏟았어요.",
            expressions: [{ phrase: "不小心把杯子碰倒", meaning: "실수로 컵을 쳐서 넘어뜨렸다" }, { phrase: "把咖啡洒在桌子上了", meaning: "커피를 테이블 위에 쏟았다" }],
            vocabulary: [{ word: "碰倒 (pèngdǎo)", meaning: "건드려 넘어뜨리다" }, { word: "洒 (sǎ)", meaning: "(액체를) 쏟다, 흘리다" }, { word: "桌子 (zhuōzi)", meaning: "테이블, 탁자" }]
          },
          {
            role: "직원", side: "left",
            text: "您没事吧？衣服有没有弄脏？没有烫到吧？",
            translation: "괜찮으신가요? 옷은 버리지 않으셨나요? 데이지는 않으셨고요?",
            expressions: [{ phrase: "衣服有没有弄脏？", meaning: "옷이 더러워지지는(묻지는) 않았나요?" }, { phrase: "没有烫到吧？", meaning: "뜨거운 것에 데이지는 않으셨죠?" }],
            vocabulary: [{ word: "没事 (méishì)", meaning: "괜찮다, 아무 일 없다" }, { word: "衣服 (yīfu)", meaning: "옷" }, { word: "弄脏 (nòngzāng)", meaning: "더럽히다, 묻히다" }, { word: "烫到 (tàngdào)", meaning: "(뜨거운 것에) 데이다, 화상을 입다" }]
          },
          {
            role: "손님", side: "right",
            text: "因为是冰咖啡，所以我没事。可以借我一块抹布擦一下吗？",
            translation: "아이스커피여서 저는 괜찮습니다. 닦을 수 있게 행주를 하나 빌려주실 수 있나요?",
            expressions: [{ phrase: "可以借我一块抹布擦一下吗？", meaning: "닦을 수 있도록 행주를 하나 빌려주실 수 있나요?" }],
            vocabulary: [{ word: "借 (jiè)", meaning: "빌리다" }, { word: "抹布 (mābù)", meaning: "행주, 걸레" }, { word: "擦 (cā)", meaning: "닦다" }]
          },
          {
            role: "직원", side: "left",
            text: "您别客气，我们来清理就好！请您先换到旁边的空位坐好吗？",
            translation: "신경 쓰지 마세요, 저희가 치우겠습니다! 우선 옆의 빈자리로 옮겨 앉아 계시겠어요?",
            expressions: [{ phrase: "我们来清理就好", meaning: "저희(직원)가 치우면 됩니다" }, { phrase: "换到旁边的空位坐", meaning: "옆의 빈자리로 옮겨 앉다" }],
            vocabulary: [{ word: "清理 (qīnglǐ)", meaning: "치우다, 청소하다" }, { word: "旁边 (pángbiān)", meaning: "옆" }, { word: "空位 (kōngwèi)", meaning: "빈자리" }]
          },
          {
            role: "손님", side: "right",
            text: "给您添麻烦了，真是不好意思。",
            translation: "번거롭게 폐를 끼쳐서 정말 죄송합니다.",
            expressions: [{ phrase: "给您添麻烦了", meaning: "폐를 끼쳤습니다 / 번거롭게 해 드려 죄송합니다" }],
            vocabulary: [{ word: "添麻烦 (tiān máfan)", meaning: "폐를 끼치다, 수고를 끼치다" }]
          },
          {
            role: "직원", side: "left",
            text: "没关系的！我再免费为您重做一杯新的冰咖啡送到您的座位上。",
            translation: "괜찮습니다! 쏟으신 아이스커피도 무료로 새로 한 잔 다시 만들어서 자리로 가져다드리겠습니다.",
            expressions: [{ phrase: "免费为您重做一杯新的", meaning: "무료로 새 음료를 한 잔 다시 만들어 드리다" }],
            vocabulary: [{ word: "重做 (chóngzuò)", meaning: "다시 만들다" }, { word: "送 (sòng)", meaning: "가져다주다, 전달하다" }]
          }
        ]
      },
      {
        id: 16,
        title: "영수증 발급 및 분할 결제 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "两份热压三明治和两杯冰拿铁，一共是九十六元。",
            translation: "파니니(핫샌드위치) 두 개와 아이스 라떼 두 잔 해서 총 96위안입니다.",
            expressions: [{ phrase: "一共是九十六元", meaning: "전부 합쳐서 96위안입니다" }],
            vocabulary: [{ word: "热压三明治 (rèyā sānmíngzhì)", meaning: "파니니, 그릴 핫샌드위치" }, { word: "一共 (yígòng)", meaning: "총합, 모두 합쳐서" }]
          },
          {
            role: "손님", side: "right",
            text: "请问我们可以分开付，一人付一半吗？",
            translation: "저희 따로 분할 결제해서 절반씩 내도 될까요?",
            expressions: [{ phrase: "分开付，一人付一半", meaning: "나누어 결제해서 1인당 절반씩 내다 (더치페이는 AA制)" }],
            vocabulary: [{ word: "分开 (fēnkāi)", meaning: "나누다, 따로 하다" }, { word: "付 (fù)", meaning: "지불하다, 결제하다" }, { word: "一半 (yíbàn)", meaning: "절반" }]
          },
          {
            role: "직원", side: "left",
            text: "可以的，我帮您分成两笔，每人四十八元。请第一位先刷卡或扫码。",
            translation: "네, 두 건으로 나누어 한 분당 48위안씩 결제해 드릴게요. 먼저 첫 번째 분부터 카드나 QR 코드를 찍어 주세요.",
            expressions: [{ phrase: "分成两笔，每人四十八元", meaning: "두 건으로 나누어 1인당 48위안씩 계산하다" }],
            vocabulary: [{ word: "两笔 (liǎngbǐ)", meaning: "(결제·거래) 두 건" }, { word: "每人 (měirén)", meaning: "각 사람마다, 1인당" }]
          },
          {
            role: "손님", side: "right",
            text: "好的，我已经付好了。可以帮我打印我这部分的收据和发票吗？",
            translation: "네, 제 몫은 결제했습니다. 제 결제분 영수증을 출력해 주실 수 있나요?",
            expressions: [{ phrase: "打印我这部分的收据", meaning: "제가 결제한 몫의 영수증을 인쇄(출력)하다" }],
            vocabulary: [{ word: "打印 (dǎyìn)", meaning: "인쇄하다, 출력하다" }, { word: "收据 (shōujù)", meaning: "영수증" }, { word: "发票 (fāpiào)", meaning: "세금계산서 겸 공식 영수증" }]
          },
          {
            role: "직원", side: "left",
            text: "没问题，这是第一位的收据。接下来请第二位付款。",
            translation: "문제없습니다, 여기 첫 번째 분 영수증입니다. 이어서 두 번째 분 결제해 주세요.",
            expressions: [{ phrase: "接下来请第二位付款", meaning: "이어서 두 번째 분이 결제해 주세요" }],
            vocabulary: [{ word: "接下来 (jiēxiàlái)", meaning: "이어서, 다음으로" }, { word: "付款 (fùkuǎn)", meaning: "결제하다, 돈을 내다" }]
          },
          {
            role: "손님", side: "right",
            text: "我朋友也付好了，谢谢您帮我们分开结账！",
            translation: "제 친구도 결제 완료했습니다. 따로 계산해 주셔서 감사합니다!",
            expressions: [{ phrase: "谢谢您帮我们分开结账", meaning: "나누어 계산해 주셔서 감사합니다" }],
            vocabulary: [{ word: "朋友 (péngyou)", meaning: "친구" }, { word: "结账 (jiézhàng)", meaning: "계산하다, 결제하다" }]
          }
        ]
      },
      {
        id: 17,
        title: "브런치 세트 가능 시간 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "您好！我在外面的招牌上看到了早午餐套餐，现在还可以点吗？",
            translation: "안녕하세요! 밖의 안내 간판에서 브런치 세트를 봤는데, 지금도 주문할 수 있나요?",
            expressions: [{ phrase: "在外面的招牌上看到了 ~", meaning: "밖의 간판(안내판)에서 ~을 보았다" }],
            vocabulary: [{ word: "外面 (wàimiàn)", meaning: "밖, 외부" }, { word: "招牌 (zhāopái)", meaning: "간판, 안내판" }, { word: "早午餐套餐 (zǎowǔcān tàocān)", meaning: "브런치 세트" }]
          },
          {
            role: "직원", side: "left",
            text: "可以的，我们的早午餐套餐供应到下午两点，您赶得刚刚好！",
            translation: "네, 브런치 세트는 오후 2시까지 제공되어서 시간에 딱 맞춰 잘 오셨어요!",
            expressions: [{ phrase: "供应到下午两点", meaning: "오후 2시까지 제공(판매)된다" }, { phrase: "您赶得刚刚好！", meaning: "시간에 딱 맞춰 잘 오셨습니다!" }],
            vocabulary: [{ word: "供应 (gōngyìng)", meaning: "(메뉴를) 제공하다, 판매하다" }, { word: "下午两点 (xiàwǔ liǎngdiǎn)", meaning: "오후 2시" }]
          },
          {
            role: "손님", side: "right",
            text: "太好了！请问牛油果吐司套餐里面包含咖啡吗？",
            translation: "다행이네요! 아보카도 토스트 세트 안에 커피도 포함되어 있나요?",
            expressions: [{ phrase: "套餐里面包含咖啡吗？", meaning: "세트 메뉴 안에 커피가 포함되어 있나요?" }],
            vocabulary: [{ word: "牛油果吐司 (niúyóuguǒ tǔsī)", meaning: "아보카도 토스트" }, { word: "包含 (bāohán)", meaning: "포함하다" }]
          },
          {
            role: "직원", side: "left",
            text: "是的，默认包含美式咖啡或红茶，加五元也可以换成拿铁。",
            translation: "네, 아메리카노나 홍차가 기본 포함이며, 5위안을 추가하시면 카페라떼로도 변경하실 수 있습니다.",
            expressions: [{ phrase: "加五元也可以换成拿铁", meaning: "5위안을 추가하면 라떼로 변경할 수 있다" }],
            vocabulary: [{ word: "默认 (mòrèn)", meaning: "기본적으로" }, { word: "红茶 (hóngchá)", meaning: "홍차" }, { word: "换成 (huànchéng)", meaning: "~로 바꾸다" }]
          },
          {
            role: "손님", side: "right",
            text: "那我要一份牛油果吐司套餐，饮品换成冰拿铁。请问餐点大概要等多久？",
            translation: "그럼 아보카도 토스트 세트 하나에 음료는 아이스 라떼로 바꿀게요. 음식은 나오는 데 얼마나 걸릴까요?",
            expressions: [{ phrase: "请问餐点大概要等多久？", meaning: "음식이 나오는 데 대략 얼마나 기다려야 하나요?" }],
            vocabulary: [{ word: "餐点 (cāndiǎn)", meaning: "주문한 음식" }, { word: "大概 (dàgài)", meaning: "대략" }, { word: "多久 (duōjiǔ)", meaning: "얼마나 오래" }]
          },
          {
            role: "직원", side: "left",
            text: "大概需要十分钟。取餐器震动的时候，请到吧台取餐！",
            translation: "약 10분 정도 걸립니다. 진동벨이 울리면 카운터(바)로 와서 음식을 수령해 주세요!",
            expressions: [{ phrase: "取餐器震动的时候", meaning: "진동벨이 진동할(울릴) 때" }],
            vocabulary: [{ word: "取餐器 (qǔcānqì)", meaning: "진동벨, 호출기" }, { word: "震动 (zhèndòng)", meaning: "진동하다, 울리다" }, { word: "吧台 (bātái)", meaning: "카운터, 바" }]
          }
        ]
      },
      {
        id: 18,
        title: "알레르기 유발 성분(견과류 등) 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "点单前想跟您确认一下原料，我的孩子对花生和坚果严重过敏。",
            translation: "주문하기 전에 원재료를 좀 확인하고 싶은데요, 제 아이가 땅콩과 견과류에 심한 알레르기가 있어요.",
            expressions: [{ phrase: "对花生和坚果严重过敏", meaning: "땅콩과 견과류에 심한 알레르기가 있다" }],
            vocabulary: [{ word: "原料 (yuánliào)", meaning: "원재료, 식재료 성분" }, { word: "花生 (huāshēng)", meaning: "땅콩" }, { word: "坚果 (jiānguǒ)", meaning: "견과류" }, { word: "过敏 (guòmǐn)", meaning: "알레르기, 알레르기 반응이 나다" }]
          },
          {
            role: "직원", side: "left",
            text: "谢谢您提前告知！请问您想看哪款甜点？我帮您查一下过敏原信息表。",
            translation: "미리 말씀해 주셔서 감사합니다! 어떤 디저트를 보고 계신가요? 제가 알레르기 유발 성분표를 확인해 드리겠습니다.",
            expressions: [{ phrase: "查一下过敏原信息表", meaning: "알레르기 유발 물질 성분표를 조회해 보다" }],
            vocabulary: [{ word: "提前 (tíqián)", meaning: "미리, 사전에" }, { word: "告知 (gàozhī)", meaning: "알리다" }, { word: "过敏原 (guòmǐnyuán)", meaning: "알레르기 유발 물질" }]
          },
          {
            role: "손님", side: "right",
            text: "请问巧克力司康和香蕉面包里面含有坚果吗？",
            translation: "초콜릿 스콘과 바나나 브레드 안에 견과류가 들어 있나요?",
            expressions: [{ phrase: "里面含有坚果吗？", meaning: "안에 견과류가 함유되어 있나요?" }],
            vocabulary: [{ word: "司康 (sīkāng)", meaning: "스콘" }, { word: "香蕉面包 (xiāngjiāo miànbāo)", meaning: "바나나 브레드(빵)" }, { word: "含有 (hányǒu)", meaning: "함유하다, 포함하다" }]
          },
          {
            role: "직원", side: "left",
            text: "香蕉面包里有核桃。司康的配方里没有坚果，但它们是用同一个烤箱烤的。",
            translation: "바나나 브레드에는 호두가 들어 있습니다. 스콘 레시피에는 견과류가 없지만 같은 오븐에서 굽고 있어요.",
            expressions: [{ phrase: "用同一个烤箱烤的", meaning: "같은 오븐을 사용해서 구워낸 것이다 (교차 오염 안내)" }],
            vocabulary: [{ word: "核桃 (hétao)", meaning: "호두" }, { word: "配方 (pèifāng)", meaning: "레시피, 배합표" }, { word: "烤箱 (kǎoxiāng)", meaning: "오븐" }]
          },
          {
            role: "손님", side: "right",
            text: "哪怕有一点残留也有风险，请问有不含坚果的独立包装点心吗？",
            translation: "미량이라도 남아 있으면 위험해서요, 혹시 견과류가 들어가지 않은 개별 포장 간식이 있나요?",
            expressions: [{ phrase: "不含坚果的独立包装点心", meaning: "견과류 무첨가 개별 밀봉 포장 간식" }],
            vocabulary: [{ word: "残留 (cánliú)", meaning: "잔류물, 흔적" }, { word: "风险 (fēngxiǎn)", meaning: "위험" }, { word: "不含 (bùhán)", meaning: "함유하지 않은, 무첨가의" }, { word: "独立包装 (dúlì bāozhuāng)", meaning: "개별 포장" }]
          },
          {
            role: "직원", side: "left",
            text: "有的！这款有机苹果果泥和纯米饼干是在无过敏原专用工厂生产的，非常安全。",
            translation: "네! 이 유기농 사과 퓨레 파우치와 쌀과자는 알레르기 유발 물질이 없는 전용 공장에서 생산되어 매우 안전합니다.",
            expressions: [{ phrase: "在无过敏原专用工厂生产的", meaning: "알레르기 유발 물질 무첨가 전용 공장에서 생산된" }],
            vocabulary: [{ word: "有机 (yǒujī)", meaning: "유기농의" }, { word: "苹果果泥 (píngguǒ guǒní)", meaning: "사과 퓨레(으깬 과일 간식)" }, { word: "纯米饼干 (chúnmǐ bǐnggān)", meaning: "쌀과자, 쌀쿠키" }, { word: "安全 (ānquán)", meaning: "안전하다" }]
          }
        ]
      },
      {
        id: 19,
        title: "마감 시간 및 라스트 오더 시간 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "不好意思，请问现在还在营业吗？还是快要打烊了？",
            translation: "실례합니다, 지금 아직 영업 중인가요? 아니면 곧 마감인가요?",
            expressions: [{ phrase: "现在还在营业吗？", meaning: "지금 아직 영업 중인가요?" }, { phrase: "快要打烊了？", meaning: "곧 영업 마감(폐점)인가요?" }],
            vocabulary: [{ word: "营业 (yíngyè)", meaning: "영업하다" }, { word: "打烊 (dǎyàng)", meaning: "(가게가) 문을 닫다, 영업 마감하다" }]
          },
          {
            role: "직원", side: "left",
            text: "还在营业的！我们今天晚上十点关门，九点半停止点单。",
            translation: "아직 영업 중입니다! 오늘은 밤 10시에 문을 닫고, 9시 30분에 주문을 마감합니다.",
            expressions: [{ phrase: "晚上十点关门，九点半停止点单", meaning: "밤 10시 폐점이며 9시 반에 라스트 오더(주문 마감)입니다" }],
            vocabulary: [{ word: "关门 (guānmén)", meaning: "문을 닫다, 폐점하다" }, { word: "停止点单 (tíngzhǐ diǎndān)", meaning: "주문을 마감하다 (라스트 오더)" }]
          },
          {
            role: "손님", side: "right",
            text: "太好了！我们可以在店里坐四十分钟左右，喝杯花草茶再走吗？",
            translation: "다행이네요! 매장에 40분 정도 앉아서 허브티를 한 잔 마시고 가도 될까요?",
            expressions: [{ phrase: "在店里坐四十分钟左右", meaning: "매장 안에 40분 정도 앉아 있다 가다" }],
            vocabulary: [{ word: "左右 (zuǒyòu)", meaning: "~쯤, ~정도" }, { word: "花草茶 (huācǎochá)", meaning: "허브티" }]
          },
          {
            role: "직원", side: "left",
            text: "当然可以！热食厨房已经下班了，但所有的饮品和蛋糕都可以点。",
            translation: "물론이죠! 따뜻한 식사 메뉴 주방은 마감되었지만, 모든 음료와 케이크는 주문하실 수 있습니다.",
            expressions: [{ phrase: "所有的饮品和蛋糕都可以点", meaning: "모든 음료와 케이크는 주문 가능하다" }],
            vocabulary: [{ word: "热食 (rèshí)", meaning: "따뜻한 조리 음식" }, { word: "厨房 (chúfáng)", meaning: "주방" }, { word: "所有 (suǒyǒu)", meaning: "모든, 전부의" }]
          },
          {
            role: "손님", side: "right",
            text: "那请给我们两杯热洋甘菊茶，在店里喝。",
            translation: "그럼 따뜻한 캐모마일 차 두 잔을 매장 이용으로 주세요.",
            expressions: [{ phrase: "两杯热洋甘菊茶，在店里喝", meaning: "따뜻한 캐모마일 차 두 잔, 매장 내 취식" }],
            vocabulary: [{ word: "洋甘菊茶 (yánggānjúchá)", meaning: "캐모마일 차" }]
          },
          {
            role: "직원", side: "left",
            text: "好的。因为离打烊不到一小时了，用外带纸杯为您盛装可以吗？",
            translation: "알겠습니다. 마감까지 1시간이 채 남지 않아서 테이크아웃용 종이컵에 담아 드려도 괜찮을까요?",
            expressions: [{ phrase: "离打烊不到一小时了", meaning: "마감 시간까지 1시간도 남지 않았다" }],
            vocabulary: [{ word: "不到 (búdào)", meaning: "~가 채 안 되다" }, { word: "外带纸杯 (wàidài zhǐbēi)", meaning: "테이크아웃 종이컵" }, { word: "盛装 (chéngzhuāng)", meaning: "(음료·음식을 용기에) 담다" }]
          }
        ]
      },
      {
        id: 20,
        title: "선물용 원두 분쇄도 지정해 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "我想买一袋这款埃塞俄比亚咖啡豆，送给朋友当礼物。",
            translation: "친구에게 선물로 줄 이 에티오피아 커피 원두를 한 봉지 사고 싶습니다.",
            expressions: [{ phrase: "送给朋友当礼物", meaning: "친구에게 선물로 주다" }],
            vocabulary: [{ word: "一袋 (yídài)", meaning: "한 봉지" }, { word: "埃塞俄比亚 (āisài'ébǐyà)", meaning: "에티오피아" }, { word: "礼物 (lǐwù)", meaning: "선물" }]
          },
          {
            role: "직원", side: "left",
            text: "谢谢！这袋是整豆，请问您要直接拿咖啡豆，还是需要我们帮您磨成粉？",
            translation: "감사합니다! 이 제품은 갈지 않은 홀빈(통원두)인데, 그대로 가져가시나요, 아니면 분쇄해 드릴까요?",
            expressions: [{ phrase: "还是需要我们帮您磨成粉？", meaning: "아니면 저희가 원두를 갈아(분쇄해) 드릴까요?" }],
            vocabulary: [{ word: "整豆 (zhěngdòu)", meaning: "갈지 않은 통원두(홀빈)" }, { word: "磨成粉 (móchéng fěn)", meaning: "가루로 갈다, 분쇄하다" }]
          },
          {
            role: "손님", side: "right",
            text: "我朋友家里没有磨豆机，可以麻烦您帮我磨成咖啡粉吗？",
            translation: "제 친구 집에는 커피 그라인더가 없어서 그러는데, 원두를 좀 갈아 주실 수 있나요?",
            expressions: [{ phrase: "家里没有磨豆机", meaning: "집에 커피 그라인더(분쇄기)가 없다" }],
            vocabulary: [{ word: "磨豆机 (módòujī)", meaning: "커피 그라인더, 원두 분쇄기" }, { word: "咖啡粉 (kāfēifěn)", meaning: "분쇄된 원두커피 가루" }]
          },
          {
            role: "직원", side: "left",
            text: "没问题！请问您的朋友平时用什么器具冲泡咖啡呢？",
            translation: "문제없습니다! 친구분께서는 평소에 어떤 추출 기구로 커피를 내려 드시나요?",
            expressions: [{ phrase: "平时用什么器具冲泡咖啡呢？", meaning: "평소에 어떤 기구로 커피를 추출해 마시나요?" }],
            vocabulary: [{ word: "平时 (píngshí)", meaning: "평소에" }, { word: "器具 (qìjù)", meaning: "기구, 도구" }, { word: "冲泡 (chōngpào)", meaning: "(커피·차를) 내리다, 우리다" }]
          },
          {
            role: "손님", side: "right",
            text: "她平时用滤纸和手冲滤杯泡手冲咖啡。",
            translation: "평소에 종이 필터와 핸드드립용 드리퍼를 써서 핸드드립 커피를 내려 마셔요.",
            expressions: [{ phrase: "用滤纸和手冲滤杯", meaning: "종이 필터와 핸드드립 드리퍼를 사용하다" }],
            vocabulary: [{ word: "滤纸 (lǜzhǐ)", meaning: "종이 필터, 여과지" }, { word: "手冲滤杯 (shǒuchōng lǜbēi)", meaning: "핸드드립용 드리퍼" }, { word: "手冲咖啡 (shǒuchōng kāfēi)", meaning: "핸드드립 커피" }]
          },
          {
            role: "직원", side: "left",
            text: "那我帮您磨成适合手冲滤纸的“中细度”吧。需要给您配一个礼品袋和贴纸吗？",
            translation: "그럼 종이 필터 핸드드립에 알맞은 '중세분쇄(중간보다 약간 가는 입자)'로 갈아 드리겠습니다. 선물용 쇼핑백과 스티커도 챙겨 드릴까요?",
            expressions: [{ phrase: "磨成适合手冲滤纸的“中细度”", meaning: "핸드드립 종이 필터에 적합한 '중세분쇄' 굵기로 갈다" }],
            vocabulary: [{ word: "中细度 (zhōngxìdù)", meaning: "중세분쇄 (핸드드립용 표준 분쇄도)" }, { word: "礼品袋 (lǐpǐndài)", meaning: "선물용 쇼핑백/봉투" }, { word: "贴纸 (tiēzhǐ)", meaning: "스티커" }]
          },
          {
            role: "손님", side: "right",
            text: "好的，太感谢您这么贴心的服务了！",
            translation: "네, 이렇게 세심하게 챙겨 주셔서 정말 감사합니다!",
            expressions: [{ phrase: "太感谢您这么贴心的服务了", meaning: "세심하고 친절한 서비스에 대단히 감사합니다" }],
            vocabulary: [{ word: "贴心 (tiēxīn)", meaning: "세심하다, 배려심이 깊다" }, { word: "服务 (fúwù)", meaning: "서비스" }]
          }
        ]
      }
    ],

    // ==========================================
    // 4. 베트남어 (Tiếng Việt) - 카페 1~3번
    // ==========================================
    vi: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Xin chào! Chào mừng quý khách. Hôm nay quý khách muốn dùng gì ạ?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴를 드시겠어요?",
            expressions: [
              { phrase: "Quý khách muốn dùng gì ạ?", meaning: "손님, 무엇을 드시겠습니까?" }
            ],
            vocabulary: [
              { word: "quý khách", meaning: "손님, 고객님" },
              { word: "dùng", meaning: "(음식·음료를) 드시다, 사용하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Xin chào! Cho tôi một ly Americano đá và một bánh muffin việt quất nhé.",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주세요.",
            expressions: [
              { phrase: "Cho tôi ~ nhé", meaning: "저에게 ~을 주세요" }
            ],
            vocabulary: [
              { word: "đá", meaning: "얼음 (아이스)" },
              { word: "việt quất", meaning: "블루베리" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng. Quý khách muốn chọn cỡ nào cho ly Americano đá ạ?",
            translation: "네, 알겠습니다. 아이스 아메리카노는 어떤 사이즈로 하시겠어요?",
            expressions: [
              { phrase: "chọn cỡ nào", meaning: "어떤 사이즈를 선택하다" }
            ],
            vocabulary: [
              { word: "cỡ", meaning: "사이즈, 크기" },
              { word: "ly", meaning: "잔, 컵" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Cho tôi cỡ vừa nhé. À, bạn cho ít đá giúp tôi được không?",
            translation: "미디엄 사이즈로 주세요. 아, 얼음은 조금만 넣어 주실 수 있나요?",
            expressions: [
              { phrase: "cho ít đá giúp tôi", meaning: "얼음을 적게 넣어 주세요" }
            ],
            vocabulary: [
              { word: "cỡ vừa", meaning: "중간(미디엄) 사이즈" },
              { word: "ít đá", meaning: "얼음 적게" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được ạ. Quý khách dùng tại quán hay mang đi ạ?",
            translation: "네, 가능합니다. 매장에서 드시나요, 아니면 가져가시나요?",
            expressions: [
              { phrase: "dùng tại quán hay mang đi", meaning: "매장에서 드실지 포장해 가실지 묻는 표현" }
            ],
            vocabulary: [
              { word: "tại quán", meaning: "매장에서" },
              { word: "mang đi", meaning: "가지고 가다 (테이크아웃)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Tôi dùng tại quán nhé.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "Tôi dùng tại quán", meaning: "매장에서 먹고 가겠습니다" }
            ],
            vocabulary: [
              { word: "quán", meaning: "가게, 매장" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ, tổng cộng của quý khách là 95.000 đồng. Quý khách có thể chạm thẻ ở đây và nhận đồ tại quầy nhé!",
            translation: "네, 총 95,000동입니다. 여기에 카드를 태그해 주시고 픽업대에서 메뉴를 수령해 주세요!",
            expressions: [
              { phrase: "chạm thẻ ở đây", meaning: "여기에 카드를 태그하다" }
            ],
            vocabulary: [
              { word: "tổng cộng", meaning: "총액, 합계" },
              { word: "chạm thẻ", meaning: "카드를 터치(태그)하다" },
              { word: "quầy", meaning: "카운터, 픽업대" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Chào buổi sáng! Hôm nay quý khách muốn uống gì ạ?",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 마시고 싶으신가요?",
            expressions: [
              { phrase: "Chào buổi sáng!", meaning: "좋은 아침입니다!" }
            ],
            vocabulary: [
              { word: "buổi sáng", meaning: "아침, 오전" },
              { word: "uống", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Xin chào! Cho tôi một ly latte vani nóng cỡ vừa, và đổi sang cà phê không caffein được không?",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈 한 잔 주시고, 디카페인 커피로 바꿀 수 있나요?",
            expressions: [
              { phrase: "đổi sang ~ được không?", meaning: "~으로 변경할 수 있나요?" }
            ],
            vocabulary: [
              { word: "nóng", meaning: "따뜻한, 뜨거운" },
              { word: "cà phê không caffein", meaning: "디카페인 커피 (decaf)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được chứ ạ. Quý khách có muốn dùng sữa tươi thông thường không ạ?",
            translation: "네, 물론 가능합니다. 우유는 일반 우유로 넣어 드릴까요?",
            expressions: [
              { phrase: "Dạ được chứ ạ", meaning: "네, 물론 가능합니다 (공손한 긍정)" }
            ],
            vocabulary: [
              { word: "sữa tươi", meaning: "신선한 우유, 일반 우유" },
              { word: "thông thường", meaning: "일반적인, 보통의" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "À, bạn có thể đổi sữa tươi sang sữa yến mạch giúp tôi được không?",
            translation: "아, 일반 우유를 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "đổi A sang B giúp tôi", meaning: "저를 위해 A를 B로 바꿔 주다" }
            ],
            vocabulary: [
              { word: "sữa yến mạch", meaning: "오트 밀크, 귀리 우유 (두유는 sữa đậu nành)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng! Xin báo trước với quý khách là đổi sang sữa yến mạch sẽ phụ thu thêm 15.000 đồng nhé ạ.",
            translation: "네! 미리 안내해 드리자면 오트 밀크로 변경 시 15,000동의 추가 요금이 있습니다.",
            expressions: [
              { phrase: "phụ thu thêm ~", meaning: "~의 추가 요금이 붙다" }
            ],
            vocabulary: [
              { word: "báo trước", meaning: "미리 알리다, 사전 안내하다" },
              { word: "phụ thu", meaning: "추가 요금" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Vâng, không sao đâu. Tôi sẽ thanh toán bằng thẻ nhé.",
            translation: "네, 괜찮습니다. 카드로 결제할게요.",
            expressions: [
              { phrase: "thanh toán bằng thẻ", meaning: "카드로 결제하다" }
            ],
            vocabulary: [
              { word: "không sao đâu", meaning: "괜찮습니다, 문제없습니다" },
              { word: "thanh toán", meaning: "결제하다, 계산하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Cảm ơn quý khách! Khi nào đồ uống xong, chúng tôi sẽ gọi theo số trên hóa đơn ạ.",
            translation: "감사합니다! 음료가 준비되면 영수증에 적힌 번호로 불러 드리겠습니다.",
            expressions: [
              { phrase: "gọi theo số trên hóa đơn", meaning: "영수증의 번호대로 부르다" }
            ],
            vocabulary: [
              { word: "đồ uống", meaning: "음료" },
              { word: "hóa đơn", meaning: "영수증, 계산서" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Xin chào! Quý khách muốn gọi món gì hôm nay ạ?",
            translation: "안녕하세요! 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "Quý khách muốn gọi món gì?", meaning: "어떤 메뉴를 주문하시겠습니까?" }
            ],
            vocabulary: [
              { word: "gọi món", meaning: "메뉴를 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Chào bạn! Tôi định gọi một ly mocha đá. Món này có kem tươi ở trên không?",
            translation: "안녕하세요! 아이스 카페모카를 주문하려는데요. 이 메뉴는 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "Món này có ~ ở trên không?", meaning: "이 메뉴는 위에 ~이 올라가나요?" }
            ],
            vocabulary: [
              { word: "mocha đá", meaning: "아이스 카페모카" },
              { word: "kem tươi", meaning: "휘핑크림, 생크림" },
              { word: "ở trên", meaning: "위에" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ có ạ, theo mặc định sẽ có kem tươi và sốt sô-cô-la ở trên.",
            translation: "네, 기본적으로 위에 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "theo mặc định", meaning: "기본적으로, 기본 레시피에 따라" }
            ],
            vocabulary: [
              { word: "mặc định", meaning: "기본값, 기본 설정" },
              { word: "sốt sô-cô-la", meaning: "초콜릿 소스" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Vậy bạn đừng bỏ kem tươi nhé. Và cho tôi giảm một nửa lượng si-rô để đỡ ngọt hơn được không?",
            translation: "그럼 휘핑크림은 넣지 말아 주세요. 그리고 덜 달게 시럽 양을 절반으로 줄여 주실 수 있나요?",
            expressions: [
              { phrase: "đừng bỏ kem tươi", meaning: "휘핑크림을 넣지 마세요 ('không lấy kem tươi'라고도 표현)" },
              { phrase: "giảm một nửa lượng si-rô", meaning: "시럽 양을 절반으로 줄이다" }
            ],
            vocabulary: [
              { word: "một nửa", meaning: "절반 (50%)" },
              { word: "si-rô", meaning: "시럽" },
              { word: "đỡ ngọt", meaning: "덜 달다 (적게 달다는 ít ngọt)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ được ạ! Một mocha đá không kem tươi, giảm nửa đường. Quý khách chọn cỡ nào ạ?",
            translation: "네, 알겠습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 사이즈는 어떻게 하시겠어요?",
            expressions: [
              { phrase: "không kem tươi, giảm nửa đường", meaning: "휘핑크림 빼고, 당도 절반" }
            ],
            vocabulary: [
              { word: "đường", meaning: "설탕, 당도" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Cho tôi cỡ lớn, mang đi nhé. Của tôi hết rồi.",
            translation: "라지 사이즈로 주시고, 포장해 갈게요. 제 주문은 이게 전부입니다.",
            expressions: [
              { phrase: "Của tôi hết rồi.", meaning: "제 주문은 끝났습니다(전부입니다)." }
            ],
            vocabulary: [
              { word: "cỡ lớn", meaning: "큰 사이즈 (라지)" },
              { word: "mang đi", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Dạ vâng, tổng cộng là 65.000 đồng. Chúng tôi sẽ làm ngay cho quý khách!",
            translation: "네, 총 65,000동입니다. 바로 만들어 드리겠습니다!",
            expressions: [
              { phrase: "sẽ làm ngay", meaning: "바로 만들어 드리겠습니다" }
            ],
            vocabulary: [
              { word: "làm ngay", meaning: "즉시 만들다" }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "추천 디저트 및 시즌 음료 문의하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Xin chào! Hôm nay quý khách có đang tìm món đồ uống đặc biệt nào không ạ?",
            translation: "안녕하세요! 오늘 특별히 찾으시는 음료가 있으신가요?",
            expressions: [{ phrase: "đang tìm món đồ uống đặc biệt nào không", meaning: "특별히 찾고 있는 음료가 있으신지 묻는 표현" }],
            vocabulary: [{ word: "đồ uống", meaning: "음료" }, { word: "đặc biệt", meaning: "특별한" }]
          },
          {
            role: "손님", side: "right",
            text: "Chào bạn! Hiện tại quán có đồ uống theo mùa nào không?",
            translation: "안녕하세요! 지금 매장에 나오는 시즌(계절) 한정 음료가 있나요?",
            expressions: [{ phrase: "đồ uống theo mùa", meaning: "계절(시즌) 한정 음료" }],
            vocabulary: [{ word: "hiện tại", meaning: "현재, 지금" }, { word: "theo mùa", meaning: "계절별, 시즌 한정의" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ, món latte kem hạt dẻ cười đặc biệt cho mùa xuân của quán đang rất được yêu thích.",
            translation: "네, 저희 매장의 봄 시즌 스페셜 메뉴인 피스타치오 크림 라떼가 인기가 아주 많습니다.",
            expressions: [{ phrase: "đang rất được yêu thích", meaning: "현재 큰 인기를 끌고 있다(사랑받고 있다)" }],
            vocabulary: [{ word: "hạt dẻ cười", meaning: "피스타치오" }, { word: "mùa xuân", meaning: "봄" }, { word: "yêu thích", meaning: "좋아하다, 선호하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Nghe ngon quá! Có món bánh ngọt nào hợp để ăn kèm với đồ uống đó không?",
            translation: "맛있겠네요! 그 음료와 곁들여 먹기에 잘 어울리는 디저트는 어떤 게 있나요?",
            expressions: [{ phrase: "hợp để ăn kèm với ~", meaning: "~와 함께 곁들여 먹기에 잘 어울리다" }],
            vocabulary: [{ word: "bánh ngọt", meaning: "달콤한 케이크, 디저트" }, { word: "ăn kèm", meaning: "곁들여 먹다" }]
          },
          {
            role: "직원", side: "left",
            text: "Bánh tart chanh thanh mát hoặc bánh tiramisu đậm đà đều rất hợp ạ.",
            translation: "상큼한 레몬 타르트나 진한 티라미수 모두 아주 잘 어울립니다.",
            expressions: [{ phrase: "đều rất hợp ạ", meaning: "모두 궁합이 아주 잘 맞습니다" }],
            vocabulary: [{ word: "bánh tart chanh", meaning: "레몬 타르트" }, { word: "thanh mát", meaning: "상큼하고 시원한" }, { word: "đậm đà", meaning: "(맛이) 진하고 깊은" }]
          },
          {
            role: "손님", side: "right",
            text: "Vậy cho tôi một ly latte hạt dẻ cười đá và một phần bánh tiramisu nhé.",
            translation: "그럼 아이스 피스타치오 라떼 한 잔과 티라미수 한 조각 주세요.",
            expressions: [{ phrase: "một ly ~ và một phần ~", meaning: "~ 한 잔과 (음식·디저트) 1인분/한 조각" }],
            vocabulary: [{ word: "một phần", meaning: "1인분, 한 조각" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 라떼 사이즈업 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Xin chào! Quý khách muốn gọi món gì ạ?",
            translation: "안녕하세요! 어떤 메뉴로 준비해 드릴까요?",
            expressions: [{ phrase: "Quý khách muốn gọi món gì ạ?", meaning: "무엇을 주문하시겠습니까?" }],
            vocabulary: [{ word: "gọi món", meaning: "메뉴를 주문하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Cho tôi một ly cà phê latte nóng nhé.",
            translation: "따뜻한 카페라떼 한 잔 주세요.",
            expressions: [{ phrase: "Cho tôi một ly ~", meaning: "저에게 ~ 한 잔을 주세요" }],
            vocabulary: [{ word: "cà phê latte nóng", meaning: "따뜻한 카페라떼" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ vâng, quý khách muốn dùng cỡ nhỏ hay cỡ vừa ạ?",
            translation: "네, 스몰 사이즈와 미디엄 사이즈 중 어떤 것으로 드릴까요?",
            expressions: [{ phrase: "cỡ nhỏ hay cỡ vừa", meaning: "스몰(작은) 사이즈 또는 미디엄(중간) 사이즈" }],
            vocabulary: [{ word: "cỡ nhỏ", meaning: "스몰 사이즈" }, { word: "cỡ vừa", meaning: "미디엄 사이즈" }]
          },
          {
            role: "손님", side: "right",
            text: "Tôi có thể đổi lên cỡ lớn và thêm một shot espresso được không?",
            translation: "라지 사이즈로 사이즈업하고, 에스프레소 샷을 하나 추가할 수 있나요?",
            expressions: [{ phrase: "đổi lên cỡ lớn", meaning: "라지 사이즈로 사이즈업하다" }, { phrase: "thêm một shot espresso", meaning: "에스프레소 1샷을 추가하다" }],
            vocabulary: [{ word: "cỡ lớn", meaning: "라지 사이즈" }, { word: "thêm", meaning: "추가하다, 더하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ tất nhiên là được ạ! Một latte nóng cỡ lớn thêm một shot. Quý khách có gọi thêm gì nữa không ạ?",
            translation: "네, 물론 가능합니다! 따뜻한 라떼 라지 사이즈에 샷 추가 말씀이시죠. 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "Quý khách có gọi thêm gì nữa không ạ?", meaning: "추가로 더 주문하실 것이 있으신가요?" }],
            vocabulary: [{ word: "tất nhiên", meaning: "물론, 당연히" }]
          },
          {
            role: "손님", side: "right",
            text: "Không, thế là đủ rồi. À, bạn làm nóng hơn bình thường một chút giúp tôi nhé.",
            translation: "네, 그게 전부입니다. 아, 평소보다 조금 더 뜨겁게 만들어 주시겠어요?",
            expressions: [{ phrase: "làm nóng hơn bình thường một chút", meaning: "평소보다 조금 더 뜨겁게(Extra hot) 만들다" }],
            vocabulary: [{ word: "đủ rồi", meaning: "충분하다, 다 되었다" }, { word: "bình thường", meaning: "평소, 보통" }]
          }
        ]
      },
      {
        id: 6,
        title: "매장 와이파이 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Xin lỗi cho tôi hỏi, ở quán có Wi-Fi miễn phí không?",
            translation: "실례합니다, 매장에 무료 와이파이가 있나요?",
            expressions: [{ phrase: "Xin lỗi cho tôi hỏi", meaning: "실례지만 질문 좀 하겠습니다 (정중하게 말을 걸 때)" }],
            vocabulary: [{ word: "miễn phí", meaning: "무료" }, { word: "ở quán", meaning: "매장 내에" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ! Tên mạng Wi-Fi là 'Cafe_Guest'.",
            translation: "네, 있습니다! 와이파이 네트워크 이름은 'Cafe_Guest'입니다.",
            expressions: [{ phrase: "Tên mạng Wi-Fi là ~", meaning: "와이파이 네트워크 이름은 ~입니다" }],
            vocabulary: [{ word: "tên mạng", meaning: "네트워크 이름" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn. Kết nối có cần mật khẩu không?",
            translation: "감사합니다. 연결하려면 비밀번호가 필요한가요?",
            expressions: [{ phrase: "Kết nối có cần mật khẩu không?", meaning: "접속(연결)하는 데 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "kết nối", meaning: "연결하다, 접속하다" }, { word: "mật khẩu", meaning: "비밀번호" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có, mật khẩu được in ở dưới cùng của tờ hóa đơn ạ.",
            translation: "네, 비밀번호는 영수증 맨 아래쪽에 인쇄되어 있습니다.",
            expressions: [{ phrase: "ở dưới cùng của tờ hóa đơn", meaning: "영수증 가장 아랫부분에" }],
            vocabulary: [{ word: "in", meaning: "인쇄하다" }, { word: "dưới cùng", meaning: "맨 아래, 최하단" }, { word: "hóa đơn", meaning: "영수증" }]
          },
          {
            role: "손님", side: "right",
            text: "Ồ, lúc nãy tôi lỡ vứt hóa đơn đi rồi. Bạn đọc mật khẩu giúp tôi được không?",
            translation: "아, 제가 아까 영수증을 버려버렸는데 비밀번호를 좀 알려주실 수 있나요?",
            expressions: [{ phrase: "lỡ vứt hóa đơn đi rồi", meaning: "실수로 영수증을 버려버렸다" }],
            vocabulary: [{ word: "lúc nãy", meaning: "아까, 방금 전" }, { word: "vứt", meaning: "버리다" }, { word: "đọc giúp", meaning: "(비밀번호 등을) 읽어 알려주다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ không sao ạ! Mật khẩu là 'coffee1234', viết liền và tất cả đều là chữ thường nhé ạ.",
            translation: "괜찮습니다! 비밀번호는 띄어쓰기 없이 모두 영문 소문자로 'coffee1234'입니다.",
            expressions: [{ phrase: "tất cả đều là chữ thường", meaning: "전부 알파벳 소문자입니다 (대문자는 chữ hoa)" }],
            vocabulary: [{ word: "viết liền", meaning: "띄어쓰기 없이 붙여 쓰다" }, { word: "chữ thường", meaning: "소문자" }]
          }
        ]
      },
      {
        id: 7,
        title: "콘센트 있는 좌석 위치 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Bạn ơi, điện thoại của tôi sắp hết pin rồi. Ở đây có chỗ ngồi nào gần ổ cắm điện không?",
            translation: "저기요, 제 휴대폰 배터리가 거의 다 닳았는데 콘센트가 가까운 좌석이 있나요?",
            expressions: [{ phrase: "điện thoại của tôi sắp hết pin rồi", meaning: "제 휴대폰 배터리가 거의 다 나갔습니다" }, { phrase: "chỗ ngồi nào gần ổ cắm điện", meaning: "전기 콘센트 근처의 좌석" }],
            vocabulary: [{ word: "hết pin", meaning: "배터리가 다 닳다(방전되다)" }, { word: "chỗ ngồi", meaning: "좌석, 자리" }, { word: "ổ cắm điện", meaning: "전기 콘센트" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ! Dãy bàn cạnh cửa sổ và dưới gầm bàn dài ở giữa quán đều có ổ cắm điện.",
            translation: "네, 있습니다! 창가 쪽 테이블 줄과 매장 중앙의 긴 테이블 아래쪽에 모두 콘센트가 있습니다.",
            expressions: [{ phrase: "dãy bàn cạnh cửa sổ", meaning: "창가 옆 테이블 좌석 줄" }],
            vocabulary: [{ word: "cạnh cửa sổ", meaning: "창가 옆" }, { word: "ở giữa", meaning: "중앙에, 한가운데에" }]
          },
          {
            role: "손님", side: "right",
            text: "May quá! Tôi cắm sạc laptop và ngồi làm việc một lúc có được không?",
            translation: "다행이네요! 노트북 충전기를 꽂고 잠시 작업을 좀 해도 괜찮을까요?",
            expressions: [{ phrase: "cắm sạc laptop và ngồi làm việc", meaning: "노트북 충전기를 꽂고 앉아서 작업하다" }],
            vocabulary: [{ word: "may quá", meaning: "다행이다" }, { word: "cắm sạc", meaning: "충전기를 꽂다" }, { word: "một lúc", meaning: "잠시 동안" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ thoải mái ạ! Vào ngày thường quán không giới hạn thời gian ngồi đâu ạ.",
            translation: "네, 편하게 쓰세요! 평일에는 좌석 이용 시간제한이 없습니다.",
            expressions: [{ phrase: "không giới hạn thời gian ngồi", meaning: "좌석 이용 시간을 제한하지 않는다" }],
            vocabulary: [{ word: "thoải mái", meaning: "편안하게, 자유롭게" }, { word: "ngày thường", meaning: "평일" }, { word: "giới hạn", meaning: "제한하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn. Nhân tiện cho tôi hỏi quán có cho mượn dây sạc điện thoại không?",
            translation: "감사합니다. 혹시 매장에서 휴대폰 충전 케이블을 빌려주기도 하나요?",
            expressions: [{ phrase: "có cho mượn dây sạc điện thoại không?", meaning: "휴대폰 충전 케이블을 빌려주나요?" }],
            vocabulary: [{ word: "nhân tiện", meaning: "겸사겸사, 묻는 김에" }, { word: "cho mượn", meaning: "빌려주다, 대여하다" }, { word: "dây sạc", meaning: "충전 케이블(선)" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ tiếc quá, bên em không có dịch vụ cho mượn sạc nên quý khách vui lòng dùng bộ sạc cá nhân nhé ạ.",
            translation: "아쉽게도 저희는 충전기 대여 서비스가 없어서 개인 충전기를 사용해 주셔야 합니다.",
            expressions: [{ phrase: "dùng bộ sạc cá nhân", meaning: "본인의 개인 충전기를 사용하다" }],
            vocabulary: [{ word: "tiếc quá", meaning: "아깝다, 아쉽다" }, { word: "bộ sạc cá nhân", meaning: "개인용 충전기 세트" }]
          }
        ]
      },
      {
        id: 8,
        title: "주문한 음료가 잘못 나왔을 때 교환 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "Mời khách hàng số 42! Một ly cà phê latte nóng dùng tại quán đã xong ạ!",
            translation: "42번 손님! 매장용 따뜻한 카페라떼 한 잔 나왔습니다!",
            expressions: [{ phrase: "Mời khách hàng số 42!", meaning: "주문번호 42번 손님 모십니다!" }],
            vocabulary: [{ word: "khách hàng", meaning: "고객, 손님" }, { word: "số 42", meaning: "42번" }]
          },
          {
            role: "손님", side: "right",
            text: "Xin lỗi, tôi là số 42 đây, nhưng hình như đồ uống này bị nhầm với đơn của tôi rồi.",
            translation: "실례합니다, 제가 42번인데요, 이 음료는 제가 주문한 것과 착오가 있는 것 같습니다.",
            expressions: [{ phrase: "hình như đồ uống này bị nhầm", meaning: "아무래도 이 음료가 잘못 나온(바뀐) 것 같다" }],
            vocabulary: [{ word: "hình như", meaning: "아마도, ~인 것 같다" }, { word: "bị nhầm", meaning: "착오가 생기다, 잘못되다" }]
          },
          {
            role: "직원", side: "left",
            text: "Ôi, em xin lỗi ạ! Lúc nãy quý khách đã gọi món gì vậy ạ?",
            translation: "아, 죄송합니다! 아까 어떤 메뉴를 주문하셨었나요?",
            expressions: [{ phrase: "Lúc nãy quý khách đã gọi món gì?", meaning: "방금 전에 어떤 메뉴를 주문하셨나요?" }],
            vocabulary: [{ word: "xin lỗi", meaning: "죄송합니다" }, { word: "lúc nãy", meaning: "방금 전, 아까" }]
          },
          {
            role: "손님", side: "right",
            text: "Tôi gọi một ly latte vani đá đổi sang sữa đậu nành. Hóa đơn của tôi đây.",
            translation: "두유로 변경한 아이스 바닐라 라떼를 주문했어요. 여기 제 영수증이 있습니다.",
            expressions: [{ phrase: "đổi sang sữa đậu nành", meaning: "두유로 변경하다" }, { phrase: "Hóa đơn của tôi đây.", meaning: "여기 제 영수증이 있습니다." }],
            vocabulary: [{ word: "sữa đậu nành", meaning: "두유" }, { word: "hóa đơn", meaning: "영수증" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ đúng rồi, em thành thật xin lỗi! Em sẽ làm lại ngay một ly latte vani đá sữa đậu nành cho quý khách ạ.",
            translation: "네, 맞네요, 정말 죄송합니다! 지금 바로 아이스 두유 바닐라 라떼로 다시 만들어 드리겠습니다.",
            expressions: [{ phrase: "Em sẽ làm lại ngay", meaning: "제가 즉시 다시 만들어 드리겠습니다" }],
            vocabulary: [{ word: "thành thật xin lỗi", meaning: "진심으로 사과드립니다" }, { word: "làm lại", meaning: "다시 만들다" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn. Vì tôi uống sữa bò hay bị đau bụng nên phải kiểm tra lại cho chắc.",
            translation: "감사합니다. 제가 일반 우유를 마시면 배가 자주 아파서 확실히 확인해야 했어요.",
            expressions: [{ phrase: "uống sữa bò hay bị đau bụng", meaning: "일반 우유를 마시면 자주 배탈이 나다(배가 아프다)" }],
            vocabulary: [{ word: "sữa bò", meaning: "일반 우유(소 우유)" }, { word: "đau bụng", meaning: "배가 아프다, 복통" }, { word: "cho chắc", meaning: "확실하게 하기 위해" }]
          }
        ]
      },
      {
        id: 9,
        title: "텀블러 할인 및 개인 컵 사용 요청",
        lines: [
          {
            role: "직원", side: "left",
            text: "Xin chào! Hôm nay quý khách muốn dùng đồ uống gì ạ?",
            translation: "안녕하세요! 오늘 어떤 음료를 드시겠어요?",
            expressions: [{ phrase: "muốn dùng đồ uống gì ạ?", meaning: "어떤 음료를 드시고 싶으신가요?" }],
            vocabulary: [{ word: "hôm nay", meaning: "오늘" }, { word: "dùng", meaning: "드시다, 마시다" }]
          },
          {
            role: "손님", side: "right",
            text: "Chào bạn! Tôi có mang theo bình giữ nhiệt cá nhân. Bạn làm giúp tôi món caramel macchiato đá vào bình này được không?",
            translation: "안녕하세요! 개인 텀블러를 가져왔는데요. 이 텀블러에 아이스 카라멜 마키아토를 담아 주실 수 있나요?",
            expressions: [{ phrase: "mang theo bình giữ nhiệt cá nhân", meaning: "개인 텀블러(보온·보냉병)를 가지고 오다" }],
            vocabulary: [{ word: "mang theo", meaning: "지참하다, 가지고 오다" }, { word: "bình giữ nhiệt", meaning: "텀블러, 보온·보냉병" }, { word: "cá nhân", meaning: "개인" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ được chứ ạ! Bình của quý khách có dung tích bao nhiêu ml vậy ạ?",
            translation: "물론이죠! 손님 텀블러는 용량이 몇 밀리리터(mL)인가요?",
            expressions: [{ phrase: "có dung tích bao nhiêu ml?", meaning: "용량이 몇 mL인가요?" }],
            vocabulary: [{ word: "dung tích", meaning: "용량" }, { word: "bao nhiêu", meaning: "얼마, 몇" }]
          },
          {
            role: "손님", side: "right",
            text: "Bình này 470ml nên chắc vừa khít cỡ vừa của quán.",
            translation: "470mL짜리라서 매장 미디엄 사이즈가 딱 맞게 들어갈 거예요.",
            expressions: [{ phrase: "vừa khít cỡ vừa", meaning: "미디엄 사이즈 용량에 딱 맞다" }],
            vocabulary: [{ word: "vừa khít", meaning: "딱 들어맞다" }, { word: "cỡ vừa", meaning: "미디엄 사이즈" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ vâng. Trước khi đưa bình cho em, quý khách vui lòng tháo nắp bình ra giúp em nhé.",
            translation: "네, 알겠습니다. 저에게 텀블러를 건네주시기 전에 뚜껑을 열어서 빼 주시겠어요?",
            expressions: [{ phrase: "tháo nắp bình ra giúp em", meaning: "텀블러 뚜껑을 분리해(열어) 주세요" }],
            vocabulary: [{ word: "trước khi", meaning: "~하기 전에" }, { word: "tháo ra", meaning: "분리하다, 빼다" }, { word: "nắp bình", meaning: "텀블러 뚜껑" }]
          },
          {
            role: "손님", side: "right",
            text: "Đây nhé! Mang bình cá nhân có được giảm giá không bạn?",
            translation: "여기 있습니다! 개인 텀블러를 가져오면 할인이 되나요?",
            expressions: [{ phrase: "có được giảm giá không?", meaning: "할인을 받을 수 있나요?" }],
            vocabulary: [{ word: "giảm giá", meaning: "할인하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ, quán giảm 5.000 đồng khi khách tự mang bình. Tổng cộng của quý khách còn 60.000 đồng ạ.",
            translation: "네, 개인 텀블러 지참 시 5,000동 할인해 드립니다. 총 결제 금액은 60,000동입니다.",
            expressions: [{ phrase: "giảm 5.000 đồng khi khách tự mang bình", meaning: "고객이 직접 텀블러를 가져오면 5,000동 할인" }],
            vocabulary: [{ word: "tự mang", meaning: "직접 가져오다" }, { word: "còn", meaning: "(할인 후 금액이) ~ 남다" }]
          }
        ]
      },
      {
        id: 10,
        title: "케이크 포크와 냅킨 추가 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Trà đào đá và bánh cheesecake dâu của quý khách đây ạ. Chúc quý khách ngon miệng!",
            translation: "주문하신 아이스 복숭아티와 딸기 치즈케이크 나왔습니다. 맛있게 드세요!",
            expressions: [{ phrase: "Chúc quý khách ngon miệng!", meaning: "맛있게 드세요!" }],
            vocabulary: [{ word: "trà đào đá", meaning: "아이스 복숭아 홍차(피치 아이스티)" }, { word: "dâu", meaning: "딸기" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn! Chúng tôi muốn ăn chung bánh này, bạn cho tôi xin thêm một cái nĩa nữa được không?",
            translation: "감사합니다! 케이크를 같이 나눠 먹으려고 하는데 포크를 하나 더 주실 수 있나요?",
            expressions: [{ phrase: "cho tôi xin thêm một cái nĩa nữa", meaning: "포크를 하나 더 주시겠어요?" }],
            vocabulary: [{ word: "ăn chung", meaning: "함께 나눠 먹다" }, { word: "cái nĩa", meaning: "포크 (북부에서는 dĩa라고도 함)" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ vâng! Quý khách có cần thêm một chiếc đĩa nhỏ để chia bánh không ạ?",
            translation: "네! 케이크를 덜어 드실 작은 앞접시도 하나 더 필요하신가요?",
            expressions: [{ phrase: "một chiếc đĩa nhỏ để chia bánh", meaning: "케이크를 나누어 담을 작은 앞접시" }],
            vocabulary: [{ word: "đĩa nhỏ", meaning: "작은 접시, 앞접시" }, { word: "chia", meaning: "나누다, 덜다" }]
          },
          {
            role: "손님", side: "right",
            text: "Có, cho tôi xin nhé! Và cho tôi thêm vài tờ khăn giấy nữa.",
            translation: "네, 부탁드려요! 그리고 종이 냅킨도 몇 장 더 주세요.",
            expressions: [{ phrase: "thêm vài tờ khăn giấy nữa", meaning: "종이 냅킨(티슈) 몇 장 더" }],
            vocabulary: [{ word: "vài tờ", meaning: "(종이·냅킨 등) 몇 장" }, { word: "khăn giấy", meaning: "종이 냅킨, 휴지" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ gửi quý khách ạ. Khăn giấy và nước lọc miễn phí cũng có sẵn ở quầy tự phục vụ đằng kia nhé ạ.",
            translation: "여기 있습니다. 냅킨과 무료 식수는 저쪽 셀프서비스 바에도 준비되어 있으니 편하게 이용하세요.",
            expressions: [{ phrase: "có sẵn ở quầy tự phục vụ", meaning: "셀프서비스 코너에 비치되어 있다" }],
            vocabulary: [{ word: "nước lọc", meaning: "식수, 마시는 물" }, { word: "quầy tự phục vụ", meaning: "셀프 바" }, { word: "đằng kia", meaning: "저쪽에" }]
          },
          {
            role: "손님", side: "right",
            text: "À thế à, cảm ơn bạn đã báo cho tôi biết nhé!",
            translation: "아, 그렇군요. 알려주셔서 감사합니다!",
            expressions: [{ phrase: "cảm ơn bạn đã báo cho tôi biết", meaning: "알려주셔서 감사합니다" }],
            vocabulary: [{ word: "báo", meaning: "알리다, 안내하다" }]
          }
        ]
      },
      {
        id: 11,
        title: "음료 캐리어와 빨대 챙겨 달라고 하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Bốn ly đồ uống mang đi của quý khách đã xong rồi ạ! Hai latte đá và hai Americano nóng.",
            translation: "포장 주문하신 음료 네 잔 나왔습니다! 아이스 라떼 두 잔과 따뜻한 아메리카노 두 잔입니다.",
            expressions: [{ phrase: "Bốn ly đồ uống mang đi", meaning: "테이크아웃 음료 4잔" }],
            vocabulary: [{ word: "bốn ly", meaning: "네 잔" }, { word: "mang đi", meaning: "포장, 테이크아웃" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn! Vì tôi phải xách bốn ly đi bộ nên bạn đặt vào khay đựng ly giúp tôi được không?",
            translation: "감사합니다! 네 잔을 들고 걸어가야 해서 그러는데 음료 캐리어(홀더 트레이)에 넣어 주실 수 있나요?",
            expressions: [{ phrase: "đặt vào khay đựng ly giúp tôi", meaning: "음료 캐리어(컵 트레이)에 담아 주세요" }],
            vocabulary: [{ word: "xách", meaning: "손에 들고 가다" }, { word: "đi bộ", meaning: "걸어가다" }, { word: "khay đựng ly", meaning: "음료 캐리어, 컵 받침 트레이" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ được chứ ạ! Em sẽ để vào khay giấy 4 ngăn rồi cho vào túi lớn để không bị đổ nhé.",
            translation: "물론이죠! 넘어지지 않도록 4구짜리 종이 트레이에 고정한 뒤 큰 봉투에 넣어 드리겠습니다.",
            expressions: [{ phrase: "để không bị đổ", meaning: "컵이 넘어지지(쏟아지지) 않도록" }],
            vocabulary: [{ word: "khay giấy 4 ngăn", meaning: "4구 종이 캐리어" }, { word: "túi lớn", meaning: "큰 봉투" }, { word: "bị đổ", meaning: "쓰러지다, 쏟아지다" }]
          },
          {
            role: "손님", side: "right",
            text: "May quá! Bạn dán băng keo chống tràn ở miệng ly đồ uống nóng giúp tôi luôn nhé?",
            translation: "다행이네요! 따뜻한 음료 마시는 입구에는 쏟아지지 않게 누수 방지 테이프(스티커)도 붙여 주시겠어요?",
            expressions: [{ phrase: "dán băng keo chống tràn ở miệng ly", meaning: "컵 마시는 입구에 넘침 방지 스티커를 붙이다" }],
            vocabulary: [{ word: "dán", meaning: "붙이다" }, { word: "chống tràn", meaning: "넘침 방지, 누수 방지" }, { word: "miệng ly", meaning: "컵 입구" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ, em đã dán kín miệng ly nóng và bỏ sẵn hai ống hút cho ly đá vào trong túi rồi ạ.",
            translation: "네, 따뜻한 음료 입구는 밀봉 스티커를 붙였고 아이스 음료용 빨대 두 개도 봉투 안에 넣어 드렸습니다.",
            expressions: [{ phrase: "bỏ sẵn hai ống hút ~ vào trong túi", meaning: "봉투 안에 빨대 두 개를 미리 챙겨 넣었다" }],
            vocabulary: [{ word: "dán kín", meaning: "새지 않게 밀봉해 붙이다" }, { word: "ống hút", meaning: "빨대" }]
          },
          {
            role: "손님", side: "right",
            text: "Bạn đóng gói cẩn thận quá, cảm ơn bạn nhiều nhé!",
            translation: "정말 꼼꼼하게 포장해 주시네요, 대단히 감사합니다!",
            expressions: [{ phrase: "đóng gói cẩn thận quá", meaning: "포장을 아주 꼼꼼하고 조심스럽게 잘했다" }],
            vocabulary: [{ word: "đóng gói", meaning: "포장하다" }, { word: "cẩn thận", meaning: "꼼꼼한, 조심스러운" }]
          }
        ]
      },
      {
        id: 12,
        title: "원두 종류(산미/고소함) 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Cho tôi một ly Americano đá. Ở đây tôi có được chọn loại hạt cà phê không?",
            translation: "아이스 아메리카노 한 잔 주세요. 여기는 커피 원두 종류를 고를 수 있나요?",
            expressions: [{ phrase: "có được chọn loại hạt cà phê không?", meaning: "커피 원두 종류를 선택할 수 있나요?" }],
            vocabulary: [{ word: "chọn", meaning: "고르다, 선택하다" }, { word: "hạt cà phê", meaning: "커피 원두" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ! Quán có hai loại là hạt phối trộn rang đậm và hạt Arabica Cầu Đất rang vừa.",
            translation: "네! 다크 로스트(강배전) 블렌드 원두와 미디엄 로스트(중배전) 꺼우덧 아라비카 싱글 오리진 두 종류가 있습니다.",
            expressions: [{ phrase: "hạt phối trộn rang đậm", meaning: "강배전(다크 로스트) 블렌드 원두" }],
            vocabulary: [{ word: "rang đậm", meaning: "강배전, 다크 로스트" }, { word: "rang vừa", meaning: "중배전 (약배전은 rang nhạt)" }]
          },
          {
            role: "손님", side: "right",
            text: "Hương vị của hai loại hạt này khác nhau như thế nào vậy bạn?",
            translation: "이 두 가지 원두의 맛과 풍미는 어떻게 다른가요?",
            expressions: [{ phrase: "Hương vị ~ khác nhau như thế nào?", meaning: "맛과 향이 어떻게 다른가요?" }],
            vocabulary: [{ word: "hương vị", meaning: "풍미, 맛과 향" }, { word: "khác nhau", meaning: "서로 다르다" }]
          },
          {
            role: "직원", side: "left",
            text: "Hạt rang đậm thì ít chua, thơm mùi sô-cô-la và hạt dẻ; còn hạt Cầu Đất thì có vị chua thanh của trái cây ạ.",
            translation: "강배전 원두는 산미가 적고 초콜릿과 견과류의 고소한 향이 나며, 꺼우덧 원두는 과일의 상큼한 산미가 있습니다.",
            expressions: [{ phrase: "ít chua, thơm mùi sô-cô-la và hạt dẻ", meaning: "산미(신맛)가 적고 초콜릿과 견과류의 고소한 향이 나다" }],
            vocabulary: [{ word: "ít chua", meaning: "신맛(산미)이 적은" }, { word: "vị chua thanh", meaning: "깔끔하고 상큼한 산미" }, { word: "trái cây", meaning: "과일" }]
          },
          {
            role: "손님", side: "right",
            text: "Tôi thích cà phê thơm bùi hơn là cà phê chua, nên cho tôi chọn hạt rang đậm nhé.",
            translation: "저는 신맛 나는 커피보다 고소한 커피를 더 좋아해서, 강배전 원두로 선택할게요.",
            expressions: [{ phrase: "thích cà phê thơm bùi hơn là cà phê chua", meaning: "신맛 나는 커피보다 고소한 커피를 더 선호하다" }],
            vocabulary: [{ word: "thơm bùi", meaning: "고소하고 향기로운" }, { word: "chua", meaning: "시다, 산미가 있다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ vâng! Em sẽ pha ngay một ly Americano đá bằng hạt rang đậm cho quý khách ạ.",
            translation: "네, 알겠습니다! 바로 강배전 원두로 아이스 아메리카노 한 잔 내려 드리겠습니다.",
            expressions: [{ phrase: "pha ngay ~ bằng hạt rang đậm", meaning: "즉시 강배전 원두로 (커피를) 추출하다" }],
            vocabulary: [{ word: "pha", meaning: "(커피·차를) 내리다, 타다" }]
          }
        ]
      },
      {
        id: 13,
        title: "얼음 없이 차가운 음료 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Xin chào! Quý khách muốn dùng món gì hôm nay ạ?",
            translation: "안녕하세요! 오늘 어떤 메뉴로 드릴까요?",
            expressions: [{ phrase: "muốn dùng món gì hôm nay ạ?", meaning: "오늘 어떤 메뉴를 드시겠습니까?" }],
            vocabulary: [{ word: "món gì", meaning: "어떤 메뉴" }]
          },
          {
            role: "손님", side: "right",
            text: "Cho tôi một ly matcha latte lạnh cỡ vừa, nhưng làm hoàn toàn không đá giúp tôi được không?",
            translation: "아이스 말차 라떼 미디엄 사이즈로 주시되, 얼음은 아예 빼고 만들어 주실 수 있나요?",
            expressions: [{ phrase: "làm hoàn toàn không đá", meaning: "얼음을 완전히 빼고(No ice) 만들다" }],
            vocabulary: [{ word: "lạnh", meaning: "차가운" }, { word: "hoàn toàn", meaning: "완전히, 아예" }, { word: "không đá", meaning: "얼음 없음" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ không đá đúng không ạ? Nếu bỏ đá hoàn toàn thì lượng nước trong ly sẽ hơi vơi một chút, quý khách có đồng ý không ạ?",
            translation: "얼음 빼기 말씀이시죠? 얼음을 완전히 빼면 컵의 음료 높이가 조금 줄어드는데 괜찮으신가요?",
            expressions: [{ phrase: "lượng nước trong ly sẽ hơi vơi một chút", meaning: "컵 안의 음료 양이 조금 덜 차게(줄어들게) 된다" }],
            vocabulary: [{ word: "lượng nước", meaning: "음료(액체)의 양" }, { word: "hơi vơi", meaning: "약간 덜 찬, 줄어든" }, { word: "đồng ý", meaning: "동의하다, 괜찮다" }]
          },
          {
            role: "손님", side: "right",
            text: "À ra vậy. Bạn có thể cho thêm sữa tươi lạnh cho đầy ly giúp tôi được không?",
            translation: "아, 그렇군요. 혹시 비는 만큼 차가운 우유를 더 넣어서 가득 채워 주실 수 있나요?",
            expressions: [{ phrase: "cho thêm sữa tươi lạnh cho đầy ly", meaning: "차가운 우유를 더 부어 컵을 가득 채우다" }],
            vocabulary: [{ word: "ra vậy", meaning: "그렇군요" }, { word: "đầy ly", meaning: "컵 가득" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ được ạ, tụi em có thể đổ đầy bằng sữa tươi lạnh mà không tính thêm phí đâu ạ!",
            translation: "네, 가능합니다! 추가 요금 없이 차가운 우유로 끝까지 채워 드릴 수 있어요!",
            expressions: [{ phrase: "mà không tính thêm phí", meaning: "추가 요금을 받지 않고(무료로)" }],
            vocabulary: [{ word: "đổ đầy", meaning: "가득 채우다" }, { word: "tính thêm phí", meaning: "추가 요금을 청구하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Thế thì tuyệt quá! Cho tôi không đá và thêm đầy sữa nhé, cảm ơn bạn.",
            translation: "정말 좋네요! 얼음 빼고 우유 가득으로 부탁합니다, 감사합니다.",
            expressions: [{ phrase: "Thế thì tuyệt quá!", meaning: "그렇다면 정말 멋지네요(좋네요)!" }],
            vocabulary: [{ word: "tuyệt quá", meaning: "아주 훌륭하다, 정말 좋다" }]
          }
        ]
      },
      {
        id: 14,
        title: "화장실 위치 및 비밀번호 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Xin lỗi, bạn cho tôi hỏi nhà vệ sinh ở đâu vậy?",
            translation: "실례합니다, 화장실이 어디에 있는지 알려주시겠어요?",
            expressions: [{ phrase: "cho tôi hỏi nhà vệ sinh ở đâu vậy?", meaning: "화장실이 어디에 있는지 여쭤봐도 될까요?" }],
            vocabulary: [{ word: "nhà vệ sinh", meaning: "화장실" }, { word: "ở đâu", meaning: "어디에" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ quý khách đi qua quầy nhận đồ, rồi đi thẳng theo hành lang bên trái tới cuối đường là thấy ạ.",
            translation: "픽업 카운터를 지나서 왼쪽 복도를 따라 끝까지 쭉 들어가시면 보입니다.",
            expressions: [{ phrase: "đi thẳng theo hành lang bên trái", meaning: "왼쪽 복도를 따라 곧장 걸어가다" }],
            vocabulary: [{ word: "đi qua", meaning: "지나가다" }, { word: "hành lang", meaning: "복도" }, { word: "bên trái", meaning: "왼쪽" }, { word: "cuối đường", meaning: "길 끝, 안쪽 끝" }]
          },
          {
            role: "손님", side: "right",
            text: "Cảm ơn bạn. Vào đó có cần chìa khóa hay mật khẩu cửa không?",
            translation: "감사합니다. 들어가려면 열쇠나 도어락 비밀번호가 필요한가요?",
            expressions: [{ phrase: "có cần chìa khóa hay mật khẩu cửa không?", meaning: "열쇠나 출입문 비밀번호가 필요한가요?" }],
            vocabulary: [{ word: "chìa khóa", meaning: "열쇠" }, { word: "mật khẩu cửa", meaning: "문 비밀번호" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có khóa số ở trên cửa ạ. Quý khách bấm '2580' rồi bấm phím thăng nhé.",
            translation: "네, 문에 번호키가 있습니다. '2580'을 누르신 뒤 우물 정(#) 버튼을 눌러주세요.",
            expressions: [{ phrase: "bấm '2580' rồi bấm phím thăng", meaning: "2580을 누른 다음 # 키(우물 정 자)를 누르다" }],
            vocabulary: [{ word: "khóa số", meaning: "번호키, 디지털 도어락" }, { word: "bấm", meaning: "(버튼을) 누르다" }, { word: "phím thăng", meaning: "# 버튼 (별표 * 버튼은 phím sao)" }]
          },
          {
            role: "손님", side: "right",
            text: "'2580' rồi bấm phím thăng đúng không? Cảm ơn bạn nhé!",
            translation: "'2580' 누르고 # 버튼 맞죠? 감사합니다!",
            expressions: [{ phrase: "đúng không?", meaning: "~ 맞지요?" }],
            vocabulary: [{ word: "rồi", meaning: "그리고 나서, 그다음" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ không có chi ạ. Nếu không mở được cửa thì quý khách cứ gọi nhân viên nhé!",
            translation: "천만에요. 혹시 문이 안 열리면 언제든 직원을 불러 주세요!",
            expressions: [{ phrase: "Dạ không có chi ạ.", meaning: "천만에요 / 별말씀을요." }],
            vocabulary: [{ word: "mở cửa", meaning: "문을 열다" }, { word: "nhân viên", meaning: "직원" }]
          }
        ]
      },
      {
        id: 15,
        title: "테이블 위 흘린 음료 정리 도움 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "Xin lỗi bạn, tôi lỡ tay làm đổ ly khiến cà phê tràn ra bàn mất rồi.",
            translation: "실례합니다, 제가 실수로 컵을 넘어뜨려서 테이블에 커피를 쏟아버렸어요.",
            expressions: [{ phrase: "lỡ tay làm đổ ly", meaning: "실수로 손을 잘못 놀려 컵을 넘어뜨렸다" }, { phrase: "tràn ra bàn", meaning: "테이블 위로 쏟아져 흘렀다" }],
            vocabulary: [{ word: "lỡ tay", meaning: "실수로 (손을 잘못 건드려)" }, { word: "làm đổ", meaning: "쓰러뜨리다, 쏟다" }, { word: "bàn", meaning: "테이블, 식탁" }]
          },
          {
            role: "직원", side: "left",
            text: "Ôi, quý khách có sao không ạ? Quần áo có bị bẩn hay bị bỏng không ạ?",
            translation: "아이고, 괜찮으신가요? 옷이 더러워지거나 데이지는 않으셨나요?",
            expressions: [{ phrase: "Quý khách có sao không ạ?", meaning: "손님 괜찮으신가요? (다친 곳이 없는지 걱정하며 묻는 표현)" }],
            vocabulary: [{ word: "quần áo", meaning: "옷, 의류" }, { word: "bị bẩn", meaning: "더러워지다, 묻다" }, { word: "bị bỏng", meaning: "화상을 입다, 데이다" }]
          },
          {
            role: "손님", side: "right",
            text: "Vì là cà phê đá nên tôi không sao. Bạn cho tôi mượn chiếc khăn lau bàn được không?",
            translation: "아이스커피여서 저는 괜찮습니다. 닦을 수 있게 행주를 좀 빌려주실 수 있나요?",
            expressions: [{ phrase: "cho tôi mượn chiếc khăn lau bàn", meaning: "테이블 닦을 행주를 빌려주다" }],
            vocabulary: [{ word: "cà phê đá", meaning: "아이스커피" }, { word: "khăn lau bàn", meaning: "식탁용 행주" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ quý khách cứ để đó tụi em dọn cho ạ! Mời quý khách chuyển sang bàn trống bên cạnh ngồi tạm nhé.",
            translation: "그냥 두시면 저희가 치우겠습니다! 우선 옆에 있는 빈 테이블로 자리를 옮겨 앉아 주세요.",
            expressions: [{ phrase: "cứ để đó tụi em dọn cho ạ", meaning: "그대로 두시면 저희(직원들)가 치워 드리겠습니다" }],
            vocabulary: [{ word: "dọn", meaning: "치우다, 정리하다" }, { word: "chuyển sang", meaning: "옮기다, 이동하다" }, { word: "bàn trống", meaning: "빈 테이블" }]
          },
          {
            role: "손님", side: "right",
            text: "Làm phiền bạn quá, tôi thật sự xin lỗi nhé.",
            translation: "번거롭게 해 드려 정말 죄송합니다.",
            expressions: [{ phrase: "Làm phiền bạn quá", meaning: "너무 번거롭게(폐를 끼치게) 해 드렸네요" }],
            vocabulary: [{ word: "làm phiền", meaning: "폐를 끼치다, 번거롭게 하다" }, { word: "thật sự", meaning: "정말로, 진심으로" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ không sao đâu ạ! Tụi em cũng sẽ pha lại miễn phí một ly cà phê đá mới mang ra bàn cho quý khách ngay ạ.",
            translation: "전혀 괜찮습니다! 새 아이스커피도 무료로 다시 만들어서 테이블로 바로 가져다드리겠습니다.",
            expressions: [{ phrase: "pha lại miễn phí một ly ~ mới", meaning: "무료로 새 음료를 한 잔 다시 만들어 주다" }],
            vocabulary: [{ word: "miễn phí", meaning: "무료로" }, { word: "mới", meaning: "새로운" }]
          }
        ]
      },
      {
        id: 16,
        title: "영수증 발급 및 분할 결제 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hai bánh mì nướng và hai ly latte đá của quý khách tổng cộng là 240.000 đồng ạ.",
            translation: "토스트 샌드위치 두 개와 아이스 라떼 두 잔 해서 총 240,000동입니다.",
            expressions: [{ phrase: "tổng cộng là 240.000 đồng", meaning: "총액은 240,000동입니다" }],
            vocabulary: [{ word: "bánh mì nướng", meaning: "토스트, 구운 샌드위치" }, { word: "tổng cộng", meaning: "총합, 합계" }]
          },
          {
            role: "손님", side: "right",
            text: "Chúng tôi có thể chia đôi hóa đơn và thanh toán riêng bằng hai thẻ tín dụng được không?",
            translation: "계산서를 반으로 나누어 신용카드 두 장으로 각각 따로 결제할 수 있나요?",
            expressions: [{ phrase: "chia đôi hóa đơn và thanh toán riêng", meaning: "계산서를 반으로 나누어 따로 결제하다" }],
            vocabulary: [{ word: "chia đôi", meaning: "반으로 나누다" }, { word: "thanh toán riêng", meaning: "개별로(따로) 결제하다" }, { word: "thẻ tín dụng", meaning: "신용카드" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ được ạ, em sẽ chia thành hai lần quẹt thẻ, mỗi người 120.000 đồng. Mời thẻ đầu tiên chạm vào máy ạ.",
            translation: "네, 가능합니다! 한 분당 120,000동씩 두 번으로 나누어 결제해 드릴게요. 먼저 첫 번째 카드를 단말기에 태그해 주세요.",
            expressions: [{ phrase: "chia thành hai lần quẹt thẻ", meaning: "두 번의 카드 결제로 나누다" }],
            vocabulary: [{ word: "mỗi người", meaning: "1인당, 각 사람마다" }, { word: "đầu tiên", meaning: "첫 번째" }, { word: "máy", meaning: "단말기, 기계" }]
          },
          {
            role: "손님", side: "right",
            text: "Tôi chạm thẻ rồi. Bạn in giúp tôi biên lai và hóa đơn cho phần của tôi nhé.",
            translation: "태그했습니다. 제 결제분에 대한 영수증을 출력해 주시겠어요?",
            expressions: [{ phrase: "in giúp tôi biên lai", meaning: "영수증(전표)을 출력해 주세요" }],
            vocabulary: [{ word: "in", meaning: "인쇄하다, 출력하다" }, { word: "biên lai", meaning: "카드 결제 영수증(전표)" }, { word: "phần của tôi", meaning: "내 몫" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ biên lai của thẻ thứ nhất đây ạ. Tiếp theo mời người thứ hai chạm thẻ nhé ạ.",
            translation: "여기 첫 번째 카드 영수증입니다. 이어서 두 번째 분도 카드를 태그해 주세요.",
            expressions: [{ phrase: "Tiếp theo mời người thứ hai", meaning: "이어서 두 번째 분 모십니다" }],
            vocabulary: [{ word: "thứ nhất", meaning: "첫 번째" }, { word: "tiếp theo", meaning: "이어서, 다음으로" }, { word: "thứ hai", meaning: "두 번째" }]
          },
          {
            role: "손님", side: "right",
            text: "Bạn tôi cũng thanh toán xong rồi. Cảm ơn bạn đã tách hóa đơn giúp chúng tôi nhé!",
            translation: "제 친구도 결제를 마쳤네요. 계산서를 나누어 결제해 주셔서 감사합니다!",
            expressions: [{ phrase: "cảm ơn bạn đã tách hóa đơn", meaning: "영수증(결제)을 나누어 주셔서 감사합니다" }],
            vocabulary: [{ word: "bạn tôi", meaning: "내 친구" }, { word: "tách hóa đơn", meaning: "계산서를 분리하다(나누다)" }]
          }
        ]
      },
      {
        id: 17,
        title: "브런치 세트 가능 시간 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Xin chào! Tôi thấy biển quảng cáo combo bữa sáng muộn ở bên ngoài, bây giờ còn gọi được không bạn?",
            translation: "안녕하세요! 밖에서 브런치 세트 안내판을 봤는데, 지금도 주문할 수 있나요?",
            expressions: [{ phrase: "combo bữa sáng muộn (brunch)", meaning: "브런치 세트 메뉴" }, { phrase: "bây giờ còn gọi được không?", meaning: "지금도 주문할 수 있나요?" }],
            vocabulary: [{ word: "biển quảng cáo", meaning: "안내 간판, 표지판" }, { word: "bên ngoài", meaning: "밖, 외부" }, { word: "bây giờ", meaning: "지금" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ còn ạ! Thực đơn brunch được phục vụ đến 2 giờ chiều, quý khách đến vừa kịp lúcเลย ạ!",
            translation: "네, 가능합니다! 브런치 메뉴는 오후 2시까지 제공되어서 시간에 딱 맞춰 잘 오셨어요!",
            expressions: [{ phrase: "được phục vụ đến 2 giờ chiều", meaning: "오후 2시까지 제공된다" }, { phrase: "đến vừa kịp lúc", meaning: "시간에 딱 맞춰 도착하다" }],
            vocabulary: [{ word: "thực đơn", meaning: "메뉴판, 식단" }, { word: "phục vụ", meaning: "제공하다, 서빙하다" }, { word: "kịp lúc", meaning: "제시간에 맞추다" }]
          },
          {
            role: "손님", side: "right",
            text: "May quá! Combo bánh mì nướng bơ có bao gồm cà phê không?",
            translation: "다행이네요! 아보카도 토스트 세트에는 커피도 포함되어 있나요?",
            expressions: [{ phrase: "có bao gồm cà phê không?", meaning: "커피가 포함되어 있나요?" }],
            vocabulary: [{ word: "bánh mì nướng bơ", meaning: "아보카도 토스트 (베트남어에서 bơ는 아보카도 또는 버터를 뜻함)" }, { word: "bao gồm", meaning: "포함하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có bao gồm một ly Americano hoặc trà đen, và thêm 15.000 đồng nếu quý khách muốn đổi sang cà phê latte ạ.",
            translation: "네, 아메리카노나 홍차 한 잔이 기본 포함이며, 15,000동을 추가하시면 카페라떼로 변경하실 수 있습니다.",
            expressions: [{ phrase: "thêm 15.000 đồng nếu ~ muốn đổi sang ~", meaning: "~로 변경 원하실 경우 15,000동 추가" }],
            vocabulary: [{ word: "trà đen", meaning: "홍차" }, { word: "đổi sang", meaning: "~로 변경하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Vậy cho tôi một combo bánh mì nướng bơ và đổi đồ uống sang latte đá nhé. Món ăn làm mất khoảng bao lâu?",
            translation: "그럼 아보카도 토스트 세트 하나에 음료는 아이스 라떼로 바꿀게요. 음식 나오는 데 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "Món ăn làm mất khoảng bao lâu?", meaning: "음식을 조리하는 데 대략 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "món ăn", meaning: "음식, 요리" }, { word: "bao lâu", meaning: "얼마나 오래" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ mất khoảng 10 phút ạ. Khi nào thẻ báo rung này kêu thì mời quý khách ra quầy nhận món nhé!",
            translation: "약 10분 정도 걸립니다. 이 진동벨이 울리면 카운터로 와서 메뉴를 수령해 주세요!",
            expressions: [{ phrase: "Khi nào thẻ báo rung này kêu", meaning: "이 진동벨이 울릴 때" }],
            vocabulary: [{ word: "10 phút", meaning: "10분" }, { word: "thẻ báo rung", meaning: "진동벨, 호출기" }]
          }
        ]
      },
      {
        id: 18,
        title: "알레르기 유발 성분(견과류 등) 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Trước khi gọi món, cho tôi hỏi về thành phần nguyên liệu một chút. Con tôi bị dị ứng nặng với đậu phộng và các loại hạt.",
            translation: "주문하기 전에 원재료 성분에 대해 좀 여쭤볼게요. 제 아이가 땅콩과 견과류에 심한 알레르기가 있어서요.",
            expressions: [{ phrase: "bị dị ứng nặng với đậu phộng và các loại hạt", meaning: "땅콩과 견과류에 심한 알레르기가 있다" }],
            vocabulary: [{ word: "thành phần nguyên liệu", meaning: "원재료 성분" }, { word: "dị ứng", meaning: "알레르기" }, { word: "đậu phộng", meaning: "땅콩 (북부에서는 lạc)" }, { word: "các loại hạt", meaning: "각종 견과류" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ cảm ơn quý khách đã báo trước! Quý khách đang xem món bánh nào để em kiểm tra bảng thông tin dị ứng ạ?",
            translation: "미리 말씀해 주셔서 감사합니다! 어떤 빵을 보고 계신지 알려주시면 알레르기 유발 성분표를 확인해 드리겠습니다.",
            expressions: [{ phrase: "kiểm tra bảng thông tin dị ứng", meaning: "알레르기 성분 안내표를 확인하다" }],
            vocabulary: [{ word: "báo trước", meaning: "미리 알리다" }, { word: "kiểm tra", meaning: "확인하다, 점검하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Bánh scone sô-cô-la và bánh mì chuối có chứa hạt gì không bạn?",
            translation: "초콜릿 스콘이나 바나나 브레드에 견과류가 들어 있나요?",
            expressions: [{ phrase: "có chứa hạt gì không?", meaning: "견과류가 조금이라도 함유되어 있나요?" }],
            vocabulary: [{ word: "bánh mì chuối", meaning: "바나나 브레드(빵)" }, { word: "chứa", meaning: "함유하다, 포함하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Bánh mì chuối có hạt óc chó bên trong. Bánh scone thì không có hạt nhưng lại được nướng chung trong một lò ạ.",
            translation: "바나나 브레드 안에는 호두가 들어 있습니다. 스콘에는 견과류가 없지만 같은 오븐에서 함께 구워집니다.",
            expressions: [{ phrase: "được nướng chung trong một lò", meaning: "같은 오븐에서 함께 구워진다 (교차 오염 안내)" }],
            vocabulary: [{ word: "hạt óc chó", meaning: "호두" }, { word: "nướng", meaning: "(오븐에) 굽다" }, { word: "lò", meaning: "오븐, 화덕" }]
          },
          {
            role: "손님", side: "right",
            text: "Dính một chút cũng nguy hiểm nên tôi muốn tránh. Quán có đồ ăn vặt đóng gói sẵn nào không chứa các loại hạt không?",
            translation: "미량이라도 묻으면 위험해서 피하고 싶은데요. 혹시 견과류가 전혀 들어가지 않은 개별 포장 간식이 있나요?",
            expressions: [{ phrase: "đồ ăn vặt đóng gói sẵn ~ không chứa các loại hạt", meaning: "견과류가 함유되지 않은 개별 밀봉 포장 간식" }],
            vocabulary: [{ word: "nguy hiểm", meaning: "위험한" }, { word: "tránh", meaning: "피하다" }, { word: "đồ ăn vặt", meaning: "간식, 스낵" }, { word: "đóng gói sẵn", meaning: "미리 밀봉 포장된" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ có ạ! Túi thạch táo hữu cơ và bánh quy bột gạo này được sản xuất tại nhà máy riêng không có chất gây dị ứng nên rất an toàn cho bé.",
            translation: "네, 있습니다! 이 유기농 사과 젤리 파우치와 쌀가루 쿠키는 알레르기 유발 물질이 없는 전용 공장에서 만들어져서 아이에게 아주 안전합니다.",
            expressions: [{ phrase: "sản xuất tại nhà máy riêng không có chất gây dị ứng", meaning: "알레르기 유발 물질 무첨가 전용 공장에서 생산되다" }],
            vocabulary: [{ word: "hữu cơ", meaning: "유기농의" }, { word: "bánh quy bột gạo", meaning: "쌀가루 쿠키" }, { word: "an toàn", meaning: "안전한" }]
          }
        ]
      },
      {
        id: 19,
        title: "마감 시간 및 라스트 오더 시간 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Xin lỗi, quán mình vẫn còn mở cửa chứ, hay là sắp đóng cửa rồi?",
            translation: "실례합니다, 매장 아직 영업 중인가요, 아니면 곧 문 닫을 시간인가요?",
            expressions: [{ phrase: "vẫn còn mở cửa chứ, hay là sắp đóng cửa rồi?", meaning: "아직 영업 중인가요, 아니면 곧 마감인가요?" }],
            vocabulary: [{ word: "mở cửa", meaning: "문을 열다, 영업하다" }, { word: "đóng cửa", meaning: "문을 닫다, 마감하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ quán vẫn đang mở cửa ạ! Tối nay tụi em đóng cửa lúc 10 giờ, và ngừng nhận đơn lúc 9 giờ 30.",
            translation: "아직 영업 중입니다! 오늘 밤 10시에 마감하고, 마지막 주문(라스트 오더)은 9시 30분까지 받습니다.",
            expressions: [{ phrase: "đóng cửa lúc 10 giờ, và ngừng nhận đơn lúc 9 giờ 30", meaning: "10시에 마감하고 9시 30분에 주문을 마감한다" }],
            vocabulary: [{ word: "tối nay", meaning: "오늘 밤" }, { word: "ngừng nhận đơn", meaning: "주문을 마감하다 (라스트 오더)" }]
          },
          {
            role: "손님", side: "right",
            text: "Tốt quá! Chúng tôi ngồi lại quán khoảng 40 phút uống trà thảo mộc có được không?",
            translation: "다행이네요! 매장에 40분 정도 앉아서 허브티를 마시고 가도 될까요?",
            expressions: [{ phrase: "ngồi lại quán khoảng 40 phút", meaning: "매장에 약 40분 동안 앉아 있다 가다" }],
            vocabulary: [{ word: "trà thảo mộc", meaning: "허브티" }, { word: "khoảng", meaning: "약, 대략" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ thoải mái ạ! Bếp đồ ăn nóng đã nghỉ rồi nhưng tất cả các loại đồ uống và bánh ngọt đều vẫn gọi được ạ.",
            translation: "네, 편하게 계세요! 따뜻한 식사 조리 주방은 마감되었지만, 모든 음료와 케이크는 주문하실 수 있습니다.",
            expressions: [{ phrase: "tất cả các loại đồ uống và bánh ngọt đều vẫn gọi được", meaning: "모든 음료와 케이크류는 여전히 주문 가능하다" }],
            vocabulary: [{ word: "bếp", meaning: "주방" }, { word: "nghỉ", meaning: "쉬다, 마감하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Vậy cho chúng tôi hai ly trà hoa cúc nóng dùng tại quán nhé.",
            translation: "그럼 따뜻한 캐모마일 차 두 잔을 매장 이용으로 주세요.",
            expressions: [{ phrase: "hai ly trà hoa cúc nóng dùng tại quán", meaning: "매장에서 마실 따뜻한 캐모마일 티 두 잔" }],
            vocabulary: [{ word: "trà hoa cúc", meaning: "캐모마일 차, 국화차" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ vâng. Vì còn chưa đầy một tiếng nữa là quán đóng cửa nên em xin phép phục vụ bằng ly giấy mang đi nhé ạ.",
            translation: "네, 알겠습니다. 마감까지 1시간이 채 남지 않아서 테이크아웃용 종이컵에 담아 제공해 드려도 괜찮을까요?",
            expressions: [{ phrase: "còn chưa đầy một tiếng nữa là quán đóng cửa", meaning: "매장 마감까지 1시간도 채 남지 않았다" }],
            vocabulary: [{ word: "chưa đầy", meaning: "~가 채 안 되는" }, { word: "một tiếng", meaning: "1시간" }, { word: "ly giấy", meaning: "종이컵" }]
          }
        ]
      },
      {
        id: 20,
        title: "선물용 원두 분쇄도 지정해 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Tôi muốn mua một gói hạt cà phê Ethiopia này để làm quà tặng cho bạn.",
            translation: "친구에게 선물로 주려고 이 에티오피아 커피 원두를 한 봉지 사고 싶습니다.",
            expressions: [{ phrase: "mua ~ để làm quà tặng cho bạn", meaning: "친구에게 줄 선물용으로 ~을 구매하다" }],
            vocabulary: [{ word: "một gói", meaning: "한 봉지" }, { word: "quà tặng", meaning: "선물" }]
          },
          {
            role: "직원", side: "left",
            text: "Cảm ơn quý khách! Gói này là cà phê nguyên hạt, quý khách muốn để nguyên hạt hay cần tụi em xay sẵn thành bột ạ?",
            translation: "감사합니다! 이 제품은 갈지 않은 통원두(홀빈)인데, 그대로 드릴까요, 아니면 원두를 갈아(분쇄해) 드릴까요?",
            expressions: [{ phrase: "để nguyên hạt hay cần tụi em xay sẵn thành bột?", meaning: "통원두 그대로 둘까요, 아니면 가루로 분쇄해 드릴까요?" }],
            vocabulary: [{ word: "nguyên hạt", meaning: "홀빈, 갈지 않은 통원두" }, { word: "xay", meaning: "(원두·곡물을) 갈다, 분쇄하다" }, { word: "bột", meaning: "가루, 분말" }]
          },
          {
            role: "손님", side: "right",
            text: "Ở nhà bạn tôi không có máy xay cà phê, bạn xay giúp tôi luôn được không?",
            translation: "친구 집에 커피 그라인더가 없어서 그러는데, 분쇄해 주실 수 있나요?",
            expressions: [{ phrase: "không có máy xay cà phê", meaning: "커피 분쇄기(그라인더)가 없다" }],
            vocabulary: [{ word: "ở nhà", meaning: "집에" }, { word: "máy xay cà phê", meaning: "커피 그라인더" }]
          },
          {
            role: "직원", side: "left",
            text: "Dạ được chứ ạ! Không biết bạn của quý khách thường pha cà phê bằng dụng cụ gì ạ?",
            translation: "네, 물론이죠! 혹시 친구분께서 평소 어떤 추출 기구로 커피를 내려 드시는지 아시나요?",
            expressions: [{ phrase: "pha cà phê bằng dụng cụ gì?", meaning: "어떤 도구(기구)로 커피를 추출하나요?" }],
            vocabulary: [{ word: "thường", meaning: "평소에, 주로" }, { word: "dụng cụ", meaning: "도구, 기구" }]
          },
          {
            role: "손님", side: "right",
            text: "Bạn ấy dùng phễu lọc giấy để pha cà phê thủ công (pour-over).",
            translation: "종이 필터를 끼우는 핸드드립(푸어오버) 드리퍼를 사용해요.",
            expressions: [{ phrase: "dùng phễu lọc giấy để pha cà phê thủ công", meaning: "종이 필터 드리퍼를 사용해 핸드드립 커피를 내리다" }],
            vocabulary: [{ word: "phễu lọc giấy", meaning: "종이 필터용 드리퍼" }, { word: "giấy lọc", meaning: "종이 필터, 여과지" }]
          },
          {
            role: "직원", side: "left",
            text: "Vậy em sẽ xay cỡ vừa-mịn phù hợp với giấy lọc nhé. Em gửi kèm thêm một túi giấy đựng quà và tem dán cho quý khách luôn ạ!",
            translation: "그럼 종이 필터에 알맞은 '중세분쇄(중간보다 약간 가는 굵기)'로 갈아 드리겠습니다. 선물용 종이 쇼핑백과 포장 스티커도 함께 챙겨 드릴게요!",
            expressions: [{ phrase: "xay cỡ vừa-mịn phù hợp với giấy lọc", meaning: "종이 필터에 적합한 중세분쇄 굵기로 갈다" }],
            vocabulary: [{ word: "cỡ vừa-mịn", meaning: "중세분쇄 (medium-fine)" }, { word: "phù hợp", meaning: "적합한, 알맞은" }, { word: "túi giấy đựng quà", meaning: "선물용 종이가방" }]
          },
          {
            role: "손님", side: "right",
            text: "Vâng, cảm ơn bạn đã hỗ trợ nhiệt tình nhé!",
            translation: "네, 친절하고 정성스럽게 도와주셔서 감사합니다!",
            expressions: [{ phrase: "cảm ơn bạn đã hỗ trợ nhiệt tình", meaning: "열성적으로(친절하게) 도와주셔서 감사합니다" }],
            vocabulary: [{ word: "hỗ trợ", meaning: "돕다, 지원하다" }, { word: "nhiệt tình", meaning: "친절한, 정성스러운" }]
          }
        ]
      }
    ],

    // ==========================================
    // 5. 아랍어 (العربية) - 카페 1~3번
    // ==========================================
    ar: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "مرحباً بك! أهلاً وسهلاً. ماذا تحب أن تطلب اليوم؟",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "ماذا تحب أن تطلب اليوم؟", meaning: "오늘 무엇을 주문하고 싶으신가요?" }
            ],
            vocabulary: [
              { word: "أهلاً وسهلاً (ahlan wa sahlan)", meaning: "환영합니다, 어서 오세요" },
              { word: "تطلب (tatlub)", meaning: "(당신이) 주문하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! هل يمكنني الحصول على أمريكانو مثلج ومافن بالتوت الأزرق، من فضلك؟",
            translation: "안녕하세요! 아이스 아메리카노 한 잔과 블루베리 머핀 하나 주시겠어요?",
            expressions: [
              { phrase: "هل يمكنني الحصول على ~ من فضلك؟", meaning: "~을 주시겠어요? (정중한 주문 표현)" }
            ],
            vocabulary: [
              { word: "مثلج (muthallaj)", meaning: "차가운, 얼음이 든 (아이스)" },
              { word: "التوت الأزرق (at-tūt al-azraq)", meaning: "블루베리" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بالتأكيد. أي حجم تفضل للأمريكانو المثلج؟",
            translation: "물론이죠. 아이스 아메리카노는 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "أي حجم تفضل؟", meaning: "어떤 사이즈를 선호하시나요?" }
            ],
            vocabulary: [
              { word: "بالتأكيد (bit-ta'kīd)", meaning: "물론이죠, 확실히" },
              { word: "حجم (hajm)", meaning: "사이즈, 크기" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "الحجم المتوسط، من فضلك. وهل يمكنك تقليل الثلج؟",
            translation: "미디엄 사이즈로 주세요. 그리고 얼음을 조금만 넣어 주시겠어요?",
            expressions: [
              { phrase: "هل يمكنك تقليل الثلج؟", meaning: "얼음을 줄여 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "المتوسط (al-mutawassit)", meaning: "중간 (미디엄)" },
              { word: "تقليل (taqlīl)", meaning: "줄이기, 적게 함" },
              { word: "الثلج (ath-thalj)", meaning: "얼음" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "لا مشكلة على الإطلاق. هل الطلب هنا أم سفري؟",
            translation: "전혀 문제없습니다. 매장에서 드시나요, 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "هنا أم سفري؟", meaning: "매장 식사인가요, 포장(테이크아웃)인가요?" }
            ],
            vocabulary: [
              { word: "هنا (hunā)", meaning: "여기서 (매장 내)" },
              { word: "سفري (safarī)", meaning: "테이크아웃, 포장용" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "هنا، من فضلك.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "هنا، من فضلك", meaning: "여기서 먹고 갈게요" }
            ],
            vocabulary: [
              { word: "من فضلك (min fadlik)", meaning: "부탁합니다 (Please)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ممتاز، المجموع هو 28 ريالاً. يمكنك تمرير بطاقتك هنا، وسيكون طلبك جاهزاً عند مكتب الاستلام قريباً!",
            translation: "좋습니다, 총 28리얄입니다. 여기에 카드를 태그해 주시면 되고, 주문하신 메뉴는 곧 픽업대에서 준비됩니다!",
            expressions: [
              { phrase: "المجموع هو ~", meaning: "총 금액은 ~입니다" },
              { phrase: "تمرير بطاقتك", meaning: "카드를 단말기에 태그하다" }
            ],
            vocabulary: [
              { word: "المجموع (al-majmū')", meaning: "총계, 합계" },
              { word: "بطاقتك (bitāqatak)", meaning: "당신의 카드" },
              { word: "مكتب الاستلام (maktab al-istilām)", meaning: "수령대, 픽업 카운터" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "디카페인 원두 및 우유 변경하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "صباح الخير! ماذا تحب أن تشرب اليوم؟",
            translation: "좋은 아침입니다! 오늘 어떤 음료를 마시고 싶으신가요?",
            expressions: [
              { phrase: "صباح الخير!", meaning: "좋은 아침입니다! (Sabāh al-khayr)" }
            ],
            vocabulary: [
              { word: "صباح (sabāh)", meaning: "아침" },
              { word: "تشرب (tashrab)", meaning: "마시다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! أريد لاتيه فانيليا ساخن بحجم متوسط، وهل يمكن جعله بدون كافيين؟",
            translation: "안녕하세요! 따뜻한 바닐라 라떼 미디엄 사이즈로 주시고, 디카페인으로 해 주실 수 있나요?",
            expressions: [
              { phrase: "هل يمكن جعله بدون كافيين؟", meaning: "디카페인으로 만들어 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "ساخن (sākhin)", meaning: "따뜻한, 뜨거운" },
              { word: "بدون كافيين (bidūn kāfiyīn)", meaning: "디카페인 (카페인 없음)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بالتأكيد، لدينا إسبريسو بدون كافيين. هل تفضل الحليب العادي؟",
            translation: "물론이죠, 디카페인 에스프레소가 준비되어 있습니다. 일반 우유로 넣어 드릴까요?",
            expressions: [
              { phrase: "هل تفضل الحليب العادي؟", meaning: "일반 우유를 선호하시나요?" }
            ],
            vocabulary: [
              { word: "لدينا (ladaynā)", meaning: "저희에게 ~이 있습니다" },
              { word: "الحليب العادي (al-halīb al-'ādī)", meaning: "일반 우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "في الواقع، هل يمكنك استبدال الحليب العادي بحليب الشوفان، من فضلك؟",
            translation: "아, 일반 우유 대신 오트 밀크(귀리 우유)로 변경해 주실 수 있을까요?",
            expressions: [
              { phrase: "استبدال A بـ B", meaning: "A를 B로 대체하다(변경하다)" }
            ],
            vocabulary: [
              { word: "في الواقع (fī al-wāqi')", meaning: "실은, 사실은" },
              { word: "حليب الشوفان (halīb ash-shūfān)", meaning: "오트 밀크 (귀리 우유)" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "طبعاً! للعلم فقط، هناك رسوم إضافية بقيمة 3 ريالات لحليب الشوفان. هل هذا مناسب؟",
            translation: "물론입니다! 참고로 오트 밀크 변경 시 3리얄의 추가 요금이 있는데 괜찮으신가요?",
            expressions: [
              { phrase: "للعلم فقط", meaning: "참고로 말씀드리자면" },
              { phrase: "رسوم إضافية", meaning: "추가 요금" }
            ],
            vocabulary: [
              { word: "رسوم (rusūm)", meaning: "요금, 수수료" },
              { word: "مناسب (munāsib)", meaning: "적절한, 괜찮은" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "نعم، لا بأس. سأدفع بالبطاقة.",
            translation: "네, 괜찮습니다. 카드로 결제할게요.",
            expressions: [
              { phrase: "سأدفع بالبطاقة", meaning: "카드로 결제하겠습니다" }
            ],
            vocabulary: [
              { word: "لا بأس (lā ba's)", meaning: "괜찮습니다, 문제없습니다" },
              { word: "سأدفع (sa-adfa')", meaning: "제가 지불하겠습니다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "شكراً لك! سننادي برقم الفاتورة عندما يكون مشروبك جاهزاً.",
            translation: "감사합니다! 음료가 준비되면 영수증 번호로 불러 드리겠습니다.",
            expressions: [
              { phrase: "سننادي برقم الفاتورة", meaning: "영수증 번호로 호명하겠습니다" }
            ],
            vocabulary: [
              { word: "رقم الفاتورة (raqm al-fātūra)", meaning: "영수증 번호" },
              { word: "مشروبك (mashrūbak)", meaning: "당신의 음료" }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "시럽 양 조절 및 휘핑크림 빼기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "أهلاً بك! ماذا تحب أن تطلب اليوم؟",
            translation: "환영합니다! 오늘 어떤 메뉴를 주문하시겠어요?",
            expressions: [
              { phrase: "أهلاً بك!", meaning: "환영합니다! / 어서 오세요!" }
            ],
            vocabulary: [
              { word: "اليوم (al-yawm)", meaning: "오늘" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "مرحباً! أفكر في طلب موكا مثلجة. هل تأتي مع كريمة مخفوقة في الأعلى؟",
            translation: "안녕하세요! 아이스 카페모카를 주문하려는데요. 위에 휘핑크림이 올라가나요?",
            expressions: [
              { phrase: "هل تأتي مع ~؟", meaning: "~이 함께 포함되어 나오나요?" }
            ],
            vocabulary: [
              { word: "موكا مثلجة (mūkā muthallaja)", meaning: "아이스 모카" },
              { word: "كريمة مخفوقة (karīma makhfūqa)", meaning: "휘핑크림" },
              { word: "في الأعلى (fī al-a'lā)", meaning: "맨 위에" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "نعم، تأتي بشكل أساسي مع كريمة مخفوقة وصوص الشوكولاتة.",
            translation: "네, 기본적으로 휘핑크림과 초콜릿 소스가 함께 올라갑니다.",
            expressions: [
              { phrase: "بشكل أساسي", meaning: "기본적으로" }
            ],
            vocabulary: [
              { word: "أساسي (asāsī)", meaning: "기본적인" },
              { word: "صوص الشوكولاتة (sūs ash-shūkūlāta)", meaning: "초콜릿 소스" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "حسناً، هل يمكنك تحضيرها بدون كريمة مخفوقة، ووضع نصف كمية الشراب فقط لتكون أقل حلاوة؟",
            translation: "알겠습니다, 휘핑크림은 빼 주시고 덜 달게 시럽은 절반만 넣어 주시겠어요?",
            expressions: [
              { phrase: "بدون كريمة مخفوقة", meaning: "휘핑크림 없이 (빼고)" },
              { phrase: "نصف كمية الشراب", meaning: "시럽 양의 절반" }
            ],
            vocabulary: [
              { word: "بدون (bidūn)", meaning: "~ 없이" },
              { word: "نصف (nisf)", meaning: "절반 (1/2)" },
              { word: "الشراب (ash-sharāb)", meaning: "시럽" },
              { word: "أقل حلاوة (aqall halāwa)", meaning: "덜 단, 당도가 낮은" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "بكل سرور! موكا مثلجة بدون كريمة وبنصف حلاوة. أي حجم تريد؟",
            translation: "기꺼이 해 드리겠습니다! 아이스 모카 휘핑크림 빼고 당도 절반이요. 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "بدون كريمة وبنصف حلاوة", meaning: "크림 빼고 절반 당도로" }
            ],
            vocabulary: [
              { word: "بكل سرور (bi-kulli surūr)", meaning: "기꺼이, 즐거이" },
              { word: "حلاوة (halāwa)", meaning: "단맛, 당도" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "الحجم الكبير، وسفري من فضلك. هذا كل شيء.",
            translation: "라지 사이즈로 주시고, 포장으로 부탁합니다. 주문은 이게 전부입니다.",
            expressions: [
              { phrase: "هذا كل شيء", meaning: "이것이 전부입니다" }
            ],
            vocabulary: [
              { word: "الحجم الكبير (al-hajm al-kabīr)", meaning: "큰 사이즈 (라지)" },
              { word: "سفري (safarī)", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ممتاز! المجموع هو 22 ريالاً. سنحضر طلبك فوراً.",
            translation: "좋습니다! 총 22리얄입니다. 바로 준비해 드리겠습니다.",
            expressions: [
              { phrase: "سنحضر طلبك فوراً", meaning: "주문을 즉시 준비해 드리겠습니다" }
            ],
            vocabulary: [
              { word: "نحضر (nuhaddir)", meaning: "(우리가) 준비하다, 만들다" },
              { word: "فوراً (fawran)", meaning: "즉시, 바로" }
            ]
          }
        ]
      }
    ]
  },
  pharmacy: {
    // ==========================================
    // 1. 영어 (English) - 약국 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "두통 및 발열로 진통해열제 구매하기",
        lines: [
          {
            role: "약사", side: "left",
            text: "Hello! Welcome to the pharmacy. How can I help you today?",
            translation: "안녕하세요! 약국에 오신 것을 환영합니다. 오늘 어떻게 도와드릴까요?",
            expressions: [{ phrase: "How can I help you today?", meaning: "오늘 어떤 증상(용건)으로 오셨나요?" }],
            vocabulary: [{ word: "pharmacy", meaning: "약국 (미국에서는 drugstore라고도 흔히 부름)" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi, I've had a throbbing headache and a mild fever since this morning. Could I get a pain reliever?",
            translation: "안녕하세요, 오늘 아침부터 지끈거리는 두통과 미열이 있어요. 진통해열제를 살 수 있을까요?",
            expressions: [{ phrase: "I've had a throbbing headache", meaning: "머리가 지끈거리는(욱신거리는) 두통이 계속 있다" }],
            vocabulary: [{ word: "throbbing", meaning: "욱신거리는, 지끈거리는" }, { word: "mild fever", meaning: "미열" }, { word: "pain reliever", meaning: "진통제 (painkiller)" }]
          },
          {
            role: "약사", side: "left",
            text: "I'm sorry to hear that. Do you prefer acetaminophen like Tylenol, or an anti-inflammatory like ibuprofen?",
            translation: "저런, 힘드시겠네요. 타이레놀 같은 아세트아미노펜 성분을 선호하시나요, 아니면 이부프로펜 같은 소염진통제를 선호하시나요?",
            expressions: [{ phrase: "Do you prefer A or B?", meaning: "A와 B 중 어느 것을 선호하시나요?" }],
            vocabulary: [{ word: "acetaminophen", meaning: "아세트아미노펜 (영국·호주 등에서는 paracetamol이라고 부름)" }, { word: "anti-inflammatory", meaning: "항염증제, 소염진통제" }]
          },
          {
            role: "손님", side: "right",
            text: "I have a sensitive stomach, so I'd prefer acetaminophen.",
            translation: "제가 위가 좀 약한 편이라 아세트아미노펜 성분으로 할게요.",
            expressions: [{ phrase: "I have a sensitive stomach", meaning: "위가 약하다(예민하다)" }],
            vocabulary: [{ word: "sensitive", meaning: "예민한, 민감한" }, { word: "stomach", meaning: "위, 배" }]
          },
          {
            role: "약사", side: "left",
            text: "Good call. Acetaminophen is gentler on the stomach. Take one or two 500mg tablets every 6 hours as needed.",
            translation: "좋은 선택입니다. 아세트아미노펜이 위에 부담이 덜하거든요. 필요시 6시간 간격으로 500mg 정제를 1~2알 복용하세요.",
            expressions: [{ phrase: "gentler on the stomach", meaning: "위에 자극(부담)이 덜한" }, { phrase: "every 6 hours as needed", meaning: "필요시 6시간마다" }],
            vocabulary: [{ word: "tablet", meaning: "정제, 알약" }, { word: "as needed", meaning: "증상이 있을 때 필요에 따라" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it. Just make sure not to exceed eight tablets in 24 hours, right? Thank you!",
            translation: "알겠습니다. 24시간 동안 8알을 넘기지 않도록 주의하면 되죠? 감사합니다!",
            expressions: [{ phrase: "not to exceed ~ in 24 hours", meaning: "24시간(하루) 동안 ~을 초과하지 않다" }],
            vocabulary: [{ word: "exceed", meaning: "(한도를) 초과하다, 넘다" }]
          }
        ]
      },
      {
        id: 2,
        title: "목감기와 기침약 증상 설명해 고르기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I caught a cold and my throat feels really sore when I swallow.",
            translation: "실례합니다, 감기에 걸렸는데 침을 삼킬 때마다 목이 너무 따갑고 아파요.",
            expressions: [{ phrase: "my throat feels really sore", meaning: "목이 아주 따갑고 아프다(인후통이 있다)" }],
            vocabulary: [{ word: "catch a cold", meaning: "감기에 걸리다" }, { word: "sore throat", meaning: "인후통, 목감기" }, { word: "swallow", meaning: "삼키다" }]
          },
          {
            role: "약사", side: "left",
            text: "Are you also coughing? If so, is it a dry cough or a chesty cough with phlegm?",
            translation: "기침도 함께 하시나요? 만약 그렇다면 마른기침인가요, 아니면 가래가 끓는 기침인가요?",
            expressions: [{ phrase: "dry cough or a chesty cough with phlegm", meaning: "마른기침인가요, 가래가 있는 기침인가요?" }],
            vocabulary: [{ word: "dry cough", meaning: "마른기침" }, { word: "chesty cough", meaning: "가슴 깊은 곳에서 가래가 끓는 기침 (productive cough)" }, { word: "phlegm", meaning: "가래 ('g'는 묵음으로 [플렘]으로 발음)" }]
          },
          {
            role: "손님", side: "right",
            text: "It's a dry, tickly cough that keeps me awake at night.",
            translation: "목이 간질간질한 마른기침인데, 밤에 잠을 못 잘 정도예요.",
            expressions: [{ phrase: "keeps me awake at night", meaning: "밤에 잠을 못 자게 깨우다" }],
            vocabulary: [{ word: "tickly", meaning: "간질간질한" }, { word: "awake", meaning: "잠들지 않은, 깨어 있는" }]
          },
          {
            role: "약사", side: "left",
            text: "Then I recommend this cough suppressant syrup for the night, and these medicated lozenges to soothe your throat.",
            translation: "그렇다면 밤에 드실 기침 억제 시럽과, 목을 진정시켜 줄 약용 트로키(목캔디)를 추천해 드립니다.",
            expressions: [{ phrase: "soothe your throat", meaning: "부은 목을 진정시키다(가라앉히다)" }],
            vocabulary: [{ word: "cough suppressant", meaning: "진해제 (기침 억제제)" }, { word: "lozenge", meaning: "트로키, 입에서 녹여 먹는 인후염 약" }]
          },
          {
            role: "손님", side: "right",
            text: "Do these lozenges have a numbing effect for the throat pain?",
            translation: "이 트로키에는 목 통증을 마비시켜 줄(가라앉혀 줄) 국소 마취 성분이 들어 있나요?",
            expressions: [{ phrase: "have a numbing effect", meaning: "통증 부위를 얼얼하게 마비시켜 진통하는 효과가 있다" }],
            vocabulary: [{ word: "numbing", meaning: "감각을 둔하게 하는 (국소 마취 효과)" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes, they contain benzocaine, so they'll numb the soreness quickly. Dissolve one slowly in your mouth every 3 hours.",
            translation: "네, 벤조카인 성분이 들어 있어서 통증을 빠르게 가라앉혀 줍니다. 3시간마다 한 알씩 입안에서 천천히 녹여 드세요.",
            expressions: [{ phrase: "Dissolve one slowly in your mouth", meaning: "입안에서 한 알을 천천히 녹여 먹다" }],
            vocabulary: [{ word: "contain", meaning: "함유하다" }, { word: "dissolve", meaning: "녹이다, 용해하다" }]
          }
        ]
      },
      {
        id: 3,
        title: "소화불량 및 위산 역류 약 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, I ate some greasy food earlier and now I have severe indigestion and heartburn.",
            translation: "안녕하세요, 아까 기름진 음식을 먹었더니 지금 소화불량이 심하고 속쓰림(위산 역류)이 있어요.",
            expressions: [{ phrase: "severe indigestion and heartburn", meaning: "심한 소화불량과 속쓰림(가슴쓰림)" }],
            vocabulary: [{ word: "greasy", meaning: "기름진" }, { word: "indigestion", meaning: "소화불량" }, { word: "heartburn", meaning: "속쓰림, 위산 역류로 인한 가슴 통증" }]
          },
          {
            role: "약사", side: "left",
            text: "Do you feel a burning sensation coming up your chest, or does your stomach just feel bloated and full?",
            translation: "가슴 쪽으로 타는 듯한 신물이 올라오는 느낌이신가요, 아니면 배에 가스가 차고 더부룩한 느낌이신가요?",
            expressions: [{ phrase: "burning sensation coming up your chest", meaning: "가슴 쪽으로 치밀어 오르는 타는 듯한(쓰린) 느낌" }],
            vocabulary: [{ word: "bloated", meaning: "배에 가스가 차서 빵빵한, 더부룩한" }]
          },
          {
            role: "손님", side: "right",
            text: "Both, actually. I have acid reflux and my stomach feels very bloated.",
            translation: "실은 둘 다 있어요. 위산도 역류하고 배도 아주 더부룩합니다.",
            expressions: [{ phrase: "I have acid reflux", meaning: "위산 역류 증상이 있다" }],
            vocabulary: [{ word: "acid reflux", meaning: "위산 역류" }]
          },
          {
            role: "약사", side: "left",
            text: "This liquid antacid with simethicone will neutralize the stomach acid and relieve the gas bloating at the same time.",
            translation: "시메티콘이 함유된 이 짜 먹는 액상 제산제가 위산을 중화하면서 동시에 가스로 인한 복부 팽만감도 없애줄 겁니다.",
            expressions: [{ phrase: "neutralize the stomach acid", meaning: "위산을 중화하다" }, { phrase: "relieve the gas bloating", meaning: "가스 팽만감을 완화하다" }],
            vocabulary: [{ word: "antacid", meaning: "제산제" }, { word: "liquid", meaning: "액상의, 물약 형태의" }]
          },
          {
            role: "손님", side: "right",
            text: "Do you have it in chewable tablets instead of liquid? It's easier to carry while traveling.",
            translation: "액상 말고 씹어 먹는 정제(츄어블) 형태도 있나요? 여행 중에는 들고 다니기가 더 편해서요.",
            expressions: [{ phrase: "in chewable tablets instead of liquid", meaning: "액상 대신 씹어 먹는 정제 형태로" }],
            vocabulary: [{ word: "chewable tablet", meaning: "씹어 먹는 알약 (츄어블정)" }]
          },
          {
            role: "약사", side: "left",
            text: "Sure! Chew two of these berry-flavored tablets thoroughly whenever symptoms occur.",
            translation: "그럼요! 증상이 나타날 때마다 이 베리 맛 정제를 두 알씩 꼭꼭 씹어서 복용하세요.",
            expressions: [{ phrase: "Chew ~ thoroughly", meaning: "~을 완전히(꼭꼭) 씹어서 복용하다" }],
            vocabulary: [{ word: "thoroughly", meaning: "철저히, 완전히" }, { word: "symptom", meaning: "증상" }]
          }
        ]
      },
      {
        id: 4,
        title: "물갈이 배탈 및 지사제 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, I think I have traveler's diarrhea. I've had a runny stomach and cramps since last night.",
            translation: "안녕하세요, 물갈이 설사(여행자 설사)에 걸린 것 같아요. 어젯밤부터 계속 설사를 하고 배가 뒤틀리듯 아파요.",
            expressions: [{ phrase: "traveler's diarrhea", meaning: "여행자 설사 (물갈이 배탈)" }, { phrase: "runny stomach and cramps", meaning: "물설사와 복부 경련(배앓이)" }],
            vocabulary: [{ word: "diarrhea", meaning: "설사" }, { word: "cramp", meaning: "경련, 쥐어짜는 듯한 복통" }]
          },
          {
            role: "약사", side: "left",
            text: "Oh dear. Do you have a high fever or any blood in your stool?",
            translation: "저런. 혹시 고열이 나거나 혈변 증상이 있으신가요?",
            expressions: [{ phrase: "high fever or any blood in your stool", meaning: "고열이나 혈변 (세균성 감염 여부를 감별할 때 약사가 확인하는 질문)" }],
            vocabulary: [{ word: "stool", meaning: "대변 (의학·약학 용어)" }]
          },
          {
            role: "손님", side: "right",
            text: "No fever or blood at all. I just need something to stop the diarrhea because I have a bus tour today.",
            translation: "열이나 혈변은 전혀 없어요. 오늘 버스 투어 일정이 있어서 설사를 멈추게 하는 약이 필요합니다.",
            expressions: [{ phrase: "something to stop the diarrhea", meaning: "설사를 멈추게 해 줄 약(지사제)" }],
            vocabulary: [{ word: "at all", meaning: "전혀" }]
          },
          {
            role: "약사", side: "left",
            text: "Since there's no fever, you can take loperamide like Imodium. Take two capsules now, then one after each loose stool.",
            translation: "열이 없으시니 이모듐 같은 로페라미드 성분을 드셔도 됩니다. 지금 두 알을 드시고, 이후 설사를 할 때마다 한 알씩 복용하세요.",
            expressions: [{ phrase: "one after each loose stool", meaning: "설사(묽은 변)를 할 때마다 한 알씩" }],
            vocabulary: [{ word: "capsule", meaning: "캡슐" }, { word: "loose stool", meaning: "묽은 변, 설사" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you. Should I also get some electrolytes to prevent dehydration?",
            translation: "감사합니다. 탈수를 예방하기 위해 전해질 보충제도 같이 사는 게 좋을까요?",
            expressions: [{ phrase: "prevent dehydration", meaning: "탈수를 예방하다" }],
            vocabulary: [{ word: "electrolyte", meaning: "전해질" }, { word: "dehydration", meaning: "탈수 증상" }]
          },
          {
            role: "약사", side: "left",
            text: "Definitely. Dissolve one packet of these oral rehydration salts in a bottle of water and sip it frequently.",
            translation: "물론이죠. 이 경구 수분 보충염(전해질 분말) 한 포를 생수 한 병에 타서 수시로 조금씩 마셔 주세요.",
            expressions: [{ phrase: "oral rehydration salts (ORS)", meaning: "경구 수분 보충염 (물에 타 마시는 전해질 분말)" }],
            vocabulary: [{ word: "packet", meaning: "한 포, 작은 봉지" }, { word: "sip", meaning: "조금씩 홀짝이며 마시다" }]
          }
        ]
      },
      {
        id: 5,
        title: "알레르기 비염 및 항히스타민제 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! My allergies are acting up. I can't stop sneezing and my nose is running like crazy.",
            translation: "안녕하세요! 알레르기 비염이 도졌어요. 재채기가 멈추지 않고 콧물이 너무 심하게 납니다.",
            expressions: [{ phrase: "My allergies are acting up", meaning: "알레르기 증상이 도지다(심해지다)" }, { phrase: "my nose is running", meaning: "콧물이 나다" }],
            vocabulary: [{ word: "sneeze", meaning: "재채기하다" }]
          },
          {
            role: "약사", side: "left",
            text: "Are your eyes itchy or watery as well?",
            translation: "눈도 가렵거나 눈물이 나시나요?",
            expressions: [{ phrase: "itchy or watery", meaning: "가렵거나 눈물이 고이는" }],
            vocabulary: [{ word: "itchy", meaning: "가려운" }, { word: "watery", meaning: "눈물이 나는, 물기가 많은" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, a little bit. Could I get an over-the-counter antihistamine that won't make me sleepy?",
            translation: "네, 약간요. 졸리지 않은 일반의약품 항히스타민제를 살 수 있을까요?",
            expressions: [{ phrase: "over-the-counter (OTC)", meaning: "처방전 없이 살 수 있는 일반의약품의" }, { phrase: "won't make me sleepy", meaning: "졸음을 유발하지 않는" }],
            vocabulary: [{ word: "antihistamine", meaning: "항히스타민제 (알레르기약)" }]
          },
          {
            role: "약사", side: "left",
            text: "Sure! We have second-generation non-drowsy antihistamines like Claritin (loratadine) and Allegra (fexofenadine).",
            translation: "물론이죠! 클라리틴(로라타딘)이나 알레그라(펙소페나딘) 같은 2세대 졸음 없는 항히스타민제가 있습니다.",
            expressions: [{ phrase: "non-drowsy antihistamine", meaning: "졸리지 않은 항히스타민제" }],
            vocabulary: [{ word: "non-drowsy", meaning: "졸음을 유발하지 않는" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll take the Allegra, please. How often do I take it?",
            translation: "알레그라로 주세요. 얼마나 자주 복용하면 되나요?",
            expressions: [{ phrase: "How often do I take it?", meaning: "복용 주기가 어떻게 되나요?" }],
            vocabulary: [{ word: "how often", meaning: "얼마나 자주" }]
          },
          {
            role: "약사", side: "left",
            text: "Just one tablet once a day with water. Avoid taking it with fruit juice, as juice can reduce its absorption.",
            translation: "하루에 한 번, 한 알을 물과 함께 드세요. 과일 주스와 함께 드시면 약물 흡수율이 떨어질 수 있으니 피해주세요.",
            expressions: [{ phrase: "once a day with water", meaning: "하루 1회 물과 함께" }, { phrase: "reduce its absorption", meaning: "약물의 체내 흡수를 감소시키다" }],
            vocabulary: [{ word: "avoid", meaning: "피하다" }, { word: "absorption", meaning: "흡수" }]
          }
        ]
      },
      {
        id: 6,
        title: "근육통 파스 및 바르는 소염제 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, I walked over 20,000 steps yesterday and my calves and lower back are really sore.",
            translation: "안녕하세요, 어제 2만 보 이상 걸었더니 종아리와 허리에 근육통이 너무 심해요.",
            expressions: [{ phrase: "my calves and lower back are really sore", meaning: "종아리와 허리가 심하게 결리고 아프다" }],
            vocabulary: [{ word: "calf (calves)", meaning: "종아리 (복수형 calves)" }, { word: "lower back", meaning: "아랫배 뒤쪽 허리" }]
          },
          {
            role: "약사", side: "left",
            text: "You must be exhausted! Are you looking for pain relief patches or a topical gel to rub in?",
            translation: "정말 피곤하시겠네요! 붙이는 진통 파스를 찾으시나요, 아니면 문질러 바르는 외용 젤을 찾으시나요?",
            expressions: [{ phrase: "pain relief patches or a topical gel", meaning: "붙이는 진통 패치(파스) 또는 바르는 외용 젤" }],
            vocabulary: [{ word: "patch", meaning: "붙이는 파스, 패치" }, { word: "topical", meaning: "피부 국소 부위에 바르는 (외용제의)" }, { word: "rub in", meaning: "문질러 바르다" }]
          },
          {
            role: "손님", side: "right",
            text: "I'd like patches for my lower back and a roll-on or gel for my calves.",
            translation: "허리에 붙일 파스랑, 종아리에 바를 롤온(물파스형)이나 젤을 둘 다 사고 싶어요.",
            expressions: [{ phrase: "patches for ~ and a gel for ~", meaning: "~용 파스와 ~용 바르는 젤" }],
            vocabulary: [{ word: "roll-on", meaning: "구슬이 달려 굴려 바르는 물파스 형태" }]
          },
          {
            role: "약사", side: "left",
            text: "These menthol patches provide a cooling then warming sensation, and this diclofenac gel reduces muscle inflammation.",
            translation: "이 멘톨 파스는 시원했다가 따뜻해지는 자극을 주고, 이 디클로페낙 젤은 근육의 염증을 직접 줄여줍니다.",
            expressions: [{ phrase: "reduces muscle inflammation", meaning: "근육 염증을 가라앉히다" }],
            vocabulary: [{ word: "cooling", meaning: "시원하게 식혀주는 (쿨파스 효과)" }, { word: "warming", meaning: "따뜻하게 해주는 (핫파스 효과)" }, { word: "inflammation", meaning: "염증" }]
          },
          {
            role: "손님", side: "right",
            text: "How long can I leave the patch on my skin?",
            translation: "파스는 피부에 몇 시간 동안 붙여 두어도 되나요?",
            expressions: [{ phrase: "How long can I leave the patch on?", meaning: "파스를 얼마나 오래 붙여 두어도 되나요?" }],
            vocabulary: [{ word: "leave on", meaning: "(붙이거나 바른 채로) 그대로 두다" }]
          },
          {
            role: "약사", side: "left",
            text: "Up to 8 hours per patch. Don't apply the gel and the patch to the exact same spot at the same time.",
            translation: "패치당 최대 8시간까지 가능합니다. 젤과 파스를 같은 부위에 동시에 중복해서 사용하진 마세요.",
            expressions: [{ phrase: "Up to 8 hours", meaning: "최대 8시간까지" }, { phrase: "to the exact same spot", meaning: "정확히 똑같은 부위에" }],
            vocabulary: [{ word: "apply", meaning: "(약·연고·파스를) 바르다, 붙이다" }]
          }
        ]
      },
      {
        id: 7,
        title: "상처 소독약과 방수 밴드 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, I tripped on the sidewalk and scraped my knee. I need some first-aid supplies.",
            translation: "안녕하세요, 보도블록에 걸려 넘어져서 무릎이 까졌어요. 응급처치 소독 용품이 좀 필요합니다.",
            expressions: [{ phrase: "scraped my knee", meaning: "무릎이 쓸려 까졌다(찰과상을 입었다)" }, { phrase: "first-aid supplies", meaning: "응급처치 용품(구급용품)" }],
            vocabulary: [{ word: "trip", meaning: "발이 걸려 넘어지다" }, { word: "scrape", meaning: "긁히다, 까지다" }]
          },
          {
            role: "약사", side: "left",
            text: "Let's get that cleaned up. Here is an antiseptic spray that doesn't sting, and a triple antibiotic ointment.",
            translation: "깨끗이 소독해야겠네요. 여기 따갑지 않은 소독 스프레이와 3중 항생제 연고가 있습니다.",
            expressions: [{ phrase: "antiseptic spray that doesn't sting", meaning: "바를 때 따갑지 않은 상처 소독 스프레이" }],
            vocabulary: [{ word: "antiseptic", meaning: "상처 소독제" }, { word: "sting", meaning: "따갑다, 쓰리다" }, { word: "antibiotic ointment", meaning: "항생제 연고 (후시딘·마데카솔·네오스포린 등)" }]
          },
          {
            role: "손님", side: "right",
            text: "Do you also have large waterproof bandages or hydrocolloid dressings that stay on in the shower?",
            translation: "샤워할 때도 떨어지지 않는 큰 사이즈의 방수 밴드나 하이드로콜로이드 습윤 밴드도 있나요?",
            expressions: [{ phrase: "waterproof bandages", meaning: "방수 밴드" }, { phrase: "hydrocolloid dressings", meaning: "하이드로콜로이드 습윤 드레싱 밴드 (메디폼·듀오덤 종류)" }],
            vocabulary: [{ word: "waterproof", meaning: "방수의" }, { word: "bandage", meaning: "일회용 밴드 (미국에서는 상표명인 Band-Aid, 영국에서는 plaster도 흔히 씀)" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes, these knee-sized waterproof bandages seal all four sides, and we also have hydrocolloid pads right here.",
            translation: "네, 이 무릎용 대형 방수 밴드는 사방이 완전히 밀착되고, 여기 하이드로콜로이드 습윤 패드도 있습니다.",
            expressions: [{ phrase: "seal all four sides", meaning: "밴드의 네 면을 모두 밀봉(밀착)하다" }],
            vocabulary: [{ word: "knee-sized", meaning: "무릎 크기에 맞춘 대형의" }]
          },
          {
            role: "손님", side: "right",
            text: "Should I put the antibiotic ointment under the hydrocolloid pad?",
            translation: "하이드로콜로이드 습윤 밴드를 붙이기 전에 항생제 연고를 밑에 발라야 하나요?",
            expressions: [{ phrase: "put ~ under the hydrocolloid pad", meaning: "습윤 패드 아래에 ~을 바르다" }],
            vocabulary: [{ word: "under", meaning: "~의 아래에, 안쪽에" }]
          },
          {
            role: "약사", side: "left",
            text: "No, if you use a hydrocolloid pad, just clean the wound with the spray, dry the edges, and apply the pad directly without ointment.",
            translation: "아니요, 습윤 패드를 쓰실 때는 스프레이로 상처만 소독한 뒤 가장자리 물기를 닦고 연고 없이 패드를 바로 붙이세요.",
            expressions: [{ phrase: "apply the pad directly without ointment", meaning: "연고 없이 습윤 패드를 바로 붙이다" }],
            vocabulary: [{ word: "wound", meaning: "상처 부위" }, { word: "edge", meaning: "가장자리" }]
          }
        ]
      },
      {
        id: 8,
        title: "벌레 물린 데 바르는 연고 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I got bitten by mosquitoes at the park and the bites are swollen and super itchy.",
            translation: "실례합니다, 공원에서 모기에게 물렸는데 물린 부위가 퉁퉁 붓고 너무 가려워요.",
            expressions: [{ phrase: "got bitten by mosquitoes", meaning: "모기에게 물렸다" }, { phrase: "swollen and super itchy", meaning: "부어오르고 너무 가려운" }],
            vocabulary: [{ word: "bite (bitten)", meaning: "물다, 벌레 물린 자국" }, { word: "swollen", meaning: "부어오른" }]
          },
          {
            role: "약사", side: "left",
            text: "May I take a look? Yes, those are quite red and inflamed.",
            translation: "한번 봐도 될까요? 네, 꽤 붉게 올라오고 염증 반응이 있네요.",
            expressions: [{ phrase: "May I take a look?", meaning: "제가 한번 살펴봐도 될까요?" }],
            vocabulary: [{ word: "inflamed", meaning: "염증이 생긴, 붉게 부어오른" }]
          },
          {
            role: "손님", side: "right",
            text: "Can I get an anti-itch cream that reduces the swelling quickly?",
            translation: "부기를 빠르게 가라앉혀 주는 가려움증 완화 연고를 살 수 있을까요?",
            expressions: [{ phrase: "anti-itch cream", meaning: "가려움증 완화 연고/크림" }, { phrase: "reduces the swelling", meaning: "부기를 가라앉히다" }],
            vocabulary: [{ word: "swelling", meaning: "부기, 부종" }]
          },
          {
            role: "약사", side: "left",
            text: "I recommend this 1% hydrocortisone cream. It's a mild steroid cream that calms both itching and swelling.",
            translation: "이 1% 하이드로코르티손 크림을 추천합니다. 가려움과 부기를 모두 가라앉혀 주는 순한 스테로이드 연고예요.",
            expressions: [{ phrase: "calms both itching and swelling", meaning: "가려움과 부기를 둘 다 진정시키다" }],
            vocabulary: [{ word: "hydrocortisone", meaning: "하이드로코르티손 (저강도 외용 스테로이드 성분)" }, { word: "mild", meaning: "순한, 약한" }]
          },
          {
            role: "손님", side: "right",
            text: "How many times a day should I apply it? And do you also sell insect repellent spray?",
            translation: "하루에 몇 번 바르면 되나요? 그리고 벌레 기피제 스프레이도 판매하시나요?",
            expressions: [{ phrase: "How many times a day", meaning: "하루에 몇 번" }, { phrase: "insect repellent spray", meaning: "벌레(모기) 기피제 스프레이" }],
            vocabulary: [{ word: "insect repellent", meaning: "해충 기피제 (bug spray)" }]
          },
          {
            role: "약사", side: "left",
            text: "Apply a thin layer two to three times a day. And yes, the insect repellents are right behind you on aisle 3.",
            translation: "하루 2~3회 얇게 펴 바르세요. 그리고 벌레 기피제는 바로 뒤쪽 3번 통로에 있습니다.",
            expressions: [{ phrase: "Apply a thin layer", meaning: "얇게 펴 바르다" }],
            vocabulary: [{ word: "thin layer", meaning: "얇은 층" }, { word: "aisle", meaning: "매장 진열대 사이 통로 ('s'는 묵음으로 [아일]로 발음)" }]
          }
        ]
      },
      {
        id: 9,
        title: "인공눈물 및 안약 증상별 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, my eyes feel really dry and gritty from the airplane air and wearing contact lenses.",
            translation: "안녕하세요, 비행기 안의 건조한 공기와 콘택트렌즈 착용 때문에 눈이 너무 건조하고 뻑뻑해요.",
            expressions: [{ phrase: "feel really dry and gritty", meaning: "(눈이) 아주 건조하고 모래가 들어간 것처럼 뻑뻑하다" }],
            vocabulary: [{ word: "gritty", meaning: "모래가 낀 듯 까끌까끌한, 뻑뻑한" }, { word: "contact lenses", meaning: "콘택트렌즈" }]
          },
          {
            role: "약사", side: "left",
            text: "Are you looking for lubricating eye drops that you can use while wearing your contacts?",
            translation: "콘택트렌즈를 착용한 상태에서도 점안할 수 있는 보습 인공눈물을 찾으시나요?",
            expressions: [{ phrase: "lubricating eye drops", meaning: "보습용 점안액 (인공눈물)" }, { phrase: "while wearing your contacts", meaning: "렌즈를 착용한 상태에서" }],
            vocabulary: [{ word: "eye drops", meaning: "안약, 점안액" }, { word: "contacts", meaning: "콘택트렌즈의 일상적 줄임말" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! Preferably preservative-free single-use vials.",
            translation: "네, 맞아요! 가급적 무보존제 일회용 인공눈물(관 형태)로 부탁드려요.",
            expressions: [{ phrase: "preservative-free single-use vials", meaning: "보존제(방부제)가 들어 있지 않은 일회용 낱개 포장 점안제" }],
            vocabulary: [{ word: "preservative-free", meaning: "무보존제의, 무방부제의" }, { word: "single-use vial", meaning: "일회용 소형 용기(관)" }]
          },
          {
            role: "약사", side: "left",
            text: "Here you go. These preservative-free artificial tears come in a box of 30 single-use vials and are safe for contacts.",
            translation: "여기 있습니다. 이 무보존제 인공눈물은 일회용 30개입 한 박스로 되어 있고 렌즈 착용 시에도 안전합니다.",
            expressions: [{ phrase: "artificial tears", meaning: "인공눈물" }, { phrase: "safe for contacts", meaning: "콘택트렌즈에 안전한" }],
            vocabulary: [{ word: "box of 30", meaning: "30개입 박스" }]
          },
          {
            role: "손님", side: "right",
            text: "Great! Do you also have a small bottle of multipurpose contact lens solution?",
            translation: "좋네요! 혹시 여행용 작은 사이즈의 다목적 렌즈 세척·보존액(리뉴 등)도 있나요?",
            expressions: [{ phrase: "multipurpose contact lens solution", meaning: "다목적 콘택트렌즈 세척·보존액" }],
            vocabulary: [{ word: "solution", meaning: "(렌즈 관리용) 용액, 세척액" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes, we have a 100ml travel-sized bottle right here, which you can also bring in your carry-on bag.",
            translation: "네, 기내 반입 가방에도 넣어가실 수 있는 100ml 여행용 소용량 제품이 바로 여기 있습니다.",
            expressions: [{ phrase: "travel-sized bottle", meaning: "여행용 소용량 병" }, { phrase: "carry-on bag", meaning: "기내 반입 수하물" }],
            vocabulary: [{ word: "carry-on", meaning: "기내 반입용의" }]
          }
        ]
      },
      {
        id: 10,
        title: "어린이용 해열 시럽 용량 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, my child has a fever of 38.5 degrees Celsius. I need a children's fever reducer.",
            translation: "안녕하세요, 제 아이가 38.5도까지 열이 나서요. 어린이용 해열제가 필요합니다.",
            expressions: [{ phrase: "has a fever of 38.5 degrees Celsius", meaning: "섭씨 38.5도의 열이 나다 (미국에서는 약 101.3 degrees Fahrenheit)" }],
            vocabulary: [{ word: "fever reducer", meaning: "해열제 (antipyretic)" }, { word: "Celsius", meaning: "섭씨온도" }]
          },
          {
            role: "약사", side: "left",
            text: "How old is your child, and roughly how much do they weigh in kilograms or pounds?",
            translation: "아이가 몇 살이고, 몸무게가 대략 몇 킬로그램(또는 파운드) 정도 나가나요?",
            expressions: [{ phrase: "how much do they weigh?", meaning: "몸무게가 얼마나 나가나요? (소아 약 용량은 나이보다 체중 기준이 정확함)" }],
            vocabulary: [{ word: "roughly", meaning: "대략, 약" }, { word: "weigh", meaning: "무게가 ~ 나가다" }]
          },
          {
            role: "손님", side: "right",
            text: "He's five years old and weighs 18 kilograms, which is about 40 pounds.",
            translation: "만 5살이고 몸무게는 18킬로그램, 파운드로는 약 40파운드 정도예요.",
            expressions: [{ phrase: "weighs 18 kilograms", meaning: "체중이 18kg 나가다" }],
            vocabulary: [{ word: "pound (lb)", meaning: "파운드 (1kg ≈ 2.2파운드)" }]
          },
          {
            role: "약사", side: "left",
            text: "Thank you. For an 18kg child, using this Children's Tylenol suspension (160mg per 5mL), the correct dose is 7.5 mL.",
            translation: "감사합니다. 18kg 아이라면 이 어린이 타이레놀 현탁액(5mL당 160mg) 기준으로 1회 적정 용량은 7.5mL입니다.",
            expressions: [{ phrase: "the correct dose is 7.5 mL", meaning: "1회 정확한 복용 용량은 7.5mL입니다" }],
            vocabulary: [{ word: "suspension", meaning: "현탁액, 시럽 (먹기 전에 흔들어 먹어야 하는 물약)" }, { word: "dose", meaning: "1회 복용량" }]
          },
          {
            role: "손님", side: "right",
            text: "Does the box come with a measuring cup or an oral syringe?",
            translation: "박스 안에 계량컵이나 경구용 주사기(투약기)가 들어 있나요?",
            expressions: [{ phrase: "measuring cup or an oral syringe", meaning: "계량컵 또는 눈금이 있는 물약 투약용 주사기" }],
            vocabulary: [{ word: "oral syringe", meaning: "입에 시럽을 넣어주는 눈금 주사기(투약기)" }]
          },
          {
            role: "약사", side: "left",
            text: "It comes with a cup, but I'll give you a free oral syringe marked at 7.5 mL so it's easier to measure accurately. Shake well before using!",
            translation: "컵이 들어 있긴 하지만, 정확하게 계량하시기 편하도록 7.5mL 눈금에 표시해 둔 투약 주사기를 무료로 챙겨 드릴게요. 사용 전 잘 흔들어 주세요!",
            expressions: [{ phrase: "Shake well before using!", meaning: "사용(복용) 전에 충분히 흔들어 주세요!" }],
            vocabulary: [{ word: "accurately", meaning: "정확하게" }, { word: "mark", meaning: "(눈금 등을) 표시하다" }]
          }
        ]
      },
      {
        id: 11,
        title: "복용 주기와 식전/식후 복용법 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, I'm picking up these two medications. Could you explain the dosage instructions for me?",
            translation: "안녕하세요, 이 두 가지 약을 구매하려는데 복용법을 좀 설명해 주실 수 있나요?",
            expressions: [{ phrase: "explain the dosage instructions", meaning: "용법·용량(복용 지침)을 설명해 주다" }],
            vocabulary: [{ word: "medication", meaning: "약, 약물" }, { word: "dosage", meaning: "복용량 및 복용법" }]
          },
          {
            role: "약사", side: "left",
            text: "Of course! First, this anti-inflammatory tablet should be taken three times a day after meals.",
            translation: "물론이죠! 먼저 이 소염진통제는 하루 세 번, 식후에 복용하셔야 합니다.",
            expressions: [{ phrase: "three times a day after meals", meaning: "하루 3회 식후 복용" }],
            vocabulary: [{ word: "after meals", meaning: "식후에 (식전은 before meals)" }]
          },
          {
            role: "손님", side: "right",
            text: "Should I take it right after eating, or wait 30 minutes?",
            translation: "식사 직후에 바로 먹어야 하나요, 아니면 식후 30분을 기다렸다가 먹어야 하나요?",
            expressions: [{ phrase: "right after eating, or wait 30 minutes", meaning: "식사 직후에 먹을지, 30분 기다릴지" }],
            vocabulary: [{ word: "right after", meaning: "~한 직후에" }]
          },
          {
            role: "약사", side: "left",
            text: "Taking it right after food or even with a small snack is fine—the main reason is to protect your stomach lining.",
            translation: "식사 직후나 가벼운 간식을 드신 직후에 바로 드셔도 됩니다. 위벽을 보호하려는 것이 주된 목적이거든요.",
            expressions: [{ phrase: "protect your stomach lining", meaning: "위벽(위점막)을 보호하다" }],
            vocabulary: [{ word: "stomach lining", meaning: "위벽, 위점막" }]
          },
          {
            role: "손님", side: "right",
            text: "That makes sense! What about this stomach acid reducer?",
            translation: "아, 이해가 되네요! 그럼 이 위산 분비 억제제는 어떻게 먹나요?",
            expressions: [{ phrase: "That makes sense!", meaning: "이해가 잘 되네요! / 일리가 있네요!" }],
            vocabulary: [{ word: "acid reducer", meaning: "위산 분비 억제제" }]
          },
          {
            role: "약사", side: "left",
            text: "Take that one on an empty stomach, about 30 minutes before breakfast, with a full glass of water.",
            translation: "그 약은 아침 식사 약 30분 전 공복 상태에서 물 한 컵과 함께 복용하세요.",
            expressions: [{ phrase: "on an empty stomach", meaning: "빈속에, 공복에" }, { phrase: "with a full glass of water", meaning: "충분한 물 한 컵과 함께" }],
            vocabulary: [{ word: "empty stomach", meaning: "빈속, 공복" }]
          }
        ]
      },
      {
        id: 12,
        title: "졸음 유발 성분 유무 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I need a multi-symptom cold medicine, but I have to drive a rental car today.",
            translation: "실례합니다, 종합감기약이 필요한데 제가 오늘 렌터카를 운전해야 하거든요.",
            expressions: [{ phrase: "multi-symptom cold medicine", meaning: "종합감기약" }, { phrase: "drive a rental car", meaning: "렌터카를 운전하다" }],
            vocabulary: [{ word: "multi-symptom", meaning: "여러 증상을 함께 잡는 (종합의)" }]
          },
          {
            role: "약사", side: "left",
            text: "I'm glad you mentioned that! Many cold medicines contain antihistamines that cause drowsiness.",
            translation: "미리 말씀해 주셔서 다행이네요! 많은 감기약에 졸음을 유발하는 항히스타민 성분이 들어 있거든요.",
            expressions: [{ phrase: "cause drowsiness", meaning: "졸음을 유발하다" }],
            vocabulary: [{ word: "mention", meaning: "언급하다, 말하다" }, { word: "drowsiness", meaning: "졸음, 나른함" }]
          },
          {
            role: "손님", side: "right",
            text: "Does this orange box cause any drowsiness or dizziness?",
            translation: "이 주황색 박스 제품은 졸음이나 어지러움을 유발하나요?",
            expressions: [{ phrase: "drowsiness or dizziness", meaning: "졸음이나 현기증(어지러움)" }],
            vocabulary: [{ word: "dizziness", meaning: "어지러움, 현기증" }]
          },
          {
            role: "약사", side: "left",
            text: "No, the orange 'Daytime' formula is completely non-drowsy. It contains acetaminophen, a cough suppressant, and a decongestant.",
            translation: "아니요, 주황색 '주간용(Daytime)' 제품은 전혀 졸리지 않습니다. 해열진통제, 진해제, 그리고 코막힘 완화제만 들어 있어요.",
            expressions: [{ phrase: "'Daytime' formula is completely non-drowsy", meaning: "주간용 포뮬러(처방)는 전혀 졸리지 않는다" }],
            vocabulary: [{ word: "daytime", meaning: "낮 시간용, 주간용" }, { word: "decongestant", meaning: "비충혈 제거제 (코막힘 완화제)" }]
          },
          {
            role: "손님", side: "right",
            text: "What about the blue caps in this combo pack?",
            translation: "이 콤보 패키지에 같이 들어 있는 파란색 캡슐은 뭔가요?",
            expressions: [{ phrase: "combo pack", meaning: "주간용과 야간용이 함께 들어 있는 묶음 상품" }],
            vocabulary: [{ word: "cap", meaning: "캡슐/정제(capsule/caplet)의 줄임말" }]
          },
          {
            role: "약사", side: "left",
            text: "The blue ones are 'Nighttime' capsules—they will make you very sleepy, so only take them right before bed when you're done driving.",
            translation: "파란색은 '야간용(Nighttime)' 캡슐이라서 아주 졸립니다. 그러니 운전이 다 끝난 후 자기 직전에만 복용하세요.",
            expressions: [{ phrase: "right before bed", meaning: "취침 직전에" }],
            vocabulary: [{ word: "nighttime", meaning: "밤 시간용, 야간용" }, { word: "sleepy", meaning: "졸린" }]
          }
        ]
      },
      {
        id: 13,
        title: "기존 복용 중인 약과의 상호작용 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, I have a really stuffy nose and sinus pressure. Can I buy this nasal decongestant tablet?",
            translation: "안녕하세요, 코가 꽉 막히고 부비동(코 주변) 압박감이 심해요. 이 먹는 코막힘 완화제를 사도 될까요?",
            expressions: [{ phrase: "stuffy nose and sinus pressure", meaning: "코막힘과 부비동(얼굴 앞쪽)이 묵직하게 눌리는 통증" }],
            vocabulary: [{ word: "stuffy nose", meaning: "코막힘 (nasal congestion)" }, { word: "sinus", meaning: "부비동 (코 주위 얼굴뼈 속 빈 공간)" }]
          },
          {
            role: "약사", side: "left",
            text: "Before I ring it up, do you take any daily prescription medications or have high blood pressure?",
            translation: "결제해 드리기 전에, 혹시 매일 복용하시는 처방약이 있거나 고혈압이 있으신가요?",
            expressions: [{ phrase: "daily prescription medications", meaning: "매일 복용하는 처방약" }, { phrase: "high blood pressure", meaning: "고혈압 (hypertension)" }],
            vocabulary: [{ word: "ring up", meaning: "(계산대에서 바코드를 찍어) 계산하다" }, { word: "prescription", meaning: "처방전, 처방약" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, actually! I take amlodipine and valsartan every morning for high blood pressure.",
            translation: "아, 네! 고혈압 때문에 매일 아침 암로디핀과 발사르탄 복합제를 복용하고 있어요.",
            expressions: [{ phrase: "I take ~ every morning for high blood pressure", meaning: "고혈압 때문에 매일 아침 ~을 복용합니다" }],
            vocabulary: [{ word: "blood pressure", meaning: "혈압" }]
          },
          {
            role: "약사", side: "left",
            text: "Thank goodness we checked! Oral decongestants like pseudoephedrine or phenylephrine can constrict blood vessels and raise your blood pressure.",
            translation: "확인하길 정말 잘했네요! 슈도에페드린이나 페닐에프린 같은 경구용 코막힘 약은 혈관을 수축시켜 혈압을 올릴 수 있습니다.",
            expressions: [{ phrase: "constrict blood vessels and raise your blood pressure", meaning: "혈관을 수축시켜 혈압을 상승시키다" }],
            vocabulary: [{ word: "constrict", meaning: "수축시키다" }, { word: "blood vessel", meaning: "혈관" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I had no idea it could interact with my blood pressure meds. What is safe for me to use instead?",
            translation: "아, 혈압약과 상충할 수 있는지 전혀 몰랐어요. 대신 제가 안전하게 쓸 수 있는 건 뭐가 있을까요?",
            expressions: [{ phrase: "interact with my blood pressure meds", meaning: "제 혈압약과 약물 상호작용을 일으키다" }],
            vocabulary: [{ word: "interact", meaning: "상호작용하다" }, { word: "meds", meaning: "약(medications)의 일상적 줄임말" }]
          },
          {
            role: "약사", side: "left",
            text: "A sterile saline nasal spray or a steroid nasal spray like Flonase is safe and won't affect your blood pressure.",
            translation: "멸균 생리식염수 코 스프레이나 플로네이즈 같은 비강 스테로이드 스프레이는 혈압에 영향을 주지 않아 안전합니다.",
            expressions: [{ phrase: "saline nasal spray", meaning: "생리식염수 비강 스프레이" }, { phrase: "won't affect your blood pressure", meaning: "혈압에 영향을 미치지 않는다" }],
            vocabulary: [{ word: "sterile", meaning: "멸균된" }, { word: "saline", meaning: "식염수" }]
          }
        ]
      },
      {
        id: 14,
        title: "임산부/수유부 복용 가능 여부 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, my wife is in her second trimester of pregnancy, and she has bad constipation and heartburn.",
            translation: "안녕하세요, 제 아내가 현재 임신 중기(2삼분기)인데 변비와 속쓰림이 심해서요.",
            expressions: [{ phrase: "in her second trimester of pregnancy", meaning: "임신 중기(14~27주)인 (초기는 first trimester, 후기는 third trimester)" }],
            vocabulary: [{ word: "pregnancy", meaning: "임신" }, { word: "constipation", meaning: "변비" }]
          },
          {
            role: "약사", side: "left",
            text: "Congratulations on the baby! We definitely need to be careful about which over-the-counter meds she takes during pregnancy.",
            translation: "임신을 축하드립니다! 임신 중에는 어떤 일반의약품을 복용할지 확실히 신중하게 골라야 합니다.",
            expressions: [{ phrase: "during pregnancy", meaning: "임신 기간 동안 (수유 중은 while breastfeeding)" }],
            vocabulary: [{ word: "careful", meaning: "조심스러운, 신중한" }]
          },
          {
            role: "손님", side: "right",
            text: "What is safe for pregnant women to take for heartburn and constipation?",
            translation: "임산부가 속쓰림과 변비에 안전하게 복용할 수 있는 약은 어떤 것이 있나요?",
            expressions: [{ phrase: "safe for pregnant women to take", meaning: "임산부가 복용하기에 안전한" }],
            vocabulary: [{ word: "pregnant", meaning: "임신한" }]
          },
          {
            role: "약사", side: "left",
            text: "For heartburn, calcium carbonate tablets like Tums are generally safe. Avoid anything containing aspirin or bismuth.",
            translation: "속쓰림에는 텀스(Tums) 같은 탄산칼슘 성분의 제산제가 일반적으로 안전합니다. 아스피린이나 비스무트 성분이 든 약은 피하셔야 해요.",
            expressions: [{ phrase: "calcium carbonate tablets", meaning: "탄산칼슘 정제 (임산부도 흔히 복용하는 츄어블 제산제)" }],
            vocabulary: [{ word: "generally", meaning: "일반적으로" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it. And what about for the constipation?",
            translation: "알겠습니다. 그럼 변비에는 어떤 약이 괜찮을까요?",
            expressions: [{ phrase: "what about for ~?", meaning: "~을 위한 약으로는 어떤 것이 있나요?" }],
            vocabulary: [{ word: "constipation", meaning: "변비" }]
          },
          {
            role: "약사", side: "left",
            text: "A gentle bulk-forming fiber supplement like psyllium husk or an osmotic laxative with plenty of water is preferred over stimulant laxatives.",
            translation: "자극성 하제보다는 차전자피 같은 순한 팽창성 식이섬유 보충제나 삼투성 완하제를 충분한 물과 함께 드시는 것이 좋습니다.",
            expressions: [{ phrase: "preferred over stimulant laxatives", meaning: "자극성 변비약(하제)보다 더 권장된다" }],
            vocabulary: [{ word: "fiber supplement", meaning: "식이섬유 보충제" }, { word: "laxative", meaning: "변비약, 완하제" }]
          }
        ]
      },
      {
        id: 15,
        title: "화상 연고 및 거즈 드레싱 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, I accidentally spilled hot coffee on my forearm. I ran cool water over it, but it's still red and stinging.",
            translation: "안녕하세요, 실수로 팔뚝에 뜨거운 커피를 쏟았어요. 찬물로 식히긴 했는데 아직도 빨갛고 화끈거려요.",
            expressions: [{ phrase: "ran cool water over it", meaning: "상처 부위를 흐르는 찬물에 식혔다" }, { phrase: "red and stinging", meaning: "붉어지고 화끈거리는(쓰라린)" }],
            vocabulary: [{ word: "forearm", meaning: "팔뚝 (손목에서 팔꿈치 사이)" }, { word: "accidentally", meaning: "실수로" }]
          },
          {
            role: "약사", side: "left",
            text: "Let me see. It looks like a superficial first-degree burn with one small blister forming.",
            translation: "어디 보겠습니다. 작은 물집이 하나 잡히고 있는 경미한 표재성 1도~얕은 2도 화상으로 보이네요.",
            expressions: [{ phrase: "first-degree burn", meaning: "1도 화상" }, { phrase: "small blister forming", meaning: "작은 물집(수포)이 생기고 있는" }],
            vocabulary: [{ word: "burn", meaning: "화상" }, { word: "blister", meaning: "물집, 수포" }]
          },
          {
            role: "손님", side: "right",
            text: "Should I pop the blister or leave it alone? And what burn gel should I put on it?",
            translation: "물집을 터뜨려야 하나요, 아니면 그냥 두어야 하나요? 그리고 어떤 화상 연고(젤)를 발라야 할까요?",
            expressions: [{ phrase: "pop the blister or leave it alone", meaning: "물집을 터뜨릴지 그대로 둘지" }],
            vocabulary: [{ word: "pop", meaning: "(물집·풍선 등을) 터뜨리다" }]
          },
          {
            role: "약사", side: "left",
            text: "Never pop a burn blister, as it protects against infection! Apply this cooling burn hydrogel first to draw out the heat.",
            translation: "화상 물집은 감염을 막아주니 절대 터뜨리지 마세요! 먼저 열기를 빼주기 위해 이 쿨링 화상 하이드로겔을 바르세요.",
            expressions: [{ phrase: "protects against infection", meaning: "세균 감염으로부터 보호해 준다" }, { phrase: "draw out the heat", meaning: "화상 부위의 열기를 빼내다" }],
            vocabulary: [{ word: "infection", meaning: "감염" }, { word: "hydrogel", meaning: "수분 젤 (하이드로겔)" }]
          },
          {
            role: "손님", side: "right",
            text: "Okay. Can I also get some non-stick sterile gauze pads so my clothes don't rub against it?",
            translation: "알겠습니다. 옷에 쓸리지 않도록 상처에 달라붙지 않는 멸균 거즈 패드도 살 수 있을까요?",
            expressions: [{ phrase: "non-stick sterile gauze pads", meaning: "상처 진물에 들러붙지 않는 멸균 거즈 패드" }],
            vocabulary: [{ word: "non-stick", meaning: "달라붙지 않는" }, { word: "gauze", meaning: "거즈" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes, cover the gel with this non-adherent pad and secure it loosely with paper medical tape.",
            translation: "네, 젤을 바른 뒤 이 비점착성 패드로 덮고 종이 의료용 테이프로 느슨하게 고정해 주세요.",
            expressions: [{ phrase: "secure it loosely with paper medical tape", meaning: "의료용 종이 반창고로 압박되지 않게 느슨히 고정하다" }],
            vocabulary: [{ word: "non-adherent", meaning: "상처에 들러붙지 않는" }, { word: "loosely", meaning: "느슨하게" }]
          }
        ]
      },
      {
        id: 16,
        title: "멀미약(붙이는 패치/먹는 약) 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I'm going on a boat tour tomorrow and I get really bad motion sickness and seasickness.",
            translation: "안녕하세요! 내일 보트 투어를 가는데 제가 멀미와 배멀미를 아주 심하게 하거든요.",
            expressions: [{ phrase: "get really bad motion sickness", meaning: "멀미를 아주 심하게 하다" }],
            vocabulary: [{ word: "motion sickness", meaning: "멀미 (차멀미는 carsickness, 배멀미는 seasickness)" }]
          },
          {
            role: "약사", side: "left",
            text: "Do you want oral tablets like Dramamine, or patches that go behind your ear?",
            translation: "드라마민 같은 먹는 멀미약을 원하시나요, 아니면 귀 뒤에 붙이는 패치를 원하시나요?",
            expressions: [{ phrase: "patches that go behind your ear", meaning: "귀 뒤에 붙이는 멀미 패치(키미테 형태)" }],
            vocabulary: [{ word: "oral tablet", meaning: "먹는 알약(경구 정제)" }]
          },
          {
            role: "손님", side: "right",
            text: "Can I buy the scopolamine patches without a prescription here?",
            translation: "여기서 귀 뒤에 붙이는 스코폴라민 패치를 처방전 없이 살 수 있나요?",
            expressions: [{ phrase: "without a prescription", meaning: "의사 처방전 없이" }],
            vocabulary: [{ word: "scopolamine", meaning: "스코폴라민 (붙이는 멀미약 성분)" }]
          },
          {
            role: "약사", side: "left",
            text: "In this country, scopolamine patches require a doctor's prescription, but we have OTC meclizine chewable tablets and ginger acupressure wristbands.",
            translation: "이 나라에서는 스코폴라민 패치에 의사 처방전이 필요하지만, 일반의약품인 메클리진 츄어블정과 생강 성분 및 지압 손목밴드가 있습니다.",
            expressions: [{ phrase: "require a doctor's prescription", meaning: "의사의 처방전이 필요하다 (미국 등 다수 국가에서 스코폴라민 패치는 전문의약품임)" }],
            vocabulary: [{ word: "meclizine", meaning: "메클리진 (자극이 적고 오래가는 먹는 멀미약 성분, Bonine/Less-Drowsy Dramamine)" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll take the meclizine tablets, then! When should I take the pill before getting on the boat?",
            translation: "그럼 메클리진 알약으로 할게요! 배에 타기 얼마나 전에 약을 먹어야 하나요?",
            expressions: [{ phrase: "before getting on the boat", meaning: "배에 탑승하기 전에" }],
            vocabulary: [{ word: "get on", meaning: "(배·버스 등에) 탑승하다" }]
          },
          {
            role: "약사", side: "left",
            text: "Take one tablet 30 to 60 minutes before boarding. One dose lasts for up to 24 hours!",
            translation: "탑승하기 30분에서 1시간 전에 한 알을 복용하세요. 한 번 드시면 최대 24시간 동안 효과가 지속됩니다!",
            expressions: [{ phrase: "30 to 60 minutes before boarding", meaning: "탑승 30~60분 전에" }, { phrase: "lasts for up to 24 hours", meaning: "최대 24시간 동안 약효가 지속된다" }],
            vocabulary: [{ word: "boarding", meaning: "탑승, 승선" }, { word: "last", meaning: "(효과·시간이) 지속되다" }]
          }
        ]
      },
      {
        id: 17,
        title: "구내염 연고 및 비타민 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I'm exhausted from traveling and I developed a painful canker sore inside my lip.",
            translation: "실례합니다, 여행하느라 피로가 쌓여서 입술 안쪽에 아픈 구내염(입병)이 생겼어요.",
            expressions: [{ phrase: "developed a painful canker sore", meaning: "통증이 심한 아프타성 구내염(입안 궤양)이 생겼다" }],
            vocabulary: [{ word: "canker sore", meaning: "구내염, 입안 궤양 (mouth ulcer라고도 함 / 입술 물집 헤르페스는 cold sore)" }]
          },
          {
            role: "약사", side: "left",
            text: "Canker sores make it so hard to eat! Would you like an oral numbing gel or a protective patch that sticks inside the mouth?",
            translation: "구내염이 나면 음식을 먹기가 참 힘들죠! 입안에 바르는 마취 진통 젤을 원하시나요, 아니면 입안에 붙이는 보호 패치를 원하시나요?",
            expressions: [{ phrase: "oral numbing gel", meaning: "구강용 국소 마취 진통 젤" }, { phrase: "protective patch", meaning: "상처 부위를 덮어 보호하는 구내염 패치" }],
            vocabulary: [{ word: "stick", meaning: "붙다, 접착되다" }]
          },
          {
            role: "손님", side: "right",
            text: "I'd like the oral gel that forms a protective film over the sore so it doesn't sting when I eat.",
            translation: "먹을 때 쓰리지 않게 상처 위에 얇은 보호막을 형성해 주는 구강 연고(젤)로 주세요.",
            expressions: [{ phrase: "forms a protective film over the sore", meaning: "구내염 상처 위에 얇은 보호막(코팅막)을 형성하다" }],
            vocabulary: [{ word: "protective film", meaning: "보호막" }, { word: "sore", meaning: "헌 데, 염증 부위" }]
          },
          {
            role: "약사", side: "left",
            text: "This gel works great. Dab the sore dry with a cotton swab first, then apply a small drop of the gel.",
            translation: "이 젤이 효과가 아주 좋습니다. 먼저 면봉으로 상처 부위의 침을 톡톡 닦아 말린 뒤, 젤을 소량 발라주세요.",
            expressions: [{ phrase: "Dab the sore dry with a cotton swab", meaning: "면봉으로 상처 부위를 가볍게 눌러 물기(침)를 닦아내다" }],
            vocabulary: [{ word: "dab", meaning: "톡톡 가볍게 두드려 닦다" }, { word: "cotton swab", meaning: "면봉 (Q-tip)" }]
          },
          {
            role: "손님", side: "right",
            text: "Could I also get a vitamin B-complex supplement to help with fatigue and mouth ulcers?",
            translation: "피로 회복과 구내염 완화에 도움이 되는 비타민 B군 복합제도 하나 살 수 있을까요?",
            expressions: [{ phrase: "vitamin B-complex supplement", meaning: "비타민 B군 복합 영양제" }, { phrase: "help with fatigue", meaning: "육체 피로 회복에 도움을 주다" }],
            vocabulary: [{ word: "fatigue", meaning: "피로" }, { word: "mouth ulcer", meaning: "구내염 (영국·호주 및 의학에서 자주 쓰는 표현)" }]
          },
          {
            role: "약사", side: "left",
            text: "Absolutely! This high-potency B-complex with vitamin C and zinc will help speed up healing.",
            translation: "물론이죠! 비타민 C와 아연이 함께 들어 있는 이 고함량 비타민 B 복합제가 회복 속도를 높이는 데 도움을 줄 겁니다.",
            expressions: [{ phrase: "high-potency B-complex", meaning: "고함량 비타민 B군 복합제" }, { phrase: "speed up healing", meaning: "치유(회복) 속도를 높이다" }],
            vocabulary: [{ word: "high-potency", meaning: "고함량의, 고효능의" }, { word: "zinc", meaning: "아연" }]
          }
        ]
      },
      {
        id: 18,
        title: "수면 보조제 및 시차 적응 도움 약 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello, I'm suffering from terrible jet lag and haven't been able to sleep past 2:00 AM for three days.",
            translation: "안녕하세요, 시차 적응을 너무 못해서 사흘째 새벽 2시만 넘으면 잠을 못 자고 있어요.",
            expressions: [{ phrase: "suffering from terrible jet lag", meaning: "심한 시차 적응 장애(시차증)로 고생하고 있다" }],
            vocabulary: [{ word: "jet lag", meaning: "시차증, 시차로 인한 피로·수면 장애" }]
          },
          {
            role: "약사", side: "left",
            text: "Jet lag can really ruin a trip! Have you tried taking melatonin to reset your sleep cycle?",
            translation: "시차 때문에 여행이 정말 힘들어질 수 있죠! 수면 주기를 재조정하기 위해 멜라토닌을 복용해 보셨나요?",
            expressions: [{ phrase: "reset your sleep cycle", meaning: "수면 패턴(생체 리듬)을 다시 맞추다" }],
            vocabulary: [{ word: "melatonin", meaning: "멜라토닌 (수면 리듬 조절 호르몬 보충제)" }]
          },
          {
            role: "손님", side: "right",
            text: "No, not yet. Can I buy melatonin over the counter here, and won't it make me groggy the next morning?",
            translation: "아뇨, 아직요. 여기서 처방전 없이 멜라토닌을 살 수 있나요? 그리고 다음 날 아침에 머리가 멍하거나 처지진 않을까요?",
            expressions: [{ phrase: "make me groggy the next morning", meaning: "다음 날 아침에 약기운이 남아 멍하고 비틀거리게 만들다" }],
            vocabulary: [{ word: "groggy", meaning: "잠이나 약기운이 덜 깨어 멍하고 비틀거리는" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes, it's sold over the counter. To avoid morning grogginess, start with a low dose like 1mg or 3mg rather than 10mg.",
            translation: "네, 일반의약품(건강기능식품)으로 판매됩니다. 아침에 멍한 증상을 피하려면 10mg 같은 고용량 대신 1mg이나 3mg의 저용량으로 시작하세요.",
            expressions: [{ phrase: "start with a low dose", meaning: "저용량으로 복용을 시작하다" }],
            vocabulary: [{ word: "grogginess", meaning: "수면 후 멍하고 무거운 상태" }]
          },
          {
            role: "손님", side: "right",
            text: "That's great advice. I'll take the 3mg gummies, please. When should I take them?",
            translation: "좋은 조언 감사해요. 3mg 구미(젤리) 형태로 주세요. 언제 복용하면 되나요?",
            expressions: [{ phrase: "3mg gummies", meaning: "3mg 젤리(구미) 형태의 영양제" }],
            vocabulary: [{ word: "gummy (gummies)", meaning: "씹어 먹는 젤리 형태의 영양제" }]
          },
          {
            role: "약사", side: "left",
            text: "Chew one gummy about 30 to 60 minutes before your target bedtime, and dim the room lights after taking it.",
            translation: "목표하시는 취침 시간 30분~1시간 전에 구미 한 개를 씹어 드시고, 복용 후에는 방 조명을 어둡게 낮추세요.",
            expressions: [{ phrase: "target bedtime", meaning: "잠들고자 하는 목표 취침 시각" }, { phrase: "dim the room lights", meaning: "방 안의 조명을 어둡게 줄이다" }],
            vocabulary: [{ word: "dim", meaning: "(불빛을) 어둡게 하다" }]
          }
        ]
      },
      {
        id: 19,
        title: "보험 청구용 상세 영수증 발급 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, I just saw a doctor at the walk-in clinic and I'd like to fill this prescription.",
            translation: "안녕하세요, 방금 예약 없이 가는 클리닉에서 진료를 받고 왔는데 이 처방전으로 약을 조제하고 싶습니다.",
            expressions: [{ phrase: "fill this prescription", meaning: "처방전에 따라 약을 조제 받다" }],
            vocabulary: [{ word: "walk-in clinic", meaning: "예약 없이 바로 진료받을 수 있는 의원" }]
          },
          {
            role: "약사", side: "left",
            text: "Sure! Your antibiotic and ear drops are ready. Since you're a traveler, you'll be paying out of pocket today, right?",
            translation: "네! 처방받으신 항생제와 귀에 넣는 점이제가 준비되었습니다. 여행객이시니 오늘은 본인 부담(비보험)으로 먼저 결제하시는 거죠?",
            expressions: [{ phrase: "paying out of pocket", meaning: "보험 적용 없이 본인 자비로 먼저 전액 결제하다" }],
            vocabulary: [{ word: "ear drops", meaning: "귀에 넣는 물약 (점이제)" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, I'll pay now and file a claim with my travel insurance when I return to Korea.",
            translation: "네, 지금 먼저 결제하고 한국에 돌아가서 여행자 보험으로 보험금을 청구하려고요.",
            expressions: [{ phrase: "file a claim with my travel insurance", meaning: "여행자 보험사에 보험금 청구를 접수하다" }],
            vocabulary: [{ word: "claim", meaning: "(보험금) 청구" }, { word: "travel insurance", meaning: "여행자 보험" }]
          },
          {
            role: "약사", side: "left",
            text: "In that case, would you like an official itemized pharmacy receipt along with the register receipt?",
            translation: "그렇다면 일반 카드 영수증 외에 약품 내역이 상세히 적힌 공식 약국 세부 영수증도 함께 뽑아 드릴까요?",
            expressions: [{ phrase: "itemized pharmacy receipt", meaning: "약 이름·용량·가격이 항목별로 상세히 기재된 약국 영수증 (보험 청구 필수 서류)" }],
            vocabulary: [{ word: "itemized", meaning: "항목별로 상세히 기재된" }, { word: "register receipt", meaning: "계산대 일반 결제 영수증" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! It needs to show my full name, the medication names, the date, and the pharmacy's details.",
            translation: "네, 꼭 부탁드려요! 제 영문 성함과 약품명, 조제 일자, 그리고 약국 정보가 모두 나와 있어야 하거든요.",
            expressions: [{ phrase: "show my full name, the medication names, ~", meaning: "성명과 약품명 등이 표시되어 있다" }],
            vocabulary: [{ word: "full name", meaning: "성(Last name)과 이름(First name) 전체" }]
          },
          {
            role: "약사", side: "left",
            text: "Here you go! I've printed the official prescription receipt with all the drug details and stamped it for your insurance.",
            translation: "여기 있습니다! 모든 약품 상세 내역이 적힌 공식 처방 영수증을 출력해서 보험 청구용 약국 확인 도장까지 찍어 드렸습니다.",
            expressions: [{ phrase: "stamped it for your insurance", meaning: "보험 제출용으로 확인 직인(도장)을 찍었다" }],
            vocabulary: [{ word: "stamp", meaning: "도장을 찍다" }]
          }
        ]
      },
      {
        id: 20,
        title: "기내 반입용 영문 약품 설명서 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I'm flying internationally tonight. Can I bring this liquid cough syrup and inhaler in my carry-on bag?",
            translation: "실례합니다, 제가 오늘 밤 국제선 비행기를 타는데요. 이 액상 기침 시럽과 흡입기를 기내 반입 가방에 들고 타도 될까요?",
            expressions: [{ phrase: "bring ~ in my carry-on bag", meaning: "~을 기내 반입 수하물에 가지고 타다" }],
            vocabulary: [{ word: "inhaler", meaning: "(천식·기관지용) 흡입기" }]
          },
          {
            role: "약사", side: "left",
            text: "Yes! Liquid medications and inhalers are exempt from the 100mL liquid rule at airport security if declared.",
            translation: "네! 액상 의약품과 흡입기는 공항 보안 검색대에서 별도로 신고하시면 100mL 액체 반입 제한 규정에서 예외로 인정됩니다.",
            expressions: [{ phrase: "exempt from the 100mL liquid rule", meaning: "100mL 기내 액체류 반입 제한 규정에서 면제(예외)되다" }],
            vocabulary: [{ word: "exempt", meaning: "(규정 등에서) 면제되는, 예외인" }, { word: "airport security", meaning: "공항 보안 검색대" }]
          },
          {
            role: "손님", side: "right",
            text: "Should I keep them in their original boxes, or can I just pack the bottles?",
            translation: "원래 약 상자 그대로 보관해서 가져가야 하나요, 아니면 약병만 챙겨도 되나요?",
            expressions: [{ phrase: "keep them in their original boxes", meaning: "원래의 약품 포장 상자 그대로 보관하다" }],
            vocabulary: [{ word: "original", meaning: "원래의, 본래 포장의" }]
          },
          {
            role: "약사", side: "left",
            text: "Always keep them in their original packaging with the English leaflet inside so customs officers can verify the ingredients.",
            translation: "세관 직원이 성분을 확인할 수 있도록 반드시 영문 약품 설명서가 들어 있는 원래 포장 상자 그대로 보관해 가세요.",
            expressions: [{ phrase: "with the English leaflet inside", meaning: "내부에 영문 약품 설명서(첨부문서)가 동봉된 채로" }],
            vocabulary: [{ word: "leaflet", meaning: "약품 설명서, 첨부 문서 (package insert)" }, { word: "customs officer", meaning: "세관 직원" }]
          },
          {
            role: "손님", side: "right",
            text: "Could you also attach a pharmacy label with my name on the prescription box just in case?",
            translation: "혹시 모르니 처방약 상자 겉면에 제 이름이 적힌 약국 조제 라벨도 붙여 주실 수 있나요?",
            expressions: [{ phrase: "attach a pharmacy label with my name", meaning: "본인 이름이 인쇄된 약국 조제 라벨을 부착하다" }],
            vocabulary: [{ word: "attach", meaning: "부착하다, 붙이다" }, { word: "just in case", meaning: "만약을 대비해서" }]
          },
          {
            role: "약사", side: "left",
            text: "Already done! I'll also put them in a clear zip-top bag so you can easily show them at the security checkpoint.",
            translation: "이미 붙여 두었습니다! 보안 검색대에서 쉽게 꺼내 보여줄 수 있도록 투명 지퍼백에도 담아 드릴게요.",
            expressions: [{ phrase: "clear zip-top bag", meaning: "투명 지퍼백" }, { phrase: "security checkpoint", meaning: "보안 검색대" }],
            vocabulary: [{ word: "clear", meaning: "투명한" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 약국 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "두통 및 발열로 진통해열제 구매하기",
        lines: [
          {
            role: "약사", side: "left",
            text: "いらっしゃいませ。今日はどのような症状でお困りですか？",
            translation: "어서 오세요. 오늘은 어떤 증상으로 불편하신가요?",
            expressions: [{ phrase: "どのような症状でお困りですか？", meaning: "어떤 증상으로 힘드신가요? (약국에서 약사가 증상을 물을 때 쓰는 기본 표현)" }],
            vocabulary: [{ word: "今日(きょう)", meaning: "오늘" }, { word: "症状(しょうじょう)", meaning: "증상" }, { word: "困る(こまる)", meaning: "곤란하다, 힘들다" }]
          },
          {
            role: "손님", side: "right",
            text: "今朝からズキズキする頭痛と微熱があります。解熱鎮痛剤はありますか？",
            translation: "오늘 아침부터 지끈거리는 두통과 미열이 있습니다. 해열진통제가 있나요?",
            expressions: [{ phrase: "ズキズキする頭痛", meaning: "지끈지끈(욱신욱신) 쑤시는 두통" }],
            vocabulary: [{ word: "今朝(けさ)", meaning: "오늘 아침" }, { word: "頭痛(ずつう)", meaning: "두통" }, { word: "微熱(びねつ)", meaning: "미열" }, { word: "解熱鎮痛剤(げねつちんつうざい)", meaning: "해열진통제" }]
          },
          {
            role: "약사", side: "left",
            text: "それはお辛いですね。アセトアミノフェンとイブプロフェン、どちらの成分をご希望ですか？",
            translation: "많이 힘드시겠네요. 아세트아미노펜과 이부프로펜 중 어떤 성분을 원하시나요?",
            expressions: [{ phrase: "どちらの成分をご希望ですか？", meaning: "어느 쪽 성분을 희망하시나요?" }],
            vocabulary: [{ word: "辛い(つらい)", meaning: "괴롭다, 힘들다" }, { word: "成分(せいぶん)", meaning: "성분" }, { word: "希望(きぼう)", meaning: "희망, 원함" }]
          },
          {
            role: "손님", side: "right",
            text: "胃が弱いので、胃に優しいアセトアミノフェンの薬をお願いします。",
            translation: "위가 약해서, 위에 부담이 적은 아세트아미노펜 성분의 약으로 부탁합니다.",
            expressions: [{ phrase: "胃が弱いので", meaning: "위가 약해서" }, { phrase: "胃に優しい", meaning: "위에 부담이 적은, 위에 순한" }],
            vocabulary: [{ word: "胃(い)", meaning: "위, 위장" }, { word: "弱い(よわい)", meaning: "약하다" }, { word: "優しい(やさしい)", meaning: "순하다, 부드럽다" }, { word: "薬(くすり)", meaning: "약" }]
          },
          {
            role: "약사", side: "left",
            text: "かしこまりました。こちらのタイレノールは1回1錠、4時間以上あけて1日3回まで服用してください。",
            translation: "알겠습니다. 이 타이레놀은 1회 1정씩, 4시간 이상 간격을 두고 하루 최대 3회까지 복용해 주세요.",
            expressions: [{ phrase: "4時間以上あけて", meaning: "복용 간격을 4시간 이상 띄우고" }],
            vocabulary: [{ word: "1回(いっかい)", meaning: "1회" }, { word: "1錠(いちじょう)", meaning: "1정 (알약 1알)" }, { word: "以上(いじょう)", meaning: "이상" }, { word: "服用(ふくよう)する", meaning: "복용하다" }]
          },
          {
            role: "손님", side: "right",
            text: "1回1錠ですね。分かりました、ありがとうございます！",
            translation: "1회 1정이군요. 알겠습니다, 감사합니다!",
            expressions: [{ phrase: "1回1錠ですね", meaning: "한 번에 한 알 말씀이시죠 (일본 타이레놀은 1정 300mg 기준 1회 1정 복용이 기본)" }],
            vocabulary: [{ word: "分かる(わかる)", meaning: "알다, 이해하다" }]
          }
        ]
      },
      {
        id: 2,
        title: "목감기와 기침약 증상 설명해 고르기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、風邪をひいたようで、唾を飲み込むときに喉がすごく痛いです。",
            translation: "실례합니다, 감기에 걸린 것 같은데 침을 삼킬 때 목이 너무 아파요.",
            expressions: [{ phrase: "唾を飲み込むときに喉が痛い", meaning: "침을 삼킬 때 목(인후)이 아프다" }],
            vocabulary: [{ word: "風邪(かぜ)をひく", meaning: "감기에 걸리다" }, { word: "唾(つば)", meaning: "침" }, { word: "飲み込む(のみこむ)", meaning: "삼키다" }, { word: "喉(のど)", meaning: "목, 목구멍" }, { word: "痛い(いたい)", meaning: "아프다" }]
          },
          {
            role: "약사", side: "left",
            text: "咳も出ますか？乾いた咳ですか、それとも痰が絡む咳ですか？",
            translation: "기침도 나오나요? 마른기침인가요, 아니면 가래가 끓는 기침인가요?",
            expressions: [{ phrase: "乾いた咳", meaning: "마른기침" }, { phrase: "痰が絡む咳", meaning: "가래가 얽히는(끓는) 기침" }],
            vocabulary: [{ word: "咳(せき)", meaning: "기침" }, { word: "乾く(かわく)", meaning: "마르다" }, { word: "痰(たん)", meaning: "가래" }, { word: "絡む(からむ)", meaning: "얽히다, 걸리다" }]
          },
          {
            role: "손님", side: "right",
            text: "コンコンという乾いた咳が出て、夜も眠れないほどです。",
            translation: "콜록콜록하는 마른기침이 나와서 밤에 잠을 못 잘 정도예요.",
            expressions: [{ phrase: "夜も眠れないほどです", meaning: "밤에 잠을 잘 수 없을 정도입니다" }],
            vocabulary: [{ word: "コンコン", meaning: "콜록콜록 (마른기침 의성어)" }, { word: "夜(よる)", meaning: "밤" }, { word: "眠れる(ねむれる)", meaning: "잠들 수 있다" }]
          },
          {
            role: "약사", side: "left",
            text: "それでしたら、咳を抑えるシロップと、喉の炎症を鎮めるトローチがおすすめです。",
            translation: "그렇다면 기침을 억제하는 시럽과 목의 염증을 가라앉히는 트로키(목캔디형 약)를 추천합니다.",
            expressions: [{ phrase: "喉の炎症を鎮める", meaning: "목의 염증을 가라앉히다(진정시키다)" }],
            vocabulary: [{ word: "抑える(おさえる)", meaning: "억제하다, 누르다" }, { word: "炎症(えんしょう)", meaning: "염증" }, { word: "鎮める(しずめる)", meaning: "진정시키다, 가라앉히다" }]
          },
          {
            role: "손님", side: "right",
            text: "このトローチはどのように使えばいいですか？",
            translation: "이 트로키는 어떻게 복용하면 되나요?",
            expressions: [{ phrase: "どのように使えばいいですか？", meaning: "어떻게 사용하면 되나요?" }],
            vocabulary: [{ word: "使う(つかう)", meaning: "사용하다" }]
          },
          {
            role: "약사", side: "left",
            text: "噛まずに口の中でゆっくり溶かしてください。喉に直接スプレーする薬もありますよ。",
            translation: "씹지 말고 입안에서 천천히 녹여 드세요. 목 안쪽에 직접 뿌리는 인후 스프레이 약도 있습니다.",
            expressions: [{ phrase: "噛まずに口の中でゆっくり溶かす", meaning: "씹지 않고 입안에서 천천히 녹이다" }],
            vocabulary: [{ word: "噛む(かむ)", meaning: "씹다" }, { word: "口(くち)の中(なか)", meaning: "입안" }, { word: "溶かす(とかす)", meaning: "녹이다" }, { word: "直接(ちょくせつ)", meaning: "직접" }]
          }
        ]
      },
      {
        id: 3,
        title: "소화불량 및 위산 역류 약 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "さっき脂っこい食事をしてから、消化不良と胸焼けがひどいんです。",
            translation: "아까 기름진 식사를 한 뒤로 소화불량과 속쓰림(가슴쓰림)이 심해요.",
            expressions: [{ phrase: "脂っこい食事", meaning: "기름진 식사" }, { phrase: "消化不良と胸焼け", meaning: "소화불량과 속쓰림(가슴쓰림)" }],
            vocabulary: [{ word: "脂(あぶら)っこい", meaning: "기름지다" }, { word: "食事(しょくじ)", meaning: "식사" }, { word: "消化不良(しょうかふりょう)", meaning: "소화불량" }, { word: "胸焼け(むねやけ)", meaning: "속쓰림, 가슴쓰림" }]
          },
          {
            role: "약사", side: "left",
            text: "胃酸が上がってくる感じですか？それともお腹が張って苦しい感じですか？",
            translation: "위산(신물)이 올라오는 느낌이신가요? 아니면 배에 가스가 차고 더부룩한 느낌이신가요?",
            expressions: [{ phrase: "胃酸が上がってくる", meaning: "위산이 역류해 올라오다" }, { phrase: "お腹が張って苦しい", meaning: "배가 빵빵하게 불러(가스가 차서) 답답하다" }],
            vocabulary: [{ word: "胃酸(いさん)", meaning: "위산" }, { word: "上がる(あがる)", meaning: "올라오다" }, { word: "お腹(おなか)が張る(はる)", meaning: "배가 더부룩하다, 가스가 차다" }, { word: "苦しい(くるしい)", meaning: "괴롭다, 답답하다" }]
          },
          {
            role: "손님", side: "right",
            text: "両方あります。胃もたれもして、すっぱい胃酸も上がってきます。",
            translation: "둘 다 있어요. 속도 더부룩하게 체한 것 같고 신물(위산)도 올라옵니다.",
            expressions: [{ phrase: "胃もたれもして", meaning: "속이 더부룩하게 체한 느낌도 있고" }],
            vocabulary: [{ word: "両方(りょうほう)", meaning: "양쪽 다, 둘 다" }, { word: "胃(い)もたれ", meaning: "위 무거움, 소화불량으로 속이 더부룩함" }, { word: "すっぱい", meaning: "시다 (신맛이 나다)" }]
          },
          {
            role: "약사", side: "left",
            text: "では、胃酸を中和する成分と消化酵素が一緒に入ったこちらの胃腸薬がおすすめです。",
            translation: "그렇다면 위산을 중화하는 제산 성분과 소화효소가 함께 들어 있는 이 위장약을 추천해 드립니다.",
            expressions: [{ phrase: "胃酸を中和する成分", meaning: "위산을 중화하는 제산 성분" }],
            vocabulary: [{ word: "中和(ちゅうわ)する", meaning: "중화하다" }, { word: "消化酵素(しょうかこうそ)", meaning: "소화효소" }, { word: "一緒(いっしょ)に", meaning: "함께" }, { word: "胃腸薬(いちょうやく)", meaning: "위장약" }]
          },
          {
            role: "손님", side: "right",
            text: "粉薬ですか、それとも錠剤ですか？粉薬は少し飲みにくくて…。",
            translation: "가루약인가요, 아니면 알약(정제)인가요? 가루약은 먹기가 좀 힘들어서요.",
            expressions: [{ phrase: "粉薬ですか、それとも錠剤ですか？", meaning: "가루약(산제)인가요, 아니면 알약(정제)인가요?" }],
            vocabulary: [{ word: "粉薬(こなぐすり)", meaning: "가루약" }, { word: "錠剤(じょうざい)", meaning: "정제, 알약" }, { word: "飲みにくい(のみにくい)", meaning: "먹기(삼키기) 힘들다" }]
          },
          {
            role: "약사", side: "left",
            text: "こちらは小粒の錠剤タイプですので飲みやすいですよ。食後に水で3錠お飲みください。",
            translation: "이 제품은 작은 알약 형태라서 삼키기 편하실 거예요. 식후에 물과 함께 3정을 복용하세요.",
            expressions: [{ phrase: "小粒の錠剤タイプ", meaning: "크기가 작은 알약 타입" }],
            vocabulary: [{ word: "小粒(こつぶ)", meaning: "작은 알갱이, 소형 알약" }, { word: "飲みやすい(のみやすい)", meaning: "먹기(삼키기) 편하다" }, { word: "食後(しょくご)", meaning: "식후" }, { word: "3錠(さんじょう)", meaning: "3정(3알)" }]
          }
        ]
      },
      {
        id: 4,
        title: "물갈이 배탈 및 지사제 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、水あたりしたのか、昨夜から下痢と腹痛が続いています。",
            translation: "실례합니다, 물갈이를 한 건지 어젯밤부터 설사와 복통이 계속되고 있어요.",
            expressions: [{ phrase: "水あたりしたのか", meaning: "물갈이를 한 것인지" }, { phrase: "下痢と腹痛が続いています", meaning: "설사와 복통이 이어지고 있습니다" }],
            vocabulary: [{ word: "水(みず)あたり", meaning: "물갈이 배탈" }, { word: "昨夜(さくや)", meaning: "어젯밤" }, { word: "下痢(げり)", meaning: "설사" }, { word: "腹痛(ふくつう)", meaning: "복통" }, { word: "続く(つづく)", meaning: "계속되다" }]
          },
          {
            role: "약사", side: "left",
            text: "それは大変ですね。高熱や血便、激しい吐き気はありますか？",
            translation: "많이 힘드시겠네요. 혹시 고열이나 혈변, 심한 구토 증상이 있으신가요?",
            expressions: [{ phrase: "高熱や血便、激しい吐き気", meaning: "고열이나 혈변, 심한 메스꺼움(구토감)" }],
            vocabulary: [{ word: "高熱(こうねつ)", meaning: "고열" }, { word: "血便(けつべん)", meaning: "혈변" }, { word: "激しい(はげしい)", meaning: "심한, 격렬한" }, { word: "吐き気(はきけ)", meaning: "구역질, 메스꺼움" }]
          },
          {
            role: "손님", side: "right",
            text: "熱や吐き気は全くありません。今日バスのツアーがあるので、すぐ効く下痢止めが欲しいです。",
            translation: "열이나 메스꺼움은 전혀 없습니다. 오늘 버스 투어 일정이 있어서 바로 효과가 나는 지사제를 사고 싶어요.",
            expressions: [{ phrase: "すぐ効く下痢止め", meaning: "빠르게 효과가 나타나는 지사제" }],
            vocabulary: [{ word: "熱(ねつ)", meaning: "열" }, { word: "全く(まったく)", meaning: "전혀" }, { word: "効く(きく)", meaning: "(약효가) 듣다, 효과가 있다" }, { word: "下痢止め(げりどめ)", meaning: "지사제, 설사약" }]
          },
          {
            role: "약사", side: "left",
            text: "熱がないのでしたら、水なしで口の中で溶けるこちらの下痢止めがバスの中でも便利ですよ。",
            translation: "열이 없으시다면, 물 없이도 입안에서 바로 녹아 버스 안에서도 먹기 편한 이 지사제가 좋습니다.",
            expressions: [{ phrase: "水なしで口の中で溶ける", meaning: "물 없이 입안에서 녹는 (일본의 스토파 등 필름·구강붕해정 지사제)" }],
            vocabulary: [{ word: "水(みず)なし", meaning: "물 없음" }, { word: "溶ける(とける)", meaning: "녹다" }, { word: "便利(べんり)", meaning: "편리함" }]
          },
          {
            role: "손님", side: "right",
            text: "水なしで飲めるのは助かります！脱水症状を防ぐ飲み物も一緒に買えますか？",
            translation: "물 없이 먹을 수 있다니 정말 좋네요! 탈수 증상을 막아주는 음료도 함께 살 수 있나요?",
            expressions: [{ phrase: "脱水症状を防ぐ", meaning: "탈수 증상을 예방하다(막다)" }],
            vocabulary: [{ word: "脱水症状(だっすいしょうじょう)", meaning: "탈수 증상" }, { word: "防ぐ(ふせぐ)", meaning: "막다, 예방하다" }, { word: "買う(かう)", meaning: "사다" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、こちらの経口補水液「OS-1」を少しずつこまめに飲んで水分と電解質を補給してください。",
            translation: "네, 이 경구수액제 'OS-1'을 조금씩 자주 마셔서 수분과 전해질을 보충해 주세요.",
            expressions: [{ phrase: "少しずつこまめに飲んで", meaning: "조금씩 수시로(자주) 마셔서" }],
            vocabulary: [{ word: "経口補水液(けいこうほすいえき)", meaning: "경구수분보충액 (일본 약국의 대표 탈수 보충 음료 OS-1)" }, { word: "水分(すいぶん)", meaning: "수분" }, { word: "電解質(でんかいしつ)", meaning: "전해질" }, { word: "補給(ほきゅう)する", meaning: "보충하다, 보급하다" }]
          }
        ]
      },
      {
        id: 5,
        title: "알레르기 비염 및 항히스타민제 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "こんにちは。アレルギー性鼻炎がひどくなって、くしゃみと鼻水が止まりません。",
            translation: "안녕하세요. 알레르기성 비염이 심해져서 재채기와 콧물이 멈추질 않아요.",
            expressions: [{ phrase: "くしゃみと鼻水が止まりません", meaning: "재채기와 콧물이 멈추지 않습니다" }],
            vocabulary: [{ word: "鼻炎(びえん)", meaning: "비염" }, { word: "くしゃみ", meaning: "재채기" }, { word: "鼻水(はなみず)", meaning: "콧물" }, { word: "止まる(とまる)", meaning: "멈추다" }]
          },
          {
            role: "약사", side: "left",
            text: "目のかゆみや涙目はありますか？",
            translation: "눈 가려움증이나 눈물이 나는 증상도 있으신가요?",
            expressions: [{ phrase: "目のかゆみや涙目", meaning: "눈 가려움이나 눈물이 고이는 증상" }],
            vocabulary: [{ word: "目(め)", meaning: "눈" }, { word: "かゆみ", meaning: "가려움" }, { word: "涙目(なみだめ)", meaning: "눈물이 그렁그렁함" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、少しあります。昼間に観光するので、眠くなりにくい抗ヒスタミン薬はありますか？",
            translation: "네, 조금 있어요. 낮에 관광을 해야 해서 졸리지 않은 항히스타민제가 있나요?",
            expressions: [{ phrase: "眠くなりにくい抗ヒスタミン薬", meaning: "졸음이 덜 오는(졸리지 않은) 항히스타민제" }],
            vocabulary: [{ word: "昼間(ひるま)", meaning: "낮 시간" }, { word: "観光(かんこう)", meaning: "관광" }, { word: "眠い(ねむい)", meaning: "졸리다" }, { word: "抗(こう)ヒスタミン薬(やく)", meaning: "항히스타민제" }]
          },
          {
            role: "약사", side: "left",
            text: "それでしたら、眠気がほとんど出ない「アレグラFX」や「クラリチンEX」がおすすめです。",
            translation: "그렇다면 졸음이 거의 오지 않는 '알레그라 FX'나 '클라리틴 EX'를 추천합니다.",
            expressions: [{ phrase: "眠気がほとんど出ない", meaning: "졸음이 거의 나타나지 않는" }],
            vocabulary: [{ word: "眠気(ねむけ)", meaning: "졸음" }, { word: "出る(でる)", meaning: "나오다, 나타나다" }]
          },
          {
            role: "손님", side: "right",
            text: "クラリチンEXにします。1日に何回飲めばいいですか？",
            translation: "클라리틴 EX로 할게요. 하루에 몇 번 복용하면 되나요?",
            expressions: [{ phrase: "1日に何回飲めばいいですか？", meaning: "하루에 몇 번 먹으면 되나요?" }],
            vocabulary: [{ word: "1日(いちにち)", meaning: "하루, 1일" }, { word: "何回(なんかい)", meaning: "몇 번" }, { word: "飲む(のむ)", meaning: "(약을) 복용하다, 마시다" }]
          },
          {
            role: "약사", side: "left",
            text: "1日1回、食後に1錠飲むだけで24時間効果が持続しますよ。",
            translation: "하루 1회, 식후에 1정만 복용하시면 24시간 동안 효과가 지속됩니다.",
            expressions: [{ phrase: "24時間効果が持続します", meaning: "24시간 동안 약효가 지속됩니다" }],
            vocabulary: [{ word: "食後(しょくご)", meaning: "식후" }, { word: "24時間(にじゅうよじかん)", meaning: "24시간" }, { word: "効果(こうか)", meaning: "효과" }, { word: "持続(じぞく)する", meaning: "지속되다" }]
          }
        ]
      },
      {
        id: 6,
        title: "근육통 파스 및 바르는 소염제 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "昨日たくさん歩いたせいで、ふくらはぎと腰がひどい筋肉痛なんです。",
            translation: "어제 너무 많이 걸었더니 종아리와 허리에 근육통이 심해요.",
            expressions: [{ phrase: "ふくらはぎと腰がひどい筋肉痛", meaning: "종아리와 허리의 심한 근육통" }],
            vocabulary: [{ word: "昨日(きのう)", meaning: "어제" }, { word: "歩く(あるく)", meaning: "걷다" }, { word: "ふくらはぎ", meaning: "종아리" }, { word: "腰(こし)", meaning: "허리" }, { word: "筋肉痛(きんにくつう)", meaning: "근육통" }]
          },
          {
            role: "약사", side: "left",
            text: "たくさん歩かれたんですね！貼るタイプの湿布と、塗るタイプのゲルやローションのどちらがよろしいですか？",
            translation: "많이 걸으셨군요! 붙이는 파스 타입과 바르는 젤·로션 타입 중 어느 쪽이 좋으신가요?",
            expressions: [{ phrase: "貼るタイプの湿布", meaning: "붙이는 타입의 파스(습포제)" }, { phrase: "塗るタイプのゲル", meaning: "바르는 타입의 젤" }],
            vocabulary: [{ word: "貼る(はる)", meaning: "붙이다" }, { word: "湿布(しっぷ)", meaning: "파스, 습포" }, { word: "塗る(ぬる)", meaning: "바르다" }]
          },
          {
            role: "손님", side: "right",
            text: "腰にはよく効く湿布を貼って、ふくらはぎには塗るタイプを使いたいです。",
            translation: "허리에는 잘 듣는 파스를 붙이고, 종아리에는 바르는 타입을 쓰고 싶어요.",
            expressions: [{ phrase: "よく効く湿布", meaning: "진통 효과가 좋은 파스" }],
            vocabulary: [{ word: "腰(こし)", meaning: "허리" }, { word: "効く(きく)", meaning: "효과가 있다" }, { word: "使う(つかう)", meaning: "사용하다" }]
          },
          {
            role: "약사", side: "left",
            text: "でしたら、腰には鎮痛成分ロキソプロフェン配合のテープ、足には手を汚さず塗れるロールオンタイプがおすすめです。",
            translation: "그렇다면 허리에는 진통 성분인 록소프로펜이 함유된 테이프 파스를, 다리에는 손에 안 묻히고 바르는 롤온(물파스) 타입을 추천합니다.",
            expressions: [{ phrase: "手を汚さず塗れる", meaning: "손에 묻히지 않고 바를 수 있는" }],
            vocabulary: [{ word: "鎮痛成分(ちんつうせいぶん)", meaning: "진통 성분" }, { word: "配合(はいごう)", meaning: "배합, 함유" }, { word: "足(あし)", meaning: "다리, 발" }, { word: "手(て)", meaning: "손" }, { word: "汚す(よごす)", meaning: "더럽히다, 묻히다" }]
          },
          {
            role: "손님", side: "right",
            text: "湿布は1日に何回貼り替えればいいですか？",
            translation: "파스는 하루에 몇 번 갈아 붙이면 되나요?",
            expressions: [{ phrase: "1日に何回貼り替えればいいですか？", meaning: "하루에 몇 번 교체해 붙이면 되나요?" }],
            vocabulary: [{ word: "貼り替える(はりかえる)", meaning: "(파스 등을) 갈아 붙이다, 교체하다" }]
          },
          {
            role: "약사", side: "left",
            text: "こちらは1日1回で24時間効果が続くタイプですので、お風呂上がりに1枚貼るだけで大丈夫です。",
            translation: "이 제품은 1일 1회로 24시간 효과가 지속되는 타입이라서, 목욕 후에 한 장만 붙이시면 됩니다.",
            expressions: [{ phrase: "お風呂上がりに1枚貼る", meaning: "샤워(목욕) 후에 1장 붙이다" }],
            vocabulary: [{ word: "お風呂上がり(ふろあがり)", meaning: "목욕 후, 샤워 후" }, { word: "1枚(いちまい)", meaning: "(파스·종이 등) 1장" }]
          }
        ]
      },
      {
        id: 7,
        title: "상처 소독약과 방수 밴드 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "道で転んで膝を擦りむいてしまいました。消毒液と絆創膏をください。",
            translation: "길에서 넘어져서 무릎이 까졌습니다(찰과상을 입었습니다). 소독약과 밴드를 주세요.",
            expressions: [{ phrase: "転んで膝を擦りむいてしまいました", meaning: "넘어져서 무릎이 쓸려 까졌습니다" }],
            vocabulary: [{ word: "道(みち)", meaning: "길" }, { word: "転ぶ(ころぶ)", meaning: "넘어지다" }, { word: "膝(ひざ)", meaning: "무릎" }, { word: "擦りむく(すりむく)", meaning: "(피부가) 쓸려 까지다" }, { word: "消毒液(しょうどくえき)", meaning: "소독약" }, { word: "絆創膏(ばんそうこう)", meaning: "일회용 밴드 (반창고)" }]
          },
          {
            role: "약사", side: "left",
            text: "痛そうですね！しみないタイプの消毒スプレーと、化膿を防ぐ抗生物質の軟膏がございます。",
            translation: "아프시겠네요! 따갑지 않은 소독 스프레이와, 곪는 것(화농)을 막아주는 항생제 연고가 있습니다.",
            expressions: [{ phrase: "しみないタイプの消毒スプレー", meaning: "상처에 닿아도 따갑지 않은 소독 스프레이" }, { phrase: "化膿を防ぐ", meaning: "상처가 곪는 것(화농)을 막다" }],
            vocabulary: [{ word: "しみる", meaning: "(상처가) 쓰리다, 따갑다" }, { word: "化膿(かのう)", meaning: "화농, 곪음" }, { word: "抗生物質(こうせいぶっしつ)", meaning: "항생제" }, { word: "軟膏(なんこう)", meaning: "연고" }]
          },
          {
            role: "손님", side: "right",
            text: "シャワーのときも剥がれない、大きめの防水絆創膏やハイドロコロイドパッドはありますか？",
            translation: "샤워할 때도 떨어지지 않는 큰 사이즈의 방수 밴드나 하이드로콜로이드 습윤 밴드도 있나요?",
            expressions: [{ phrase: "シャワーのときも剥がれない", meaning: "샤워할 때도 떨어지지(벗겨지지) 않는" }],
            vocabulary: [{ word: "剥がれる(はがれる)", meaning: "떨어지다, 벗겨지다" }, { word: "大きめ(おおきめ)", meaning: "좀 큰 사이즈" }, { word: "防水絆創膏(ぼうすいばんそうこう)", meaning: "방수 밴드" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、膝用の大判サイズの「キズパワーパッド」が防水仕様で、傷を早くきれいに治してくれます。",
            translation: "네, 무릎용 대형 사이즈 '키즈파워패드(습윤 밴드)'가 방수 사양이어서 상처를 빠르고 깨끗하게 아물게 해 줍니다.",
            expressions: [{ phrase: "傷を早くきれいに治す", meaning: "상처를 빠르고 흉터 없이 깨끗하게 치료하다" }],
            vocabulary: [{ word: "膝用(ひざよう)", meaning: "무릎용" }, { word: "大判(おおばん)", meaning: "대형 사이즈" }, { word: "防水仕様(ぼうすいしよう)", meaning: "방수 사양" }, { word: "傷(きず)", meaning: "상처" }, { word: "治す(なおす)", meaning: "치료하다, 낫게 하다" }]
          },
          {
            role: "손님", side: "right",
            text: "そのパッドを貼る前に、軟膏を塗った方がいいですか？",
            translation: "그 습윤 패드를 붙이기 전에 연고를 바르는 게 좋나요?",
            expressions: [{ phrase: "貼る前に、軟膏を塗った方がいいですか？", meaning: "붙이기 전에 연고를 바르는 편이 좋나요?" }],
            vocabulary: [{ word: "前(まえ)に", meaning: "~전에" }, { word: "塗る(ぬる)", meaning: "바르다" }]
          },
          {
            role: "약사", side: "left",
            text: "いえ、ハイドロコロイドパッドを使う場合は、軟膏を塗らずに水で洗って水気を拭いてから直接貼ってください。",
            translation: "아니요, 하이드로콜로이드 습윤 패드를 쓰실 때는 연고를 바르지 마시고 물로 씻어 물기를 닦은 뒤 바로 붙이세요.",
            expressions: [{ phrase: "軟膏を塗らずに〜直接貼る", meaning: "연고를 바르지 않고 직접 붙이다" }],
            vocabulary: [{ word: "場合(ばあい)", meaning: "경우" }, { word: "洗う(あらう)", meaning: "씻다" }, { word: "水気(みずけ)", meaning: "물기" }, { word: "拭く(ふく)", meaning: "닦다" }, { word: "直接(ちょくせつ)", meaning: "직접, 바로" }]
          }
        ]
      },
      {
        id: 8,
        title: "벌레 물린 데 바르는 연고 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "公園で蚊に刺されて、赤く腫れてすごくかゆいんです。",
            translation: "공원에서 모기에게 물려서 빨갛게 붓고 너무 가려워요.",
            expressions: [{ phrase: "蚊に刺されて、赤く腫れて", meaning: "모기에게 물려서 붉게 부어올라" }],
            vocabulary: [{ word: "公園(こうえん)", meaning: "공원" }, { word: "蚊(か)", meaning: "모기" }, { word: "刺される(さされる)", meaning: "(벌레에게) 물리다" }, { word: "赤い(あかい)", meaning: "빨갛다" }, { word: "腫れる(はれる)", meaning: "붓다, 부어오르다" }, { word: "かゆい", meaning: "가렵다" }]
          },
          {
            role: "약사", side: "left",
            text: "かなり腫れていますね。すぐにかゆみと腫れを抑える塗り薬をお探しですか？",
            translation: "꽤 많이 부었네요. 가려움과 부기를 바로 가라앉혀 주는 바르는 약을 찾으시나요?",
            expressions: [{ phrase: "かゆみと腫れを抑える塗り薬", meaning: "가려움과 부기를 가라앉히는 외용제(연고·물파스)" }],
            vocabulary: [{ word: "腫れ(はれ)", meaning: "부기" }, { word: "抑える(おさえる)", meaning: "가라앉히다, 억제하다" }, { word: "塗り薬(ぬりぐすり)", meaning: "바르는 약, 연고" }]
          },
          {
            role: "손님", side: "right",
            text: "はい。スーッとする液体タイプとクリームタイプ、どちらがよく効きますか？",
            translation: "네. 시원한 액체(물파스) 타입과 크림(연고) 타입 중에 어느 쪽이 더 잘 듣나요?",
            expressions: [{ phrase: "スーッとする液体タイプ", meaning: "바르면 화하고 시원해지는 액체(물파스) 타입" }],
            vocabulary: [{ word: "液体(えきたい)", meaning: "액체, 액상" }, { word: "効く(きく)", meaning: "효과가 있다, 잘 듣다" }]
          },
          {
            role: "약사", side: "left",
            text: "赤みと腫れが強いので、炎症を抑える成分が入ったこちらのクリームタイプ「ムヒアルファEX」がよく効きますよ。",
            translation: "붉은 기와 부기가 심해서, 염증을 가라앉히는 성분이 든 이 크림 타입 '무히 알파 EX'가 효과가 아주 좋습니다.",
            expressions: [{ phrase: "赤みと腫れが強いので", meaning: "붉은 기와 부기가 심하기 때문에" }],
            vocabulary: [{ word: "赤み(あかみ)", meaning: "붉은 기" }, { word: "強い(つよい)", meaning: "강하다, 심하다" }, { word: "炎症(えんしょう)", meaning: "염증" }]
          },
          {
            role: "손님", side: "right",
            text: "では、それをお願いします。あと、肌に塗る虫除けスプレーも売っていますか？",
            translation: "그럼 그걸로 주세요. 그리고 피부에 뿌리는 벌레 기피제 스프레이도 판매하나요?",
            expressions: [{ phrase: "肌に塗る虫除けスプレー", meaning: "피부에 뿌려 바르는 해충(모기) 기피제 스프레이" }],
            vocabulary: [{ word: "肌(はだ)", meaning: "피부" }, { word: "虫除け(むしよけ)", meaning: "벌레 기피제" }, { word: "売る(うる)", meaning: "팔다, 판매하다" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、すぐ後ろの棚にございます。お子様にも使える低刺激の虫除けミストもありますよ。",
            translation: "네, 바로 뒤쪽 선반에 있습니다. 어린이도 쓸 수 있는 저자극 벌레 기피 미스트도 있어요.",
            expressions: [{ phrase: "お子様にも使える低刺激の〜", meaning: "아이에게도 사용할 수 있는 저자극성 ~" }],
            vocabulary: [{ word: "後ろ(うしろ)", meaning: "뒤, 뒤쪽" }, { word: "棚(たな)", meaning: "선반, 진열대" }, { word: "お子様(こさま)", meaning: "자녀분, 어린이" }, { word: "低刺激(ていしげき)", meaning: "저자극" }]
          }
        ]
      },
      {
        id: 9,
        title: "인공눈물 및 안약 증상별 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "コンタクトレンズをつけたまま使えて、目の乾きを潤す目薬はありますか？",
            translation: "콘택트렌즈를 낀 채로 쓸 수 있고, 눈의 건조함을 적셔주는 안약(인공눈물)이 있나요?",
            expressions: [{ phrase: "コンタクトレンズをつけたまま使える", meaning: "콘택트렌즈를 착용한 상태 그대로 사용할 수 있다" }, { phrase: "目の乾きを潤す", meaning: "눈의 건조함을 촉촉하게 적셔주다" }],
            vocabulary: [{ word: "目(め)の乾き(かわき)", meaning: "눈의 건조함, 안구건조" }, { word: "潤す(うるおす)", meaning: "적시다, 촉촉하게 하다" }, { word: "目薬(めぐすり)", meaning: "안약, 점안액" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、ソフトコンタクト対応の目薬ですね。清涼感のあるタイプと、しみないマイルドなタイプのどちらがよろしいですか？",
            translation: "네, 소프트렌즈 겸용 인공눈물 말씀이시죠. 화하고 시원한 청량감이 있는 타입과, 자극 없이 순한 타입 중 어느 쪽이 좋으신가요?",
            expressions: [{ phrase: "清涼感のあるタイプ", meaning: "시원한 청량감이 있는 타입 (일본 안약은 청량감 단계가 0~8단계로 나뉨)" }],
            vocabulary: [{ word: "対応(たいおう)", meaning: "대응, 호환 가능" }, { word: "清涼感(せいりょうかん)", meaning: "청량감, 시원한 느낌" }]
          },
          {
            role: "손님", side: "right",
            text: "刺激のないマイルドなタイプで、防腐剤なしの使い切りタイプがあればうれしいです。",
            translation: "자극 없는 순한 타입으로 주시고, 무방부제 일회용 낱개 포장 제품이 있으면 좋겠어요.",
            expressions: [{ phrase: "防腐剤なしの使い切りタイプ", meaning: "보존제(방부제)가 들어 있지 않은 일회용 타입" }],
            vocabulary: [{ word: "刺激(しげき)", meaning: "자극" }, { word: "防腐剤(ぼうふざい)なし", meaning: "무방부제, 무보존제" }, { word: "使い切り(つかいきり)", meaning: "일회용 (한 번 쓰고 버리는 형태)" }]
          },
          {
            role: "약사", side: "left",
            text: "それでしたら、涙に近い成分で防腐剤無添加の「ソフトサンティア」や1回使い切りタイプがこちらにございます。",
            translation: "그렇다면 눈물과 가까운 성분이고 무방부제인 '소프트 산티아'나 1회용 낱개 포장 제품이 여기 있습니다.",
            expressions: [{ phrase: "涙に近い成分で防腐剤無添加", meaning: "자연 눈물에 가까운 성분이며 무방부제(무첨가)" }],
            vocabulary: [{ word: "涙(なみだ)", meaning: "눈물" }, { word: "近い(ちかい)", meaning: "가깝다" }, { word: "無添加(むてんか)", meaning: "무첨가" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！旅行用の小さいサイズのコンタクト洗浄保存液も一緒に買えますか？",
            translation: "감사합니다! 여행용 작은 사이즈의 콘택트렌즈 세척·보존액도 같이 살 수 있나요?",
            expressions: [{ phrase: "旅行用の小さいサイズ", meaning: "여행용 소용량 사이즈" }],
            vocabulary: [{ word: "旅行用(りょこうよう)", meaning: "여행용" }, { word: "小さい(ちいさい)", meaning: "작다" }, { word: "洗浄保存液(せんじょうほぞんえき)", meaning: "렌즈 세척·보존액" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、レンズケースがセットになった機内持ち込み可能なミニボトルがこちらです。",
            translation: "네, 렌즈 케이스가 세트로 들어 있고 기내 반입도 가능한 미니 보틀 제품이 여기 있습니다.",
            expressions: [{ phrase: "機内持ち込み可能なミニボトル", meaning: "기내 반입이 가능한(100mL 이하) 소용량 병" }],
            vocabulary: [{ word: "機内持ち込み(きないもちこみ)", meaning: "기내 반입" }, { word: "可能(かのう)", meaning: "가능" }]
          }
        ]
      },
      {
        id: 10,
        title: "어린이용 해열 시럽 용량 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、子どもが38度5分の熱を出してしまって、子ども用の解熱剤を探しています。",
            translation: "실례합니다, 아이가 38.5도까지 열이 나서 어린이용 해열제를 찾고 있습니다.",
            expressions: [{ phrase: "38度5分の熱を出してしまって", meaning: "38.5도의 열이 나서 (일본에서는 소수점 온도를 '〜度〜分(ぶ)'로 읽음)" }],
            vocabulary: [{ word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "38度5分(さんじゅうはちどごぶ)", meaning: "38.5도" }, { word: "熱(ねつ)", meaning: "열" }, { word: "解熱剤(げねつざい)", meaning: "해열제" }]
          },
          {
            role: "약사", side: "left",
            text: "お子様は何歳ですか？また、体重は何キロくらいありますか？",
            translation: "아이가 몇 살인가요? 그리고 몸무게는 몇 킬로그램 정도 나가나요?",
            expressions: [{ phrase: "何歳ですか？", meaning: "몇 살입니까?" }, { phrase: "体重は何キロくらいありますか？", meaning: "체중은 몇 킬로그램 정도 나갑니까?" }],
            vocabulary: [{ word: "何歳(なんさい)", meaning: "몇 살" }, { word: "体重(たいじゅう)", meaning: "체중, 몸무게" }, { word: "何(なん)キロ", meaning: "몇 킬로그램" }]
          },
          {
            role: "손님", side: "right",
            text: "5歳で、体重は18キロです。シロップタイプはありますか？",
            translation: "만 5살이고 체중은 18킬로그램입니다. 시럽(물약) 타입이 있나요?",
            expressions: [{ phrase: "5歳で、体重は18キロです", meaning: "5세이고 몸무게는 18kg입니다" }],
            vocabulary: [{ word: "5歳(ごさい)", meaning: "5세, 다섯 살" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、イチゴ味の「キッズバファリンシロップ」がございます。アセトアミノフェン成分でお子様に安全です。",
            translation: "네, 딸기 맛의 '키즈 버퍼린 시럽'이 있습니다. 아세트아미노펜 성분이라 어린이에게 안전해요.",
            expressions: [{ phrase: "お子様に安全です", meaning: "어린이에게 안전합니다" }],
            vocabulary: [{ word: "イチゴ味(あじ)", meaning: "딸기 맛" }, { word: "安全(あんぜん)", meaning: "안전" }]
          },
          {
            role: "손님", side: "right",
            text: "1回に何ミリリットル飲ませればいいですか？計量カップは中に入っていますか？",
            translation: "한 번에 몇 밀리리터(mL)를 먹이면 되나요? 계량컵이 안에 들어 있나요?",
            expressions: [{ phrase: "1回に何ミリリットル飲ませればいいですか？", meaning: "1회에 몇 mL를 먹이면 되나요?" }],
            vocabulary: [{ word: "飲ませる(のませる)", meaning: "마시게 하다, 먹이다" }, { word: "計量(けいりょう)カップ", meaning: "계량컵" }, { word: "中(なか)", meaning: "안, 내부" }]
          },
          {
            role: "약사", side: "left",
            text: "5歳ですと1回10ミリリットルです。付属の計量カップで10の目盛りまで測り、4時間以上あけて飲ませてください。おでこに貼る冷却シートもございますよ。",
            translation: "5세라면 1회 10mL입니다. 동봉된 계량컵으로 10 눈금까지 재서 4시간 이상 간격을 두고 먹이세요. 이마에 붙이는 쿨링 시트(열패치)도 있습니다.",
            expressions: [{ phrase: "10の目盛りまで測り", meaning: "계량컵의 10 눈금까지 정확히 재어" }, { phrase: "おでこに貼る冷却シート", meaning: "이마에 붙이는 해열 쿨링 시트(네츠사마 시트)" }],
            vocabulary: [{ word: "付属(ふぞく)", meaning: "부속, 동봉" }, { word: "目盛り(めもり)", meaning: "눈금" }, { word: "測る(はかる)", meaning: "측정하다, 재다" }, { word: "冷却(れいきゃく)シート", meaning: "쿨링 시트, 냉각 시트" }]
          }
        ]
      },
      {
        id: 11,
        title: "복용 주기와 식전/식후 복용법 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "この2つの薬を買いたいのですが、飲み方を詳しく教えていただけますか？",
            translation: "이 두 가지 약을 사고 싶은데요, 복용법을 자세히 알려주실 수 있나요?",
            expressions: [{ phrase: "飲み方を詳しく教えていただけますか？", meaning: "약 복용법을 자세히 알려주실 수 있나요?" }],
            vocabulary: [{ word: "飲み方(のみかた)", meaning: "(약의) 복용법" }, { word: "詳しく(くわしく)", meaning: "자세하게, 상세히" }]
          },
          {
            role: "약사", side: "left",
            text: "もちろんです。まずこちらの白い箱の鎮痛剤は、1日3回、毎食後に1錠ずつお飲みください。",
            translation: "물론이죠. 먼저 이 흰색 상자의 진통제는 하루 3번, 매 식후에 1정씩 복용해 주세요.",
            expressions: [{ phrase: "1日3回、毎食後に1錠ずつ", meaning: "하루 3회, 매 식후에 1알씩" }],
            vocabulary: [{ word: "白い(しろい)", meaning: "하얀" }, { word: "箱(はこ)", meaning: "상자, 박스" }, { word: "鎮痛剤(ちんつうざい)", meaning: "진통제" }, { word: "毎食後(まいしょくご)", meaning: "매 식후 (식전은 食前(しょくぜん))" }]
          },
          {
            role: "손님", side: "right",
            text: "食後というのは、食事のすぐ後ですか？それとも30分後ですか？",
            translation: "식후라는 건 식사 직후인가요, 아니면 식후 30분 뒤인가요?",
            expressions: [{ phrase: "食事のすぐ後ですか？", meaning: "식사 바로 직후인가요?" }],
            vocabulary: [{ word: "食事(しょくじ)", meaning: "식사" }, { word: "後(あと)", meaning: "뒤, 후" }, { word: "30分後(さんじゅっぷんご)", meaning: "30분 후" }]
          },
          {
            role: "약사", side: "left",
            text: "胃の粘膜を保護するためですので、お食事を終えてから30分以内であれば、すぐにお飲みいただいて大丈夫です。",
            translation: "위점막을 보호하려는 목적이라서, 식사를 마치신 후 30분 이내라면 식사 직후에 바로 드셔도 괜찮습니다.",
            expressions: [{ phrase: "胃の粘膜を保護するため", meaning: "위점막을 보호하기 위해서" }],
            vocabulary: [{ word: "粘膜(ねんまく)", meaning: "점막" }, { word: "保護(ほご)する", meaning: "보호하다" }, { word: "終える(おえる)", meaning: "마치다, 끝내다" }, { word: "以内(いない)", meaning: "이내" }]
          },
          {
            role: "손님", side: "right",
            text: "なるほど！もう1つの青い箱の漢方胃腸薬はいつ飲めばいいですか？",
            translation: "그렇군요! 다른 하나인 파란 상자의 한방 위장약은 언제 먹으면 되나요?",
            expressions: [{ phrase: "いつ飲めばいいですか？", meaning: "언제 복용하면 되나요?" }],
            vocabulary: [{ word: "青い(あおい)", meaning: "파란" }, { word: "漢方胃腸薬(かんぽういちょうやく)", meaning: "한방 위장약" }]
          },
          {
            role: "약사", side: "left",
            text: "漢方薬は空腹時の方が吸収が良いため、食事の30分前の「食前」か、食事と食事の間の「食間」にお飲みください。",
            translation: "한방약은 공복에 흡수가 더 잘되므로, 식사 30분 전인 '식전'이나 식사와 식사 사이 공복인 '식간'에 복용해 주세요.",
            expressions: [{ phrase: "空腹時の方が吸収が良い", meaning: "빈속(공복)일 때가 체내 흡수가 더 잘된다" }],
            vocabulary: [{ word: "空腹時(くうふくじ)", meaning: "공복 시, 빈속일 때" }, { word: "吸収(きゅうしゅう)", meaning: "흡수" }, { word: "食前(しょくぜん)", meaning: "식전 (식사 30분 전)" }, { word: "食間(しょっかん)", meaning: "식간 (식후 2시간쯤 지난 공복 상태)" }]
          }
        ]
      },
      {
        id: 12,
        title: "졸음 유발 성분 유무 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "総合感冒薬を探しているのですが、今日レンタカーを運転する予定があります。",
            translation: "종합감기약을 찾고 있는데요, 오늘 렌터카를 운전할 예정이 있습니다.",
            expressions: [{ phrase: "レンタカーを運転する予定があります", meaning: "렌터카를 운전할 계획(예정)이 있습니다" }],
            vocabulary: [{ word: "総合感冒薬(そうごうかんぼうやく)", meaning: "종합감기약 (風邪薬(かぜぐすり))" }, { word: "運転(うんてん)する", meaning: "운전하다" }, { word: "予定(よてい)", meaning: "예정, 일정" }]
          },
          {
            role: "약사", side: "left",
            text: "おっしゃっていただきありがとうございます！一般的な風邪薬には眠気が出る成分が含まれており、服用後の運転は禁止されています。",
            translation: "미리 말씀해 주셔서 감사합니다! 일반적인 감기약에는 졸음을 유발하는 성분이 들어 있어서 복용 후 운전이 금지되어 있습니다.",
            expressions: [{ phrase: "眠気が出る成分が含まれており", meaning: "졸음이 나는 성분이 함유되어 있어" }, { phrase: "服用後の運転は禁止されています", meaning: "복용 후 운전은 금지되어 있습니다" }],
            vocabulary: [{ word: "一般的(いっぱんてき)", meaning: "일반적" }, { word: "眠気(ねむけ)", meaning: "졸음" }, { word: "含まれる(ふくまれる)", meaning: "포함되다, 함유되다" }, { word: "禁止(きんし)", meaning: "금지" }]
          },
          {
            role: "손님", side: "right",
            text: "そうなんですね。運転中でも飲める、眠くならない風邪薬はありますか？",
            translation: "아, 그렇군요. 운전할 때도 먹을 수 있는 졸리지 않은 감기약이 있나요?",
            expressions: [{ phrase: "眠くならない風邪薬", meaning: "졸리지 않는 감기약" }],
            vocabulary: [{ word: "運転中(うんてんちゅう)", meaning: "운전 중" }, { word: "風邪薬(かぜぐすり)", meaning: "감기약" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、こちらの漢方処方の風邪薬「葛根湯」や、眠くなる成分が入っていないこちらの総合かぜ薬なら運転中も安心です。",
            translation: "네, 한방 처방 감기약인 '갈근탕'이나 졸음 유발 성분이 들어 있지 않은 이 종합감기약은 운전 중에도 안심하고 드실 수 있습니다.",
            expressions: [{ phrase: "眠くなる成分が入っていない", meaning: "졸음을 유발하는 성분이 들어 있지 않은" }],
            vocabulary: [{ word: "漢方処方(かんぽうしょほう)", meaning: "한방 처방" }, { word: "葛根湯(かっこんとう)", meaning: "갈근탕 (초기 감기에 쓰이는 무졸음 한방약)" }, { word: "安心(あんしん)", meaning: "안심" }]
          },
          {
            role: "손님", side: "right",
            text: "めまいやぼーっとする副作用もありませんか？",
            translation: "어지러움이나 머리가 멍해지는 부작용도 없나요?",
            expressions: [{ phrase: "めまいやぼーっとする副作用", meaning: "어지러움(현기증)이나 멍해지는 부작용" }],
            vocabulary: [{ word: "めまい", meaning: "어지러움, 현기증 (眩暈)" }, { word: "ぼーっとする", meaning: "멍해지다" }, { word: "副作用(ふくさよう)", meaning: "부작용" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、抗ヒスタミン成分を含んでいないため、眠気やめまいの心配はございません。",
            translation: "네, 항히스타민 성분을 포함하지 않아서 졸음이나 어지러움 걱정은 하지 않으셔도 됩니다.",
            expressions: [{ phrase: "眠気やめまいの心配はございません", meaning: "졸음이나 현기증에 대한 염려는 없습니다" }],
            vocabulary: [{ word: "含む(ふくむ)", meaning: "포함하다, 함유하다" }, { word: "心配(しんぱい)", meaning: "걱정, 염려" }]
          }
        ]
      },
      {
        id: 13,
        title: "기존 복용 중인 약과의 상호작용 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "鼻づまりがひどいのですが、この鼻炎用の飲み薬を買っても大丈夫でしょうか？",
            translation: "코막힘이 심한데요, 이 비염용 먹는 약을 사서 먹어도 괜찮을까요?",
            expressions: [{ phrase: "鼻づまりがひどい", meaning: "코막힘이 심하다" }],
            vocabulary: [{ word: "鼻(はな)づまり", meaning: "코막힘" }, { word: "鼻炎用(びえんよう)", meaning: "비염용" }, { word: "飲み薬(のみぐすり)", meaning: "먹는 약, 내복약" }]
          },
          {
            role: "약사", side: "left",
            text: "確認いたしますね。普段、毎日飲んでいる処方薬や持病はございますか？",
            translation: "확인해 드리겠습니다. 평소에 매일 복용하시는 처방약이나 기저질환(지병)이 있으신가요?",
            expressions: [{ phrase: "毎日飲んでいる処方薬や持病", meaning: "매일 복용 중인 처방약이나 지병(기저질환)" }],
            vocabulary: [{ word: "普段(ふだん)", meaning: "평소" }, { word: "毎日(まいにち)", meaning: "매일" }, { word: "処方薬(しょほうやく)", meaning: "처방약" }, { word: "持病(じびょう)", meaning: "지병, 기저질환" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、高血圧のため、毎朝アムロジピンとバルサルタンを飲んでいます。",
            translation: "네, 고혈압 때문에 매일 아침 암로디핀과 발사르탄을 복용하고 있습니다.",
            expressions: [{ phrase: "高血圧のため、毎朝〜を飲んでいます", meaning: "고혈압 때문에 매일 아침 ~을 복용하고 있습니다" }],
            vocabulary: [{ word: "高血圧(こうけつあつ)", meaning: "고혈압" }, { word: "毎朝(まいあさ)", meaning: "매일 아침" }]
          },
          {
            role: "약사", side: "left",
            text: "教えてくださってよかったです！この飲み薬には血管を収縮させて血圧を上げるプソイドエフェドリンが入っているため、高血圧の方は服用できません。",
            translation: "말씀해 주셔서 정말 다행입니다! 이 먹는 코막힘 약에는 혈관을 수축시켜 혈압을 올리는 슈도에페드린이 들어 있어서 고혈압이 있으신 분은 복용하실 수 없습니다.",
            expressions: [{ phrase: "血管を収縮させて血圧を上げる", meaning: "혈관을 수축시켜 혈압을 상승시키다" }],
            vocabulary: [{ word: "血管(けっかん)", meaning: "혈관" }, { word: "収縮(しゅうしゅく)させる", meaning: "수축시키다" }, { word: "血圧(けつあつ)", meaning: "혈압" }, { word: "上げる(あげる)", meaning: "올리다, 높이다" }]
          },
          {
            role: "손님", side: "right",
            text: "血圧の薬と飲み合わせが悪いとは知りませんでした。代わりに安全に使えるものはありますか？",
            translation: "혈압약과 상충(상호작용)하는 줄은 몰랐네요. 대신 안전하게 쓸 수 있는 약이 있을까요?",
            expressions: [{ phrase: "飲み合わせが悪い", meaning: "약물 궁합(상호작용)이 나쁘다, 함께 복용하면 안 된다" }],
            vocabulary: [{ word: "飲み合わせ(のみあわせ)", meaning: "약물 상호작용, 함께 먹음" }, { word: "悪い(わるい)", meaning: "나쁘다" }, { word: "知る(しる)", meaning: "알다" }, { word: "代わり(かわり)に", meaning: "대신에" }]
          },
          {
            role: "약사", side: "left",
            text: "生理食塩水の鼻うがいスプレーや、血圧に影響しないこちらのステロイド点鼻薬なら安全にお使いいただけます。",
            translation: "생리식염수 코 세척 스프레이나 혈압에 영향을 주지 않는 이 스테로이드 점비약(코 스프레이)은 안전하게 사용하실 수 있습니다.",
            expressions: [{ phrase: "血圧に影響しない〜点鼻薬", meaning: "혈압에 영향을 미치지 않는 코 스프레이(점비약)" }],
            vocabulary: [{ word: "生理食塩水(せいりしょくえんすい)", meaning: "생리식염수" }, { word: "鼻(はな)うがい", meaning: "코 세척" }, { word: "影響(えいきょう)", meaning: "영향" }, { word: "点鼻薬(てんびやく)", meaning: "점비약, 비강 스프레이" }]
          }
        ]
      },
      {
        id: 14,
        title: "임산부/수유부 복용 가능 여부 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、妻が妊娠中期なのですが、便秘と胸焼けがひどくて困っています。",
            translation: "실례합니다, 제 아내가 임신 중기인데 변비와 속쓰림이 심해서 힘들어하고 있어요.",
            expressions: [{ phrase: "妻が妊娠中期なのですが", meaning: "아내가 임신 중기인데요 (초기는 妊娠初期, 후기는 妊娠後期, 수유 중은 授乳中(じゅにゅうちゅう))" }],
            vocabulary: [{ word: "妻(つま)", meaning: "아내" }, { word: "妊娠中期(にんしんちゅうき)", meaning: "임신 중기" }, { word: "便秘(べんぴ)", meaning: "변비" }, { word: "胸焼け(むねやけ)", meaning: "속쓰림" }]
          },
          {
            role: "약사", side: "left",
            text: "ご懐妊おめでとうございます！妊娠中は飲める市販薬が限られますので、慎重にお選びしますね。",
            translation: "임신을 축하드립니다! 임신 중에는 복용할 수 있는 일반의약품이 제한되어 있으니 신중하게 골라 드리겠습니다.",
            expressions: [{ phrase: "妊娠中は飲める市販薬が限られます", meaning: "임신 중에는 복용 가능한 시판약(일반의약품)이 제한됩니다" }],
            vocabulary: [{ word: "懐妊(かいにん)", meaning: "임신 (높임 표현)" }, { word: "市販薬(しはんやく)", meaning: "일반의약품, 시판약" }, { word: "限られる(かぎられる)", meaning: "제한되다, 한정되다" }, { word: "慎重(しんちょう)に", meaning: "신중하게" }]
          },
          {
            role: "손님", side: "right",
            text: "妊婦でも安全に飲める便秘薬と胃薬はありますか？",
            translation: "임산부도 안전하게 복용할 수 있는 변비약과 위장약이 있나요?",
            expressions: [{ phrase: "妊婦でも安全に飲める", meaning: "임산부도 안전하게 먹을 수 있는" }],
            vocabulary: [{ word: "妊婦(にんぷ)", meaning: "임산부" }, { word: "便秘薬(べんぴやく)", meaning: "변비약" }, { word: "胃薬(いぐすり)", meaning: "위장약" }]
          },
          {
            role: "약사", side: "left",
            text: "便秘には、腸を直接刺激しない「酸化マグネシウム」の便秘薬が妊婦さんにもよく使われており安全です。",
            translation: "변비에는 장을 직접 자극하지 않는 '산화마그네슘' 성분의 변비약이 임산부에게도 흔히 쓰이며 안전합니다.",
            expressions: [{ phrase: "腸を直接刺激しない", meaning: "장을 직접 자극하지 않는 (자극성 하제 대신 삼투성 완하제 사용)" }],
            vocabulary: [{ word: "腸(ちょう)", meaning: "장, 대장" }, { word: "刺激(しげき)する", meaning: "자극하다" }, { word: "酸化(さんか)マグネシウム", meaning: "산화마그네슘 (수분을 끌어당겨 변을 부드럽게 하는 안전한 변비약 성분)" }]
          },
          {
            role: "손님", side: "right",
            text: "酸化マグネシウムですね。飲み方の注意点はありますか？",
            translation: "산화마그네슘이군요. 복용할 때 주의할 점이 있나요?",
            expressions: [{ phrase: "飲み方の注意点", meaning: "복용 시 주의사항" }],
            vocabulary: [{ word: "注意点(ちゅういてん)", meaning: "주의점, 주의사항" }]
          },
          {
            role: "약사", side: "left",
            text: "便に水分を集めて柔らかくするお薬ですので、コップ1杯以上の多めの水と一緒に飲んでください。",
            translation: "변에 수분을 모아서 부드럽게 만드는 약이므로, 물 한 컵 이상의 넉넉한 물과 함께 복용해 주세요.",
            expressions: [{ phrase: "便に水分を集めて柔らかくする", meaning: "대변에 수분을 모아 부드럽게 만들다" }],
            vocabulary: [{ word: "便(べん)", meaning: "변, 대변" }, { word: "集める(あつめる)", meaning: "모으다" }, { word: "柔らかい(やわらかい)", meaning: "부드럽다, 무르다" }, { word: "1杯(いっぱい)", meaning: "한 잔, 한 컵" }]
          }
        ]
      },
      {
        id: 15,
        title: "화상 연고 및 거즈 드레싱 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、腕に熱いコーヒーをこぼして火傷してしまいました。水道水で冷やしたのですが、まだヒリヒリします。",
            translation: "실례합니다, 팔에 뜨거운 커피를 쏟아서 화상을 입었어요. 수돗물로 식히긴 했는데 아직도 화끈거리고 쓰라려요.",
            expressions: [{ phrase: "水道水で冷やしたのですが", meaning: "수돗물로 열기를 식혔는데요" }, { phrase: "まだヒリヒリします", meaning: "아직도 화끈거리고 쓰라립니다" }],
            vocabulary: [{ word: "腕(うで)", meaning: "팔" }, { word: "熱い(あつい)", meaning: "뜨겁다" }, { word: "火傷(やけど)", meaning: "화상" }, { word: "水道水(すいどうすい)", meaning: "수돗물" }, { word: "冷やす(ひやす)", meaning: "식히다, 차갑게 하다" }]
          },
          {
            role: "약사", side: "left",
            text: "見せていただけますか？赤くなっていて、小さな水ぶくれが1つできていますね。",
            translation: "보여주시겠어요? 붉어져 있고 작은 물집이 하나 잡혀 있네요.",
            expressions: [{ phrase: "小さな水ぶくれが1つできています", meaning: "작은 물집(수포)이 하나 생겨 있습니다" }],
            vocabulary: [{ word: "見せる(みせる)", meaning: "보여주다" }, { word: "小さな(ちいさな)", meaning: "작은" }, { word: "水(みず)ぶくれ", meaning: "물집, 수포" }]
          },
          {
            role: "손님", side: "right",
            text: "水ぶくれは潰さない方がいいですよね？どんな薬を塗ればいいですか？",
            translation: "물집은 터뜨리지 않는 게 좋죠? 어떤 약을 바르면 될까요?",
            expressions: [{ phrase: "水ぶくれは潰さない方がいい", meaning: "물집은 터뜨리지 않는 편이 좋다" }],
            vocabulary: [{ word: "潰す(つぶす)", meaning: "(물집 등을) 터뜨리다, 짓누르다" }, { word: "塗る(ぬる)", meaning: "바르다" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、雑菌が入るので絶対に潰さないでください。火傷の炎症を抑えて感染を防ぐこちらの軟膏を厚めに塗ってください。",
            translation: "네, 세균이 들어가니 절대 터뜨리지 마세요. 화상 염증을 가라앉히고 감염을 막아주는 이 연고를 도톰하게 발라 주세요.",
            expressions: [{ phrase: "雑菌が入るので絶対に潰さないで", meaning: "잡균(세균)이 들어가므로 절대 터뜨리지 마세요" }],
            vocabulary: [{ word: "雑菌(ざっきん)", meaning: "잡균, 세균" }, { word: "絶対(ぜったい)に", meaning: "절대로" }, { word: "感染(かんせん)", meaning: "감염" }, { word: "厚め(あつめ)に", meaning: "두껍게, 도톰하게" }]
          },
          {
            role: "손님", side: "right",
            text: "服に擦れないように保護したいのですが、傷口にくっつかないガーゼはありますか？",
            translation: "옷에 쓸리지 않도록 보호하고 싶은데, 상처 부위에 달라붙지 않는 거즈가 있나요?",
            expressions: [{ phrase: "傷口にくっつかないガーゼ", meaning: "상처 부위에 들러붙지 않는 비점착성 거즈" }],
            vocabulary: [{ word: "服(ふく)", meaning: "옷" }, { word: "擦れる(すれる)", meaning: "쓸리다, 스치다" }, { word: "傷口(きずぐち)", meaning: "상처 부위" }, { word: "くっつく", meaning: "달라붙다" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、こちらの非固着性ガーゼと医療用の紙テープを使えば、剥がすときも痛くありませんよ。",
            translation: "네, 이 비고착성(안 달라붙는) 거즈와 의료용 종이테이프를 쓰시면 나중에 떼어낼 때도 아프지 않습니다.",
            expressions: [{ phrase: "剥がすときも痛くありません", meaning: "거즈를 떼어낼 때도 아프지 않습니다" }],
            vocabulary: [{ word: "非固着性(ひこちゃくせい)", meaning: "비고착성 (상처에 달라붙지 않는 성질)" }, { word: "医療用(いりょうよう)", meaning: "의료용" }, { word: "紙(かみ)テープ", meaning: "종이 반창고(테이프)" }, { word: "剥がす(はがす)", meaning: "떼어내다" }]
          }
        ]
      },
      {
        id: 16,
        title: "멀미약(붙이는 패치/먹는 약) 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "明日フェリーに乗るのですが、船酔いがひどいのでよく効く酔い止め薬をください。",
            translation: "내일 페리(배)를 타는데 배멀미가 심해서 잘 듣는 멀미약을 주세요.",
            expressions: [{ phrase: "船酔いがひどいので", meaning: "배멀미가 심해서 (차멀미·전체 멀미는 乗り物酔い(のりものよい))" }, { phrase: "よく効く酔い止め薬", meaning: "효과가 좋은 멀미약" }],
            vocabulary: [{ word: "明日(あした)", meaning: "내일" }, { word: "乗る(のる)", meaning: "타다, 탑승하다" }, { word: "船酔い(ふなよい)", meaning: "배멀미" }, { word: "酔い止め薬(よいどめぐすり)", meaning: "멀미약" }]
          },
          {
            role: "약사", side: "left",
            text: "船酔いには、1日1回1カプセルで長く効くこちらの「アネロンニスキャップ」が一番人気ですよ。",
            translation: "배멀미에는 하루 1회 1캡슐로 효과가 오래 지속되는 이 '아네론 니스캡'이 가장 인기가 많습니다.",
            expressions: [{ phrase: "1日1回1カプセルで長く効く", meaning: "하루 1번 1캡슐로 약효가 오래 지속되다" }],
            vocabulary: [{ word: "長く(ながく)", meaning: "길게, 오래" }, { word: "一番(いちばん)", meaning: "가장, 제일" }, { word: "人気(にんき)", meaning: "인기" }]
          },
          {
            role: "손님", side: "right",
            text: "船に乗る何分前に飲めばいいですか？",
            translation: "배에 타기 몇 분 전에 복용하면 되나요?",
            expressions: [{ phrase: "乗る何分前に飲めばいいですか？", meaning: "탑승 몇 분 전에 먹으면 되나요?" }],
            vocabulary: [{ word: "船(ふね)", meaning: "배" }, { word: "何分前(なんぷんまえ)", meaning: "몇 분 전" }]
          },
          {
            role: "약사", side: "left",
            text: "乗船の30分前にお水で1カプセルお飲みください。もし乗ってから気分が悪くなった場合でも、すぐに飲めば効きます。",
            translation: "승선 30분 전에 물과 함께 1캡슐을 복용하세요. 만약 배에 탄 뒤에 속이 울렁거리더라도 즉시 복용하시면 효과가 있습니다.",
            expressions: [{ phrase: "気分が悪くなった場合でも", meaning: "속이 메스꺼워진(멀미가 난) 경우라도" }],
            vocabulary: [{ word: "乗船(じょうせん)", meaning: "승선, 배 탑승" }, { word: "30分前(さんじゅっぷんまえ)", meaning: "30분 전" }, { word: "気分(きぶん)が悪い(わるい)", meaning: "속이 메스껍다, 몸 상태가 안 좋다" }]
          },
          {
            role: "손님", side: "right",
            text: "5歳の子どもも一緒に乗るのですが、子ども用の酔い止めもありますか？",
            translation: "5살 아이도 함께 배를 타는데 어린이용 멀미약도 있나요?",
            expressions: [{ phrase: "子ども用の酔い止め", meaning: "어린이용 멀미약" }],
            vocabulary: [{ word: "5歳(ごさい)", meaning: "5세" }, { word: "一緒(いっしょ)に", meaning: "함께" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、5歳のお子様でしたら、水なしでラムネのように噛んで飲めるブドウ味の「トラベルミンジュニア」や「センパア」がございます。",
            translation: "네, 5세 아이라면 물 없이 사탕(라무네)처럼 씹어 먹을 수 있는 포도 맛 '트래블민 주니어'나 '센파아'가 있습니다.",
            expressions: [{ phrase: "ラムネのように噛んで飲める", meaning: "캔디(라무네 과자)처럼 씹어서 먹을 수 있는" }],
            vocabulary: [{ word: "噛む(かむ)", meaning: "씹다" }, { word: "ブドウ味(あじ)", meaning: "포도 맛" }]
          }
        ]
      },
      {
        id: 17,
        title: "구내염 연고 및 비타민 구매하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "旅行の疲れが出たのか、唇の裏に痛い口内炎ができてしまいました。",
            translation: "여행 피로가 쌓였는지 입술 안쪽에 아픈 구내염(입병)이 생겨버렸어요.",
            expressions: [{ phrase: "旅行の疲れが出たのか", meaning: "여행 피로가 나타난 것인지" }, { phrase: "口内炎ができてしまいました", meaning: "구내염이 생기고 말았습니다" }],
            vocabulary: [{ word: "旅行(りょこう)", meaning: "여행" }, { word: "疲れ(つかれ)", meaning: "피로" }, { word: "唇(くちびる)", meaning: "입술" }, { word: "裏(うら)", meaning: "안쪽, 뒷면" }, { word: "口内炎(こうないえん)", meaning: "구내염" }]
          },
          {
            role: "약사", side: "left",
            text: "口内炎は食事のときにしみて辛いですよね。患部に塗る軟膏タイプと、貼るパッチタイプのどちらがよろしいですか？",
            translation: "구내염이 나면 식사할 때 쓰라려서 참 힘들죠. 환부에 바르는 연고 타입과 붙이는 패치 타입 중 어느 쪽이 좋으신가요?",
            expressions: [{ phrase: "患部に塗る軟膏タイプ", meaning: "상처 부위(환부)에 바르는 연고 타입" }, { phrase: "貼るパッチタイプ", meaning: "붙이는 패치 타입" }],
            vocabulary: [{ word: "患部(かんぶ)", meaning: "환부, 아픈 부위" }, { word: "軟膏(なんこう)", meaning: "연고" }, { word: "貼る(はる)", meaning: "붙이다" }]
          },
          {
            role: "손님", side: "right",
            text: "食べるときに当たっても痛くないように、患部を覆ってくれるパッチタイプがいいです。",
            translation: "음식 먹을 때 닿아도 아프지 않도록 환부를 덮어 보호해 주는 패치 타입이 좋겠어요.",
            expressions: [{ phrase: "患部を覆ってくれるパッチタイプ", meaning: "상처 부위를 덮어 보호해 주는 패치 타입" }],
            vocabulary: [{ word: "当たる(あたる)", meaning: "닿다, 부딪히다" }, { word: "覆う(おおう)", meaning: "덮다, 가리다" }]
          },
          {
            role: "약사", side: "left",
            text: "こちらの「口内炎パッチ大正クイックケア」がよく密着しておすすめです。貼る前にティッシュで唾液を軽く拭き取ってくださいね。",
            translation: "이 '구내염 패치 다이쇼 퀵케어'가 밀착력이 좋아서 추천합니다. 붙이시기 전에 티슈로 침(타액)을 살짝 닦아내 주세요.",
            expressions: [{ phrase: "唾液を軽く拭き取ってください", meaning: "침(물기)을 가볍게 닦아내 주세요" }],
            vocabulary: [{ word: "密着(みっちゃく)する", meaning: "밀착하다, 잘 붙다" }, { word: "唾液(だえき)", meaning: "침, 타액" }, { word: "軽く(かるく)", meaning: "가볍게, 살짝" }, { word: "拭き取る(ふきとる)", meaning: "닦아내다" }]
          },
          {
            role: "손님", side: "right",
            text: "分かりました。早く治すために、疲労回復と口内炎に効くビタミンBのサプリも一緒に買えますか？",
            translation: "알겠습니다. 빨리 낫기 위해서 피로 회복과 구내염에 효과가 있는 비타민 B 영양제도 함께 살 수 있나요?",
            expressions: [{ phrase: "疲労回復と口内炎に効くビタミンB", meaning: "피로 회복과 구내염에 듣는 비타민 B" }],
            vocabulary: [{ word: "早く(はやく)", meaning: "빨리" }, { word: "治す(なおす)", meaning: "낫게 하다, 치료하다" }, { word: "疲労回復(ひろうかいふく)", meaning: "피로 회복" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、皮膚や粘膜の回復を助けるビタミンB2・B6配合の「チョコラBBプラス」を一緒に飲むと、より早く治りますよ。",
            translation: "네, 피부와 점막의 회복을 돕는 비타민 B2·B6가 함유된 '쇼콜라 BB 플러스'를 함께 복용하시면 훨씬 빨리 낫습니다.",
            expressions: [{ phrase: "皮膚や粘膜の回復を助ける", meaning: "피부와 점막의 회복을 돕다" }],
            vocabulary: [{ word: "皮膚(ひふ)", meaning: "피부" }, { word: "粘膜(ねんまく)", meaning: "점막" }, { word: "回復(かいふく)", meaning: "회복" }, { word: "助ける(たすける)", meaning: "돕다" }]
          }
        ]
      },
      {
        id: 18,
        title: "수면 보조제 및 시차 적응 도움 약 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、環境が変わったせいか3日間ほとんど眠れなくて、睡眠を助ける薬を探しています。",
            translation: "실례합니다, 환경이 바뀐 탓인지 사흘 동안 거의 잠을 못 자서 수면을 도와주는 약을 찾고 있어요.",
            expressions: [{ phrase: "環境が変わったせいか", meaning: "잠자리 환경이 바뀐 탓인지" }, { phrase: "睡眠を助ける薬", meaning: "수면을 돕는 약(수면유도제)" }],
            vocabulary: [{ word: "環境(かんきょう)", meaning: "환경" }, { word: "変わる(かわる)", meaning: "바뀌다" }, { word: "3日間(みっかかん)", meaning: "3일간, 사흘 동안" }, { word: "睡眠(すいみん)", meaning: "수면" }]
          },
          {
            role: "약사", side: "left",
            text: "旅先で眠れないと疲れが取れませんよね。メラトニンは日本では市販されていないのですが、一時的な不眠を和らげる睡眠改善薬「ドリエル」がございます。",
            translation: "여행지에서 잠을 못 자면 피로가 안 풀리죠. 일본에서는 멜라토닌이 일반의약품으로 판매되지 않지만, 일시적인 불면을 완화하는 수면개선제 '도리엘'이 있습니다.",
            expressions: [{ phrase: "一時的な不眠を和らげる睡眠改善薬", meaning: "일시적인 불면증을 완화하는 수면개선제(수면유도제)" }],
            vocabulary: [{ word: "旅先(たびさき)", meaning: "여행지" }, { word: "疲れ(つかれ)が取れる(とれる)", meaning: "피로가 풀리다" }, { word: "一時的(いちじてき)", meaning: "일시적" }, { word: "不眠(ふみん)", meaning: "불면" }, { word: "和らげる(やわらげる)", meaning: "완화하다, 누그러뜨리다" }, { word: "睡眠改善薬(すいみんかいぜんやく)", meaning: "수면개선제, 수면유도제" }]
          },
          {
            role: "손님", side: "right",
            text: "それを飲むと、翌朝まで眠気が残ってだるくなったりしませんか？",
            translation: "그 약을 먹으면 다음 날 아침까지 졸음이 남아서 몸이 처지거나 멍해지진 않나요?",
            expressions: [{ phrase: "翌朝まで眠気が残って", meaning: "다음 날 아침까지 약기운(졸음)이 남아서" }],
            vocabulary: [{ word: "翌朝(よくあさ)", meaning: "다음 날 아침, 익일 아침" }, { word: "残る(のこる)", meaning: "남다" }, { word: "だるい", meaning: "나른하다, 몸이 무겁고 처지다" }]
          },
          {
            role: "약사", side: "left",
            text: "個人差はありますが、就寝の30分前に飲んで6時間以上しっかり睡眠時間を確保すれば、翌朝に残りにくいです。もっと穏やかな漢方薬もございますよ。",
            translation: "개인차는 있지만, 취침 30분 전에 복용하시고 6시간 이상 충분히 수면 시간을 확보하시면 다음 날 아침에 덜 남습니다. 더 순한 한방 신경안정제도 있어요.",
            expressions: [{ phrase: "睡眠時間を確保すれば", meaning: "충분한 수면 시간을 확보하면" }],
            vocabulary: [{ word: "個人差(こじんさ)", meaning: "개인차" }, { word: "就寝(しゅうしん)", meaning: "취침" }, { word: "確保(かくほ)する", meaning: "확보하다" }, { word: "穏やか(おだやか)", meaning: "순함, 온화함" }]
          },
          {
            role: "손님", side: "right",
            text: "翌日も朝から出かけるので、朝すっきり起きられる穏やかな方がいいです。",
            translation: "다음 날도 아침부터 외출해야 해서, 아침에 개운하게 일어날 수 있는 순한 제품이 좋겠어요.",
            expressions: [{ phrase: "朝すっきり起きられる", meaning: "아침에 개운하게 일어날 수 있는" }],
            vocabulary: [{ word: "翌日(よくじつ)", meaning: "다음 날" }, { word: "朝(あさ)", meaning: "아침" }, { word: "出かける(でかける)", meaning: "외출하다" }, { word: "起きる(おきる)", meaning: "일어나다" }]
          },
          {
            role: "약사", side: "left",
            text: "でしたら、神経のたかぶりを鎮めて自然な眠りを促す漢方薬や、睡眠の質を高める「テアニン・GABA」のサプリメントが翌朝に残らずおすすめです。",
            translation: "그렇다면 신경의 긴장을 가라앉혀 자연스러운 수면을 유도하는 한방약이나, 수면의 질을 높여주는 '테아닌·가바(GABA)' 영양제가 다음 날 약기운이 남지 않아 추천합니다.",
            expressions: [{ phrase: "自然な眠りを促す", meaning: "자연스러운 잠(수면)을 유도하다" }, { phrase: "睡眠の質を高める", meaning: "수면의 질을 높이다" }],
            vocabulary: [{ word: "神経(しんけい)", meaning: "신경" }, { word: "自然な(しぜんな)", meaning: "자연스러운" }, { word: "眠り(ねむり)", meaning: "잠, 수면" }, { word: "促す(うながす)", meaning: "촉진하다, 유도하다" }, { word: "質(しつ)", meaning: "질, 품질" }, { word: "高める(たかめる)", meaning: "높이다" }]
          }
        ]
      },
      {
        id: 19,
        title: "보험 청구용 상세 영수증 발급 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "先ほど近くのクリニックで診察を受けたのですが、こちらの処方箋でお薬をお願いします。",
            translation: "방금 근처 의원에서 진료를 받았는데, 이 처방전으로 약 조제를 부탁합니다.",
            expressions: [{ phrase: "こちらの処方箋でお薬をお願いします", meaning: "이 처방전으로 약을 조제해 주세요" }],
            vocabulary: [{ word: "近く(ちかく)", meaning: "근처" }, { word: "診察(しんさつ)", meaning: "진찰, 진료" }, { word: "受ける(うける)", meaning: "받다" }, { word: "処方箋(しょほうせん)", meaning: "처방전" }]
          },
          {
            role: "약사", side: "left",
            text: "お待たせいたしました。抗生物質と点耳薬をご用意しました。旅行中とのことですので、本日は自費診療の10割負担になります。",
            translation: "오래 기다리셨습니다. 항생제와 귀에 넣는 점이제(귀약)를 준비했습니다. 여행 중이시라 오늘은 비보험(자비 진료) 100% 본인 부담으로 계산됩니다.",
            expressions: [{ phrase: "自費診療の10割負担", meaning: "현지 건강보험 미적용 자비 진료(100% 본인 부담)" }],
            vocabulary: [{ word: "抗生物質(こうせいぶっしつ)", meaning: "항생제" }, { word: "点耳薬(てんじやく)", meaning: "점이제 (귀에 넣는 물약)" }, { word: "自費診療(じひしんりょう)", meaning: "비보험 자비 진료" }, { word: "10割負担(じゅうわりふたん)", meaning: "10할(100%) 본인 부담" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、帰国してから海外旅行保険を請求するつもりです。",
            translation: "네, 귀국한 뒤에 해외여행자보험으로 보험금을 청구할 예정입니다.",
            expressions: [{ phrase: "海外旅行保険を請求する", meaning: "해외여행자보험을 청구하다" }],
            vocabulary: [{ word: "帰国(きこく)する", meaning: "귀국하다" }, { word: "海外旅行保険(かいがいりょこうほけん)", meaning: "해외여행자보험" }, { word: "請求(せいきゅう)する", meaning: "청구하다" }]
          },
          {
            role: "약사", side: "left",
            text: "それでしたら、通常のレシートの他に、保険請求用の領収書と調剤明細書もお出ししましょうか？",
            translation: "그렇다면 일반 영수증 외에 보험 청구용 공식 영수증과 조제 명세서도 함께 뽑아 드릴까요?",
            expressions: [{ phrase: "保険請求用の領収書と調剤明細書", meaning: "보험 청구용 공식 영수증과 약제비 조제 명세서" }],
            vocabulary: [{ word: "通常(つうじょう)", meaning: "일반, 통상" }, { word: "領収書(りょうしゅうしょ)", meaning: "영수증" }, { word: "調剤明細書(ちょうざいめいさいしょ)", meaning: "조제 명세서 (약 이름과 단가가 적힌 서류)" }]
          },
          {
            role: "손님", side: "right",
            text: "ぜひお願いします！私のパスポートのローマ字氏名と、薬の名前が記載されている必要があります。",
            translation: "꼭 부탁드립니다! 제 여권의 영문(로마자) 성함과 약품 이름이 기재되어 있어야 하거든요.",
            expressions: [{ phrase: "ローマ字氏名と、薬の名前が記載されている", meaning: "영문 성명과 약품명이 기재되어 있다" }],
            vocabulary: [{ word: "氏名(しめい)", meaning: "성명, 이름" }, { word: "名前(なまえ)", meaning: "이름, 명칭" }, { word: "記載(きさい)される", meaning: "기재되다, 적히다" }]
          },
          {
            role: "약사", side: "left",
            text: "かしこまりました。ローマ字のお名前で領収書と薬剤情報提供書を発行し、薬局の印鑑も押しておきましたので、大切に保管してください。",
            translation: "알겠습니다. 영문 성함으로 영수증과 약제정보제공서(약품 설명서)를 발행하고 약국 도장도 찍어 두었으니 잘 보관해 가세요.",
            expressions: [{ phrase: "薬剤情報提供書を発行し", meaning: "약 사진·효능·성분이 적힌 약제정보제공서를 발급하고" }, { phrase: "薬局の印鑑も押しておきました", meaning: "약국 직인(도장)도 날인해 두었습니다" }],
            vocabulary: [{ word: "薬剤情報提供書(やくざいじょうほうていきょうしょ)", meaning: "약제정보제공서 (조제약 사진·성분 안내문)" }, { word: "発行(はっこう)する", meaning: "발행하다, 발급하다" }, { word: "印鑑(いんかん)", meaning: "도장, 직인" }, { word: "押す(おす)", meaning: "(도장을) 찍다" }, { word: "保管(ほかん)する", meaning: "보관하다" }]
          }
        ]
      },
      {
        id: 20,
        title: "기내 반입용 영문 약품 설명서 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "今夜の国際線に乗るのですが、この液体の咳止めシロップと吸入器は機内に持ち込めますか？",
            translation: "오늘 밤 국제선 비행기를 타는데, 이 액상 기침 시럽과 흡입기는 기내에 반입할 수 있나요?",
            expressions: [{ phrase: "機内に持ち込めますか？", meaning: "비행기 기내로 반입할(가지고 탈) 수 있나요?" }],
            vocabulary: [{ word: "今夜(こんや)", meaning: "오늘 밤" }, { word: "国際線(こくさいせん)", meaning: "국제선" }, { word: "液体(えきたい)", meaning: "액체" }, { word: "咳止め(せきどめ)", meaning: "기침약, 진해제" }, { word: "吸入器(きゅうにゅうき)", meaning: "흡입기" }, { word: "機内(きない)", meaning: "기내" }]
          },
          {
            role: "약사", side: "left",
            text: "はい！機内で必要な液体の医薬品や吸入器は、保安検査場で申告すれば100ミリリットル制限の対象外として持ち込み可能です。",
            translation: "네! 기내에서 필요한 액체 의약품이나 흡입기는 보안 검색대에서 신고하시면 100mL 액체 제한의 예외 대상으로 기내 반입이 가능합니다.",
            expressions: [{ phrase: "保安検査場で申告すれば", meaning: "공항 보안 검색대에서 검사관에게 신고하면" }, { phrase: "制限の対象外", meaning: "제한 규정 예외(대상 외)" }],
            vocabulary: [{ word: "医薬品(いやくひん)", meaning: "의약품" }, { word: "保安検査場(ほあんけんさじょう)", meaning: "보안 검색대" }, { word: "申告(しんこく)する", meaning: "신고하다" }, { word: "制限(せいげん)", meaning: "제한" }, { word: "対象外(たいしょうがい)", meaning: "대상 외, 예외" }]
          },
          {
            role: "손님", side: "right",
            text: "箱から出してボトルだけ持って行っても大丈夫でしょうか？",
            translation: "상자에서 꺼내서 약병만 가지고 가도 괜찮을까요?",
            expressions: [{ phrase: "箱から出してボトルだけ持って行く", meaning: "약 상자에서 꺼내 병만 가지고 가다" }],
            vocabulary: [{ word: "箱(はこ)", meaning: "상자" }, { word: "出す(だす)", meaning: "꺼내다" }, { word: "持って行く(もっていく)", meaning: "가지고 가다" }]
          },
          {
            role: "약사", side: "left",
            text: "いいえ、医薬品であることを証明できるよう、必ず元の箱と説明書を入れたままお持ちください。",
            translation: "아니요, 의약품이라는 것을 증명할 수 있도록 반드시 원래 상자와 약품 설명서를 넣은 채로 가져가세요.",
            expressions: [{ phrase: "医薬品であることを証明できるよう", meaning: "의약품임을 증명할 수 있도록" }, { phrase: "元の箱と説明書を入れたまま", meaning: "원래 포장 상자와 첨부 설명서를 그대로 넣은 채로" }],
            vocabulary: [{ word: "証明(しょうめい)する", meaning: "증명하다, 입증하다" }, { word: "必ず(かならず)", meaning: "반드시, 꼭" }, { word: "元(もと)の箱(はこ)", meaning: "원래 상자" }, { word: "説明書(せつめいしょ)", meaning: "설명서, 첨부 문서" }]
          },
          {
            role: "손님", side: "right",
            text: "英語の成分表記や説明書も付いていますか？",
            translation: "영어 성분 표기나 영문 설명서도 함께 들어 있나요?",
            expressions: [{ phrase: "英語の成分表記や説明書", meaning: "영문 성분 표기나 설명서" }],
            vocabulary: [{ word: "英語(えいご)", meaning: "영어" }, { word: "成分表記(せいぶんひょうき)", meaning: "성분 표기" }, { word: "付く(つく)", meaning: "첨부되다, 포함되다" }]
          },
          {
            role: "약사", side: "left",
            text: "はい、英語の成分説明書を同封し、検査場で出しやすいよう透明のジッパー付き袋にお入れしておきますね。お気をつけてお帰りください！",
            translation: "네, 영문 성분 설명서를 동봉해 드리고, 검색대에서 꺼내 보여주기 쉽도록 투명 지퍼백에 넣어 드리겠습니다. 조심히 귀국하세요!",
            expressions: [{ phrase: "透明のジッパー付き袋", meaning: "투명 지퍼백" }, { phrase: "お気をつけてお帰りください", meaning: "조심히 돌아가십시오(귀국하십시오)" }],
            vocabulary: [{ word: "同封(どうふう)する", meaning: "동봉하다" }, { word: "透明(とうめい)", meaning: "투명" }, { word: "袋(ふくろ)", meaning: "봉투, 지퍼백" }, { word: "帰る(かえる)", meaning: "돌아가다, 귀국하다" }]
          }
        ]
      }
    ]
  },
  airport: {
    // ==========================================
    // 1. 영어 (English) - 공항 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "체크인 및 좌석 배정 요청하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "Good morning! Where are you flying to today? May I see your passport, please?",
            translation: "좋은 아침입니다! 오늘 어디로 가시나요? 여권을 보여주시겠어요?",
            expressions: [{ phrase: "Where are you flying to today?", meaning: "오늘 목적지가 어디신가요?" }],
            vocabulary: [{ word: "passport", meaning: "여권" }]
          },
          {
            role: "승객", side: "right",
            text: "Hi! I'm flying to San Francisco. Here is my passport.",
            translation: "안녕하세요! 샌프란시스코로 갑니다. 여기 여권 있습니다.",
            expressions: [{ phrase: "I'm flying to ~", meaning: "~행 비행기를 탑니다 (~로 날아갑니다)" }],
            vocabulary: [{ word: "fly", meaning: "비행기를 타고 이동하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Thank you. Do you have a seat preference—window or aisle?",
            translation: "감사합니다. 선호하시는 좌석이 있으신가요? 창가석으로 드릴까요, 복도석으로 드릴까요?",
            expressions: [{ phrase: "Do you have a seat preference?", meaning: "선호하는 좌석이 있으신가요?" }, { phrase: "window or aisle", meaning: "창가석 또는 복도석" }],
            vocabulary: [{ word: "preference", meaning: "선호, 더 좋아하는 것" }, { word: "aisle", meaning: "복도, 통로 ('s'는 묵음으로 [아일]로 발음)" }]
          },
          {
            role: "승객", side: "right",
            text: "Could I get an aisle seat as close to the front as possible?",
            translation: "가능한 한 앞쪽에 가까운 복도석으로 배정해 주실 수 있나요?",
            expressions: [{ phrase: "as close to the front as possible", meaning: "가능한 한 앞쪽에 가까운" }],
            vocabulary: [{ word: "aisle seat", meaning: "복도 쪽 좌석" }, { word: "front", meaning: "앞쪽" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Let me check. I have seat 14C available, which is an aisle seat right behind the wing. Is that okay?",
            translation: "확인해 보겠습니다. 날개 바로 뒤쪽 복도석인 14C 좌석이 비어 있는데 괜찮으신가요?",
            expressions: [{ phrase: "right behind the wing", meaning: "비행기 날개 바로 뒤쪽" }],
            vocabulary: [{ word: "available", meaning: "이용 가능한, 비어 있는" }, { word: "wing", meaning: "(비행기) 날개" }]
          },
          {
            role: "승객", side: "right",
            text: "That works great! Thank you so much.",
            translation: "아주 좋습니다! 정말 감사합니다.",
            expressions: [{ phrase: "That works great!", meaning: "아주 좋습니다! / 마음에 듭니다!" }],
            vocabulary: [{ word: "work", meaning: "(상황·조건이) 괜찮다, 맞다" }]
          }
        ]
      },
      {
        id: 2,
        title: "위탁 수하물 무게 초과 문의하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "Are you checking any bags today? Please place your suitcase on the scale.",
            translation: "오늘 부치실 위탁 수하물이 있으신가요? 캐리어를 저울 위에 올려주세요.",
            expressions: [{ phrase: "checking any bags", meaning: "수하물을 위탁하다(짐을 부치다)" }, { phrase: "place your suitcase on the scale", meaning: "캐리어를 저울 위에 올려놓다" }],
            vocabulary: [{ word: "suitcase", meaning: "여행용 가방, 캐리어" }, { word: "scale", meaning: "저울" }]
          },
          {
            role: "승객", side: "right",
            text: "Yes, just this one suitcase. Is it within the weight limit?",
            translation: "네, 이 캐리어 하나만 부치려고요. 무게 제한 이내인가요?",
            expressions: [{ phrase: "within the weight limit", meaning: "무게 제한 범위 이내인" }],
            vocabulary: [{ word: "weight limit", meaning: "무게 제한" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "I'm afraid your bag weighs 25 kilograms. The economy limit is 23 kilograms, so it's 2 kilos overweight.",
            translation: "안타깝게도 가방 무게가 25kg이네요. 이코노미석 한도는 23kg이라서 2kg 초과되었습니다.",
            expressions: [{ phrase: "2 kilos overweight", meaning: "무게가 2킬로그램 초과된" }],
            vocabulary: [{ word: "weigh", meaning: "무게가 ~ 나가다" }, { word: "overweight", meaning: "중량 초과의" }]
          },
          {
            role: "승객", side: "right",
            text: "Oh, how much is the overweight baggage fee? Or can I move a few heavy items into my carry-on?",
            translation: "아, 초과 수하물 요금이 얼마인가요? 아니면 무거운 물건 몇 개를 기내 가방으로 옮겨 담아도 될까요?",
            expressions: [{ phrase: "overweight baggage fee", meaning: "초과 수하물 요금" }, { phrase: "move ~ into my carry-on", meaning: "~을 기내 반입 가방으로 옮기다" }],
            vocabulary: [{ word: "fee", meaning: "수수료, 요금" }, { word: "carry-on", meaning: "기내 반입 가방" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "The fee is $100, so I definitely recommend taking a couple of kilos out if you have room in your backpack!",
            translation: "수수료가 100달러이니, 백팩에 여유 공간이 있으시면 2kg 정도만 빼시는 걸 추천해 드립니다!",
            expressions: [{ phrase: "if you have room in your backpack", meaning: "배낭에 여유 공간이 있다면" }],
            vocabulary: [{ word: "room", meaning: "(빈) 공간, 자리" }]
          },
          {
            role: "승객", side: "right",
            text: "Okay, I just moved my shoes and books to my backpack. It's 22.5 kilograms now!",
            translation: "네, 방금 신발과 책을 백팩으로 옮겼어요. 이제 22.5kg이네요!",
            expressions: [{ phrase: "moved ~ to my backpack", meaning: "~을 배낭으로 옮겼다" }],
            vocabulary: [{ word: "backpack", meaning: "배낭, 백팩" }]
          }
        ]
      },
      {
        id: 3,
        title: "기내 반입 금지 물품 확인하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "Before I send your checked bag down the belt, does it contain any spare lithium batteries, power banks, or e-cigarettes?",
            translation: "위탁 수하물을 벨트로 보내기 전에, 가방 안에 여분의 리튬 배터리나 보조배터리, 전자담배가 들어 있나요?",
            expressions: [{ phrase: "send your checked bag down the belt", meaning: "위탁 수하물을 컨베이어 벨트로 내려보내다" }],
            vocabulary: [{ word: "power bank", meaning: "보조배터리 (portable charger)" }, { word: "e-cigarette", meaning: "전자담배" }]
          },
          {
            role: "승객", side: "right",
            text: "No, I put my power bank in my carry-on bag. What about a 150mL tube of sunscreen?",
            translation: "아니요, 보조배터리는 기내 반입 가방에 넣었어요. 혹시 150mL짜리 선크림 튜브는 어떻게 해야 하나요?",
            expressions: [{ phrase: "put ~ in my carry-on bag", meaning: "~을 기내 반입 가방에 넣다" }],
            vocabulary: [{ word: "tube", meaning: "튜브형 용기" }, { word: "sunscreen", meaning: "자외선 차단제, 선크림" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Any liquid, gel, or cream over 100mL isn't allowed through security, so that must go in your checked luggage.",
            translation: "100mL가 넘는 액체, 젤, 크림류는 보안 검색대를 통과할 수 없으니 반드시 위탁 수하물에 넣으셔야 합니다.",
            expressions: [{ phrase: "isn't allowed through security", meaning: "보안 검색대 반입(통과)이 허용되지 않는다" }],
            vocabulary: [{ word: "checked luggage", meaning: "위탁 수하물 (부치는 짐)" }]
          },
          {
            role: "승객", side: "right",
            text: "Good thing I asked! Let me quickly slip this sunscreen into my suitcase before you tag it.",
            translation: "여쭤보길 잘했네요! 수하물 태그를 붙이시기 전에 얼른 이 선크림을 캐리어에 넣을게요.",
            expressions: [{ phrase: "Good thing I asked!", meaning: "물어보길 정말 잘했네요!" }],
            vocabulary: [{ word: "slip ~ into", meaning: "~을 재빨리 (안으로) 밀어 넣다" }, { word: "tag", meaning: "수하물 꼬리표(태그)를 붙이다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Take your time! Also, make sure your pocketknife or nail clippers with a file are in the checked bag.",
            translation: "천천히 넣으세요! 그리고 접이식 칼이나 줄(칼날)이 달린 손톱깎이도 위탁 수하물에 넣으셨는지 확인해 주세요.",
            expressions: [{ phrase: "Take your time!", meaning: "서두르지 말고 천천히 하세요!" }],
            vocabulary: [{ word: "pocketknife", meaning: "접이식 주머니칼 (맥가이버 칼)" }, { word: "nail clippers", meaning: "손톱깎이" }]
          },
          {
            role: "승객", side: "right",
            text: "All zipped up and ready to go! Thank you for checking.",
            translation: "지퍼까지 다 잠갔고 이제 준비됐습니다! 확인해 주셔서 감사합니다.",
            expressions: [{ phrase: "All zipped up", meaning: "지퍼를 끝까지 다 채운(잠근)" }],
            vocabulary: [{ word: "zip up", meaning: "지퍼를 잠그다" }]
          }
        ]
      },
      {
        id: 4,
        title: "보안 검색대 통과 및 안내받기",
        lines: [
          {
            role: "보안 요원", side: "left",
            text: "Next in line! Please place all your carry-on bags and personal items into the plastic bins.",
            translation: "다음 분 나오세요! 모든 기내 수하물과 소지품을 플라스틱 바구니에 담아 주세요.",
            expressions: [{ phrase: "place ~ into the plastic bins", meaning: "보안 검색용 플라스틱 바구니에 ~을 넣다" }],
            vocabulary: [{ word: "personal item", meaning: "개인 소지품" }, { word: "bin", meaning: "(보안 검색대의) 바구니, 트레이 (tray)" }]
          },
          {
            role: "승객", side: "right",
            text: "Do I need to take my laptop and iPad out of my bag?",
            translation: "가방에서 노트북과 아이패드를 꺼내야 하나요?",
            expressions: [{ phrase: "take ~ out of my bag", meaning: "가방 밖으로 ~을 꺼내다" }],
            vocabulary: [{ word: "laptop", meaning: "노트북 컴퓨터" }]
          },
          {
            role: "보안 요원", side: "left",
            text: "Yes, large electronics and your clear bag of liquids must be placed flat in a separate bin.",
            translation: "네, 대형 전자기기와 액체류가 든 투명 지퍼백은 별도의 바구니에 겹치지 않게 펼쳐서 담아 주셔야 합니다.",
            expressions: [{ phrase: "placed flat in a separate bin", meaning: "별도의 바구니에 평평하게(겹치지 않게) 놓이다" }],
            vocabulary: [{ word: "electronics", meaning: "전자기기" }, { word: "separate", meaning: "별도의, 분리된" }]
          },
          {
            role: "승객", side: "right",
            text: "Got it. Should I take off my sneakers and belt as well?",
            translation: "알겠습니다. 운동화와 벨트도 벗어야 하나요?",
            expressions: [{ phrase: "take off my sneakers and belt", meaning: "운동화와 벨트를 벗다(풀다)" }],
            vocabulary: [{ word: "sneakers", meaning: "운동화" }, { word: "belt", meaning: "벨트, 허리띠" }]
          },
          {
            role: "보안 요원", side: "left",
            text: "Keep your shoes on unless they're ankle boots, but please remove your belt, jacket, and everything from your pockets.",
            translation: "발목까지 오는 부츠가 아니면 신발은 신고 계셔도 되지만, 벨트와 자켓은 벗으시고 주머니 속 물건은 모두 비워 주세요.",
            expressions: [{ phrase: "Keep your shoes on", meaning: "신발을 벗지 말고 그대로 신고 계세요" }, { phrase: "everything from your pockets", meaning: "주머니에 든 모든 물건" }],
            vocabulary: [{ word: "remove", meaning: "벗다, 제거하다" }, { word: "pocket", meaning: "주머니" }]
          },
          {
            role: "승객", side: "right",
            text: "My pockets are completely empty. Can I step through the scanner now?",
            translation: "주머니를 완전히 비웠습니다. 이제 스캐너로 들어가도 될까요?",
            expressions: [{ phrase: "step through the scanner", meaning: "보안 검색 스캐너를 통과해 걸어가다" }],
            vocabulary: [{ word: "empty", meaning: "비어 있는" }, { word: "scanner", meaning: "전신 검색기, 금속 탐지기" }]
          }
        ]
      },
      {
        id: 5,
        title: "탑승구 위치 및 이동 시간 묻기",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, could you tell me how to get to Gate B24?",
            translation: "실례합니다, B24번 탑승구로 가려면 어떻게 가야 하는지 알려주시겠어요?",
            expressions: [{ phrase: "how to get to Gate B24", meaning: "B24번 게이트(탑승구)로 가는 방법" }],
            vocabulary: [{ word: "gate", meaning: "탑승구, 게이트" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Gate B24 is in the satellite concourse. You'll need to take the underground shuttle train.",
            translation: "B24번 게이트는 탑승동(별관)에 있습니다. 지하 셔틀 트레인을 타고 이동하셔야 해요.",
            expressions: [{ phrase: "take the underground shuttle train", meaning: "지하 셔틀 트레인(공항 내 무인 열차)을 타다" }],
            vocabulary: [{ word: "satellite concourse", meaning: "탑승동 (본관 터미널과 떨어진 별도 탑승 건물)" }]
          },
          {
            role: "승객", side: "right",
            text: "Oh, I see! Roughly how long does it take to get there from here?",
            translation: "아, 그렇군요! 여기서 거기까지 가는 데 대략 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "how long does it take to get there?", meaning: "거기까지 가는 데 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "roughly", meaning: "대략" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "The train runs every 3 minutes, so it takes about 10 to 12 minutes in total.",
            translation: "열차가 3분 간격으로 운행해서 총 10분에서 12분 정도 걸립니다.",
            expressions: [{ phrase: "The train runs every 3 minutes", meaning: "열차가 3분 간격으로 운행된다" }, { phrase: "in total", meaning: "총합해서, 전부 합쳐서" }],
            vocabulary: [{ word: "run", meaning: "(기차·버스가) 운행하다" }]
          },
          {
            role: "승객", side: "right",
            text: "Where can I take the escalator down to the train platform?",
            translation: "열차 승강장으로 내려가는 에스컬레이터는 어디에서 탈 수 있나요?",
            expressions: [{ phrase: "take the escalator down to ~", meaning: "~로 내려가는 에스컬레이터를 타다" }],
            vocabulary: [{ word: "platform", meaning: "승강장, 플랫폼" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Walk straight past the duty-free shops and you'll see the signs for 'Gates B1–B30' and the escalators.",
            translation: "면세점을 지나 곧장 걸어가시면 'B1–B30 게이트' 표지판과 에스컬레이터가 보일 겁니다.",
            expressions: [{ phrase: "Walk straight past ~", meaning: "~을 지나쳐 곧장 걸어가다" }],
            vocabulary: [{ word: "duty-free shop", meaning: "면세점" }, { word: "sign", meaning: "표지판, 안내판" }]
          }
        ]
      },
      {
        id: 6,
        title: "항공편 지연 및 게이트 변경 확인",
        lines: [
          {
            role: "승객", side: "right",
            text: "Hi, I'm on Flight UA892, and the departure board says it's delayed. Do you know when we'll board?",
            translation: "안녕하세요, UA892편 승객인데 출발 안내 전광판에 지연이라고 떠서요. 언제쯤 탑승이 시작될지 아시나요?",
            expressions: [{ phrase: "the departure board says it's delayed", meaning: "출발 전광판에 지연(Delayed)이라고 표시되어 있다" }],
            vocabulary: [{ word: "departure board", meaning: "출발 안내 전광판" }, { word: "delayed", meaning: "지연된" }, { word: "board", meaning: "탑승하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "We apologize for the inconvenience. The incoming aircraft was delayed due to heavy fog, so boarding is pushed back by 90 minutes.",
            translation: "불편을 드려 죄송합니다. 짙은 안개로 연결 항공편 도착이 늦어져서 탑승 시간이 90분 뒤로 미뤄졌습니다.",
            expressions: [{ phrase: "incoming aircraft", meaning: "이 비행기로 투입될 도착 예정 항공기" }, { phrase: "pushed back by 90 minutes", meaning: "시간이 90분 뒤로 연기되다(밀리다)" }],
            vocabulary: [{ word: "inconvenience", meaning: "불편" }, { word: "heavy fog", meaning: "짙은 안개" }]
          },
          {
            role: "승객", side: "right",
            text: "Did the boarding gate change as well, or are we still departing from Gate A12?",
            translation: "탑승 게이트도 변경되었나요, 아니면 그대로 A12번 게이트에서 출발하나요?",
            expressions: [{ phrase: "Did the boarding gate change?", meaning: "탑승구가 변경되었나요?" }],
            vocabulary: [{ word: "depart", meaning: "출발하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Actually, the gate just changed to Gate A18, which is about a three-minute walk down this hall.",
            translation: "실은 방금 게이트가 A18번으로 변경되었습니다. 이 복도를 따라 걸어서 3분 정도 거리에 있어요.",
            expressions: [{ phrase: "the gate just changed to ~", meaning: "탑승구가 방금 ~으로 변경되었습니다" }],
            vocabulary: [{ word: "three-minute walk", meaning: "도보 3분 거리" }]
          },
          {
            role: "승객", side: "right",
            text: "Thanks for telling me! Since the delay is quite long, is the airline providing meal vouchers?",
            translation: "알려주셔서 감사합니다! 지연 시간이 꽤 긴데 항공사에서 식사 바우처(식권)를 제공하나요?",
            expressions: [{ phrase: "providing meal vouchers", meaning: "지연 보상용 식사 쿠폰(식권)을 제공하다" }],
            vocabulary: [{ word: "meal voucher", meaning: "식권, 식사 바우처" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Yes! Scan your boarding pass right here, and I'll print a $15 food and beverage voucher for you.",
            translation: "네! 여기에 탑승권을 스캔해 주시면 공항 내 식당과 카페에서 쓰실 수 있는 15달러 식음료 바우처를 출력해 드리겠습니다.",
            expressions: [{ phrase: "food and beverage voucher", meaning: "식음료 이용권(바우처)" }],
            vocabulary: [{ word: "boarding pass", meaning: "탑승권" }, { word: "beverage", meaning: "음료" }]
          }
        ]
      },
      {
        id: 7,
        title: "면세점 구매 한도 및 탑승권 제시",
        lines: [
          {
            role: "승객", side: "right",
            text: "Hi! I'd like to buy this bottle of whiskey and this perfume set. Is there a promotion if I buy both?",
            translation: "안녕하세요! 이 위스키 한 병이랑 향수 세트를 사고 싶은데요. 두 개 같이 사면 할인 행사가 있나요?",
            expressions: [{ phrase: "Is there a promotion if I buy both?", meaning: "두 개를 함께 구매하면 프로모션(할인 혜택)이 있나요?" }],
            vocabulary: [{ word: "perfume", meaning: "향수" }, { word: "promotion", meaning: "판촉 행사, 할인 혜택" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "Yes, you get 15% off when you purchase two or more duty-free items! May I see your passport and boarding pass?",
            translation: "네, 면세품을 2개 이상 구매하시면 15% 할인이 적용됩니다! 여권과 탑승권을 보여주시겠어요?",
            expressions: [{ phrase: "get 15% off", meaning: "15% 할인을 받다" }],
            vocabulary: [{ word: "purchase", meaning: "구매하다" }]
          },
          {
            role: "승객", side: "right",
            text: "Here you go. Since this whiskey is a 1-liter bottle, can I bring it onto the plane?",
            translation: "여기 있습니다. 이 위스키가 1리터짜리 병인데 비행기 안으로 들고 탈 수 있나요?",
            expressions: [{ phrase: "bring it onto the plane", meaning: "비행기 기내로 가지고 타다" }],
            vocabulary: [{ word: "liter", meaning: "리터 (용량 단위)" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "Are you flying direct to Korea, or do you have a connecting flight?",
            translation: "한국으로 직항편을 타시나요, 아니면 경유(환승)편이 있으신가요?",
            expressions: [{ phrase: "flying direct to ~", meaning: "~로 직항편을 타고 가다" }, { phrase: "connecting flight", meaning: "환승편, 경유 항공편" }],
            vocabulary: [{ word: "direct", meaning: "직항으로, 곧장" }]
          },
          {
            role: "승객", side: "right",
            text: "It's a direct flight, and this is the only bottle of alcohol I'm bringing into Korea.",
            translation: "직항편이고, 한국으로 반입하는 주류는 이 한 병뿐입니다.",
            expressions: [{ phrase: "direct flight", meaning: "직항 항공편 (non-stop flight)" }],
            vocabulary: [{ word: "alcohol", meaning: "주류, 술" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "Then it's completely within the duty-free allowance! I'll seal it in a tamper-evident bag with the receipt inside. Don't open the bag until you land!",
            translation: "그렇다면 면세 한도 이내라 전혀 문제없습니다! 영수증을 동봉해 보안 봉투에 밀봉해 드릴 테니, 도착하실 때까지 봉투를 뜯지 마세요!",
            expressions: [{ phrase: "within the duty-free allowance", meaning: "면세 반입 한도 이내인" }, { phrase: "tamper-evident bag", meaning: "개봉 시 흔적이 남는 보안 밀봉 봉투 (STEB)" }],
            vocabulary: [{ word: "duty-free allowance", meaning: "면세 한도" }, { word: "seal", meaning: "밀봉하다" }]
          }
        ]
      },
      {
        id: 8,
        title: "라운지 위치 및 이용 가능 여부 확인",
        lines: [
          {
            role: "승객", side: "right",
            text: "Hello! Can I access this airport lounge using a Priority Pass card?",
            translation: "안녕하세요! 프라이어리티 패스(PP카드)로 이 공항 라운지를 이용할 수 있나요?",
            expressions: [{ phrase: "access this airport lounge", meaning: "이 공항 라운지에 입장하다(이용하다)" }],
            vocabulary: [{ word: "airport lounge", meaning: "공항 라운지" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "Welcome! Yes, we accept Priority Pass. Could I see your membership card and boarding pass?",
            translation: "환영합니다! 네, 프라이어리티 패스 이용 가능합니다. 멤버십 카드와 탑승권을 보여주시겠어요?",
            expressions: [{ phrase: "we accept Priority Pass", meaning: "저희 라운지는 PP카드를 받습니다" }],
            vocabulary: [{ word: "membership card", meaning: "회원 카드" }]
          },
          {
            role: "승객", side: "right",
            text: "Here is my digital card on the app, and I'm bringing my child as one accompanying guest.",
            translation: "앱에 있는 디지털 카드 여기 있고요, 제 아이를 동반 1인으로 함께 데리고 들어가려고 합니다.",
            expressions: [{ phrase: "accompanying guest", meaning: "동반 입장객 (동반인)" }],
            vocabulary: [{ word: "digital card", meaning: "모바일 앱 카드" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "You're all set! You can stay for up to three hours. The hot buffet is to your left, and the quiet rest zone is to your right.",
            translation: "입장 처리 완료되었습니다! 최대 3시간 동안 이용하실 수 있습니다. 따뜻한 음식 뷔페는 왼쪽에, 조용한 휴식 구역은 오른쪽에 있어요.",
            expressions: [{ phrase: "stay for up to three hours", meaning: "최대 3시간까지 머무르다" }],
            vocabulary: [{ word: "hot buffet", meaning: "따뜻한 요리가 나오는 뷔페 코너" }, { word: "rest zone", meaning: "휴식 공간" }]
          },
          {
            role: "승객", side: "right",
            text: "Thank you! Do you also have shower facilities available here?",
            translation: "감사합니다! 혹시 라운지 내에 이용할 수 있는 샤워실도 있나요?",
            expressions: [{ phrase: "shower facilities", meaning: "샤워 시설(샤워실)" }],
            vocabulary: [{ word: "facility", meaning: "시설, 편의 설비" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "Yes, shower room 2 is clean and available right now! Here is a key card and a fresh towel kit for you.",
            translation: "네, 마침 2번 샤워실이 청소되어 바로 이용 가능합니다! 여기 샤워실 키카드와 새 수건 세트를 드리겠습니다.",
            expressions: [{ phrase: "fresh towel kit", meaning: "깨끗한 새 수건과 어메니티 세트" }],
            vocabulary: [{ word: "key card", meaning: "출입 카드키" }]
          }
        ]
      },
      {
        id: 9,
        title: "기내 좌석 변경 정중히 요청하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, when you have a moment, could I ask a quick question about our seats?",
            translation: "실례합니다, 잠시 시간 괜찮으실 때 저희 좌석 관련해서 간단히 여쭤봐도 될까요?",
            expressions: [{ phrase: "when you have a moment", meaning: "잠시 시간이 나실 때 (바쁜 승무원에게 정중히 말을 걸 때)" }],
            vocabulary: [{ word: "quick question", meaning: "간단한 질문" }]
          },
          {
            role: "승무원", side: "left",
            text: "Of course! How can I help you?",
            translation: "물론이죠! 어떻게 도와드릴까요?",
            expressions: [{ phrase: "How can I help you?", meaning: "무엇을 도와드릴까요?" }],
            vocabulary: [{ word: "of course", meaning: "물론이죠" }]
          },
          {
            role: "승객", side: "right",
            text: "My child and I were assigned seats in different rows. If there are any empty seats together after boarding closes, could we move?",
            translation: "제 아이와 제가 서로 다른 열로 좌석이 떨어져 배정되었어요. 탑승이 마감된 후 나란히 비어 있는 좌석이 있다면 옮겨도 될까요?",
            expressions: [{ phrase: "assigned seats in different rows", meaning: "서로 다른 열에 좌석이 배정되었다" }, { phrase: "after boarding closes", meaning: "탑승이 완료된(마감된) 후에" }],
            vocabulary: [{ word: "assign", meaning: "배정하다, 할당하다" }, { word: "row", meaning: "(좌석의) 열, 줄" }]
          },
          {
            role: "승무원", side: "left",
            text: "Oh, you definitely need to sit with your child! The cabin door just closed, and I see two empty seats together in row 36.",
            translation: "아, 아이와 꼭 같이 앉으셔야죠! 마침 방금 항공기 출입문이 닫혔는데, 36열에 나란히 비어 있는 두 자리가 보이네요.",
            expressions: [{ phrase: "The cabin door just closed", meaning: "기내 탑승구(출입문)가 방금 닫혔다 (이제 빈자리가 확정되었음을 의미)" }],
            vocabulary: [{ word: "cabin door", meaning: "기내 출입문" }]
          },
          {
            role: "승객", side: "right",
            text: "Really? Thank you so much! Can we move back there right now?",
            translation: "정말요? 너무 감사합니다! 지금 바로 뒤쪽으로 자리를 옮겨도 될까요?",
            expressions: [{ phrase: "move back there right now", meaning: "지금 바로 저 뒤쪽 자리로 이동하다" }],
            vocabulary: [{ word: "right now", meaning: "지금 당장, 바로" }]
          },
          {
            role: "승무원", side: "left",
            text: "Yes, go right ahead! Let me help you carry your backpack to the overhead bin above row 36.",
            translation: "네, 바로 이동하세요! 36열 위쪽 선반에 백팩을 옮겨 싣는 걸 제가 도와드리겠습니다.",
            expressions: [{ phrase: "overhead bin", meaning: "머리 위 기내 수하물 선반 (overhead locker)" }],
            vocabulary: [{ word: "go right ahead", meaning: "네, 바로 그렇게 하세요" }]
          }
        ]
      },
      {
        id: 10,
        title: "기내식 메뉴 선택 및 음료 요청",
        lines: [
          {
            role: "승무원", side: "left",
            text: "Hello! For dinner today, we have braised beef with mashed potatoes or grilled chicken with rice. Which would you prefer?",
            translation: "안녕하세요! 오늘 저녁 기내식으로 매쉬드 포테이토를 곁들인 소고기찜과 치킨 덮밥이 있습니다. 어느 것으로 드릴까요?",
            expressions: [{ phrase: "Which would you prefer?", meaning: "어느 메뉴를 선호하시나요? (어느 것으로 드릴까요?)" }],
            vocabulary: [{ word: "braised beef", meaning: "소고기찜" }, { word: "mashed potatoes", meaning: "으깬 감자" }]
          },
          {
            role: "승객", side: "right",
            text: "I'll have the braised beef, please. And could I get the chicken for my child?",
            translation: "저는 소고기찜으로 주시고, 제 아이 것은 치킨으로 주시겠어요?",
            expressions: [{ phrase: "I'll have ~, please", meaning: "저는 ~(메뉴)로 할게요" }],
            vocabulary: [{ word: "grilled chicken", meaning: "구운 닭고기" }]
          },
          {
            role: "승무원", side: "left",
            text: "Sure! Be careful, the casserole dish is quite hot. What can I get you both to drink?",
            translation: "네! 용기가 꽤 뜨거우니 조심하세요. 음료는 두 분 어떤 것으로 드릴까요?",
            expressions: [{ phrase: "What can I get you to drink?", meaning: "마실 것은 무엇으로 드릴까요?" }],
            vocabulary: [{ word: "casserole dish", meaning: "기내식의 따뜻한 메인 요리 용기" }]
          },
          {
            role: "승객", side: "right",
            text: "Could I get a ginger ale with no ice, and a cup of apple juice with a lid or straw for my kid?",
            translation: "저는 얼음 뺀 진저에일 한 잔 주시고, 아이가 마실 사과 주스는 뚜껑이나 빨대와 함께 주실 수 있나요?",
            expressions: [{ phrase: "ginger ale with no ice", meaning: "얼음을 뺀 진저에일 (기내에서 속이 불편할 때도 자주 마시는 탄산음료)" }],
            vocabulary: [{ word: "ginger ale", meaning: "진저에일 (생강 향 탄산음료)" }, { word: "lid", meaning: "뚜껑" }]
          },
          {
            role: "승무원", side: "left",
            text: "Here you go! I put a paper lid and a straw in the apple juice so it won't spill during turbulence.",
            translation: "여기 있습니다! 흔들릴 때 쏟아지지 않도록 사과 주스 컵에 종이 뚜껑을 덮고 빨대를 꽂아 드렸어요.",
            expressions: [{ phrase: "so it won't spill during turbulence", meaning: "기체 흔들림(난기류) 중에 쏟아지지 않도록" }],
            vocabulary: [{ word: "turbulence", meaning: "난기류, 기체 흔들림" }]
          },
          {
            role: "승객", side: "right",
            text: "That's so thoughtful of you! Could I also get one tube of red pepper paste if you have any?",
            translation: "세심하게 배려해 주셔서 정말 감사합니다! 혹시 튜브형 고추장이 있다면 하나 주실 수 있나요?",
            expressions: [{ phrase: "That's so thoughtful of you!", meaning: "정말 배려심이 깊으시네요! / 세심하게 챙겨 주셔서 감사합니다!" }],
            vocabulary: [{ word: "thoughtful", meaning: "배려심 깊은, 사려 깊은" }, { word: "red pepper paste", meaning: "고추장" }]
          }
        ]
      },
      {
        id: 11,
        title: "기내 면세품 구매 및 입국신고서 요청",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, are you still selling in-flight duty-free items?",
            translation: "실례합니다, 지금도 기내 면세품을 구매할 수 있나요?",
            expressions: [{ phrase: "in-flight duty-free items", meaning: "기내 면세품" }],
            vocabulary: [{ word: "in-flight", meaning: "기내의, 비행 중 제공되는" }]
          },
          {
            role: "승무원", side: "left",
            text: "Yes, we have about 30 minutes left before we close duty-free sales. Which item would you like?",
            translation: "네, 기내 면세 판매 마감까지 약 30분 정도 남았습니다. 어떤 상품을 원하시나요?",
            expressions: [{ phrase: "before we close duty-free sales", meaning: "면세품 판매를 마감하기 전에" }],
            vocabulary: [{ word: "sales", meaning: "판매" }]
          },
          {
            role: "승객", side: "right",
            text: "I'd like this lip balm trio set on page 24 of the catalog. Can I pay with a credit card?",
            translation: "카탈로그 24페이지에 있는 이 립밤 3종 세트를 사고 싶어요. 신용카드로 결제할 수 있나요?",
            expressions: [{ phrase: "on page 24 of the catalog", meaning: "카탈로그 책자 24쪽에 있는" }],
            vocabulary: [{ word: "lip balm trio", meaning: "립밤 3개입 세트" }, { word: "catalog", meaning: "상품 안내 책자, 카탈로그" }]
          },
          {
            role: "승무원", side: "left",
            text: "Yes, we accept physical credit cards with a chip, though contactless pay doesn't work in flight. I'll go check the stock!",
            translation: "네, 비행 중에는 비접촉 페이 결제가 안 되지만 IC칩이 있는 실물 신용카드는 가능합니다. 재고를 확인해 오겠습니다!",
            expressions: [{ phrase: "physical credit cards with a chip", meaning: "IC칩이 부착된 실물 신용카드" }],
            vocabulary: [{ word: "stock", meaning: "재고" }, { word: "contactless pay", meaning: "비접촉 결제 (애플페이·삼성페이 등)" }]
          },
          {
            role: "승객", side: "right",
            text: "Thank you! Also, when you come back, could I get arrival cards and a customs form for my family?",
            translation: "감사합니다! 그리고 오실 때 저희 가족이 작성할 입국신고서와 세관신고서도 함께 주시겠어요?",
            expressions: [{ phrase: "arrival cards and a customs form", meaning: "입국신고서와 세관신고서" }],
            vocabulary: [{ word: "arrival card", meaning: "입국신고서 (disembarkation card / landing card)" }, { word: "customs form", meaning: "세관신고서" }]
          },
          {
            role: "승무원", side: "left",
            text: "Sure! Remember, each person needs their own arrival card, while you only need one customs declaration form per family.",
            translation: "물론이죠! 입국신고서는 1인당 한 장씩 작성하셔야 하고, 세관신고서는 가족당 한 장만 작성하시면 됩니다.",
            expressions: [{ phrase: "one ~ per family", meaning: "한 가족(세대)당 1장" }],
            vocabulary: [{ word: "per person", meaning: "1인당" }, { word: "declaration", meaning: "신고, 신고서" }]
          }
        ]
      },
      {
        id: 12,
        title: "환승 게이트 및 연결편 시간 문의",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me! Our flight just landed a bit late, and we have a tight connection to London on Flight BA284.",
            translation: "실례합니다! 저희 비행기가 조금 늦게 착륙해서 런던행 BA284편 환승 시간이 아주 촉박해요.",
            expressions: [{ phrase: "have a tight connection", meaning: "환승(경유) 연결 시간이 매우 촉박하다" }],
            vocabulary: [{ word: "land", meaning: "착륙하다" }, { word: "tight", meaning: "(시간이) 빠듯한, 촉박한" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Let me check your boarding pass. Flight BA284 departs from Terminal 5, Gate B36 in 50 minutes.",
            translation: "탑승권을 확인해 보겠습니다. BA284편은 50분 뒤에 5터미널 B36번 게이트에서 출발하네요.",
            expressions: [{ phrase: "departs from Terminal 5", meaning: "제5터미널에서 출발한다" }],
            vocabulary: [{ word: "terminal", meaning: "여객 터미널" }]
          },
          {
            role: "승객", side: "right",
            text: "Do we need to pick up our checked luggage here, or does it go straight through?",
            translation: "여기서 위탁 수하물을 찾아서 다시 부쳐야 하나요, 아니면 최종 목적지까지 바로 가나요?",
            expressions: [{ phrase: "does it go straight through?", meaning: "수하물이 최종 목적지까지 바로 연결되어 가나요?" }],
            vocabulary: [{ word: "pick up", meaning: "(수하물을) 찾다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Looking at your bag tag, your bags are checked all the way through to London, so you don't need to claim them here.",
            translation: "수하물 태그를 보니 짐은 런던까지 한 번에 연결되어 있어서 여기서 찾으실 필요가 없습니다.",
            expressions: [{ phrase: "checked all the way through to ~", meaning: "최종 목적지인 ~까지 수하물이 자동 연결(쓰루 체크인)되어 있다" }],
            vocabulary: [{ word: "bag tag", meaning: "수하물 보관표(태그)" }, { word: "claim", meaning: "(수하물을) 찾아가다" }]
          },
          {
            role: "승객", side: "right",
            text: "What a relief! Which way do we go for flight connections?",
            translation: "정말 다행이네요! 환승 통로는 어느 쪽으로 가야 하나요?",
            expressions: [{ phrase: "Which way do we go for flight connections?", meaning: "환승(연결편)을 타려면 어느 방향으로 가야 하나요?" }],
            vocabulary: [{ word: "flight connections", meaning: "항공편 환승 (transfer / transit)" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Follow the purple 'Flight Connections' signs and use the Express Connection lane at security—show them your boarding pass!",
            translation: "보라색 '환승(Flight Connections)' 표지판을 따라가시고, 보안 검색대에서는 탑승권을 보여준 뒤 긴급 환승 전용 레인(패스트트랙)을 이용하세요!",
            expressions: [{ phrase: "Express Connection lane", meaning: "환승 시간이 촉박한 승객을 위한 우선 통과 레인" }],
            vocabulary: [{ word: "follow", meaning: "따라가다" }, { word: "lane", meaning: "줄, 전용 통로" }]
          }
        ]
      },
      {
        id: 13,
        title: "입국 심사대에서 방문 목적 답하기",
        lines: [
          {
            role: "입국 심사관", side: "left",
            text: "Next, please! If you're traveling together as a family, you can come up to the booth together.",
            translation: "다음 분 오세요! 가족이 함께 여행 중이시면 심사대 부스로 다 같이 나오셔도 됩니다.",
            expressions: [{ phrase: "come up to the booth together", meaning: "입국 심사 부스로 가족이 함께 나오다" }],
            vocabulary: [{ word: "booth", meaning: "(입국 심사대) 부스, 창구" }]
          },
          {
            role: "승객", side: "right",
            text: "Good afternoon, officer. Here are our three passports.",
            translation: "안녕하세요, 심사관님. 여기 저희 세 명의 여권입니다.",
            expressions: [{ phrase: "Good afternoon, officer.", meaning: "안녕하세요, 심사관님. (입국 심사관이나 경찰관에게 쓰는 정중한 호칭)" }],
            vocabulary: [{ word: "officer", meaning: "심사관, 담당 공무원" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "Thank you. What is the purpose of your visit today?",
            translation: "감사합니다. 오늘 방문 목적이 무엇인가요?",
            expressions: [{ phrase: "What is the purpose of your visit?", meaning: "방문 목적이 무엇입니까? (입국 심사 1순위 필수 질문)" }],
            vocabulary: [{ word: "purpose", meaning: "목적" }]
          },
          {
            role: "승객", side: "right",
            text: "We're here on vacation for sightseeing.",
            translation: "가족 휴가차 관광하러 왔습니다.",
            expressions: [{ phrase: "We're here on vacation for sightseeing.", meaning: "휴가 및 관광차 방문했습니다. (출장일 때는 'I'm here on business.')" }],
            vocabulary: [{ word: "on vacation", meaning: "휴가차 (영국에서는 on holiday)" }, { word: "sightseeing", meaning: "관광" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "What is your occupation back in Korea, and are you carrying more than $10,000 in cash?",
            translation: "한국에서의 직업은 무엇인가요? 그리고 혹시 현금으로 1만 달러 이상 소지하고 계신가요?",
            expressions: [{ phrase: "What is your occupation?", meaning: "직업이 무엇입니까?" }, { phrase: "carrying more than $10,000 in cash", meaning: "현금 1만 달러 이상을 소지하고 있다" }],
            vocabulary: [{ word: "occupation", meaning: "직업" }, { word: "cash", meaning: "현금" }]
          },
          {
            role: "승객", side: "right",
            text: "I'm a pharmacist, and no, we only brought about $500 in cash and credit cards.",
            translation: "저는 약사이고요, 아니요, 현금은 약 500달러 정도와 신용카드만 가져왔습니다.",
            expressions: [{ phrase: "I'm a pharmacist", meaning: "저는 약사입니다 (회사원은 office worker, 엔지니어는 engineer)" }],
            vocabulary: [{ word: "pharmacist", meaning: "약사" }]
          }
        ]
      },
      {
        id: 14,
        title: "체류 기간 및 숙소 주소 설명하기",
        lines: [
          {
            role: "입국 심사관", side: "left",
            text: "How long will you be staying in the country?",
            translation: "이번에 며칠 동안 체류하실 예정인가요?",
            expressions: [{ phrase: "How long will you be staying?", meaning: "얼마나 오래 머무르실 예정입니까?" }],
            vocabulary: [{ word: "stay", meaning: "머무르다, 체류하다" }]
          },
          {
            role: "승객", side: "right",
            text: "We'll be staying for seven days and flying back to Seoul next Saturday.",
            translation: "7일 동안 머무르고 다음 주 토요일에 서울로 돌아가는 비행기를 탑니다.",
            expressions: [{ phrase: "staying for seven days", meaning: "7일간 체류하다" }],
            vocabulary: [{ word: "fly back", meaning: "비행기를 타고 돌아가다 (귀국하다)" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "Do you have a copy of your return flight ticket?",
            translation: "귀국 항공권(왕복 항공권) 예약 내역서를 가지고 계신가요?",
            expressions: [{ phrase: "return flight ticket", meaning: "귀국 항공권" }],
            vocabulary: [{ word: "copy", meaning: "사본, 인쇄본" }]
          },
          {
            role: "승객", side: "right",
            text: "Yes, here is our printed e-ticket itinerary showing our return flight.",
            translation: "네, 여기 귀국 항공편이 적힌 전자항공권(e-티켓) 출력본이 있습니다.",
            expressions: [{ phrase: "printed e-ticket itinerary", meaning: "인쇄된 전자항공권 여정 확인서" }],
            vocabulary: [{ word: "itinerary", meaning: "여행 일정표, 항공 여정서" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "And where will you be staying while you're here?",
            translation: "그리고 체류하시는 동안 어디에 묵으실 예정인가요?",
            expressions: [{ phrase: "Where will you be staying?", meaning: "숙소가 어디입니까?" }],
            vocabulary: [{ word: "while", meaning: "~하는 동안" }]
          },
          {
            role: "승객", side: "right",
            text: "We're staying at the Marriott Hotel downtown. The exact street address is on this hotel booking confirmation.",
            translation: "시내에 있는 메리어트 호텔에 묵을 예정입니다. 정확한 도로명 주소는 이 호텔 예약 확인서에 적혀 있습니다.",
            expressions: [{ phrase: "hotel booking confirmation", meaning: "호텔 예약 확인서" }],
            vocabulary: [{ word: "downtown", meaning: "시내 중심가" }, { word: "street address", meaning: "상세 도로명 주소" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "Everything looks good. Please look at the camera and place the four fingers of your right hand on the green scanner. Welcome, and enjoy your trip!",
            translation: "모두 확인되었습니다. 카메라를 보시고 오른손 네 손가락을 초록색 스캐너에 올려주세요. 환영합니다, 즐거운 여행 되세요!",
            expressions: [{ phrase: "place the four fingers of your right hand on the scanner", meaning: "오른손 네 손가락을 지문 스캐너에 올리다" }],
            vocabulary: [{ word: "scanner", meaning: "지문 인식 스캐너" }]
          }
        ]
      },
      {
        id: 15,
        title: "수하물 수취대 번호 확인하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, we just came through immigration. Which baggage carousel is for Flight KE011 from Seoul?",
            translation: "실례합니다, 방금 입국 심사를 통과했는데요. 서울발 KE011편의 수하물 수취대는 몇 번인가요?",
            expressions: [{ phrase: "Which baggage carousel is for ~?", meaning: "~ 항공편의 수하물 컨베이어 벨트(수취대)는 몇 번인가요?" }],
            vocabulary: [{ word: "immigration", meaning: "입국 심사대" }, { word: "baggage carousel", meaning: "회전식 수하물 수취대 (baggage claim belt)" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Let me check the monitor. Flight KE011 from Seoul is assigned to Carousel 5.",
            translation: "모니터를 확인해 보겠습니다. 서울발 KE011편은 5번 수취대로 배정되어 있네요.",
            expressions: [{ phrase: "assigned to Carousel 5", meaning: "5번 수하물 수취대에 배정되어 있다" }],
            vocabulary: [{ word: "monitor", meaning: "안내 전광판, 모니터" }]
          },
          {
            role: "승객", side: "right",
            text: "Thank you! Also, where can I get a luggage cart, and do I have to pay for it?",
            translation: "감사합니다! 그리고 수하물 카트는 어디서 가져올 수 있나요? 유료인가요?",
            expressions: [{ phrase: "luggage cart", meaning: "수하물 카트 (영국·호주에서는 baggage trolley)" }],
            vocabulary: [{ word: "pay for ~", meaning: "~에 대해 요금을 지불하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "The luggage carts are lined up right next to the pillar over there, and they're free in the international arrivals hall.",
            translation: "수하물 카트는 저기 기둥 바로 옆에 줄지어 비치되어 있고, 국제선 입국장에서는 무료로 이용하실 수 있습니다.",
            expressions: [{ phrase: "lined up right next to ~", meaning: "~ 바로 옆에 일렬로 비치되어 있는" }],
            vocabulary: [{ word: "pillar", meaning: "기둥" }, { word: "arrivals hall", meaning: "도착장, 입국장" }]
          },
          {
            role: "승객", side: "right",
            text: "Awesome! By the way, we also checked a foldable stroller. Will that come out on Carousel 5 too?",
            translation: "좋네요! 그런데 저희가 접이식 유모차도 위탁 수하물로 부쳤는데, 그것도 5번 수취대에서 나오나요?",
            expressions: [{ phrase: "foldable stroller", meaning: "접이식 유모차 (영국에서는 pushchair / buggy)" }],
            vocabulary: [{ word: "stroller", meaning: "유모차" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Strollers and oversized items come out separately at the 'Oversized Baggage' counter right behind Carousel 6.",
            translation: "유모차나 대형 수하물은 6번 수취대 바로 뒤에 있는 '대형 수하물(Oversized Baggage)' 수취 구역으로 별도 배출됩니다.",
            expressions: [{ phrase: "Oversized Baggage counter", meaning: "대형·특수 수하물(유모차, 골프백 등) 수령 창구" }],
            vocabulary: [{ word: "oversized", meaning: "규격 외 대형의" }, { word: "separately", meaning: "별도로, 따로" }]
          }
        ]
      },
      {
        id: 16,
        title: "분실 수하물 신고 및 특징 설명하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, the baggage belt for my flight stopped moving, and my suitcase still hasn't come out.",
            translation: "실례합니다, 저희 항공편 수하물 벨트가 멈췄는데 제 캐리어가 아직도 안 나왔어요.",
            expressions: [{ phrase: "my suitcase still hasn't come out", meaning: "제 캐리어가 아직도 나오지 않았다" }],
            vocabulary: [{ word: "baggage belt", meaning: "수하물 컨베이어 벨트" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "I'm sorry about that! May I see the baggage claim tag attached to your boarding pass or passport?",
            translation: "저런, 불편을 드려 죄송합니다! 탑승권이나 여권에 붙어 있는 수하물 보관표(클레임 태그)를 보여주시겠어요?",
            expressions: [{ phrase: "baggage claim tag", meaning: "체크인 시 짐을 부치고 받은 수하물 번호표 스티커" }],
            vocabulary: [{ word: "attached", meaning: "부착된" }]
          },
          {
            role: "승객", side: "right",
            text: "Here it is. It's a large black hard-shell suitcase with a blue name tag on the handle.",
            translation: "여기 있습니다. 손잡이에 파란색 네임택이 달린 큰 사이즈의 검은색 하드 케이스 캐리어예요.",
            expressions: [{ phrase: "large black hard-shell suitcase", meaning: "검은색 대형 하드 케이스 캐리어 (천 재질은 soft-shell / fabric suitcase)" }, { phrase: "blue name tag on the handle", meaning: "손잡이에 달린 파란색 이름표(네임택)" }],
            vocabulary: [{ word: "hard-shell", meaning: "겉면이 딱딱한 플라스틱/알루미늄 재질의" }, { word: "handle", meaning: "손잡이" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Let me scan the barcode... Good news, it's not lost! It missed the connection and will arrive on the next flight at 8:00 PM tonight.",
            translation: "바코드를 조회해 보겠습니다... 다행히 분실된 건 아닙니다! 환승지에서 연결이 늦어져서 오늘 밤 8시 다음 항공편으로 도착할 예정입니다.",
            expressions: [{ phrase: "missed the connection", meaning: "환승 연결편에 실리지 못했다" }],
            vocabulary: [{ word: "barcode", meaning: "바코드" }]
          },
          {
            role: "승객", side: "right",
            text: "Oh, thank goodness! Will you deliver it directly to our hotel once it arrives?",
            translation: "아, 정말 다행이네요! 짐이 도착하면 저희가 묵는 호텔로 바로 배송해 주시나요?",
            expressions: [{ phrase: "deliver it directly to our hotel", meaning: "숙박하는 호텔로 곧바로 배송해 주다" }],
            vocabulary: [{ word: "deliver", meaning: "배달하다, 배송하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Yes, free of charge! Please write down your hotel name, address, and phone number on this Property Irregularity Report (PIR).",
            translation: "네, 무료로 배송해 드립니다! 이 수하물 사고 보고서(PIR) 양식에 호텔 이름과 주소, 연락처를 적어 주세요.",
            expressions: [{ phrase: "Property Irregularity Report (PIR)", meaning: "수하물 지연·분실·파손 시 작성하는 공식 신고서(보험 청구 시에도 필수)" }],
            vocabulary: [{ word: "free of charge", meaning: "무료로" }, { word: "write down", meaning: "적다, 기입하다" }]
          }
        ]
      },
      {
        id: 17,
        title: "세관 신고서 제출 및 물품 검사",
        lines: [
          {
            role: "세관 직원", side: "left",
            text: "Hello! Welcome. Please hand me your customs declaration form.",
            translation: "안녕하세요! 환영합니다. 세관신고서를 저에게 건네주세요.",
            expressions: [{ phrase: "customs declaration form", meaning: "세관신고서" }],
            vocabulary: [{ word: "hand", meaning: "건네주다" }]
          },
          {
            role: "승객", side: "right",
            text: "Here is our form. I checked 'Yes' on the food item question just to be safe.",
            translation: "여기 신고서 있습니다. 혹시 몰라서 안전하게 식품 반입 항목에 '예(Yes)'로 체크했어요.",
            expressions: [{ phrase: "just to be safe", meaning: "만약을 대비해 안전하게 (과태료를 피하려면 애매할 때 무조건 신고하는 것이 유리함)" }],
            vocabulary: [{ word: "food item", meaning: "식품류" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "Smart move! It's always better to declare. What kind of food are you bringing in?",
            translation: "잘하셨습니다! 언제나 미리 신고하시는 게 좋죠. 어떤 종류의 식품을 가져오셨나요?",
            expressions: [{ phrase: "It's always better to declare.", meaning: "언제나 자진 신고하는 편이 좋습니다." }],
            vocabulary: [{ word: "declare", meaning: "(세관에) 신고하다" }]
          },
          {
            role: "승객", side: "right",
            text: "Just some commercially packaged snacks, roasted seaweed, and seafood-flavored cup noodles without any meat.",
            translation: "시중에서 밀봉 판매되는 과자 몇 개와 구운 김, 그리고 육류 성분이 전혀 없는 해물 맛 컵라면만 가져왔습니다.",
            expressions: [{ phrase: "commercially packaged snacks", meaning: "상업적으로 공장에서 밀봉 포장된 과자류" }, { phrase: "without any meat", meaning: "육류(소고기·돼지고기·닭고기) 성분이 전혀 들어 있지 않은" }],
            vocabulary: [{ word: "roasted seaweed", meaning: "조미김, 구운 김" }, { word: "seafood-flavored", meaning: "해물 맛의" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "No fresh fruits, vegetables, beef jerky, or meat products at all, right?",
            translation: "생과일이나 채소, 육포, 또는 육가공품은 전혀 없으신 거죠?",
            expressions: [{ phrase: "fresh fruits, vegetables, beef jerky", meaning: "생과일, 채소, 육포 (대부분 국가에서 엄격히 반입을 금지하는 품목)" }],
            vocabulary: [{ word: "beef jerky", meaning: "소고기 육포" }, { word: "meat product", meaning: "육가공품 (소시지, 햄 등)" }]
          },
          {
            role: "승객", side: "right",
            text: "None at all! Everything is sealed in my suitcase if you'd like to inspect it.",
            translation: "전혀 없습니다! 확인이 필요하시면 캐리어 안에 모두 밀봉된 상태로 들어 있습니다.",
            expressions: [{ phrase: "if you'd like to inspect it", meaning: "검사(확인)해 보기를 원하신다면" }],
            vocabulary: [{ word: "inspect", meaning: "검사하다, 조사하다" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "Roasted seaweed and seafood snacks are completely fine! You don't need to open your bags—head straight out through the green exit.",
            translation: "구운 김과 해물 스낵류는 전혀 문제없습니다! 가방을 여실 필요 없이 초록색 출구로 바로 나가시면 됩니다.",
            expressions: [{ phrase: "head straight out through the green exit", meaning: "초록색 통로(면세·검사 면제 출구)를 통해 바로 밖으로 나가다" }],
            vocabulary: [{ word: "green exit", meaning: "세관 통과 출구 (Green Channel)" }]
          }
        ]
      },
      {
        id: 18,
        title: "공항 유심(SIM) 및 와이파이 수령",
        lines: [
          {
            role: "승객", side: "right",
            text: "Hi! I pre-ordered a 7-day unlimited data SIM card online. Can I pick it up here?",
            translation: "안녕하세요! 인터넷으로 7일 무제한 데이터 유심(SIM) 카드를 사전 예약했는데 여기서 수령할 수 있나요?",
            expressions: [{ phrase: "pre-ordered a 7-day unlimited data SIM card", meaning: "7일 무제한 데이터 유심카드를 사전 예약 구매했다" }],
            vocabulary: [{ word: "pre-order", meaning: "사전 예약 주문하다" }, { word: "unlimited data", meaning: "무제한 데이터" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "Welcome! Yes, this is the pickup counter. May I see your mobile voucher with the QR code and your passport?",
            translation: "환영합니다! 네, 여기가 수령 카운터 맞습니다. QR 코드가 있는 모바일 바우처와 여권을 보여주시겠어요?",
            expressions: [{ phrase: "mobile voucher with the QR code", meaning: "QR 코드가 표시된 모바일 예약 바우처" }],
            vocabulary: [{ word: "pickup counter", meaning: "수령 카운터" }]
          },
          {
            role: "승객", side: "right",
            text: "Here is my voucher and passport. Could you help me swap the SIM card and set it up on my phone?",
            translation: "여기 바우처와 여권 있습니다. 제 휴대폰에 유심칩을 교체해서 개통 설정하는 것까지 도와주실 수 있나요?",
            expressions: [{ phrase: "swap the SIM card and set it up", meaning: "유심칩을 갈아 끼우고 통신 설정을 맞추다" }],
            vocabulary: [{ word: "swap", meaning: "교체하다, 바꾸다" }, { word: "set up", meaning: "설정하다, 설치하다" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "Of course! Please change your phone's language to English temporarily and hand it to me unlocked.",
            translation: "물론이죠! 휴대폰 언어 설정을 잠시 영어로 바꾸신 뒤 잠금을 풀어서 저에게 건네주세요.",
            expressions: [{ phrase: "change your phone's language to English temporarily", meaning: "직원이 설정을 확인할 수 있도록 휴대폰 언어를 일시적으로 영어로 변경하다" }],
            vocabulary: [{ word: "temporarily", meaning: "일시적으로, 잠시" }, { word: "unlocked", meaning: "화면 잠금이 해제된" }]
          },
          {
            role: "승객", side: "right",
            text: "Okay, I switched it to English. Oh, do you have a little holder to keep my original Korean SIM card safe?",
            translation: "네, 영어로 바꿨습니다. 아, 원래 쓰던 제 한국 유심칩을 잃어버리지 않게 보관할 작은 홀더(케이스)가 있을까요?",
            expressions: [{ phrase: "keep my original Korean SIM card safe", meaning: "원래 쓰던 한국 유심칩을 분실하지 않게 안전히 보관하다" }],
            vocabulary: [{ word: "original", meaning: "원래의, 본래 쓰던" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "Yes! I taped your Korean SIM card and the ejector pin onto this card. Your 5G data is working now—try opening a webpage!",
            translation: "네! 한국 유심칩과 유심 분리 핀을 이 카드에 테이프로 잘 붙여 두었습니다. 이제 5G 데이터가 잘 터지니 웹페이지를 한번 열어보세요!",
            expressions: [{ phrase: "ejector pin", meaning: "유심 트레이를 빼내는 핀 (유심 핀)" }],
            vocabulary: [{ word: "tape", meaning: "테이프로 붙이다" }]
          }
        ]
      },
      {
        id: 19,
        title: "공항 철도 및 리무진 버스 매표",
        lines: [
          {
            role: "승객", side: "right",
            text: "Hello! We'd like to take the Airport Express train to Central Station. Where can we buy tickets?",
            translation: "안녕하세요! 공항철도 급행열차를 타고 중앙역으로 가고 싶은데요. 표는 어디서 살 수 있나요?",
            expressions: [{ phrase: "take the Airport Express train to ~", meaning: "공항 급행열차를 타고 ~로 가다" }],
            vocabulary: [{ word: "express train", meaning: "급행열차, 직통열차" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "You can buy them right here at my counter! How many adults and children?",
            translation: "바로 여기 제 매표 창구에서 구매하실 수 있습니다! 성인과 어린이가 각각 몇 분이신가요?",
            expressions: [{ phrase: "How many adults and children?", meaning: "성인과 어린이가 몇 명인가요?" }],
            vocabulary: [{ word: "counter", meaning: "매표 창구, 카운터" }]
          },
          {
            role: "승객", side: "right",
            text: "Two adults and one five-year-old child, please. Is it cheaper to buy a round-trip ticket?",
            translation: "성인 두 명이랑 만 5세 어린이 한 명 주세요. 혹시 왕복권으로 사면 더 저렴한가요?",
            expressions: [{ phrase: "cheaper to buy a round-trip ticket", meaning: "왕복 티켓(영국에서는 return ticket)을 사는 것이 더 저렴한" }],
            vocabulary: [{ word: "round-trip ticket", meaning: "왕복 승차권 (편도는 one-way ticket)" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "Yes, a round-trip ticket saves you 15%, and children under six ride for free!",
            translation: "네, 왕복권으로 구매하시면 15% 할인되고, 만 6세 미만 어린이는 무료로 탑승할 수 있습니다!",
            expressions: [{ phrase: "children under six ride for free", meaning: "6세 미만 어린이는 무료로 탑승한다" }],
            vocabulary: [{ word: "save", meaning: "(돈·비용을) 절약해 주다" }]
          },
          {
            role: "승객", side: "right",
            text: "That's great! We'll take two adult round-trip tickets, then. When does the next train leave?",
            translation: "정말 좋네요! 그럼 성인 왕복권 두 장으로 주세요. 다음 열차는 언제 출발하나요?",
            expressions: [{ phrase: "When does the next train leave?", meaning: "다음 열차는 몇 시에 출발하나요?" }],
            vocabulary: [{ word: "leave", meaning: "출발하다, 떠나다" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "In 8 minutes from Platform 1! Just scan the QR code on your ticket at the turnstile, and keep the ticket for your return trip.",
            translation: "1번 승강장에서 8분 뒤에 출발합니다! 개찰구에서 티켓의 QR 코드를 스캔해 들어가시고, 돌아오실 때 써야 하니 티켓을 잘 보관해 주세요.",
            expressions: [{ phrase: "at the turnstile", meaning: "지하철·기차역 개찰구(회전식·플랩식 게이트)에서" }],
            vocabulary: [{ word: "turnstile", meaning: "개찰구 (ticket gate)" }, { word: "return trip", meaning: "돌아오는 길 (귀국길)" }]
          }
        ]
      },
      {
        id: 20,
        title: "택시 승강장 위치 및 시내 요금 문의",
        lines: [
          {
            role: "승객", side: "right",
            text: "Excuse me, we have a lot of luggage, so we want to take an official airport taxi. Where is the taxi stand?",
            translation: "실례합니다, 저희가 짐이 많아서 공식 공항 택시를 타려고 하는데요. 택시 승강장이 어디에 있나요?",
            expressions: [{ phrase: "official airport taxi", meaning: "공식 인가된 공항 택시 (불법 호객 택시를 피할 때 중요)" }, { phrase: "Where is the taxi stand?", meaning: "택시 승강장(타는 곳)이 어디인가요?" }],
            vocabulary: [{ word: "taxi stand", meaning: "택시 승강장 (영국에서는 taxi rank)" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "Go out through Exit 4 and follow the yellow signs on the ground for the official metered taxi queue.",
            translation: "4번 출구로 나가셔서 바닥에 있는 노란색 표지판을 따라가시면 공식 미터기 택시 대기 줄이 있습니다.",
            expressions: [{ phrase: "official metered taxi queue", meaning: "공식 미터기 택시 탑승 대기 줄" }],
            vocabulary: [{ word: "metered taxi", meaning: "미터기 요금제로 운행하는 정식 택시" }, { word: "queue", meaning: "대기 줄 (미국에서는 line)" }]
          },
          {
            role: "승객", side: "right",
            text: "Thank you. Do taxis from the airport charge by the meter, or is there a flat rate to downtown?",
            translation: "감사합니다. 공항에서 출발하는 택시는 미터기로 요금을 받나요, 아니면 시내까지 정액 요금제가 있나요?",
            expressions: [{ phrase: "charge by the meter, or is there a flat rate", meaning: "미터기 요금제인가요, 아니면 구간 정액 요금제(flat rate)인가요?" }],
            vocabulary: [{ word: "flat rate", meaning: "정액 요금 (fixed fare)" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "There's a regulated flat rate of $60 to downtown hotels, plus highway tolls of about $5.",
            translation: "시내 중심가 호텔까지는 공식 지정된 60달러 정액 요금이 적용되며, 여기에 약 5달러의 고속도로 통행료가 추가됩니다.",
            expressions: [{ phrase: "plus highway tolls", meaning: "고속도로 통행료(톨비) 별도 추가" }],
            vocabulary: [{ word: "regulated", meaning: "공식 규정된" }, { word: "highway toll", meaning: "고속도로 통행료" }]
          },
          {
            role: "승객", side: "right",
            text: "Can I pay the taxi driver with a credit card, or do I need cash?",
            translation: "택시 기사님께 신용카드로 결제할 수 있나요, 아니면 현금이 필요한가요?",
            expressions: [{ phrase: "pay ~ with a credit card", meaning: "신용카드로 결제하다" }],
            vocabulary: [{ word: "taxi driver", meaning: "택시 운전기사" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "All official taxis at the stand accept credit cards and Apple Pay! Just ask the dispatcher at Exit 4 for a minivan taxi if you have large bags.",
            translation: "승강장에 있는 모든 공식 택시는 신용카드와 애플 페이 결제가 가능합니다! 큰 가방이 있으시면 4번 출구 배차 담당 직원에게 대형(미니밴) 택시를 요청하세요.",
            expressions: [{ phrase: "ask the dispatcher for a minivan taxi", meaning: "택시 승강장 배차 안내원에게 대형(미니밴) 택시를 요청하다" }],
            vocabulary: [{ word: "dispatcher", meaning: "(택시 승강장의) 배차 안내 요원" }, { word: "minivan taxi", meaning: "짐이 많이 실리는 대형 밴 택시" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 공항 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "체크인 및 좌석 배정 요청하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "おはようございます。本日はどちらまで行かれますか？パスポートを拝見いたします。",
            translation: "좋은 아침입니다. 오늘은 어디까지 가시나요? 여권을 보여주시겠어요?",
            expressions: [{ phrase: "本日はどちらまで行かれますか？", meaning: "오늘은 어디까지 가십니까? ('行きますか'의 존경어 표현)" }, { phrase: "パスポートを拝見いたします", meaning: "여권을 확인하겠습니다(보겠습니다 - 겸양어)" }],
            vocabulary: [{ word: "本日(ほんじつ)", meaning: "오늘, 금일" }, { word: "行く(いく)", meaning: "가다" }, { word: "拝見(はいけん)する", meaning: "보다 (겸양어)" }]
          },
          {
            role: "승객", side: "right",
            text: "こんにちは。ソウル行きの便に乗ります。こちらがパスポートです。",
            translation: "안녕하세요. 서울행 비행기를 탑니다. 여기 여권 있습니다.",
            expressions: [{ phrase: "ソウル行きの便に乗ります", meaning: "서울행 항공편에 탑승합니다" }],
            vocabulary: [{ word: "行き(ゆき)", meaning: "~행 (목적지)" }, { word: "便(びん)", meaning: "항공편" }, { word: "乗る(のる)", meaning: "타다, 탑승하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "ありがとうございます。お座席のご希望はございますか？窓側と通路側、どちらがよろしいですか？",
            translation: "감사합니다. 희망하시는 좌석이 있으신가요? 창가석과 복도석 중 어느 쪽이 좋으신가요?",
            expressions: [{ phrase: "お座席のご希望はございますか？", meaning: "원하시는 좌석이 있으신가요?" }, { phrase: "窓側と通路側", meaning: "창가 쪽과 통로(복도) 쪽" }],
            vocabulary: [{ word: "座席(ざせき)", meaning: "좌석" }, { word: "希望(きぼう)", meaning: "희망" }, { word: "窓側(まどがわ)", meaning: "창가석" }, { word: "通路側(つうろがわ)", meaning: "복도석, 통로석" }]
          },
          {
            role: "승객", side: "right",
            text: "できるだけ前の方の通路側の席をお願いできますか？",
            translation: "가능한 한 앞쪽에 있는 복도석으로 부탁할 수 있을까요?",
            expressions: [{ phrase: "できるだけ前の方の通路側の席", meaning: "가능한 한 앞쪽의 복도 쪽 좌석" }],
            vocabulary: [{ word: "前(まえ)の方(ほう)", meaning: "앞쪽" }, { word: "席(せき)", meaning: "자리, 좌석" }, { word: "お願い(おねがい)する", meaning: "부탁하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "お調べいたします。翼のすぐ後ろになりますが、14Cの通路側のお席が空いております。こちらでよろしいですか？",
            translation: "확인해 보겠습니다. 날개 바로 뒤쪽이긴 한데 14C 복도석이 비어 있습니다. 이 자리로 해 드릴까요?",
            expressions: [{ phrase: "14Cの通路側のお席が空いております", meaning: "14C 복도 쪽 좌석이 비어 있습니다" }],
            vocabulary: [{ word: "調べる(しらべる)", meaning: "확인하다, 알아보다" }, { word: "翼(つばさ)", meaning: "(비행기) 날개" }, { word: "後ろ(うしろ)", meaning: "뒤쪽" }, { word: "空く(あく)", meaning: "(자리가) 비다" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、その席で大丈夫です。ありがとうございます！",
            translation: "네, 그 자리로 괜찮습니다. 감사합니다!",
            expressions: [{ phrase: "その席で大丈夫です", meaning: "그 좌석으로 괜찮습니다" }],
            vocabulary: [{ word: "大丈夫(だいじょうぶ)", meaning: "괜찮음, 문제없음" }]
          }
        ]
      },
      {
        id: 2,
        title: "위탁 수하물 무게 초과 문의하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "お預けになるお荷物はございますか？スーツケースをこちらの計りの上に乗せてください。",
            translation: "부치실 위탁 수하물이 있으신가요? 캐리어를 이 저울 위에 올려주세요.",
            expressions: [{ phrase: "お預けになるお荷物", meaning: "위탁하실 수하물(부치실 짐)" }, { phrase: "計りの上に乗せてください", meaning: "저울 위에 올려놓아 주세요" }],
            vocabulary: [{ word: "預ける(あずける)", meaning: "(짐을) 맡기다, 위탁하다" }, { word: "荷物(にもつ)", meaning: "짐, 수하물" }, { word: "計り(はかり)", meaning: "저울" }, { word: "上(うえ)", meaning: "위" }, { word: "乗せる(のせる)", meaning: "올려놓다" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、このスーツケース1つだけです。重さの制限は大丈夫でしょうか？",
            translation: "네, 이 캐리어 하나뿐입니다. 무게 제한은 괜찮을까요?",
            expressions: [{ phrase: "重さの制限は大丈夫でしょうか？", meaning: "무게 제한 이내인가요?" }],
            vocabulary: [{ word: "1つ(ひとつ)", meaning: "한 개" }, { word: "重さ(おもさ)", meaning: "무게" }, { word: "制限(せいげん)", meaning: "제한" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "恐れ入りますが、25キロございます。エコノミークラスの無料手荷物許容量は23キロまでですので、2キロ超過しております。",
            translation: "죄송하지만 25kg이 나가네요. 이코노미석 무료 수하물 허용량은 23kg까지라서 2kg 초과되었습니다.",
            expressions: [{ phrase: "2キロ超過しております", meaning: "무게가 2킬로그램 초과되었습니다" }],
            vocabulary: [{ word: "恐れ入ります(おそれいります)が", meaning: "죄송합니다만, 송구스럽지만" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "手荷物許容量(てにもつきょようりょう)", meaning: "수하물 허용 한도" }, { word: "超過(ちょうか)する", meaning: "초과하다" }]
          },
          {
            role: "승객", side: "right",
            text: "あ、超過料金はいくらですか？それとも、重い荷物を少し機内持ち込みのバッグに移してもいいですか？",
            translation: "아, 초과 요금은 얼마인가요? 아니면 무거운 짐을 조금 기내 반입 가방으로 옮겨 담아도 될까요?",
            expressions: [{ phrase: "超過料金はいくらですか？", meaning: "초과 수하물 요금은 얼마인가요?" }, { phrase: "機内持ち込みのバッグに移す", meaning: "기내 반입 가방으로 옮겨 담다" }],
            vocabulary: [{ word: "超過料金(ちょうかりょうきん)", meaning: "초과 요금" }, { word: "重い(おもい)", meaning: "무겁다" }, { word: "機内持ち込み(きないもちこみ)", meaning: "기내 반입" }, { word: "移す(うつす)", meaning: "옮기다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "超過料金は1万円かかりますので、リュックに余裕があれば2キロ分ほど移し替えることをおすすめします。",
            translation: "초과 요금이 1만 엔이나 나오기 때문에, 백팩에 여유가 있으시면 2kg 정도 옮겨 담으시는 걸 추천합니다.",
            expressions: [{ phrase: "リュックに余裕があれば", meaning: "배낭(백팩)에 공간 여유가 있다면" }],
            vocabulary: [{ word: "1万円(いちまんえん)", meaning: "1만 엔" }, { word: "余裕(よゆう)", meaning: "여유" }, { word: "移し替える(うつしかえる)", meaning: "바꿔 옮겨 담다" }]
          },
          {
            role: "승객", side: "right",
            text: "今、本と靴をリュックに移しました。これで22.5キロになったので大丈夫ですね！",
            translation: "방금 책과 신발을 백팩으로 옮겼습니다. 이제 22.5kg이 되었으니 괜찮네요!",
            expressions: [{ phrase: "本と靴をリュックに移しました", meaning: "책과 신발을 배낭으로 옮겼습니다" }],
            vocabulary: [{ word: "今(いま)", meaning: "방금, 지금" }, { word: "本(ほん)", meaning: "책" }, { word: "靴(くつ)", meaning: "신발" }]
          }
        ]
      },
      {
        id: 3,
        title: "기내 반입 금지 물품 확인하기",
        lines: [
          {
            role: "공항 직원", side: "left",
            text: "お預けのお荷物の中に、モバイルバッテリーや電子タバコ、ライターなどは入っておりませんか？",
            translation: "부치시는 위탁 수하물 안에 보조배터리나 전자담배, 라이터 등은 들어 있지 않나요?",
            expressions: [{ phrase: "モバイルバッテリーや電子タバコ", meaning: "보조배터리나 전자담배 (일본에서는 보조배터리를 モバイルバッテリー라고 부름)" }],
            vocabulary: [{ word: "中(なか)", meaning: "안, 내부" }, { word: "電子(でんし)タバコ", meaning: "전자담배" }, { word: "入る(はいる)", meaning: "들어가다" }]
          },
          {
            role: "승객", side: "right",
            text: "いいえ、モバイルバッテリーは機内持ち込みのカバンに入れました。ちなみに、150ミリリットルの日焼け止めはどうすればいいですか？",
            translation: "네, 보조배터리는 기내 반입 가방에 넣었습니다. 그런데 150mL짜리 선크림은 어떻게 해야 하나요?",
            expressions: [{ phrase: "150ミリリットルの日焼け止め", meaning: "150mL 용량의 자외선 차단제(선크림)" }],
            vocabulary: [{ word: "カバン", meaning: "가방 (鞄)" }, { word: "入れる(いれる)", meaning: "넣다" }, { word: "日焼け止め(ひやけどめ)", meaning: "선크림, 자외선 차단제" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "100ミリリットルを超える液体やクリーム類は機内に持ち込めませんので、必ず預け荷物にお入れください。",
            translation: "100mL를 초과하는 액체나 크림류는 기내에 반입할 수 없으므로 반드시 위탁 수하물에 넣으셔야 합니다.",
            expressions: [{ phrase: "100ミリリットルを超える液体", meaning: "100mL를 초과하는 액체류" }, { phrase: "機内に持ち込めません", meaning: "기내에 반입할(가지고 탈) 수 없습니다" }],
            vocabulary: [{ word: "超える(こえる)", meaning: "초과하다, 넘다" }, { word: "液体(えきたい)", meaning: "액체" }, { word: "必ず(かならず)", meaning: "반드시" }, { word: "預け荷物(あずけにもつ)", meaning: "위탁 수하물" }]
          },
          {
            role: "승객", side: "right",
            text: "聞いてよかったです！タグをつける前に、今すぐスーツケースの中にしまいますね。",
            translation: "물어보길 잘했네요! 수하물 태그를 붙이시기 전에 지금 바로 캐리어 안에 넣을게요.",
            expressions: [{ phrase: "聞いてよかったです！", meaning: "물어보길 정말 잘했네요!" }],
            vocabulary: [{ word: "聞く(きく)", meaning: "묻다, 질문하다" }, { word: "前(まえ)に", meaning: "~하기 전에" }, { word: "しまう", meaning: "(가방 안 등에) 집어넣다, 챙겨 넣다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "どうぞごゆっくり！ハサミや果物ナイフなどの刃物類もスーツケースの中に入っていますか？",
            translation: "네, 천천히 넣으세요! 가위나 과도 같은 칼날류도 캐리어 안에 들어 있나요?",
            expressions: [{ phrase: "ハサミや果物ナイフなどの刃物類", meaning: "가위나 과도 등의 도검·칼날류" }],
            vocabulary: [{ word: "果物(くだもの)ナイフ", meaning: "과도, 과일 칼" }, { word: "刃物類(はものるい)", meaning: "칼날류, 날붙이" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、爪切りもすべてスーツケースに入れました。これでファスナーを閉めたのでお願いします！",
            translation: "네, 손톱깎이도 전부 캐리어에 넣었습니다. 이제 지퍼를 닫았으니 부탁드립니다!",
            expressions: [{ phrase: "ファスナーを閉めたので", meaning: "지퍼를 닫았으니" }],
            vocabulary: [{ word: "爪切り(つめきり)", meaning: "손톱깎이" }, { word: "閉める(しめる)", meaning: "닫다, 잠그다" }]
          }
        ]
      },
      {
        id: 4,
        title: "보안 검색대 통과 및 안내받기",
        lines: [
          {
            role: "보안 요원", side: "left",
            text: "次の方どうぞ！機内持ち込みのお荷物と上着は、すべてこちらのトレイに載せてください。",
            translation: "다음 분 나오세요! 기내 반입 수하물과 겉옷은 모두 이 바구니(트레이)에 올려주세요.",
            expressions: [{ phrase: "次の方どうぞ！", meaning: "다음 분 오세요!" }, { phrase: "こちらのトレイに載せてください", meaning: "이 바구니(트레이)에 올려놓아 주세요" }],
            vocabulary: [{ word: "次(つぎ)の方(かた)", meaning: "다음 분" }, { word: "上着(うわぎ)", meaning: "겉옷, 외투" }, { word: "載せる(のせる)", meaning: "올려놓다" }]
          },
          {
            role: "승객", side: "right",
            text: "カバンの中からノートパソコンとタブレットを取り出す必要はありますか？",
            translation: "가방 안에서 노트북과 태블릿을 꺼내야 하나요?",
            expressions: [{ phrase: "カバンの中から〜を取り出す", meaning: "가방 속에서 ~을 밖으로 꺼내다" }],
            vocabulary: [{ word: "取り出す(とりだす)", meaning: "꺼내다" }, { word: "必要(ひつよう)", meaning: "필요" }]
          },
          {
            role: "보안 요원", side: "left",
            text: "はい、ノートパソコンやタブレット、液体の入った透明の袋はカバンから出して別のトレイに並べてください。",
            translation: "네, 노트북이나 태블릿, 액체류가 든 투명 지퍼백은 가방에서 꺼내어 별도의 바구니에 겹치지 않게 놓아주세요.",
            expressions: [{ phrase: "別のトレイに並べてください", meaning: "다른 바구니에 겹치지 않게 나란히 놓아주세요" }],
            vocabulary: [{ word: "透明(とうめい)", meaning: "투명" }, { word: "袋(ふくろ)", meaning: "봉투, 지퍼백" }, { word: "出す(だす)", meaning: "꺼내다" }, { word: "別(べつ)の", meaning: "별도의, 다른" }, { word: "並べる(ならべる)", meaning: "나란히 놓다" }]
          },
          {
            role: "승객", side: "right",
            text: "分かりました。スニーカーやベルトも外した方がいいですか？",
            translation: "알겠습니다. 운동화나 벨트도 벗는 게 좋나요?",
            expressions: [{ phrase: "スニーカーやベルトも外した方がいいですか？", meaning: "운동화나 벨트도 벗는(푸는) 편이 좋나요?" }],
            vocabulary: [{ word: "外す(はずす)", meaning: "(벨트·시계·안경 등을) 풀다, 벗다" }]
          },
          {
            role: "보안 요원", side: "left",
            text: "スニーカーはそのままで結構ですが、金属のバックルがついたベルトとポケットの中の小銭や鍵はすべて出してください。",
            translation: "운동화는 그대로 신으셔도 되지만, 금속 버클이 달린 벨트와 주머니 속 동전이나 열쇠는 모두 꺼내 주세요.",
            expressions: [{ phrase: "そのままで結構です", meaning: "그대로 두셔도(신고 계셔도) 괜찮습니다" }],
            vocabulary: [{ word: "結構(けっこう)", meaning: "괜찮음" }, { word: "金属(きんぞく)", meaning: "금속" }, { word: "小銭(こぜに)", meaning: "동전, 잔돈" }, { word: "鍵(かぎ)", meaning: "열쇠" }]
          },
          {
            role: "승객", side: "right",
            text: "ポケットの中はすべて空にしました。今ゲートを通ってもいいですか？",
            translation: "주머니 속은 완전히 다 비웠습니다. 지금 검색 게이트를 통과해도 될까요?",
            expressions: [{ phrase: "ポケットの中はすべて空にしました", meaning: "주머니 안을 전부 비웠습니다" }, { phrase: "ゲートを通ってもいいですか？", meaning: "보안 검색 게이트를 지나가도 될까요?" }],
            vocabulary: [{ word: "空(から)にする", meaning: "비우다" }, { word: "通る(とおる)", meaning: "통과하다, 지나가다" }]
          }
        ]
      },
      {
        id: 5,
        title: "탑승구 위치 및 이동 시간 묻기",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、24番搭乗口へはどのように行けばいいですか？",
            translation: "실례합니다, 24번 탑승구로 가려면 어떻게 가야 하나요?",
            expressions: [{ phrase: "24番搭乗口へはどのように行けばいいですか？", meaning: "24번 탑승구(게이트)로는 어떻게 가면 되나요?" }],
            vocabulary: [{ word: "24番(にじゅうよんばん)", meaning: "24번" }, { word: "搭乗口(とうじょうぐち)", meaning: "탑승구, 게이트" }, { word: "行く(いく)", meaning: "가다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "24番搭乗口はサテライト棟にございますので、連絡バスまたは動く歩道をご利用ください。",
            translation: "24번 탑승구는 탑승동(별관)에 있으므로, 셔틀 연락 버스나 무빙워크를 이용해 주세요.",
            expressions: [{ phrase: "サテライト棟にございます", meaning: "별관 탑승동에 있습니다" }],
            vocabulary: [{ word: "サテライト棟(とう)", meaning: "탑승동, 별관 터미널" }, { word: "連絡(れんらく)バス", meaning: "터미널 간 연결 셔틀버스" }, { word: "動く歩道(うごくほどう)", meaning: "무빙워크" }, { word: "利用(りよう)する", meaning: "이용하다" }]
          },
          {
            role: "승객", side: "right",
            text: "そうなんですね。ここから24番ゲートまで歩いてどれくらいかかりますか？",
            translation: "그렇군요. 여기서 24번 게이트까지 걸어서 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "歩いてどれくらいかかりますか？", meaning: "걸어서 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "歩く(あるく)", meaning: "걷다" }, { word: "かかる", meaning: "(시간이) 걸리다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "少し距離がございますので、動く歩道を使っても12分から15分ほどかかります。",
            translation: "거리가 좀 있어서 무빙워크를 이용하셔도 12분에서 15분 정도 걸립니다.",
            expressions: [{ phrase: "少し距離がございます", meaning: "거리가 꽤 있습니다" }],
            vocabulary: [{ word: "少し(すこし)", meaning: "조금, 다소" }, { word: "距離(きょり)", meaning: "거리" }, { word: "使う(つかう)", meaning: "사용하다" }, { word: "12分(じゅうにふん)", meaning: "12분" }]
          },
          {
            role: "승객", side: "right",
            text: "結構遠いのですね。どの方向へ進めばいいですか？",
            translation: "꽤 멀군요. 어느 방향으로 가면 되나요?",
            expressions: [{ phrase: "どの方向へ進めばいいですか？", meaning: "어느 방향으로 나아가면 되나요?" }],
            vocabulary: [{ word: "結構(けっこう)", meaning: "꽤, 상당히" }, { word: "遠い(とおい)", meaning: "멀다" }, { word: "方向(ほうこう)", meaning: "방향" }, { word: "進む(すすむ)", meaning: "나아가다, 가다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "あちらの免税店の前をまっすぐ進んで、案内表示に従って右に曲がってください。",
            translation: "저기 면세점 앞을 곧장 지나가셔서 안내 표지판을 따라 오른쪽으로 도시면 됩니다.",
            expressions: [{ phrase: "案内表示に従って右に曲がる", meaning: "안내 표지판을 따라 오른쪽으로 돌다" }],
            vocabulary: [{ word: "免税店(めんぜいてん)", meaning: "면세점" }, { word: "前(まえ)", meaning: "앞" }, { word: "案内表示(あんないひょうじ)", meaning: "안내 표지판" }, { word: "従う(したがう)", meaning: "따르다" }, { word: "右(みぎ)", meaning: "오른쪽" }, { word: "曲がる(まがる)", meaning: "돌다, 꺾다" }]
          }
        ]
      },
      {
        id: 6,
        title: "항공편 지연 및 게이트 변경 확인",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、JL123便に乗るのですが、電光掲示板に「遅延」と出ています。何時ごろ搭乗が始まりますか？",
            translation: "실례합니다, JL123편을 타는데 전광판에 '지연'이라고 떠 있습니다. 몇 시쯤 탑승이 시작되나요?",
            expressions: [{ phrase: "電光掲示板に「遅延」と出ています", meaning: "안내 전광판에 '지연(Delayed)'이라고 표시되어 있습니다" }],
            vocabulary: [{ word: "電光掲示板(でんこうけいじばん)", meaning: "전광판" }, { word: "遅延(ちえん)", meaning: "지연, 연착" }, { word: "何時(なんじ)ごろ", meaning: "몇 시쯤" }, { word: "搭乗(とうじょう)", meaning: "탑승" }, { word: "始まる(はじまる)", meaning: "시작되다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "ご迷惑をおかけし申し訳ございません。使用機到着遅れのため、出発が1時間ほど遅れております。",
            translation: "불편을 끼쳐 드려 죄송합니다. 연결 항공기 도착 지연으로 인해 출발이 1시간 정도 늦어지고 있습니다.",
            expressions: [{ phrase: "使用機到着遅れのため", meaning: "사용할 항공기의 도착 지연으로 인해 (일본 공항 안내방송 단골 표현)" }],
            vocabulary: [{ word: "使用機(しようき)", meaning: "운항에 사용할 항공기" }, { word: "到着遅れ(とうちゃくおくれ)", meaning: "도착 지연" }, { word: "出発(しゅっぱつ)", meaning: "출발" }, { word: "1時間(いちじかん)", meaning: "1시간" }, { word: "遅れる(おくれる)", meaning: "늦어지다" }]
          },
          {
            role: "승객", side: "right",
            text: "搭乗口も変更になりましたか？それともそのまま12番ゲートですか？",
            translation: "탑승구도 변경되었나요? 아니면 그대로 12번 게이트인가요?",
            expressions: [{ phrase: "搭乗口も変更になりましたか？", meaning: "탑승구(게이트)도 변경되었나요?" }],
            vocabulary: [{ word: "搭乗口(とうじょうぐち)", meaning: "탑승구" }, { word: "変更(へんこう)", meaning: "변경" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "はい、搭乗口も12番から18番ゲートに変更となりました。ここから歩いて3分ほどの場所です。",
            translation: "네, 탑승구도 12번에서 18번 게이트로 변경되었습니다. 여기서 걸어서 3분 정도 거리에 있는 곳입니다.",
            expressions: [{ phrase: "12番から18番ゲートに変更となりました", meaning: "12번에서 18번 게이트로 변경되었습니다" }],
            vocabulary: [{ word: "歩いて(あるいて)", meaning: "걸어서" }, { word: "3分(さんぷん)ほど", meaning: "3분 정도" }, { word: "場所(ばしょ)", meaning: "장소, 곳" }]
          },
          {
            role: "승객", side: "right",
            text: "教えてくださってありがとうございます。遅延のお詫びの食事券などは配られていますか？",
            translation: "알려주셔서 감사합니다. 지연 보상용 식권 같은 것이 배부되고 있나요?",
            expressions: [{ phrase: "食事券などは配られていますか？", meaning: "식사 바우처(식권) 등이 배부되고 있나요?" }],
            vocabulary: [{ word: "お詫び(わび)", meaning: "사과, 양해" }, { word: "食事券(しょくじけん)", meaning: "식권, 식사 쿠폰" }, { word: "配られる(くばられる)", meaning: "배부되다, 나눠주다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "はい、搭乗券をご提示いただければ、空港内の飲食店で使える1,500円分のミールクーポンをお渡しいたします。",
            translation: "네, 탑승권을 제시해 주시면 공항 내 식당에서 쓸 수 있는 1,500엔 상당의 밀쿠폰(식사권)을 드리겠습니다.",
            expressions: [{ phrase: "搭乗券をご提示いただければ", meaning: "탑승권을 제시해(보여) 주시면" }],
            vocabulary: [{ word: "搭乗券(とうじょうけん)", meaning: "탑승권" }, { word: "提示(ていじ)する", meaning: "제시하다" }, { word: "空港内(くうこうない)", meaning: "공항 내" }, { word: "飲食店(いんしょくてん)", meaning: "음식점, 식당" }, { word: "渡す(わたす)", meaning: "건네주다" }]
          }
        ]
      },
      {
        id: 7,
        title: "면세점 구매 한도 및 탑승권 제시",
        lines: [
          {
            role: "승객", side: "right",
            text: "このウイスキーと化粧品のセットを買いたいのですが、2つ買うと割引はありますか？",
            translation: "이 위스키와 화장품 세트를 사고 싶은데요, 두 개를 사면 할인이 있나요?",
            expressions: [{ phrase: "2つ買うと割引はありますか？", meaning: "두 개를 구매하면 할인이 적용되나요?" }],
            vocabulary: [{ word: "化粧品(けしょうひん)", meaning: "화장품" }, { word: "買う(かう)", meaning: "사다" }, { word: "割引(わりびき)", meaning: "할인" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "はい、2点以上お買い上げで10パーセント割引になります！パスポートと搭乗券を拝見できますか？",
            translation: "네, 2개 이상 구매하시면 10% 할인이 됩니다! 여권과 탑승권을 보여주시겠어요?",
            expressions: [{ phrase: "2点以上お買い上げで", meaning: "2개(2점) 이상 구매 시" }],
            vocabulary: [{ word: "2点以上(にてんいじょう)", meaning: "2개(2점) 이상" }, { word: "お買い上げ(かいあげ)", meaning: "구매, 구입 (높임말)" }, { word: "搭乗券(とうじょうけん)", meaning: "탑승권" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、どうぞ。このウイスキーは700ミリリットルですが、機内にそのまま持ち込めますか？",
            translation: "네, 여기 있습니다. 이 위스키는 700mL인데 비행기 안에 그대로 들고 탈 수 있나요?",
            expressions: [{ phrase: "機内にそのまま持ち込めますか？", meaning: "기내에 그대로 반입할 수 있나요?" }],
            vocabulary: [{ word: "機内(きない)", meaning: "기내" }, { word: "持ち込む(もちこむ)", meaning: "반입하다, 가지고 들어가다" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "ソウルまでの直行便ですね。それでしたら、そのまま機内にお持ち込みいただけます。乗り継ぎ便はございませんか？",
            translation: "서울까지 가는 직항편이시군요. 그렇다면 그대로 기내에 들고 타실 수 있습니다. 경유(환승)편은 없으시죠?",
            expressions: [{ phrase: "ソウルまでの直行便", meaning: "서울행 직항편" }, { phrase: "乗り継ぎ便はございませんか？", meaning: "갈아타는 환승(경유)편은 없으신가요?" }],
            vocabulary: [{ word: "直行便(ちょっこうびん)", meaning: "직항편" }, { word: "乗り継ぎ便(のりつぎびん)", meaning: "환승편, 경유편" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、直行便です。韓国への酒類の免税範囲にも収まりますよね？",
            translation: "네, 직항편입니다. 한국 입국 시 주류 면세 한도에도 들어가는 거죠?",
            expressions: [{ phrase: "酒類の免税範囲にも収まりますよね？", meaning: "주류 면세 한도 범위 내에도 들어가는 거죠?" }],
            vocabulary: [{ word: "韓国(かんこく)", meaning: "한국" }, { word: "酒類(しゅるい)", meaning: "주류, 술" }, { word: "免税範囲(めんぜいはんい)", meaning: "면세 범위(한도)" }, { word: "収まる(おさまる)", meaning: "(범위 안에) 들어가다" }]
          },
          {
            role: "면세점 직원", side: "left",
            text: "はい、2リットル以下ですので免税範囲内です。専用の密封袋にお入れしますので、到着するまで絶対に開封しないでください。",
            translation: "네, 2리터 이하라서 면세 한도 이내입니다. 전용 밀봉 봉투에 넣어 드릴 테니 도착하실 때까지 절대 개봉하지 마세요.",
            expressions: [{ phrase: "到着するまで絶対に開封しないでください", meaning: "최종 목적지에 도착할 때까지 절대 뜯지(개봉하지) 마십시오" }],
            vocabulary: [{ word: "以下(いか)", meaning: "이하" }, { word: "専用(せんよう)", meaning: "전용" }, { word: "密封袋(みっぷうぶくろ)", meaning: "밀봉 보안 봉투" }, { word: "到着(とうちゃく)", meaning: "도착" }, { word: "開封(かいふう)する", meaning: "개봉하다, 봉투를 뜯다" }]
          }
        ]
      },
      {
        id: 8,
        title: "라운지 위치 및 이용 가능 여부 확인",
        lines: [
          {
            role: "승객", side: "right",
            text: "こんにちは。プライオリティ・パスでこの空港ラウンジを利用できますか？",
            translation: "안녕하세요. 프라이어리티 패스(PP카드)로 이 공항 라운지를 이용할 수 있나요?",
            expressions: [{ phrase: "この空港ラウンジを利用できますか？", meaning: "이 공항 라운지를 이용할 수 있나요?" }],
            vocabulary: [{ word: "空港(くうこう)ラウンジ", meaning: "공항 라운지" }, { word: "利用(りよう)する", meaning: "이용하다" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "いらっしゃいませ！はい、ご利用いただけます。プライオリティ・パスと当日の搭乗券を拝見いたします。",
            translation: "어서 오세요! 네, 이용하실 수 있습니다. 프라이어리티 패스와 당일 탑승권을 보여주시겠어요?",
            expressions: [{ phrase: "当日の搭乗券を拝見いたします", meaning: "당일 탑승권을 확인하겠습니다" }],
            vocabulary: [{ word: "当日(とうじつ)", meaning: "당일, 오늘" }, { word: "搭乗券(とうじょうけん)", meaning: "탑승권" }, { word: "拝見(はいけん)する", meaning: "보다, 확인하다" }]
          },
          {
            role: "승객", side: "right",
            text: "スマホアプリのデジタル会員証です。子ども1人も同伴者として一緒に入れますか？",
            translation: "스마트폰 앱에 있는 디지털 회원증입니다. 아이 1명도 동반자로 함께 들어갈 수 있나요?",
            expressions: [{ phrase: "子ども1人も同伴者として一緒に入れますか？", meaning: "어린이 1명도 동반인으로 함께 입장할 수 있나요?" }],
            vocabulary: [{ word: "会員証(かいいんしょう)", meaning: "회원증, 멤버십 카드" }, { word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "同伴者(どうはんしゃ)", meaning: "동반자, 동반인" }, { word: "入る(はいる)", meaning: "들어가다, 입장하다" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "はい、6歳未満のお子様は無料でご入場いただけます。最大3時間までご利用可能です。",
            translation: "네, 만 6세 미만 어린이는 무료로 입장하실 수 있습니다. 최대 3시간까지 이용 가능합니다.",
            expressions: [{ phrase: "6歳未満のお子様は無料でご入場いただけます", meaning: "만 6세 미만 어린이는 무료로 입장하실 수 있습니다" }],
            vocabulary: [{ word: "6歳未満(ろくさいみまん)", meaning: "6세 미만" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "入場(にゅうじょう)", meaning: "입장" }, { word: "最大(さいだい)", meaning: "최대" }]
          },
          {
            role: "승객", side: "right",
            text: "ありがとうございます！シャワー室も借りられますか？",
            translation: "감사합니다! 혹시 샤워실도 빌려 쓸 수 있나요?",
            expressions: [{ phrase: "シャワー室も借りられますか？", meaning: "샤워실도 이용할(빌릴) 수 있나요?" }],
            vocabulary: [{ word: "シャワー室(しつ)", meaning: "샤워실" }, { word: "借りる(かりる)", meaning: "빌리다, 대여하다" }]
          },
          {
            role: "라운지 직원", side: "left",
            text: "はい、ただいま2番のシャワー室が空いております。こちらが鍵と新しいバスタオルのセットです。",
            translation: "네, 마침 지금 2번 샤워실이 비어 있습니다. 여기 샤워실 열쇠와 새 목욕 수건 세트입니다.",
            expressions: [{ phrase: "ただいま2番のシャワー室が空いております", meaning: "지금 2번 샤워실이 비어 있습니다" }],
            vocabulary: [{ word: "空く(あく)", meaning: "(방·자리가) 비다" }, { word: "鍵(かぎ)", meaning: "열쇠, 카드키" }, { word: "新しい(あたらしい)", meaning: "새로운, 깨끗한" }]
          }
        ]
      },
      {
        id: 9,
        title: "기내 좌석 변경 정중히 요청하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、少しお時間よろしいでしょうか？座席のことで相談したいのですが。",
            translation: "실례합니다, 잠시 시간 괜찮으실까요? 좌석 문제로 상의드리고 싶은데요.",
            expressions: [{ phrase: "少しお時間よろしいでしょうか？", meaning: "잠시 시간 괜찮으신가요? (바쁜 승무원에게 정중히 말을 걸 때)" }],
            vocabulary: [{ word: "時間(じかん)", meaning: "시간" }, { word: "座席(ざせき)", meaning: "좌석" }, { word: "相談(そうだん)する", meaning: "상담하다, 상의하다" }]
          },
          {
            role: "승무원", side: "left",
            text: "はい、どのようなご用件でしょうか？",
            translation: "네, 어떤 용건이신가요?",
            expressions: [{ phrase: "どのようなご用件でしょうか？", meaning: "무엇을 도와드릴까요?" }],
            vocabulary: [{ word: "用件(ようけん)", meaning: "용건" }]
          },
          {
            role: "승객", side: "right",
            text: "子どもと席が前後に離れてしまいまして、搭乗が終わった後にもし2席並んだ空席があれば移ってもいいですか？",
            translation: "아이와 좌석이 앞뒤로 떨어져 배정되어서 그러는데, 탑승이 끝난 뒤에 혹시 나란히 비어 있는 두 자리가 있으면 옮겨도 될까요?",
            expressions: [{ phrase: "席が前後に離れてしまいまして", meaning: "좌석이 앞뒤로 떨어지게 되어서" }, { phrase: "2席並んだ空席があれば", meaning: "나란히 붙어 있는 빈자리 2석이 있다면" }],
            vocabulary: [{ word: "前後(ぜんご)", meaning: "앞뒤" }, { word: "離れる(はなれる)", meaning: "떨어지다" }, { word: "搭乗(とうじょう)", meaning: "탑승" }, { word: "終わる(おわる)", meaning: "끝나다" }, { word: "並ぶ(ならぶ)", meaning: "나란히 서다(배열되다)" }, { word: "空席(くうせき)", meaning: "빈자리, 공석" }]
          },
          {
            role: "승무원", side: "left",
            text: "お子様とご一緒ですと隣同士が安心ですよね！ちょうど今ドアが閉まりましたので、空席を確認してまいります。",
            translation: "아이와 함께 타셨으면 옆자리에 같이 앉으셔야 안심이 되시죠! 마침 지금 기내 문이 닫혔으니 빈자리를 확인해 오겠습니다.",
            expressions: [{ phrase: "ちょうど今ドアが閉まりましたので", meaning: "마침 방금 출입문이 닫혔기 때문에 (탑승 마감 후 좌석 이동 가능 시점)" }],
            vocabulary: [{ word: "隣同士(となりどうし)", meaning: "서로 옆자리, 나란히 앉음" }, { word: "閉まる(しまる)", meaning: "닫히다" }, { word: "確認(かくにん)する", meaning: "확인하다" }]
          },
          {
            role: "승무원", side: "left",
            text: "お待たせいたしました。後方の36列目の窓側と真ん中の2席が空いておりますので、そちらへご移動いただけますよ。",
            translation: "오래 기다리셨습니다. 뒤쪽 36열의 창가석과 가운데 좌석 두 자리가 비어 있으니 그쪽으로 이동하셔도 됩니다.",
            expressions: [{ phrase: "後方の36列目の窓側", meaning: "뒤쪽 36열의 창가 쪽 좌석" }],
            vocabulary: [{ word: "後方(こうほう)", meaning: "후방, 뒤쪽" }, { word: "36列目(さんじゅうろくれつめ)", meaning: "36열" }, { word: "真ん中(まんなか)", meaning: "한가운데" }, { word: "移動(いどう)", meaning: "이동" }]
          },
          {
            role: "승객", side: "right",
            text: "本当ですか？配慮してくださって本当にありがとうございます！",
            translation: "정말인가요? 배려해 주셔서 정말 감사합니다!",
            expressions: [{ phrase: "配慮してくださって本当にありがとうございます", meaning: "세심하게 배려해 주셔서 대단히 감사합니다" }],
            vocabulary: [{ word: "本当(ほんとう)", meaning: "정말, 진짜" }, { word: "配慮(はいりょ)する", meaning: "배려하다" }]
          }
        ]
      },
      {
        id: 10,
        title: "기내식 메뉴 선택 및 음료 요청",
        lines: [
          {
            role: "승무원", side: "left",
            text: "お待たせいたしました。本日のお食事は、牛肉の赤ワイン煮込みと、鶏肉の照り焼き丼の2種類でございます。どちらになさいますか？",
            translation: "기다리셨습니다. 오늘 기내식은 소고기 레드와인 조림과 치킨 데리야키 덮밥 두 종류입니다. 어느 것으로 하시겠어요?",
            expressions: [{ phrase: "どちらになさいますか？", meaning: "두 메뉴 중 어느 것으로 하시겠습니까?" }],
            vocabulary: [{ word: "食事(しょくじ)", meaning: "식사, 기내식" }, { word: "牛肉(ぎゅうにく)", meaning: "소고기" }, { word: "煮込み(にこみ)", meaning: "조림, 스튜" }, { word: "鶏肉(とりにく)", meaning: "닭고기" }, { word: "照り焼き丼(てりやきどん)", meaning: "데리야키 덮밥" }]
          },
          {
            role: "승객", side: "right",
            text: "私は牛肉の煮込みをお願いします。子どもには鶏肉の照り焼き丼をいただけますか？",
            translation: "저는 소고기 조림으로 부탁합니다. 아이에게는 치킨 데리야키 덮밥을 주시겠어요?",
            expressions: [{ phrase: "私は〜をお願いします", meaning: "저는 ~(메뉴)로 부탁합니다" }],
            vocabulary: [{ word: "私(わたし)", meaning: "저, 나" }, { word: "子ども(こども)", meaning: "아이, 어린이" }]
          },
          {
            role: "승무원", side: "left",
            text: "かしこまりました。容器が熱くなっておりますのでご注意ください。お飲み物はいかがなさいますか？",
            translation: "알겠습니다. 용기가 뜨거우니 주의해 주세요. 마실 음료는 무엇으로 드릴까요?",
            expressions: [{ phrase: "容器が熱くなっておりますのでご注意ください", meaning: "기내식 용기가 뜨거우니 조심해 주십시오" }],
            vocabulary: [{ word: "容器(ようき)", meaning: "용기, 그릇" }, { word: "熱い(あつい)", meaning: "뜨겁다" }, { word: "注意(ちゅうい)する", meaning: "주의하다, 조심하다" }, { word: "飲み物(のみもの)", meaning: "음료, 마실 것" }]
          },
          {
            role: "승객", side: "right",
            text: "ジンジャーエールを氷なしで1つと、子ども用にリンゴジュースをいただけますか？",
            translation: "진저에일을 얼음 없이 한 잔 주시고, 아이가 마실 사과 주스도 한 잔 주실 수 있나요?",
            expressions: [{ phrase: "ジンジャーエールを氷なしで", meaning: "진저에일을 얼음 빼고" }],
            vocabulary: [{ word: "氷(こおり)なし", meaning: "얼음 없음" }, { word: "子ども用(こどもよう)", meaning: "어린이용" }]
          },
          {
            role: "승무원", side: "left",
            text: "はい、どうぞ！お子様のリンゴジュースには、揺れてもこぼれないようにフタとストローをお付けしました。",
            translation: "네, 여기 있습니다! 어린이용 사과 주스에는 기체가 흔들려도 쏟아지지 않게 뚜껑과 빨대를 꽂아 드렸습니다.",
            expressions: [{ phrase: "揺れてもこぼれないように", meaning: "비행기가 흔들려도 쏟아지지 않도록" }],
            vocabulary: [{ word: "揺れる(ゆれる)", meaning: "흔들리다" }, { word: "こぼれる", meaning: "쏟아지다, 흘러넘치다" }, { word: "付ける(つける)", meaning: "부착하다, 끼우다" }]
          },
          {
            role: "승객", side: "right",
            text: "お気遣いありがとうございます！後で寒くなったときのために、ブランケットも1枚いただけますか？",
            translation: "세심한 배려 감사합니다! 이따 추워질 때를 대비해서 담요도 한 장 주실 수 있나요?",
            expressions: [{ phrase: "お気遣いありがとうございます", meaning: "배려해 주셔서(신경 써 주셔서) 감사합니다" }],
            vocabulary: [{ word: "気遣い(きづかい)", meaning: "배려, 마음씀" }, { word: "寒い(さむい)", meaning: "춥다" }, { word: "1枚(いちまい)", meaning: "(담요·종이 등) 한 장" }]
          }
        ]
      },
      {
        id: 11,
        title: "기내 면세품 구매 및 입국신고서 요청",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、機内免税品の販売はまだ行っていますか？",
            translation: "실례합니다, 기내 면세품 판매는 아직 하고 있나요?",
            expressions: [{ phrase: "機内免税品の販売", meaning: "기내 면세품 판매" }],
            vocabulary: [{ word: "機内免税品(きないめんぜいひん)", meaning: "기내 면세품" }, { word: "販売(はんばい)", meaning: "판매" }, { word: "行う(おこなう)", meaning: "행하다, 진행하다" }]
          },
          {
            role: "승무원", side: "left",
            text: "はい、着陸態勢に入る30分前まで承っております。ご希望の商品はございますか？",
            translation: "네, 착륙 태세에 들어가기 30분 전까지 주문을 받고 있습니다. 원하시는 상품이 있으신가요?",
            expressions: [{ phrase: "着陸態勢に入る30分前まで", meaning: "착륙 준비에 들어가기 30분 전까지" }],
            vocabulary: [{ word: "着陸態勢(ちゃくりくたいせい)", meaning: "착륙 태세(준비)" }, { word: "承る(うけたまわる)", meaning: "(주문을) 받다 (겸양어)" }, { word: "商品(しょうひん)", meaning: "상품" }]
          },
          {
            role: "승객", side: "right",
            text: "カタログの24ページにある、このリップバームの3本セットをください。カードで払えますか？",
            translation: "카탈로그 24쪽에 있는 이 립밤 3개입 세트를 주세요. 카드로 결제할 수 있나요?",
            expressions: [{ phrase: "カードで払えますか？", meaning: "신용카드로 지불(결제)할 수 있나요?" }],
            vocabulary: [{ word: "3本セット(さんぼんせっと)", meaning: "3개입 세트" }, { word: "払う(はらう)", meaning: "지불하다" }]
          },
          {
            role: "승무원", side: "left",
            text: "はい、ICチップ付きのクレジットカードがご利用いただけます。在庫を確認してまいりますね。",
            translation: "네, IC칩이 부착된 실물 신용카드를 이용하실 수 있습니다. 재고를 확인해 오겠습니다.",
            expressions: [{ phrase: "在庫を確認してまいります", meaning: "재고를 확인하고 오겠습니다" }],
            vocabulary: [{ word: "ICチップ付き(つき)", meaning: "IC칩이 달린" }, { word: "在庫(ざいこ)", meaning: "재고" }]
          },
          {
            role: "승객", side: "right",
            text: "ありがとうございます！あと、戻ってこられるときに、入国審査カードと税関申告書もいただけますか？",
            translation: "감사합니다! 그리고 돌아오실 때 입국신고서와 세관신고서도 함께 주실 수 있나요?",
            expressions: [{ phrase: "入国審査カードと税関申告書", meaning: "입국신고서(외국인 입국기록카드)와 세관신고서" }],
            vocabulary: [{ word: "戻る(もどる)", meaning: "돌아오다" }, { word: "入国審査(にゅうこくしんさ)カード", meaning: "입국신고서" }, { word: "税関申告書(ぜいかんしんこくしょ)", meaning: "세관신고서" }]
          },
          {
            role: "승무원", side: "left",
            text: "かしこまりました！入国カードはお一人様1枚ずつ、税関申告書はご家族で1枚ご記入ください。ペンもお貸ししましょうか？",
            translation: "알겠습니다! 입국카드는 한 분당 1장씩, 세관신고서는 가족당 1장만 작성해 주세요. 볼펜도 빌려드릴까요?",
            expressions: [{ phrase: "お一人様1枚ずつ、ご家族で1枚", meaning: "1인당 1장씩, 한 가족당 1장" }],
            vocabulary: [{ word: "ご家族(かぞく)", meaning: "가족분" }, { word: "記入(きにゅう)する", meaning: "기입하다, 작성하다" }, { word: "貸す(かす)", meaning: "빌려주다" }]
          }
        ]
      },
      {
        id: 12,
        title: "환승 게이트 및 연결편 시간 문의",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません！前の便が少し遅れて到着したのですが、札幌行きの国内線への乗り継ぎ時間がギリギリなんです。",
            translation: "실례합니다! 이전 비행기가 조금 늦게 도착해서, 삿포로행 국내선 환승 시간이 아주 촉박해요.",
            expressions: [{ phrase: "乗り継ぎ時間がギリギリなんです", meaning: "환승 연결 시간이 아슬아슬(촉박)합니다" }],
            vocabulary: [{ word: "前(まえ)の便(びん)", meaning: "이전 항공편" }, { word: "遅れる(おくれる)", meaning: "늦다, 지연되다" }, { word: "札幌行き(さっぽろゆき)", meaning: "삿포로행" }, { word: "国内線(こくないせん)", meaning: "국내선" }, { word: "乗り継ぎ(のりつぎ)", meaning: "환승" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "搭乗券を拝見いたします。札幌行きのNH55便ですね。出発まであと45分ございます。",
            translation: "탑승권을 확인하겠습니다. 삿포로행 NH55편이시군요. 출발까지 아직 45분 남아 있습니다.",
            expressions: [{ phrase: "出発まであと45分ございます", meaning: "출발 시각까지 앞으로 45분 남았습니다" }],
            vocabulary: [{ word: "出発(しゅっぱつ)", meaning: "출발" }, { word: "45分(よんじゅうごふん)", meaning: "45분" }]
          },
          {
            role: "승객", side: "right",
            text: "預けた荷物はここで一度受け取って、もう一度預け直す必要がありますか？",
            translation: "위탁한 수하물은 여기서 일단 찾은 뒤에 다시 부쳐야 하나요?",
            expressions: [{ phrase: "一度受け取って、もう一度預け直す", meaning: "한 번 수령한 뒤 다시 위탁 수속을 하다" }],
            vocabulary: [{ word: "預ける(あずける)", meaning: "(짐을) 부치다" }, { word: "一度(いちど)", meaning: "한 번, 일단" }, { word: "受け取る(うけとる)", meaning: "찾다, 수령하다" }, { word: "預け直す(あずけなおす)", meaning: "다시 부치다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "国際線から国内線への乗り継ぎですので、一度手荷物を受け取って税関を通り、すぐ横の国内線乗り継ぎカウンターでお預けください。",
            translation: "국제선에서 국내선으로 갈아타시는 경우라, 일단 짐을 찾아 세관을 통과하신 뒤 바로 옆 국내선 환승 카운터에 다시 맡기셔야 합니다.",
            expressions: [{ phrase: "国際線から国内線への乗り継ぎ", meaning: "국제선에서 국내선으로의 환승 (일본 등 대다수 국가에서 입국 세관 통과를 위해 짐을 찾음)" }],
            vocabulary: [{ word: "手荷物(てにもつ)", meaning: "수하물" }, { word: "税関(ぜいかん)", meaning: "세관" }, { word: "通る(とおる)", meaning: "통과하다" }, { word: "すぐ横(よこ)", meaning: "바로 옆" }]
          },
          {
            role: "승객", side: "right",
            text: "分かりました！急いで行くには、どの優先レーンを通ればいいですか？",
            translation: "알겠습니다! 빨리 가려면 어느 우선 통로(패스트트랙)로 가면 되나요?",
            expressions: [{ phrase: "どの優先レーンを通ればいいですか？", meaning: "어느 우선 통과 레인을 이용하면 되나요?" }],
            vocabulary: [{ word: "急ぐ(いそぐ)", meaning: "서두르다" }, { word: "優先(ゆうせん)レーン", meaning: "우선 통로 (익스프레스 레인)" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "このオレンジ色の「乗り継ぎ優先ステッカー」を胸に貼ってください。保安検査場を優先的に通過できます！",
            translation: "이 주황색 '환승 우선 스티커'를 가슴 쪽에 붙여 주세요. 보안 검색대를 대기 없이 우선 통과하실 수 있습니다!",
            expressions: [{ phrase: "保安検査場を優先的に通過できます", meaning: "보안 검색대를 우선적으로 통과할 수 있습니다" }],
            vocabulary: [{ word: "胸(むね)", meaning: "가슴" }, { word: "貼る(はる)", meaning: "붙이다" }, { word: "優先的(ゆうせんてき)に", meaning: "우선적으로" }, { word: "通過(つうか)する", meaning: "통과하다" }]
          }
        ]
      },
      {
        id: 13,
        title: "입국 심사대에서 방문 목적 답하기",
        lines: [
          {
            role: "입국 심사관", side: "left",
            text: "次の方、どうぞ。ご家族ご一緒でしたら、ご一緒に審査ブースへお進みください。",
            translation: "다음 분 오세요. 가족분이 함께 오셨으면 심사 부스로 같이 나오셔도 됩니다.",
            expressions: [{ phrase: "ご家族ご一緒でしたら", meaning: "가족이 함께 여행 중이시라면" }],
            vocabulary: [{ word: "次(つぎ)の方(かた)", meaning: "다음 분" }, { word: "一緒(いっしょ)", meaning: "함께" }, { word: "審査(しんさ)ブース", meaning: "입국 심사 부스(창구)" }, { word: "進む(すすむ)", meaning: "나아가다, 오다" }]
          },
          {
            role: "승객", side: "right",
            text: "こんにちは。家族3人分のパスポートと入国カードです。",
            translation: "안녕하세요. 저희 가족 3명의 여권과 입국신고서입니다.",
            expressions: [{ phrase: "家族3人分のパスポート", meaning: "가족 3명분의 여권" }],
            vocabulary: [{ word: "家族(かぞく)", meaning: "가족" }, { word: "3人分(さんにんぶん)", meaning: "3명분" }, { word: "入国(にゅうこく)カード", meaning: "입국신고서" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "ありがとうございます。今回の日本訪問の目的は何ですか？",
            translation: "감사합니다. 이번 일본 방문 목적은 무엇인가요?",
            expressions: [{ phrase: "今回の日本訪問の目的は何ですか？", meaning: "이번 일본 방문의 목적은 무엇입니까?" }],
            vocabulary: [{ word: "今回(こんかい)", meaning: "이번" }, { word: "訪問(ほうもん)", meaning: "방문" }, { word: "目的(もくてき)", meaning: "목적" }, { word: "何(なん)ですか", meaning: "무엇입니까" }]
          },
          {
            role: "승객", side: "right",
            text: "家族旅行で、観光のために来ました。",
            translation: "가족 여행으로 관광하러 왔습니다.",
            expressions: [{ phrase: "家族旅行で、観光のために来ました", meaning: "가족 여행차 관광을 위해 왔습니다" }],
            vocabulary: [{ word: "家族旅行(かぞくりょこう)", meaning: "가족 여행" }, { word: "観光(かんこう)", meaning: "관광" }, { word: "来る(くる)", meaning: "오다" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "ご職業は何をされていますか？また、100万円以上の現金はお持ちですか？",
            translation: "직업은 무엇인가요? 그리고 혹시 100만 엔 이상의 현금을 소지하고 계신가요?",
            expressions: [{ phrase: "ご職業は何をされていますか？", meaning: "직업은 어떤 일을 하고 계십니까?" }, { phrase: "100万円以上の現金", meaning: "100만 엔 이상의 현금" }],
            vocabulary: [{ word: "職業(しょくぎょう)", meaning: "직업" }, { word: "100万円(ひゃくまんえん)", meaning: "100만 엔" }, { word: "現金(げんきん)", meaning: "현금" }, { word: "持つ(もつ)", meaning: "소지하다, 가지다" }]
          },
          {
            role: "승객", side: "right",
            text: "私は薬剤師です。いいえ、現金は5万円ほどとクレジットカードだけ持っています。",
            translation: "저는 약사입니다. 아니요, 현금은 5만 엔 정도와 신용카드만 가지고 있습니다.",
            expressions: [{ phrase: "私は薬剤師です", meaning: "저는 약사입니다 (회사원은 会社員(かいしゃいん))" }],
            vocabulary: [{ word: "薬剤師(やくざいし)", meaning: "약사" }, { word: "5万円(ごまんえん)ほど", meaning: "5만 엔 정도" }]
          }
        ]
      },
      {
        id: 14,
        title: "체류 기간 및 숙소 주소 설명하기",
        lines: [
          {
            role: "입국 심사관", side: "left",
            text: "日本には何日間滞在する予定ですか？",
            translation: "일본에는 며칠 동안 체류하실 예정인가요?",
            expressions: [{ phrase: "何日間滞在する予定ですか？", meaning: "며칠간 체류(머무를) 예정입니까?" }],
            vocabulary: [{ word: "日本(にほん)", meaning: "일본" }, { word: "何日間(なんにちかん)", meaning: "며칠간" }, { word: "滞在(たいざい)する", meaning: "체류하다, 머무르다" }, { word: "予定(よてい)", meaning: "예정" }]
          },
          {
            role: "승객", side: "right",
            text: "4泊5日の予定で、今週の土曜日に韓国へ帰ります。",
            translation: "4박 5일 일정이고, 이번 주 토요일에 한국으로 돌아갑니다.",
            expressions: [{ phrase: "4泊5日の予定で", meaning: "4박 5일 일정으로 (3박 4일은 3泊4日(さんぱくよっか))" }],
            vocabulary: [{ word: "4泊5日(よんぱくいつか)", meaning: "4박 5일" }, { word: "今週(こんしゅう)", meaning: "이번 주" }, { word: "土曜日(どようび)", meaning: "토요일" }, { word: "帰る(かえる)", meaning: "돌아가다, 귀국하다" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "帰りの航空券の控えはお持ちですか？",
            translation: "돌아가는 귀국 항공권 예약 확인서를 가지고 계신가요?",
            expressions: [{ phrase: "帰りの航空券の控え", meaning: "귀국편 항공권의 예약 내역서(사본)" }],
            vocabulary: [{ word: "帰り(かえり)", meaning: "돌아가는 길, 귀국편" }, { word: "航空券(こうくうけん)", meaning: "항공권" }, { word: "控え(ひかえ)", meaning: "확인서, 사본" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、こちらが印刷した往復のEチケットお客様控です。",
            translation: "네, 여기 인쇄해 온 왕복 전자항공권(E-티켓) 확인서입니다.",
            expressions: [{ phrase: "印刷した往復のEチケット", meaning: "출력한 왕복 전자항공권" }],
            vocabulary: [{ word: "印刷(いんさつ)する", meaning: "인쇄하다, 출력하다" }, { word: "往復(おうふく)", meaning: "왕복" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "滞在中の宿泊先はどちらですか？",
            translation: "체류 기간 중 묵으실 숙소는 어디인가요?",
            expressions: [{ phrase: "滞在中の宿泊先はどちらですか？", meaning: "머무시는 동안의 숙박처는 어디입니까?" }],
            vocabulary: [{ word: "滞在中(たいざいちゅう)", meaning: "체류 중" }, { word: "宿泊先(しゅくはくさき)", meaning: "숙박지, 숙소" }]
          },
          {
            role: "승객", side: "right",
            text: "新宿のグランドホテルに泊まります。詳しい住所はこのホテル予約確認書に書いてあります。",
            translation: "신주쿠에 있는 그랜드 호텔에 묵습니다. 상세 주소는 이 호텔 예약 확인서에 적혀 있습니다.",
            expressions: [{ phrase: "詳しい住所はこのホテル予約確認書に", meaning: "상세한 주소는 이 호텔 예약 확인서에" }],
            vocabulary: [{ word: "新宿(しんじゅく)", meaning: "신주쿠" }, { word: "泊まる(とまる)", meaning: "숙박하다, 묵다" }, { word: "詳しい(くわしい)", meaning: "자세하다, 상세하다" }, { word: "住所(じゅうしょ)", meaning: "주소" }, { word: "予約確認書(よやくかくにんしょ)", meaning: "예약 확인서" }]
          },
          {
            role: "입국 심사관", side: "left",
            text: "確認できました。両手の人差し指をスキャナーに置いて、正面のカメラを見てください。ようこそ日本へ！",
            translation: "확인되었습니다. 양손 집게손가락(검지)을 스캐너에 올리시고 정면 카메라를 봐 주세요. 일본에 오신 것을 환영합니다!",
            expressions: [{ phrase: "両手の人差し指をスキャナーに置いて", meaning: "양손 검지를 지문 스캐너에 올려놓고" }],
            vocabulary: [{ word: "両手(りょうて)", meaning: "양손" }, { word: "人差し指(ひとさしゆび)", meaning: "집게손가락, 검지" }, { word: "置く(おく)", meaning: "놓다, 대다" }, { word: "正面(しょうめん)", meaning: "정면" }, { word: "見る(みる)", meaning: "보다" }]
          }
        ]
      },
      {
        id: 15,
        title: "수하물 수취대 번호 확인하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、ソウルから到着したJL123便の手荷物受取レーンは何番ですか？",
            translation: "실례합니다, 서울에서 도착한 JL123편의 수하물 수취대는 몇 번인가요?",
            expressions: [{ phrase: "手荷物受取レーンは何番ですか？", meaning: "수하물 수취 레인(컨베이어 벨트)은 몇 번인가요?" }],
            vocabulary: [{ word: "到着(とうちゃく)する", meaning: "도착하다" }, { word: "手荷物受取(てにもつうけとり)レーン", meaning: "수하물 수취대 (ターンテーブル이라고도 부름)" }, { word: "何番(なんばん)", meaning: "몇 번" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "案内モニターを確認いたしますね。ソウルからのJL123便は、5番のターンテーブルです。",
            translation: "안내 모니터를 확인해 보겠습니다. 서울발 JL123편은 5번 회전 수취대(턴테이블)입니다.",
            expressions: [{ phrase: "5番のターンテーブルです", meaning: "5번 수하물 회전 수취대입니다" }],
            vocabulary: [{ word: "案内(あんない)モニター", meaning: "안내 전광판(모니터)" }, { word: "5番(ごばん)", meaning: "5번" }]
          },
          {
            role: "승객", side: "right",
            text: "ありがとうございます！荷物用のカートはどこにありますか？無料で使えますか？",
            translation: "감사합니다! 수하물용 카트는 어디에 있나요? 무료로 쓸 수 있나요?",
            expressions: [{ phrase: "荷物用のカートはどこにありますか？", meaning: "짐 싣는 수하물 카트는 어디에 있나요?" }],
            vocabulary: [{ word: "荷物用(にもつよう)", meaning: "수하물용" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "使える(つかえる)", meaning: "사용할 수 있다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "はい、あちらのエスカレーターの横に並んでおり、すべて無料でご利用いただけます。",
            translation: "네, 저기 에스컬레이터 옆에 줄지어 비치되어 있고 모두 무료로 이용하실 수 있습니다.",
            expressions: [{ phrase: "すべて無料でご利用いただけます", meaning: "모두 무료로 이용하실 수 있습니다" }],
            vocabulary: [{ word: "横(よこ)", meaning: "옆" }, { word: "並ぶ(ならぶ)", meaning: "줄지어 서 있다" }]
          },
          {
            role: "승객", side: "right",
            text: "ちなみに、折りたたみ式のベビーカーも預けたのですが、それも5番レーンから出てきますか？",
            translation: "그런데 접이식 유모차도 위탁 수하물로 부쳤는데, 그것도 5번 수취대에서 나오나요?",
            expressions: [{ phrase: "折りたたみ式のベビーカー", meaning: "접이식 유모차" }],
            vocabulary: [{ word: "折りたたみ式(おりたたみしき)", meaning: "접이식" }, { word: "預ける(あずける)", meaning: "(짐을) 맡기다, 부치다" }, { word: "出てくる(でてくる)", meaning: "나오다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "ベビーカーや大型のお荷物は、5番レーンのすぐ隣にある「大型手荷物受取所」で係員が直接お渡ししております。",
            translation: "유모차나 대형 수하물은 5번 수취대 바로 옆에 있는 '대형 수하물 수취소'에서 직원이 직접 건네드리고 있습니다.",
            expressions: [{ phrase: "大型手荷物受取所で係員が直接お渡し", meaning: "대형 수하물 수령처에서 담당 직원이 직접 전달" }],
            vocabulary: [{ word: "大型(おおがた)", meaning: "대형" }, { word: "隣(となり)", meaning: "옆" }, { word: "係員(かかりいん)", meaning: "담당 직원" }, { word: "直接(ちょくせつ)", meaning: "직접" }]
          }
        ]
      },
      {
        id: 16,
        title: "분실 수하물 신고 및 특징 설명하기",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、ソウルからのJL123便で到着したのですが、私のスーツケースがまだ出てきません。",
            translation: "실례합니다, 서울발 JL123편으로 도착했는데 제 캐리어가 아직도 나오지 않았습니다.",
            expressions: [{ phrase: "ソウルからのJL123便で到着したのですが", meaning: "서울에서 출발한 JL123편을 타고 도착했는데요" }, { phrase: "スーツケースがまだ出てきません", meaning: "캐리어가 아직 나오지 않습니다" }],
            vocabulary: [{ word: "到着(とうちゃく)する", meaning: "도착하다" }, { word: "私(わたし)", meaning: "저, 나" }, { word: "出てくる(でてくる)", meaning: "나오다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "ご不便をおかけしております。搭乗券に貼られている手荷物の引換証シールを拝見できますか？",
            translation: "불편을 드려 죄송합니다. 탑승권에 붙어 있는 수하물 보관표(클레임 태그) 스티커를 보여주시겠어요?",
            expressions: [{ phrase: "手荷物の引換証シール", meaning: "위탁 수하물 교환증(보관표) 스티커" }],
            vocabulary: [{ word: "不便(ふべん)", meaning: "불편" }, { word: "貼られる(はられる)", meaning: "붙여지다" }, { word: "引換証(ひきかえしょう)", meaning: "보관증, 교환표" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、これです。黒色の大きなハードケースで、持ち手に青いネームタグがついています。",
            translation: "네, 여기 있습니다. 검은색의 큰 하드 케이스 캐리어이고, 손잡이에 파란색 네임택이 달려 있습니다.",
            expressions: [{ phrase: "黒色の大きなハードケース", meaning: "검은색의 대형 하드 케이스 캐리어" }, { phrase: "持ち手に青いネームタグがついています", meaning: "손잡이에 파란색 이름표(네임택)가 달려 있습니다" }],
            vocabulary: [{ word: "黒色(くろいろ)", meaning: "검은색" }, { word: "大きな(おおきな)", meaning: "큰, 대형의" }, { word: "持ち手(もちて)", meaning: "손잡이" }, { word: "青い(あおい)", meaning: "파란" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "番号をお調べいたしました。紛失ではなく、積み込み遅れのため、今夜8時到着の次の便で届く予定です。",
            translation: "번호로 조회해 보았습니다. 분실된 것이 아니라 탑재가 늦어져서, 오늘 밤 8시에 도착하는 다음 항공편으로 도착할 예정입니다.",
            expressions: [{ phrase: "紛失ではなく、積み込み遅れのため", meaning: "분실이 아니라 수하물 탑재 지연 때문에" }],
            vocabulary: [{ word: "番号(ばんごう)", meaning: "번호" }, { word: "紛失(ふんしつ)", meaning: "분실" }, { word: "積み込み遅れ(つみこみおくれ)", meaning: "(항공기) 탑재 지연" }, { word: "今夜(こんや)", meaning: "오늘 밤" }, { word: "届く(とどく)", meaning: "도착하다, 배달되다" }]
          },
          {
            role: "승객", side: "right",
            text: "見つかって安心しました！荷物が届いたら、私たちが泊まるホテルまで直接届けてもらえますか？",
            translation: "찾았다니 안심이 되네요! 짐이 도착하면 저희가 묵는 호텔까지 직접 배송해 주실 수 있나요?",
            expressions: [{ phrase: "見つかって安心しました！", meaning: "짐을 찾게 되어 안심했습니다!" }, { phrase: "ホテルまで直接届けてもらえますか？", meaning: "숙박하는 호텔까지 직접 배달해 주실 수 있나요?" }],
            vocabulary: [{ word: "見つかる(みつかる)", meaning: "발견되다, 찾아지다" }, { word: "安心(あんしん)する", meaning: "안심하다" }, { word: "泊まる(とまる)", meaning: "묵다, 숙박하다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "はい、無料でお届けいたします。こちらの書類にホテルの名前とご住所、ご連絡先をご記入ください。",
            translation: "네, 무료로 배송해 드립니다. 이 서류에 호텔 이름과 주소, 연락처를 적어 주세요.",
            expressions: [{ phrase: "無料でお届けいたします", meaning: "무료로 배달해 드리겠습니다" }],
            vocabulary: [{ word: "書類(しょるい)", meaning: "서류 (수하물 사고 보고서)" }, { word: "名前(なまえ)", meaning: "이름" }, { word: "住所(じゅうしょ)", meaning: "주소" }, { word: "連絡先(れんらくさき)", meaning: "연락처" }]
          }
        ]
      },
      {
        id: 17,
        title: "세관 신고서 제출 및 물품 검사",
        lines: [
          {
            role: "세관 직원", side: "left",
            text: "こんにちは。パスポートと税関申告書をお見せください。Visit Japan WebのQRコードをお持ちですか？",
            translation: "안녕하세요. 여권과 세관신고서를 보여주세요. 비짓 재팬 웹(Visit Japan Web) QR 코드를 가지고 계신가요?",
            expressions: [{ phrase: "パスポートと税関申告書をお見せください", meaning: "여권과 세관신고서를 보여주십시오" }],
            vocabulary: [{ word: "税関申告書(ぜいかんしんこくしょ)", meaning: "세관신고서" }, { word: "見せる(みせる)", meaning: "보여주다" }, { word: "持つ(もつ)", meaning: "가지고 있다" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、紙の税関申告書を書きました。念のため、食品の欄に「はい」とチェックを入れました。",
            translation: "네, 종이 세관신고서를 작성했습니다. 혹시 몰라서 식품 반입 항목에 '예(네)'로 체크했어요.",
            expressions: [{ phrase: "念のため、食品の欄に「はい」とチェック", meaning: "만약을 위해 식품 항목에 '예'로 체크" }],
            vocabulary: [{ word: "紙(かみ)", meaning: "종이" }, { word: "書く(かく)", meaning: "쓰다, 작성하다" }, { word: "念(ねん)のため", meaning: "만약을 위해, 혹시 몰라서" }, { word: "食品(しょくひん)", meaning: "식품" }, { word: "欄(らん)", meaning: "란, 항목 칸" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "ご申告ありがとうございます。どのような食品をお持ちになりましたか？",
            translation: "자진 신고해 주셔서 감사합니다. 어떤 종류의 식품을 가져오셨나요?",
            expressions: [{ phrase: "どのような食品をお持ちになりましたか？", meaning: "어떤 식품을 가지고 오셨습니까?" }],
            vocabulary: [{ word: "申告(しんこく)", meaning: "신고" }, { word: "どのような", meaning: "어떠한, 어떤 종류의" }]
          },
          {
            role: "승객", side: "right",
            text: "子どもが食べる市販のお菓子と、韓国海苔、それと肉成分の入っていない海鮮味のカップラーメンだけです。",
            translation: "아이가 먹을 시판 과자와 한국 김, 그리고 육류 성분이 들어 있지 않은 해물 맛 컵라면뿐입니다.",
            expressions: [{ phrase: "肉成分の入っていない海鮮味の〜", meaning: "육류 성분이 들어 있지 않은 해물 맛 ~" }],
            vocabulary: [{ word: "市販(しはん)", meaning: "시판 (시중 판매 제품)" }, { word: "お菓子(おかし)", meaning: "과자" }, { word: "韓国海苔(かんこくのり)", meaning: "한국 조미김" }, { word: "肉成分(にくせいぶん)", meaning: "육류 성분" }, { word: "海鮮味(かいせんあじ)", meaning: "해물 맛" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "生の果物や野菜、ビーフジャーキーやソーセージなどの肉製品は一切入っておりませんね？",
            translation: "생과일이나 채소, 육포나 소시지 같은 육가공품은 전혀 들어 있지 않으시죠?",
            expressions: [{ phrase: "肉製品は一切入っておりませんね？", meaning: "육가공품은 일절 들어 있지 않죠?" }],
            vocabulary: [{ word: "生(なま)の果物(くだもの)", meaning: "생과일" }, { word: "野菜(やさい)", meaning: "채소" }, { word: "肉製品(にくせいひん)", meaning: "육가공품" }, { word: "一切(いっさい)", meaning: "일절, 전혀" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、全く入っていません。必要であればスーツケースを開けて確認していただいても構いません。",
            translation: "네, 전혀 들어 있지 않습니다. 필요하시면 캐리어를 열어서 확인하셔도 괜찮습니다.",
            expressions: [{ phrase: "開けて確認していただいても構いません", meaning: "가방을 열어 검사해 보셔도 괜찮습니다" }],
            vocabulary: [{ word: "全く(まったく)", meaning: "전혀" }, { word: "開ける(あける)", meaning: "열다" }, { word: "構わない(かまわない)", meaning: "상관없다, 괜찮다" }]
          },
          {
            role: "세관 직원", side: "left",
            text: "韓国海苔とお菓子でしたら全く問題ございません！お荷物は開けなくて結構ですので、そのまま出口へお進みください。",
            translation: "한국 김과 과자라면 전혀 문제없습니다! 가방은 열지 않으셔도 되니 그대로 출구로 나가시면 됩니다.",
            expressions: [{ phrase: "お荷物は開けなくて結構です", meaning: "수하물은 열지 않으셔도 됩니다" }],
            vocabulary: [{ word: "問題(もんだい)", meaning: "문제" }, { word: "出口(でぐち)", meaning: "출구" }, { word: "進む(すすむ)", meaning: "나아가다" }]
          }
        ]
      },
      {
        id: 18,
        title: "공항 유심(SIM) 및 와이파이 수령",
        lines: [
          {
            role: "승객", side: "right",
            text: "こんにちは。ネットで予約した5日間のデータ無制限SIMカードをここで受け取れますか？",
            translation: "안녕하세요. 인터넷으로 예약한 5일 무제한 데이터 유심(SIM) 카드를 여기서 수령할 수 있나요?",
            expressions: [{ phrase: "データ無制限SIMカードをここで受け取れますか？", meaning: "데이터 무제한 유심카드를 여기서 수령할 수 있나요?" }],
            vocabulary: [{ word: "予約(よやく)する", meaning: "예약하다" }, { word: "5日間(いつかかん)", meaning: "5일간" }, { word: "無制限(むせいげん)", meaning: "무제한" }, { word: "受け取る(うけとる)", meaning: "수령하다, 받다" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "いらっしゃいませ！はい、こちらが受取カウンターです。ご予約のQRコード画面をお見せいただけますか？",
            translation: "어서 오세요! 네, 여기가 수령 카운터 맞습니다. 예약하신 QR 코드 화면을 보여주시겠어요?",
            expressions: [{ phrase: "ご予約のQRコード画面", meaning: "예약 바우처의 QR 코드 화면" }],
            vocabulary: [{ word: "受取(うけとり)", meaning: "수령" }, { word: "画面(がめん)", meaning: "화면" }, { word: "見せる(みせる)", meaning: "보여주다" }]
          },
          {
            role: "승객", side: "right",
            text: "こちらがバウチャーの画面です。SIMカードの入れ替えと設定も手伝っていただけますか？",
            translation: "여기 바우처 화면입니다. 유심카드 교체와 개통 설정도 좀 도와주실 수 있나요?",
            expressions: [{ phrase: "SIMカードの入れ替えと設定", meaning: "유심칩 교체(갈아 끼우기)와 통신 설정" }],
            vocabulary: [{ word: "入れ替え(いれかえ)", meaning: "교체, 갈아 끼움" }, { word: "設定(せってい)", meaning: "설정" }, { word: "手伝う(てつだう)", meaning: "도와주다" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "もちろんです！スマートフォンの言語設定を一時的に英語か日本語に変えて、ロックを解除してお渡しください。",
            translation: "물론이죠! 스마트폰 언어 설정을 일시적으로 영어나 일본어로 바꾸신 뒤 화면 잠금을 풀어서 건네주세요.",
            expressions: [{ phrase: "言語設定を一時的に〜に変えて", meaning: "휴대폰 언어 설정을 일시적으로 ~로 바꾸어" }],
            vocabulary: [{ word: "言語設定(げんごせってい)", meaning: "언어 설정" }, { word: "一時的(いちじてき)に", meaning: "일시적으로" }, { word: "変える(かえる)", meaning: "바꾸다" }, { word: "解除(かいじょ)する", meaning: "해제하다" }]
          },
          {
            role: "승객", side: "right",
            text: "はい、設定を変えました。元の韓国のSIMカードをなくさないように入れる小さな袋はありますか？",
            translation: "네, 설정을 바꿨습니다. 원래 쓰던 한국 유심카드를 잃어버리지 않게 넣어 둘 작은 봉투(홀더)가 있을까요?",
            expressions: [{ phrase: "元の韓国のSIMカードをなくさないように", meaning: "원래의 한국 유심칩을 분실하지 않도록" }],
            vocabulary: [{ word: "元(もと)の", meaning: "원래의" }, { word: "なくす", meaning: "잃어버리다, 분실하다" }, { word: "小さな(ちいさな)", meaning: "작은" }, { word: "袋(ふくろ)", meaning: "봉투, 케이스" }]
          },
          {
            role: "통신사 직원", side: "left",
            text: "はい、元のSIMカードと取り出しピンはこの台紙にテープで貼っておきました。すでに電波が繋がっておりますのでご確認ください！",
            translation: "네, 원래 유심카드와 유심 분리 핀은 이 카드 종이에 테이프로 잘 붙여 두었습니다. 이미 데이터 전파가 연결되었으니 확인해 보세요!",
            expressions: [{ phrase: "すでに電波が繋がっております", meaning: "이미 통신 전파(데이터)가 연결되었습니다" }],
            vocabulary: [{ word: "取り出し(とりだし)ピン", meaning: "유심 트레이 분리 핀" }, { word: "台紙(だいし)", meaning: "받침 종이, 카드 대지" }, { word: "電波(でんぱ)", meaning: "전파, 통신 신호" }, { word: "繋がる(つながる)", meaning: "연결되다" }]
          }
        ]
      },
      {
        id: 19,
        title: "공항 철도 및 리무진 버스 매표",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、東京駅まで空港特急電車で行きたいのですが、切符はどこで買えますか？",
            translation: "실례합니다, 도쿄역까지 공항 특급열차를 타고 가고 싶은데요, 표는 어디서 살 수 있나요?",
            expressions: [{ phrase: "東京駅まで空港特急電車で行きたい", meaning: "도쿄역까지 공항 특급열차(나리타 익스프레스·스카이라이너 등)로 가고 싶다" }],
            vocabulary: [{ word: "東京駅(とうきょうえき)", meaning: "도쿄역" }, { word: "空港特急電車(くうこうとっきゅうでんしゃ)", meaning: "공항 특급열차" }, { word: "切符(きっぷ)", meaning: "표, 승차권" }, { word: "買う(かう)", meaning: "사다" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "こちらの窓口でお買い求めいただけます！大人と子ども、それぞれ何名様ですか？",
            translation: "바로 여기 매표 창구에서 구매하실 수 있습니다! 성인과 어린이가 각각 몇 분이신가요?",
            expressions: [{ phrase: "大人と子ども、それぞれ何名様ですか？", meaning: "성인과 어린이가 각각 몇 분이십니까?" }],
            vocabulary: [{ word: "窓口(まどぐち)", meaning: "창구, 매표소" }, { word: "大人(おとな)", meaning: "성인, 어른" }, { word: "子ども(こども)", meaning: "어린이, 아이" }, { word: "何名様(なんめいさま)", meaning: "몇 분(인원수)" }]
          },
          {
            role: "승객", side: "right",
            text: "大人2人と、5歳の子ども1人です。外国人旅行者向けの往復割引チケットはありますか？",
            translation: "성인 두 명과 만 5세 어린이 한 명입니다. 외국인 여행객 대상 왕복 할인 티켓이 있나요?",
            expressions: [{ phrase: "外国人旅行者向けの往復割引チケット", meaning: "외국인 관광객 전용 왕복 할인 승차권" }],
            vocabulary: [{ word: "2人(ふたり)", meaning: "두 사람, 2명" }, { word: "外国人旅行者(がいこくじんりょこうしゃ)", meaning: "외국인 여행객" }, { word: "往復割引(おうふくわりびき)", meaning: "왕복 할인" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "はい、パスポートをご提示いただければお得な往復割引きっぷをご購入いただけます。また、6歳未満のお子様は座席を使わなければ無料です！",
            translation: "네, 여권을 제시해 주시면 저렴한 왕복 할인 승차권을 구매하실 수 있습니다. 또한 만 6세 미만 유아는 별도 좌석을 점유하지 않으면 무료입니다!",
            expressions: [{ phrase: "6歳未満のお子様は座席を使わなければ無料", meaning: "만 6세 미만 유아는 단독 좌석을 쓰지 않으면 무료 (일본 철도 공통 규정)" }],
            vocabulary: [{ word: "お得(とく)な", meaning: "이득이 되는, 저렴한" }, { word: "購入(こうにゅう)する", meaning: "구매하다" }, { word: "座席(ざせき)", meaning: "좌석" }]
          },
          {
            role: "승객", side: "right",
            text: "それは助かります！では、大人の往復チケットを2枚お願いします。次の電車は何時発ですか？",
            translation: "정말 다행이네요! 그럼 성인 왕복 티켓 두 장 부탁합니다. 다음 열차는 몇 시 출발인가요?",
            expressions: [{ phrase: "次の電車は何時発ですか？", meaning: "다음 열차는 몇 시 출발입니까?" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "두 장" }, { word: "次(つぎ)の電車(でんしゃ)", meaning: "다음 전철(열차)" }, { word: "何時発(なんじはつ)", meaning: "몇 시 출발" }]
          },
          {
            role: "매표소 직원", side: "left",
            text: "10分後の14時30分発です！1番ホームから発車しますので、3号車の指定席にお座りください。",
            translation: "10분 뒤인 14시 30분 출발입니다! 1번 승강장(홈)에서 출발하니 3호차 지정석에 앉으시면 됩니다.",
            expressions: [{ phrase: "1番ホームから発車します", meaning: "1번 승강장(플랫폼)에서 출발합니다" }],
            vocabulary: [{ word: "10分後(じゅっぷんご)", meaning: "10분 후" }, { word: "発車(はっしゃ)する", meaning: "(열차·버스가) 출발하다" }, { word: "3号車(さんごうしゃ)", meaning: "3호차" }, { word: "指定席(していせき)", meaning: "지정석" }, { word: "座る(すわる)", meaning: "앉다" }]
          }
        ]
      },
      {
        id: 20,
        title: "택시 승강장 위치 및 시내 요금 문의",
        lines: [
          {
            role: "승객", side: "right",
            text: "すみません、荷物が多いのでタクシーでホテルまで行きたいのですが、タクシー乗り場はどこですか？",
            translation: "실례합니다, 짐이 많아서 택시를 타고 호텔까지 가고 싶은데요, 택시 승강장은 어디에 있나요?",
            expressions: [{ phrase: "荷物が多いので", meaning: "짐(수하물)이 많아서" }, { phrase: "タクシー乗り場はどこですか？", meaning: "택시 승강장(타는 곳)은 어디인가요?" }],
            vocabulary: [{ word: "荷物(にもつ)", meaning: "짐" }, { word: "多い(おおい)", meaning: "많다" }, { word: "乗り場(のりば)", meaning: "승강장, 타는 곳" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "正面の4番出口を出てすぐの横断歩道を渡ったところに、タクシー乗り場がございます。",
            translation: "정면 4번 출구로 나가서 바로 앞 횡단보도를 건너가시면 택시 승강장이 있습니다.",
            expressions: [{ phrase: "4番出口を出てすぐ", meaning: "4번 출구로 나가자마자 바로" }, { phrase: "横断歩道を渡ったところ", meaning: "횡단보도를 건넌 곳" }],
            vocabulary: [{ word: "正面(しょうめん)", meaning: "정면" }, { word: "4番出口(よんばんでぐち)", meaning: "4번 출구" }, { word: "横断歩道(おうだんほどう)", meaning: "횡단보도" }, { word: "渡る(わたる)", meaning: "건너다" }]
          },
          {
            role: "승객", side: "right",
            text: "ありがとうございます。ここから市内のホテルまではメーター制ですか？それとも定額料金ですか？",
            translation: "감사합니다. 여기서 시내 호텔까지는 미터기 요금제인가요? 아니면 정액 요금제인가요?",
            expressions: [{ phrase: "メーター制ですか？それとも定額料金ですか？", meaning: "미터기 방식인가요, 아니면 정액 요금인가요?" }],
            vocabulary: [{ word: "市内(しない)", meaning: "시내" }, { word: "メーター制(せい)", meaning: "미터기 요금제" }, { word: "定額料金(ていがくりょうきん)", meaning: "정액 요금" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "一般のタクシーはメーター制で、都心までおおよそ8,000円ほどに高速道路代が加算されます。",
            translation: "일반 택시는 미터기 요금제이며, 도심까지 대략 8,000엔 정도에 고속도로 통행료가 별도로 추가됩니다.",
            expressions: [{ phrase: "高速道路代が加算されます", meaning: "고속도로 통행료(톨비)가 별도로 합산됩니다" }],
            vocabulary: [{ word: "一般(いっぱん)", meaning: "일반" }, { word: "都心(としん)", meaning: "도심, 시내 중심가" }, { word: "高速道路代(こうそくどうろだい)", meaning: "고속도로 통행료" }, { word: "加算(かさん)される", meaning: "가산되다, 추가되다" }]
          },
          {
            role: "승객", side: "right",
            text: "大きなスーツケースが2つとベビーカーがあるのですが、普通のタクシーのトランクに乗りますか？",
            translation: "큰 캐리어 두 개와 유모차가 있는데, 일반 택시 트렁크에 다 실릴까요?",
            expressions: [{ phrase: "普通のタクシーのトランクに乗りますか？", meaning: "일반 택시 트렁크에 실리나요(들어가나요)?" }],
            vocabulary: [{ word: "普通(ふつう)", meaning: "보통, 일반" }, { word: "乗る(のる)", meaning: "(짐이) 실리다, 들어가다" }]
          },
          {
            role: "공항 직원", side: "left",
            text: "日本の「ジャパンタクシー」は車内が広く、お荷物もすべて積めますよ。クレジットカード決済も可能ですのでご安心ください！",
            translation: "일본의 '재팬 택시(왜건형 택시)'는 실내가 넓어서 짐도 모두 실을 수 있습니다. 신용카드 결제도 가능하니 안심하세요!",
            expressions: [{ phrase: "お荷物もすべて積めますよ", meaning: "수하물도 전부 실을 수 있습니다" }, { phrase: "クレジットカード決済も可能です", meaning: "신용카드 결제도 가능합니다" }],
            vocabulary: [{ word: "車内(しゃない)", meaning: "차량 실내" }, { word: "広い(ひろい)", meaning: "넓다" }, { word: "積める(つめる)", meaning: "(짐을) 실을 수 있다" }, { word: "決済(けっさい)", meaning: "결제" }]
          }
        ]
      }
    ]
  },
  restaurant: {
    // ==========================================
    // 1. 영어 (English) - 식당 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "예약 확인 및 인원수 말하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Good evening! Welcome to our restaurant. Do you have a reservation with us tonight?",
            translation: "안녕하세요! 저희 식당에 오신 것을 환영합니다. 오늘 저녁 예약하셨나요?",
            expressions: [{ phrase: "Do you have a reservation with us?", meaning: "저희 매장에 예약하셨나요?" }],
            vocabulary: [{ word: "reservation", meaning: "예약 (booking)" }, { word: "tonight", meaning: "오늘 밤, 오늘 저녁" }]
          },
          {
            role: "손님", side: "right",
            text: "Hi! Yes, I have a reservation for three under the name Lim at 6:30 PM.",
            translation: "안녕하세요! 네, 오후 6시 30분에 'Lim'이라는 이름으로 3명 예약했습니다.",
            expressions: [{ phrase: "a reservation for three under the name ~", meaning: "~라는 이름으로 3명 예약" }],
            vocabulary: [{ word: "under the name ~", meaning: "(예약자명이) ~라는 이름으로" }]
          },
          {
            role: "직원", side: "left",
            text: "Let me check the list... Found it! A table for two adults and one child, right?",
            translation: "명단을 확인해 보겠습니다... 찾았습니다! 성인 두 분과 어린이 한 명 맞으시죠?",
            expressions: [{ phrase: "A table for ~", meaning: "~명을 위한 테이블" }],
            vocabulary: [{ word: "adult", meaning: "성인" }, { word: "child", meaning: "어린이, 아이" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, that's right. Do you happen to have a booster seat or a high chair for my child?",
            translation: "네, 맞습니다. 혹시 제 아이가 앉을 부스터 시트(보조의자)나 유아용 하이체어가 있나요?",
            expressions: [{ phrase: "booster seat or a high chair", meaning: "일반 의자 위에 올리는 유아 보조의자(부스터) 또는 아기용 높은 식탁의자(하이체어)" }],
            vocabulary: [{ word: "booster seat", meaning: "어린이용 방석형 보조의자" }, { word: "high chair", meaning: "유아용 식탁의자" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! We have both. I'll bring a booster seat over to your table right away.",
            translation: "물론이죠! 둘 다 구비되어 있습니다. 바로 테이블로 부스터 시트를 가져다드리겠습니다.",
            expressions: [{ phrase: "bring ~ over to your table", meaning: "테이블로 ~을 가져다주다" }],
            vocabulary: [{ word: "right away", meaning: "즉시, 바로" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you so much! Please lead the way.",
            translation: "정말 감사합니다! 자리로 안내해 주세요.",
            expressions: [{ phrase: "Please lead the way.", meaning: "앞장서서 안내해 주세요." }],
            vocabulary: [{ word: "lead", meaning: "안내하다, 이끌다" }]
          }
        ]
      },
      {
        id: 2,
        title: "예약 없이 방문해 대기 시간 묻기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi there! We don't have a reservation. Do you have any tables available for a party of three?",
            translation: "안녕하세요! 저희가 예약을 안 했는데요. 3명이 앉을 수 있는 빈 테이블이 있나요?",
            expressions: [{ phrase: "a party of three", meaning: "일행 3명 (식당에서 인원수를 말할 때 자주 쓰는 표현)" }],
            vocabulary: [{ word: "available", meaning: "이용 가능한, 비어 있는" }, { word: "party", meaning: "일행, 그룹" }]
          },
          {
            role: "직원", side: "left",
            text: "We're completely full right now, so there's a bit of a wait for walk-ins.",
            translation: "지금 만석이라서, 예약 없이 오신 분들은 대기가 조금 있습니다.",
            expressions: [{ phrase: "there's a bit of a wait for walk-ins", meaning: "예약 없이 방문한 손님(워크인)은 대기 시간이 좀 있다" }],
            vocabulary: [{ word: "completely full", meaning: "완전히 만석인" }, { word: "walk-in", meaning: "예약 없이 방문한 손님" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I see. About how long is the wait for a table for three?",
            translation: "아, 그렇군요. 3명 자리 대기 시간이 대략 얼마나 걸릴까요?",
            expressions: [{ phrase: "About how long is the wait?", meaning: "대기 시간이 대략 얼마나 되나요?" }],
            vocabulary: [{ word: "wait", meaning: "대기 시간, 기다림" }]
          },
          {
            role: "직원", side: "left",
            text: "It should be around 20 to 25 minutes. Would you like me to put your name on the waitlist?",
            translation: "약 20분에서 25분 정도 걸릴 것 같습니다. 대기 명단에 이름을 올려 드릴까요?",
            expressions: [{ phrase: "put your name on the waitlist", meaning: "대기 명단(웨이팅 리스트)에 이름을 올리다" }],
            vocabulary: [{ word: "waitlist", meaning: "대기자 명단" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! The name is Lim. Will you call our name or send a text message?",
            translation: "네, 부탁드려요! 이름은 'Lim'입니다. 이름을 직접 불러주시나요, 아니면 문자를 보내주시나요?",
            expressions: [{ phrase: "call our name or send a text message", meaning: "이름을 호명하거나 문자 메시지를 보내다" }],
            vocabulary: [{ word: "text message", meaning: "휴대폰 문자 메시지" }]
          },
          {
            role: "직원", side: "left",
            text: "If you leave your phone number, our system will text you as soon as your table is ready!",
            translation: "전화번호를 남겨주시면 테이블이 준비되는 즉시 시스템에서 안내 문자를 보내드립니다!",
            expressions: [{ phrase: "as soon as your table is ready", meaning: "테이블이 준비되는 즉시" }],
            vocabulary: [{ word: "leave", meaning: "(연락처·메모 등을) 남기다" }]
          }
        ]
      },
      {
        id: 3,
        title: "창가 자리나 조용한 테이블 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Right this way! I can seat you at this table in the center of the dining room.",
            translation: "이쪽으로 오세요! 홀 중앙에 있는 이 테이블로 안내해 드리겠습니다.",
            expressions: [{ phrase: "Right this way!", meaning: "이쪽으로 오십시오! (직원이 길을 안내할 때)" }, { phrase: "I can seat you at ~", meaning: "~ 자리에 앉혀(안내해) 드리겠습니다" }],
            vocabulary: [{ word: "dining room", meaning: "식당의 식사 홀" }]
          },
          {
            role: "손님", side: "right",
            text: "Excuse me, it's a little loud near the bar. Could we possibly move to a quieter table?",
            translation: "실례합니다, 바 근처라 조금 시끄러운데요. 혹시 좀 더 조용한 테이블로 옮길 수 있을까요?",
            expressions: [{ phrase: "Could we possibly move to a quieter table?", meaning: "혹시 더 조용한 자리로 옮길 수 있을까요?" }],
            vocabulary: [{ word: "loud", meaning: "시끄러운" }, { word: "quieter", meaning: "더 조용한" }]
          },
          {
            role: "직원", side: "left",
            text: "Let me see what we have open. Would you prefer a booth in the corner or a table by the window?",
            translation: "비어 있는 자리를 확인해 보겠습니다. 구석 쪽 소파 부스석이 좋으신가요, 아니면 창가 쪽 테이블이 좋으신가요?",
            expressions: [{ phrase: "a booth in the corner or a table by the window", meaning: "구석의 소파 좌석(부스석) 또는 창가 자리" }],
            vocabulary: [{ word: "booth", meaning: "등받이 소파가 마주 보고 있는 칸막이 좌석" }, { word: "by the window", meaning: "창가에 있는" }]
          },
          {
            role: "손님", side: "right",
            text: "The table by the window looks wonderful! Is that one available?",
            translation: "창가 쪽 테이블이 아주 좋아 보이네요! 저 자리 이용 가능한가요?",
            expressions: [{ phrase: "looks wonderful!", meaning: "아주 좋아 보이네요!" }],
            vocabulary: [{ word: "wonderful", meaning: "멋진, 훌륭한" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, it was just cleared and sanitized. Please have a seat right here, and here are your menus.",
            translation: "네, 방금 치우고 소독까지 마쳤습니다. 이쪽에 앉으시고, 여기 메뉴판 보시겠습니다.",
            expressions: [{ phrase: "just cleared and sanitized", meaning: "방금 식기를 치우고 소독까지 마친" }],
            vocabulary: [{ word: "clear", meaning: "(식탁을) 치우다" }, { word: "sanitize", meaning: "위생 소독하다" }]
          },
          {
            role: "손님", side: "right",
            text: "We really appreciate it! The view from here is great.",
            translation: "배려해 주셔서 정말 감사합니다! 여기서 보이는 전망이 참 좋네요.",
            expressions: [{ phrase: "The view from here is great.", meaning: "이 자리에서 보이는 경치(전망)가 아주 좋네요." }],
            vocabulary: [{ word: "view", meaning: "전망, 경치" }]
          }
        ]
      },
      {
        id: 4,
        title: "영어/사진 메뉴판 및 대표 메뉴 추천받기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Hello! Have you had a chance to look over the menu, or do you need a few more minutes?",
            translation: "안녕하세요! 메뉴판은 다 살펴보셨나요, 아니면 시간이 조금 더 필요하신가요?",
            expressions: [{ phrase: "Have you had a chance to look over the menu?", meaning: "메뉴를 살펴보셨나요? (주문을 받기 전 웨이터가 단골로 묻는 표현)" }],
            vocabulary: [{ word: "look over", meaning: "쭉 훑어보다, 살펴보다" }]
          },
          {
            role: "손님", side: "right",
            text: "Actually, do you have an English menu or a menu with pictures we could look at?",
            translation: "실은 저희가 볼 수 있는 영어 메뉴판이나 사진이 있는 메뉴판이 따로 있을까요?",
            expressions: [{ phrase: "a menu with pictures", meaning: "음식 사진이 나와 있는 메뉴판" }],
            vocabulary: [{ word: "actually", meaning: "실은" }, { word: "picture", meaning: "사진, 그림" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! You can scan this QR code on the table to view photos, and here is our printed English menu.",
            translation: "네! 테이블 위의 이 QR 코드를 스캔하시면 음식 사진을 보실 수 있고, 여기 인쇄된 영어 메뉴판도 있습니다.",
            expressions: [{ phrase: "scan this QR code ~ to view photos", meaning: "사진을 보기 위해 QR 코드를 스캔하다" }],
            vocabulary: [{ word: "printed", meaning: "인쇄된" }]
          },
          {
            role: "손님", side: "right",
            text: "That's super helpful! What is your restaurant's signature dish that you recommend?",
            translation: "정말 큰 도움이 되네요! 추천해 주실 만한 이곳의 대표 메뉴(시그니처 메뉴)는 무엇인가요?",
            expressions: [{ phrase: "What is your restaurant's signature dish?", meaning: "이 식당의 대표(간판) 요리는 무엇인가요?" }],
            vocabulary: [{ word: "signature dish", meaning: "식당의 대표 요리, 간판 메뉴" }, { word: "recommend", meaning: "추천하다" }]
          },
          {
            role: "직원", side: "left",
            text: "We're famous for our grilled ribeye steak and our creamy truffle mushroom pasta.",
            translation: "저희는 그릴에 구운 꽃등심(립아이) 스테이크와 크리미한 트러플 버섯 파스타가 가장 유명합니다.",
            expressions: [{ phrase: "We're famous for ~", meaning: "저희 식당은 ~(메뉴)로 유명합니다" }],
            vocabulary: [{ word: "ribeye steak", meaning: "립아이(꽃등심) 스테이크" }, { word: "truffle", meaning: "트러플 (송로버섯)" }]
          },
          {
            role: "손님", side: "right",
            text: "Both sound amazing! We'll definitely try the truffle pasta and the ribeye, then.",
            translation: "둘 다 정말 맛있겠네요! 그럼 트러플 파스타랑 립아이 스테이크로 주문할게요.",
            expressions: [{ phrase: "Both sound amazing!", meaning: "두 메뉴 모두 정말 맛있게 들리네요!" }],
            vocabulary: [{ word: "definitely", meaning: "확실히, 꼭" }]
          }
        ]
      },
      {
        id: 5,
        title: "고수나 특정 재료 빼달라고 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, we're ready to order! Could we get the shrimp pad thai and the spicy beef noodle soup?",
            translation: "안녕하세요, 주문할게요! 새우 팟타이랑 매운 소고기 쌀국수 주시겠어요?",
            expressions: [{ phrase: "We're ready to order!", meaning: "저희 주문할 준비가 되었습니다!" }],
            vocabulary: [{ word: "shrimp", meaning: "새우" }, { word: "noodle soup", meaning: "국물이 있는 면 요리 (쌀국수 등)" }]
          },
          {
            role: "직원", side: "left",
            text: "Great choices! Just so you know, the beef noodle soup comes with fresh cilantro on top.",
            translation: "좋은 선택이십니다! 참고로 소고기 쌀국수 위에는 생고수가 기본으로 올라갑니다.",
            expressions: [{ phrase: "comes with fresh cilantro on top", meaning: "위에 생고수가 고명으로 올라가 나온다" }],
            vocabulary: [{ word: "cilantro", meaning: "고수 (영국·호주·유럽에서는 주로 coriander라고 부름)" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, thank goodness you told me! I can't eat cilantro. Could you please leave the cilantro out completely?",
            translation: "아, 미리 말씀해 주셔서 정말 다행이에요! 제가 고수를 못 먹거든요. 고수는 아예 빼 주실 수 있나요?",
            expressions: [{ phrase: "leave the cilantro out completely", meaning: "고수를 완전히 빼다 ('no cilantro, please' 또는 'hold the cilantro'와 동일)" }],
            vocabulary: [{ word: "leave out", meaning: "(재료를) 빼다, 제외하다" }, { word: "completely", meaning: "완전히, 아예" }]
          },
          {
            role: "직원", side: "left",
            text: "No problem at all—no cilantro! What about green onions and crushed peanuts on the pad thai?",
            translation: "전혀 문제없습니다, 고수 빼고 준비해 드릴게요! 팟타이에 들어가는 쪽파와 부순 땅콩은 괜찮으신가요?",
            expressions: [{ phrase: "What about ~?", meaning: "~(다른 재료)은 어떠신가요?" }],
            vocabulary: [{ word: "green onion", meaning: "파, 쪽파 (scallion / spring onion)" }, { word: "crushed peanuts", meaning: "잘게 부순 땅콩 가루" }]
          },
          {
            role: "손님", side: "right",
            text: "Green onions are fine, but could you serve the crushed peanuts on the side?",
            translation: "파는 괜찮은데, 부순 땅콩은 요리에 넣지 말고 따로 담아 주실 수 있나요?",
            expressions: [{ phrase: "serve ~ on the side", meaning: "(소스나 고명을 음식에 섞지 않고) 별도의 작은 접시에 따로 내어주다" }],
            vocabulary: [{ word: "on the side", meaning: "따로 곁들여 나오는" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing! I'll make a note for the kitchen: no cilantro, and peanuts on the side.",
            translation: "물론이죠! 주방에 고수는 빼고 땅콩은 따로 담아 달라고 메모해 전달하겠습니다.",
            expressions: [{ phrase: "make a note for the kitchen", meaning: "주방 주문서에 특별 요청사항을 기재하다" }],
            vocabulary: [{ word: "kitchen", meaning: "주방" }]
          }
        ]
      },
      {
        id: 6,
        title: "맵기 단계 조절 및 어린이 메뉴 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, is this garlic chili pasta very spicy?",
            translation: "실례합니다, 이 갈릭 칠리 파스타는 많이 매운 편인가요?",
            expressions: [{ phrase: "Is this ~ very spicy?", meaning: "이 메뉴는 많이 맵나요?" }],
            vocabulary: [{ word: "chili", meaning: "고추, 칠리" }, { word: "spicy", meaning: "매운" }]
          },
          {
            role: "직원", side: "left",
            text: "It has a medium kick to it, but we can adjust the spice level from 1 to 5.",
            translation: "중간 정도로 칼칼한 매운맛이 있는데, 맵기 단계를 1단계부터 5단계까지 조절해 드릴 수 있습니다.",
            expressions: [{ phrase: "It has a medium kick to it", meaning: "적당히 알싸한(매콤한) 맛이 있다" }, { phrase: "adjust the spice level", meaning: "맵기 단계를 조절하다" }],
            vocabulary: [{ word: "kick", meaning: "(양념·술 등의) 톡 쏘는 매콤함, 강렬한 맛" }, { word: "adjust", meaning: "조절하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Could we get it mild—level 1—so it's just slightly spicy?",
            translation: "살짝만 매콤하도록 순한 맛인 1단계로 해 주실 수 있나요?",
            expressions: [{ phrase: "get it mild", meaning: "순한 맛(덜 매운 맛)으로 주문하다" }],
            vocabulary: [{ word: "mild", meaning: "(맵지 않고) 순한" }, { word: "slightly", meaning: "살짝, 약간" }]
          },
          {
            role: "직원", side: "left",
            text: "Absolutely! Level 1 is very mild. And are you ordering anything for your child today?",
            translation: "그럼요! 1단계는 아주 순합니다. 그리고 오늘 아이가 먹을 메뉴도 주문하시나요?",
            expressions: [{ phrase: "ordering anything for your child", meaning: "어린이용 메뉴를 주문하다" }],
            vocabulary: [{ word: "absolutely", meaning: "물론이죠, 당연하죠" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, do you have a kids' menu with non-spicy options?",
            translation: "네, 맵지 않은 음식이 있는 어린이용 메뉴(키즈 메뉴)가 있나요?",
            expressions: [{ phrase: "kids' menu with non-spicy options", meaning: "맵지 않은 메뉴들로 구성된 어린이 메뉴판" }],
            vocabulary: [{ word: "non-spicy", meaning: "맵지 않은" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! On our kids' menu, the mac and cheese and the chicken tenders with fries come with a free apple juice.",
            translation: "네! 어린이 메뉴에 있는 맥앤치즈와 치킨텐더 감자튀김 세트에는 사과 주스가 무료로 함께 나옵니다.",
            expressions: [{ phrase: "come with a free apple juice", meaning: "무료 사과 주스가 세트로 포함되어 나오다" }],
            vocabulary: [{ word: "mac and cheese", meaning: "마카로니 앤 치즈 (어린이 단골 메뉴)" }, { word: "chicken tenders", meaning: "부드러운 닭가슴살 안심 튀김" }]
          }
        ]
      },
      {
        id: 7,
        title: "스테이크 굽기 정도 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "I'd like to order the 10-ounce New York strip steak, please.",
            translation: "10온스(약 280g)짜리 뉴욕 스트립(채끝등심) 스테이크를 주문하고 싶습니다.",
            expressions: [{ phrase: "I'd like to order ~", meaning: "~을 주문하고 싶습니다" }],
            vocabulary: [{ word: "New York strip", meaning: "채끝등심 스테이크 (sirloin은 등심, tenderloin/filet mignon은 안심)" }]
          },
          {
            role: "직원", side: "left",
            text: "Excellent choice! How would you like your steak cooked?",
            translation: "탁월한 선택이십니다! 스테이크 굽기는 어떻게 해 드릴까요?",
            expressions: [{ phrase: "How would you like your steak cooked?", meaning: "스테이크를 어느 정도 굽기로 조리해 드릴까요? (스테이크 주문 시 100% 나오는 필수 질문)" }],
            vocabulary: [{ word: "cook", meaning: "요리하다, 굽다" }]
          },
          {
            role: "손님", side: "right",
            text: "Medium-rare, please—warm red center, not too raw.",
            translation: "미디엄 레어로 부탁합니다. 너무 날것은 아니고 속이 따뜻하고 붉은 정도로요.",
            expressions: [{ phrase: "Medium-rare, please.", meaning: "미디엄 레어로 주세요. (굽기 단계: Rare → Medium-rare → Medium → Medium-well → Well-done)" }],
            vocabulary: [{ word: "center", meaning: "가운데, 중심부" }, { word: "raw", meaning: "익히지 않은, 날것의" }]
          },
          {
            role: "직원", side: "left",
            text: "Got it, medium-rare. Your steak comes with two side dishes. Which two would you like?",
            translation: "네, 미디엄 레어로 준비하겠습니다. 스테이크에는 사이드 메뉴 두 가지가 함께 나오는데 어떤 걸로 하시겠어요?",
            expressions: [{ phrase: "comes with two side dishes", meaning: "두 가지 곁들임 메뉴(사이드 디시)가 함께 제공된다" }],
            vocabulary: [{ word: "side dish", meaning: "사이드 메뉴, 곁들임 요리" }]
          },
          {
            role: "손님", side: "right",
            text: "What are the side options I can choose from?",
            translation: "고를 수 있는 사이드 메뉴에는 어떤 것들이 있나요?",
            expressions: [{ phrase: "What are the side options?", meaning: "사이드 메뉴 선택지로는 무엇이 있나요?" }],
            vocabulary: [{ word: "option", meaning: "선택지, 옵션" }]
          },
          {
            role: "직원", side: "left",
            text: "You can choose from garlic mashed potatoes, grilled asparagus, French fries, or a Caesar salad.",
            translation: "갈릭 매쉬드 포테이토(으깬 감자), 구운 아스파라거스, 감자튀김, 또는 시저 샐러드 중에서 고르실 수 있습니다.",
            expressions: [{ phrase: "You can choose from ~", meaning: "~ 중에서 선택하실 수 있습니다" }],
            vocabulary: [{ word: "grilled asparagus", meaning: "그릴에 구운 아스파라거스" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll go with the garlic mashed potatoes and the grilled asparagus, please.",
            translation: "갈릭 매쉬드 포테이토와 구운 아스파라거스로 할게요.",
            expressions: [{ phrase: "I'll go with ~", meaning: "저는 ~으로 선택하겠습니다" }],
            vocabulary: [{ word: "mashed potatoes", meaning: "으깬 감자 요리" }]
          }
        ]
      },
      {
        id: 8,
        title: "물과 앞접시, 수저 추가로 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Here is your margherita pizza and seafood linguine! Enjoy your meal.",
            translation: "주문하신 마르게리타 피자와 해산물 링귀니 파스타 나왔습니다! 맛있게 드세요.",
            expressions: [{ phrase: "Enjoy your meal.", meaning: "맛있게 드세요." }],
            vocabulary: [{ word: "linguine", meaning: "링귀니 (납작한 파스타 면)" }]
          },
          {
            role: "손님", side: "right",
            text: "Everything looks delicious! Could we get three small sharing plates since we're sharing the food?",
            translation: "전부 정말 맛있어 보이네요! 음식을 덜어 먹으려고 하는데 앞접시 3개만 주시겠어요?",
            expressions: [{ phrase: "small sharing plates", meaning: "음식을 덜어 먹는 앞접시 (side plates / share plates / extra plates)" }],
            vocabulary: [{ word: "share", meaning: "나눠 먹다, 공유하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! I'll grab three side plates and serving tongs for you right now.",
            translation: "물론이죠! 지금 바로 앞접시 3개와 덜어 먹는 집게를 가져다드리겠습니다.",
            expressions: [{ phrase: "side plates and serving tongs", meaning: "앞접시와 음식 덜어 먹는 서빙 집게" }],
            vocabulary: [{ word: "tongs", meaning: "집게" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! Could we also get a small spoon and fork for our child, and a refill on our water?",
            translation: "감사합니다! 아이가 쓸 작은 숟가락과 포크 한 세트, 그리고 물도 리필해 주실 수 있나요?",
            expressions: [{ phrase: "a refill on our water", meaning: "마시는 물 리필(추가)" }],
            vocabulary: [{ word: "refill", meaning: "리필, 다시 채움" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure! Would you like room-temperature water with no ice for the little one?",
            translation: "그럼요! 아이가 마실 물은 얼음 없이 미지근한(상온) 물로 갖다 드릴까요?",
            expressions: [{ phrase: "room-temperature water with no ice", meaning: "얼음을 넣지 않은 상온의 물" }],
            vocabulary: [{ word: "room-temperature", meaning: "상온의, 차갑지 않은" }, { word: "little one", meaning: "어린아이 (친근하고 정중한 표현)" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, water with no ice in a plastic cup would be perfect. Thank you!",
            translation: "네, 플라스틱 컵에 얼음 뺀 물로 주시면 완벽할 것 같아요. 감사합니다!",
            expressions: [{ phrase: "in a plastic cup", meaning: "(아이가 깨뜨리지 않도록) 플라스틱 컵에 담아" }],
            vocabulary: [{ word: "plastic cup", meaning: "플라스틱 컵" }]
          }
        ]
      },
      {
        id: 9,
        title: "음식이 너무 늦게 나올 때 확인 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, sorry to bother you, but could you check on our food order?",
            translation: "실례합니다, 번거롭게 해 드려 죄송하지만 저희 주문한 음식이 어떻게 되고 있는지 확인해 주시겠어요?",
            expressions: [{ phrase: "could you check on our food order?", meaning: "저희 음식 주문 상태를 확인해 주시겠어요?" }],
            vocabulary: [{ word: "bother", meaning: "번거롭게 하다, 방해하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Oh, have you been waiting long? Let me check when your order was placed.",
            translation: "아, 오래 기다리셨나요? 주문이 언제 들어갔는지 확인해 보겠습니다.",
            expressions: [{ phrase: "Have you been waiting long?", meaning: "오래 기다리고 계셨나요?" }],
            vocabulary: [{ word: "place an order", meaning: "주문을 넣다" }]
          },
          {
            role: "손님", side: "right",
            text: "We ordered our main dishes about 40 minutes ago, and the table next to us already got theirs.",
            translation: "메인 요리를 주문한 지 40분 정도 지났는데, 저희보다 늦게 온 옆 테이블은 이미 음식이 나왔거든요.",
            expressions: [{ phrase: "ordered ~ about 40 minutes ago", meaning: "약 40분 전에 ~을 주문했다" }],
            vocabulary: [{ word: "main dish", meaning: "메인 요리 (미국에서는 entrée라고도 부름)" }]
          },
          {
            role: "직원", side: "left",
            text: "I'm so sorry about that! Let me run to the kitchen and check with the chef right away.",
            translation: "정말 죄송합니다! 지금 바로 주방으로 가서 셰프에게 확인해 보겠습니다.",
            expressions: [{ phrase: "check with the chef right away", meaning: "즉시 주방장(셰프)에게 확인하다" }],
            vocabulary: [{ word: "chef", meaning: "주방장, 셰프" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you. We just want to make sure we don't miss our tour bus at 7:30 PM.",
            translation: "감사합니다. 저녁 7시 30분에 타야 할 투어 버스를 놓치지 않아야 해서요.",
            expressions: [{ phrase: "make sure we don't miss ~", meaning: "~을 놓치지 않도록 확실히 하다" }],
            vocabulary: [{ word: "miss", meaning: "(버스·시간 등을) 놓치다" }]
          },
          {
            role: "직원", side: "left",
            text: "I just checked—your dishes are being plated right now and will be out in one minute! We'll also take the drinks off your bill for the wait.",
            translation: "방금 확인했는데 지금 접시에 담고 있어서 1분 내로 바로 나옵니다! 기다리시게 한 사과의 의미로 음료 금액은 계산서에서 빼 드리겠습니다.",
            expressions: [{ phrase: "being plated right now", meaning: "조리가 끝나 지금 접시에 담아내는(플레이팅하는) 중이다" }, { phrase: "take the drinks off your bill", meaning: "계산서에서 음료값을 빼주다(무료 서비스 처리하다)" }],
            vocabulary: [{ word: "plate", meaning: "음식을 접시에 담다" }, { word: "bill", meaning: "계산서" }]
          }
        ]
      },
      {
        id: 10,
        title: "주문한 메뉴와 다른 음식이 나왔을 때",
        lines: [
          {
            role: "직원", side: "left",
            text: "Here you go! One bacon carbonara and one spicy seafood pasta.",
            translation: "음식 나왔습니다! 베이컨 까르보나라 하나와 매운 해산물 파스타 하나입니다.",
            expressions: [{ phrase: "Here you go!", meaning: "여기 있습니다! (주문한 음식을 내려놓을 때)" }],
            vocabulary: [{ word: "seafood", meaning: "해산물" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, excuse me! I think there's a mix-up. We ordered the clam vongole pasta, not the spicy seafood.",
            translation: "아, 저기요! 착오가 있는 것 같습니다. 저희는 매운 해산물 파스타가 아니라 조개 봉골레 파스타를 주문했거든요.",
            expressions: [{ phrase: "I think there's a mix-up.", meaning: "착오(혼선)가 있는 것 같습니다." }, { phrase: "We ordered A, not B.", meaning: "저희는 B가 아니라 A를 주문했습니다." }],
            vocabulary: [{ word: "mix-up", meaning: "착오, 혼동" }, { word: "clam", meaning: "조개" }]
          },
          {
            role: "직원", side: "left",
            text: "Let me check my order pad... Oh no, I punched in the wrong pasta by mistake! I am so sorry.",
            translation: "주문서를 확인해 보겠습니다... 아이고, 제가 실수로 다른 파스타를 입력했네요! 정말 죄송합니다.",
            expressions: [{ phrase: "punched in the wrong ~ by mistake", meaning: "포스기(단말기)에 실수로 다른 메뉴를 잘못 입력했다" }],
            vocabulary: [{ word: "punch in", meaning: "(기계·단말기에 주문을) 입력하다" }, { word: "by mistake", meaning: "실수로" }]
          },
          {
            role: "손님", side: "right",
            text: "No worries! How long will it take to make the clam vongole?",
            translation: "괜찮습니다! 조개 봉골레 파스타를 새로 만드는 데 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "How long will it take to make ~?", meaning: "~을 조리하는 데 시간이 얼마나 걸릴까요?" }],
            vocabulary: [{ word: "no worries", meaning: "괜찮습니다, 걱정 마세요" }]
          },
          {
            role: "직원", side: "left",
            text: "The kitchen can make it on priority in about 5 minutes. Meanwhile, please feel free to keep this seafood pasta on the house!",
            translation: "주방에서 최우선으로 조리해서 약 5분 내로 내어드릴 수 있습니다. 기다리시는 동안 이 해산물 파스타는 무료 서비스로 그냥 드셔도 됩니다!",
            expressions: [{ phrase: "on priority", meaning: "최우선 순위로 (가장 먼저)" }, { phrase: "on the house", meaning: "가게 부담의 무료 서비스로" }],
            vocabulary: [{ word: "meanwhile", meaning: "그동안에" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, thank you so much! We really appreciate how quickly you handled it.",
            translation: "와, 정말 감사합니다! 빠르게 처리해 주셔서 정말 고마워요.",
            expressions: [{ phrase: "how quickly you handled it", meaning: "문제를 신속하게 처리해 준 것" }],
            vocabulary: [{ word: "handle", meaning: "(문제·상황을) 처리하다, 다루다" }]
          }
        ]
      },
      {
        id: 11,
        title: "사이드 메뉴와 음료 추가 주문하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "How is everything tasting so far? Can I get you anything else?",
            translation: "음식은 입에 잘 맞으시나요? 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "How is everything tasting so far?", meaning: "지금까지 식사 맛이 어떠신가요? (식사 도중 직원이 테이블을 살피며 묻는 단골 인사)" }],
            vocabulary: [{ word: "so far", meaning: "지금까지는" }]
          },
          {
            role: "손님", side: "right",
            text: "The steak and pasta are incredible! Could we order a couple more things?",
            translation: "스테이크와 파스타가 정말 훌륭해요! 메뉴를 한두 개만 더 추가 주문해도 될까요?",
            expressions: [{ phrase: "Could we order a couple more things?", meaning: "몇 가지 더 추가 주문할 수 있을까요?" }],
            vocabulary: [{ word: "incredible", meaning: "믿을 수 없을 만큼 맛있는, 훌륭한" }]
          },
          {
            role: "직원", side: "left",
            text: "Absolutely! What else can I bring out for you?",
            translation: "물론이죠! 어떤 메뉴를 추가로 가져다드릴까요?",
            expressions: [{ phrase: "What else can I bring out for you?", meaning: "무엇을 더 내어드릴까요?" }],
            vocabulary: [{ word: "bring out", meaning: "(음식을 주방에서) 가지고 나오다" }]
          },
          {
            role: "손님", side: "right",
            text: "Could we get an order of garlic bread to dip in the pasta sauce, and one more glass of draft beer?",
            translation: "파스타 소스에 찍어 먹을 마늘빵 한 접시랑, 생맥주 한 잔만 더 주시겠어요?",
            expressions: [{ phrase: "an order of garlic bread", meaning: "마늘빵 1인분(한 접시)" }, { phrase: "dip in the pasta sauce", meaning: "파스타 소스에 찍어 먹다" }],
            vocabulary: [{ word: "dip", meaning: "(소스에) 살짝 찍다" }, { word: "draft beer", meaning: "생맥주 (영국·호주에서는 tap beer / draught beer)" }]
          },
          {
            role: "직원", side: "left",
            text: "Sure thing! One basket of warm garlic bread and another pint of the local lager, right?",
            translation: "네! 따뜻한 마늘빵 한 바구니와 로컬 라거 생맥주 한 파인트 추가 맞으시죠?",
            expressions: [{ phrase: "another pint of ~", meaning: "생맥주 한 파인트(약 473~568mL 잔) 더" }],
            vocabulary: [{ word: "pint", meaning: "파인트 (맥주잔 기본 규격 단위)" }, { word: "local lager", meaning: "현지 라거 맥주" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! That'll be all for now.",
            translation: "네, 맞습니다! 지금은 그게 전부예요.",
            expressions: [{ phrase: "That'll be all for now.", meaning: "지금은 그것으로 충분합니다." }],
            vocabulary: [{ word: "for now", meaning: "일단은, 지금은" }]
          }
        ]
      },
      {
        id: 12,
        title: "생일/기념일 좌석 및 서비스 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I made a reservation online, and I mentioned in the notes that we're celebrating a birthday tonight.",
            translation: "안녕하세요! 온라인으로 예약하면서 요청사항란에 오늘 저녁 생일 축하 자리라고 적어 두었는데요.",
            expressions: [{ phrase: "mentioned in the notes", meaning: "예약 요청사항(메모란)에 기재했다" }, { phrase: "celebrating a birthday", meaning: "생일을 축하하다" }],
            vocabulary: [{ word: "celebrate", meaning: "기념하다, 축하하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Happy birthday! Yes, we saw your note and saved our best window table overlooking the bay for your family.",
            translation: "생일 축하드립니다! 네, 메모 확인하고 바다가 내려다보이는 가장 좋은 창가 테이블을 가족분들을 위해 비워 두었습니다.",
            expressions: [{ phrase: "overlooking the bay", meaning: "만(바다)이 한눈에 내려다보이는" }],
            vocabulary: [{ word: "save", meaning: "(자리를) 맡아 두다, 비워 두다" }, { word: "overlook", meaning: "내려다보다" }]
          },
          {
            role: "손님", side: "right",
            text: "That's so sweet! By the way, do you offer any special birthday desserts?",
            translation: "정말 감사해요! 그런데 혹시 특별한 생일 기념 디저트 서비스 같은 것도 있나요?",
            expressions: [{ phrase: "special birthday desserts", meaning: "생일 기념 특별 디저트" }],
            vocabulary: [{ word: "offer", meaning: "제공하다" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! After your meal, we bring out a complimentary slice of cheesecake with a candle on top.",
            translation: "네! 식사를 마치시면 초를 꽂은 무료 치즈케이크 한 조각을 서비스로 내어드립니다.",
            expressions: [{ phrase: "complimentary slice of cheesecake", meaning: "무료 서비스로 제공되는 치즈케이크 한 조각" }],
            vocabulary: [{ word: "complimentary", meaning: "무료 서비스의" }, { word: "candle", meaning: "양초, 생일 초" }]
          },
          {
            role: "손님", side: "right",
            text: "Wow, thank you! When you bring the cake out, could you also take a photo of the three of us?",
            translation: "와, 감사합니다! 케이크 가져다주실 때 저희 세 명 가족사진도 한 장 찍어 주실 수 있나요?",
            expressions: [{ phrase: "take a photo of the three of us", meaning: "저희 세 명의 사진을 찍어 주다" }],
            vocabulary: [{ word: "the three of us", meaning: "우리 세 사람" }]
          },
          {
            role: "직원", side: "left",
            text: "We'd be delighted to! Just give me a little wave when you're finished with your main course.",
            translation: "기꺼이 찍어 드리죠! 메인 요리를 다 드셨을 때 저에게 살짝 손짓만 해 주세요.",
            expressions: [{ phrase: "We'd be delighted to!", meaning: "기꺼이 해 드리겠습니다!" }, { phrase: "give me a little wave", meaning: "살짝 손을 흔들어 신호를 주다" }],
            vocabulary: [{ word: "delighted", meaning: "매우 기쁜" }, { word: "main course", meaning: "주요리 (메인 코스)" }]
          }
        ]
      },
      {
        id: 13,
        title: "남은 음식 포장(투고 박스) 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "Are you still working on your dishes, or can I clear the plates for you?",
            translation: "식사 계속하시는 중인가요, 아니면 접시를 치워 드릴까요?",
            expressions: [{ phrase: "Are you still working on your dishes?", meaning: "아직 식사 중이신가요? (음식이 조금 남아 있을 때 치워도 될지 묻는 정중한 표현)" }],
            vocabulary: [{ word: "work on ~", meaning: "(음식을) 계속 먹는 중이다" }, { word: "clear the plates", meaning: "빈 접시를 치우다" }]
          },
          {
            role: "손님", side: "right",
            text: "We're completely stuffed—the portions here are huge! Could we get the rest of this pizza and ribs wrapped up to go?",
            translation: "배가 완전히 불렀어요, 여기 음식 양이 정말 푸짐하네요! 남은 피자와 폭립을 포장해 갈 수 있을까요?",
            expressions: [{ phrase: "We're completely stuffed", meaning: "배가 완전히 부르다" }, { phrase: "get the rest of ~ wrapped up to go", meaning: "남은 음식을 포장해 가다" }],
            vocabulary: [{ word: "portion", meaning: "1인분 양, 음식 분량" }, { word: "ribs", meaning: "폭립, 갈비 바비큐" }]
          },
          {
            role: "직원", side: "left",
            text: "Of course! Would you like me to bring some to-go boxes to the table, or pack them up for you in the back?",
            translation: "물론이죠! 테이블로 포장 용기(투고 박스)를 가져다드릴까요, 아니면 주방 쪽에서 담아다 드릴까요?",
            expressions: [{ phrase: "to-go boxes", meaning: "남은 음식 포장 용기 (takeout containers)" }],
            vocabulary: [{ word: "pack up", meaning: "용기에 담아 포장하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Packing them up for us would be great, thank you!",
            translation: "담아서 포장해 주시면 정말 감사하겠습니다!",
            expressions: [{ phrase: "Packing them up for us would be great", meaning: "직접 포장해 주시면 아주 좋겠습니다" }],
            vocabulary: [{ word: "great", meaning: "아주 좋은" }]
          },
          {
            role: "직원", side: "left",
            text: "Here is your bag! I also put some extra napkins, wet wipes, and plastic forks inside.",
            translation: "여기 포장 가방 있습니다! 안에 여분의 냅킨과 물티슈, 일회용 포크도 함께 넣어 드렸어요.",
            expressions: [{ phrase: "wet wipes", meaning: "물티슈 (wet towelettes)" }],
            vocabulary: [{ word: "plastic fork", meaning: "일회용 플라스틱 포크" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you so much! We'll enjoy the leftovers back at our hotel tonight.",
            translation: "정말 감사합니다! 오늘 밤 호텔로 돌아가서 남은 음식도 맛있게 먹을게요.",
            expressions: [{ phrase: "enjoy the leftovers", meaning: "남은 음식을 맛있게 먹다" }],
            vocabulary: [{ word: "leftovers", meaning: "먹고 남은 음식" }]
          }
        ]
      },
      {
        id: 14,
        title: "계산서 요청 및 테이블 결제 문의",
        lines: [
          {
            role: "직원", side: "left",
            text: "Would you care for any coffee, tea, or dessert tonight?",
            translation: "오늘 저녁 후식으로 커피나 차, 또는 디저트 하시겠어요?",
            expressions: [{ phrase: "Would you care for ~?", meaning: "~을 드시겠어요? ('Would you like ~?'보다 격식 있고 정중한 표현)" }],
            vocabulary: [{ word: "dessert", meaning: "디저트, 후식" }]
          },
          {
            role: "손님", side: "right",
            text: "No, thank you, we're all good! Could we get the check whenever you have a chance?",
            translation: "아뇨, 괜찮습니다! 편하실 때 계산서 좀 가져다주시겠어요?",
            expressions: [{ phrase: "Could we get the check?", meaning: "계산서 좀 주시겠어요? (영국·호주에서는 'Could we have the bill?')" }],
            vocabulary: [{ word: "check", meaning: "계산서, 빌지 (bill)" }]
          },
          {
            role: "직원", side: "left",
            text: "Here is your check. Take your time—there's no rush at all.",
            translation: "여기 계산서 있습니다. 전혀 서두르지 마시고 천천히 확인하세요.",
            expressions: [{ phrase: "there's no rush at all", meaning: "전혀 서두르실 필요 없습니다" }],
            vocabulary: [{ word: "rush", meaning: "서두름" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! By the way, do I pay right here at the table, or up at the front counter?",
            translation: "감사합니다! 그런데 결제는 여기 테이블에서 바로 하나요, 아니면 입구 카운터에서 하나요?",
            expressions: [{ phrase: "pay right here at the table, or up at the front counter", meaning: "테이블에서 결제할지, 카운터 계산대에서 결제할지" }],
            vocabulary: [{ word: "front counter", meaning: "입구 쪽 계산대 (cashier)" }]
          },
          {
            role: "직원", side: "left",
            text: "I'll take care of the payment right here at the table! I have a wireless card terminal with me.",
            translation: "바로 여기 테이블에서 제가 결제를 도와드립니다! 무선 카드 단말기를 가지고 왔어요.",
            expressions: [{ phrase: "take care of the payment", meaning: "결제를 처리해 드리다" }, { phrase: "wireless card terminal", meaning: "휴대용 무선 카드 결제기" }],
            vocabulary: [{ word: "wireless", meaning: "무선의" }, { word: "terminal", meaning: "결제 단말기" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, that's very convenient! I'll tap my credit card right here.",
            translation: "오, 아주 편리하네요! 여기에 신용카드를 태그할게요.",
            expressions: [{ phrase: "That's very convenient!", meaning: "정말 편리하네요!" }],
            vocabulary: [{ word: "convenient", meaning: "편리한" }]
          }
        ]
      },
      {
        id: 15,
        title: "더치페이(개별 카드 결제) 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, we're ready for the bill. Is it possible to get separate checks for our table?",
            translation: "실례합니다, 이제 계산하려고 하는데요. 저희 테이블 계산서를 개별로 나누어 받을 수 있을까요?",
            expressions: [{ phrase: "get separate checks", meaning: "각자 먹은 대로 계산서를 따로 나누어 받다" }],
            vocabulary: [{ word: "separate", meaning: "개별의, 분리된" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we can either split the bill by what each person ordered, or divide the total evenly across two cards.",
            translation: "네, 각자 주문하신 메뉴별로 계산서를 나눌 수도 있고, 전체 총액을 카드 두 장으로 똑같이 반반 나눌 수도 있습니다.",
            expressions: [{ phrase: "split the bill by what each person ordered", meaning: "각자 주문한 메뉴에 따라 계산서를 나누다" }, { phrase: "divide the total evenly", meaning: "총액을 균등하게(똑같이) 나누다" }],
            vocabulary: [{ word: "evenly", meaning: "균등하게, 똑같이" }]
          },
          {
            role: "손님", side: "right",
            text: "Could we split it by item? I'll pay for the steak and iced tea, and my friend will pay for the pasta and wine.",
            translation: "주문한 메뉴별로 나눠 주시겠어요? 스테이크와 아이스티는 제가 결제하고, 파스타와 와인은 제 친구가 결제할게요.",
            expressions: [{ phrase: "split it by item", meaning: "주문 품목별로 나누어 계산하다" }],
            vocabulary: [{ word: "item", meaning: "품목, 메뉴 항목" }]
          },
          {
            role: "직원", side: "left",
            text: "No problem at all! I've printed two separate itemized bills for you right here.",
            translation: "전혀 문제없습니다! 두 분의 세부 내역이 나뉜 개별 계산서 두 장을 바로 출력해 왔습니다.",
            expressions: [{ phrase: "two separate itemized bills", meaning: "항목별로 분리된 두 장의 개별 계산서" }],
            vocabulary: [{ word: "itemized bill", meaning: "품목별 내역이 적힌 계산서" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you so much for separating them! We'll both pay with contactless cards.",
            translation: "나눠 주셔서 정말 감사합니다! 저희 둘 다 비접촉(태그) 카드로 결제할게요.",
            expressions: [{ phrase: "pay with contactless cards", meaning: "비접촉 터치 카드로 결제하다" }],
            vocabulary: [{ word: "both", meaning: "둘 다" }]
          },
          {
            role: "직원", side: "left",
            text: "Great! Let's tap the first bill for $42.00 right here on the machine.",
            translation: "좋습니다! 먼저 첫 번째 42달러 계산서부터 여기 단말기에 태그해 주세요.",
            expressions: [{ phrase: "tap the first bill for ~", meaning: "~ 금액의 첫 번째 계산서를 태그 결제하다" }],
            vocabulary: [{ word: "machine", meaning: "카드 결제 단말기" }]
          }
        ]
      },
      {
        id: 16,
        title: "계산서 내역 오류 정중히 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, could you take a quick look at our bill? I think there might be a small mistake.",
            translation: "실례합니다, 저희 계산서 좀 잠깐 봐주시겠어요? 작은 착오가 있는 것 같아서요.",
            expressions: [{ phrase: "I think there might be a small mistake.", meaning: "작은 착오(실수)가 있는 것 같습니다. (기분 나쁘지 않게 정중히 오류를 지적하는 표현)" }],
            vocabulary: [{ word: "take a quick look", meaning: "잠깐 살펴보다" }, { word: "mistake", meaning: "실수, 착오" }]
          },
          {
            role: "직원", side: "left",
            text: "Oh, let me see! Which item on the bill looks incorrect?",
            translation: "아, 어디 보겠습니다! 계산서의 어떤 항목이 잘못되었나요?",
            expressions: [{ phrase: "Which item ~ looks incorrect?", meaning: "어느 항목이 잘못되어 보이나요?" }],
            vocabulary: [{ word: "incorrect", meaning: "부정확한, 잘못된" }]
          },
          {
            role: "손님", side: "right",
            text: "It shows three glasses of house wine here, but we only ordered and received two glasses.",
            translation: "여기 하우스 와인이 세 잔으로 찍혀 있는데, 저희는 두 잔만 주문해서 마셨거든요.",
            expressions: [{ phrase: "It shows ~ here, but we only ordered ~", meaning: "여기에는 ~로 나와 있지만, 저희는 ~만 주문했습니다" }],
            vocabulary: [{ word: "house wine", meaning: "식당에서 잔 단위로 파는 기본 와인" }, { word: "receive", meaning: "받다" }]
          },
          {
            role: "직원", side: "left",
            text: "Let me check... You are completely right! I accidentally rang up an extra glass of wine. I'm so sorry about that!",
            translation: "확인해 보겠습니다... 손님 말씀이 맞네요! 제가 실수로 와인 한 잔을 더 찍었습니다. 정말 죄송합니다!",
            expressions: [{ phrase: "accidentally rang up an extra ~", meaning: "실수로 ~을 하나 더 포스기에 찍었다(청구했다)" }],
            vocabulary: [{ word: "ring up (rang up)", meaning: "(계산기에 가격을) 입력하다, 찍다" }]
          },
          {
            role: "손님", side: "right",
            text: "No problem at all, mistakes happen! Could you print an updated bill for us?",
            translation: "전혀 괜찮습니다, 그럴 수도 있죠! 수정된 계산서로 다시 뽑아 주시겠어요?",
            expressions: [{ phrase: "mistakes happen!", meaning: "누구나 실수할 수 있죠! (직원을 배려하는 너그러운 표현)" }, { phrase: "updated bill", meaning: "내역이 수정된 새 계산서" }],
            vocabulary: [{ word: "updated", meaning: "업데이트된, 수정된" }]
          },
          {
            role: "직원", side: "left",
            text: "Here is the corrected check with the third wine removed. Thank you so much for catching that!",
            translation: "세 번째 와인을 삭제한 수정된 계산서 여기 있습니다. 발견하고 알려주셔서 정말 감사합니다!",
            expressions: [{ phrase: "Thank you so much for catching that!", meaning: "오류를 발견해 주셔서 정말 감사합니다!" }],
            vocabulary: [{ word: "corrected", meaning: "정정된, 수정된" }, { word: "remove", meaning: "삭제하다, 빼다" }]
          }
        ]
      },
      {
        id: 17,
        title: "팁 포함 여부 및 결제 방식 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi, I'm looking at the bill and I see an 18% 'Service Charge' listed here. Does that mean the tip is already included?",
            translation: "안녕하세요, 계산서를 보니 여기에 18% '서비스 차지(봉사료)'가 적혀 있는데요. 팁이 이미 포함되어 있다는 뜻인가요?",
            expressions: [{ phrase: "Does that mean the tip is already included?", meaning: "팁이 이미 포함되어 있다는 뜻인가요? (이중 팁 지불을 막기 위해 꼭 확인해야 할 표현)" }],
            vocabulary: [{ word: "service charge", meaning: "봉사료 (팁)" }, { word: "included", meaning: "포함된" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! Since this is a tourist district, an automatic 18% gratuity is already included in your total.",
            translation: "네! 여기가 관광지 구역이라 총액에 이미 18%의 봉사료(팁)가 자동으로 포함되어 있습니다.",
            expressions: [{ phrase: "automatic 18% gratuity is already included", meaning: "18%의 팁(봉사료)이 이미 자동 합산되어 있다" }],
            vocabulary: [{ word: "gratuity", meaning: "팁, 봉사료 (영수증에 자주 찍히는 공식 용어)" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, so I don't need to add an additional tip on the receipt, right?",
            translation: "아, 그럼 영수증에 별도로 추가 팁을 더 적지 않아도 되는 거죠?",
            expressions: [{ phrase: "add an additional tip", meaning: "추가 팁을 더 얹어 주다" }],
            vocabulary: [{ word: "additional", meaning: "추가적인" }]
          },
          {
            role: "직원", side: "left",
            text: "Exactly! You can just write zero or draw a line on the additional tip line and sign at the bottom.",
            translation: "맞습니다! 추가 팁 적는 칸에는 그냥 0을 적으시거나 줄을 긋고, 맨 아래에 서명만 해 주시면 됩니다.",
            expressions: [{ phrase: "draw a line on the additional tip line", meaning: "추가 팁 입력란에 줄을 긋다" }],
            vocabulary: [{ word: "sign", meaning: "서명하다" }, { word: "bottom", meaning: "맨 아래, 하단" }]
          },
          {
            role: "손님", side: "right",
            text: "Thanks for explaining that honestly! Which copy of the receipt do I leave on the table?",
            translation: "정직하게 설명해 주셔서 감사합니다! 영수증 두 장 중 어느 것을 테이블에 두고 가면 되나요?",
            expressions: [{ phrase: "Which copy of the receipt do I leave?", meaning: "영수증 사본 중 어느 것을 남겨두고 가야 하나요?" }],
            vocabulary: [{ word: "copy", meaning: "사본, 전표" }]
          },
          {
            role: "직원", side: "left",
            text: "Please sign and leave the 'Merchant Copy' on the table, and take the 'Customer Copy' with you!",
            translation: "서명하신 후 '가맹점 보관용(Merchant Copy)'은 테이블에 두고 가시고, '고객 보관용(Customer Copy)'을 챙겨 가시면 됩니다!",
            expressions: [{ phrase: "Merchant Copy / Customer Copy", meaning: "가맹점(식당) 보관용 전표 / 고객 보관용 영수증" }],
            vocabulary: [{ word: "merchant", meaning: "상인, 가맹점" }]
          }
        ]
      },
      {
        id: 18,
        title: "식재료 알레르기(갑각류/땅콩) 알리기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Before we order, I want to let you know that I have a severe shellfish allergy—especially shrimp and crab.",
            translation: "주문하기 전에, 제가 새우나 게 같은 갑각류 알레르기가 심하다는 점을 먼저 말씀드리고 싶어요.",
            expressions: [{ phrase: "I have a severe shellfish allergy", meaning: "저는 심한 갑각류(새우·게·랍스터 등) 알레르기가 있습니다" }],
            vocabulary: [{ word: "severe", meaning: "심각한, 심한" }, { word: "shellfish", meaning: "갑각류 및 조개류" }]
          },
          {
            role: "직원", side: "left",
            text: "Thank you for telling me! Do we also need to be strict about cross-contamination in the kitchen?",
            translation: "미리 말씀해 주셔서 감사합니다! 주방에서 조리 기구 교차 오염까지도 엄격히 주의해야 할까요?",
            expressions: [{ phrase: "strict about cross-contamination", meaning: "교차 오염(같은 기름이나 프라이팬 사용 등)에 대해 엄격히 주의하다" }],
            vocabulary: [{ word: "strict", meaning: "엄격한, 철저한" }, { word: "cross-contamination", meaning: "교차 오염" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, even shared frying oil or broth made with shrimp can cause an allergic reaction.",
            translation: "네, 새우를 튀긴 기름을 같이 쓰거나 새우로 우려낸 육수만 먹어도 알레르기 반응이 일어날 수 있어요.",
            expressions: [{ phrase: "cause an allergic reaction", meaning: "알레르기 반응을 일으키다" }],
            vocabulary: [{ word: "frying oil", meaning: "튀김 기름" }, { word: "broth", meaning: "육수, 국물" }]
          },
          {
            role: "직원", side: "left",
            text: "Understood. Our French fries share a fryer with coconut shrimp, so please avoid those. However, our grilled salmon is cooked in a clean, separate pan.",
            translation: "알겠습니다. 감자튀김은 코코넛 쉬림프와 튀김기를 같이 쓰니 피해 주세요. 대신 구운 연어 스테이크는 깨끗한 별도 팬에서 조리됩니다.",
            expressions: [{ phrase: "share a fryer with ~", meaning: "~와 튀김기를 함께 사용하다" }, { phrase: "cooked in a clean, separate pan", meaning: "깨끗하게 분리된 별도의 프라이팬에 조리되다" }],
            vocabulary: [{ word: "fryer", meaning: "튀김기" }, { word: "salmon", meaning: "연어 ('l'은 묵음으로 [새먼]으로 발음)" }]
          },
          {
            role: "손님", side: "right",
            text: "That's so helpful to know! Does the sauce on the grilled salmon contain any oyster sauce or fish sauce?",
            translation: "알려주셔서 정말 다행이에요! 구운 연어에 올라가는 소스에는 굴소스나 피시소스(액젓)가 들어가지 않나요?",
            expressions: [{ phrase: "contain any oyster sauce or fish sauce", meaning: "굴소스나 피시소스 성분을 포함하다" }],
            vocabulary: [{ word: "oyster sauce", meaning: "굴소스" }, { word: "fish sauce", meaning: "피시소스, 액젓" }]
          },
          {
            role: "직원", side: "left",
            text: "No, it's just olive oil, lemon, and herbs! I'll put an 'ALLERGY ALERT' on your ticket so the chef uses fresh gloves and utensils.",
            translation: "네, 올리브오일과 레몬, 허브만 들어갑니다! 셰프가 새 장갑과 새 조리 도구를 쓰도록 주문서에 '알레르기 주의' 표시를 해 두겠습니다.",
            expressions: [{ phrase: "put an 'ALLERGY ALERT' on your ticket", meaning: "주방 주문서에 알레르기 경보(주의) 표시를 넣다" }],
            vocabulary: [{ word: "utensils", meaning: "조리 도구, 식기류" }]
          }
        ]
      },
      {
        id: 19,
        title: "비건·채식 옵션 메뉴 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! One person in our group doesn't eat meat. Do you have vegetarian or vegan options on the menu?",
            translation: "안녕하세요! 저희 일행 중 한 명이 고기를 먹지 않는데요. 메뉴에 채식(베지테리언)이나 비건 옵션이 있나요?",
            expressions: [{ phrase: "vegetarian or vegan options", meaning: "채식주의자용 또는 완전 채식(비건) 메뉴 선택지" }],
            vocabulary: [{ word: "vegetarian", meaning: "채식주의자 (우유·달걀은 먹는 경우가 많음)" }, { word: "vegan", meaning: "비건 (유제품·달걀까지 제외한 완전 채식)" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes! Any dish marked with a green leaf icon on the menu is vegetarian, and the 'V+' icon means 100% plant-based vegan.",
            translation: "네! 메뉴판에 초록색 나뭇잎 아이콘이 표시된 요리는 전부 채식 메뉴이고, 'V+' 아이콘은 100% 식물성 비건 메뉴입니다.",
            expressions: [{ phrase: "100% plant-based vegan", meaning: "100% 식물성 재료로만 만든 비건 요리" }],
            vocabulary: [{ word: "marked with ~", meaning: "~로 표시된" }, { word: "plant-based", meaning: "식물성 기반의" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, the roasted mushroom risotto has a green leaf! Is the risotto made with chicken stock or vegetable broth?",
            translation: "오, 구운 버섯 리조또에 초록 나뭇잎 표시가 있네요! 이 리조또는 닭육수로 만드나요, 아니면 채소 육수로 만드나요?",
            expressions: [{ phrase: "made with chicken stock or vegetable broth", meaning: "치킨 스톡(닭육수)으로 만들었는지 채소 육수(채수)로 만들었는지" }],
            vocabulary: [{ word: "chicken stock", meaning: "닭고기 육수" }, { word: "vegetable broth", meaning: "채소 육수 (채수)" }]
          },
          {
            role: "직원", side: "left",
            text: "Good question! We make our risotto using 100% homemade vegetable broth, so there's no meat stock at all.",
            translation: "좋은 질문이십니다! 저희는 직접 끓인 100% 채소 육수로 리조또를 만들어서 육류 육수가 전혀 들어가지 않습니다.",
            expressions: [{ phrase: "no meat stock at all", meaning: "고기 육수가 전혀 들어가지 않은" }],
            vocabulary: [{ word: "homemade", meaning: "매장에서 직접 만든, 수제의" }]
          },
          {
            role: "손님", side: "right",
            text: "Can it also be made vegan without butter and Parmesan cheese?",
            translation: "버터와 파마산 치즈도 빼서 완전 비건식으로 조리해 주실 수도 있나요?",
            expressions: [{ phrase: "without butter and Parmesan cheese", meaning: "버터와 파마산 치즈를 넣지 않고" }],
            vocabulary: [{ word: "Parmesan cheese", meaning: "파마산 치즈" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, we can substitute extra-virgin olive oil for the butter and leave off the cheese!",
            translation: "네, 버터 대신 엑스트라 버진 올리브오일을 사용하고 치즈는 빼서 만들어 드릴 수 있습니다!",
            expressions: [{ phrase: "substitute A for B", meaning: "B 대신 A를 대체하여 넣다" }, { phrase: "leave off the cheese", meaning: "치즈를 올리지 않고 빼다" }],
            vocabulary: [{ word: "substitute", meaning: "대체하다" }]
          }
        ]
      },
      {
        id: 20,
        title: "식사 후 근처 볼거리나 택시 호출 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Thank you for a wonderful dinner! Everything was delicious. By the way, is there a nice place to take a walk nearby?",
            translation: "훌륭한 저녁 식사 감사했습니다! 전부 정말 맛있었어요. 그런데 혹시 이 근처에 산책하기 좋은 곳이 있나요?",
            expressions: [{ phrase: "a nice place to take a walk nearby", meaning: "근처에 산책하기 좋은 장소" }],
            vocabulary: [{ word: "take a walk", meaning: "산책하다" }, { word: "nearby", meaning: "근처에, 인근에" }]
          },
          {
            role: "직원", side: "left",
            text: "Thank you so much! If you walk two blocks down this street, there's a beautiful harbourfront boardwalk with great night views.",
            translation: "정말 감사합니다! 이 거리를 따라 두 블록만 내려가시면 야경이 멋진 아름다운 항구 수변 산책로가 있습니다.",
            expressions: [{ phrase: "walk two blocks down this street", meaning: "이 길을 따라 두 블록 걸어가다" }, { phrase: "great night views", meaning: "멋진 야경" }],
            vocabulary: [{ word: "boardwalk", meaning: "해변·수변 나무 데크 산책로" }, { word: "night view", meaning: "야경" }]
          },
          {
            role: "손님", side: "right",
            text: "Is it safe to walk around there at this hour with a young child?",
            translation: "어린아이를 데리고 이 시간대에 거기를 걸어 다녀도 안전한가요?",
            expressions: [{ phrase: "safe to walk around there at this hour", meaning: "이 시간대에 그 주변을 걸어 다니기에 안전한" }],
            vocabulary: [{ word: "at this hour", meaning: "이 시간대에 (저녁·밤 시간에)" }]
          },
          {
            role: "직원", side: "left",
            text: "Yes, it's very well-lit, family-friendly, and full of street performers until 10:00 PM!",
            translation: "네, 가로등이 아주 밝고 가족 단위 방문객이 많으며 밤 10시까지는 거리 공연자들로 활기가 넘칩니다!",
            expressions: [{ phrase: "very well-lit, family-friendly", meaning: "조명이 밝아 어둡지 않고 가족 친화적인(아이와 가기 좋은)" }],
            vocabulary: [{ word: "well-lit", meaning: "조명이 밝은" }, { word: "street performer", meaning: "거리 공연가, 버스커" }]
          },
          {
            role: "손님", side: "right",
            text: "Awesome! And when we head back to our hotel, is it easy to hail a taxi out front?",
            translation: "좋네요! 그리고 호텔로 돌아갈 때 식당 앞 거리에서 택시를 잡기가 쉬운가요?",
            expressions: [{ phrase: "hail a taxi out front", meaning: "가게 바로 앞 길가에서 손을 들어 택시를 잡다" }],
            vocabulary: [{ word: "head back", meaning: "돌아가다" }, { word: "hail a taxi", meaning: "(길에서 손을 들어) 택시를 잡다" }]
          },
          {
            role: "직원", side: "left",
            text: "Taxis can be busy at night, so if you step back to our host stand anytime, we'll gladly call an official taxi for you!",
            translation: "밤에는 택시 잡기가 쉽지 않을 수 있으니, 언제든 식당 입구 안내석으로 다시 오시면 저희가 공식 택시를 기꺼이 불러 드리겠습니다!",
            expressions: [{ phrase: "we'll gladly call an official taxi for you", meaning: "기꺼이 안전한 공식 택시를 호출해 드리겠습니다" }],
            vocabulary: [{ word: "host stand", meaning: "식당 입구의 자리 안내 데스크" }, { word: "gladly", meaning: "기꺼이" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 식당 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "예약 확인 및 인원수 말하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ！何名様でしょうか？ご予約はされていますか？",
            translation: "어서 오세요! 몇 분이신가요? 예약은 하셨나요?",
            expressions: [{ phrase: "何名様でしょうか？", meaning: "몇 분이십니까? (식당 입장 시 인원수를 묻는 기본 표현)" }, { phrase: "ご予約はされていますか？", meaning: "예약은 되어 있으신가요?" }],
            vocabulary: [{ word: "何名様(なんめいさま)", meaning: "몇 분 (인원수를 높여 부르는 말)" }, { word: "予約(よやく)", meaning: "예약" }]
          },
          {
            role: "손님", side: "right",
            text: "こんにちは。今夜7時に「イム」の名前で3名予約しています。",
            translation: "안녕하세요. 오늘 밤 7시에 '임'이라는 이름으로 3명 예약했습니다.",
            expressions: [{ phrase: "「イム」の名前で3名予約しています", meaning: "'임'이라는 이름으로 3명 예약했습니다" }],
            vocabulary: [{ word: "今夜(こんや)", meaning: "오늘 밤" }, { word: "7時(しちじ)", meaning: "7시" }, { word: "名前(なまえ)", meaning: "이름" }, { word: "3名(さんめい)", meaning: "3명" }]
          },
          {
            role: "직원", side: "left",
            text: "イム様、3名様ですね。お待ちしておりました！コートや大きなお荷物はお預かりしましょうか？",
            translation: "임 고객님, 세 분 맞으시네요. 기다리고 있었습니다! 코트나 큰 짐은 맡아 드릴까요?",
            expressions: [{ phrase: "お待ちしておりました！", meaning: "기다리고 있었습니다! (예약 손님을 맞이할 때 쓰는 정중한 인사)" }, { phrase: "お荷物はお預かりしましょうか？", meaning: "짐은 보관해(맡아) 드릴까요?" }],
            vocabulary: [{ word: "待つ(まつ)", meaning: "기다리다" }, { word: "大きな(おおきな)", meaning: "큰" }, { word: "荷物(にもつ)", meaning: "짐" }, { word: "預かる(あずかる)", meaning: "맡다, 보관하다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、このベビーカーと上着をお願いできますか？",
            translation: "네, 이 유모차와 겉옷을 좀 부탁드려도 될까요?",
            expressions: [{ phrase: "このベビーカーと上着をお願いできますか？", meaning: "이 유모차와 겉옷을 맡아주실 수 있나요?" }],
            vocabulary: [{ word: "上着(うわぎ)", meaning: "겉옷, 외투" }, { word: "お願い(おねがい)する", meaning: "부탁하다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。こちらが番号札です。お席へご案内いたしますので、こちらへどうぞ。",
            translation: "알겠습니다. 여기 보관 번호표입니다. 자리로 안내해 드릴 테니 이쪽으로 오세요.",
            expressions: [{ phrase: "お席へご案内いたします", meaning: "좌석으로 안내해 드리겠습니다" }],
            vocabulary: [{ word: "番号札(ばんごうふだ)", meaning: "번호표, 보관증" }, { word: "席(せき)", meaning: "좌석, 자리" }, { word: "案内(あんない)する", meaning: "안내하다" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。とても雰囲気が良くて素敵なお店ですね！",
            translation: "감사합니다. 분위기가 참 좋고 멋진 가게네요!",
            expressions: [{ phrase: "雰囲気が良くて素敵なお店", meaning: "분위기가 좋고 멋진 식당(가게)" }],
            vocabulary: [{ word: "雰囲気(ふんいき)", meaning: "분위기" }, { word: "良い(よい)", meaning: "좋다" }, { word: "素敵(すてき)な", meaning: "멋진, 근사한" }, { word: "お店(みせ)", meaning: "가게, 식당" }]
          }
        ]
      },
      {
        id: 2,
        title: "예약 없이 방문해 대기 시간 묻기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、予約をしていないのですが、大人2人と子ども1人で入れますか？",
            translation: "실례합니다, 예약을 하지 않았는데 성인 두 명과 아이 한 명 들어갈 수 있나요?",
            expressions: [{ phrase: "予約をしていないのですが", meaning: "예약을 하지 않았는데요" }, { phrase: "大人2人と子ども1人で入れますか？", meaning: "성인 2명과 어린이 1명 입장할 수 있나요?" }],
            vocabulary: [{ word: "予約(よやく)", meaning: "예약" }, { word: "大人(おとな)", meaning: "어른, 성인" }, { word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "入る(はいる)", meaning: "들어가다" }]
          },
          {
            role: "직원", side: "left",
            text: "いらっしゃいませ。あいにく現在満席となっておりまして、20分ほどお待ちいただくことになります。",
            translation: "어서 오세요. 공교롭게도 현재 만석이어서 20분 정도 기다리셔야 합니다.",
            expressions: [{ phrase: "あいにく現在満席となっておりまして", meaning: "아쉽게도 현재 만석이라서" }],
            vocabulary: [{ word: "現在(げんざい)", meaning: "현재" }, { word: "満席(まんせき)", meaning: "만석" }, { word: "20分(にじゅっぷん)ほど", meaning: "20분 정도" }, { word: "待つ(まつ)", meaning: "기다리다" }]
          },
          {
            role: "손님", side: "right",
            text: "20分くらいなら待ちます。ウェイティングボードに名前を書けばいいですか？",
            translation: "20분 정도라면 기다릴게요. 대기 명단에 이름을 적으면 되나요?",
            expressions: [{ phrase: "20分くらいなら待ちます", meaning: "20분 정도라면 기다리겠습니다" }],
            vocabulary: [{ word: "名前(なまえ)", meaning: "이름" }, { word: "書く(かく)", meaning: "적다, 쓰다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、こちらの用紙にお名前と人数をご記入ください。カウンター席とテーブル席のどちらをご希望ですか？",
            translation: "네, 이 대기 용지에 성함과 인원수를 적어 주세요. 카운터석과 테이블석 중 어느 쪽을 원하시나요?",
            expressions: [{ phrase: "お名前と人数をご記入ください", meaning: "성함과 인원수를 기입해 주십시오" }],
            vocabulary: [{ word: "用紙(ようし)", meaning: "용지, 종이" }, { word: "人数(にんずう)", meaning: "인원수" }, { word: "記入(きにゅう)する", meaning: "기입하다" }, { word: "希望(きぼう)", meaning: "희망" }]
          },
          {
            role: "손님", side: "right",
            text: "子どもがいるので、テーブル席でお願いします。順番が来るまで先にメニューを見てもいいですか？",
            translation: "아이가 있어서 테이블석으로 부탁합니다. 순서가 올 때까지 메뉴판을 먼저 봐도 될까요?",
            expressions: [{ phrase: "順番が来るまで先にメニューを見てもいいですか？", meaning: "차례가 올 때까지 먼저 메뉴판을 봐도 될까요?" }],
            vocabulary: [{ word: "順番(じゅんばん)", meaning: "순서, 차례" }, { word: "来る(くる)", meaning: "오다" }, { word: "先(さき)に", meaning: "먼저, 미리" }, { word: "見る(みる)", meaning: "보다" }]
          },
          {
            role: "직원", side: "left",
            text: "もちろんです！こちらがメニューでございます。お席が空き次第、お名前をお呼びしますね。",
            translation: "물론이죠! 여기 메뉴판입니다. 자리가 비는 대로 성함을 불러 드리겠습니다.",
            expressions: [{ phrase: "お席が空き次第、お名前をお呼びします", meaning: "자리가 나는 즉시 성함을 호명해 드리겠습니다" }],
            vocabulary: [{ word: "空く(あく)", meaning: "(자리가) 비다" }, { word: "次第(しだい)", meaning: "~하는 대로 즉시" }, { word: "呼ぶ(よぶ)", meaning: "부르다" }]
          }
        ]
      },
      {
        id: 3,
        title: "창가 자리나 조용한 테이블 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "お待たせいたしました。お席のご用意ができましたので、こちらへどうぞ。",
            translation: "오래 기다리셨습니다. 좌석 준비가 되었으니 이쪽으로 오세요.",
            expressions: [{ phrase: "お席のご用意ができました", meaning: "좌석이 준비되었습니다" }],
            vocabulary: [{ word: "用意(ようい)", meaning: "준비" }]
          },
          {
            role: "손님", side: "right",
            text: "あの、もし可能であれば、あちらの窓際の席に座ってもいいですか？",
            translation: "저기, 혹시 가능하다면 저쪽 창가 자리에 앉아도 될까요?",
            expressions: [{ phrase: "もし可能であれば、あちらの窓際の席に", meaning: "만약 가능하다면 저쪽 창가 자리에" }],
            vocabulary: [{ word: "可能(かのう)", meaning: "가능" }, { word: "窓際(まどぎわ)", meaning: "창가" }, { word: "席(せき)", meaning: "자리, 좌석" }, { word: "座る(すわる)", meaning: "앉다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、ちょうど今片付けが終わったところですので、窓際のテーブルへご案内いたします。",
            translation: "네, 마침 방금 테이블 정리가 끝난 참이라서 창가 테이블로 안내해 드리겠습니다.",
            expressions: [{ phrase: "ちょうど今片付けが終わったところです", meaning: "마침 방금 치우는 것(정리)이 끝난 참입니다" }],
            vocabulary: [{ word: "片付け(かたづけ)", meaning: "정리, 치움" }, { word: "終わる(おわる)", meaning: "끝나다" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！子ども用の椅子も1つ借りられますか？",
            translation: "감사합니다! 어린이용 의자(유아용 하이체어)도 하나 빌릴 수 있나요?",
            expressions: [{ phrase: "子ども用の椅子も1つ借りられますか？", meaning: "아이용 의자도 하나 빌릴 수 있을까요?" }],
            vocabulary: [{ word: "子ども用(こどもよう)", meaning: "어린이용" }, { word: "椅子(いす)", meaning: "의자" }, { word: "借りる(かりる)", meaning: "빌리다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！ベルト付きのベビーチェアをすぐにお持ちします。こちらの椅子を1つ外しますね。",
            translation: "알겠습니다! 안전벨트가 달린 유아용 의자를 바로 가져다드리겠습니다. 여기 일반 의자 하나는 빼 드릴게요.",
            expressions: [{ phrase: "ベルト付きのベビーチェア", meaning: "안전벨트가 부착된 유아용 의자" }],
            vocabulary: [{ word: "付き(つき)", meaning: "~이 달린, 부착된" }, { word: "持つ(もつ)", meaning: "가지고 오다" }, { word: "外す(はずす)", meaning: "(의자 등을) 빼내다, 치우다" }]
          },
          {
            role: "손님", side: "right",
            text: "親切にありがとうございます。景色も良くて座り心地がいいです！",
            translation: "친절히 챙겨 주셔서 감사합니다. 경치도 좋고 자리도 편하네요!",
            expressions: [{ phrase: "景色も良くて座り心地がいい", meaning: "전망(경치)도 좋고 착석감이 편하다" }],
            vocabulary: [{ word: "親切(しんせつ)に", meaning: "친절하게" }, { word: "景色(けしき)", meaning: "경치, 전망" }, { word: "座り心地(すわりごこち)", meaning: "앉은 느낌, 착석감" }]
          }
        ]
      },
      {
        id: 4,
        title: "영어/사진 메뉴판 및 대표 메뉴 추천받기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、写真付きのメニューや、韓国語か英語のメニューはありますか？",
            translation: "실례합니다, 사진이 있는 메뉴판이나 한국어 또는 영어 메뉴판이 있나요?",
            expressions: [{ phrase: "写真付きのメニュー", meaning: "음식 사진이 들어 있는 메뉴판" }, { phrase: "韓国語か英語のメニュー", meaning: "한국어나 영어 메뉴판" }],
            vocabulary: [{ word: "写真付き(しゃしんつき)", meaning: "사진이 포함된" }, { word: "韓国語(かんこくご)", meaning: "한국어" }, { word: "英語(えいご)", meaning: "영어" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、写真付きの英語と韓国語併記のメニューがございます。どうぞご覧ください。",
            translation: "네, 사진과 함께 영어·한국어가 병기된 메뉴판이 있습니다. 편하게 보십시오.",
            expressions: [{ phrase: "英語と韓国語併記のメニュー", meaning: "영어와 한국어가 함께 적힌 메뉴판" }],
            vocabulary: [{ word: "併記(へいき)", meaning: "병기, 나란히 함께 적음" }, { word: "ご覧(らん)ください", meaning: "보십시오 ('見てください'의 높임말)" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！このお店で一番人気の看板メニューは何ですか？",
            translation: "감사합니다! 이 가게에서 가장 인기 있는 대표(간판) 메뉴는 무엇인가요?",
            expressions: [{ phrase: "一番人気の看板メニュー", meaning: "가장 인기가 많은 대표(시그니처) 메뉴" }],
            vocabulary: [{ word: "一番(いちばん)", meaning: "가장, 제일" }, { word: "人気(にんき)", meaning: "인기" }, { word: "看板(かんばん)メニュー", meaning: "간판 메뉴, 대표 메뉴" }]
          },
          {
            role: "직원", side: "left",
            text: "黒毛和牛のステーキ定食と、天ぷらと刺身の盛り合わせセットが一番よく出ますよ。",
            translation: "구로게와규(흑우) 스테이크 정식과, 튀김·생선회 모둠 세트가 가장 잘 나갑니다.",
            expressions: [{ phrase: "一番よく出ますよ", meaning: "(손님들에게) 가장 많이 팔립니다 / 잘 나갑니다" }],
            vocabulary: [{ word: "黒毛和牛(くろげわぎゅう)", meaning: "흑모화우 (일본 고급 소고기)" }, { word: "定食(ていしょく)", meaning: "정식" }, { word: "天(てん)ぷら", meaning: "튀김" }, { word: "刺身(さしみ)", meaning: "생선회" }, { word: "盛り合わせ(もりあわせ)", meaning: "모둠" }]
          },
          {
            role: "손님", side: "right",
            text: "どちらもおいしそうですね！では、和牛ステーキ定食1つと、天ぷら刺身セットを1つお願いします。",
            translation: "둘 다 맛있겠네요! 그럼 와규 스테이크 정식 하나와 튀김 생선회 세트를 하나 부탁합니다.",
            expressions: [{ phrase: "どちらもおいしそうですね", meaning: "두 메뉴 다 맛있어 보이네요" }],
            vocabulary: [{ word: "1つ(ひとつ)", meaning: "한 개, 하나" }, { word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！定食のご飯は大盛りが無料ですが、普通の量でよろしいですか？",
            translation: "알겠습니다! 정식에 나오는 공기밥은 곱빼기(오오모리)가 무료인데 보통 양으로 드릴까요?",
            expressions: [{ phrase: "ご飯は大盛りが無料ですが", meaning: "밥은 곱빼기(사이즈업)가 무료인데" }],
            vocabulary: [{ word: "ご飯(はん)", meaning: "밥" }, { word: "大盛り(おおもり)", meaning: "곱빼기, 많이 담음" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "普通(ふつう)の量(りょう)", meaning: "보통 양" }]
          }
        ]
      },
      {
        id: 5,
        title: "고수나 특정 재료 빼달라고 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "この特上握り寿司セットを2つお願いします。1つはワサビ抜きにできますか？",
            translation: "이 특상 초밥 세트를 두 개 부탁합니다. 그중 하나는 와사비(고추냉이)를 빼 주실 수 있나요?",
            expressions: [{ phrase: "1つはワサビ抜きにできますか？", meaning: "하나는 와사비를 빼고 만들어 주실 수 있나요?" }],
            vocabulary: [{ word: "特上(とくじょう)", meaning: "특상 (최고 등급 메뉴)" }, { word: "握り寿司(にぎりずし)", meaning: "초밥, 스시" }, { word: "ワサビ抜き(ぬき)", meaning: "와사비(고추냉이) 뺌" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、1人前はサビ抜きでご用意いたします。ワサビは小皿に別添えでお持ちしましょうか？",
            translation: "네, 1인분은 와사비를 빼고 준비해 드리겠습니다. 와사비는 작은 접시에 따로 담아 드릴까요?",
            expressions: [{ phrase: "1人前はサビ抜きで", meaning: "1인분은 와사비를 빼고 ('サビ抜き'는 'ワサビ抜き'의 줄임말)" }, { phrase: "小皿に別添えで", meaning: "작은 접시에 따로 덜어서" }],
            vocabulary: [{ word: "1人前(いちにんまえ)", meaning: "1인분" }, { word: "小皿(こざら)", meaning: "작은 접시" }, { word: "別添え(べつぞえ)", meaning: "따로 곁들임, 별도 제공" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、別皿でお願いします。あと、こちらの担々麺の上にパクチーは乗っていますか？",
            translation: "네, 따로 담아 주세요. 그리고 여기 있는 탄탄멘 위에 고수가 올라가나요?",
            expressions: [{ phrase: "上にパクチーは乗っていますか？", meaning: "음식 위에 고수가 고명으로 올라가나요?" }],
            vocabulary: [{ word: "別皿(べつざら)", meaning: "별도 접시" }, { word: "担々麺(たんたんめん)", meaning: "탄탄멘" }, { word: "上(うえ)", meaning: "위" }, { word: "パクチー", meaning: "고수 (향채)" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、通常はパクチーと刻みネギが乗っておりますが、抜くことも可能です。",
            translation: "네, 기본적으로는 고수와 다진 파가 올라가는데 빼 드릴 수도 있습니다.",
            expressions: [{ phrase: "抜くことも可能です", meaning: "재료를 빼는 것도 가능합니다" }],
            vocabulary: [{ word: "通常(つうじょう)", meaning: "통상, 기본" }, { word: "刻みネギ(きざみねぎ)", meaning: "다진 파, 썬 파" }, { word: "抜く(ぬく)", meaning: "빼다" }, { word: "可能(かのう)", meaning: "가능" }]
          },
          {
            role: "손님", side: "right",
            text: "パクチーは苦手なので抜いてください。ネギはそのままで大丈夫です。",
            translation: "고수는 못 먹어서 빼 주세요. 파는 그대로 넣어 주셔도 괜찮습니다.",
            expressions: [{ phrase: "パクチーは苦手なので抜いてください", meaning: "고수는 잘 못 먹으니 빼 주세요" }],
            vocabulary: [{ word: "苦手(にがて)", meaning: "(음식 등을) 잘 못 먹음, 싫어함" }, { word: "大丈夫(だいじょうぶ)", meaning: "괜찮음" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！お寿司1つはサビ抜き、担々麺はパクチー抜きでお作りしますね。",
            translation: "알겠습니다! 초밥 하나는 와사비 빼고, 탄탄멘은 고수 빼고 만들어 드리겠습니다.",
            expressions: [{ phrase: "パクチー抜きでお作りします", meaning: "고수를 빼고 조리해 드리겠습니다" }],
            vocabulary: [{ word: "お寿司(すし)", meaning: "초밥" }, { word: "作る(つくる)", meaning: "만들다, 조리하다" }]
          }
        ]
      },
      {
        id: 6,
        title: "맵기 단계 조절 및 어린이 메뉴 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、このスープカレーはかなり辛いですか？",
            translation: "실례합니다, 이 수프카레는 많이 매운 편인가요?",
            expressions: [{ phrase: "かなり辛いですか？", meaning: "상당히(꽤) 매운가요?" }],
            vocabulary: [{ word: "辛い(からい)", meaning: "맵다" }]
          },
          {
            role: "직원", side: "left",
            text: "辛さは1番の甘口から5番の激辛までお選びいただけます。3番が中辛です。",
            translation: "맵기는 1단계 순한 맛부터 5단계 아주 매운 맛까지 고르실 수 있습니다. 3단계가 중간 매운맛입니다.",
            expressions: [{ phrase: "甘口から〜激辛まで", meaning: "순한 맛부터 아주 매운 맛까지" }],
            vocabulary: [{ word: "辛さ(からさ)", meaning: "맵기" }, { word: "甘口(あまくち)", meaning: "순한 맛 (안 매운 맛)" }, { word: "中辛(ちゅうから)", meaning: "보통 매운맛" }, { word: "激辛(げきから)", meaning: "아주 매운 맛" }]
          },
          {
            role: "손님", side: "right",
            text: "では、少しだけピリ辛の2番でお願いします。あと、子どもが食べられる辛くないメニューはありますか？",
            translation: "그럼 살짝만 매콤한 2단계로 부탁합니다. 그리고 아이가 먹을 수 있는 안 매운 메뉴도 있나요?",
            expressions: [{ phrase: "子どもが食べられる辛くないメニュー", meaning: "어린이가 먹을 수 있는 맵지 않은 메뉴" }],
            vocabulary: [{ word: "少し(すこし)だけ", meaning: "조금만, 살짝만" }, { word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "食べられる(たべられる)", meaning: "먹을 수 있다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、小学生以下のお子様向けに、辛くない「お子様ハンバーグプレート」がございます。",
            translation: "네, 초등학생 이하 어린이를 위한 안 매운 '어린이 함박스테이크 플레이트'가 있습니다.",
            expressions: [{ phrase: "小学生以下のお子様向けに", meaning: "초등학생 이하 어린이를 대상으로" }],
            vocabulary: [{ word: "小学生以下(しょうがくせいいか)", meaning: "초등학생 이하" }, { word: "お子様(こさま)", meaning: "어린이" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！お子様プレートには飲み物も付いていますか？",
            translation: "다행이네요! 어린이 플레이트에는 음료도 포함되어 나오나요?",
            expressions: [{ phrase: "飲み物も付いていますか？", meaning: "마실 음료도 세트로 포함되어 있나요?" }],
            vocabulary: [{ word: "飲み物(のみもの)", meaning: "음료" }, { word: "付く(つく)", meaning: "포함되다, 딸려 나오다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、リンゴジュースかオレンジジュースをお選びいただけて、小さなおもちゃも1つ付いております！",
            translation: "네, 사과 주스나 오렌지 주스 중 고르실 수 있고 작은 장난감도 하나 함께 나옵니다!",
            expressions: [{ phrase: "小さなおもちゃも1つ付いております", meaning: "작은 장난감도 1개 포함되어 있습니다" }],
            vocabulary: [{ word: "選ぶ(えらぶ)", meaning: "고르다, 선택하다" }, { word: "小さな(ちいさな)", meaning: "작은" }, { word: "おもちゃ", meaning: "장난감" }]
          }
        ]
      },
      {
        id: 7,
        title: "스테이크 굽기 정도 선택하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、サーロインステーキのコースを1つお願いします。",
            translation: "실례합니다, 서로인(등심) 스테이크 코스를 하나 부탁합니다.",
            expressions: [{ phrase: "サーロインステーキのコース", meaning: "등심 스테이크 코스 (안심은 ヒレステーキ)" }],
            vocabulary: [{ word: "1つ(ひとつ)", meaning: "하나, 1개" }, { word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。お肉の焼き加減はいかがなさいますか？",
            translation: "알겠습니다. 고기 굽기 정도는 어떻게 해 드릴까요?",
            expressions: [{ phrase: "お肉の焼き加減はいかがなさいますか？", meaning: "고기 굽기 정도는 어떻게 하시겠습니까?" }],
            vocabulary: [{ word: "お肉(にく)", meaning: "고기" }, { word: "焼き加減(やきかげん)", meaning: "굽기 정도" }]
          },
          {
            role: "손님", side: "right",
            text: "ミディアムでお願いします。ステーキのソースも選べますか？",
            translation: "미디엄으로 부탁합니다. 스테이크 소스도 고를 수 있나요?",
            expressions: [{ phrase: "ミディアムでお願いします", meaning: "미디엄 굽기로 부탁합니다 (미디엄 레어는 ミディアムレア, 웰던은 ウェルダン)" }],
            vocabulary: [{ word: "選ぶ(えらぶ)", meaning: "고르다, 선택하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、特製の和風おろし玉ねぎソースと、赤ワインガーリックソースからお選びいただけます。",
            translation: "네, 특제 일본식 갈은 양파 소스와 레드와인 갈릭 소스 중에서 고르실 수 있습니다.",
            expressions: [{ phrase: "和風おろし玉ねぎソース", meaning: "일본식 갈은 무·양파 간장 소스" }],
            vocabulary: [{ word: "特製(とくせい)", meaning: "특제" }, { word: "和風(わふう)", meaning: "일본풍, 일본식" }, { word: "玉ねぎ(たまねぎ)", meaning: "양파" }, { word: "赤(あか)ワイン", meaning: "레드와인" }]
          },
          {
            role: "손님", side: "right",
            text: "和風おろし玉ねぎソースにします。付け合わせは何が付きますか？",
            translation: "일본식 양파 소스로 할게요. 곁들여 나오는 사이드 메뉴는 무엇이 나오나요?",
            expressions: [{ phrase: "付け合わせは何が付きますか？", meaning: "곁들임(가니쉬) 메뉴로는 무엇이 나오나요?" }],
            vocabulary: [{ word: "付け合わせ(つけあわせ)", meaning: "곁들임 요리, 가니쉬" }, { word: "付く(つく)", meaning: "함께 딸려 나오다" }]
          },
          {
            role: "직원", side: "left",
            text: "温野菜が基本で付いており、さらにライスか焼きたてのパンからお選びいただけます。",
            translation: "따뜻한 구운 채소가 기본으로 나오고, 추가로 공기밥이나 갓 구운 빵 중에서 고르실 수 있습니다.",
            expressions: [{ phrase: "ライスか焼きたてのパン", meaning: "밥 또는 갓 구운 빵 (일본 양식당에서는 밥을 'ご飯' 대신 'ライス'라고 부름)" }],
            vocabulary: [{ word: "温野菜(おんやさい)", meaning: "따뜻하게 익힌 채소" }, { word: "基本(きほん)", meaning: "기본" }, { word: "焼きたて(やきたて)", meaning: "갓 구워낸" }]
          }
        ]
      },
      {
        id: 8,
        title: "물과 앞접시, 수저 추가로 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "お待たせいたしました。オムライスとハンバーグセットでございます。鉄板が熱いのでお気をつけください。",
            translation: "오래 기다리셨습니다. 오므라이스와 함박스테이크 세트 나왔습니다. 철판이 뜨거우니 조심하세요.",
            expressions: [{ phrase: "鉄板が熱いのでお気をつけください", meaning: "철판이 뜨거우니 데이지 않게 조심하십시오" }],
            vocabulary: [{ word: "鉄板(てっぱん)", meaning: "철판" }, { word: "熱い(あつい)", meaning: "뜨겁다" }, { word: "気(き)をつける", meaning: "조심하다, 주의하다" }]
          },
          {
            role: "손님", side: "right",
            text: "おいしそうですね！すみません、子ども用のスプーンとフォーク、それと割れないお皿はありますか？",
            translation: "맛있어 보이네요! 실례합니다, 어린이용 숟가락과 포크, 그리고 깨지지 않는 유아용 접시가 있나요?",
            expressions: [{ phrase: "子ども用のスプーンとフォーク", meaning: "어린이용 숟가락과 포크" }, { phrase: "割れないお皿", meaning: "깨지지 않는(플라스틱/멜라민) 접시" }],
            vocabulary: [{ word: "割れる(われる)", meaning: "깨지다" }, { word: "お皿(さら)", meaning: "접시" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、すぐにプラスチックのお子様用食器セットをお持ちいたします！",
            translation: "네, 바로 플라스틱으로 된 어린이용 식기 세트를 가져다드리겠습니다!",
            expressions: [{ phrase: "お子様用食器セット", meaning: "어린이용 식기 세트" }],
            vocabulary: [{ word: "食器(しょっき)", meaning: "식기, 그릇" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。大人も料理をシェアしたいので、取り皿も2枚いただけますか？",
            translation: "감사합니다. 어른들도 음식을 덜어 나눠 먹고 싶은데 앞접시도 두 장 주실 수 있나요?",
            expressions: [{ phrase: "取り皿も2枚いただけますか？", meaning: "음식을 덜어 먹을 앞접시도 2장 주실 수 있나요?" }],
            vocabulary: [{ word: "料理(りょうり)", meaning: "요리, 음식" }, { word: "取り皿(とりざら)", meaning: "앞접시" }, { word: "2枚(にまい)", meaning: "(접시 등) 두 장, 두 개" }]
          },
          {
            role: "직원", side: "left",
            text: "どうぞ、お子様用の食器と取り皿2枚です。お水のおかわりもお持ちしましょうか？",
            translation: "여기 어린이용 식기와 앞접시 두 장입니다. 마시는 물도 더 가져다드릴까요?",
            expressions: [{ phrase: "お水のおかわりもお持ちしましょうか？", meaning: "식수 리필도 가져다드릴까요?" }],
            vocabulary: [{ word: "お水(みず)", meaning: "물, 식수" }, { word: "おかわり", meaning: "리필, 추가" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、氷の入っていない常温のお水と、新しいおしぼりを1つお願いします！",
            translation: "네, 얼음이 들어 있지 않은 상온의 물과 새 물수건 하나 부탁합니다!",
            expressions: [{ phrase: "氷の入っていない常温のお水", meaning: "얼음이 안 들어간 미지근한(상온) 물" }],
            vocabulary: [{ word: "氷(こおり)", meaning: "얼음" }, { word: "常温(じょうおん)", meaning: "상온, 실온" }, { word: "おしぼり", meaning: "물수건" }]
          }
        ]
      },
      {
        id: 9,
        title: "음식이 너무 늦게 나올 때 확인 요청",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、30分ほど前に料理を注文したのですが、まだ1品届いていなくて確認していただけますか？",
            translation: "실례합니다, 30분 정도 전에 음식을 주문했는데 아직 한 가지 메뉴가 안 나와서 확인해 주실 수 있나요?",
            expressions: [{ phrase: "まだ1品届いていなくて", meaning: "아직 요리 1가지가 나오지 않아서" }],
            vocabulary: [{ word: "30分(さんじゅっぷん)ほど前(まえ)", meaning: "30분 정도 전" }, { word: "料理(りょうり)", meaning: "요리, 음식" }, { word: "1品(いっぴん)", meaning: "한 가지 요리" }, { word: "届く(とどく)", meaning: "(음식이 테이블에) 도착하다, 나오다" }]
          },
          {
            role: "직원", side: "left",
            text: "大変申し訳ございません！まだお持ちできていないメニューは何でしょうか？",
            translation: "대단히 죄송합니다! 아직 가져다드리지 못한 메뉴가 무엇인가요?",
            expressions: [{ phrase: "まだお持ちできていないメニュー", meaning: "아직 서빙해 드리지 못한 메뉴" }],
            vocabulary: [{ word: "大変(たいへん)", meaning: "대단히" }, { word: "申し訳(もうしわけ)ございません", meaning: "죄송합니다" }, { word: "何(なん)でしょうか", meaning: "무엇입니까" }]
          },
          {
            role: "손님", side: "right",
            text: "とんかつ定食は先に来たのですが、一緒に頼んだ海鮮丼と唐揚げがまだ来ていません。",
            translation: "돈가스 정식은 먼저 나왔는데, 같이 주문한 카이센동(해산물 덮밥)과 가라아게(닭튀김)가 아직 안 나왔어요.",
            expressions: [{ phrase: "一緒に頼んだ海鮮丼と唐揚げ", meaning: "함께 주문한 해산물 덮밥과 닭튀김" }],
            vocabulary: [{ word: "とんかつ定食(ていしょく)", meaning: "돈가스 정식" }, { word: "先(さき)に", meaning: "먼저" }, { word: "海鮮丼(かいせんどん)", meaning: "해산물 덮밥" }, { word: "唐揚げ(からあげ)", meaning: "일본식 닭튀김" }]
          },
          {
            role: "직원", side: "left",
            text: "ただいま伝票と厨房を確認してまいりますので、少々お待ちください。",
            translation: "지금 바로 주문서(전표)와 주방을 확인해 오겠습니다. 잠시만 기다려 주세요.",
            expressions: [{ phrase: "伝票と厨房を確認してまいります", meaning: "주문 전표와 주방을 확인하고 오겠습니다" }],
            vocabulary: [{ word: "伝票(でんぴょう)", meaning: "주문서, 계산 전표" }, { word: "厨房(ちゅうぼう)", meaning: "주방" }, { word: "少々(しょうしょう)", meaning: "잠시" }]
          },
          {
            role: "직원", side: "left",
            text: "お待たせして本当に申し訳ございません！今ちょうど盛り付けが終わりましたので、1分以内にお持ちいたします。",
            translation: "오래 기다리게 해 드려 정말 죄송합니다! 지금 막 그릇에 담는 작업이 끝나서 1분 이내로 바로 가져다드리겠습니다.",
            expressions: [{ phrase: "今ちょうど盛り付けが終わりました", meaning: "지금 막 음식 플레이팅(그릇에 담기)이 끝났습니다" }],
            vocabulary: [{ word: "盛り付け(もりつけ)", meaning: "음식을 그릇에 담음, 플레이팅" }, { word: "終わる(おわる)", meaning: "끝나다" }, { word: "1分以内(いっぷんいない)", meaning: "1분 이내" }]
          },
          {
            role: "손님", side: "right",
            text: "すぐに確認してくださってありがとうございます！",
            translation: "바로 확인해 주셔서 감사합니다!",
            expressions: [{ phrase: "すぐに確認してくださって", meaning: "즉시 확인해 주셔서" }],
            vocabulary: [{ word: "確認(かくにん)する", meaning: "확인하다" }]
          }
        ]
      },
      {
        id: 10,
        title: "주문한 메뉴와 다른 음식이 나왔을 때",
        lines: [
          {
            role: "직원", side: "left",
            text: "お待たせいたしました。豚骨チャーシューメンと焼き餃子でございます！",
            translation: "기다리셨습니다. 돈코츠 차슈 라멘과 군만두 나왔습니다!",
            expressions: [{ phrase: "豚骨チャーシューメンと焼き餃子", meaning: "돼지뼈 육수 차슈 라멘과 군만두" }],
            vocabulary: [{ word: "豚骨(とんこつ)", meaning: "돈코츠 (돼지뼈 육수)" }, { word: "焼き餃子(やきぎょうざ)", meaning: "군만두" }]
          },
          {
            role: "손님", side: "right",
            text: "あの、すみません。焼き餃子は合っているのですが、ラーメンは私が注文したものと違うようです。",
            translation: "저기, 실례합니다. 군만두는 맞는데 라멘은 제가 주문한 것과 다른 것 같아요.",
            expressions: [{ phrase: "私が注文したものと違うようです", meaning: "제가 주문한 메뉴와 다른 것 같습니다" }],
            vocabulary: [{ word: "合う(あう)", meaning: "맞다, 일치하다" }, { word: "私(わたし)", meaning: "저, 나" }, { word: "注文(ちゅうもん)する", meaning: "주문하다" }, { word: "違う(ちがう)", meaning: "다르다" }]
          },
          {
            role: "직원", side: "left",
            text: "あ、大変失礼いたしました！何をご注文されていましたでしょうか？",
            translation: "아, 정말 실례했습니다! 어떤 메뉴를 주문하셨었나요?",
            expressions: [{ phrase: "何をご注文されていましたでしょうか？", meaning: "무엇을 주문하셨었나요?" }],
            vocabulary: [{ word: "失礼(しつれい)いたしました", meaning: "실례했습니다, 죄송합니다" }]
          },
          {
            role: "손님", side: "right",
            text: "豚骨ラーメンではなく、味玉入りの醤油ラーメンを注文しました。",
            translation: "돈코츠 라멘이 아니라, 맛달걀(아지타마)이 들어간 쇼유(간장) 라멘을 주문했습니다.",
            expressions: [{ phrase: "味玉入りの醤油ラーメン", meaning: "반숙 간장 계란이 들어간 쇼유(간장) 라멘" }],
            vocabulary: [{ word: "味玉入り(あじたいり)", meaning: "맛달걀(반숙 계란장조림)이 들어간" }, { word: "醤油(しょうゆ)ラーメン", meaning: "간장 라멘" }]
          },
          {
            role: "직원", side: "left",
            text: "申し訳ございません！隣のテーブルのお料理と取り違えてしまいました。すぐに味玉醤油ラーメンをお持ちします！",
            translation: "죄송합니다! 옆 테이블 요리와 착각해서 잘못 가져다드렸네요. 지금 바로 맛달걀 쇼유 라멘을 가져다드리겠습니다!",
            expressions: [{ phrase: "隣のテーブルのお料理と取り違えてしまいました", meaning: "옆 테이블 음식과 헷갈려 잘못 전달해 드렸습니다" }],
            vocabulary: [{ word: "隣(となり)", meaning: "옆" }, { word: "取り違える(とりちがえる)", meaning: "착각하여 잘못 가져오다, 뒤바꾸다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、まだ箸をつけていないので交換をお願いします。ありがとうございます。",
            translation: "네, 아직 젓가락을 대지(손대지) 않았으니 교환 부탁드립니다. 감사합니다.",
            expressions: [{ phrase: "まだ箸をつけていないので", meaning: "아직 음식에 젓가락(손)을 대지 않았으니" }],
            vocabulary: [{ word: "箸(はし)をつける", meaning: "음식에 젓가락을 대다, 먹기 시작하다" }, { word: "交換(こうかん)", meaning: "교환" }]
          }
        ]
      },
      {
        id: 11,
        title: "사이드 메뉴와 음료 추가 주문하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません！追加で少し注文してもいいですか？",
            translation: "실례합니다! 추가로 조금 더 주문해도 될까요?",
            expressions: [{ phrase: "追加で少し注文してもいいですか？", meaning: "추가로 메뉴를 좀 더 주문해도 될까요?" }],
            vocabulary: [{ word: "追加(ついか)", meaning: "추가" }, { word: "注文(ちゅうもん)する", meaning: "주문하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、喜んで！何を追加なさいますか？",
            translation: "네, 기꺼이 도와드리겠습니다! 어떤 메뉴를 추가하시겠어요?",
            expressions: [{ phrase: "はい、喜んで！", meaning: "네, 기꺼이! (일본 이자카야·식당 직원의 활기찬 대답)" }],
            vocabulary: [{ word: "喜ぶ(よろこぶ)", meaning: "기뻐하다" }]
          },
          {
            role: "손님", side: "right",
            text: "生ビールの中ジョッキをもう1杯と、ラーメンの替え玉を「カタめ」で1つお願いします。",
            translation: "생맥주 중간 잔 한 잔 더 주시고, 라멘 면 추가(카에다마)를 '꼬들꼬들하게(카타메)'로 하나 부탁합니다.",
            expressions: [{ phrase: "生ビールの中ジョッキをもう1杯", meaning: "생맥주 중간 잔 한 잔 더" }, { phrase: "替え玉を「カタめ」で", meaning: "면 사리 추가를 꼬들꼬들하게" }],
            vocabulary: [{ word: "生(なま)ビール", meaning: "생맥주" }, { word: "1杯(いっぱい)", meaning: "한 잔" }, { word: "替え玉(かえだま)", meaning: "면 사리 추가" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました！生ビール1杯と替え玉カタめ1つですね。",
            translation: "알겠습니다! 생맥주 한 잔과 면 추가 꼬들꼬들하게 하나 말씀이시죠.",
            expressions: [{ phrase: "かしこまりました", meaning: "잘 알겠습니다" }],
            vocabulary: [{ word: "カタめ", meaning: "면을 약간 단단하고 꼬들꼬들하게 삶음" }]
          },
          {
            role: "손님", side: "right",
            text: "あと、とんかつ定食の千切りキャベツとお味噌汁はおかわりできますか？",
            translation: "그리고 돈가스 정식에 나온 채 썬 양배추와 된장국은 리필이 되나요?",
            expressions: [{ phrase: "千切りキャベツとお味噌汁はおかわりできますか？", meaning: "채 썬 양배추와 미소 된장국은 리필할 수 있나요?" }],
            vocabulary: [{ word: "千切り(せんぎり)", meaning: "가늘게 채 썲" }, { word: "味噌汁(みそしる)", meaning: "된장국" }, { word: "おかわり", meaning: "리필, 추가" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！当店ではキャベツとご飯、お味噌汁のおかわりはすべて無料です。すぐにお持ちしますね！",
            translation: "네! 저희 가게에서는 양배추와 밥, 된장국 리필이 모두 무료입니다. 바로 가져다드리겠습니다!",
            expressions: [{ phrase: "おかわりはすべて無料です", meaning: "리필은 전부 무료입니다" }],
            vocabulary: [{ word: "当店(とうてん)", meaning: "저희 가게" }, { word: "ご飯(はん)", meaning: "밥" }, { word: "無料(むりょう)", meaning: "무료" }]
          }
        ]
      },
      {
        id: 12,
        title: "생일/기념일 좌석 및 서비스 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "こんにちは。ネットで予約した際に、今夜は結婚記念日のお祝いだとメモに書いたのですが。",
            translation: "안녕하세요. 인터넷으로 예약할 때 오늘 저녁이 결혼기념일 축하 자리라고 메모란에 적었는데요.",
            expressions: [{ phrase: "結婚記念日のお祝い", meaning: "결혼기념일 축하 (생일은 誕生日(たんじょうび)のお祝い)" }],
            vocabulary: [{ word: "予約(よやく)する", meaning: "예약하다" }, { word: "結婚記念日(けっこんきねんび)", meaning: "결혼기념일" }, { word: "お祝い(いわい)", meaning: "축하, 기념" }]
          },
          {
            role: "직원", side: "left",
            text: "おめでとうございます！はい、メモを確認し、夜景が一番きれいに見える窓際の特別席をご用意しております。",
            translation: "축하드립니다! 네, 메모를 확인하고 야경이 가장 예쁘게 보이는 창가 특별석을 준비해 두었습니다.",
            expressions: [{ phrase: "夜景が一番きれいに見える窓際の特別席", meaning: "야경이 가장 아름답게 보이는 창가 특별 좌석" }],
            vocabulary: [{ word: "夜景(やけい)", meaning: "야경" }, { word: "見える(みえる)", meaning: "보이다" }, { word: "窓際(まどぎわ)", meaning: "창가" }, { word: "特別席(とくべつせき)", meaning: "특별석" }]
          },
          {
            role: "손님", side: "right",
            text: "わあ、ありがとうございます！記念日用のデザートプレートなどのサービスはありますか？",
            translation: "와, 감사합니다! 혹시 기념일용 디저트 플레이트 같은 서비스도 있나요?",
            expressions: [{ phrase: "記念日用のデザートプレート", meaning: "기념일 축하 레터링 디저트 접시" }],
            vocabulary: [{ word: "記念日用(きねんびよう)", meaning: "기념일용" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！食後にメッセージ入りのミニケーキプレートを無料でお出ししております。",
            translation: "네! 식사 후에 축하 메시지가 적힌 미니 케이크 플레이트를 무료 서비스로 내어드리고 있습니다.",
            expressions: [{ phrase: "メッセージ入りのミニケーキプレート", meaning: "축하 문구가 들어간 미니 케이크 접시" }],
            vocabulary: [{ word: "食後(しょくご)", meaning: "식후" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "出す(だす)", meaning: "내어주다, 제공하다" }]
          },
          {
            role: "손님", side: "right",
            text: "とてもうれしいです！ケーキを持ってきてくださるときに、家族3人の写真を撮っていただけますか？",
            translation: "정말 기쁘네요! 케이크를 가져다주실 때 저희 가족 세 명의 사진을 좀 찍어 주실 수 있나요?",
            expressions: [{ phrase: "家族3人の写真を撮っていただけますか？", meaning: "가족 3명의 사진을 찍어 주실 수 있나요?" }],
            vocabulary: [{ word: "家族(かぞく)", meaning: "가족" }, { word: "写真(しゃしん)", meaning: "사진" }, { word: "撮る(とる)", meaning: "(사진을) 찍다" }]
          },
          {
            role: "직원", side: "left",
            text: "もちろんです！メインのお料理をお召し上がりになった後に、スタッフがお席へ伺いますね。",
            translation: "물론이죠! 메인 요리를 다 드신 후에 직원이 자리로 찾아가겠습니다.",
            expressions: [{ phrase: "お召し上がりになった後に", meaning: "식사를 다 드신 후에" }],
            vocabulary: [{ word: "料理(りょうり)", meaning: "요리" }, { word: "後(あと)に", meaning: "~한 후에" }, { word: "伺う(うかがう)", meaning: "찾아가다 (겸양어)" }]
          }
        ]
      },
      {
        id: 13,
        title: "남은 음식 포장(투고 박스) 요청하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、料理の量が多くて食べきれないのですが、残りを持ち帰ることはできますか？",
            translation: "실례합니다, 음식 양이 많아서 다 못 먹겠는데 남은 음식을 포장해 갈 수 있나요?",
            expressions: [{ phrase: "量が多くて食べきれないのですが", meaning: "양이 많아서 다 먹을 수가 없는데요" }, { phrase: "残りを持ち帰ることはできますか？", meaning: "남은 음식을 포장해(가지고) 갈 수 있나요?" }],
            vocabulary: [{ word: "量(りょう)", meaning: "양" }, { word: "多い(おおい)", meaning: "많다" }, { word: "食べきれる(たべきれる)", meaning: "다 먹을 수 있다" }, { word: "残り(のこり)", meaning: "남은 것, 잔여분" }, { word: "持ち帰る(もちかえる)", meaning: "가지고 돌아가다, 포장해 가다" }]
          },
          {
            role: "직원", side: "left",
            text: "恐れ入りますが、食中毒防止のため、生もののお刺身やサラダのお持ち帰りはご遠慮いただいております。",
            translation: "죄송합니다만 식중독 예방을 위해 날것인 생선회나 샐러드 포장은 삼가도록 안내해 드리고 있습니다.",
            expressions: [{ phrase: "食中毒防止のため、生もののお持ち帰りは〜", meaning: "식중독 방지를 위해 날음식 포장은 불가합니다 (일본 식당의 위생 규정)" }],
            vocabulary: [{ word: "食中毒防止(しょくちゅうどくぼうし)", meaning: "식중독 예방(방지)" }, { word: "生(なま)もの", meaning: "날음식, 익히지 않은 음식" }, { word: "遠慮(えんりょ)する", meaning: "삼가다, 자제하다" }]
          },
          {
            role: "손님", side: "right",
            text: "なるほど、お刺身はここで全部食べますね。この焼いた餃子と唐揚げは持ち帰っても大丈夫ですか？",
            translation: "그렇군요, 생선회는 여기서 다 먹을게요. 이 구운 만두와 가라아게(닭튀김)는 포장해 가도 괜찮나요?",
            expressions: [{ phrase: "この焼いた餃子と唐揚げは持ち帰っても大丈夫ですか？", meaning: "이 구운 만두와 닭튀김은 포장해 가도 되나요?" }],
            vocabulary: [{ word: "全部(ぜんぶ)", meaning: "전부, 모두" }, { word: "焼く(やく)", meaning: "굽다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！火を通した揚げ物や焼き物でしたらお持ち帰り可能です。専用の折箱と袋をお持ちしますね。",
            translation: "네! 열을 가해 익힌 튀김류나 구이류는 포장해 가실 수 있습니다. 전용 포장 용기와 봉투를 가져다드릴게요.",
            expressions: [{ phrase: "火を通した揚げ物や焼き物", meaning: "불로 익힌(가열한) 튀김류나 구이 요리" }],
            vocabulary: [{ word: "火(ひ)を通す(とおす)", meaning: "불로 익히다, 가열하다" }, { word: "揚げ物(あげもの)", meaning: "튀김 요리" }, { word: "焼き物(やきもの)", meaning: "구이 요리" }, { word: "折箱(おりばこ)", meaning: "도시락·포장용 상자(용기)" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！容器代はいくらですか？",
            translation: "감사합니다! 포장 용기 비용은 얼마인가요?",
            expressions: [{ phrase: "容器代はいくらですか？", meaning: "포장 용기 값은 얼마인가요?" }],
            vocabulary: [{ word: "容器代(ようきだい)", meaning: "용기 비용" }]
          },
          {
            role: "직원", side: "left",
            text: "容器と袋は無料でサービスいたします。本日中にお召し上がりくださいね。",
            translation: "용기와 봉투는 무료로 제공해 드립니다. 오늘 안으로 드시길 바랍니다.",
            expressions: [{ phrase: "本日中にお召し上がりください", meaning: "오늘 중으로(당일 내에) 드십시오" }],
            vocabulary: [{ word: "袋(ふくろ)", meaning: "봉투" }, { word: "本日中(ほんじつちゅう)", meaning: "오늘 중, 당일 내" }]
          }
        ]
      },
      {
        id: 14,
        title: "계산서 요청 및 테이블 결제 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、お会計をお願いします。",
            translation: "실례합니다, 계산(계산서) 부탁합니다.",
            expressions: [{ phrase: "お会計をお願いします", meaning: "계산 부탁합니다 (일본 식당에서 식사를 마치고 계산서를 달라고 할 때 가장 많이 쓰는 표현)" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 지불" }, { word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          },
          {
            role: "직원", side: "left",
            text: "ありがとうございます！伝票をお持ちいたしますので、少々お待ちください。",
            translation: "감사합니다! 계산서(전표)를 가져다드릴 테니 잠시만 기다려 주세요.",
            expressions: [{ phrase: "伝票をお持ちいたします", meaning: "계산 전표를 가져다드리겠습니다" }],
            vocabulary: [{ word: "伝票(でんぴょう)", meaning: "계산서, 전표" }, { word: "少々(しょうしょう)", meaning: "잠시" }]
          },
          {
            role: "손님", side: "right",
            text: "支払いはこのテーブルでするのですか？それとも入口のレジへ行けばいいですか？",
            translation: "결제는 이 테이블 자리에서 하나요? 아니면 입구에 있는 계산대로 가면 되나요?",
            expressions: [{ phrase: "支払いはこのテーブルでするのですか？", meaning: "결제는 이 자리(테이블)에서 하는 건가요?" }, { phrase: "入口のレジへ行けばいいですか？", meaning: "입구 계산대(카운터)로 가면 되나요?" }],
            vocabulary: [{ word: "支払い(しはらい)", meaning: "지불, 결제" }, { word: "入口(いりぐち)", meaning: "입구" }, { word: "行く(いく)", meaning: "가다" }]
          },
          {
            role: "직원", side: "left",
            text: "こちらの伝票をお持ちの上、お帰りの際に入口のレジにてお支払いをお願いいたします。",
            translation: "이 계산 전표를 가지고 나가실 때 입구 계산대에서 결제해 주시면 됩니다.",
            expressions: [{ phrase: "こちらの伝票をお持ちの上", meaning: "이 계산서를 지참하시고" }],
            vocabulary: [{ word: "帰り(かえり)の際(さい)", meaning: "돌아가실 때, 나가실 때" }]
          },
          {
            role: "손님", side: "right",
            text: "分かりました。さっき入り口で預けたベビーカーとコートもレジで受け取れますか？",
            translation: "알겠습니다. 아까 입구에서 맡겼던 유모차와 코트도 계산대에서 찾을 수 있나요?",
            expressions: [{ phrase: "預けたベビーカーとコートもレジで受け取れますか？", meaning: "보관했던 유모차와 코트도 계산대에서 수령할 수 있나요?" }],
            vocabulary: [{ word: "預ける(あずける)", meaning: "맡기다" }, { word: "受け取る(うけとる)", meaning: "받다, 찾다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、レジで番号札をお渡しいただければ、すぐにお持ちいたします！",
            translation: "네, 계산대에서 보관 번호표를 건네주시면 바로 가져다드리겠습니다!",
            expressions: [{ phrase: "番号札をお渡しいただければ", meaning: "보관 번호표를 건네주시면" }],
            vocabulary: [{ word: "番号札(ばんごうふだ)", meaning: "번호표" }, { word: "渡す(わたす)", meaning: "건네주다" }]
          }
        ]
      },
      {
        id: 15,
        title: "더치페이(개별 카드 결제) 요청하기",
        lines: [
          {
            role: "직원", side: "left",
            text: "お会計は合計で6,400円になります。",
            translation: "결제 금액은 총 6,400엔입니다.",
            expressions: [{ phrase: "お会計は合計で〜円になります", meaning: "계산은 총합 ~엔입니다" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 결제" }, { word: "合計(ごうけい)", meaning: "합계" }]
          },
          {
            role: "손님", side: "right",
            text: "すみません、別々に支払いたいのですが、個別会計はできますか？",
            translation: "실례합니다, 따로따로 계산하고 싶은데요, 개별 결제가 가능한가요?",
            expressions: [{ phrase: "別々に支払いたいのですが", meaning: "각자 따로 지불하고 싶은데요" }, { phrase: "個別会計はできますか？", meaning: "개별 계산(더치페이)이 가능한가요? (더치페이는 割り勘(わりかん))" }],
            vocabulary: [{ word: "別々(べつべつ)に", meaning: "따로따로" }, { word: "支払う(しはらう)", meaning: "지불하다" }, { word: "個別会計(こべつかいけい)", meaning: "개별 계산" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、可能です！ご注文の品ごとに分けますか？それとも半額ずつになさいますか？",
            translation: "네, 가능합니다! 주문하신 메뉴별로 나눌까요, 아니면 절반 금액씩 나누시겠어요?",
            expressions: [{ phrase: "ご注文の品ごとに分けますか？", meaning: "주문하신 품목별로 나눌까요?" }, { phrase: "半額ずつになさいますか？", meaning: "반액(절반)씩 계산하시겠습니까?" }],
            vocabulary: [{ word: "品(しな)ごと", meaning: "품목별" }, { word: "分ける(わける)", meaning: "나누다" }, { word: "半額(はんがく)ずつ", meaning: "절반 금액씩" }]
          },
          {
            role: "손님", side: "right",
            text: "クレジットカード2枚で、3,200円ずつ半分に分けて決済してください。",
            translation: "신용카드 두 장으로 3,200엔씩 절반으로 나누어 결제해 주세요.",
            expressions: [{ phrase: "半分に分けて決済してください", meaning: "절반으로 나누어 결제해 주세요" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "두 장" }, { word: "半分(はんぶん)", meaning: "절반" }, { word: "決済(けっさい)", meaning: "결제" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。まず1枚目のカードから端末にタッチをお願いします。",
            translation: "알겠습니다. 먼저 첫 번째 카드부터 단말기에 터치해 주세요.",
            expressions: [{ phrase: "まず1枚目のカードから", meaning: "먼저 첫 번째 카드부터" }],
            vocabulary: [{ word: "1枚目(いちまいめ)", meaning: "첫 번째 장" }, { word: "端末(たんまつ)", meaning: "단말기" }]
          },
          {
            role: "손님", side: "right",
            text: "2枚目もタッチしました。それぞれのレシートをいただけますか？ありがとうございます！",
            translation: "두 번째 카드도 터치했습니다. 각자 영수증을 주실 수 있나요? 감사합니다!",
            expressions: [{ phrase: "それぞれのレシートをいただけますか？", meaning: "각각의 영수증을 받을 수 있을까요?" }],
            vocabulary: [{ word: "2枚目(にまいめ)", meaning: "두 번째 장" }, { word: "それぞれ", meaning: "각각, 각자" }]
          }
        ]
      },
      {
        id: 16,
        title: "계산서 내역 오류 정중히 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、会計の前にレシートの内訳を少し確認していただけますか？",
            translation: "실례합니다, 결제하기 전에 계산서 내역을 잠깐 확인해 주실 수 있나요?",
            expressions: [{ phrase: "レシートの内訳を少し確認していただけますか？", meaning: "영수증(계산서) 세부 내역을 조금 확인해 주실 수 있나요?" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산" }, { word: "内訳(うちわけ)", meaning: "상세 내역" }, { word: "確認(かくにん)する", meaning: "확인하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、もちろんです。どの項目でしょうか？",
            translation: "네, 물론이죠. 어떤 항목이신가요?",
            expressions: [{ phrase: "どの項目でしょうか？", meaning: "어느 항목 말씀이신가요?" }],
            vocabulary: [{ word: "項目(こうもく)", meaning: "항목" }]
          },
          {
            role: "손님", side: "right",
            text: "ここに「生ビール 3杯」と書いてあるのですが、私たちが注文したのは2杯だけです。",
            translation: "여기에 '생맥주 3잔'이라고 적혀 있는데, 저희가 주문한 건 2잔뿐이거든요.",
            expressions: [{ phrase: "私たちが注文したのは2杯だけです", meaning: "저희가 주문한 것은 2잔뿐입니다" }],
            vocabulary: [{ word: "生(なま)ビール", meaning: "생맥주" }, { word: "3杯(さんばい)", meaning: "3잔" }, { word: "2杯(にはい)", meaning: "2잔" }]
          },
          {
            role: "직원", side: "left",
            text: "ただいま確認いたします…本当ですね！大変申し訳ございません、誤って1杯多く入力してしまいました。",
            translation: "지금 확인해 보겠습니다... 정말 그렇네요! 대단히 죄송합니다, 실수로 한 잔을 더 입력해 버렸습니다.",
            expressions: [{ phrase: "誤って1杯多く入力してしまいました", meaning: "실수로 1잔을 더 많이 입력하고 말았습니다" }],
            vocabulary: [{ word: "誤って(あやまって)", meaning: "실수로, 잘못하여" }, { word: "多く(おおく)", meaning: "많이" }, { word: "入力(にゅうりょく)する", meaning: "입력하다" }]
          },
          {
            role: "손님", side: "right",
            text: "大丈夫ですよ！修正した伝票で計算し直していただけますか？",
            translation: "괜찮습니다! 수정된 전표로 다시 계산해 주실 수 있나요?",
            expressions: [{ phrase: "修正した伝票で計算し直す", meaning: "수정한 전표로 다시 계산하다" }],
            vocabulary: [{ word: "修正(しゅうせい)する", meaning: "수정하다" }, { word: "伝票(でんぴょう)", meaning: "계산 전표" }, { word: "計算(けいさん)し直す(なおす)", meaning: "다시 계산하다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、生ビール1杯分を取り消して再計算いたしました。ご指摘いただきありがとうございます！",
            translation: "네, 생맥주 한 잔 값을 취소하고 재계산했습니다. 알려주셔서 감사합니다!",
            expressions: [{ phrase: "生ビール1杯分を取り消して再計算", meaning: "생맥주 1잔 금액을 취소하고 재계산" }],
            vocabulary: [{ word: "取り消す(とりけす)", meaning: "취소하다" }, { word: "再計算(さいけいさん)", meaning: "재계산" }, { word: "指摘(してき)", meaning: "지적, 알려줌" }]
          }
        ]
      },
      {
        id: 17,
        title: "팁 포함 여부 및 결제 방식 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、レシートに「お通し 400円×2」と書いてあるのですが、これは何の料金ですか？",
            translation: "실례합니다, 영수증에 '오토시(お通し) 400엔×2'라고 적혀 있는데 이건 무슨 요금인가요?",
            expressions: [{ phrase: "これは何の料金ですか？", meaning: "이것은 무엇에 대한 요금인가요?" }],
            vocabulary: [{ word: "お通し(とおし)", meaning: "오토시 (일본 이자카야에서 자릿세 개념으로 기본 제공되는 유료 기본 안주)" }, { word: "料金(りょうきん)", meaning: "요금" }]
          },
          {
            role: "직원", side: "left",
            text: "こちらは日本の居酒屋のシステムで、席料を兼ねて最初にお出しした小鉢のおつまみ代となっております。なお、チップは一切不要です。",
            translation: "이것은 일본 이자카야의 시스템으로, 자릿세를 겸하여 맨 처음에 내어드린 기본 안주 비용입니다. 참고로 별도의 팁은 전혀 필요 없습니다.",
            expressions: [{ phrase: "席料を兼ねて最初にお出しした小鉢", meaning: "자릿세(테이블 차지)를 겸해서 처음에 제공한 작은 기본 안주" }, { phrase: "チップは一切不要です", meaning: "팁은 일절 필요하지 않습니다" }],
            vocabulary: [{ word: "居酒屋(いざかや)", meaning: "이자카야 (일본식 선술집)" }, { word: "席料(せきりょう)", meaning: "자릿세" }, { word: "小鉢(こばち)", meaning: "작은 그릇의 기본 안주" }, { word: "不要(ふよう)", meaning: "불필요" }]
          },
          {
            role: "손님", side: "right",
            text: "なるほど、理解しました！支払いはクレジットカードや交通系ICカードも使えますか？",
            translation: "아하, 이해했습니다! 결제는 신용카드나 교통카드(스이카 등)도 쓸 수 있나요?",
            expressions: [{ phrase: "クレジットカードや交通系ICカードも使えますか？", meaning: "신용카드나 선불 교통카드도 사용할 수 있나요?" }],
            vocabulary: [{ word: "理解(りかい)する", meaning: "이해하다" }, { word: "交通系(こうつうけい)ICカード", meaning: "교통계 IC카드 (Suica, PASMO 등)" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、クレジットカードと交通系ICカード、どちらもご利用いただけます！",
            translation: "네, 신용카드와 교통카드 둘 다 이용하실 수 있습니다!",
            expressions: [{ phrase: "どちらもご利用いただけます", meaning: "둘 다 이용하실 수 있습니다" }],
            vocabulary: [{ word: "利用(りよう)する", meaning: "이용하다" }]
          },
          {
            role: "손님", side: "right",
            text: "では、クレジットカードの一括払いでお願いします。",
            translation: "그럼 신용카드 일시불로 부탁합니다.",
            expressions: [{ phrase: "クレジットカードの一括払いで", meaning: "신용카드 일시불로 (1回払い(いっかいばらい)라고도 함)" }],
            vocabulary: [{ word: "一括払い(いっかつばらい)", meaning: "일시불 결제" }]
          },
          {
            role: "직원", side: "left",
            text: "かしこまりました。こちらにカードをタッチしてください。ありがとうございました！",
            translation: "알겠습니다. 여기에 카드를 터치해 주세요. 감사합니다!",
            expressions: [{ phrase: "こちらにカードをタッチしてください", meaning: "여기에 카드를 태그(터치)해 주십시오" }],
            vocabulary: [{ word: "ありがとうございました", meaning: "감사했습니다 (손님이 떠날 때 쓰는 감사 인사)" }]
          }
        ]
      },
      {
        id: 18,
        title: "식재료 알레르기(갑각류/땅콩) 알리기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、注文の前に確認したいのですが、同行者にエビとカニの甲殻類アレルギーがあります。",
            translation: "실례합니다, 주문하기 전에 확인하고 싶은데요, 일행 중에 새우와 게 같은 갑각류 알레르기가 있는 사람이 있어요.",
            expressions: [{ phrase: "エビとカニの甲殻類アレルギー", meaning: "새우와 게 등의 갑각류 알레르기" }],
            vocabulary: [{ word: "確認(かくにん)する", meaning: "확인하다" }, { word: "同行者(どうこうしゃ)", meaning: "동행자, 일행" }, { word: "エビ", meaning: "새우" }, { word: "カニ", meaning: "게" }, { word: "甲殻類(こうかくるい)", meaning: "갑각류" }]
          },
          {
            role: "직원", side: "left",
            text: "おっしゃっていただきありがとうございます！どのメニューをご検討中でしょうか？",
            translation: "미리 말씀해 주셔서 감사합니다! 어느 메뉴를 보고 계신가요?",
            expressions: [{ phrase: "どのメニューをご検討中でしょうか？", meaning: "어떤 메뉴를 주문할지 검토 중이신가요?" }],
            vocabulary: [{ word: "検討中(けんとうちゅう)", meaning: "검토 중, 고려 중" }]
          },
          {
            role: "손님", side: "right",
            text: "この野菜焼きそばと、きのこのクリームパスタにエビやカニのエキスは入っていますか？",
            translation: "이 야채 야키소바(볶음면)와 버섯 크림 파스타에 새우나 게 농축액(엑기스)이 들어 있나요?",
            expressions: [{ phrase: "エビやカニのエキスは入っていますか？", meaning: "새우나 게 추출물(육수·소스)이 들어가 있나요?" }],
            vocabulary: [{ word: "野菜焼きそば(やさいやきそば)", meaning: "야채 볶음면" }, { word: "きのこ", meaning: "버섯" }, { word: "入る(はいる)", meaning: "들어가다" }]
          },
          {
            role: "직원", side: "left",
            text: "厨房のシェフに確認しましたところ、焼きそばのソースにはオイスターソースとエビのエキスが少し入っております。",
            translation: "주방 셰프에게 확인해 보니, 야키소바 소스에는 굴소스와 새우 엑기스가 조금 들어가 있다고 합니다.",
            expressions: [{ phrase: "厨房のシェフに確認しましたところ", meaning: "주방 요리사에게 확인해 본 결과" }],
            vocabulary: [{ word: "厨房(ちゅうぼう)", meaning: "주방" }, { word: "少し(すこし)", meaning: "조금, 약간" }]
          },
          {
            role: "손님", side: "right",
            text: "聞いてよかったです！きのこのクリームパスタの方は甲殻類は全く入っていませんか？",
            translation: "물어보길 잘했네요! 버섯 크림 파스타 쪽에는 갑각류 성분이 전혀 안 들어가나요?",
            expressions: [{ phrase: "甲殻類は全く入っていませんか？", meaning: "갑각류 성분은 전혀 들어 있지 않나요?" }],
            vocabulary: [{ word: "聞く(きく)", meaning: "물어보다" }, { word: "全く(まったく)", meaning: "전혀" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、きのこパスタは甲殻類不使用です。念のため、新しいフライパンと調理器具を分けてお作りいたしますね。",
            translation: "네, 버섯 파스타에는 갑각류가 전혀 쓰이지 않습니다. 혹시 모르니 새 프라이팬과 별도의 조리도구로 분리해서 조리해 드리겠습니다.",
            expressions: [{ phrase: "新しいフライパンと調理器具を分けて", meaning: "새 프라이팬과 조리 기구를 따로 분리해서 (교차 오염 방지)" }],
            vocabulary: [{ word: "不使用(ふしよう)", meaning: "사용하지 않음, 무첨가" }, { word: "念(ねん)のため", meaning: "만약을 위해" }, { word: "調理器具(ちょうりきぐ)", meaning: "조리 기구" }, { word: "分ける(わける)", meaning: "나누다, 분리하다" }]
          }
        ]
      },
      {
        id: 19,
        title: "비건·채식 옵션 메뉴 문의하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、同行者にお肉を食べない人がいるのですが、ベジタリアンやヴィーガン向けのメニューはありますか？",
            translation: "실례합니다, 일행 중에 고기를 먹지 않는 사람이 있는데 채식주의자(베지테리언)나 비건용 메뉴가 있나요?",
            expressions: [{ phrase: "ベジタリアンやヴィーガン向けのメニュー", meaning: "채식주의자나 비건을 위한 메뉴" }],
            vocabulary: [{ word: "同行者(どうこうしゃ)", meaning: "일행, 동행자" }, { word: "お肉(にく)", meaning: "고기" }, { word: "食べる(たべる)", meaning: "먹다" }]
          },
          {
            role: "직원", side: "left",
            text: "はい！メニューに緑の葉っぱのマークがついているお料理は、すべて動物性食材を使っていないヴィーガン対応メニューです。",
            translation: "네! 메뉴판에 초록색 나뭇잎 마크가 붙어 있는 요리는 모두 동물성 식재료를 쓰지 않은 비건 대응 메뉴입니다.",
            expressions: [{ phrase: "動物性食材を使っていない", meaning: "동물성 식재료를 사용하지 않은" }],
            vocabulary: [{ word: "緑(みどり)", meaning: "초록색" }, { word: "葉(は)っぱ", meaning: "나뭇잎" }, { word: "動物性食材(どうぶつせいしょくざい)", meaning: "동물성 식재료" }]
          },
          {
            role: "손님", side: "right",
            text: "この季節野菜の天ぷらうどんと豆腐サラダのだしには、かつお節や魚介エキスは入っていますか？",
            translation: "이 계절 채소 튀김 우동과 두부 샐러드 육수에는 가쓰오부시(가다랑어포)나 어패류 엑기스가 들어 있나요?",
            expressions: [{ phrase: "かつお節や魚介エキスは入っていますか？", meaning: "가쓰오부시나 해산물 육수가 들어가 있나요? (일본 채식에서 가장 주의해야 할 요소)" }],
            vocabulary: [{ word: "季節野菜(きせつやさい)", meaning: "계절 채소" }, { word: "豆腐(とうふ)", meaning: "두부" }, { word: "だし", meaning: "육수, 다시 국물" }, { word: "かつお節(ぶし)", meaning: "가다랑어포" }, { word: "魚介(ぎょかい)", meaning: "어패류, 해산물" }]
          },
          {
            role: "직원", side: "left",
            text: "いいご質問ですね！ヴィーガンうどんのつゆは、かつお節を使わず昆布と干し椎茸だけで丁寧にとった植物性だしです。",
            translation: "좋은 질문이십니다! 비건 우동 국물은 가쓰오부시를 쓰지 않고 다시마와 건표고버섯만으로 정성껏 우려낸 식물성 육수입니다.",
            expressions: [{ phrase: "昆布と干し椎茸だけで丁寧にとった植物性だし", meaning: "다시마와 건표고버섯만으로 우려낸 식물성 육수" }],
            vocabulary: [{ word: "質問(しつもん)", meaning: "질문" }, { word: "つゆ", meaning: "우동·소바 국물" }, { word: "昆布(こんぶ)", meaning: "다시마" }, { word: "干し椎茸(ほししいたけ)", meaning: "건표고버섯" }, { word: "植物性(しょくぶつせい)", meaning: "식물성" }]
          },
          {
            role: "손님", side: "right",
            text: "それは安心ですね！天ぷらの衣にも卵は使われていませんか？",
            translation: "안심이 되네요! 튀김옷에도 달걀이 들어가지 않나요?",
            expressions: [{ phrase: "天ぷらの衣にも卵は使われていませんか？", meaning: "튀김 반죽(튀김옷)에도 계란이 사용되지 않았나요?" }],
            vocabulary: [{ word: "安心(あんしん)", meaning: "안심" }, { word: "衣(ころも)", meaning: "튀김옷" }, { word: "卵(たまご)", meaning: "달걀, 계란" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、卵不使用の米粉の衣で、植物油を使って別のお鍋で揚げておりますのでご安心ください！",
            translation: "네, 달걀을 넣지 않은 쌀가루 튀김옷으로 식물성 기름을 사용해 별도의 냄비에서 튀겨내니 안심하고 드세요!",
            expressions: [{ phrase: "卵不使用の米粉の衣", meaning: "계란 무첨가 쌀가루 튀김옷" }],
            vocabulary: [{ word: "米粉(こめこ)", meaning: "쌀가루" }, { word: "植物油(しょくぶつゆ)", meaning: "식물성 기름" }, { word: "別(べつ)のお鍋(なべ)", meaning: "별도의 튀김 냄비" }, { word: "揚げる(あげる)", meaning: "튀기다" }]
          }
        ]
      },
      {
        id: 20,
        title: "식사 후 근처 볼거리나 택시 호출 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "ごちそうさまでした！料理が本当に美味しかったです。ちなみに、この近くで食後に散歩するのにいい場所はありますか？",
            translation: "잘 먹었습니다! 음식이 정말 맛있었어요. 그런데 이 근처에서 식후에 산책하기 좋은 곳이 있나요?",
            expressions: [{ phrase: "ごちそうさまでした！", meaning: "잘 먹었습니다! (식사를 마친 후의 기본 인사)" }],
            vocabulary: [{ word: "料理(りょうり)", meaning: "요리, 음식" }, { word: "美味しい(おいしい)", meaning: "맛있다" }, { word: "近く(ちかく)", meaning: "근처" }, { word: "散歩(さんぽ)", meaning: "산책" }]
          },
          {
            role: "직원", side: "left",
            text: "ありがとうございます！この通りをまっすぐ5分ほど歩くと、夜景と噴水がきれいな水辺の公園がございます。",
            translation: "감사합니다! 이 거리를 따라 곧장 5분 정도 걸어가시면 야경과 분수가 아름다운 수변 공원이 있습니다.",
            expressions: [{ phrase: "夜景と噴水がきれいな水辺の公園", meaning: "야경과 분수가 예쁜 수변 공원" }],
            vocabulary: [{ word: "通り(とおり)", meaning: "거리, 길" }, { word: "歩く(あるく)", meaning: "걷다" }, { word: "噴水(ふんすい)", meaning: "분수" }, { word: "水辺(みずべ)", meaning: "수변, 물가" }, { word: "公園(こうえん)", meaning: "공원" }]
          },
          {
            role: "손님", side: "right",
            text: "小さな子どもを連れて、今の時間帯に歩いても安全ですか？",
            translation: "어린아이를 데리고 지금 시간대에 걸어 다녀도 안전한가요?",
            expressions: [{ phrase: "今の時間帯に歩いても安全ですか？", meaning: "지금 시간대에 걸어 다녀도 안전한가요?" }],
            vocabulary: [{ word: "小さな(ちいさな)", meaning: "어린, 작은" }, { word: "連れる(つれる)", meaning: "데리고 가다" }, { word: "時間帯(じかんたい)", meaning: "시간대" }, { word: "安全(あんぜん)", meaning: "안전" }]
          },
          {
            role: "직원", side: "left",
            text: "はい、街灯が明るくて家族連れも多い場所ですので、夜10時ごろまではとても安全ですよ。",
            translation: "네, 가로등이 밝고 가족 단위 방문객도 많은 곳이라 밤 10시쯤까지는 아주 안전합니다.",
            expressions: [{ phrase: "街灯が明るくて家族連れも多い", meaning: "가로등이 밝고 가족 동반 방문객도 많다" }],
            vocabulary: [{ word: "街灯(がいとう)", meaning: "가로등" }, { word: "明るい(あかるい)", meaning: "밝다" }, { word: "家族連れ(かぞくづれ)", meaning: "가족 동반" }, { word: "場所(ばしょ)", meaning: "장소, 곳" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！あと、ホテルへ帰るときに、お店の前でタクシーを拾うことはできますか？",
            translation: "다행이네요! 그리고 호텔로 돌아갈 때 가게 앞 길가에서 택시를 잡을 수 있나요?",
            expressions: [{ phrase: "お店の前でタクシーを拾う", meaning: "가게 앞에서 택시를 잡아 타다" }],
            vocabulary: [{ word: "帰る(かえる)", meaning: "돌아가다" }, { word: "前(まえ)", meaning: "앞" }, { word: "拾う(ひろう)", meaning: "(길에서 택시를) 잡다" }]
          },
          {
            role: "직원", side: "left",
            text: "夜は流しのタクシーが捕まりにくいこともありますので、おっしゃっていただければレジでタクシーをお呼びしますよ！",
            translation: "밤에는 빈 택시가 잘 안 잡힐 수도 있으니, 말씀해 주시면 계산대에서 공식 택시를 호출해 드리겠습니다!",
            expressions: [{ phrase: "流しのタクシーが捕まりにくい", meaning: "길거리를 돌아다니는 빈 택시가 잘 잡히지 않는다" }, { phrase: "タクシーをお呼びします", meaning: "택시를 불러(호출해) 드리겠습니다" }],
            vocabulary: [{ word: "流し(ながし)のタクシー", meaning: "승객을 찾으며 도로를 주행하는 빈 택시" }, { word: "捕まる(つかまる)", meaning: "(택시가) 잡히다" }, { word: "呼ぶ(よぶ)", meaning: "부르다, 호출하다" }]
          }
        ]
      }
    ]
  },
  hotel: {
    // ==========================================
    // 1. 영어 (English) - 호텔 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "프런트에서 예약자 확인 및 체크인",
        lines: [
          {
            role: "프런트 직원", side: "left",
            text: "Good afternoon! Welcome to the Grand Hotel. How may I assist you today?",
            translation: "안녕하세요! 그랜드 호텔에 오신 것을 환영합니다. 오늘 어떻게 도와드릴까요?",
            expressions: [{ phrase: "How may I assist you today?", meaning: "오늘 무엇을 도와드릴까요? ('How can I help you?'보다 격식 있는 호텔식 표현)" }],
            vocabulary: [{ word: "assist", meaning: "돕다, 안내하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Hi! I'd like to check in, please. I have a reservation under the name Seungtaek Lim.",
            translation: "안녕하세요! 체크인하고 싶습니다. 'Seungtaek Lim'이라는 이름으로 예약했어요.",
            expressions: [{ phrase: "I'd like to check in, please.", meaning: "체크인하고 싶습니다." }, { phrase: "under the name ~", meaning: "(예약자명이) ~라는 이름으로" }],
            vocabulary: [{ word: "check in", meaning: "체크인하다, 투숙 수속을 하다" }, { word: "reservation", meaning: "예약" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Thank you, Mr. Lim. I see your booking for a Deluxe Family Room for three nights. May I see your passports and a credit card for incidentals?",
            translation: "감사합니다, 임 고객님. 디럭스 패밀리룸 3박 예약이 확인됩니다. 여권과 보증금(부대비용) 가승인용 신용카드를 보여주시겠어요?",
            expressions: [{ phrase: "a credit card for incidentals", meaning: "투숙 중 발생할 수 있는 부대비용(미니바·룸서비스 등) 보증용 신용카드" }],
            vocabulary: [{ word: "booking", meaning: "예약" }, { word: "incidentals", meaning: "부대비용, 기타 잡비 (security deposit 보증금 용도)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Here are our passports and my Visa card. How much is the security deposit hold?",
            translation: "여기 여권들과 제 비자 카드 있습니다. 보증금 가승인 금액은 얼마인가요?",
            expressions: [{ phrase: "security deposit hold", meaning: "보증금 가승인 (실제 청구가 아니라 일정 금액 한도를 일시적으로 잡아두는 것)" }],
            vocabulary: [{ word: "security deposit", meaning: "보증금" }, { word: "hold", meaning: "(카드 한도) 일시 정지, 가승인" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "We place a temporary hold of $100 per stay, which will be automatically released upon check-out if there are no room charges.",
            translation: "투숙당 100달러가 일시 가승인되며, 객실 유료 이용 내역이 없으면 체크아웃 시 자동으로 취소(해제)됩니다.",
            expressions: [{ phrase: "automatically released upon check-out", meaning: "체크아웃 시 가승인이 자동으로 해제되다" }],
            vocabulary: [{ word: "temporary", meaning: "일시적인" }, { word: "release", meaning: "(잡아둔 보증금을) 해제하다, 풀어주다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Sounds good! Here is my signature on the registration form.",
            translation: "알겠습니다! 숙박 등록 카드에 서명했습니다.",
            expressions: [{ phrase: "registration form", meaning: "투숙객 등록 카드 (체크인 서류)" }],
            vocabulary: [{ word: "signature", meaning: "서명, 사인" }]
          }
        ]
      },
      {
        id: 2,
        title: "얼리 체크인 가능 여부 문의하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello! We have a reservation for today, and our flight landed early. Is there any chance we could do an early check-in?",
            translation: "안녕하세요! 오늘 예약한 투숙객인데 비행기가 일찍 도착해서요. 혹시 얼리 체크인(조기 입실)이 가능할까요?",
            expressions: [{ phrase: "Is there any chance we could do an early check-in?", meaning: "혹시 얼리 체크인을 할 수 있을까요? (부담을 주지 않고 정중하게 가능 여부를 묻는 표현)" }],
            vocabulary: [{ word: "early check-in", meaning: "정규 시간보다 일찍 체크인하는 것" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Welcome! Standard check-in time is 3:00 PM, and it's 12:30 PM right now. Let me check the status of your room.",
            translation: "환영합니다! 정규 체크인 시간은 오후 3시이고 지금은 12시 30분이네요. 객실 정비 상태를 확인해 보겠습니다.",
            expressions: [{ phrase: "Standard check-in time is ~", meaning: "정규(기본) 체크인 시간은 ~입니다" }],
            vocabulary: [{ word: "status", meaning: "상태, 진행 상황" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Thank you! Even if it's on a lower floor, we'd love to get into a room so our child can rest.",
            translation: "감사합니다! 저층이라도 괜찮으니 아이가 쉴 수 있게 빨리 입실할 수 있으면 좋겠어요.",
            expressions: [{ phrase: "Even if it's on a lower floor", meaning: "비록 저층 객실이라 할지라도" }],
            vocabulary: [{ word: "lower floor", meaning: "저층 (고층은 higher floor / upper floor)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Good news! We have a clean room of the same type ready on the 6th floor right now.",
            translation: "좋은 소식입니다! 마침 6층에 같은 등급의 청소 완료된 객실이 하나 바로 준비되어 있습니다.",
            expressions: [{ phrase: "a clean room of the same type", meaning: "동일한 객실 등급의 청소가 끝난 방" }],
            vocabulary: [{ word: "ready", meaning: "준비가 완료된" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Oh, that's wonderful! Is there an extra fee for checking in two hours early?",
            translation: "와, 정말 다행이네요! 두 시간 일찍 체크인하는 것에 대해 추가 요금이 있나요?",
            expressions: [{ phrase: "Is there an extra fee for ~?", meaning: "~에 대한 추가 비용이 있나요?" }],
            vocabulary: [{ word: "extra fee", meaning: "추가 요금" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "No extra charge at all! We're happy to let you check in early complimentary since the room is ready.",
            translation: "추가 요금은 전혀 없습니다! 마침 객실이 준비되어 있어서 무료로 얼리 체크인을 도와드리겠습니다.",
            expressions: [{ phrase: "No extra charge at all!", meaning: "추가 요금이 전혀 없습니다!" }],
            vocabulary: [{ word: "complimentary", meaning: "무료 서비스의" }]
          }
        ]
      },
      {
        id: 3,
        title: "체크인 전 캐리어 먼저 맡기기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hi! We're checking in later today at 3:00 PM, but could we leave our luggage here before we go sightseeing?",
            translation: "안녕하세요! 오늘 오후 3시에 체크인할 예정인데, 관광하러 가기 전에 짐을 먼저 여기에 맡겨 둘 수 있을까요?",
            expressions: [{ phrase: "could we leave our luggage here?", meaning: "저희 수하물(짐)을 여기에 맡겨 둘 수 있을까요?" }],
            vocabulary: [{ word: "luggage", meaning: "수하물, 여행 가방 (baggage)" }, { word: "sightseeing", meaning: "관광" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Certainly! We can store your bags at the bell desk free of charge. How many pieces of luggage do you have?",
            translation: "물론이죠! 벨데스크에서 무료로 짐을 보관해 드립니다. 맡기실 가방이 총 몇 개인가요?",
            expressions: [{ phrase: "store your bags at the bell desk", meaning: "벨데스크(수하물 보관소)에 가방을 보관하다" }, { phrase: "How many pieces of luggage", meaning: "가방(짐)이 몇 개 (luggage는 셀 수 없는 명사라 piece 단위를 사용)" }],
            vocabulary: [{ word: "bell desk", meaning: "호텔 로비의 짐 보관 및 운반 담당 데스크" }]
          },
          {
            role: "투숙객", side: "right",
            text: "We have two large suitcases and one folding stroller, so three items in total.",
            translation: "큰 캐리어 두 개와 접이식 유모차 하나 해서 총 세 개입니다.",
            expressions: [{ phrase: "three items in total", meaning: "전부 합쳐서 3개" }],
            vocabulary: [{ word: "folding stroller", meaning: "접이식 유모차" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Do you have any fragile items, laptops, or passports inside the suitcases?",
            translation: "캐리어 안에 깨지기 쉬운 물건이나 노트북, 여권 같은 귀중품이 들어 있나요?",
            expressions: [{ phrase: "fragile items, laptops, or passports", meaning: "파손 주의 물품이나 노트북, 여권" }],
            vocabulary: [{ word: "fragile", meaning: "깨지기 쉬운, 파손 주의의" }]
          },
          {
            role: "투숙객", side: "right",
            text: "No, we have all our valuables and passports in our small backpack.",
            translation: "아니요, 귀중품과 여권은 전부 저희가 메고 갈 작은 백팩에 챙겼습니다.",
            expressions: [{ phrase: "all our valuables", meaning: "저희의 모든 귀중품" }],
            vocabulary: [{ word: "valuables", meaning: "귀중품 (항상 복수형으로 사용)" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Perfect! Here is your luggage claim ticket. Just hand this ticket to the front desk when you return to check in!",
            translation: "완벽합니다! 여기 수하물 보관표(보관증) 드리겠습니다. 이따 돌아오셔서 체크인하실 때 프런트에 이 표를 주시면 됩니다!",
            expressions: [{ phrase: "luggage claim ticket", meaning: "맡긴 짐을 찾을 때 내는 수하물 보관 번호표" }],
            vocabulary: [{ word: "return", meaning: "돌아오다" }]
          }
        ]
      },
      {
        id: 4,
        title: "조식 시간 및 식당 위치 확인하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Excuse me, does our room reservation include the breakfast buffet?",
            translation: "실례합니다, 저희 객실 예약에 조식 뷔페가 포함되어 있나요?",
            expressions: [{ phrase: "does our room reservation include ~?", meaning: "저희 객실 예약에 ~이 포함되어 있나요?" }],
            vocabulary: [{ word: "breakfast buffet", meaning: "조식 뷔페" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Yes, breakfast for two adults and one child is included in your package every morning!",
            translation: "네, 성인 두 분과 어린이 한 명의 조식이 패키지 요금에 매일 아침 포함되어 있습니다!",
            expressions: [{ phrase: "included in your package", meaning: "패키지(객실 상품)에 포함되어 있는" }],
            vocabulary: [{ word: "every morning", meaning: "매일 아침" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Great! What time is breakfast served, and where is the restaurant located?",
            translation: "좋네요! 조식 운영 시간은 몇 시부터 몇 시까지이고, 식당 위치는 어디인가요?",
            expressions: [{ phrase: "What time is breakfast served?", meaning: "조식은 몇 시에 제공되나요(운영되나요)?" }],
            vocabulary: [{ word: "located", meaning: "위치한" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Breakfast is served from 6:30 AM to 10:30 AM at 'The Garden Cafe' on the 2nd floor.",
            translation: "조식은 2층에 있는 '더 가든 카페'에서 오전 6시 30분부터 10시 30분까지 제공됩니다.",
            expressions: [{ phrase: "from 6:30 AM to 10:30 AM", meaning: "오전 6시 30분부터 10시 30분까지" }],
            vocabulary: [{ word: "2nd floor", meaning: "2층" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Do we need paper breakfast coupons, or do we just give them our room number?",
            translation: "종이 조식 쿠폰이 필요한가요, 아니면 식당 입구에서 객실 번호만 말하면 되나요?",
            expressions: [{ phrase: "give them our room number", meaning: "직원에게 객실 호수를 알려주다" }],
            vocabulary: [{ word: "coupon", meaning: "쿠폰, 이용권 (voucher)" }, { word: "room number", meaning: "객실 번호(호수)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "No coupons needed! Just tell the host your room number and last name at the entrance. Going before 8:00 AM is best to beat the crowd!",
            translation: "쿠폰은 필요 없습니다! 입구 안내 직원에게 객실 번호와 성(Last name)만 말씀해 주세요. 붐비는 시간을 피하려면 8시 전에 가시는 게 가장 좋습니다!",
            expressions: [{ phrase: "beat the crowd", meaning: "사람들이 몰려 붐비는 시간대를 피하다" }],
            vocabulary: [{ word: "entrance", meaning: "입구" }, { word: "crowd", meaning: "인파, 붐비는 사람들" }]
          }
        ]
      },
      {
        id: 5,
        title: "객실 와이파이 연결 및 안내받기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hi, I'm in Room 804, and I'm having trouble connecting to the hotel Wi-Fi.",
            translation: "안녕하세요, 804호 투숙객인데 호텔 와이파이 연결이 잘 안 되어서요.",
            expressions: [{ phrase: "having trouble connecting to ~", meaning: "~에 접속(연결)하는 데 어려움을 겪고 있다" }],
            vocabulary: [{ word: "trouble", meaning: "어려움, 문제" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "I'd be happy to help! Did you select the network named 'GrandHotel_Guest'?",
            translation: "기꺼이 도와드리겠습니다! 'GrandHotel_Guest'라는 이름의 네트워크를 선택하셨나요?",
            expressions: [{ phrase: "select the network named ~", meaning: "~라는 이름의 와이파이 네트워크를 선택하다" }],
            vocabulary: [{ word: "select", meaning: "선택하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Yes, I selected it, but the login page isn't popping up on my phone.",
            translation: "네, 선택했는데 제 휴대폰에 로그인 화면(인증 창)이 자동으로 뜨지 않아요.",
            expressions: [{ phrase: "the login page isn't popping up", meaning: "와이파이 로그인 인증 팝업창이 뜨지 않는다" }],
            vocabulary: [{ word: "pop up", meaning: "(화면·창이) 자동으로 뜨다, 나타나다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "If it doesn't pop up automatically, open your web browser and type 'wifi.hotel.com' in the address bar.",
            translation: "자동으로 뜨지 않으면 인터넷 브라우저를 열고 주소창에 'wifi.hotel.com'을 입력해 보세요.",
            expressions: [{ phrase: "type ~ in the address bar", meaning: "브라우저 주소창에 ~을 입력하다" }],
            vocabulary: [{ word: "address bar", meaning: "인터넷 주소창" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Oh, the login screen just appeared! It asks for a room number and last name.",
            translation: "오, 이제 로그인 화면이 떴어요! 객실 번호와 성(Last name)을 입력하라고 나오네요.",
            expressions: [{ phrase: "It asks for ~", meaning: "(화면에서) ~의 입력을 요구한다" }],
            vocabulary: [{ word: "appear", meaning: "나타나다" }, { word: "last name", meaning: "성 (Family name / Surname)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Enter '804' and 'LIM', then choose the 'Complimentary Standard Wi-Fi' option so you won't be billed!",
            translation: "'804'와 'LIM'을 입력하신 뒤, 요금이 청구되지 않도록 '무료 일반 와이파이(Complimentary Standard)' 옵션을 선택하세요!",
            expressions: [{ phrase: "so you won't be billed", meaning: "유료 요금이 청구되지 않도록 (해외 호텔에서는 유료 고속 와이파이 옵션과 무료 옵션을 구분해야 함)" }],
            vocabulary: [{ word: "bill", meaning: "요금을 청구하다" }]
          }
        ]
      },
      {
        id: 6,
        title: "객실 카드키 작동 불량으로 재발급",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Excuse me, I'm staying in Room 804, and my room key card suddenly stopped working.",
            translation: "실례합니다, 804호에 묵고 있는데 제 객실 카드키가 갑자기 작동하지 않아요.",
            expressions: [{ phrase: "my room key card suddenly stopped working", meaning: "객실 카드키가 갑자기 인식되지 않는다(작동을 멈췄다)" }],
            vocabulary: [{ word: "key card", meaning: "카드키" }, { word: "suddenly", meaning: "갑자기" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Oh, I'm sorry about that! Does a red light flash when you tap it on the door lock?",
            translation: "아, 불편을 드려 죄송합니다! 도어락에 카드를 태그했을 때 빨간불이 깜빡거리나요?",
            expressions: [{ phrase: "when you tap it on the door lock", meaning: "방문 도어락에 카드를 갖다 댔을 때" }],
            vocabulary: [{ word: "flash", meaning: "(불빛이) 깜빡거리다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Yes, it flashes red and won't unlock. I kept the card next to my phone—maybe it got demagnetized?",
            translation: "네, 빨간불만 깜빡이고 문이 안 열려요. 카드를 휴대폰 옆에 같이 두었는데 자성이 풀린 걸까요?",
            expressions: [{ phrase: "maybe it got demagnetized?", meaning: "혹시 카드키의 자기(자성)가 손상된 걸까요?" }],
            vocabulary: [{ word: "unlock", meaning: "잠금이 열리다" }, { word: "demagnetize", meaning: "(마그네틱·카드키의) 자성을 잃게 하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Yes, phones and MagSafe cases often deactivate the key cards! Could you confirm your name and show me a quick ID for security?",
            translation: "네, 휴대폰이나 맥세이프 케이스에 닿으면 카드키가 초기화되는 경우가 많습니다! 보안을 위해 성함 확인과 신분증 제시 부탁드려도 될까요?",
            expressions: [{ phrase: "show me a quick ID for security", meaning: "보안 확인을 위해 신분증을 잠깐 보여주다" }],
            vocabulary: [{ word: "deactivate", meaning: "비활성화시키다, 먹통이 되게 하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Sure, my name is Seungtaek Lim, and here is a photo of my passport on my phone.",
            translation: "네, 이름은 Seungtaek Lim이고요, 여기 휴대폰에 찍어둔 여권 사진이 있습니다.",
            expressions: [{ phrase: "a photo of my passport", meaning: "여권 사본 사진" }],
            vocabulary: [{ word: "confirm", meaning: "확인하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Thank you! I've re-encoded both of your key cards and put them in protective paper sleeves for you.",
            translation: "감사합니다! 카드키 두 장 모두 다시 인코딩(재발급)해서 보호용 종이 케이스에 넣어 드렸습니다.",
            expressions: [{ phrase: "re-encoded both of your key cards", meaning: "카드키 두 장을 모두 다시 사용 가능하도록 재설정(인코딩)했다" }],
            vocabulary: [{ word: "paper sleeve", meaning: "카드키를 넣는 얇은 종이 봉투(케이스)" }]
          }
        ]
      },
      {
        id: 7,
        title: "수건, 생수, 어메니티 추가 요청하기",
        lines: [
          {
            role: "하우스키핑 직원", side: "left",
            text: "Housekeeping! Good evening, Mr. Lim. How can I help you?",
            translation: "하우스키핑(객실 관리부)입니다! 안녕하세요, 임 고객님. 어떻게 도와드릴까요?",
            expressions: [{ phrase: "Housekeeping!", meaning: "객실 관리/청소 담당입니다!" }],
            vocabulary: [{ word: "housekeeping", meaning: "호텔 객실 청소 및 비품 관리 부서" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Hi! Could we get two extra bath towels and two hand towels sent up to Room 804, please?",
            translation: "안녕하세요! 804호로 큰 목욕 수건 두 장과 세면용 작은 수건 두 장을 추가로 가져다주실 수 있나요?",
            expressions: [{ phrase: "bath towels and hand towels", meaning: "샤워 후 몸을 닦는 큰 타월(bath towel)과 손·얼굴을 닦는 일반 수건(hand towel)" }, { phrase: "sent up to Room 804", meaning: "804호 객실로 올려 보내주다" }],
            vocabulary: [{ word: "extra", meaning: "추가의, 여분의" }]
          },
          {
            role: "하우스키핑 직원", side: "left",
            text: "Certainly! Two bath towels and two hand towels. Do you need any other bathroom amenities?",
            translation: "물론이죠! 큰 수건 두 장과 작은 수건 두 장이요. 다른 욕실 어메니티(비품) 더 필요한 건 없으신가요?",
            expressions: [{ phrase: "bathroom amenities", meaning: "욕실 비품 (샴푸, 바디워시, 칫솔 등)" }],
            vocabulary: [{ word: "amenity (amenities)", meaning: "호텔 객실 비품, 편의용품" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Could we also get one more bottle of body wash and three complimentary bottles of drinking water?",
            translation: "바디워시 한 통이랑 무료로 제공되는 생수 세 병도 더 받을 수 있을까요?",
            expressions: [{ phrase: "complimentary bottles of drinking water", meaning: "무료로 제공되는 식수(생수)" }],
            vocabulary: [{ word: "body wash", meaning: "바디워시 (shower gel)" }]
          },
          {
            role: "하우스키핑 직원", side: "left",
            text: "Yes, we provide up to four bottles of water per day for free! Would you like an extra pillow or blanket for your child as well?",
            translation: "네, 생수는 하루 최대 네 병까지 무료로 제공해 드립니다! 아이가 쓸 추가 베개나 담요도 필요하신가요?",
            expressions: [{ phrase: "an extra pillow or blanket", meaning: "추가 베개나 담요" }],
            vocabulary: [{ word: "pillow", meaning: "베개" }, { word: "blanket", meaning: "담요, 이불" }]
          },
          {
            role: "투숙객", side: "right",
            text: "One soft pillow would be great! Thank you so much.",
            translation: "낮고 부드러운 베개 하나 주시면 정말 좋겠네요! 대단히 감사합니다.",
            expressions: [{ phrase: "One soft pillow would be great!", meaning: "부드러운 베개 하나 주시면 아주 좋겠습니다!" }],
            vocabulary: [{ word: "soft", meaning: "부드러운, 푹신한" }]
          }
        ]
      },
      {
        id: 8,
        title: "에어컨/난방 작동 문제로 점검 요청",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello, I'm calling from Room 804. I think something is wrong with the air conditioner in our room.",
            translation: "안녕하세요, 804호에서 전화드렸습니다. 저희 방 에어컨에 뭔가 문제가 있는 것 같아요.",
            expressions: [{ phrase: "something is wrong with ~", meaning: "~에 뭔가 고장(이상)이 있다" }],
            vocabulary: [{ word: "air conditioner", meaning: "에어컨 (AC)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "I'm sorry to hear that! Is the unit not turning on, or is it not blowing cool air?",
            translation: "저런, 불편을 드려 죄송합니다! 전원이 안 켜지나요, 아니면 찬 바람이 나오지 않나요?",
            expressions: [{ phrase: "not blowing cool air", meaning: "시원한 바람이 나오지 않는다" }],
            vocabulary: [{ word: "unit", meaning: "(에어컨·난방기 등의) 장치, 기기" }, { word: "turn on", meaning: "전원이 켜지다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "The thermostat is set to 21 degrees Celsius, but only lukewarm air is coming out and the fan is making a rattling noise.",
            translation: "온도조절기를 섭씨 21도로 맞춰 두었는데 미지근한 바람만 나오고 팬에서 덜덜거리는 소음이 나요.",
            expressions: [{ phrase: "The thermostat is set to ~", meaning: "실내 온도조절기가 ~도로 설정되어 있다" }, { phrase: "making a rattling noise", meaning: "덜거덕거리는(덜덜거리는) 기계 소음을 내다" }],
            vocabulary: [{ word: "thermostat", meaning: "벽에 붙은 실내 온도조절기" }, { word: "lukewarm", meaning: "미지근한" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "I apologize for the trouble! I'll send our maintenance engineer up to your room right now to check the filter and cooling valve.",
            translation: "불편을 끼쳐 죄송합니다! 지금 바로 시설팀 엔지니어를 객실로 보내 필터와 냉방 밸브를 점검하도록 하겠습니다.",
            expressions: [{ phrase: "send our maintenance engineer up", meaning: "호텔 시설 보수 기사(엔지니어)를 올려 보내다" }],
            vocabulary: [{ word: "maintenance", meaning: "시설 정비, 유지·보수" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Thank you. If it can't be fixed quickly, would it be possible to switch rooms?",
            translation: "감사합니다. 만약 금방 고쳐지지 않는다면 다른 방으로 객실을 변경할 수 있을까요?",
            expressions: [{ phrase: "would it be possible to switch rooms?", meaning: "방을 바꾸는(객실을 교체하는) 것이 가능할까요?" }],
            vocabulary: [{ word: "fix", meaning: "수리하다, 고치다" }, { word: "switch rooms", meaning: "방을 바꾸다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Absolutely! If the engineer can't resolve it within 10 minutes, we will move you to a new room on the 10th floor immediately.",
            translation: "물론입니다! 엔지니어가 10분 내로 해결하지 못하면 즉시 10층에 있는 새 객실로 옮겨 드리겠습니다.",
            expressions: [{ phrase: "resolve it within 10 minutes", meaning: "10분 이내에 문제를 해결하다" }],
            vocabulary: [{ word: "resolve", meaning: "해결하다" }, { word: "immediately", meaning: "즉시, 곧바로" }]
          }
        ]
      },
      {
        id: 9,
        title: "조용한 고층 객실로 방 변경 요청하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Excuse me, we just checked into Room 302, and we haven't unpacked our bags yet. Could I ask for a room change?",
            translation: "실례합니다, 방금 302호에 체크인했고 아직 짐은 풀지 않았는데요. 혹시 객실 변경을 요청드려도 될까요?",
            expressions: [{ phrase: "we haven't unpacked our bags yet", meaning: "아직 가방(짐)을 풀지 않고 손을 대지 않은 상태다 (방 변경 시 매우 유리한 조건)" }],
            vocabulary: [{ word: "unpack", meaning: "(가방에서) 짐을 풀다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Of course! Is there an issue with Room 302?",
            translation: "물론이죠! 302호 객실에 어떤 불편한 점이 있으신가요?",
            expressions: [{ phrase: "Is there an issue with ~?", meaning: "~에 어떤 문제(불편한 점)가 있나요?" }],
            vocabulary: [{ word: "issue", meaning: "문제, 불편 사항" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Because it's on the 3rd floor facing the main street, the traffic noise is quite loud, and it's right next to the elevator.",
            translation: "큰길 쪽을 향한 3층이다 보니 차량 소음이 꽤 크고, 객실이 엘리베이터 바로 옆이더라고요.",
            expressions: [{ phrase: "facing the main street", meaning: "대로변(큰길)을 마주 보고 있는" }, { phrase: "right next to the elevator", meaning: "엘리베이터 바로 옆에 있는" }],
            vocabulary: [{ word: "traffic noise", meaning: "도로 교통 소음" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "I completely understand! Let me look for a quieter room on a higher floor away from the elevator.",
            translation: "충분히 이해합니다! 엘리베이터에서 떨어져 있고 더 높은 층에 있는 조용한 객실을 찾아보겠습니다.",
            expressions: [{ phrase: "on a higher floor away from the elevator", meaning: "엘리베이터에서 멀리 떨어진 고층에 있는" }],
            vocabulary: [{ word: "away from ~", meaning: "~로부터 멀리 떨어진" }]
          },
          {
            role: "투숙객", side: "right",
            text: "That would be amazing! Our child is a light sleeper, so a quiet room really helps.",
            translation: "그러면 정말 좋겠어요! 저희 아이가 잠귀가 밝은 편이라 조용한 방이 큰 도움이 되거든요.",
            expressions: [{ phrase: "a light sleeper", meaning: "잠귀가 밝아 작은 소리에도 쉽게 깨는 사람 (반대는 a heavy sleeper)" }],
            vocabulary: [{ word: "quiet", meaning: "조용한" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "I have Room 1108 available! It's on the 11th floor facing the quiet courtyard. Here are your new key cards!",
            translation: "1108호가 비어 있네요! 조용한 안뜰(중정) 쪽을 향한 11층 객실입니다. 여기 새 카드키 드리겠습니다!",
            expressions: [{ phrase: "facing the quiet courtyard", meaning: "조용한 호텔 안뜰(중정) 방향을 향한" }],
            vocabulary: [{ word: "courtyard", meaning: "건물 안쪽 정원, 중정(안뜰)" }]
          }
        ]
      },
      {
        id: 10,
        title: "룸서비스 주문 및 배달 시간 확인",
        lines: [
          {
            role: "룸서비스 직원", side: "left",
            text: "In-Room Dining, good evening! How may I take your order?",
            translation: "인룸 다이닝(룸서비스)입니다, 안녕하세요! 어떤 메뉴를 주문하시겠습니까?",
            expressions: [{ phrase: "In-Room Dining", meaning: "룸서비스 (호텔에서 룸서비스를 격식 있게 부르는 명칭)" }],
            vocabulary: [{ word: "take your order", meaning: "주문을 받다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Hi, I'm calling from Room 1108. Could we order a club sandwich with French fries and a kids' spaghetti bolognese?",
            translation: "안녕하세요, 1108호입니다. 감자튀김이 나오는 클럽 샌드위치 하나와 어린이용 볼로네제 스파게티 하나를 주문할 수 있을까요?",
            expressions: [{ phrase: "club sandwich with French fries", meaning: "감자튀김이 곁들여 나오는 클럽 샌드위치" }],
            vocabulary: [{ word: "spaghetti bolognese", meaning: "미트소스(볼로네제) 스파게티" }]
          },
          {
            role: "룸서비스 직원", side: "left",
            text: "Certainly! Would you like white bread or whole wheat bread for the club sandwich?",
            translation: "물론입니다! 클럽 샌드위치 빵은 일반 식빵으로 드릴까요, 통밀빵으로 드릴까요?",
            expressions: [{ phrase: "white bread or whole wheat bread", meaning: "흰 식빵 또는 통밀 식빵" }],
            vocabulary: [{ word: "whole wheat", meaning: "통밀" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Toasted white bread, please. And could we get ketchup and mayonnaise on the side? How long will delivery take?",
            translation: "구운 흰 식빵으로 주세요. 그리고 케첩과 마요네즈를 따로 챙겨 주실 수 있나요? 배달은 얼마나 걸릴까요?",
            expressions: [{ phrase: "How long will delivery take?", meaning: "음식이 객실로 배달되는 데 얼마나 걸릴까요?" }],
            vocabulary: [{ word: "toasted", meaning: "구운 (토스트한)" }, { word: "delivery", meaning: "배달" }]
          },
          {
            role: "룸서비스 직원", side: "left",
            text: "It will take about 30 minutes. The total including the 15% room service charge is $44.00. Shall I charge it to your room?",
            translation: "약 30분 정도 소요됩니다. 15% 룸서비스 봉사료를 포함한 총액은 44달러인데, 객실 후불(룸차지)로 달아 둘까요?",
            expressions: [{ phrase: "Shall I charge it to your room?", meaning: "비용을 객실 요금에 합산해 달아 둘까요(룸차지로 할까요)?" }],
            vocabulary: [{ word: "charge to your room", meaning: "객실 앞으로 달아 두다 (체크아웃 시 일괄 정산)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Yes, please charge it to Room 1108. Thank you!",
            translation: "네, 1108호 객실 앞으로 달아 주세요. 감사합니다!",
            expressions: [{ phrase: "charge it to Room ~", meaning: "~호 객실 비용으로 청구하다" }],
            vocabulary: [{ word: "including", meaning: "~을 포함하여" }]
          }
        ]
      },
      {
        id: 11,
        title: "세탁 서비스 및 다리미 대여 문의",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello, I'd like to iron a wrinkled shirt. Is there an iron and ironing board in the room?",
            translation: "안녕하세요, 구겨진 셔츠를 다리고 싶은데요. 객실 안에 다리미와 다리미판이 있나요?",
            expressions: [{ phrase: "an iron and ironing board", meaning: "다리미와 다리미판" }],
            vocabulary: [{ word: "wrinkled", meaning: "구겨진, 주름이 간" }, { word: "iron", meaning: "다리미, 다림질하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "For safety reasons, we don't keep irons in every room, but we can send a steam iron and board up to your room for free!",
            translation: "안전상의 이유로 모든 객실에 비치해 두진 않지만, 스팀다리미와 다리미판을 객실로 무료 대여해 올려 보내드릴 수 있습니다!",
            expressions: [{ phrase: "send a steam iron and board up", meaning: "스팀다리미와 다리미판을 객실로 올려 보내다" }],
            vocabulary: [{ word: "for safety reasons", meaning: "안전상의 이유로" }]
          },
          {
            role: "투숙객", side: "right",
            text: "That would be great! Also, does the hotel have a self-service coin laundry room for guests?",
            translation: "그렇게 해 주시면 좋겠네요! 그리고 혹시 투숙객이 직접 이용할 수 있는 셀프 코인 세탁실도 호텔 내에 있나요?",
            expressions: [{ phrase: "self-service coin laundry room", meaning: "투숙객용 셀프 코인 세탁실 (laundromat)" }],
            vocabulary: [{ word: "laundry", meaning: "세탁, 세탁물" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Yes! Our guest laundry room with washers and dryers is on the basement B1 level, open 24 hours.",
            translation: "네! 세탁기와 건조기가 구비된 투숙객 전용 세탁실이 지하 1층(B1)에 있으며 24시간 운영됩니다.",
            expressions: [{ phrase: "washers and dryers", meaning: "세탁기와 건조기" }],
            vocabulary: [{ word: "basement", meaning: "지하층" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Do the machines take coins or credit cards? And where can I get laundry detergent?",
            translation: "세탁기는 동전을 넣어야 하나요, 아니면 카드 결제가 되나요? 그리고 세탁 세제는 어디서 구할 수 있나요?",
            expressions: [{ phrase: "laundry detergent", meaning: "세탁 세제" }],
            vocabulary: [{ word: "detergent", meaning: "세제" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "You can tap your credit card right on the washer, and single-use detergent pods are sold in the vending machine next to it!",
            translation: "세탁기 단말기에 바로 신용카드를 태그하실 수 있고, 1회용 캡슐 세제는 바로 옆 자판기에서 판매하고 있습니다!",
            expressions: [{ phrase: "single-use detergent pods", meaning: "1회용 캡슐 세탁 세제" }],
            vocabulary: [{ word: "vending machine", meaning: "자동판매기 (자판기)" }]
          }
        ]
      },
      {
        id: 12,
        title: "수영장 및 피트니스 센터 이용 문의",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hi! We want to take our child to the hotel swimming pool today. Where is the pool, and what are the hours?",
            translation: "안녕하세요! 오늘 아이를 데리고 호텔 수영장에 가려고 하는데요. 수영장 위치와 운영 시간이 어떻게 되나요?",
            expressions: [{ phrase: "what are the hours?", meaning: "운영(영업) 시간이 어떻게 되나요?" }],
            vocabulary: [{ word: "swimming pool", meaning: "수영장" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "The heated indoor pool and fitness center are on the 4th floor, open from 6:00 AM to 10:00 PM.",
            translation: "실내 온수 수영장과 피트니스 센터는 4층에 있으며, 오전 6시부터 밤 10시까지 운영합니다.",
            expressions: [{ phrase: "heated indoor pool", meaning: "물이 따뜻하게 데워진 실내 온수 풀" }],
            vocabulary: [{ word: "heated", meaning: "온수가 나오는, 난방이 되는" }, { word: "indoor", meaning: "실내의 (야외는 outdoor)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Is there a shallow kids' pool, and are kids' life jackets or floaties provided?",
            translation: "수심이 얕은 유아용 풀장이 따로 있나요? 그리고 어린이용 구명조끼나 튜브도 비치되어 있나요?",
            expressions: [{ phrase: "shallow kids' pool", meaning: "수심이 얕은 어린이용 풀 (wading pool / kiddie pool)" }, { phrase: "life jackets or floaties", meaning: "구명조끼나 물놀이용 암링·튜브" }],
            vocabulary: [{ word: "shallow", meaning: "(수심이) 얕은 (깊은 것은 deep)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Yes, there is a warm 0.6-meter wading pool for kids, and we provide free life jackets in all sizes at the pool desk!",
            translation: "네, 수심 0.6미터의 따뜻한 유아 풀이 있고, 수영장 데스크에서 사이즈별 어린이 구명조끼를 무료로 대여해 드립니다!",
            expressions: [{ phrase: "in all sizes", meaning: "모든 사이즈별로 구비된" }],
            vocabulary: [{ word: "wading pool", meaning: "어린이용 얕은 물놀이 풀" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Do we need to bring towels from our room, or do they have towels at the pool?",
            translation: "객실에서 수건을 챙겨 내려가야 하나요, 아니면 수영장에 수건이 비치되어 있나요?",
            expressions: [{ phrase: "bring towels from our room", meaning: "객실에 있는 수건을 직접 가지고 내려가다" }],
            vocabulary: [{ word: "provide", meaning: "제공하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Plenty of fresh pool towels and lockers are provided at the pool entrance—just bring your room key card to enter!",
            translation: "수영장 입구에 깨끗한 수영장 전용 타월과 락커가 넉넉히 준비되어 있으니 출입용 객실 카드키만 챙겨 가시면 됩니다!",
            expressions: [{ phrase: "plenty of fresh pool towels", meaning: "충분한 양의 깨끗한 수영장용 수건" }],
            vocabulary: [{ word: "locker", meaning: "물품 보관함, 사물함" }]
          }
        ]
      },
      {
        id: 13,
        title: "모닝콜(Wake-up call) 요청하기",
        lines: [
          {
            role: "프런트 직원", side: "left",
            text: "Front desk! How may I help you, Mr. Lim?",
            translation: "프런트 데스크입니다! 임 고객님, 무엇을 도와드릴까요?",
            expressions: [{ phrase: "Front desk!", meaning: "프런트 데스크(안내 데스크)입니다!" }],
            vocabulary: [{ word: "front desk", meaning: "호텔 프런트 (reception)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Hi, I'm in Room 1108. We have an early morning flight tomorrow, so could I set up a wake-up call?",
            translation: "안녕하세요, 1108호입니다. 내일 이른 아침 비행기를 타야 해서 모닝콜을 좀 신청할 수 있을까요?",
            expressions: [{ phrase: "set up a wake-up call", meaning: "모닝콜을 신청(설정)하다 (콩글리시인 morning call 대신 반드시 wake-up call 사용!)" }],
            vocabulary: [{ word: "wake-up call", meaning: "모닝콜" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Certainly! What time would you like us to give you a wake-up call tomorrow morning?",
            translation: "물론이죠! 내일 아침 몇 시에 모닝콜 전화를 드릴까요?",
            expressions: [{ phrase: "What time would you like us to ~?", meaning: "저희가 몇 시에 ~해 드릴까요?" }],
            vocabulary: [{ word: "tomorrow morning", meaning: "내일 아침" }]
          },
          {
            role: "투숙객", side: "right",
            text: "At 5:30 AM, please. And could we get a second backup call at 5:40 AM just in case?",
            translation: "오전 5시 30분에 부탁드려요. 그리고 혹시 모르니 5시 40분에 확인 전화(백업 콜)를 한 번 더 주실 수 있나요?",
            expressions: [{ phrase: "a second backup call ~ just in case", meaning: "만약을 대비한 두 번째 추가 확인 모닝콜" }],
            vocabulary: [{ word: "backup", meaning: "예비의, 2차 확인용의" }, { word: "just in case", meaning: "만약을 대비해서" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "No problem! I've scheduled two wake-up calls for Room 1108—one at 5:30 AM and another at 5:40 AM.",
            translation: "문제없습니다! 1108호 앞으로 오전 5시 30분과 5시 40분, 총 두 번의 모닝콜을 예약해 두었습니다.",
            expressions: [{ phrase: "I've scheduled two wake-up calls", meaning: "모닝콜 두 건을 시스템에 예약 등록했다" }],
            vocabulary: [{ word: "schedule", meaning: "시간을 예약하다, 일정을 잡다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Thank you so much! Now I can sleep without worrying about oversleeping.",
            translation: "정말 감사합니다! 이제 늦잠 잘 걱정 없이 푹 잘 수 있겠네요.",
            expressions: [{ phrase: "without worrying about oversleeping", meaning: "늦잠을 잘 걱정 없이" }],
            vocabulary: [{ word: "oversleep", meaning: "늦잠을 자다" }]
          }
        ]
      },
      {
        id: 14,
        title: "주변 맛집 추천 및 예약 대행 부탁",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello! Could you recommend a good local restaurant within walking distance where we can have dinner with our child?",
            translation: "안녕하세요! 아이와 함께 저녁 식사를 할 만한, 도보 거리 내의 괜찮은 현지 맛집을 추천해 주실 수 있나요?",
            expressions: [{ phrase: "within walking distance", meaning: "걸어서 갈 수 있는 거리(도보 거리) 내에 있는" }],
            vocabulary: [{ word: "local restaurant", meaning: "현지 식당" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "Certainly! What kind of cuisine are you in the mood for—seafood, steak, or traditional local dishes?",
            translation: "물론이죠! 해산물, 스테이크, 혹은 전통 현지 요리 중에서 어떤 종류의 음식이 끌리시나요?",
            expressions: [{ phrase: "What kind of cuisine are you in the mood for?", meaning: "오늘 어떤 종류의 요리가 드시고 싶으신가요?" }],
            vocabulary: [{ word: "cuisine", meaning: "(특정 국가·스타일의) 요리" }, { word: "in the mood for ~", meaning: "~이 먹고 싶은 기분인, ~이 끌리는" }]
          },
          {
            role: "투숙객", side: "right",
            text: "We'd love fresh local seafood in a casual, family-friendly atmosphere.",
            translation: "편안하고 가족 친화적인 분위기에서 신선한 현지 해산물 요리를 먹고 싶어요.",
            expressions: [{ phrase: "casual, family-friendly atmosphere", meaning: "격식 없이 편안하고 아이 동반 가족이 가기 좋은 분위기" }],
            vocabulary: [{ word: "atmosphere", meaning: "분위기" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "Then I highly recommend 'Harbor Grill', just a 5-minute walk down the street! It's very popular with locals and families.",
            translation: "그렇다면 이 길을 따라 도보 5분 거리에 있는 '하버 그릴'을 강력 추천합니다! 현지인과 가족 단위 손님들에게 인기가 아주 많아요.",
            expressions: [{ phrase: "popular with locals and families", meaning: "현지인들과 가족 손님들에게 인기가 많은" }],
            vocabulary: [{ word: "locals", meaning: "현지 주민들" }]
          },
          {
            role: "투숙객", side: "right",
            text: "That sounds perfect! Could you possibly call them and make a reservation for three at 6:00 PM tonight?",
            translation: "완벽하네요! 혹시 그 식당에 전화해서 오늘 저녁 6시로 3명 예약을 대신 해 주실 수 있을까요?",
            expressions: [{ phrase: "call them and make a reservation for ~", meaning: "식당에 대신 전화해 ~명 예약을 잡아주다 (호텔 컨시어지의 대표 무료 서비스)" }],
            vocabulary: [{ word: "concierge", meaning: "호텔에서 관광·식당 예약 등을 돕는 전담 직원(컨시어지)" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "I just called them and booked a table for three at 6:00 PM under Mr. Lim! Here is a map with the route highlighted.",
            translation: "방금 전화해서 임 고객님 성함으로 저녁 6시 3명 테이블 예약을 완료했습니다! 여기 가는 길을 형광펜으로 표시한 약도입니다.",
            expressions: [{ phrase: "with the route highlighted", meaning: "이동 경로가 형광펜으로 표시된" }],
            vocabulary: [{ word: "route", meaning: "가는 길, 경로" }, { word: "highlight", meaning: "강조 표시하다" }]
          }
        ]
      },
      {
        id: 15,
        title: "객실 내 금고 잠김 해제 요청하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello, I'm calling from Room 1108. I accidentally locked the in-room safe, and now it won't open with my code.",
            translation: "안녕하세요, 1108호입니다. 객실 금고가 잠겼는데 제가 설정한 비밀번호를 눌러도 열리지 않아요.",
            expressions: [{ phrase: "in-room safe", meaning: "객실 내 귀중품 보관 금고 (safety deposit box)" }, { phrase: "it won't open with my code", meaning: "비밀번호를 눌러도 열리지 않는다" }],
            vocabulary: [{ word: "safe", meaning: "금고" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Does the screen on the safe say 'ERROR' or 'HOLD 5 MIN'?",
            translation: "금고 액정 화면에 'ERROR'나 'HOLD 5 MIN(5분 대기)'이라고 표시되나요?",
            expressions: [{ phrase: "Does the screen ~ say 'ERROR'?", meaning: "화면에 'ERROR'라는 글자가 뜨나요?" }],
            vocabulary: [{ word: "screen", meaning: "액정 화면, 표시창" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Yes, I think I pressed a wrong digit earlier, and after three tries it went into 'HOLD' mode. Our passports are inside!",
            translation: "네, 아까 숫자를 하나 잘못 누른 것 같은데 세 번 틀렸더니 잠금(HOLD) 모드로 바뀌었어요. 안에 저희 여권이 들어 있거든요!",
            expressions: [{ phrase: "pressed a wrong digit", meaning: "숫자 버튼을 잘못 눌렀다" }, { phrase: "after three tries", meaning: "세 번 시도한 끝에" }],
            vocabulary: [{ word: "digit", meaning: "(0~9까지의) 숫자 한 자리" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Don't worry at all! Our hotel security officer can come up with a master override device and unlock it in seconds.",
            translation: "전혀 걱정하지 마세요! 호텔 보안 담당 직원이 마스터 해제 장치를 가지고 올라가서 몇 초 만에 열어 드릴 수 있습니다.",
            expressions: [{ phrase: "master override device", meaning: "잠긴 금고를 강제로 해제하는 호텔 마스터키 장치" }],
            vocabulary: [{ word: "security officer", meaning: "보안 요원, 안전 담당 직원" }, { word: "in seconds", meaning: "몇 초 만에, 즉시" }]
          },
          {
            role: "투숙객", side: "right",
            text: "What a relief! How soon can the officer come up to our room?",
            translation: "다행이네요! 직원분이 얼마나 빨리 객실로 올라오실 수 있을까요?",
            expressions: [{ phrase: "How soon can ~ come up?", meaning: "얼마나 빨리 올라오실 수 있나요?" }],
            vocabulary: [{ word: "relief", meaning: "안도, 다행" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "He's on his way right now and will be at your door in 5 minutes! Note that the registered guest must be present in the room.",
            translation: "지금 바로 출발해서 5분 내로 객실 문 앞에 도착할 겁니다! 보안 규정상 등록된 투숙객 본인이 객실 안에 계셔야 합니다.",
            expressions: [{ phrase: "He's on his way right now", meaning: "지금 바로 가는 중입니다" }, { phrase: "must be present in the room", meaning: "반드시 객실 내에 입회(동석)해 있어야 한다" }],
            vocabulary: [{ word: "present", meaning: "현장에 있는, 참석한" }]
          }
        ]
      },
      {
        id: 16,
        title: "레이트 체크아웃 비용 및 가능 여부",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hi, I'm checking out of Room 1108 tomorrow. What is the regular check-out time?",
            translation: "안녕하세요, 내일 1108호에서 체크아웃하는데요. 정규 체크아웃 시간이 몇 시인가요?",
            expressions: [{ phrase: "What is the regular check-out time?", meaning: "정규 체크아웃 시간은 몇 시인가요?" }],
            vocabulary: [{ word: "check out of ~", meaning: "~에서 체크아웃하다(퇴실하다)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Standard check-out time is 11:00 AM, Mr. Lim.",
            translation: "정규 체크아웃 시간은 오전 11시입니다, 임 고객님.",
            expressions: [{ phrase: "Standard check-out time", meaning: "기본(정규) 퇴실 시간" }],
            vocabulary: [{ word: "standard", meaning: "표준의, 기본의" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Our flight is in the evening, so would it be possible to request a late check-out until 1:00 PM or 2:00 PM?",
            translation: "저희 비행기가 저녁 시간대라서 그러는데, 오후 1시나 2시까지 레이트 체크아웃(지연 퇴실)을 신청할 수 있을까요?",
            expressions: [{ phrase: "request a late check-out until ~", meaning: "~시까지 레이트 체크아웃을 요청하다" }],
            vocabulary: [{ word: "late check-out", meaning: "정규 퇴실 시간 이후에 늦게 체크아웃하는 것" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Let me check tomorrow's occupancy... We can extend your check-out until 1:00 PM complimentary! Staying until 3:00 PM would be $50.",
            translation: "내일 객실 예약률을 확인해 보겠습니다... 오후 1시까지는 무료로 체크아웃 시간을 연장해 드릴 수 있습니다! 3시까지 이용 시에는 50달러가 추가됩니다.",
            expressions: [{ phrase: "extend your check-out until 1:00 PM complimentary", meaning: "오후 1시까지 무료로 체크아웃 시간을 연장해 주다" }],
            vocabulary: [{ word: "occupancy", meaning: "객실 점유율(예약률)" }, { word: "extend", meaning: "(시간·기한을) 연장하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "1:00 PM for free is more than enough! Do I need to update my room key cards so they don't expire at 11:00 AM?",
            translation: "오후 1시까지 무료 연장만으로도 충분합니다! 오전 11시에 카드키가 만료되지 않게 카드키를 재설정해야 하나요?",
            expressions: [{ phrase: "so they don't expire at 11:00 AM", meaning: "오전 11시 정규 퇴실 시간에 카드키가 자동 정지되지 않도록" }],
            vocabulary: [{ word: "expire", meaning: "(유효기간·시간이) 만료되다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Good catch! Hand me your key cards and I'll extend the expiration time to 1:00 PM right now.",
            translation: "예리하시네요! 카드키를 저에게 주시면 지금 바로 만료 시간을 오후 1시까지로 연장해 드리겠습니다.",
            expressions: [{ phrase: "Good catch!", meaning: "중요한 포인트를 잘 짚어내셨네요!" }],
            vocabulary: [{ word: "expiration time", meaning: "만료 시각" }]
          }
        ]
      },
      {
        id: 17,
        title: "체크아웃 및 미니바·보증금 정산",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Good afternoon! We're ready to check out of Room 1108. Here are our two key cards.",
            translation: "안녕하세요! 1108호 체크아웃하려고 합니다. 여기 카드키 두 장 있습니다.",
            expressions: [{ phrase: "We're ready to check out of ~", meaning: "~호에서 체크아웃할 준비가 되었습니다" }],
            vocabulary: [{ word: "check out", meaning: "체크아웃하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Thank you, Mr. Lim! Did you enjoy your stay with us? And did you use anything from the minibar last night?",
            translation: "감사합니다, 임 고객님! 머무시는 동안 편안하셨나요? 그리고 어젯밤 미니바(객실 유료 음료·스낵)에서 드신 것이 있으신가요?",
            expressions: [{ phrase: "Did you enjoy your stay with us?", meaning: "저희 호텔 투숙이 즐거우셨나요? (체크아웃 시 직원의 단골 인사)" }],
            vocabulary: [{ word: "minibar", meaning: "객실 냉장고 안의 유료 음료 및 스낵 코너" }]
          },
          {
            role: "투숙객", side: "right",
            text: "We had a wonderful stay! We didn't touch the minibar, and our only extra charge was the room service dinner on Tuesday.",
            translation: "아주 편안하게 잘 지냈습니다! 미니바는 전혀 건드리지 않았고, 추가 비용은 화요일 저녁에 시킨 룸서비스 한 건뿐입니다.",
            expressions: [{ phrase: "We didn't touch the minibar", meaning: "미니바 물품은 전혀 이용하지(건드리지) 않았다" }],
            vocabulary: [{ word: "extra charge", meaning: "추가 요금" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Here is your itemized folio to review. Your room rate was prepaid online, so your only balance is $44.00 for In-Room Dining.",
            translation: "확인하실 세부 정산 내역서(폴리오) 여기 있습니다. 객실료는 온라인으로 선결제하셔서, 결제하실 잔액은 룸서비스 비용 44달러뿐입니다.",
            expressions: [{ phrase: "itemized folio", meaning: "투숙 기간 중 발생한 상세 내역서(호텔 정산서)" }, { phrase: "prepaid online", meaning: "온라인으로 이미 선결제된" }],
            vocabulary: [{ word: "folio", meaning: "호텔 객실 이용 명세서" }, { word: "balance", meaning: "결제할 잔액" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Everything looks accurate! Can you charge the $44.00 to the Visa card I put on file at check-in and release the rest of the deposit?",
            translation: "내역이 모두 정확하네요! 체크인할 때 등록해 둔 비자 카드로 44달러를 결제하고 나머지 보증금은 가승인 해제해 주실 수 있나요?",
            expressions: [{ phrase: "the Visa card I put on file at check-in", meaning: "체크인할 때 보증용으로 등록해 둔 비자 카드" }],
            vocabulary: [{ word: "on file", meaning: "(시스템에) 등록되어 있는, 보관된" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Done! The $44.00 has been charged, and the remaining deposit hold is released. Here is your final printed receipt!",
            translation: "처리 완료되었습니다! 44달러가 결제되었고 나머지 보증금 가승인은 해제되었습니다. 여기 최종 인쇄된 영수증입니다!",
            expressions: [{ phrase: "the remaining deposit hold is released", meaning: "남은 보증금 가승인이 취소(해제)되었다" }],
            vocabulary: [{ word: "remaining", meaning: "남아 있는, 잔여의" }]
          }
        ]
      },
      {
        id: 18,
        title: "체크아웃 후 공항 가기 전까지 짐 보관",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "We just checked out, but our flight isn't until 8:00 PM tonight. Could you hold our luggage until 4:30 PM?",
            translation: "방금 체크아웃했는데 비행기가 오늘 밤 8시여서요. 오후 4시 30분까지 저희 짐을 좀 보관해 주실 수 있을까요?",
            expressions: [{ phrase: "our flight isn't until 8:00 PM", meaning: "비행기 출발이 밤 8시가 되어서야 있다 (아직 시간이 많이 남았을 때)" }, { phrase: "hold our luggage until ~", meaning: "~시까지 짐을 맡아주다" }],
            vocabulary: [{ word: "hold", meaning: "보관하다, 맡아두다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Of course! Even after check-out, we're happy to store your bags for the rest of the day at no charge.",
            translation: "물론이죠! 체크아웃하신 후에도 당일 남은 시간 동안 무료로 기꺼이 짐을 보관해 드립니다.",
            expressions: [{ phrase: "for the rest of the day at no charge", meaning: "오늘 남은 하루 동안 무료로" }],
            vocabulary: [{ word: "at no charge", meaning: "무료로 (free of charge)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Thank you! Also, we bought a box of chocolates as souvenirs. Will the luggage storage room be cool enough so they don't melt?",
            translation: "감사합니다! 그리고 기념품으로 초콜릿 상자를 샀는데, 초콜릿이 녹지 않을 만큼 짐 보관실이 시원한가요?",
            expressions: [{ phrase: "so they don't melt", meaning: "(초콜릿 등이) 녹지 않도록" }],
            vocabulary: [{ word: "souvenir", meaning: "여행 기념품" }, { word: "melt", meaning: "녹다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Yes, our luggage room is fully air-conditioned at 20 degrees Celsius, so your chocolates will be completely fine!",
            translation: "네, 저희 수하물 보관실은 섭씨 20도로 24시간 냉방이 유지되어서 초콜릿이 전혀 녹지 않고 안전할 겁니다!",
            expressions: [{ phrase: "fully air-conditioned", meaning: "에어컨 냉방이 완벽하게 가동되는" }],
            vocabulary: [{ word: "luggage room", meaning: "수하물 보관실" }]
          },
          {
            role: "투숙객", side: "right",
            text: "That's great to hear! Can we also use the lobby restroom to change our clothes when we come back for our bags?",
            translation: "다행이네요! 이따 짐 찾으러 돌아왔을 때 공항 가기 전 로비 화장실에서 옷을 좀 갈아입어도 될까요?",
            expressions: [{ phrase: "change our clothes", meaning: "옷을 갈아입다" }],
            vocabulary: [{ word: "lobby restroom", meaning: "호텔 1층 로비 화장실" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "Certainly! Here is your claim tag for three bags. Have a great afternoon in the city!",
            translation: "물론입니다! 여기 가방 세 개에 대한 보관증 드리겠습니다. 시내에서 즐거운 오후 시간 보내세요!",
            expressions: [{ phrase: "claim tag for three bags", meaning: "가방 3개에 대한 수하물 보관 번호표" }],
            vocabulary: [{ word: "claim tag", meaning: "보관표, 수취 번호표" }]
          }
        ]
      },
      {
        id: 19,
        title: "호텔 공항 셔틀버스 예약하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Excuse me, does the hotel run an airport shuttle bus to the international terminal?",
            translation: "실례합니다, 호텔에서 국제선 터미널까지 운행하는 공항 셔틀버스가 있나요?",
            expressions: [{ phrase: "run an airport shuttle bus to ~", meaning: "~행 공항 셔틀버스를 운행하다" }],
            vocabulary: [{ word: "shuttle bus", meaning: "셔틀버스" }, { word: "international terminal", meaning: "국제선 터미널" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Yes, our hotel airport shuttle departs every hour on the hour! However, seats must be reserved in advance.",
            translation: "네, 저희 호텔 공항 셔틀버스는 매시 정각마다 출발합니다! 다만 좌석은 사전에 예약하셔야 해요.",
            expressions: [{ phrase: "every hour on the hour", meaning: "매시간 정각마다 (예: 1시 정각, 2시 정각, 3시 정각...)" }, { phrase: "reserved in advance", meaning: "사전에 미리 예약된" }],
            vocabulary: [{ word: "in advance", meaning: "미리, 사전에" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Do you have three seats available on the 4:00 PM shuttle today?",
            translation: "오늘 오후 4시 정각에 출발하는 셔틀버스에 3명 자리가 남아 있나요?",
            expressions: [{ phrase: "three seats available on the 4:00 PM shuttle", meaning: "오후 4시 셔틀버스에 남아 있는 좌석 3개" }],
            vocabulary: [{ word: "seat", meaning: "좌석, 자리" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Let me check... Yes, there are four seats left on the 4:00 PM bus! Is the shuttle free, or is there a fare?",
            translation: "확인해 보겠습니다... 네, 오후 4시 버스에 마침 네 자리가 남아 있네요! 셔틀 이용 안내를 도와드릴게요.",
            expressions: [{ phrase: "there are four seats left", meaning: "네 자리가 남아 있다" }],
            vocabulary: [{ word: "left", meaning: "남아 있는" }]
          },
          {
            role: "투숙객", side: "right",
            text: "How much does the shuttle cost per person, and where do we board?",
            translation: "셔틀버스 요금은 1인당 얼마인가요? 그리고 어디에서 탑승하면 되나요?",
            expressions: [{ phrase: "How much does ~ cost per person?", meaning: "1인당 요금이 얼마인가요?" }],
            vocabulary: [{ word: "per person", meaning: "1인당" }, { word: "board", meaning: "(버스·비행기에) 탑승하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "It's completely free for hotel guests! I've booked three seats for you—please wait outside the main lobby entrance at 3:50 PM.",
            translation: "호텔 투숙객분들께는 전액 무료입니다! 세 자리 예약해 두었으니 오후 3시 50분까지 정문 로비 출입구 밖에서 대기해 주세요.",
            expressions: [{ phrase: "completely free for hotel guests", meaning: "호텔 투숙객에게는 완전 무료인" }],
            vocabulary: [{ word: "main lobby entrance", meaning: "메인 로비 정문 출입구" }]
          }
        ]
      },
      {
        id: 20,
        title: "객실에 두고 온 분실물 확인 요청",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "Hello! We checked out of Room 1108 about an hour ago, and I just realized my child's favorite stuffed bunny was left on the bed!",
            translation: "안녕하세요! 약 1시간 전에 1108호에서 체크아웃했는데, 아이가 제일 아끼는 토끼 봉제인형을 침대 위에 두고 온 걸 방금 알았어요!",
            expressions: [{ phrase: "I just realized ~ was left on the bed", meaning: "~을 침대 위에 두고 나왔다는 사실을 방금 깨달았다" }],
            vocabulary: [{ word: "realize", meaning: "깨닫다, 알아차리다" }, { word: "stuffed bunny", meaning: "토끼 봉제인형 (stuffed animal / plush toy)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Oh no! Let me call the housekeeping supervisor on the 11th floor right away to check if they found it.",
            translation: "아이고! 지금 바로 11층 하우스키핑 담당 매니저에게 무전으로 연락해서 인형을 발견했는지 확인해 보겠습니다.",
            expressions: [{ phrase: "call the housekeeping supervisor", meaning: "객실 관리부 책임자(매니저)에게 연락하다" }],
            vocabulary: [{ word: "supervisor", meaning: "관리자, 감독관" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Thank you! It's a small white bunny doll, and I think it might be tucked under the duvet or pillows.",
            translation: "감사합니다! 작은 하얀색 토끼 인형인데, 아마 이불이나 베개 아래에 파묻혀 있을 수도 있어요.",
            expressions: [{ phrase: "tucked under the duvet or pillows", meaning: "이불(구스다운 덮개)이나 베개 밑에 끼어(파묻혀) 있는" }],
            vocabulary: [{ word: "duvet", meaning: "침대 위 두꺼운 오리털·거위털 이불 ([두베이]로 발음)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Good news! The housekeeper cleaning Room 1108 just found the white bunny between the pillows and is bringing it down to the lobby now!",
            translation: "다행입니다! 1108호를 청소하던 직원분이 방금 베개 사이에서 하얀 토끼 인형을 찾아서 지금 로비로 가지고 내려오는 중입니다!",
            expressions: [{ phrase: "bringing it down to the lobby now", meaning: "지금 로비로 그것을 가지고 내려오는 중이다" }],
            vocabulary: [{ word: "housekeeper", meaning: "객실 청소 담당 직원" }]
          },
          {
            role: "투숙객", side: "right",
            text: "Oh, thank goodness! We were only two blocks away, so we rushed back. You saved our trip!",
            translation: "와, 정말 다행이에요! 두 블록밖에 안 떨어진 곳이라 급히 뛰어 돌아왔거든요. 덕분에 여행을 망치지 않았어요!",
            expressions: [{ phrase: "You saved our trip!", meaning: "덕분에 저희 여행을 구하셨어요! (결정적인 도움을 받았을 때 쓰는 최고의 감사 표현)" }],
            vocabulary: [{ word: "rush back", meaning: "서둘러 돌아오다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "Here is your little bunny, safe and sound! Have a safe flight back home!",
            translation: "여기 토끼 인형이 무사히 돌아왔습니다! 조심히 안전하게 귀국하시길 바랍니다!",
            expressions: [{ phrase: "safe and sound", meaning: "아무 탈 없이 무사히, 온전한 상태로" }, { phrase: "Have a safe flight back home!", meaning: "집으로 돌아가시는 비행기 안전하게 잘 타세요!" }],
            vocabulary: [{ word: "safe flight", meaning: "안전한 비행" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 호텔 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "프런트에서 예약자 확인 및 체크인",
        lines: [
          {
            role: "프런트 직원", side: "left",
            text: "いらっしゃいませ。グランドホテルへようこそ。本日はご宿泊のチェックインでしょうか？",
            translation: "어서 오세요. 그랜드 호텔에 오신 것을 환영합니다. 오늘 숙박 체크인이신가요?",
            expressions: [{ phrase: "本日はご宿泊のチェックインでしょうか？", meaning: "오늘 숙박 체크인이십니까?" }],
            vocabulary: [{ word: "本日(ほんじつ)", meaning: "오늘, 금일" }, { word: "宿泊(しゅくはく)", meaning: "숙박" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、チェックインをお願いします。「イム・スンテク」の名前で予約しています。",
            translation: "네, 체크인 부탁합니다. '임승택'이라는 이름으로 예약했습니다.",
            expressions: [{ phrase: "「〜」の名前で予約しています", meaning: "'~'라는 이름으로 예약했습니다" }],
            vocabulary: [{ word: "名前(なまえ)", meaning: "이름" }, { word: "予約(よやく)する", meaning: "예약하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "イム様ですね。本日より3泊、デラックスファミリールームでご予約を承っております。ご宿泊者様全員のパスポートを拝見できますか？",
            translation: "임 고객님이시군요. 오늘부터 3박, 디럭스 패밀리룸으로 예약 확인되었습니다. 투숙객 전원의 여권을 보여주시겠어요?",
            expressions: [{ phrase: "本日より3泊", meaning: "오늘부터 3박 (2박 3일은 2泊3日(にはくみっか))" }, { phrase: "ご宿泊者様全員のパスポート", meaning: "투숙객 전원의 여권 (일본 호텔은 법령상 외국인 투숙객 전원의 여권을 확인함)" }],
            vocabulary: [{ word: "3泊(さんぱく)", meaning: "3박" }, { word: "承る(うけたまわる)", meaning: "(예약·주문을) 받다 (겸양어)" }, { word: "宿泊者(しゅくはくしゃ)", meaning: "투숙객, 숙박자" }, { word: "全員(ぜんいん)", meaning: "전원, 모두" }, { word: "拝見(はいけん)する", meaning: "보다 (겸양어)" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、こちらが家族3人分のパスポートです。宿泊代はネットで事前決済済みですよね？",
            translation: "네, 여기 가족 3명분의 여권입니다. 숙박비는 인터넷으로 사전 결제 완료된 상태가 맞죠?",
            expressions: [{ phrase: "ネットで事前決済済みですよね？", meaning: "온라인으로 이미 선결제(사전 결제)가 끝난 상태이죠?" }],
            vocabulary: [{ word: "家族(かぞく)", meaning: "가족" }, { word: "3人分(さんにんぶん)", meaning: "3명분" }, { word: "宿泊代(しゅくはくだい)", meaning: "숙박비, 객실 요금" }, { word: "事前決済済み(じぜんけっさいずみ)", meaning: "사전 결제 완료" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、お部屋代は決済済みですが、東京都の宿泊税として合計600円のみ現地でのお支払いとなります。",
            translation: "네, 객실 요금은 결제 완료되었으나 도쿄도 숙박세로 총 600엔만 현장에서 지불하셔야 합니다.",
            expressions: [{ phrase: "宿泊税として〜円のみ現地でのお支払い", meaning: "숙박세(도시세) 명목으로 ~엔만 현장 결제 (도쿄·오사카·교토·후쿠오카 등의 호텔 규정)" }],
            vocabulary: [{ word: "部屋代(へやだい)", meaning: "객실료, 방값" }, { word: "宿泊税(しゅくはくぜい)", meaning: "숙박세" }, { word: "合計(ごうけい)", meaning: "합계, 총액" }, { word: "現地(げんち)", meaning: "현장, 현지" }, { word: "支払い(しはらい)", meaning: "지불, 결제" }]
          },
          {
            role: "투숙객", side: "right",
            text: "分かりました。宿泊税はクレジットカードで払います。宿泊カードへのサインはここでいいですか？",
            translation: "알겠습니다. 숙박세는 신용카드로 결제할게요. 숙박 등록 카드 서명은 여기에 하면 되나요?",
            expressions: [{ phrase: "宿泊カードへのサインはここでいいですか？", meaning: "숙박 등록 카드 서명은 여기에 하면 되나요?" }],
            vocabulary: [{ word: "払う(はらう)", meaning: "지불하다" }, { word: "宿泊(しゅくはく)カード", meaning: "숙박 등록 카드" }]
          }
        ]
      },
      {
        id: 2,
        title: "얼리 체크인 가능 여부 문의하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "こんにちは。今日から予約しているイムですが、予定より早く着いてしまいまして、アーリーチェックインは可能でしょうか？",
            translation: "안녕하세요. 오늘부터 예약한 임이라고 하는데요, 예정보다 일찍 도착해서 혹시 얼리 체크인(조기 입실)이 가능할까요?",
            expressions: [{ phrase: "予定より早く着いてしまいまして", meaning: "예정보다 일찍 도착하게 되어서" }, { phrase: "アーリーチェックインは可能でしょうか？", meaning: "얼리 체크인이 가능할까요?" }],
            vocabulary: [{ word: "今日(きょう)", meaning: "오늘" }, { word: "予定(よてい)", meaning: "예정" }, { word: "早く(はやく)", meaning: "일찍, 빨리" }, { word: "着く(つく)", meaning: "도착하다" }, { word: "可能(かのう)", meaning: "가능" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご到着お疲れ様でございます。通常のチェックインは午後3時からとなっておりますが、ただいまお部屋の清掃状況を確認いたします。",
            translation: "오시느라 고생 많으셨습니다. 정규 체크인은 오후 3시부터입니다만, 지금 객실 청소 상태를 확인해 보겠습니다.",
            expressions: [{ phrase: "通常のチェックインは午後3時から", meaning: "일반(정규) 체크인은 오후 3시부터" }, { phrase: "お部屋の清掃状況を確認いたします", meaning: "객실 청소 상태를 확인하겠습니다" }],
            vocabulary: [{ word: "到着(とうちゃく)", meaning: "도착" }, { word: "通常(つうじょう)", meaning: "통상, 정규" }, { word: "午後3時(ごごさんじ)", meaning: "오후 3시" }, { word: "清掃状況(せいそうじょうきょう)", meaning: "청소 상태(진행 상황)" }, { word: "確認(かくにん)する", meaning: "확인하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ありがとうございます。子どもが少し疲れているので、もし入れる部屋があれば助かります。",
            translation: "감사합니다. 아이가 조금 피곤해해서 혹시 들어갈 수 있는 방이 있다면 큰 도움이 되겠습니다.",
            expressions: [{ phrase: "もし入れる部屋があれば助かります", meaning: "만약 입실할 수 있는 방이 있다면 큰 도움이 되겠습니다" }],
            vocabulary: [{ word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "疲れる(つかれる)", meaning: "피곤하다, 지치다" }, { word: "入れる(はいれる)", meaning: "들어갈 수 있다" }, { word: "部屋(へや)", meaning: "방, 객실" }, { word: "助かる(たすかる)", meaning: "도움이 되다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "お待たせいたしました！ちょうど6階の同じタイプのお部屋が清掃完了しておりますので、すぐにご案内可能です。",
            translation: "오래 기다리셨습니다! 마침 6층의 같은 등급 객실이 청소가 완료되어 지금 바로 안내해 드릴 수 있습니다.",
            expressions: [{ phrase: "清掃完了しておりますので", meaning: "객실 청소가 완료되어 있으므로" }],
            vocabulary: [{ word: "6階(ろっかい)", meaning: "6층" }, { word: "同じ(おなじ)", meaning: "같은, 동일한" }, { word: "清掃完了(せいそうかんりょう)", meaning: "청소 완료" }, { word: "案内(あんない)", meaning: "안내" }]
          },
          {
            role: "투숙객", side: "right",
            text: "本当ですか？早く入る場合、追加料金はかかりますか？",
            translation: "정말인가요? 일찍 들어가는 경우 추가 요금이 드나요?",
            expressions: [{ phrase: "追加料金はかかりますか？", meaning: "추가 요금이 발생하나요?" }],
            vocabulary: [{ word: "本当(ほんとう)", meaning: "정말" }, { word: "場合(ばあい)", meaning: "경우" }, { word: "追加料金(ついかりょうきん)", meaning: "추가 요금" }, { word: "かかる", meaning: "(비용·시간이) 들다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "いいえ、お部屋のご用意ができておりますので、追加料金なしでそのままお入りいただけますよ！",
            translation: "아니요, 마침 객실 준비가 되어 있어서 추가 요금 없이 그대로 입실하실 수 있습니다!",
            expressions: [{ phrase: "追加料金なしでそのままお入りいただけます", meaning: "추가 비용 없이 그대로 들어가실 수 있습니다" }],
            vocabulary: [{ word: "用意(ようい)", meaning: "준비" }, { word: "入る(はいる)", meaning: "들어가다, 입실하다" }]
          }
        ]
      },
      {
        id: 3,
        title: "체크인 전 캐리어 먼저 맡기기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、今日チェックインする予定なのですが、観光に行く前に荷物を預かっていただけますか？",
            translation: "실례합니다, 오늘 체크인할 예정인데요, 관광하러 가기 전에 짐을 좀 맡아주실 수 있나요?",
            expressions: [{ phrase: "観光に行く前に荷物を預かっていただけますか？", meaning: "관광하러 가기 전에 짐(수하물)을 보관해 주실 수 있나요?" }],
            vocabulary: [{ word: "今日(きょう)", meaning: "오늘" }, { word: "観光(かんこう)", meaning: "관광" }, { word: "前(まえ)に", meaning: "~하기 전에" }, { word: "荷物(にもつ)", meaning: "짐, 수하물" }, { word: "預かる(あずかる)", meaning: "맡다, 보관하다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "かしこまりました！ご宿泊のお客様のお荷物は無料でお預かりいたします。お荷物は全部でいくつございますか？",
            translation: "알겠습니다! 투숙객분들의 수하물은 무료로 보관해 드립니다. 짐은 전부 몇 개인가요?",
            expressions: [{ phrase: "お荷物は全部でいくつございますか？", meaning: "맡기실 짐은 모두 몇 개입니까?" }],
            vocabulary: [{ word: "無料(むりょう)", meaning: "무료" }, { word: "全部(ぜんぶ)で", meaning: "전부 합쳐서" }, { word: "いくつ", meaning: "몇 개" }]
          },
          {
            role: "투숙객", side: "right",
            text: "大きなスーツケースが2つと、折りたたみ式のベビーカーが1つで、合計3つです。",
            translation: "큰 캐리어 두 개와 접이식 유모차 하나 해서 총 세 개입니다.",
            expressions: [{ phrase: "大きなスーツケースが2つ", meaning: "큰 여행 가방(캐리어)이 2개" }],
            vocabulary: [{ word: "大きな(おおきな)", meaning: "큰" }, { word: "2つ(ふたつ)", meaning: "두 개" }, { word: "折りたたみ式(おりたたみしき)", meaning: "접이식" }, { word: "合計(ごうけい)", meaning: "합계, 총" }, { word: "3つ(みっつ)", meaning: "세 개" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "承知いたしました。お荷物の中に、壊れやすいものや貴重品、パスポートは入っておりませんか？",
            translation: "알겠습니다. 가방 안에 깨지기 쉬운 물건이나 귀중품, 여권은 들어 있지 않나요?",
            expressions: [{ phrase: "壊れやすいものや貴重品", meaning: "파손되기 쉬운 물건이나 귀중품" }],
            vocabulary: [{ word: "中(なか)", meaning: "안, 속" }, { word: "壊れやすい(こわれやすい)", meaning: "깨지기(망가지기) 쉬운" }, { word: "貴重品(きちょうひん)", meaning: "귀중품" }, { word: "入る(はいる)", meaning: "들어가다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、パスポートや貴重品はすべてこのリュックに入れています。",
            translation: "네, 여권이나 귀중품은 전부 이 백팩에 넣어 두었습니다.",
            expressions: [{ phrase: "すべてこのリュックに入れています", meaning: "모두 이 배낭(백팩)에 넣어 가지고 있습니다" }],
            vocabulary: [{ word: "すべて", meaning: "모두, 전부" }, { word: "入れる(いれる)", meaning: "넣다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "ありがとうございます。こちらがお荷物の引換証です。チェックインの際にお部屋までお運びしておきますね！",
            translation: "감사합니다. 여기 수하물 보관증입니다. 체크인하실 때쯤 미리 객실 안으로 옮겨 놓아 드리겠습니다!",
            expressions: [{ phrase: "こちらがお荷物の引換証です", meaning: "이것이 수하물 보관표(교환증)입니다" }, { phrase: "お部屋までお運びしておきます", meaning: "객실까지 미리 운반해 두겠습니다" }],
            vocabulary: [{ word: "引換証(ひきかえしょう)", meaning: "보관증, 교환표" }, { word: "際(さい)", meaning: "~할 때" }, { word: "運ぶ(はこぶ)", meaning: "운반하다, 옮기다" }]
          }
        ]
      },
      {
        id: 4,
        title: "조식 시간 및 식당 위치 확인하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、私たちの予約プランに朝食ビュッフェは含まれていますか？",
            translation: "실례합니다, 저희 예약 플랜에 조식 뷔페가 포함되어 있나요?",
            expressions: [{ phrase: "朝食ビュッフェは含まれていますか？", meaning: "조식 뷔페가 포함되어 있나요?" }],
            vocabulary: [{ word: "私(わたし)たち", meaning: "저희, 우리" }, { word: "予約(よやく)プラン", meaning: "예약 상품(플랜)" }, { word: "朝食(ちょうしょく)", meaning: "조식, 아침 식사" }, { word: "含まれる(ふくまれる)", meaning: "포함되다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、大人2名様とお子様1名様分の朝食が毎朝含まれております！",
            translation: "네, 성인 두 분과 어린이 한 명분의 조식이 매일 아침 포함되어 있습니다!",
            expressions: [{ phrase: "朝食が毎朝含まれております", meaning: "아침 식사가 매일 아침 포함되어 있습니다" }],
            vocabulary: [{ word: "大人(おとな)", meaning: "성인, 어른" }, { word: "2名様(にめいさま)", meaning: "2명, 두 분" }, { word: "お子様(こさま)", meaning: "어린이, 자녀분" }, { word: "毎朝(まいあさ)", meaning: "매일 아침" }]
          },
          {
            role: "투숙객", side: "right",
            text: "よかったです！朝食は何時から何時までで、レストランは何階にありますか？",
            translation: "다행이네요! 조식은 몇 시부터 몇 시까지이고, 레스토랑은 몇 층에 있나요?",
            expressions: [{ phrase: "何時から何時までで、〜は何階にありますか？", meaning: "몇 시부터 몇 시까지이고, ~은 몇 층에 있나요?" }],
            vocabulary: [{ word: "何時(なんじ)", meaning: "몇 시" }, { word: "何階(なんがい)", meaning: "몇 층" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "朝食は朝6時30分から10時までで、会場は2階のレストラン「ガーデン」でございます。",
            translation: "조식은 아침 6시 30분부터 10시까지이며, 장소는 2층 레스토랑 '가든'입니다.",
            expressions: [{ phrase: "会場は2階のレストラン〜でございます", meaning: "식사 장소는 2층 레스토랑 ~입니다" }],
            vocabulary: [{ word: "朝(あさ)", meaning: "아침" }, { word: "会場(かいじょう)", meaning: "장소, 회장" }, { word: "2階(にかい)", meaning: "2층" }]
          },
          {
            role: "투숙객", side: "right",
            text: "朝食券を持って行くのですか？それとも部屋番号を伝えればいいですか？",
            translation: "조식 쿠폰(식권)을 가지고 가야 하나요? 아니면 객실 번호를 말하면 되나요?",
            expressions: [{ phrase: "朝食券を持って行くのですか？", meaning: "조식권을 지참해 가는 것인가요?" }, { phrase: "部屋番号を伝えればいいですか？", meaning: "방 번호(호수)를 말하면 되나요?" }],
            vocabulary: [{ word: "朝食券(ちょうしょくけん)", meaning: "조식권, 아침 식사 쿠폰" }, { word: "持って行く(もっていく)", meaning: "가지고 가다" }, { word: "部屋番号(へやばんごう)", meaning: "객실 번호, 방 호수" }, { word: "伝える(つたえる)", meaning: "전달하다, 알리다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "カードキーのケースに入っているこちらの朝食券を、レストラン入口のスタッフにお渡しください。8時前は比較的空いておりますよ！",
            translation: "카드키 케이스 안에 들어 있는 이 조식권을 레스토랑 입구 직원에게 건네주세요. 8시 전에는 비교적 한산합니다!",
            expressions: [{ phrase: "8時前は比較的空いております", meaning: "8시 이전 시간대는 비교적 덜 붐빕니다(한산합니다)" }],
            vocabulary: [{ word: "入口(いりぐち)", meaning: "입구" }, { word: "渡す(わたす)", meaning: "건네주다" }, { word: "比較的(ひかくてき)", meaning: "비교적" }, { word: "空く(すく)", meaning: "(사람이 적어) 한산하다, 비다" }]
          }
        ]
      },
      {
        id: 5,
        title: "객실 와이파이 연결 및 안내받기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、804号室のイムですが、部屋のWi-Fiがうまく繋がらなくて教えていただけますか？",
            translation: "실례합니다, 804호 임이라고 하는데요, 객실 와이파이가 잘 연결되지 않아서 방법을 알려주실 수 있나요?",
            expressions: [{ phrase: "部屋のWi-Fiがうまく繋がらなくて", meaning: "방 와이파이가 잘 연결되지 않아서" }],
            vocabulary: [{ word: "804号室(はちまるよんごうしつ)", meaning: "804호실" }, { word: "部屋(へや)", meaning: "방, 객실" }, { word: "繋がる(つながる)", meaning: "연결되다, 접속되다" }, { word: "教える(おしえる)", meaning: "알려주다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご不便をおかけしております。「GrandHotel_Room」というネットワーク名を選択されましたでしょうか？",
            translation: "불편을 드려 죄송합니다. 'GrandHotel_Room'이라는 네트워크 이름을 선택하셨나요?",
            expressions: [{ phrase: "「〜」というネットワーク名を選択", meaning: "'~'라는 와이파이 네트워크 이름을 선택" }],
            vocabulary: [{ word: "不便(ふべん)", meaning: "불편" }, { word: "ネットワーク名(めい)", meaning: "네트워크 이름" }, { word: "選択(せんたく)する", meaning: "선택하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、選択したのですが、パスワードは何を入力すればいいですか？",
            translation: "네, 선택했는데 비밀번호는 무엇을 입력하면 되나요?",
            expressions: [{ phrase: "パスワードは何を入力すればいいですか？", meaning: "비밀번호는 무엇을 입력하면 되나요?" }],
            vocabulary: [{ word: "何(なに)", meaning: "무엇" }, { word: "入力(にゅうりょく)する", meaning: "입력하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "パスワードは、お部屋のテレビをつけると最初の案内画面の右上に表示される仕組みになっております。",
            translation: "비밀번호는 객실 TV를 켜시면 첫 안내 화면 오른쪽 상단에 표시되도록 되어 있습니다.",
            expressions: [{ phrase: "テレビをつけると最初の案内画面に表示される", meaning: "TV를 켜면 첫 안내 화면에 비밀번호가 표시된다 (일본 비즈니스·시티 호텔의 흔한 방식)" }],
            vocabulary: [{ word: "最初(さいしょ)", meaning: "맨 처음, 첫" }, { word: "案内画面(あんないがめん)", meaning: "안내 화면" }, { word: "右上(みぎうえ)", meaning: "오른쪽 위, 우측 상단" }, { word: "表示(ひょうじ)される", meaning: "표시되다" }, { word: "仕組み(しくみ)", meaning: "구조, 방식" }]
          },
          {
            role: "투숙객", side: "right",
            text: "あ、本当ですね！テレビ画面の右上に8桁のパスワードが出ていました。",
            translation: "아, 정말 그러네요! TV 화면 오른쪽 위에 8자리 비밀번호가 나와 있었네요.",
            expressions: [{ phrase: "8桁のパスワードが出ていました", meaning: "8자리 비밀번호가 나와 있었습니다" }],
            vocabulary: [{ word: "8桁(はちけた)", meaning: "8자리 (숫자·문자 자릿수)" }, { word: "出る(でる)", meaning: "나오다, 나타나다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご確認ありがとうございます！何台でも無料で接続できますので、どうぞ快適にご利用ください。",
            translation: "확인해 주셔서 감사합니다! 기기 대수 제한 없이 무료로 연결하실 수 있으니 쾌적하게 이용해 주세요.",
            expressions: [{ phrase: "何台でも無料で接続できます", meaning: "몇 대의 기기든 무료로 접속할 수 있습니다" }],
            vocabulary: [{ word: "何台(なんだい)でも", meaning: "(스마트폰·태블릿 등) 몇 대라도" }, { word: "接続(せつぞく)する", meaning: "접속하다" }, { word: "快適(かいてき)に", meaning: "쾌적하게, 편하게" }]
          }
        ]
      },
      {
        id: 6,
        title: "객실 카드키 작동 불량으로 재발급",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、804号室に泊まっているのですが、カードキーをかざしても部屋のドアが開かないんです。",
            translation: "실례합니다, 804호에 묵고 있는데 카드키를 갖다 대도 방문이 열리지 않아요.",
            expressions: [{ phrase: "カードキーをかざしても部屋のドアが開かない", meaning: "카드키를 단말기에 갖다 대도 방문이 열리지 않는다" }],
            vocabulary: [{ word: "泊まる(とまる)", meaning: "묵다, 숙박하다" }, { word: "かざす", meaning: "(카드 등을 리더기에) 갖다 대다" }, { word: "開く(あく)", meaning: "(문이) 열리다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "大変失礼いたしました！カードキーをタッチした際、赤いランプが点滅しましたか？",
            translation: "정말 실례했습니다! 카드키를 터치했을 때 빨간색 램프가 깜빡거렸나요?",
            expressions: [{ phrase: "赤いランプが点滅しましたか？", meaning: "빨간 불빛이 깜빡거렸나요?" }],
            vocabulary: [{ word: "失礼(しつれい)いたしました", meaning: "실례했습니다, 죄송합니다" }, { word: "赤い(あかい)", meaning: "빨간" }, { word: "点滅(てんめつ)する", meaning: "(불빛이) 깜빡거리다, 점멸하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、赤く点滅して開けられませんでした。スマホと一緒にポケットに入れていたからでしょうか？",
            translation: "네, 빨갛게 깜빡이기만 하고 안 열렸어요. 스마트폰이랑 같이 주머니에 넣어 두어서 그런 걸까요?",
            expressions: [{ phrase: "スマホと一緒にポケットに入れていた", meaning: "스마트폰과 함께 주머니에 넣어 두었다" }],
            vocabulary: [{ word: "開けられる(あけられる)", meaning: "열 수 있다" }, { word: "一緒(いっしょ)に", meaning: "함께, 같이" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、スマートフォンの磁気でカードキーのデータが消えてしまうことがよくございます。防犯のため、お名前をお伺いできますか？",
            translation: "네, 스마트폰 자성 때문에 카드키 데이터가 지워지는 경우가 종종 있습니다. 보안을 위해 성함을 여쭤봐도 될까요?",
            expressions: [{ phrase: "磁気でカードキーのデータが消えてしまう", meaning: "자성(자기)으로 인해 카드키 데이터가 지워져 버리다" }],
            vocabulary: [{ word: "磁気(じき)", meaning: "자기, 자성" }, { word: "消える(きえる)", meaning: "지워지다, 사라지다" }, { word: "防犯(ぼうはん)", meaning: "방범, 보안" }, { word: "伺う(うかがう)", meaning: "여쭙다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "804号室のイム・スンテクです。もう1枚のカードキーも一緒に見てもらえますか？",
            translation: "804호 임승택입니다. 다른 카드키 한 장도 함께 점검해 주실 수 있나요?",
            expressions: [{ phrase: "もう1枚のカードキーも一緒に見てもらえますか？", meaning: "나머지 카드키 1장도 함께 확인해 주실 수 있나요?" }],
            vocabulary: [{ word: "1枚(いちまい)", meaning: "(카드 등) 한 장" }, { word: "見る(みる)", meaning: "보다, 점검하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "かしこまりました！2枚とも新しく磁気データを書き直しましたので、これで問題なくお使いいただけます。",
            translation: "알겠습니다! 두 장 모두 새로 자기 데이터를 다시 입력했으니 이제 문제없이 사용하실 수 있습니다.",
            expressions: [{ phrase: "新しく磁気データを書き直しました", meaning: "카드키 데이터를 새로 다시 입력(재발급)했습니다" }],
            vocabulary: [{ word: "2枚(にまい)とも", meaning: "두 장 모두" }, { word: "書き直す(かきなおす)", meaning: "다시 쓰다, 데이터를 재입력하다" }, { word: "問題(もんだい)なく", meaning: "문제없이" }]
          }
        ]
      },
      {
        id: 7,
        title: "수건, 생수, 어메니티 추가 요청하기",
        lines: [
          {
            role: "프런트 직원", side: "left",
            text: "はい、フロントでございます。804号室のイム様、いかがなさいましたか？",
            translation: "네, 프런트입니다. 804호 임 고객님, 무엇을 도와드릴까요?",
            expressions: [{ phrase: "いかがなさいましたか？", meaning: "어쩐 일이십니까? / 무엇을 도와드릴까요?" }],
            vocabulary: [{ word: "804号室(はちまるよんごうしつ)", meaning: "804호실" }]
          },
          {
            role: "투숙객", side: "right",
            text: "すみません、バスタオルを2枚とフェイスタオルを2枚、追加で部屋に持ってきていただけますか？",
            translation: "실례합니다, 큰 목욕 수건 두 장과 세면용 작은 수건 두 장을 추가로 방에 가져다주실 수 있나요?",
            expressions: [{ phrase: "バスタオルを2枚とフェイスタオルを2枚、追加で", meaning: "큰 목욕 타월 2장과 작은 세면 타월 2장을 추가로" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "두 장" }, { word: "追加(ついか)で", meaning: "추가로" }, { word: "持ってくる(もってくる)", meaning: "가지고 오다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "かしこまりました！バスタオル2枚とフェイスタオル2枚ですね。他にアメニティで必要なものはございますか？",
            translation: "알겠습니다! 큰 수건 두 장과 작은 수건 두 장 말씀이시죠. 그 밖에 어메니티 중에 더 필요한 것은 없으신가요?",
            expressions: [{ phrase: "他にアメニティで必要なものはございますか？", meaning: "그 외에 객실 비품(어메니티) 중 필요한 것이 있으신가요?" }],
            vocabulary: [{ word: "他(ほか)に", meaning: "그 밖에" }, { word: "必要(ひつよう)", meaning: "필요" }]
          },
          {
            role: "투숙객", side: "right",
            text: "無料のミネラルウォーターを3本と、子ども用のスリッパや歯ブラシセットがあれば1ついただけますか？",
            translation: "무료 생수 세 병과, 혹시 어린이용 슬리퍼나 칫솔 세트가 있다면 하나 주실 수 있나요?",
            expressions: [{ phrase: "子ども用のスリッパや歯ブラシセット", meaning: "어린이용 슬리퍼나 칫솔 세트 (일본 호텔에서는 유아용 어메니티 세트를 무료로 주는 곳이 많음)" }],
            vocabulary: [{ word: "無料(むりょう)", meaning: "무료" }, { word: "3本(さんぼん)", meaning: "(병·생수 등) 세 병" }, { word: "子ども用(こどもよう)", meaning: "어린이용" }, { word: "歯(は)ブラシ", meaning: "칫솔" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、お水3本と、お子様用のスリッパ・歯ブラシ・ボディスポンジが入ったキッズアメニティセットをお持ちいたします！",
            translation: "네, 생수 세 병과 어린이용 슬리퍼·칫솔·바디스펀지가 들어 있는 키즈 어메니티 세트를 가져다드리겠습니다!",
            expressions: [{ phrase: "キッズアメニティセットをお持ちいたします", meaning: "어린이용 어메니티 세트를 가져다드리겠습니다" }],
            vocabulary: [{ word: "お水(みず)", meaning: "물, 생수" }, { word: "お子様用(こさまよう)", meaning: "어린이용" }]
          },
          {
            role: "투숙객", side: "right",
            text: "わあ、子ども用セットがあるんですね！子ども用のパジャマも1着お借りできますか？",
            translation: "와, 어린이용 세트가 있군요! 어린이용 잠옷(파자마)도 한 벌 빌릴 수 있나요?",
            expressions: [{ phrase: "子ども用のパジャマも1着お借りできますか？", meaning: "어린이용 잠옷(실내복)도 한 벌 대여할 수 있나요?" }],
            vocabulary: [{ word: "1着(いっちゃく)", meaning: "(옷) 한 벌" }, { word: "借りる(かりる)", meaning: "빌리다" }]
          }
        ]
      },
      {
        id: 8,
        title: "에어컨/난방 작동 문제로 점검 요청",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、804号室ですが、部屋のエアコンの調子がおかしいようで見に来ていただけますか？",
            translation: "실례합니다, 804호인데요, 방 에어컨 상태가 좀 이상한 것 같아서 와서 봐주실 수 있나요?",
            expressions: [{ phrase: "エアコンの調子がおかしいようで", meaning: "에어컨 작동 상태가 이상한 것 같아서" }, { phrase: "見に来ていただけますか？", meaning: "점검하러 와 주실 수 있나요?" }],
            vocabulary: [{ word: "調子(ちょうし)", meaning: "상태, 작동 컨디션" }, { word: "おかしい", meaning: "이상하다" }, { word: "見(み)に来る(くる)", meaning: "보러 오다, 점검하러 오다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご不便をおかけし申し訳ございません！電源が入らない状態ですか？それとも風が出ない状態でしょうか？",
            translation: "불편을 끼쳐 죄송합니다! 전원이 안 들어오는 상태인가요, 아니면 바람이 안 나오는 상태인가요?",
            expressions: [{ phrase: "電源が入らない状態ですか？", meaning: "전원이 켜지지 않는 상태인가요?" }],
            vocabulary: [{ word: "電源(でんげん)", meaning: "전원" }, { word: "状態(じょうたい)", meaning: "상태" }, { word: "風(かぜ)", meaning: "바람" }]
          },
          {
            role: "투숙객", side: "right",
            text: "設定温度を21度にしてもぬるい風しか出なくて、中からカタカタという変な音がします。",
            translation: "설정 온도를 21도로 낮춰도 미지근한 바람만 나오고, 안에서 달그락거리는 이상한 소리가 나요.",
            expressions: [{ phrase: "ぬるい風しか出なくて", meaning: "미지근한 바람밖에 나오지 않고" }, { phrase: "カタカタという変な音がします", meaning: "달그락거리는 이상한 소음이 납니다" }],
            vocabulary: [{ word: "設定温度(せっていおんど)", meaning: "설정 온도" }, { word: "21度(にじゅういちど)", meaning: "21도" }, { word: "ぬるい", meaning: "미지근하다" }, { word: "変(へん)な音(おと)", meaning: "이상한 소리(소음)" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "大変失礼いたしました。ただいま設備担当のスタッフをお部屋へ伺わせます。",
            translation: "정말 죄송합니다. 지금 바로 시설 담당 직원을 객실로 보내드리겠습니다.",
            expressions: [{ phrase: "設備担当のスタッフをお部屋へ伺わせます", meaning: "시설 관리 담당 직원을 객실로 보내겠습니다" }],
            vocabulary: [{ word: "設備担当(せつびたんとう)", meaning: "시설 관리 담당" }, { word: "伺わせる(うかがわせる)", meaning: "방문하게 하다, 보내다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ありがとうございます。もしすぐに直らない場合、別の部屋に変えてもらうことはできますか？",
            translation: "감사합니다. 만약 바로 고쳐지지 않는다면 다른 방으로 바꿔 주실 수 있나요?",
            expressions: [{ phrase: "もしすぐに直らない場合、別の部屋に変えてもらう", meaning: "만약 금방 수리되지 않을 경우 다른 방으로 교체 받다" }],
            vocabulary: [{ word: "直る(なおる)", meaning: "고쳐지다, 수리되다" }, { word: "別(べつ)の部屋(へや)", meaning: "다른 방" }, { word: "変える(かえる)", meaning: "바꾸다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "もちろんです！すぐに改善しない場合は、10階の新しいお部屋の鍵をお持ちしてご移動をお手伝いいたします。",
            translation: "물론입니다! 바로 해결되지 않으면 10층의 새 객실 열쇠를 가져가서 방 이동을 도와드리겠습니다.",
            expressions: [{ phrase: "新しいお部屋の鍵をお持ちして", meaning: "새 객실 키를 가져다드리고" }],
            vocabulary: [{ word: "改善(かいぜん)する", meaning: "개선되다, 해결되다" }, { word: "10階(じゅっかい)", meaning: "10층" }, { word: "鍵(かぎ)", meaning: "열쇠, 카드키" }, { word: "移動(いどう)", meaning: "이동" }, { word: "手伝う(てつだう)", meaning: "돕다" }]
          }
        ]
      },
      {
        id: 9,
        title: "조용한 고층 객실로 방 변경 요청하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、先ほど302号室にチェックインしてまだ荷物を広げていないのですが、部屋の変更をお願いできますか？",
            translation: "실례합니다, 방금 302호에 체크인했고 아직 짐을 풀지 않았는데요, 혹시 객실 변경을 부탁드려도 될까요?",
            expressions: [{ phrase: "まだ荷物を広げていないのですが", meaning: "아직 가방(짐)을 펼쳐 풀지 않았는데요" }, { phrase: "部屋の変更をお願いできますか？", meaning: "객실 변경을 부탁할 수 있을까요?" }],
            vocabulary: [{ word: "先ほど(さきほど)", meaning: "방금 전, 아까" }, { word: "広げる(ひろげる)", meaning: "(짐을) 펼치다, 풀다" }, { word: "変更(へんこう)", meaning: "변경" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、302号室に何か気になる点がございましたでしょうか？",
            translation: "네, 302호 객실에 뭔가 불편하거나 신경 쓰이는 점이 있으셨나요?",
            expressions: [{ phrase: "何か気になる点がございましたでしょうか？", meaning: "무언가 신경 쓰이는(불편한) 점이 있으셨나요?" }],
            vocabulary: [{ word: "気(き)になる", meaning: "신경 쓰이다, 마음에 걸리다" }, { word: "点(てん)", meaning: "점, 부분" }]
          },
          {
            role: "투숙객", side: "right",
            text: "エレベーターのすぐ隣の部屋で廊下の足音が響くのと、大通りに面していて車の音が少しうるさいんです。",
            translation: "엘리베이터 바로 옆방이라 복도 발소리가 울리고, 큰길 쪽을 향해 있어서 차 소리가 좀 시끄러워요.",
            expressions: [{ phrase: "エレベーターのすぐ隣の部屋", meaning: "엘리베이터 바로 옆 객실" }, { phrase: "大通りに面していて", meaning: "큰길(대로변)을 마주 보고 있어서" }],
            vocabulary: [{ word: "隣(となり)", meaning: "옆" }, { word: "廊下(ろうか)", meaning: "복도" }, { word: "足音(あしおと)", meaning: "발소리" }, { word: "響く(ひびく)", meaning: "(소리가) 울리다" }, { word: "大通り(おおどおり)", meaning: "큰길, 대로변" }, { word: "車(くるま)の音(おと)", meaning: "자동차 소음" }, { word: "うるさい", meaning: "시끄럽다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "さようでございましたか。では、エレベーターから離れた高層階の静かなお部屋をお探しいたします。",
            translation: "아, 그러셨군요. 그럼 엘리베이터에서 떨어진 고층의 조용한 객실을 찾아보겠습니다.",
            expressions: [{ phrase: "エレベーターから離れた高層階の静かなお部屋", meaning: "엘리베이터에서 멀리 떨어진 고층의 조용한 방" }],
            vocabulary: [{ word: "離れる(はなれる)", meaning: "떨어지다" }, { word: "高層階(こうそうかい)", meaning: "고층 (저층은 低層階(ていそうかい))" }, { word: "静か(しずか)な", meaning: "조용한" }, { word: "探す(さがす)", meaning: "찾다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ありがとうございます！子どもが物音で起きやすいので、静かな部屋だと本当に助かります。",
            translation: "감사합니다! 아이가 작은 소리에도 쉽게 깨는 편이라 조용한 방이면 정말 좋겠어요.",
            expressions: [{ phrase: "物音で起きやすい", meaning: "작은 기척(소리)에도 잠에서 쉽게 깬다" }],
            vocabulary: [{ word: "物音(ものおと)", meaning: "기척, 소리" }, { word: "起きる(おきる)", meaning: "(잠에서) 깨다, 일어나다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "11階の奥にある、中庭向きの静かな1108号室が空いております！新しいカードキーをお渡ししますので、そのままご移動ください。",
            translation: "11층 안쪽에 있는, 중정(안뜰) 방향의 조용한 1108호가 비어 있습니다! 새 카드키를 드릴 테니 그대로 이동하시면 됩니다.",
            expressions: [{ phrase: "中庭向きの静かな〜号室", meaning: "안뜰(중정) 방향을 향한 조용한 ~호실" }],
            vocabulary: [{ word: "11階(じゅういっかい)", meaning: "11층" }, { word: "奥(おく)", meaning: "안쪽" }, { word: "中庭向き(なかにわむき)", meaning: "안뜰 방향" }, { word: "空く(あく)", meaning: "(방이) 비어 있다" }]
          }
        ]
      },
      {
        id: 10,
        title: "룸서비스 주문 및 배달 시간 확인",
        lines: [
          {
            role: "룸서비스 직원", side: "left",
            text: "お電話ありがとうございます。ルームサービスでございます。ご注文をお伺いいたします。",
            translation: "전화 주셔서 감사합니다. 룸서비스입니다. 주문을 도와드리겠습니다.",
            expressions: [{ phrase: "ご注文をお伺いいたします", meaning: "주문을 받겠습니다" }],
            vocabulary: [{ word: "電話(でんわ)", meaning: "전화" }, { word: "注文(ちゅうもん)", meaning: "주문" }]
          },
          {
            role: "투숙객", side: "right",
            text: "1108号室ですが、クラブハウスサンドイッチを1つと、子ども用のミートソーススパゲッティを1つお願いします。",
            translation: "1108호인데요, 클럽하우스 샌드위치 하나와 어린이용 미트소스 스파게티 하나 부탁합니다.",
            expressions: [{ phrase: "子ども用のミートソーススパゲッティ", meaning: "어린이용 미트소스 스파게티" }],
            vocabulary: [{ word: "1108号室(いちいちまるはちごうしつ)", meaning: "1108호실" }, { word: "子ども用(こどもよう)", meaning: "어린이용" }]
          },
          {
            role: "룸서비스 직원", side: "left",
            text: "かしこまりました。サンドイッチの付け合わせは、フライドポテトとサラダのどちらになさいますか？",
            translation: "알겠습니다. 샌드위치에 곁들일 사이드 메뉴는 감자튀김과 샐러드 중 어느 것으로 하시겠어요?",
            expressions: [{ phrase: "付け合わせは、AとBのどちらになさいますか？", meaning: "사이드 메뉴(곁들임)는 A와 B 중 어느 것으로 하시겠습니까?" }],
            vocabulary: [{ word: "付け合わせ(つけあわせ)", meaning: "곁들임 요리, 가니쉬" }, { word: "どちら", meaning: "어느 쪽" }]
          },
          {
            role: "투숙객", side: "right",
            text: "フライドポテトでお願いします。ケチャップを多めに付けていただけますか？あと、どれくらいで届きますか？",
            translation: "감자튀김으로 부탁합니다. 케첩을 좀 넉넉히 챙겨 주실 수 있나요? 그리고 도착하는 데 시간이 얼마나 걸릴까요?",
            expressions: [{ phrase: "ケチャップを多めに付けていただけますか？", meaning: "케첩을 넉넉히(많이) 챙겨 주실 수 있나요?" }, { phrase: "どれくらいで届きますか？", meaning: "얼마나 있어야 배달되나요?" }],
            vocabulary: [{ word: "多め(おおめ)に", meaning: "넉넉하게, 조금 많이" }, { word: "付ける(つける)", meaning: "첨부하다, 챙겨주다" }, { word: "届く(とどく)", meaning: "도착하다, 배달되다" }]
          },
          {
            role: "룸서비스 직원", side: "left",
            text: "30分ほどでお届けいたします。サービス料込みで合計4,200円になりますが、お部屋付けになさいますか？",
            translation: "약 30분 정도 후에 배달해 드리겠습니다. 봉사료 포함 총 4,200엔인데 객실 후불(룸차지)로 달아 둘까요?",
            expressions: [{ phrase: "お部屋付けになさいますか？", meaning: "객실 후불(룸차지)로 하시겠습니까? (체크아웃 시 합산 결제)" }],
            vocabulary: [{ word: "30分(さんじゅっぷん)ほど", meaning: "30분 정도" }, { word: "サービス料込み(りょうこみ)", meaning: "봉사료 포함" }, { word: "部屋付け(へやづけ)", meaning: "룸차지, 객실 앞으로 달아둠" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、1108号室の部屋付けでお願いします。ありがとうございます！",
            translation: "네, 1108호 룸차지로 부탁합니다. 감사합니다!",
            expressions: [{ phrase: "1108号室の部屋付けでお願いします", meaning: "1108호 객실 후불로 부탁합니다" }],
            vocabulary: [{ word: "お願い(おねがい)します", meaning: "부탁합니다" }]
          }
        ]
      },
      {
        id: 11,
        title: "세탁 서비스 및 다리미 대여 문의",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、シャツにシワがついてしまったのですが、アイロンとアイロン台を借りることはできますか？",
            translation: "실례합니다, 셔츠가 구겨져서 주름이 생겼는데 다리미와 다리미판을 빌릴 수 있나요?",
            expressions: [{ phrase: "シャツにシワがついてしまった", meaning: "셔츠에 주름이 지고(구겨지고) 말았다" }, { phrase: "アイロンとアイロン台を借りる", meaning: "다리미와 다리미판을 빌리다" }],
            vocabulary: [{ word: "シワ", meaning: "주름, 구김" }, { word: "アイロン台(だい)", meaning: "다리미판" }, { word: "借りる(かりる)", meaning: "빌리다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、無料で貸し出しを行っておりますので、すぐにお部屋へお届けいたします！",
            translation: "네, 무료로 대여해 드리고 있으니 지금 바로 객실로 가져다드리겠습니다!",
            expressions: [{ phrase: "無料で貸し出しを行っております", meaning: "무료로 대여 서비스를 제공하고 있습니다" }],
            vocabulary: [{ word: "無料(むりょう)", meaning: "무료" }, { word: "貸し出し(かしだし)", meaning: "대여, 대출" }, { word: "届ける(とどける)", meaning: "배달하다, 가져다주다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ありがとうございます！あと、ホテルの中にコインランドリーはありますか？",
            translation: "감사합니다! 그리고 혹시 호텔 안에 코인 세탁실이 있나요?",
            expressions: [{ phrase: "ホテルの中にコインランドリーはありますか？", meaning: "호텔 내부에 동전 세탁실이 있나요?" }],
            vocabulary: [{ word: "中(なか)", meaning: "안, 내부" }, { word: "コインランドリー", meaning: "코인 세탁실" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、地下1階に24時間ご利用いただけるコインランドリーコーナーがございます。",
            translation: "네, 지하 1층에 24시간 이용하실 수 있는 코인 세탁실 코너가 있습니다.",
            expressions: [{ phrase: "地下1階に24時間ご利用いただける〜", meaning: "지하 1층에 24시간 이용 가능한 ~" }],
            vocabulary: [{ word: "地下1階(ちかいっかい)", meaning: "지하 1층" }, { word: "24時間(にじゅうよじかん)", meaning: "24시간" }, { word: "利用(りよう)する", meaning: "이용하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "洗濯洗剤は自分で入れる必要がありますか？また、100円玉への両替もできますか？",
            translation: "세탁 세제는 직접 넣어야 하나요? 그리고 100엔짜리 동전으로 교환도 가능한가요?",
            expressions: [{ phrase: "洗濯洗剤は自分で入れる必要がありますか？", meaning: "세탁 세제는 직접 넣어야 하나요?" }, { phrase: "100円玉への両替", meaning: "100엔 동전으로의 잔돈 교환" }],
            vocabulary: [{ word: "洗濯洗剤(せんたくせんざい)", meaning: "세탁 세제" }, { word: "自分(じぶん)で", meaning: "직접, 스스로" }, { word: "100円玉(ひゃくえんだま)", meaning: "100엔짜리 동전" }, { word: "両替(りょうがえ)", meaning: "환전, 잔돈 교환" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "洗剤は自動投入されますので不要です！お部屋のテレビ画面で洗濯機の空き状況や残り時間も確認でき、両替機も設置されております。",
            translation: "세제는 자동으로 투입되므로 따로 넣으실 필요가 없습니다! 객실 TV 화면에서 세탁기 빈자리 여부와 남은 세탁 시간도 확인하실 수 있고, 동전 교환기도 설치되어 있습니다.",
            expressions: [{ phrase: "洗剤は自動投入されますので不要です", meaning: "세제는 자동 투입되므로 필요 없습니다 (일본 비즈니스 호텔 코인 세탁기의 특징)" }, { phrase: "洗濯機の空き状況や残り時間", meaning: "세탁기 사용 가능 여부와 남은 시간" }],
            vocabulary: [{ word: "自動投入(じどうとうにゅう)", meaning: "자동 투입" }, { word: "不要(ふよう)", meaning: "불필요" }, { word: "洗濯機(せんたくき)", meaning: "세탁기" }, { word: "空き状況(あきじょうきょう)", meaning: "빈자리 현황" }, { word: "残り時間(のこりじかん)", meaning: "남은 시간" }, { word: "両替機(りょうがえき)", meaning: "동전 교환기" }]
          }
        ]
      },
      {
        id: 12,
        title: "수영장 및 피트니스 센터 이용 문의",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "こんにちは。ホテル内の温水プールと大浴場を利用したいのですが、何階にありますか？",
            translation: "안녕하세요. 호텔 내 온수 수영장과 대욕장(온천탕)을 이용하고 싶은데요, 몇 층에 있나요?",
            expressions: [{ phrase: "温水プールと大浴場を利用したい", meaning: "온수 풀과 대욕장을 이용하고 싶다" }],
            vocabulary: [{ word: "温水(おんすい)プール", meaning: "온수 수영장" }, { word: "大浴場(だいよくじょう)", meaning: "대욕장 (일본 호텔의 대형 공동 목욕탕/온천탕)" }, { word: "何階(なんがい)", meaning: "몇 층" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "屋内プールとフィットネスジムは4階、大浴場は最上階の14階にございます。営業時間は夜11時までです。",
            translation: "실내 수영장과 피트니스 짐은 4층에 있고, 대욕장은 최상층인 14층에 있습니다. 영업시간은 밤 11시까지입니다.",
            expressions: [{ phrase: "最上階の14階にございます", meaning: "꼭대기 층(최상층)인 14층에 있습니다" }],
            vocabulary: [{ word: "屋内(おくない)", meaning: "실내" }, { word: "最上階(さいじょうかい)", meaning: "최상층, 꼭대기 층" }, { word: "営業時間(えいぎょうじかん)", meaning: "영업시간" }, { word: "夜11時(よるじゅういちじ)", meaning: "밤 11시" }]
          },
          {
            role: "투숙객", side: "right",
            text: "5歳の子どもも入れる浅いプールや、子ども用のライフジャケットはありますか？",
            translation: "5살 아이도 들어갈 수 있는 수심이 얕은 풀이나 어린이용 구명조끼가 있나요?",
            expressions: [{ phrase: "子どもも入れる浅いプール", meaning: "어린이도 들어갈 수 있는 얕은 풀장" }],
            vocabulary: [{ word: "5歳(ごさい)", meaning: "5세" }, { word: "浅い(あさい)", meaning: "(수심이) 얕다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、水深60センチのキッズプールがあり、お子様用のアームリングやライフジャケットも無料で貸し出しております！",
            translation: "네, 수심 60cm의 키즈 풀이 있고 어린이용 암링과 구명조끼도 무료로 빌려드리고 있습니다!",
            expressions: [{ phrase: "水深60センチのキッズプール", meaning: "수심 60센티미터의 어린이용 풀장" }],
            vocabulary: [{ word: "水深(すいしん)", meaning: "수심, 물 깊이" }, { word: "貸し出す(かしだす)", meaning: "빌려주다, 대여하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "プールや大浴場へ行くとき、タオルは部屋から持って行く必要がありますか？",
            translation: "수영장이나 대욕장에 갈 때 수건은 객실에서 직접 챙겨 가야 하나요?",
            expressions: [{ phrase: "タオルは部屋から持って行く必要がありますか？", meaning: "수건은 객실에서 가지고 가야 하나요?" }],
            vocabulary: [{ word: "部屋(へや)", meaning: "방, 객실" }, { word: "持って行く(もっていく)", meaning: "가지고 가다" }, { word: "必要(ひつよう)", meaning: "필요" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "プールには備え付けのタオルがございますが、大浴場へはお部屋のタオルとカードキーをお持ちください。お部屋の館内着とスリッパのまま移動していただけますよ。",
            translation: "수영장에는 전용 수건이 비치되어 있지만, 대욕장에 가실 때는 객실 수건과 카드키를 챙겨 가세요. 대욕장에는 객실 실내복과 슬리퍼 차림 그대로 이동하셔도 됩니다.",
            expressions: [{ phrase: "お部屋の館内着とスリッパのまま", meaning: "객실에 비치된 실내복(유카타/파자마)과 슬리퍼를 착용한 그대로" }],
            vocabulary: [{ word: "備え付け(そなえつけ)", meaning: "비치되어 있음" }, { word: "館内着(かんないぎ)", meaning: "호텔 관내 전용 실내복" }, { word: "移動(いどう)する", meaning: "이동하다" }]
          }
        ]
      },
      {
        id: 13,
        title: "모닝콜(Wake-up call) 요청하기",
        lines: [
          {
            role: "프런트 직원", side: "left",
            text: "はい、フロントでございます。1108号室のイム様、ご用件をお伺いいたします。",
            translation: "네, 프런트입니다. 1108호 임 고객님, 어떤 용건이신가요?",
            expressions: [{ phrase: "ご用件をお伺いいたします", meaning: "용건을 말씀해 주십시오" }],
            vocabulary: [{ word: "用件(ようけん)", meaning: "용건" }]
          },
          {
            role: "투숙객", side: "right",
            text: "こんばんは。明日の朝早い飛行機に乗るので、モーニングコールをお願いしたいのですが。",
            translation: "안녕하세요. 내일 아침 일찍 비행기를 타야 해서 모닝콜을 부탁드리고 싶은데요.",
            expressions: [{ phrase: "明日の朝早い飛行機に乗るので", meaning: "내일 아침 이른 비행기를 타야 해서" }, { phrase: "モーニングコールをお願いしたい", meaning: "모닝콜을 신청하고 싶다 (일본에서도 한국처럼 モーニングコール이라는 표현을 씀)" }],
            vocabulary: [{ word: "明日(あした)", meaning: "내일" }, { word: "朝早い(あさはやい)", meaning: "아침 일찍" }, { word: "飛行機(ひこうき)", meaning: "비행기" }, { word: "乗る(のる)", meaning: "타다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "かしこまりました！明日の朝、何時におかけしましょうか？",
            translation: "알겠습니다! 내일 아침 몇 시에 전화를 드릴까요?",
            expressions: [{ phrase: "明日の朝、何時におかけしましょうか？", meaning: "내일 아침 몇 시에 전화를 걸어 드릴까요?" }],
            vocabulary: [{ word: "何時(なんじ)", meaning: "몇 시" }, { word: "かける", meaning: "(전화를) 걸다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "朝5時30分にお願いします。念のため、5時40分にもう一度鳴らしていただくことはできますか？",
            translation: "아침 5시 30분에 부탁합니다. 혹시 모르니 5시 40분에 한 번 더 울리게 해 주실 수 있나요?",
            expressions: [{ phrase: "念のため、5時40分にもう一度", meaning: "만약을 위해 5시 40분에 한 번 더" }],
            vocabulary: [{ word: "念(ねん)のため", meaning: "만약을 위해" }, { word: "もう一度(いちど)", meaning: "한 번 더" }, { word: "鳴らす(ならす)", meaning: "(전화벨을) 울리게 하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "承知いたしました！1108号室に明朝5時30分と5時40分の2回、モーニングコールをセットいたしました。",
            translation: "알겠습니다! 1108호 앞으로 내일 아침 5시 30분과 5시 40분 총 두 번 모닝콜을 설정해 두었습니다.",
            expressions: [{ phrase: "明朝5時30分と5時40分の2回", meaning: "내일 아침 5시 30분과 5시 40분 두 차례" }],
            vocabulary: [{ word: "明朝(みょうちょう)", meaning: "내일 아침" }, { word: "2回(にかい)", meaning: "2회, 두 번" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ありがとうございます！これで寝坊せずに安心して休めます。おやすみなさい。",
            translation: "감사합니다! 이제 늦잠 자지 않고 안심하고 푹 쉴 수 있겠네요. 안녕히 주무세요.",
            expressions: [{ phrase: "寝坊せずに安心して休めます", meaning: "늦잠 자지 않고 안심하고 잘 수 있습니다" }],
            vocabulary: [{ word: "寝坊(ねぼう)する", meaning: "늦잠을 자다" }, { word: "安心(あんしん)する", meaning: "안심하다" }, { word: "休む(やすむ)", meaning: "쉬다, 자다" }]
          }
        ]
      },
      {
        id: 14,
        title: "주변 맛집 추천 및 예약 대행 부탁",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、ホテルから歩いて行ける距離で、子ども連れでも入りやすいおすすめの夕食のお店はありますか？",
            translation: "실례합니다, 호텔에서 걸어갈 수 있는 거리 내에 아이를 데리고도 들어가기 편한 추천 저녁 식당이 있나요?",
            expressions: [{ phrase: "ホテルから歩いて行ける距離", meaning: "호텔에서 도보로 갈 수 있는 거리" }, { phrase: "子ども連れでも入りやすい", meaning: "아이를 동반하고도 들어가기 편한" }],
            vocabulary: [{ word: "歩いて行ける(あるいていける)", meaning: "걸어서 갈 수 있는" }, { word: "距離(きょり)", meaning: "거리" }, { word: "子ども連れ(こどもづれ)", meaning: "아이 동반" }, { word: "夕食(ゆうしょく)", meaning: "저녁 식사" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "はい！和食や焼肉、お寿司など、どのようなジャンルのお料理をご希望でしょうか？",
            translation: "네! 일식 정식이나 야키니쿠(고기구이), 초밥 중에서 어떤 종류의 요리를 원하시나요?",
            expressions: [{ phrase: "どのようなジャンルのお料理をご希望でしょうか？", meaning: "어떤 종류의 요리를 희망하시나요?" }],
            vocabulary: [{ word: "和食(わしょく)", meaning: "일식, 일본 전통 요리" }, { word: "焼肉(やきにく)", meaning: "야키니쿠, 고기구이" }, { word: "希望(きぼう)", meaning: "희망" }]
          },
          {
            role: "투숙객", side: "right",
            text: "新鮮な海鮮や天ぷらが食べられる和食のお店で、禁煙の個室やテーブル席があるところがいいです。",
            translation: "신선한 해산물이나 튀김을 먹을 수 있는 일식집이고, 금연인 개별 룸(독실)이나 테이블석이 있는 곳이면 좋겠어요.",
            expressions: [{ phrase: "禁煙の個室やテーブル席があるところ", meaning: "금연인 개별 룸(프라이빗 룸)이나 테이블 좌석이 있는 곳" }],
            vocabulary: [{ word: "新鮮(しんせん)な", meaning: "신선한" }, { word: "海鮮(かいせん)", meaning: "해산물" }, { word: "禁煙(きんえん)", meaning: "금연" }, { word: "個室(こしつ)", meaning: "개별 룸, 독실" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "それでしたら、徒歩5分のところにある和食店「さくら亭」が全席禁煙で、ご家族向けの掘りごたつ個室もあり大変人気です。",
            translation: "그렇다면 도보 5분 거리에 있는 일식당 '사쿠라테이'가 전 좌석 금연이고, 가족용 다다미 룸(발을 내리는 좌식 테이블)도 있어서 인기가 아주 많습니다.",
            expressions: [{ phrase: "全席禁煙で、ご家族向けの掘りごたつ個室もあり", meaning: "전석 금연이며 가족용 호리고타츠(바닥이 파여 있어 다리를 편히 내리고 앉는 좌식) 룸도 있어" }],
            vocabulary: [{ word: "徒歩5分(とほごふん)", meaning: "도보 5분" }, { word: "全席禁煙(ぜんせききんえん)", meaning: "전 좌석 금연" }, { word: "掘り(ほり)ごたつ", meaning: "다리를 내리고 앉을 수 있게 바닥을 파 놓은 일본식 테이블" }]
          },
          {
            role: "투숙객", side: "right",
            text: "とても良さそうですね！日本語での電話予約が難しいので、今夜6時に3名で代わりに予約していただけますか？",
            translation: "정말 좋아 보이네요! 일본어로 전화 예약하기가 어려워서 그러는데, 오늘 밤 6시에 3명으로 대신 예약해 주실 수 있나요?",
            expressions: [{ phrase: "今夜6時に3名で代わりに予約していただけますか？", meaning: "오늘 저녁 6시에 3명으로 대신 예약해 주실 수 있나요?" }],
            vocabulary: [{ word: "電話予約(でんわよやく)", meaning: "전화 예약" }, { word: "難しい(むずかしい)", meaning: "어렵다" }, { word: "代わり(かわり)に", meaning: "대신해서" }]
          },
          {
            role: "컨시어지", side: "left",
            text: "喜んで承ります！ただいまお店に電話し、今夜6時からイム様のお名前で個室を3名様分お取りしました。こちらが地図です！",
            translation: "기꺼이 해 드리겠습니다! 방금 식당에 전화해서 오늘 저녁 6시부터 임 고객님 성함으로 개별 룸 3명 자리를 예약했습니다. 여기 약도입니다!",
            expressions: [{ phrase: "個室を3名様分お取りしました", meaning: "개별 룸으로 3명 자리를 예약해 두었습니다" }],
            vocabulary: [{ word: "喜ぶ(よろこぶ)", meaning: "기뻐하다" }, { word: "取る(とる)", meaning: "(예약·자리를) 잡다" }, { word: "地図(ちず)", meaning: "지도, 약도" }]
          }
        ]
      },
      {
        id: 15,
        title: "객실 내 금고 잠김 해제 요청하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、1108号室ですが、部屋の金庫がロックされてしまって、暗証番号を押しても開かなくなってしまいました。",
            translation: "실례합니다, 1108호인데요, 객실 금고가 잠겨버려서 비밀번호를 눌러도 열리지 않아요.",
            expressions: [{ phrase: "部屋の金庫がロックされてしまって", meaning: "객실 내 금고가 잠겨버려서" }, { phrase: "暗証番号を押しても開かなくなった", meaning: "비밀번호를 눌러도 열리지 않게 되었다" }],
            vocabulary: [{ word: "金庫(きんこ)", meaning: "금고 (세이프티 박스)" }, { word: "暗証番号(あんしょうばんごう)", meaning: "비밀번호" }, { word: "押す(おす)", meaning: "누르다" }, { word: "開く(あく)", meaning: "열리다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご不便をおかけしております。金庫の液晶画面に「ERROR」や「HOLD」という文字は出ていますか？",
            translation: "불편을 드려 죄송합니다. 금고 액정 화면에 'ERROR'나 'HOLD'라는 글자가 떠 있나요?",
            expressions: [{ phrase: "液晶画面に「ERROR」や「HOLD」という文字", meaning: "액정 표시창에 ERROR나 HOLD라는 글자" }],
            vocabulary: [{ word: "液晶画面(えきしょうがめん)", meaning: "액정 화면" }, { word: "文字(もじ)", meaning: "글자, 문자" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、番号を3回間違えてしまったようで「HOLD」と出ています。中にパスポートが入っているので開けていただけますか？",
            translation: "네, 번호를 세 번 잘못 눌렀는지 'HOLD'라고 떠 있어요. 안에 여권이 들어 있는데 열어주실 수 있나요?",
            expressions: [{ phrase: "番号を3回間違えてしまったようで", meaning: "비밀번호를 3번 틀려버린 것 같아서" }],
            vocabulary: [{ word: "番号(ばんごう)", meaning: "번호" }, { word: "3回(さんかい)", meaning: "3번, 3회" }, { word: "間違える(まちがえる)", meaning: "틀리다, 잘못 누르다" }, { word: "開ける(あける)", meaning: "열다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご安心ください！責任者がマスターキーを持って伺えば、すぐにロックを解除できます。",
            translation: "안심하세요! 담당 책임자가 마스터키를 가지고 올라가면 바로 잠금을 해제할 수 있습니다.",
            expressions: [{ phrase: "すぐにロックを解除できます", meaning: "즉시 잠금을 해제할 수 있습니다" }],
            vocabulary: [{ word: "安心(あんしん)する", meaning: "안심하다" }, { word: "責任者(せきにんしゃ)", meaning: "책임자, 매니저" }, { word: "解除(かいじょ)する", meaning: "해제하다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "よかったです！どれくらいで部屋に来ていただけますか？",
            translation: "다행이네요! 얼마나 있으면 방으로 와 주실 수 있나요?",
            expressions: [{ phrase: "どれくらいで部屋に来ていただけますか？", meaning: "얼마나 있으면 객실로 와 주실 수 있나요?" }],
            vocabulary: [{ word: "来る(くる)", meaning: "오다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "5分ほどでお部屋へ伺います！防犯上の規定により、ご宿泊者様ご本人の立ち会いが必要ですのでお部屋でお待ちください。",
            translation: "5분 정도 후에 객실로 찾아뵙겠습니다! 보안 규정상 투숙객 본인의 입회(동석)가 필요하니 객실 안에서 기다려 주세요.",
            expressions: [{ phrase: "ご宿泊者様ご本人の立ち会いが必要ですので", meaning: "투숙객 본인의 입회(자리 지킴)가 필요하므로" }],
            vocabulary: [{ word: "防犯上(ぼうはんじょう)", meaning: "방범상, 보안상" }, { word: "規定(きてい)", meaning: "규정" }, { word: "本人(ほんにん)", meaning: "본인" }, { word: "立ち会い(たちあい)", meaning: "입회, 현장에 함께 있음" }]
          }
        ]
      },
      {
        id: 16,
        title: "레이트 체크아웃 비용 및 가능 여부",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、明日チェックアウトする1108号室のイムですが、通常のチェックアウトは何時ですか？",
            translation: "실례합니다, 내일 체크아웃하는 1108호 임이라고 하는데요, 정규 체크아웃 시간은 몇 시인가요?",
            expressions: [{ phrase: "通常のチェックアウトは何時ですか？", meaning: "정규(기본) 체크아웃은 몇 시인가요?" }],
            vocabulary: [{ word: "明日(あした)", meaning: "내일" }, { word: "通常(つうじょう)", meaning: "통상, 정규" }, { word: "何時(なんじ)", meaning: "몇 시" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "通常のチェックアウト時間は午前11時となっております。",
            translation: "정규 체크아웃 시간은 오전 11시입니다.",
            expressions: [{ phrase: "午前11時となっております", meaning: "오전 11시로 되어 있습니다" }],
            vocabulary: [{ word: "午前11時(ごぜんじゅういちじ)", meaning: "오전 11시" }]
          },
          {
            role: "투숙객", side: "right",
            text: "帰りの飛行機が夜なので、午後1時か2時までレイトチェックアウトを申し込むことはできますか？",
            translation: "돌아가는 비행기가 밤 시간대라서 그러는데, 오후 1시나 2시까지 레이트 체크아웃(지연 퇴실)을 신청할 수 있나요?",
            expressions: [{ phrase: "レイトチェックアウトを申し込む", meaning: "레이트 체크아웃(체크아웃 시간 연장)을 신청하다" }],
            vocabulary: [{ word: "帰り(かえり)", meaning: "돌아가는 길, 귀국편" }, { word: "夜(よる)", meaning: "밤" }, { word: "午後1時(ごごいちじ)", meaning: "오후 1시" }, { word: "申し込む(もうしこむ)", meaning: "신청하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "明日の空室状況を確認いたします…はい、可能です！1時間につき1,500円の延長料金で、最大午後2時まで延長できます。",
            translation: "내일 공실 상황을 확인해 보겠습니다... 네, 가능합니다! 1시간당 1,500엔의 연장 요금으로 최대 오후 2시까지 연장하실 수 있습니다.",
            expressions: [{ phrase: "1時間につき1,500円の延長料金で", meaning: "1시간당 1,500엔의 시간 연장 요금으로" }],
            vocabulary: [{ word: "空室状況(くうしつじょうきょう)", meaning: "빈방(공실) 상황" }, { word: "1時間(いちじかん)につき", meaning: "1시간당" }, { word: "延長料金(えんちょうりょうきん)", meaning: "연장 요금" }, { word: "最大(さいだい)", meaning: "최대" }]
          },
          {
            role: "투숙객", side: "right",
            text: "では、2時間延長して午後1時チェックアウトでお願いします。カードキーの更新も必要ですか？",
            translation: "그럼 2시간 연장해서 오후 1시 체크아웃으로 부탁합니다. 카드키 시간 갱신도 필요한가요?",
            expressions: [{ phrase: "2時間延長して午後1時チェックアウトで", meaning: "2시간 연장하여 오후 1시 체크아웃으로" }, { phrase: "カードキーの更新も必要ですか？", meaning: "카드키 유효시간 업데이트(갱신)도 필요한가요?" }],
            vocabulary: [{ word: "2時間(にじかん)", meaning: "2시간" }, { word: "更新(こうしん)", meaning: "갱신, 업데이트" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、11時を過ぎてもドアが開くよう、ただいまカードキーの有効時間を午後1時までに変更いたしました！延長料金3,000円は明日ご精算ください。",
            translation: "네, 11시가 지나도 방문이 열리도록 방금 카드키 유효시간을 오후 1시까지로 변경했습니다! 연장 요금 3,000엔은 내일 퇴실하실 때 정산해 주세요.",
            expressions: [{ phrase: "カードキーの有効時間を午後1時までに変更", meaning: "카드키 유효시간을 오후 1시까지로 연장 변경" }],
            vocabulary: [{ word: "過ぎる(すぎる)", meaning: "(시간이) 지나다" }, { word: "有効時間(ゆうこうじかん)", meaning: "유효시간" }, { word: "精算(せいさん)する", meaning: "정산하다, 계산하다" }]
          }
        ]
      },
      {
        id: 17,
        title: "체크아웃 및 미니바·보증금 정산",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "こんにちは。1108号室、チェックアウトをお願いします。こちらがカードキー2枚です。",
            translation: "안녕하세요. 1108호 체크아웃 부탁합니다. 여기 카드키 두 장 있습니다.",
            expressions: [{ phrase: "1108号室、チェックアウトをお願いします", meaning: "1108호 체크아웃을 부탁합니다" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "두 장" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "イム様、ご滞在中は快適にお過ごしいただけましたでしょうか？お部屋の冷蔵庫の有料ドリンクはご利用になられましたか？",
            translation: "임 고객님, 머무시는 동안 편안히 지내셨나요? 혹시 객실 냉장고 안의 유료 음료(미니바)를 이용하셨나요?",
            expressions: [{ phrase: "ご滞在中は快適にお過ごしいただけましたでしょうか？", meaning: "체류 기간 동안 쾌적하게 지내셨습니까? (체크아웃 시 정중한 인사)" }],
            vocabulary: [{ word: "滞在中(たいざいちゅう)", meaning: "체류 중, 투숙 기간 중" }, { word: "冷蔵庫(れいぞうこ)", meaning: "냉장고" }, { word: "有料(ゆうりょう)", meaning: "유료" }]
          },
          {
            role: "투숙객", side: "right",
            text: "とても快適に過ごせました！ミニバーは使っていなくて、昨日のルームサービスと今日のレイトチェックアウト代だけです。",
            translation: "아주 쾌적하게 잘 지냈습니다! 미니바는 쓰지 않았고, 어제 시킨 룸서비스와 오늘 레이트 체크아웃 비용뿐입니다.",
            expressions: [{ phrase: "ミニバーは使っていなくて", meaning: "미니바는 이용하지 않았고" }],
            vocabulary: [{ word: "昨日(きのう)", meaning: "어제" }, { word: "今日(きょう)", meaning: "오늘" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "確認いたします。ルームサービス4,200円とレイトチェックアウト3,000円で、追加のご精算は合計7,200円になります。明細をご確認ください。",
            translation: "확인해 보겠습니다. 룸서비스 4,200엔과 레이트 체크아웃 3,000엔 해서 추가 정산 금액은 총 7,200엔입니다. 명세서를 확인해 주세요.",
            expressions: [{ phrase: "追加のご精算は合計〜円になります", meaning: "추가 정산 금액은 총 ~엔입니다" }],
            vocabulary: [{ word: "精算(せいさん)", meaning: "정산" }, { word: "明細(めいさい)", meaning: "명세서, 세부 내역" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、間違いありません。このクレジットカードで支払います。領収書も発行していただけますか？",
            translation: "네, 정확합니다(틀림없습니다). 이 신용카드로 결제할게요. 영수증도 발급해 주실 수 있나요?",
            expressions: [{ phrase: "はい、間違いありません", meaning: "네, 내역이 틀림없습니다(정확합니다)" }, { phrase: "領収書も発行していただけますか？", meaning: "영수증도 발행해 주실 수 있나요?" }],
            vocabulary: [{ word: "間違い(まちがい)", meaning: "틀림, 착오" }, { word: "領収書(りょうしゅうしょ)", meaning: "영수증" }, { word: "発行(はっこう)する", meaning: "발행하다, 발급하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "かしこまりました。こちらが領収書とご宿泊明細書でございます。またのお越しを心よりお待ちしております！",
            translation: "알겠습니다. 여기 영수증과 숙박 명세서입니다. 다음에 또 방문해 주시기를 진심으로 기다리겠습니다!",
            expressions: [{ phrase: "またのお越しを心よりお待ちしております", meaning: "다음에 또 찾아주시기를 진심으로 기다리겠습니다 (호텔·백화점의 최고급 작별 인사)" }],
            vocabulary: [{ word: "宿泊明細書(しゅくはくめいさいしょ)", meaning: "숙박 명세서" }, { word: "心(こころ)より", meaning: "진심으로, 마음으로부터" }]
          }
        ]
      },
      {
        id: 18,
        title: "체크아웃 후 공항 가기 전까지 짐 보관",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "今チェックアウトしたのですが、飛行機の時間が夜なので、夕方4時半ごろまで荷物を預かっていただけますか？",
            translation: "방금 체크아웃했는데요, 비행기 시간이 밤이라서 오후 4시 반쯤까지 짐을 좀 맡아주실 수 있나요?",
            expressions: [{ phrase: "夕方4時半ごろまで荷物を預かっていただけますか？", meaning: "오후(저녁 무렵) 4시 반쯤까지 짐을 보관해 주실 수 있나요?" }],
            vocabulary: [{ word: "夕方(ゆうがた)", meaning: "저녁 무렵, 늦은 오후" }, { word: "4時半(よじはん)", meaning: "4시 30분" }, { word: "荷物(にもつ)", meaning: "짐, 수하물" }, { word: "預かる(あずかる)", meaning: "맡다, 보관하다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "もちろんです！チェックアウト後でも、当日中でしたら無料でお荷物をお預かりいたします。",
            translation: "물론이죠! 체크아웃하신 후라도 당일 중이라면 무료로 짐을 보관해 드립니다.",
            expressions: [{ phrase: "チェックアウト後でも、当日中でしたら無料で", meaning: "체크아웃 이후라도 당일 내라면 무료로" }],
            vocabulary: [{ word: "当日中(とうじつちゅう)", meaning: "당일 중, 오늘 안" }, { word: "無料(むりょう)", meaning: "무료" }]
          },
          {
            role: "투숙객", side: "right",
            text: "助かります！あの、お土産にチョコレートを買ったのですが、荷物置き場は涼しいですか？",
            translation: "다행이네요! 저기, 선물용으로 초콜릿을 샀는데 짐 보관실이 시원한 편인가요?",
            expressions: [{ phrase: "お土産にチョコレートを買ったのですが", meaning: "기념품(선물)으로 초콜릿을 샀는데요" }],
            vocabulary: [{ word: "お土産(みやげ)", meaning: "여행 기념품, 선물" }, { word: "荷物置き場(にもつおきば)", meaning: "짐 보관장소" }, { word: "涼しい(すずしい)", meaning: "시원하다, 서늘하다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "はい、クロークルームは冷房が効いておりますし、もし要冷蔵のお土産でしたら専用の冷蔵庫でお預かりすることも可能ですよ！",
            translation: "네, 짐 보관실(클록룸)은 냉방이 잘 되고 있고, 만약 냉장 보관이 필요한 기념품이라면 전용 냉장고에 따로 맡아 드릴 수도 있습니다!",
            expressions: [{ phrase: "要冷蔵のお土産でしたら専用の冷蔵庫で", meaning: "냉장 보관이 필요한 선물이라면 전용 냉장고에서" }],
            vocabulary: [{ word: "冷房(れいぼう)が効く(きく)", meaning: "냉방이 잘 되다" }, { word: "要冷蔵(ようれいぞう)", meaning: "냉장 보관 필요" }, { word: "専用(せんよう)", meaning: "전용" }]
          },
          {
            role: "투숙객", side: "right",
            text: "常温のチョコレートなので冷房の効いた部屋で十分です！戻ってきたとき、ロビーの化粧室で少し服を着替えてもいいですか？",
            translation: "실온 보관 초콜릿이라 냉방이 되는 보관실이면 충분합니다! 이따 짐 찾으러 돌아왔을 때 로비 화장실에서 옷을 좀 갈아입어도 될까요?",
            expressions: [{ phrase: "ロビーの化粧室で少し服を着替えてもいいですか？", meaning: "로비 화장실에서 잠시 옷을 갈아입어도 될까요?" }],
            vocabulary: [{ word: "常温(じょうおん)", meaning: "상온, 실온" }, { word: "十分(じゅうぶん)", meaning: "충분함" }, { word: "化粧室(けしょうしつ)", meaning: "화장실 (호텔·백화점에서 쓰는 품격 있는 표현)" }, { word: "着替える(きがえる)", meaning: "(옷을) 갈아입다" }]
          },
          {
            role: "벨데스크 직원", side: "left",
            text: "はい、1階奥に広い多目的化粧室がございますのでご自由にお使いください。こちらが3点分の引換証です！",
            translation: "네, 1층 안쪽에 넓은 다목적 화장실이 있으니 자유롭게 이용해 주세요. 여기 짐 3개에 대한 보관증입니다!",
            expressions: [{ phrase: "広い多目的化粧室がございます", meaning: "넓은 다목적 화장실(가족 화장실)이 있습니다" }],
            vocabulary: [{ word: "1階奥(いっかいおく)", meaning: "1층 안쪽" }, { word: "広い(ひろい)", meaning: "넓다" }, { word: "3点分(さんてんぶん)", meaning: "(짐) 3개분" }]
          }
        ]
      },
      {
        id: 19,
        title: "호텔 공항 셔틀버스 예약하기",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません、このホテルから空港の国際線ターミナルまで行くシャトルバスは出ていますか？",
            translation: "실례합니다, 이 호텔에서 공항 국제선 터미널까지 가는 셔틀버스가 운행되나요?",
            expressions: [{ phrase: "国際線ターミナルまで行くシャトルバスは出ていますか？", meaning: "국제선 터미널까지 가는 셔틀버스가 출발하나요(있나요)?" }],
            vocabulary: [{ word: "空港(くうこう)", meaning: "공항" }, { word: "国際線(こくさいせん)", meaning: "국제선" }, { word: "出る(でる)", meaning: "(버스가) 출발하다, 운행되다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "はい、ホテルの正面玄関から1時間おきに空港リムジンバスが運行しております。事前予約制となっております。",
            translation: "네, 호텔 정문 현관에서 1시간 간격으로 공항 리무진 버스가 운행되고 있습니다. 사전 예약제로 운영됩니다.",
            expressions: [{ phrase: "正面玄関から1時間おきに", meaning: "호텔 정문 현관에서 1시간 간격으로" }, { phrase: "事前予約制となっております", meaning: "사전 예약제로 운영되고 있습니다" }],
            vocabulary: [{ word: "正面玄関(しょうめんげんかん)", meaning: "정문 현관" }, { word: "1時間(いちじかん)おき", meaning: "1시간 간격" }, { word: "運行(うんこう)する", meaning: "운행하다" }, { word: "事前予約制(じぜんよやくせい)", meaning: "사전 예약제" }]
          },
          {
            role: "투숙객", side: "right",
            text: "今日の午後4時発のバスに、大人2人と5歳の子ども1人で予約できますか？",
            translation: "오늘 오후 4시에 출발하는 버스에 성인 두 명과 만 5세 아이 한 명 예약할 수 있나요?",
            expressions: [{ phrase: "今日の午後4時発のバスに", meaning: "오늘 오후 4시 출발 버스에" }],
            vocabulary: [{ word: "午後4時発(ごごよじはつ)", meaning: "오후 4시 출발" }, { word: "大人(おとな)", meaning: "성인" }, { word: "5歳(ごさい)", meaning: "5세" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "お調べいたします…はい、午後4時発の便にまだ空席がございます！お子様も座席を1つ使われますか？",
            translation: "확인해 보겠습니다... 네, 오후 4시 출발 편에 아직 빈자리가 있습니다! 어린이도 단독 좌석을 하나 사용하시나요?",
            expressions: [{ phrase: "まだ空席がございます", meaning: "아직 빈자리가 남아 있습니다" }],
            vocabulary: [{ word: "便(びん)", meaning: "(버스·항공) 편" }, { word: "空席(くうせき)", meaning: "빈자리, 공석" }, { word: "座席(ざせき)", meaning: "좌석" }]
          },
          {
            role: "투숙객", side: "right",
            text: "はい、1時間ほど乗るので子どもの席も確保したいです。料金はいくらですか？",
            translation: "네, 1시간 정도 타야 해서 아이 좌석도 잡고 싶어요. 요금은 얼마인가요?",
            expressions: [{ phrase: "子どもの席も確保したいです", meaning: "아이의 좌석도 확보하고(잡고) 싶습니다" }],
            vocabulary: [{ word: "乗る(のる)", meaning: "타다" }, { word: "確保(かくほ)する", meaning: "확보하다" }, { word: "料金(りょうきん)", meaning: "요금" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ご宿泊者様向けの無料シャトルバスですので料金はかかりません！3席ご予約いたしましたので、出発10分前の3時50分までに正面玄関へお越しください。",
            translation: "투숙객 전용 무료 셔틀버스라서 요금은 들지 않습니다! 세 자리 예약해 두었으니 출발 10분 전인 3시 50분까지 정문 현관으로 나와 주세요.",
            expressions: [{ phrase: "ご宿泊者様向けの無料シャトルバス", meaning: "투숙객을 위한 무료 셔틀버스" }],
            vocabulary: [{ word: "3席(さんせき)", meaning: "3석, 세 자리" }, { word: "出発10分前(しゅっぱつじゅっぷんまえ)", meaning: "출발 10분 전" }]
          }
        ]
      },
      {
        id: 20,
        title: "객실에 두고 온 분실물 확인 요청",
        lines: [
          {
            role: "투숙객", side: "right",
            text: "すみません！1時間ほど前に1108号室をチェックアウトしたのですが、部屋に忘れ物をしてしまったことに気づきました。",
            translation: "실례합니다! 1시간 정도 전에 1108호에서 체크아웃했는데, 방에 물건을 두고 온 걸 방금 깨달았어요.",
            expressions: [{ phrase: "部屋に忘れ物をしてしまったことに気づきました", meaning: "객실에 분실물(두고 온 물건)이 있다는 것을 깨달았습니다" }],
            vocabulary: [{ word: "1時間(いちじかん)ほど前(まえ)", meaning: "1시간 정도 전" }, { word: "忘れ物(わすれもの)", meaning: "두고 온 물건, 분실물" }, { word: "気づく(きづく)", meaning: "깨닫다, 알아차리다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "イム様ですね！すぐに11階の清掃スタッフに連絡して確認いたします。どのようなお品物でしょうか？",
            translation: "임 고객님이시군요! 지금 바로 11층 청소 담당 직원에게 연락해서 확인해 보겠습니다. 어떤 물건인가요?",
            expressions: [{ phrase: "すぐに清掃スタッフに連絡して確認いたします", meaning: "즉시 객실 청소 직원에게 연락해 확인하겠습니다" }],
            vocabulary: [{ word: "清掃(せいそう)スタッフ", meaning: "청소 담당 직원" }, { word: "連絡(れんらく)する", meaning: "연락하다" }, { word: "品物(しなもの)", meaning: "물건, 물품" }]
          },
          {
            role: "투숙객", side: "right",
            text: "子どもがいつも抱っこして寝ている白いウサギのぬいぐるみです。ベッドの布団や枕の間に挟まっているかもしれません。",
            translation: "아이가 늘 안고 자는 하얀 토끼 봉제인형이에요. 침대 이불이나 베개 사이에 끼어 있을지도 모르겠습니다.",
            expressions: [{ phrase: "白いウサギのぬいぐるみ", meaning: "하얀 토끼 봉제인형" }, { phrase: "布団や枕の間に挟まっている", meaning: "이불이나 베개 사이에 끼어 있다" }],
            vocabulary: [{ word: "抱っこ(だっこ)する", meaning: "품에 안다" }, { word: "寝る(ねる)", meaning: "자다" }, { word: "白い(しろい)", meaning: "하얀" }, { word: "ぬいぐるみ", meaning: "봉제인형" }, { word: "布団(ふとん)", meaning: "이불" }, { word: "枕(まくら)", meaning: "베개" }, { word: "挟まる(はさまる)", meaning: "끼이다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "ただいま連絡が取れました！1108号室の枕の間から白いウサギのぬいぐるみが見つかり、今スタッフがフロントへ持って降りてきております！",
            translation: "방금 연락이 닿았습니다! 1108호 베개 사이에서 하얀 토끼 인형을 발견해서 지금 직원이 프런트로 가지고 내려오는 중입니다!",
            expressions: [{ phrase: "白いウサギのぬいぐるみが見つかり", meaning: "하얀 토끼 인형이 발견되어" }],
            vocabulary: [{ word: "連絡(れんらく)が取れる(とれる)", meaning: "연락이 닿다" }, { word: "見つかる(みつかる)", meaning: "발견되다, 찾아지다" }, { word: "降りてくる(おりてくる)", meaning: "내려오다" }]
          },
          {
            role: "투숙객", side: "right",
            text: "ああ、本当によかったです！まだ駅の近くにいたので急いで戻ってきました。見つけてくださってありがとうございます！",
            translation: "아, 정말 다행이네요! 아직 역 근처에 있었기 때문에 급히 돌아왔거든요. 찾아주셔서 정말 감사합니다!",
            expressions: [{ phrase: "見つけてくださってありがとうございます！", meaning: "찾아주셔서 정말 감사합니다!" }],
            vocabulary: [{ word: "駅(えき)の近く(ちかく)", meaning: "역 근처" }, { word: "急いで(いそいで)", meaning: "서둘러, 급히" }, { word: "戻る(もどる)", meaning: "돌아오다" }, { word: "見つける(みつける)", meaning: "찾아내다, 발견하다" }]
          },
          {
            role: "프런트 직원", side: "left",
            text: "お子様の大事なぬいぐるみが無事に見つかって何よりです！どうぞお気をつけてご帰国くださいませ。",
            translation: "아이의 소중한 인형을 무사히 찾게 되어 정말 다행입니다! 조심히 안전하게 귀국하시길 바랍니다.",
            expressions: [{ phrase: "無事に見つかって何よりです", meaning: "무사히 찾게 되어 무엇보다 다행입니다" }, { phrase: "どうぞお気をつけてご帰国くださいませ", meaning: "조심히 귀국하시길 바랍니다" }],
            vocabulary: [{ word: "大事(だいじ)な", meaning: "소중한" }, { word: "無事(ぶじ)に", meaning: "무사히" }, { word: "帰国(きこく)", meaning: "귀국" }]
          }
        ]
      }
    ]
  },
  convenience: {
    // ==========================================
    // 1. 영어 (English) - 편의점 1~20번 전체 완성본
    // ==========================================
    en: [
      {
        id: 1,
        title: "도시락 구매 후 전자레인지 데우기",
        lines: [
          {
            role: "점원", side: "left",
            text: "Hi! Will this chicken teriyaki bento box and bottled tea be everything for you?",
            translation: "안녕하세요! 이 치킨 데리야키 도시락과 차 음료 한 병이 전부인가요?",
            expressions: [{ phrase: "Will ~ be everything for you?", meaning: "계산하실 상품이 ~로 전부인가요?" }],
            vocabulary: [{ word: "bento box", meaning: "도시락 (lunch box)" }, { word: "bottled tea", meaning: "페트병에 든 차 음료" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, that's all. Could you please heat up the bento box in the microwave for me?",
            translation: "네, 그게 전부입니다. 도시락을 전자레인지에 좀 데워 주실 수 있나요?",
            expressions: [{ phrase: "heat up ~ in the microwave", meaning: "~을 전자레인지에 데우다 (warm up이라고도 흔히 표현)" }],
            vocabulary: [{ word: "heat up", meaning: "데우다, 가열하다" }, { word: "microwave", meaning: "전자레인지" }]
          },
          {
            role: "점원", side: "left",
            text: "Sure! Let me take out the small packet of tartar sauce before putting it in the microwave.",
            translation: "물론이죠! 전자레인지에 넣기 전에 안에 든 작은 타르타르 소스 봉지는 먼저 빼낼게요.",
            expressions: [{ phrase: "take out the small packet of ~", meaning: "~ 소포장 봉지를 꺼내다" }],
            vocabulary: [{ word: "packet", meaning: "작은 비닐봉지(소스 팩)" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, thank you! How long does it take to heat up?",
            translation: "아, 감사합니다! 데우는 데 시간이 얼마나 걸리나요?",
            expressions: [{ phrase: "How long does it take to heat up?", meaning: "데우는 데 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "take", meaning: "(시간이) 걸리다" }]
          },
          {
            role: "점원", side: "left",
            text: "About one minute! Be careful when holding the container—the bottom is quite hot.",
            translation: "약 1분 걸립니다! 용기를 잡으실 때 바닥이 꽤 뜨거우니 조심하세요.",
            expressions: [{ phrase: "Be careful when holding the container", meaning: "용기를 잡을 때 뜨거우니 조심하세요" }],
            vocabulary: [{ word: "container", meaning: "용기, 그릇" }, { word: "bottom", meaning: "바닥, 아랫부분" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it, I'll hold it by the edges. Thank you so much!",
            translation: "알겠습니다, 가장자리 부분을 잡을게요. 정말 감사합니다!",
            expressions: [{ phrase: "hold it by the edges", meaning: "용기의 테두리(가장자리)를 잡다" }],
            vocabulary: [{ word: "edge", meaning: "가장자리, 테두리" }]
          }
        ]
      },
      {
        id: 2,
        title: "젓가락, 숟가락, 물티슈 챙겨 받기",
        lines: [
          {
            role: "점원", side: "left",
            text: "Your pasta and soup are all warmed up! Would you like a fork and a spoon with your meal?",
            translation: "파스타와 수프가 다 데워졌습니다! 식사하실 포크와 숟가락을 챙겨 드릴까요?",
            expressions: [{ phrase: "all warmed up", meaning: "완전히 다 따뜻하게 데워진" }],
            vocabulary: [{ word: "fork", meaning: "포크" }, { word: "spoon", meaning: "숟가락" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, please! And could I also get two pairs of disposable chopsticks for the dumplings?",
            translation: "네, 부탁드려요! 그리고 만두 먹을 일회용 젓가락도 두 세트 주실 수 있나요?",
            expressions: [{ phrase: "two pairs of disposable chopsticks", meaning: "일회용 젓가락 두 벌(두 세트) - 젓가락은 짝을 이루므로 pair 단위 사용" }],
            vocabulary: [{ word: "disposable", meaning: "일회용의" }, { word: "chopsticks", meaning: "젓가락" }, { word: "dumpling", meaning: "만두" }]
          },
          {
            role: "점원", side: "left",
            text: "Of course! Here are two pairs of wooden chopsticks, a spoon, and a fork.",
            translation: "물론이죠! 여기 나무젓가락 두 세트와 숟가락, 포크입니다.",
            expressions: [{ phrase: "wooden chopsticks", meaning: "나무젓가락" }],
            vocabulary: [{ word: "wooden", meaning: "나무로 만든" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you. Do you happen to have any wet wipes or paper napkins?",
            translation: "감사합니다. 혹시 물티슈나 종이 냅킨도 있나요?",
            expressions: [{ phrase: "wet wipes or paper napkins", meaning: "물티슈나 종이 냅킨" }],
            vocabulary: [{ word: "wet wipe", meaning: "물티슈 (wet tissue는 콩글리시이므로 wet wipe / wet towelette 사용)" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! I just put a couple of wet wipes and extra napkins in your bag.",
            translation: "네! 봉투 안에 물티슈 두어 개와 여분의 냅킨을 넣어 드렸습니다.",
            expressions: [{ phrase: "a couple of wet wipes", meaning: "물티슈 두어 개" }],
            vocabulary: [{ word: "extra", meaning: "여분의, 추가의" }]
          },
          {
            role: "손님", side: "right",
            text: "You're so kind. Thanks a lot!",
            translation: "정말 친절하시네요. 대단히 감사합니다!",
            expressions: [{ phrase: "You're so kind.", meaning: "정말 친절하시네요." }],
            vocabulary: [{ word: "kind", meaning: "친절한" }]
          }
        ]
      },
      {
        id: 3,
        title: "교통카드 구매 및 현금 충전하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, do you sell reloadable transit cards here?",
            translation: "실례합니다, 여기서 충전식 교통카드를 판매하나요?",
            expressions: [{ phrase: "reloadable transit cards", meaning: "충전해서 계속 쓸 수 있는 대중교통 카드" }],
            vocabulary: [{ word: "reloadable", meaning: "충전식의 (top-up 가능한)" }, { word: "transit card", meaning: "교통카드" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, we do! A new card costs $5, and we also have cute character designs for children.",
            translation: "네, 판매합니다! 새 카드는 5달러이고, 어린이용 귀여운 캐릭터 디자인 카드도 있어요.",
            expressions: [{ phrase: "A new card costs ~", meaning: "새 카드 공카드 가격은 ~입니다" }],
            vocabulary: [{ word: "character design", meaning: "캐릭터 디자인" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll buy two regular adult cards and one kids' card, please. Can I also load money onto them right now?",
            translation: "일반 성인용 카드 두 장과 어린이용 카드 한 장 살게요. 지금 바로 카드에 금액 충전도 가능한가요?",
            expressions: [{ phrase: "load money onto them", meaning: "교통카드에 돈을 충전하다 (top up / add value라고도 함)" }],
            vocabulary: [{ word: "regular", meaning: "일반의, 기본의" }, { word: "load", meaning: "(금액을) 충전하다" }]
          },
          {
            role: "점원", side: "left",
            text: "Sure! How much would you like to top up on each card? Note that transit card top-ups are cash only.",
            translation: "물론이죠! 각 카드에 얼마씩 충전해 드릴까요? 참고로 교통카드 충전은 현금 결제만 가능합니다.",
            expressions: [{ phrase: "How much would you like to top up?", meaning: "얼마를 충전하시겠어요?" }, { phrase: "cash only", meaning: "현금 결제만 가능" }],
            vocabulary: [{ word: "top up", meaning: "(선불카드 등을) 충전하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Please put $20 on each of the two adult cards and $10 on the kids' card. Here is the cash.",
            translation: "성인 카드 두 장에는 각각 20달러씩, 어린이 카드에는 10달러를 충전해 주세요. 여기 현금 있습니다.",
            expressions: [{ phrase: "put $20 on each of ~", meaning: "~에 각각 20달러씩 충전하다" }],
            vocabulary: [{ word: "each", meaning: "각각" }]
          },
          {
            role: "점원", side: "left",
            text: "Please place the cards one by one on this reader until it beeps. All done, and here are your receipts!",
            translation: "삐 소리가 날 때까지 이 단말기 위에 카드를 한 장씩 차례로 올려주세요. 모두 완료되었고, 여기 영수증입니다!",
            expressions: [{ phrase: "one by one on this reader until it beeps", meaning: "신호음(삐 소리)이 날 때까지 단말기에 한 장씩 차례대로" }],
            vocabulary: [{ word: "reader", meaning: "카드 인식기(단말기)" }, { word: "beep", meaning: "삐 소리가 나다" }]
          }
        ]
      },
      {
        id: 4,
        title: "봉투 필요 여부 답하고 구매하기",
        lines: [
          {
            role: "점원", side: "left",
            text: "Hello! Did you find everything okay today? Would you like a bag for your items?",
            translation: "안녕하세요! 오늘 찾으시는 물건은 다 잘 고르셨나요? 물건 담으실 봉투가 필요하신가요?",
            expressions: [{ phrase: "Would you like a bag for your items?", meaning: "상품을 담을 봉투가 필요하신가요?" }],
            vocabulary: [{ word: "item", meaning: "물품, 구매 상품" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, I need a bag, please. How much is a plastic bag?",
            translation: "네, 봉투 하나 주세요. 비닐봉투는 얼마인가요?",
            expressions: [{ phrase: "How much is a plastic bag?", meaning: "비닐봉투 가격은 얼마인가요?" }],
            vocabulary: [{ word: "plastic bag", meaning: "비닐봉투 (종이봉투는 paper bag)" }]
          },
          {
            role: "점원", side: "left",
            text: "A medium bag is 10 cents and a large one is 20 cents. Which size do you need?",
            translation: "중간 사이즈는 10센트이고 큰 사이즈는 20센트입니다. 어떤 사이즈로 드릴까요?",
            expressions: [{ phrase: "Which size do you need?", meaning: "어느 사이즈가 필요하신가요?" }],
            vocabulary: [{ word: "medium", meaning: "중간 사이즈" }, { word: "large", meaning: "큰 사이즈" }]
          },
          {
            role: "손님", side: "right",
            text: "A large bag, please. Oh, could you pack the cold drinks separately from the hot food?",
            translation: "큰 봉투로 주세요. 아, 차가운 음료는 따뜻한 음식과 따로 담아 주실 수 있나요?",
            expressions: [{ phrase: "pack the cold drinks separately from the hot food", meaning: "차가운 음료를 따뜻한 음식과 분리해서 따로 담다" }],
            vocabulary: [{ word: "separately", meaning: "따로, 별도로" }]
          },
          {
            role: "점원", side: "left",
            text: "Good idea! I'll put the hot bento in a small free paper bag first so it doesn't warm up your drinks.",
            translation: "좋은 생각입니다! 음료가 미지근해지지 않도록 따뜻한 도시락은 먼저 작은 무료 종이봉투에 감싸서 넣어 드릴게요.",
            expressions: [{ phrase: "so it doesn't warm up your drinks", meaning: "차가운 음료가 데워지지(미지근해지지) 않도록" }],
            vocabulary: [{ word: "paper bag", meaning: "종이봉투" }]
          },
          {
            role: "손님", side: "right",
            text: "That's so considerate! Thank you very much.",
            translation: "정말 세심하게 배려해 주시네요! 대단히 감사합니다.",
            expressions: [{ phrase: "That's so considerate!", meaning: "정말 배려심이 깊으시네요!" }],
            vocabulary: [{ word: "considerate", meaning: "배려심 깊은, 사려 깊은" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 캔음료 및 즉석 커피 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, it's chilly outside today. Where do you keep the hot canned drinks?",
            translation: "실례합니다, 오늘 밖이 꽤 쌀쌀한데요. 따뜻한 캔음료는 어디에 진열되어 있나요?",
            expressions: [{ phrase: "Where do you keep the hot canned drinks?", meaning: "따뜻한 캔음료(온장고 음료)는 어디에 있나요?" }],
            vocabulary: [{ word: "chilly", meaning: "쌀쌀한" }, { word: "canned drink", meaning: "캔음료" }]
          },
          {
            role: "점원", side: "left",
            text: "The warmer cabinet with hot canned coffee, corn soup, and hot lemon tea is right next to the cash register!",
            translation: "따뜻한 캔커피와 옥수수수프, 따뜻한 레몬티가 들어 있는 온장고는 계산대 바로 옆에 있습니다!",
            expressions: [{ phrase: "warmer cabinet", meaning: "음료를 따뜻하게 보관하는 온장고" }],
            vocabulary: [{ word: "cash register", meaning: "계산대, 금전등록기" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, I see the orange shelf! I'd also like to get a cup of freshly brewed coffee from the machine.",
            translation: "오, 주황색 선반이 보이네요! 그리고 커피 머신에서 뽑는 즉석 원두커피도 한 잔 사고 싶어요.",
            expressions: [{ phrase: "freshly brewed coffee from the machine", meaning: "편의점 커피 머신에서 바로 내리는 즉석 원두커피" }],
            vocabulary: [{ word: "brewed coffee", meaning: "추출한 원두커피" }]
          },
          {
            role: "점원", side: "left",
            text: "For the machine coffee, you pay at the counter first, and I'll hand you an empty paper cup to use at the machine.",
            translation: "머신 커피는 카운터에서 먼저 결제하시면, 기계에서 내려 드실 수 있는 빈 종이컵을 건네드립니다.",
            expressions: [{ phrase: "pay at the counter first", meaning: "카운터에서 먼저 결제하다" }],
            vocabulary: [{ word: "empty", meaning: "비어 있는" }, { word: "paper cup", meaning: "종이컵" }]
          },
          {
            role: "손님", side: "right",
            text: "Got it! One regular hot cafe latte cup and this hot canned corn soup, please.",
            translation: "알겠습니다! 따뜻한 카페라떼 레귤러 사이즈 컵 하나랑 이 따뜻한 옥수수수프 캔 하나 주세요.",
            expressions: [{ phrase: "One regular hot cafe latte cup", meaning: "따뜻한 라떼 일반 사이즈 컵 1개" }],
            vocabulary: [{ word: "corn soup", meaning: "옥수수수프" }]
          },
          {
            role: "점원", side: "left",
            text: "Here is your cup! Just place it in the coffee machine to your left and press the 'Hot Latte - Regular' button.",
            translation: "여기 컵 있습니다! 왼쪽에 있는 커피 머신에 컵을 놓으시고 '핫 라떼 - 레귤러' 버튼만 누르시면 됩니다.",
            expressions: [{ phrase: "press the ~ button", meaning: "~ 버튼을 누르다" }],
            vocabulary: [{ word: "place", meaning: "놓다, 위치시키다" }]
          }
        ]
      },
      {
        id: 6,
        title: "컵라면 구매 후 뜨거운 물 위치 묻기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I'd like to buy these two cup noodles. Do you have a hot water dispenser here in the store?",
            translation: "안녕하세요! 이 컵라면 두 개를 사려고 하는데요. 매장 안에 뜨거운 물 나오는 온수기가 있나요?",
            expressions: [{ phrase: "hot water dispenser", meaning: "뜨거운 물이 나오는 온수기/포트" }],
            vocabulary: [{ word: "cup noodles", meaning: "컵라면 (instant cup ramen)" }, { word: "dispenser", meaning: "(물·음료) 공급기, 디스펜서" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, we have an electric kettle with boiling water right next to the microwave over there!",
            translation: "네, 저쪽 전자레인지 바로 옆에 끓는 물이 담긴 전기포트(온수통)가 있습니다!",
            expressions: [{ phrase: "electric kettle with boiling water", meaning: "펄펄 끓는 물이 들어 있는 전기포트(대형 보온포트)" }],
            vocabulary: [{ word: "electric kettle", meaning: "전기포트" }, { word: "boiling water", meaning: "끓는 물" }]
          },
          {
            role: "손님", side: "right",
            text: "Awesome! Can we eat the noodles at that window counter inside the store?",
            translation: "좋네요! 매장 안 저기 창가 쪽 바 테이블에서 라면을 먹고 가도 되나요?",
            expressions: [{ phrase: "eat ~ at that window counter inside the store", meaning: "매장 내 창가 시식대에서 ~을 먹고 가다" }],
            vocabulary: [{ word: "window counter", meaning: "창가 쪽 바 형태 테이블" }]
          },
          {
            role: "점원", side: "left",
            text: "Sure, our eat-in counter is open until 10:00 PM! Just make sure to peel the lid back only halfway before pouring the water.",
            translation: "그럼요, 매장 내 취식 코너는 밤 10시까지 이용 가능합니다! 물을 부으시기 전에 뚜껑은 절반만 개봉해 주세요.",
            expressions: [{ phrase: "peel the lid back only halfway", meaning: "컵라면 뚜껑을 절반까지만 벗겨 열다" }],
            vocabulary: [{ word: "eat-in counter", meaning: "매장 내 시식 코너" }, { word: "pour", meaning: "(물·액체를) 붓다" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! Where should we throw away the empty cups when we're done?",
            translation: "감사합니다! 다 먹고 난 빈 컵은 어디에 버리면 되나요?",
            expressions: [{ phrase: "Where should we throw away the empty cups?", meaning: "다 먹은 빈 용기는 어디에 버려야 하나요?" }],
            vocabulary: [{ word: "throw away", meaning: "버리다" }]
          },
          {
            role: "점원", side: "left",
            text: "You can pour any leftover broth into the small sink bin and toss the cups into the trash can below it.",
            translation: "남은 국물은 작은 싱크대 물받이 통에 버리시고, 빈 컵은 그 아래 쓰레기통에 버려주시면 됩니다.",
            expressions: [{ phrase: "pour any leftover broth into ~", meaning: "남은 라면 국물을 ~에 따라 버리다" }],
            vocabulary: [{ word: "leftover broth", meaning: "먹고 남은 국물" }, { word: "trash can", meaning: "쓰레기통 (bin)" }]
          }
        ]
      },
      {
        id: 7,
        title: "어묵·핫푸드 카운터에서 주문하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! Everything in the hot food display case looks so good. How do I order from here?",
            translation: "안녕하세요! 계산대 옆 핫푸드 진열장 음식들이 정말 맛있어 보이는데요. 어떻게 주문하면 되나요?",
            expressions: [{ phrase: "hot food display case", meaning: "계산대 옆 따뜻한 즉석조리 식품(치킨·고로케 등) 진열장" }],
            vocabulary: [{ word: "display case", meaning: "진열장, 쇼케이스" }]
          },
          {
            role: "점원", side: "left",
            text: "Just tell me which items you'd like, and I'll pack them for you! Our crispy boneless fried chicken is freshly made.",
            translation: "원하시는 메뉴를 말씀만 해주시면 제가 담아 드립니다! 바삭한 순살 치킨이 방금 막 튀겨져 나왔어요.",
            expressions: [{ phrase: "crispy boneless fried chicken", meaning: "바삭한 순살 후라이드 치킨" }],
            vocabulary: [{ word: "boneless", meaning: "뼈 없는, 순살의" }, { word: "freshly made", meaning: "갓 조리된" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll take one piece of the boneless chicken, one potato croquette, and a steamed pork bun, please.",
            translation: "순살 치킨 한 조각이랑 감자 고로케 하나, 그리고 따뜻한 고기 호빵(찐빵) 하나 주세요.",
            expressions: [{ phrase: "steamed pork bun", meaning: "따뜻하게 찐 고기만두/고기호빵" }],
            vocabulary: [{ word: "croquette", meaning: "고로케, 크로켓 ([크로켓]으로 발음)" }, { word: "steamed bun", meaning: "찐빵, 호빵" }]
          },
          {
            role: "점원", side: "left",
            text: "Great choices! Would you like any mustard or ketchup packets for the croquette?",
            translation: "좋은 선택이십니다! 고로케에 뿌려 드실 머스타드나 케첩 소스를 챙겨 드릴까요?",
            expressions: [{ phrase: "mustard or ketchup packets", meaning: "일회용 머스타드나 케첩 소스 팩" }],
            vocabulary: [{ word: "mustard", meaning: "머스타드, 겨자 소스" }]
          },
          {
            role: "손님", side: "right",
            text: "One ketchup packet, please! Also, can I get a cup of fish cake soup from the pot?",
            translation: "케첩 하나만 주세요! 그리고 저기 냄비에 있는 어묵탕도 한 컵 살 수 있나요?",
            expressions: [{ phrase: "fish cake soup", meaning: "어묵탕, 오뎅 국물" }],
            vocabulary: [{ word: "fish cake", meaning: "어묵" }, { word: "pot", meaning: "조리용 냄비, 통" }]
          },
          {
            role: "점원", side: "left",
            text: "Sure! Pick two skewers you like, and I'll ladle plenty of hot broth into the cup with a tight lid.",
            translation: "그럼요! 원하시는 꼬치 두 개를 고르시면 제가 따뜻한 국물을 넉넉히 퍼서 튼튼한 뚜껑을 덮어 드릴게요.",
            expressions: [{ phrase: "ladle plenty of hot broth into the cup", meaning: "국자로 따뜻한 국물을 컵에 듬뿍 떠 넣다" }],
            vocabulary: [{ word: "skewer", meaning: "꼬치" }, { word: "ladle", meaning: "국자, 국자로 퍼 담다" }]
          }
        ]
      },
      {
        id: 8,
        title: "ATM 위치 및 해외 카드 출금 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, do you have an ATM inside this convenience store?",
            translation: "실례합니다, 이 편의점 안에 현금인출기(ATM)가 있나요?",
            expressions: [{ phrase: "do you have an ATM inside ~?", meaning: "~ 내부에 ATM 기기가 있나요?" }],
            vocabulary: [{ word: "ATM", meaning: "현금자동입출금기 (Automated Teller Machine)" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, the ATM is right over there in the back corner next to the magazine rack.",
            translation: "네, ATM은 저기 안쪽 구석 잡지 진열대 바로 옆에 있습니다.",
            expressions: [{ phrase: "in the back corner next to ~", meaning: "~ 옆 안쪽 모퉁이(구석)에" }],
            vocabulary: [{ word: "magazine rack", meaning: "잡지 진열대" }]
          },
          {
            role: "손님", side: "right",
            text: "Does that ATM accept foreign debit cards like Visa or Mastercard for cash withdrawal?",
            translation: "저 ATM에서 비자나 마스터카드 같은 해외 체크카드로도 현금 인출이 되나요?",
            expressions: [{ phrase: "accept foreign debit cards ~ for cash withdrawal", meaning: "해외 체크카드를 이용한 현금 출금을 지원하다" }],
            vocabulary: [{ word: "foreign", meaning: "해외 발행의, 외국의" }, { word: "debit card", meaning: "체크카드, 직불카드" }, { word: "cash withdrawal", meaning: "현금 인출" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, it supports international cards and has an English language button on the top right of the screen.",
            translation: "네, 해외 카드를 모두 지원하며 화면 오른쪽 상단에 영어(English) 언어 전환 버튼이 있습니다.",
            expressions: [{ phrase: "supports international cards", meaning: "국제(해외) 카드를 지원한다" }],
            vocabulary: [{ word: "screen", meaning: "화면" }]
          },
          {
            role: "손님", side: "right",
            text: "Thank you! If the ATM only gives out large bills, could you break a large bill for me at the counter?",
            translation: "감사합니다! 만약 ATM에서 고액권 지폐만 나오면 카운터에서 잔돈으로 좀 바꿔 주실 수 있나요?",
            expressions: [{ phrase: "break a large bill", meaning: "고액권 지폐를 잔돈(소액권)으로 깨다/바꾸다" }],
            vocabulary: [{ word: "large bill", meaning: "고액권 지폐 (영국에서는 large note)" }]
          },
          {
            role: "점원", side: "left",
            text: "You can actually choose 'Small Bills' on the ATM screen, or just buy a small item like water and I'll give you smaller bills as change!",
            translation: "ATM 화면에서 '소액권 선택(Small Bills)'을 누르실 수도 있고, 아니면 생수 같은 작은 물건을 하나 사시면 거스름돈으로 잔돈을 내어드릴게요!",
            expressions: [{ phrase: "give you smaller bills as change", meaning: "거스름돈으로 소액권 지폐들을 내어주다" }],
            vocabulary: [{ word: "change", meaning: "거스름돈, 잔돈" }]
          }
        ]
      },
      {
        id: 9,
        title: "편의점 택배 발송 및 수하물 보내기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hello! Can I ship a suitcase to the airport or our next hotel using the luggage delivery service here?",
            translation: "안녕하세요! 여기 편의점 택배 서비스를 이용해서 공항이나 다음 호텔로 캐리어를 보낼 수 있나요?",
            expressions: [{ phrase: "luggage delivery service", meaning: "수하물 택배 배송 서비스" }],
            vocabulary: [{ word: "ship", meaning: "(택배·화물을) 발송하다, 보내다" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, we handle luggage shipping! Where are you sending it, and when do you need it to arrive?",
            translation: "네, 수하물 택배 접수 가능합니다! 어디로 보내시나요? 그리고 언제까지 도착해야 하나요?",
            expressions: [{ phrase: "when do you need it to arrive?", meaning: "언제까지 도착해야 하나요?" }],
            vocabulary: [{ word: "handle", meaning: "(업무·서비스를) 취급하다" }, { word: "arrive", meaning: "도착하다" }]
          },
          {
            role: "손님", side: "right",
            text: "We're sending it to our hotel in the next city, and we're checking in there tomorrow afternoon.",
            translation: "다음 도시에서 묵을 호텔로 보내려고 하고, 내일 오후에 거기서 체크인할 예정이에요.",
            expressions: [{ phrase: "checking in there tomorrow afternoon", meaning: "내일 오후에 그곳에 체크인하다" }],
            vocabulary: [{ word: "next city", meaning: "다음 여행 도시" }]
          },
          {
            role: "점원", side: "left",
            text: "Since it's before the 3:00 PM cutoff time today, it qualifies for next-day delivery! Please fill out this waybill.",
            translation: "오늘 오후 3시 당일 수거 마감 시간 전이라서 내일 도착하는 익일 배송이 가능합니다! 이 운송장(송장)을 작성해 주세요.",
            expressions: [{ phrase: "before the 3:00 PM cutoff time", meaning: "오후 3시 택배 마감 시각 이전" }, { phrase: "next-day delivery", meaning: "익일(다음 날) 배송" }],
            vocabulary: [{ word: "cutoff time", meaning: "접수 마감 시간" }, { word: "waybill", meaning: "택배 운송장 (shipping label)" }]
          },
          {
            role: "손님", side: "right",
            text: "How is the shipping fee calculated? Do you measure the size and weight?",
            translation: "배송 요금은 어떻게 계산되나요? 크기와 무게를 재나요?",
            expressions: [{ phrase: "measure the size and weight", meaning: "가방의 규격(가로·세로·높이 합)과 무게를 측정하다" }],
            vocabulary: [{ word: "shipping fee", meaning: "배송비, 택배 요금" }, { word: "measure", meaning: "측정하다, 재다" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, I just measured your suitcase with the tape—it's a size 140, so the shipping fee is $18. Here is your tracking receipt!",
            translation: "네, 방금 줄자로 캐리어 규격을 쟀는데 140 사이즈여서 요금은 18달러입니다. 여기 송장 조회 번호가 적힌 영수증입니다!",
            expressions: [{ phrase: "tracking receipt", meaning: "배송 조회 번호(트래킹 넘버)가 적힌 접수 영수증" }],
            vocabulary: [{ word: "tape", meaning: "줄자 (measuring tape)" }]
          }
        ]
      },
      {
        id: 10,
        title: "우산 및 우비 위치 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! It suddenly started pouring outside. Where do you keep the umbrellas?",
            translation: "안녕하세요! 밖에 갑자기 폭우가 쏟아지기 시작했어요. 우산은 어디에 있나요?",
            expressions: [{ phrase: "It suddenly started pouring outside.", meaning: "밖에 갑자기 비가 억수같이 쏟아지기 시작했다." }],
            vocabulary: [{ word: "pour", meaning: "(비가) 억수같이 쏟아지다" }, { word: "umbrella", meaning: "우산" }]
          },
          {
            role: "점원", side: "left",
            text: "The umbrella stand is right by the front door! We have long clear vinyl umbrellas and compact folding umbrellas.",
            translation: "우산 진열대는 정문 바로 옆에 있습니다! 긴 투명 비닐우산과 작은 접이식 우산이 있어요.",
            expressions: [{ phrase: "clear vinyl umbrellas and compact folding umbrellas", meaning: "투명 비닐 장우산과 휴대용 접이식 우산" }],
            vocabulary: [{ word: "clear", meaning: "투명한" }, { word: "folding umbrella", meaning: "접이식 우산" }]
          },
          {
            role: "손님", side: "right",
            text: "Do you also sell disposable raincoats or ponchos? A poncho is easier for our child to wear.",
            translation: "혹시 일회용 우비(판초 우의)도 파나요? 아이는 우산보다 우비를 입히는 게 더 편해서요.",
            expressions: [{ phrase: "disposable raincoats or ponchos", meaning: "일회용 비옷이나 판초형 우비" }],
            vocabulary: [{ word: "raincoat", meaning: "우비, 비옷" }, { word: "poncho", meaning: "머리부터 뒤집어쓰는 판초 우의" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! On the bottom hook of that stand, we have both adult-sized and kids-sized rain ponchos.",
            translation: "네! 저 진열대 맨 아래쪽 고리에 성인용과 어린이용 판초 우비가 모두 걸려 있습니다.",
            expressions: [{ phrase: "adult-sized and kids-sized", meaning: "성인 사이즈와 어린이 사이즈" }],
            vocabulary: [{ word: "hook", meaning: "걸이, 고리" }]
          },
          {
            role: "손님", side: "right",
            text: "That's great! We'll take two clear umbrellas and one kids' rain poncho. Could you take the price tags off so we can use them right now?",
            translation: "정말 다행이네요! 투명 우산 두 개랑 어린이용 우비 하나 주세요. 지금 바로 쓰고 갈 수 있게 가격표 택을 좀 떼어 주시겠어요?",
            expressions: [{ phrase: "take the price tags off", meaning: "바로 사용할 수 있도록 가격표를 떼어내다(제거하다)" }],
            vocabulary: [{ word: "price tag", meaning: "가격표" }]
          },
          {
            role: "점원", side: "left",
            text: "Of course! I just snipped off the tags with scissors. Stay dry out there!",
            translation: "물론이죠! 가위로 택을 모두 잘라 드렸습니다. 비 맞지 않고 조심히 가세요!",
            expressions: [{ phrase: "Stay dry out there!", meaning: "비 오는 날 밖에서 비 맞지 말고 조심히 가세요! (우산 구매 시 점원의 단골 인사)" }],
            vocabulary: [{ word: "snip off", meaning: "(가위로 싹둑) 잘라내다" }, { word: "scissors", meaning: "가위" }]
          }
        ]
      },
      {
        id: 11,
        title: "스마트폰 충전 케이블/보조배터리 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, my phone is about to die. Do you sell phone charging cables or portable power banks?",
            translation: "실례합니다, 제 휴대폰 배터리가 곧 꺼질 것 같은데요. 충전 케이블이나 휴대용 보조배터리를 판매하나요?",
            expressions: [{ phrase: "my phone is about to die", meaning: "내 휴대폰 배터리가 방전되어 곧 꺼지기 직전이다" }],
            vocabulary: [{ word: "charging cable", meaning: "충전 케이블" }, { word: "portable power bank", meaning: "휴대용 보조배터리" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, our mobile accessories are on aisle 1! Are you looking for a USB-C cable or an iPhone Lightning cable?",
            translation: "네, 모바일 액세서리 코너는 1번 통로에 있습니다! USB-C타입 케이블을 찾으시나요, 아니면 아이폰 라이트닝 케이블을 찾으시나요?",
            expressions: [{ phrase: "USB-C cable or an iPhone Lightning cable", meaning: "C타입 충전선 또는 구형 아이폰 8핀(라이트닝) 충전선" }],
            vocabulary: [{ word: "accessory (accessories)", meaning: "주변기기, 액세서리" }]
          },
          {
            role: "손님", side: "right",
            text: "I need a USB-C cable and a power bank that comes pre-charged so I can use it right out of the box.",
            translation: "C타입 케이블이랑, 사서 뜯자마자 바로 쓸 수 있게 미리 충전되어 나오는 보조배터리가 필요해요.",
            expressions: [{ phrase: "comes pre-charged", meaning: "공장에서 미리 충전되어 출시되다" }, { phrase: "right out of the box", meaning: "포장 상자에서 꺼내자마자 즉시" }],
            vocabulary: [{ word: "pre-charged", meaning: "사전 충전된" }]
          },
          {
            role: "점원", side: "left",
            text: "This 5,000mAh power bank comes 80% pre-charged and even has a built-in USB-C cable attached to it!",
            translation: "이 5,000mAh 보조배터리는 80%가 미리 충전되어 있고, 본체에 일체형 C타입 케이블까지 달려 있어서 따로 선을 안 사셔도 됩니다!",
            expressions: [{ phrase: "built-in USB-C cable", meaning: "보조배터리 본체에 내장된 일체형 C타입 케이블" }],
            vocabulary: [{ word: "built-in", meaning: "내장형의, 일체형의" }, { word: "attached", meaning: "부착된" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, that's super convenient! Or do you also have a rental power bank stand here?",
            translation: "오, 정말 편리하네요! 아니면 혹시 매장에 대여용 공유 보조배터리 기기도 있나요?",
            expressions: [{ phrase: "rental power bank stand", meaning: "빌려 쓰고 다른 지점에 반납하는 공유 보조배터리 대여함" }],
            vocabulary: [{ word: "rental", meaning: "대여용의" }]
          },
          {
            role: "점원", side: "left",
            text: "We do have a rental kiosk by the door, which costs $3 a day, or you can buy this one to keep for $18!",
            translation: "출입구 옆에 하루 3달러인 대여 키오스크도 있고, 아예 소장하실 거면 이 제품을 18달러에 구매하실 수도 있습니다!",
            expressions: [{ phrase: "buy this one to keep", meaning: "대여가 아니라 본인 소유로 완전히 구매하다" }],
            vocabulary: [{ word: "kiosk", meaning: "무인 단말기, 대여 기기" }]
          }
        ]
      },
      {
        id: 12,
        title: "유심칩 핀이나 건전지 규격 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! My child's portable fan ran out of battery. Where can I find batteries?",
            translation: "안녕하세요! 아이 휴대용 선풍기 건전지가 다 닳았는데요. 건전지는 어디에서 찾을 수 있나요?",
            expressions: [{ phrase: "ran out of battery", meaning: "배터리(건전지)가 다 닳았다" }],
            vocabulary: [{ word: "portable fan", meaning: "휴대용 손선풍기" }, { word: "battery (batteries)", meaning: "건전지, 배터리" }]
          },
          {
            role: "점원", side: "left",
            text: "Batteries are hanging on the rack right below the counter! What size do you need—AA, AAA, or a coin cell?",
            translation: "건전지는 카운터 바로 아래 걸이 진열대에 있습니다! 어떤 규격이 필요하신가요? AA, AAA, 아니면 동전형 수은전지인가요?",
            expressions: [{ phrase: "AA, AAA, or a coin cell", meaning: "AA(더블에이), AAA(트리플에이), 또는 동전 모양 단추형 전지(button/coin cell)" }],
            vocabulary: [{ word: "AA [더블에이]", meaning: "일반 표준 건전지 규격" }, { word: "AAA [트리플에이]", meaning: "작고 가는 건전지 규격" }]
          },
          {
            role: "손님", side: "right",
            text: "I need a pack of four AAA alkaline batteries, please.",
            translation: "AAA 알카라인 건전지 4개입 한 팩으로 주세요.",
            expressions: [{ phrase: "a pack of four AAA alkaline batteries", meaning: "AAA 알카라인 건전지 4개들이 한 팩" }],
            vocabulary: [{ word: "alkaline battery", meaning: "알카라인 건전지" }]
          },
          {
            role: "점원", side: "left",
            text: "Here you go! Do you need a small screwdriver to open the battery cover on the toy?",
            translation: "여기 있습니다! 혹시 장난감이나 선풍기 건전지 덮개를 열 때 작은 드라이버가 필요하신가요?",
            expressions: [{ phrase: "open the battery cover", meaning: "건전지 투입구 덮개를 열다 (어린이용 기기는 나사로 잠겨 있는 경우가 많음)" }],
            vocabulary: [{ word: "screwdriver", meaning: "나사 드라이버" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, the cover doesn't have a screw, thank you! By the way, could I borrow a paperclip for a second to pop open my phone's SIM tray?",
            translation: "아, 나사는 없는 덮개라 괜찮습니다, 감사해요! 그런데 혹시 제 휴대폰 유심 트레이를 잠깐 열어야 해서 클립 하나만 잠깐 빌릴 수 있을까요?",
            expressions: [{ phrase: "borrow a paperclip ~ to pop open my phone's SIM tray", meaning: "유심 핀 대신 휴대폰 유심 트레이를 찔러 열기 위해 종이 클립을 잠시 빌리다" }],
            vocabulary: [{ word: "paperclip", meaning: "종이 클립 (유심 핀 대용으로 가장 유용한 물건)" }, { word: "SIM tray", meaning: "유심칩 슬롯(트레이)" }]
          },
          {
            role: "점원", side: "left",
            text: "Actually, I have a real SIM ejector pin in our counter drawer! Here, you can use it right here.",
            translation: "실은 저희 카운터 서랍에 진짜 유심 분리 핀이 하나 있습니다! 여기 있으니 편하게 바로 쓰세요.",
            expressions: [{ phrase: "SIM ejector pin", meaning: "유심 트레이 분리용 전용 핀" }],
            vocabulary: [{ word: "drawer", meaning: "서랍" }]
          }
        ]
      },
      {
        id: 13,
        title: "행사 상품(1+1, 2+1) 적용 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, the sign on the shelf says 'Buy 1, Get 1 Free' for this sparkling water. How does it work?",
            translation: "실례합니다, 진열대 가격표에 이 탄산수가 '1+1(Buy 1, Get 1 Free)'이라고 적혀 있던데요. 어떻게 적용되나요?",
            expressions: [{ phrase: "Buy 1, Get 1 Free (BOGO)", meaning: "1+1 행사 (하나 사면 하나 무료 증정 / 2+1은 'Buy 2, Get 1 Free')" }],
            vocabulary: [{ word: "sparkling water", meaning: "탄산수" }, { word: "shelf", meaning: "진열 선반" }]
          },
          {
            role: "점원", side: "left",
            text: "You just bring two bottles to the counter, and our system automatically deducts the price of the second bottle!",
            translation: "카운터로 두 병을 가져오시면, 포스기 시스템에서 두 번째 병 가격을 자동으로 할인해 0원 처리합니다!",
            expressions: [{ phrase: "automatically deducts the price", meaning: "가격을 자동으로 차감(할인)하다" }],
            vocabulary: [{ word: "deduct", meaning: "차감하다, 공제하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Can I mix and match different flavors—like one lemon and one grapefruit?",
            translation: "레몬 맛 하나랑 자몽 맛 하나처럼 서로 다른 맛으로 교차 선택해도 행사가 적용되나요?",
            expressions: [{ phrase: "mix and match different flavors", meaning: "1+1이나 2+1 행사 상품을 서로 다른 맛으로 교차 선택하다" }],
            vocabulary: [{ word: "flavor", meaning: "맛, 향" }, { word: "grapefruit", meaning: "자몽" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! As long as they're the same brand and size, you can mix and match any flavors.",
            translation: "네! 같은 브랜드의 같은 용량 제품이기만 하면 어떤 맛이든 교차 선택하실 수 있습니다.",
            expressions: [{ phrase: "As long as they're the same brand", meaning: "동일한 브랜드 제품이기만 하다면" }],
            vocabulary: [{ word: "as long as ~", meaning: "~하기만 한다면" }]
          },
          {
            role: "손님", side: "right",
            text: "Awesome! What about this chocolate bar that says 'Buy 2, Get 1 Free'? I only brought two—should I grab one more?",
            translation: "좋네요! '2+1(Buy 2, Get 1 Free)'이라고 적힌 이 초콜릿 바는 어때요? 제가 두 개만 가져왔는데 하나 더 가져올까요?",
            expressions: [{ phrase: "should I grab one more?", meaning: "무료 증정분으로 하나 더 집어 올까요?" }],
            vocabulary: [{ word: "grab", meaning: "집어 오다, 챙기다" }]
          },
          {
            role: "점원", side: "left",
            text: "Definitely grab a third one! Otherwise you'll pay for two without getting your free third bar.",
            translation: "네, 꼭 세 번째 것을 하나 더 가져오세요! 안 가져오시면 두 개 값을 다 내시고 무료 증정품만 못 받으시게 되거든요.",
            expressions: [{ phrase: "without getting your free third bar", meaning: "무료로 받을 수 있는 세 번째 초콜릿을 받지 못한 채로" }],
            vocabulary: [{ word: "otherwise", meaning: "그렇지 않으면" }]
          }
        ]
      },
      {
        id: 14,
        title: "연령 확인 화면 터치 및 여권 제시",
        lines: [
          {
            role: "점원", side: "left",
            text: "Hello! Since you're buying two cans of local craft beer, we need to verify your age.",
            translation: "안녕하세요! 현지 수제 맥주 두 캔을 구매하셔서 연령 확인이 필요합니다.",
            expressions: [{ phrase: "verify your age", meaning: "주류·담배 구매 시 성인 연령을 확인하다" }],
            vocabulary: [{ word: "craft beer", meaning: "수제 맥주" }, { word: "verify", meaning: "확인하다, 입증하다" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, sure! The touch screen in front of me just lit up with a button. Do I press this?",
            translation: "아, 네! 제 앞의 터치스크린 화면에 버튼이 하나 떴는데 이걸 누르면 되나요?",
            expressions: [{ phrase: "The touch screen ~ just lit up", meaning: "고객용 터치스크린 화면이 켜졌다(활성화되었다)" }],
            vocabulary: [{ word: "touch screen", meaning: "터치스크린" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, in Japan and some countries you just tap the 'I am 20 or older' button on the screen, or in the US I need to check your photo ID.",
            translation: "네, 일본 등에서는 화면의 '만 20세 이상입니다' 버튼을 터치하시면 되고, 미국 등에서는 사진이 부착된 신분증을 직접 확인해야 합니다.",
            expressions: [{ phrase: "tap the 'I am 20 or older' button", meaning: "화면에 뜬 성인 연령 확인 버튼을 터치하다" }, { phrase: "photo ID", meaning: "사진이 부착된 공식 신분증(여권·운전면허증)" }],
            vocabulary: [{ word: "or older", meaning: "~세 이상" }]
          },
          {
            role: "손님", side: "right",
            text: "I pressed the button on the screen, and I also have my passport right here if you need to see my date of birth!",
            translation: "화면 버튼도 눌렀고, 생년월일 확인이 필요하시면 바로 여기 제 여권도 있습니다!",
            expressions: [{ phrase: "date of birth (DOB)", meaning: "생년월일" }],
            vocabulary: [{ word: "passport", meaning: "여권" }]
          },
          {
            role: "점원", side: "left",
            text: "Thank you for showing your passport! I just entered your birth year into the register, so we're good to go.",
            translation: "여권을 보여주셔서 감사합니다! 포스기에 출생연도를 입력해서 이제 바로 계산 가능합니다.",
            expressions: [{ phrase: "we're good to go", meaning: "모든 확인이 끝나 진행해도 좋다" }],
            vocabulary: [{ word: "birth year", meaning: "출생연도 (태어난 해)" }]
          },
          {
            role: "손님", side: "right",
            text: "Great! Could you put the beer cans in an opaque bag if required by local law?",
            translation: "좋습니다! 현지 법규상 필요하다면 맥주 캔이 밖에서 보이지 않는 불투명 봉투에 담아 주시겠어요?",
            expressions: [{ phrase: "put ~ in an opaque bag", meaning: "(주류 등이 밖에서 보이지 않도록) 불투명한 봉투에 넣다" }],
            vocabulary: [{ word: "opaque", meaning: "불투명한 (투명한 것은 clear / transparent)" }]
          }
        ]
      },
      {
        id: 15,
        title: "현금 결제 후 잔돈/동전 교환 요청",
        lines: [
          {
            role: "점원", side: "left",
            text: "Your total for the bottled water and gum is $2.50. How would you like to pay?",
            translation: "생수와 껌 해서 총 2달러 50센트입니다. 어떻게 결제하시겠어요?",
            expressions: [{ phrase: "How would you like to pay?", meaning: "어떤 결제 수단으로 계산하시겠습니까?" }],
            vocabulary: [{ word: "bottled water", meaning: "생수" }]
          },
          {
            role: "손님", side: "right",
            text: "I'll pay in cash. Here is a $10 bill.",
            translation: "현금으로 결제할게요. 여기 10달러 지폐 있습니다.",
            expressions: [{ phrase: "I'll pay in cash.", meaning: "현금으로 결제하겠습니다. (카드는 'by card' 또는 'with a card')" }],
            vocabulary: [{ word: "bill", meaning: "지폐" }]
          },
          {
            role: "점원", side: "left",
            text: "Out of $10.00, your change is $7.50! Here is a $5 bill, two $1 bills, and two quarters.",
            translation: "10달러 받았고 거스름돈은 7달러 50센트입니다! 여기 5달러 지폐 한 장, 1달러 지폐 두 장, 그리고 25센트 동전(쿼터) 두 개입니다.",
            expressions: [{ phrase: "Out of $10.00, your change is $7.50", meaning: "받은 돈 10달러 중에서 거스름돈은 7달러 50센트입니다" }],
            vocabulary: [{ word: "quarter", meaning: "25센트 동전 (10센트는 dime, 5센트는 nickel, 1센트는 penny)" }]
          },
          {
            role: "손님", side: "right",
            text: "Excuse me, while the cash drawer is open, could I exchange one of these $1 bills for four quarters?",
            translation: "실례합니다, 금전함이 열려 있는 김에 이 1달러 지폐 한 장을 25센트 동전(쿼터) 네 개로 바꿔 주실 수 있나요?",
            expressions: [{ phrase: "while the cash drawer is open", meaning: "계산대 돈통(금전함)이 열려 있는 동안에 (가장 자연스럽게 잔돈 교환을 부탁할 수 있는 타이밍)" }, { phrase: "exchange A for B", meaning: "A를 B로 교환하다(바꾸다)" }],
            vocabulary: [{ word: "cash drawer", meaning: "계산대 현금 서랍(금전함)" }]
          },
          {
            role: "점원", side: "left",
            text: "Sure! Do you need quarters for the coin laundry or a locker?",
            translation: "물론이죠! 코인 세탁실이나 사물함 때문에 동전이 필요하신가요?",
            expressions: [{ phrase: "for the coin laundry or a locker", meaning: "코인 세탁기나 코인 락커에 넣기 위해" }],
            vocabulary: [{ word: "coin laundry", meaning: "동전 세탁실" }]
          },
          {
            role: "손님", side: "right",
            text: "Yes, for the hotel laundry machine! Thank you so much for the coins.",
            translation: "네, 호텔 세탁기에 넣으려고요! 동전 바꿔 주셔서 정말 감사합니다.",
            expressions: [{ phrase: "Thank you so much for the coins.", meaning: "동전으로 바꿔 주셔서 대단히 감사합니다." }],
            vocabulary: [{ word: "coin", meaning: "동전" }]
          }
        ]
      },
      {
        id: 16,
        title: "모바일 바코드/QR 결제 요청하기",
        lines: [
          {
            role: "점원", side: "left",
            text: "That'll be 850 yen in total. How would you like to pay today?",
            translation: "총 850엔입니다. 오늘 어떤 방식으로 결제하시겠어요?",
            expressions: [{ phrase: "That'll be ~ in total.", meaning: "전부 합쳐서 ~입니다." }],
            vocabulary: [{ word: "in total", meaning: "총합해서" }]
          },
          {
            role: "손님", side: "right",
            text: "Can I pay with a mobile QR code or barcode payment app like Alipay+ or KakaoPay?",
            translation: "알리페이 플러스나 카카오페이 같은 모바일 QR/바코드 결제 앱으로 계산할 수 있나요?",
            expressions: [{ phrase: "mobile QR code or barcode payment app", meaning: "모바일 QR 코드 또는 바코드 간편결제 앱" }],
            vocabulary: [{ word: "barcode", meaning: "바코드" }, { word: "payment", meaning: "결제" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! Please tap the 'Barcode / QR Pay' button on the touch screen in front of you.",
            translation: "네! 앞에 있는 터치스크린에서 '바코드 / QR 결제' 버튼을 눌러주세요.",
            expressions: [{ phrase: "tap the 'Barcode / QR Pay' button", meaning: "화면에 있는 바코드/QR 결제 수단 버튼을 누르다" }],
            vocabulary: [{ word: "in front of you", meaning: "당신 바로 앞에 있는" }]
          },
          {
            role: "손님", side: "right",
            text: "Okay, I tapped it! Should I scan a store QR code, or will you scan the barcode on my phone screen?",
            translation: "네, 눌렀습니다! 제가 매장 QR 코드를 스캔해야 하나요, 아니면 직원분이 제 휴대폰 화면의 바코드를 찍으시나요?",
            expressions: [{ phrase: "will you scan the barcode on my phone screen?", meaning: "제 휴대폰 화면에 띄운 바코드를 스캐너로 찍어 주시나요?" }],
            vocabulary: [{ word: "scan", meaning: "스캔하다, 바코드를 읽히다" }]
          },
          {
            role: "점원", side: "left",
            text: "I'll scan your phone screen with my handheld scanner! Please turn your screen brightness up so it reads easily.",
            translation: "제가 핸드 스캐너로 고객님 휴대폰 화면을 찍겠습니다! 인식이 잘 되도록 화면 밝기를 좀 높여 주세요.",
            expressions: [{ phrase: "turn your screen brightness up", meaning: "휴대폰 화면 밝기를 높이다 (바코드 인식 불량을 막는 핵심 팁)" }],
            vocabulary: [{ word: "handheld scanner", meaning: "손에 들고 찍는 바코드 스캐너" }, { word: "brightness", meaning: "화면 밝기" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, it just beeped and went through! That was super fast. Thank you!",
            translation: "오, 방금 삐 소리가 나면서 결제가 완료되었네요! 정말 빠르네요. 감사합니다!",
            expressions: [{ phrase: "it just beeped and went through!", meaning: "방금 삐 소리가 나며 결제가 정상 승인되었다!" }],
            vocabulary: [{ word: "go through", meaning: "(결제·승인이) 통과되다, 처리되다" }]
          }
        ]
      },
      {
        id: 17,
        title: "얼음컵과 파우치 음료 조합해 사기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I grabbed this sweet peach iced tea pouch, and I need a cup of ice to pour it into. Where are the ice cups?",
            translation: "안녕하세요! 이 복숭아 아이스티 파우치 음료를 골랐는데, 부어 마실 얼음컵이 필요해요. 얼음컵은 어디에 있나요?",
            expressions: [{ phrase: "a cup of ice to pour it into", meaning: "파우치 음료를 부어 마실 얼음컵" }],
            vocabulary: [{ word: "pouch", meaning: "파우치(비닐 팩) 형태 음료" }, { word: "ice cup", meaning: "얼음컵" }]
          },
          {
            role: "점원", side: "left",
            text: "The sealed plastic cups filled with ice are in the freezer right below the ice cream section!",
            translation: "얼음이 담긴 밀봉 플라스틱 컵은 아이스크림 코너 바로 아래 냉동고에 있습니다!",
            expressions: [{ phrase: "sealed plastic cups filled with ice", meaning: "얼음이 채워진 밀봉 플라스틱 컵" }],
            vocabulary: [{ word: "freezer", meaning: "냉동고 (냉장고는 refrigerator / fridge)" }]
          },
          {
            role: "손님", side: "right",
            text: "Found it! Which size ice cup matches this drink pouch—regular or large?",
            translation: "찾았습니다! 이 파우치 음료 용량에는 레귤러와 라지 중 어떤 사이즈 얼음컵이 맞나요?",
            expressions: [{ phrase: "Which size ice cup matches this drink pouch?", meaning: "이 파우치 음료에는 어느 사이즈 얼음컵이 맞나요?" }],
            vocabulary: [{ word: "match", meaning: "(크기·용량이) 맞다, 호환되다" }]
          },
          {
            role: "점원", side: "left",
            text: "That's a large 340mL pouch, so the large Vento-size ice cup fits the entire pouch without overflowing.",
            translation: "그건 340mL 대용량 파우치라서, 라지(벤티) 사이즈 얼음컵을 쓰셔야 넘치지 않고 한 팩이 다 들어갑니다.",
            expressions: [{ phrase: "fits the entire pouch without overflowing", meaning: "넘치지 않고 파우치 한 팩 전체가 딱 들어간다" }],
            vocabulary: [{ word: "overflow", meaning: "넘치다" }]
          },
          {
            role: "손님", side: "right",
            text: "Great! Can I also buy a cup of frozen fruit smoothie that goes in the blender machine?",
            translation: "좋네요! 냉동고에 있는 과일 스무디 컵을 사서 전용 블렌더 기계에 갈아 마실 수도 있나요?",
            expressions: [{ phrase: "frozen fruit smoothie that goes in the blender machine", meaning: "편의점 전용 스무디 기계에 넣어 즉석에서 갈아 주는 냉동 과일 컵" }],
            vocabulary: [{ word: "frozen", meaning: "얼린, 냉동의" }, { word: "blender", meaning: "믹서기, 블렌더" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! After paying here, scan the barcode on the smoothie lid at the smoothie machine, pop the cup inside, and it'll blend automatically!",
            translation: "네! 여기서 결제하신 후 스무디 머신에 뚜껑 바코드를 스캔하고 컵을 안에 넣으시면 자동으로 갈아 줍니다!",
            expressions: [{ phrase: "it'll blend automatically", meaning: "기계가 자동으로 믹서(블렌딩)해 준다" }],
            vocabulary: [{ word: "pop ~ inside", meaning: "~을 안에 쏙 넣다" }]
          }
        ]
      },
      {
        id: 18,
        title: "상비 의약품(소화제/밴드) 코너 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, all the pharmacies are closed right now. Do you carry basic first-aid items or digestive medicine?",
            translation: "실례합니다, 지금 주변 약국이 다 문을 닫아서요. 혹시 기본 구급용품이나 소화제를 편의점에서도 파나요?",
            expressions: [{ phrase: "Do you carry basic first-aid items?", meaning: "기본 구급상비 물품을 취급(판매)하나요?" }],
            vocabulary: [{ word: "carry", meaning: "(매장에서 상품을) 취급하다, 구비하다" }, { word: "digestive medicine", meaning: "소화제" }]
          },
          {
            role: "점원", side: "left",
            text: "We don't sell prescription drugs, but we do have a basic health and household section on aisle 4!",
            translation: "전문의약품은 없지만, 4번 통로에 기본 건강·상비 용품 코너가 마련되어 있습니다!",
            expressions: [{ phrase: "health and household section", meaning: "건강 상비약 및 생활용품 코너" }],
            vocabulary: [{ word: "household", meaning: "가정용품, 생활용품" }]
          },
          {
            role: "손님", side: "right",
            text: "Do you have liquid digestive drinks or antacid tablets for an upset stomach?",
            translation: "속이 더부룩할 때 마시는 액상 소화제 드링크나 씹어 먹는 제산제가 있나요?",
            expressions: [{ phrase: "liquid digestive drinks", meaning: "마시는 액상 소화제 (까스활명수·우콘·솔맥 등)" }, { phrase: "for an upset stomach", meaning: "배탈이나 속불편함을 가라앉히기 위한" }],
            vocabulary: [{ word: "upset stomach", meaning: "배탈, 속쓰림·소화불량" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! On the bottom shelf of the energy drink cooler, we have herbal digestive drinks, and Tums antacid rolls are on aisle 4.",
            translation: "네! 에너지 드링크 냉장고 맨 아래 칸에 생약 소화제 드링크가 있고, 4번 통로에는 텀스(Tums) 제산제가 있습니다.",
            expressions: [{ phrase: "on the bottom shelf of the ~ cooler", meaning: "~ 냉장 진열대 맨 아래 칸에" }],
            vocabulary: [{ word: "cooler", meaning: "냉장 진열대" }, { word: "herbal", meaning: "생약 성분의, 허브의" }]
          },
          {
            role: "손님", side: "right",
            text: "What about adhesive bandages and blister pads for my heel? My shoes rubbed my feet all day.",
            translation: "뒤꿈치에 붙일 일회용 밴드나 물집 방지 패드도 있나요? 하루 종일 걸었더니 신발에 발이 쓸렸거든요.",
            expressions: [{ phrase: "blister pads for my heel", meaning: "발뒤꿈치 까짐·물집 보호용 하이드로콜로이드 패드" }, { phrase: "My shoes rubbed my feet", meaning: "신발에 발이 쓸렸다(까졌다)" }],
            vocabulary: [{ word: "heel", meaning: "발뒤꿈치" }, { word: "rub", meaning: "쓸리다, 마찰되다" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, we have both regular Band-Aids and cushioned hydrocolloid blister pads right next to the cotton swabs!",
            translation: "네, 면봉 바로 옆에 일반 밴드와 폭신한 하이드로콜로이드 물집 패드가 둘 다 있습니다!",
            expressions: [{ phrase: "cushioned hydrocolloid blister pads", meaning: "쿠션감이 있는 발 물집 전용 습윤 패드" }],
            vocabulary: [{ word: "cushioned", meaning: "폭신한 완충재가 있는" }]
          }
        ]
      },
      {
        id: 19,
        title: "공연/미술관 티켓 발권기 사용 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "Hi! I reserved museum tickets online, and the email says to print the physical tickets at your store's multimedia kiosk.",
            translation: "안녕하세요! 인터넷으로 미술관 티켓을 예매했는데, 이메일 안내에 여기 편의점 멀티미디어 단말기에서 실물 티켓을 발권하라고 되어 있어서요.",
            expressions: [{ phrase: "print the physical tickets at your store's multimedia kiosk", meaning: "편의점 내 다기능 무인 단말기(Loppi·FamiPort 등)에서 실물 티켓을 출력하다" }],
            vocabulary: [{ word: "physical ticket", meaning: "종이로 된 실물 티켓" }, { word: "multimedia kiosk", meaning: "편의점 내 티켓 발권·복사 다기능 키오스크" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes! Our ticket kiosk is right next to the copier. Do you have a QR code or a reservation number?",
            translation: "네! 티켓 발권기는 복사기 바로 옆에 있습니다. QR 코드나 예약 번호를 가지고 계신가요?",
            expressions: [{ phrase: "right next to the copier", meaning: "복합기(복사기) 바로 옆에" }],
            vocabulary: [{ word: "copier", meaning: "복사기, 복합기" }]
          },
          {
            role: "손님", side: "right",
            text: "I have a 10-digit reservation number and the phone number I used when booking.",
            translation: "10자리 예약 번호와 예매할 때 입력했던 전화번호를 가지고 있어요.",
            expressions: [{ phrase: "10-digit reservation number", meaning: "10자리 숫자로 된 예약 번호" }],
            vocabulary: [{ word: "digit", meaning: "숫자 자릿수" }]
          },
          {
            role: "점원", side: "left",
            text: "Tap 'Ticket Pickup' on the kiosk, enter those two numbers, and the machine will print a long paper slip.",
            translation: "키오스크에서 '티켓 수령(Ticket Pickup)'을 누르고 그 두 번호를 입력하시면 기계에서 긴 영수증 형태의 신청권이 출력됩니다.",
            expressions: [{ phrase: "print a long paper slip", meaning: "계산대 제출용 긴 종이 전표(접수증)를 출력하다" }],
            vocabulary: [{ word: "paper slip", meaning: "종이 전표, 접수증" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, the kiosk just printed this long slip! Is this my actual ticket?",
            translation: "오, 방금 기계에서 이 긴 종이가 나왔어요! 이게 바로 입장 티켓인가요?",
            expressions: [{ phrase: "Is this my actual ticket?", meaning: "이것이 실제 입장권인가요?" }],
            vocabulary: [{ word: "actual", meaning: "실제의" }]
          },
          {
            role: "점원", side: "left",
            text: "Not yet! Bring that slip to me at the counter within 30 minutes, and I'll print your official museum tickets right here!",
            translation: "아직 아닙니다! 그 전표를 30분 이내에 카운터의 저에게 가져오시면, 제가 여기서 공식 미술관 실물 입장권을 발권해 드립니다!",
            expressions: [{ phrase: "Bring that slip to me at the counter", meaning: "키오스크에서 나온 전표를 카운터 직원에게 가져오다" }],
            vocabulary: [{ word: "official", meaning: "공식의, 정식의" }]
          }
        ]
      },
      {
        id: 20,
        title: "세금 환급(Tax Free) 가능 여부 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "Excuse me, I'm buying a lot of snacks, cosmetics, and souvenirs. Do you offer Tax-Free shopping for tourists at this store?",
            translation: "실례합니다, 과자와 화장품, 기념품을 좀 많이 사려고 하는데요. 이 매장에서 외국인 관광객 택스프리(면세) 혜택을 받을 수 있나요?",
            expressions: [{ phrase: "Do you offer Tax-Free shopping for tourists?", meaning: "관광객 대상 면세(Tax-Free) 서비스를 제공하나요?" }],
            vocabulary: [{ word: "cosmetics", meaning: "화장품" }, { word: "tourist", meaning: "관광객" }]
          },
          {
            role: "점원", side: "left",
            text: "Yes, this branch is a registered Tax-Free shop! If your total before tax is over 5,000 yen, we deduct the consumption tax right at the register.",
            translation: "네, 저희 지점은 택스프리 지정 매장입니다! 세전 금액으로 5,000엔 이상 구매하시면 계산대에서 바로 소비세를 차감해 결제해 드립니다.",
            expressions: [{ phrase: "If your total before tax is over ~", meaning: "세전 총구매액이 ~ 이상이면" }, { phrase: "deduct the consumption tax right at the register", meaning: "계산대에서 즉시 소비세를 빼고(면세가로) 결제하다" }],
            vocabulary: [{ word: "before tax", meaning: "세전 (세금 포함은 after tax / tax included)" }, { word: "consumption tax", meaning: "소비세, 부가가치세" }]
          },
          {
            role: "손님", side: "right",
            text: "That's awesome! My total is around 6,200 yen. Here is my physical passport with the entry stamp.",
            translation: "정말 좋네요! 제 구매 금액이 6,200엔 정도 됩니다. 여기 입국 도장이 찍힌 실물 여권 있습니다.",
            expressions: [{ phrase: "physical passport with the entry stamp", meaning: "입국 심사 스탬프(상륙허가 스티커)가 있는 실물 여권" }],
            vocabulary: [{ word: "entry stamp", meaning: "입국 도장(스탬프)" }]
          },
          {
            role: "점원", side: "left",
            text: "Thank you! Are you going to eat any of these snacks while you're still in the country, or taking everything home?",
            translation: "감사합니다! 혹시 이 과자들 중에 출국 전에 현지에서 드실 것이 있나요, 아니면 전부 본국으로 가져가시나요?",
            expressions: [{ phrase: "while you're still in the country", meaning: "아직 출국하지 않고 현지 국내에 체류하는 동안" }],
            vocabulary: [{ word: "take ~ home", meaning: "~을 본국(집)으로 가지고 가다" }]
          },
          {
            role: "손님", side: "right",
            text: "Oh, my child wants to eat this pudding tonight at the hotel! Everything else is for gifts back home.",
            translation: "아, 이 푸딩 하나는 오늘 밤 호텔에서 아이가 먹을 거고요! 나머지는 전부 귀국해서 줄 선물용입니다.",
            expressions: [{ phrase: "Everything else is for gifts back home.", meaning: "나머지 물품은 전부 본국으로 가져갈 선물용입니다." }],
            vocabulary: [{ word: "everything else", meaning: "그 밖의 다른 모든 것" }]
          },
          {
            role: "점원", side: "left",
            text: "Good thing I asked! Consumable Tax-Free items are sealed in a special bag that cannot be opened until you leave the country, so let's ring up the pudding separately!",
            translation: "여쭤보길 잘했네요! 소모품 면세 물품은 출국 전까지 절대 개봉하면 안 되는 전용 보안 봉투에 밀봉되므로, 오늘 드실 푸딩은 일반 결제로 따로 계산해 드리겠습니다!",
            expressions: [{ phrase: "cannot be opened until you leave the country", meaning: "출국할 때까지 개봉할 수 없다" }, { phrase: "ring up ~ separately", meaning: "~을 별도로 분리해서 계산하다" }],
            vocabulary: [{ word: "consumable", meaning: "소모품 (식품, 화장품, 의약품 등)" }]
          }
        ]
      }
    ],

    // ==========================================
    // 2. 일본어 (日本語) - 편의점 1~20번 전체 완성본
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "도시락 구매 후 전자레인지 데우기",
        lines: [
          {
            role: "점원", side: "left",
            text: "いらっしゃいませ！こちらのお弁当は温めますか？",
            translation: "어서 오세요! 이 도시락은 데워 드릴까요?",
            expressions: [{ phrase: "こちらのお弁当は温めますか？", meaning: "이 도시락은 데워 드릴까요? (일본 편의점 계산대에서 100% 나오는 필수 질문)" }],
            vocabulary: [{ word: "お弁当(べんとう)", meaning: "도시락" }, { word: "温める(あたためる)", meaning: "데우다, 따뜻하게 하다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、お願いします。このおにぎりも少しだけ温めてもらえますか？",
            translation: "네, 부탁합니다. 이 주먹밥도 살짝만 데워 주실 수 있나요?",
            expressions: [{ phrase: "少しだけ温めてもらえますか？", meaning: "조금만(살짝만) 데워 주실 수 있나요?" }],
            vocabulary: [{ word: "お願い(おねがい)します", meaning: "부탁합니다" }, { word: "おにぎり", meaning: "주먹밥, 삼각김밥" }, { word: "少し(すこし)だけ", meaning: "조금만, 살짝만" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！お弁当についているタルタルソースの小袋は、温める前に外しておきますね。",
            translation: "알겠습니다! 도시락에 붙어 있는 작은 타르타르 소스 봉지는 데우기 전에 떼어 놓겠습니다.",
            expressions: [{ phrase: "温める前に外しておきますね", meaning: "전자레인지에 데우기 전에 떼어(분리해) 놓겠습니다" }],
            vocabulary: [{ word: "小袋(こぶくろ)", meaning: "작은 봉지(소스 팩)" }, { word: "前(まえ)に", meaning: "~하기 전에" }, { word: "外す(はずす)", meaning: "떼어내다, 분리하다" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。温めるのにどれくらいかかりますか？",
            translation: "감사합니다. 데우는 데 시간이 얼마나 걸리나요?",
            expressions: [{ phrase: "温めるのにどれくらいかかりますか？", meaning: "데우는 데 시간이 얼마나 걸리나요?" }],
            vocabulary: [{ word: "かかる", meaning: "(시간이) 걸리다" }]
          },
          {
            role: "점원", side: "left",
            text: "業務用のレンジですので、1分ほどで温まりますよ。容器が熱くなっておりますのでお気をつけください！",
            translation: "업소용 고출력 전자레인지라서 1분 정도면 다 데워집니다. 용기가 뜨거우니 조심하세요!",
            expressions: [{ phrase: "容器が熱くなっておりますのでお気をつけください", meaning: "용기가 뜨거워졌으니 잡으실 때 조심하십시오" }],
            vocabulary: [{ word: "業務用(ぎょうむよう)", meaning: "업소용, 업무용" }, { word: "1分(いっぷん)ほど", meaning: "1분 정도" }, { word: "容器(ようき)", meaning: "용기" }, { word: "熱い(あつい)", meaning: "뜨겁다" }]
          },
          {
            role: "손님", side: "right",
            text: "端の方を持って気をつけますね。ありがとうございます！",
            translation: "가장자리 쪽을 잡고 조심할게요. 감사합니다!",
            expressions: [{ phrase: "端の方を持って", meaning: "테두리(가장자리) 쪽을 잡고" }],
            vocabulary: [{ word: "端(はし)", meaning: "끝, 가장자리" }, { word: "持つ(もつ)", meaning: "잡다, 들다" }, { word: "気(き)をつける", meaning: "조심하다" }]
          }
        ]
      },
      {
        id: 2,
        title: "젓가락, 숟가락, 물티슈 챙겨 받기",
        lines: [
          {
            role: "점원", side: "left",
            text: "パスタとスープの温めが終わりました。お箸とスプーンはお付けしますか？",
            translation: "파스타와 수프를 다 데웠습니다. 젓가락과 숟가락을 챙겨 드릴까요?",
            expressions: [{ phrase: "お箸とスプーンはお付けしますか？", meaning: "젓가락과 숟가락을 넣어 드릴까요?" }],
            vocabulary: [{ word: "温め(あたため)", meaning: "데우기" }, { word: "終わる(おわる)", meaning: "끝나다" }, { word: "お箸(はし)", meaning: "젓가락" }, { word: "付ける(つける)", meaning: "함께 챙겨 주다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい！割り箸を2膳と、スープ用のスプーンを1つ、それとパスタ用のフォークも1ついただけますか？",
            translation: "네! 나무젓가락 두 벌과 수프용 숟가락 하나, 그리고 파스타용 포크도 하나 주실 수 있나요?",
            expressions: [{ phrase: "割り箸を2膳", meaning: "일회용 나무젓가락 2벌" }],
            vocabulary: [{ word: "割り箸(わりばし)", meaning: "나무젓가락" }, { word: "2膳(にぜん)", meaning: "(젓가락) 두 벌" }, { word: "1つ(ひとつ)", meaning: "한 개" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！お箸2膳とスプーン、フォークを1つずつお入れしますね。",
            translation: "알겠습니다! 젓가락 두 벌과 숟가락, 포크를 하나씩 넣어 드리겠습니다.",
            expressions: [{ phrase: "1つずつお入れします", meaning: "하나씩 넣어 드리겠습니다" }],
            vocabulary: [{ word: "1つ(ひとつ)ずつ", meaning: "하나씩" }, { word: "入れる(いれる)", meaning: "넣다" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます。あの、手を拭くためのウェットティッシュかお手拭きも入っていますか？",
            translation: "감사합니다. 저기, 손 닦을 물티슈나 일회용 물수건도 들어 있나요?",
            expressions: [{ phrase: "手を拭くためのウェットティッシュかお手拭き", meaning: "손을 닦기 위한 물티슈나 일회용 물수건" }],
            vocabulary: [{ word: "手(て)", meaning: "손" }, { word: "拭く(ふく)", meaning: "닦다" }, { word: "お手拭き(てふき)", meaning: "일회용 물티슈/물수건 (おしぼり)" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、紙おしぼりを3つ袋にお入れしました！ストローも必要ですか？",
            translation: "네, 일회용 물티슈를 세 개 봉투에 넣어 드렸습니다! 빨대도 필요하신가요?",
            expressions: [{ phrase: "紙おしぼりを3つ袋にお入れしました", meaning: "일회용 종이 물티슈 3개를 봉투에 넣었습니다" }],
            vocabulary: [{ word: "紙(かみ)おしぼり", meaning: "일회용 포장 물티슈" }, { word: "袋(ふくろ)", meaning: "봉투" }, { word: "必要(ひつよう)", meaning: "필요" }]
          },
          {
            role: "손님", side: "right",
            text: "子どもがパックジュースを飲むので、曲がるストローを1本お願いします。ありがとうございます！",
            translation: "아이가 팩 주스를 마셔서 그러는데 구부러지는 빨대 한 개 부탁합니다. 감사합니다!",
            expressions: [{ phrase: "曲がるストローを1本お願いします", meaning: "주름(구부러지는) 빨대 1개 부탁합니다" }],
            vocabulary: [{ word: "子ども(こども)", meaning: "아이, 어린이" }, { word: "飲む(のむ)", meaning: "마시다" }, { word: "曲がる(まがる)", meaning: "구부러지다, 꺾이다" }, { word: "1本(いっぽん)", meaning: "(빨대 등) 한 개" }]
          }
        ]
      },
      {
        id: 3,
        title: "교통카드 구매 및 현금 충전하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、交通系ICカードの「Suica」にチャージしたいのですが、レジでできますか？",
            translation: "실례합니다, 교통카드인 '스이카(Suica)'에 충전하고 싶은데 계산대에서 할 수 있나요?",
            expressions: [{ phrase: "交通系ICカードの「Suica」にチャージしたい", meaning: "교통카드인 스이카에 잔액을 충전하고 싶다" }],
            vocabulary: [{ word: "交通系(こうつうけい)ICカード", meaning: "교통카드 (Suica, PASMO, ICOCA 등)" }, { word: "チャージする", meaning: "(잔액을) 충전하다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、レジでチャージ可能です！お支払いは現金のみとなりますが、いくらチャージなさいますか？",
            translation: "네, 계산대에서 충전 가능합니다! 결제는 현금으로만 가능한데 얼마를 충전하시겠어요?",
            expressions: [{ phrase: "お支払いは現金のみとなります", meaning: "지불(결제)은 현금만 가능합니다" }, { phrase: "いくらチャージなさいますか？", meaning: "얼마를 충전하시겠습니까?" }],
            vocabulary: [{ word: "可能(かのう)", meaning: "가능" }, { word: "支払い(しはらい)", meaning: "지불, 결제" }, { word: "現金(げんきん)のみ", meaning: "현금만" }]
          },
          {
            role: "손님", side: "right",
            text: "このカード2枚に、それぞれ3,000円ずつチャージをお願いします。",
            translation: "이 카드 두 장에 각각 3,000엔씩 충전 부탁합니다.",
            expressions: [{ phrase: "それぞれ3,000円ずつチャージをお願いします", meaning: "각각 3,000엔씩 충전을 부탁합니다" }],
            vocabulary: [{ word: "2枚(にまい)", meaning: "두 장" }, { word: "3,000円(さんぜんえん)", meaning: "3,000엔" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました。まず1枚目のカードをこちらのリーダーに置いて、画面の「3,000円」をタッチしてください。",
            translation: "알겠습니다. 먼저 첫 번째 카드를 여기 리더기에 올려놓으시고 화면의 '3,000엔' 버튼을 터치해 주세요.",
            expressions: [{ phrase: "こちらのリーダーに置いて", meaning: "이 카드 단말기(리더기) 위에 올려놓고" }],
            vocabulary: [{ word: "1枚目(いちまいめ)", meaning: "첫 번째 장" }, { word: "置く(おく)", meaning: "놓다, 올려두다" }, { word: "画面(がめん)", meaning: "화면" }]
          },
          {
            role: "손님", side: "right",
            text: "タッチしました。こちらの現金6,000円で2枚分お願いします。",
            translation: "터치했습니다. 여기 현금 6,000엔으로 두 장분 계산 부탁합니다.",
            expressions: [{ phrase: "現金6,000円で2枚分お願いします", meaning: "현금 6,000엔으로 2장분 충전을 부탁합니다" }],
            vocabulary: [{ word: "6,000円(ろくせんえん)", meaning: "6,000엔" }, { word: "2枚分(にまいぶん)", meaning: "2장분" }]
          },
          {
            role: "점원", side: "left",
            text: "ピッと音が鳴るまでカードを動かさないでくださいね…はい、2枚ともチャージ完了です！こちらがレシートです。",
            translation: "삐 소리가 날 때까지 카드를 움직이지 마세요... 네, 두 장 모두 충전 완료되었습니다! 여기 영수증입니다.",
            expressions: [{ phrase: "ピッと音が鳴るまでカードを動かさないで", meaning: "삐 하고 완료음이 울릴 때까지 카드를 떼거나 움직이지 마세요" }],
            vocabulary: [{ word: "音(おと)が鳴る(なる)", meaning: "소리가 울리다" }, { word: "動かす(うごかす)", meaning: "움직이다" }, { word: "完了(かんりょう)", meaning: "완료" }]
          }
        ]
      },
      {
        id: 4,
        title: "봉투 필요 여부 답하고 구매하기",
        lines: [
          {
            role: "점원", side: "left",
            text: "お会計は1,280円になります。レジ袋はご利用になられますか？",
            translation: "결제 금액은 1,280엔입니다. 비닐봉투는 이용하시나요?",
            expressions: [{ phrase: "レジ袋はご利用になられますか？", meaning: "비닐봉투는 필요하신가요? ('袋にお入れしますか？'라고도 자주 물어봄)" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 결제" }, { word: "レジ袋(ぶくろ)", meaning: "비닐봉투" }, { word: "利用(りよう)する", meaning: "이용하다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、袋をください。大きいサイズの袋はいくらですか？",
            translation: "네, 봉투 주세요. 큰 사이즈 봉투는 얼마인가요?",
            expressions: [{ phrase: "はい、袋をください", meaning: "네, 봉투를 주세요 (필요 없을 때는 '袋は大丈夫です')" }],
            vocabulary: [{ word: "大きい(おおきい)", meaning: "크다" }, { word: "いくら", meaning: "얼마" }]
          },
          {
            role: "점원", side: "left",
            text: "普通サイズは3円、大きいサイズは5円になります。",
            translation: "보통 사이즈는 3엔이고, 큰 사이즈는 5엔입니다.",
            expressions: [{ phrase: "普通サイズは3円、大きいサイズは5円", meaning: "일반 크기는 3엔, 큰 크기는 5엔" }],
            vocabulary: [{ word: "普通(ふつう)", meaning: "보통, 일반" }, { word: "3円(さんえん)", meaning: "3엔" }, { word: "5円(ごえん)", meaning: "5엔" }]
          },
          {
            role: "손님", side: "right",
            text: "では、5円の大きい袋を1枚お願いします。あの、温かいお弁当と冷たいアイスは分けられますか？",
            translation: "그럼 5엔짜리 큰 봉투 한 장 부탁합니다. 저기, 따뜻한 도시락과 차가운 아이스크림은 따로 담아 주실 수 있나요?",
            expressions: [{ phrase: "温かいお弁当と冷たいアイスは分けられますか？", meaning: "따뜻한 도시락과 차가운 아이스크림을 분리해 담을 수 있나요?" }],
            vocabulary: [{ word: "1枚(いちまい)", meaning: "(봉투·종이 등) 한 장" }, { word: "温かい(あたたかい)", meaning: "따뜻한" }, { word: "冷たい(つめたい)", meaning: "차가운" }, { word: "分ける(わける)", meaning: "나누다, 분리하다" }]
          },
          {
            role: "점원", side: "left",
            text: "もちろんです！アイスが溶けないように、アイスと冷たい飲み物は無料の小さな袋に別にお入れしますね。",
            translation: "물론이죠! 아이스크림이 녹지 않도록 아이스크림과 차가운 음료는 무료 작은 비닐봉투에 따로 넣어 드리겠습니다.",
            expressions: [{ phrase: "アイスが溶けないように", meaning: "아이스크림이 녹지 않도록" }],
            vocabulary: [{ word: "溶ける(とける)", meaning: "녹다" }, { word: "飲み物(のみもの)", meaning: "음료" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "別(べつ)に", meaning: "따로, 별도로" }]
          },
          {
            role: "손님", side: "right",
            text: "わあ、気を使ってくださってありがとうございます！",
            translation: "와, 세심하게 신경 써 주셔서 감사합니다!",
            expressions: [{ phrase: "気を使ってくださってありがとうございます", meaning: "배려해(신경 써) 주셔서 감사합니다" }],
            vocabulary: [{ word: "気(き)を使う(つかう)", meaning: "신경 쓰다, 배려하다" }]
          }
        ]
      },
      {
        id: 5,
        title: "따뜻한 캔음료 및 즉석 커피 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、外が寒いので温かい飲み物を買いたいのですが、ホットの缶コーヒーやコーンポタージュはどこですか？",
            translation: "실례합니다, 밖이 추워서 따뜻한 음료를 사고 싶은데요, 따뜻한 캔커피나 콘포타주(옥수수수프)는 어디에 있나요?",
            expressions: [{ phrase: "ホットの缶コーヒーやコーンポタージュ", meaning: "온장고에 든 따뜻한 캔커피나 옥수수수프 캔" }],
            vocabulary: [{ word: "外(そと)", meaning: "밖, 야외" }, { word: "寒い(さむい)", meaning: "춥다" }, { word: "温かい(あたたかい)", meaning: "따뜻한" }, { word: "缶(かん)コーヒー", meaning: "캔커피" }]
          },
          {
            role: "점원", side: "left",
            text: "温かいペットボトルと缶飲料は、一番奥の冷蔵ケースの端にあるオレンジ色の棚にございます！",
            translation: "따뜻한 페트병과 캔음료는 맨 안쪽 냉장 진열대 끝에 있는 주황색 온장고 선반에 있습니다!",
            expressions: [{ phrase: "オレンジ色の棚にございます", meaning: "주황색 온장 선반에 있습니다 (일본 편의점에서는 따뜻한 음료 칸을 주황색/빨간색, 차가운 칸을 파란색으로 표시함)" }],
            vocabulary: [{ word: "缶飲料(かんいんりょう)", meaning: "캔음료" }, { word: "一番奥(いちばんおく)", meaning: "맨 안쪽" }, { word: "端(はし)", meaning: "끝, 가장자리" }, { word: "棚(たな)", meaning: "선반, 진열대" }]
          },
          {
            role: "손님", side: "right",
            text: "見つけました！この温かいコーンポタージュ1つと、レジのコーヒーマシンのホットカフェラテを1つください。",
            translation: "찾았습니다! 이 따뜻한 콘포타주 하나랑, 계산대 커피 머신의 따뜻한 카페라떼를 한 잔 주세요.",
            expressions: [{ phrase: "コーヒーマシンのホットカフェラテを1つ", meaning: "즉석 원두커피 머신용 핫 카페라떼 1잔" }],
            vocabulary: [{ word: "見つける(みつける)", meaning: "찾다, 발견하다" }, { word: "1つ(ひとつ)", meaning: "한 개, 한 잔" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！ホットカフェラテのサイズは、レギュラーとラージのどちらになさいますか？",
            translation: "알겠습니다! 따뜻한 카페라떼 사이즈는 레귤러(보통)와 라지(큰 것) 중 어느 것으로 하시겠어요?",
            expressions: [{ phrase: "レギュラーとラージのどちらになさいますか？", meaning: "레귤러(R) 사이즈와 라지(L) 사이즈 중 어느 것으로 하시겠습니까?" }],
            vocabulary: [{ word: "どちら", meaning: "어느 쪽" }]
          },
          {
            role: "손님", side: "right",
            text: "レギュラーサイズでお願いします。カップを受け取って自分でボタンを押せばいいですか？",
            translation: "레귤러 사이즈로 부탁합니다. 컵을 받아서 제가 직접 기계 버튼을 누르면 되나요?",
            expressions: [{ phrase: "カップを受け取って自分でボタンを押せばいいですか？", meaning: "종이컵을 받아서 직접 머신 버튼을 누르면 되나요?" }],
            vocabulary: [{ word: "受け取る(うけとる)", meaning: "건네받다" }, { word: "自分(じぶん)で", meaning: "스스로, 직접" }, { word: "押す(おす)", meaning: "누르다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、こちらの白いカップを入口横のコーヒーマシンにセットして、「カフェラテ・R」のボタンを押してください！",
            translation: "네, 이 하얀 컵을 입구 옆 커피 머신에 넣으시고 '카페라떼·R' 버튼을 눌러주세요!",
            expressions: [{ phrase: "入口横のコーヒーマシンにセットして", meaning: "입구 옆 커피 머신에 컵을 올려놓고" }],
            vocabulary: [{ word: "白い(しろい)", meaning: "하얀" }, { word: "入口横(いりぐちよこ)", meaning: "입구 옆" }]
          }
        ]
      },
      {
        id: 6,
        title: "컵라면 구매 후 뜨거운 물 위치 묻기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、このカップラーメンを2つ買いたいのですが、お湯を入れるポットはお店にありますか？",
            translation: "실례합니다, 이 컵라면 두 개를 사고 싶은데요, 뜨거운 물을 부을 수 있는 온수 포트가 매장에 있나요?",
            expressions: [{ phrase: "お湯を入れるポットはお店にありますか？", meaning: "뜨거운 물을 붓는 전기포트가 가게에 있나요?" }],
            vocabulary: [{ word: "買う(かう)", meaning: "사다" }, { word: "お湯(ゆ)", meaning: "뜨거운 물, 온수" }, { word: "入れる(いれる)", meaning: "넣다, 붓다" }, { word: "お店(みせ)", meaning: "가게, 매장" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、お会計の後に、あちらの電子レンジの横にある電気ポットのお湯をご自由にお使いいただけます！",
            translation: "네, 계산하신 후에 저쪽 전자레인지 옆에 있는 전기포트의 뜨거운 물을 자유롭게 쓰실 수 있습니다!",
            expressions: [{ phrase: "電気ポットのお湯をご自由にお使いいただけます", meaning: "전기포트의 뜨거운 물을 자유롭게 이용하실 수 있습니다" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 결제" }, { word: "電子(でんし)レンジ", meaning: "전자레인지" }, { word: "横(よこ)", meaning: "옆" }, { word: "電気(でんき)ポット", meaning: "전기보온포트" }, { word: "自由(じゆう)に", meaning: "자유롭게" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！お湯を入れて、窓際のイートインコーナーで食べていってもいいですか？",
            translation: "감사합니다! 뜨거운 물을 부어서 창가 쪽 매장 내 시식 코너(이트인 코너)에서 먹고 가도 되나요?",
            expressions: [{ phrase: "窓際のイートインコーナーで食べていってもいいですか？", meaning: "창가 이트인 코너(시식대)에서 먹고 가도 되나요?" }],
            vocabulary: [{ word: "窓際(まどぎわ)", meaning: "창가" }, { word: "イートインコーナー", meaning: "편의점 내 취식 공간 (Eat-in corner)" }, { word: "食べる(たべる)", meaning: "먹다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、イートインコーナーをご利用の場合は消費税が8パーセントから10パーセントに変わりますが、よろしいでしょうか？",
            translation: "네, 매장 내 시식 코너를 이용하시는 경우에는 소비세가 8%에서 10%로 바뀌는데 괜찮으신가요?",
            expressions: [{ phrase: "消費税が8パーセントから10パーセントに変わります", meaning: "소비세가 포장(8%)에서 매장 취식(10%)으로 변경됩니다 (일본의 경감세율 제도)" }],
            vocabulary: [{ word: "場合(ばあい)", meaning: "경우" }, { word: "消費税(しょうひぜい)", meaning: "소비세" }, { word: "変わる(かわる)", meaning: "바뀌다" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、大丈夫です！食べ終わった後の容器や残ったスープはどこに捨てればいいですか？",
            translation: "네, 괜찮습니다! 다 먹고 난 뒤 빈 용기나 남은 국물은 어디에 버리면 되나요?",
            expressions: [{ phrase: "残ったスープはどこに捨てればいいですか？", meaning: "남은 국물은 어디에 버리면 되나요?" }],
            vocabulary: [{ word: "食べ終わる(たべおわる)", meaning: "다 먹다" }, { word: "容器(ようき)", meaning: "용기" }, { word: "残る(のこる)", meaning: "남다" }, { word: "捨てる(すてる)", meaning: "버리다" }]
          },
          {
            role: "점원", side: "left",
            text: "ゴミ箱の横にスープを流す専用のバケツがございますので、スープはそちらに流して容器は燃えるゴミへお捨てください。",
            translation: "쓰레기통 옆에 국물을 버리는 전용 물통이 있으니 국물은 거기에 부으시고 용기는 일반 쓰레기통에 버려주세요.",
            expressions: [{ phrase: "スープを流す専用のバケツ", meaning: "라면 국물을 따라 버리는 전용 통" }],
            vocabulary: [{ word: "ゴミ箱(ばこ)", meaning: "쓰레기통" }, { word: "流す(ながす)", meaning: "(액체를) 흘려보내다, 따라 버리다" }, { word: "専用(せんよう)", meaning: "전용" }, { word: "燃える(もえる)ゴミ", meaning: "타는 쓰레기(일반 쓰레기)" }]
          }
        ]
      },
      {
        id: 7,
        title: "어묵·핫푸드 카운터에서 주문하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、レジ横のホットスナックも一緒に注文したいのですが。",
            translation: "실례합니다, 계산대 옆의 따뜻한 즉석조리 식품(핫스낵)도 같이 주문하고 싶은데요.",
            expressions: [{ phrase: "レジ横のホットスナック", meaning: "계산대 옆 온장 쇼케이스에 든 즉석 튀김·찐빵류" }],
            vocabulary: [{ word: "レジ横(よこ)", meaning: "계산대 옆" }, { word: "一緒(いっしょ)に", meaning: "함께, 같이" }, { word: "注文(ちゅうもん)する", meaning: "주문하다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、どうぞ！ただいまフライドチキンとコロッケが揚げたてでございます。",
            translation: "네, 말씀하세요! 지금 막 후라이드 치킨과 고로케가 갓 튀겨져 나왔습니다.",
            expressions: [{ phrase: "揚げたてでございます", meaning: "방금 막 튀겨낸(갓 튀긴) 상태입니다" }],
            vocabulary: [{ word: "揚げたて(あげたて)", meaning: "갓 튀겨낸" }]
          },
          {
            role: "손님", side: "right",
            text: "では、骨なしフライドチキンを1つと、北海道じゃがいもコロッケを1つ、それと肉まんを1つください。",
            translation: "그럼 순살 후라이드 치킨 하나랑 홋카이도 감자 고로케 하나, 그리고 고기 호빵(니쿠만)을 하나 주세요.",
            expressions: [{ phrase: "骨なしフライドチキンを1つ", meaning: "뼈 없는 순살 치킨(파미치키/나나치키 등) 1개" }],
            vocabulary: [{ word: "骨(ほね)なし", meaning: "뼈 없음, 순살" }, { word: "じゃがいも", meaning: "감자" }, { word: "肉(にく)まん", meaning: "고기만두, 고기호빵" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！コロッケ用のソースと、肉まん用のからしはお付けしますか？",
            translation: "알겠습니다! 고로케용 소스와 고기호빵용 겨자(카라시)는 챙겨 드릴까요?",
            expressions: [{ phrase: "コロッケ用のソースと、肉まん用のからし", meaning: "고로케용 돈가스 소스와 고기호빵용 연겨자" }],
            vocabulary: [{ word: "からし", meaning: "겨자 (辛子)" }, { word: "付ける(つける)", meaning: "첨부하다, 챙겨주다" }]
          },
          {
            role: "손님", side: "right",
            text: "ソースだけお願いします。あと、おでんの大根とたまご、ちくわも1つずつ買えますか？",
            translation: "소스만 부탁합니다. 그리고 오뎅(어묵탕)의 무와 달걀, 어묵(치쿠와)도 하나씩 살 수 있나요?",
            expressions: [{ phrase: "おでんの大根とたまご、ちくわ", meaning: "오뎅탕에 들어 있는 무와 계란, 대나무 모양 구운 어묵" }],
            vocabulary: [{ word: "大根(だいこん)", meaning: "무" }, { word: "たまご", meaning: "달걀, 계란 (卵)" }, { word: "ちくわ", meaning: "치쿠와 (가운데 구멍이 뚫린 원통형 어묵)" }]
          },
          {
            role: "점원", side: "left",
            text: "はい！おでんのつゆは多めにお入れして、こぼれないようにフタをしっかり閉めてお渡ししますね。",
            translation: "네! 오뎅 국물은 넉넉하게 담아 드리고, 쏟아지지 않도록 뚜껑을 단단히 닫아서 건네드리겠습니다.",
            expressions: [{ phrase: "おでんのつゆは多めにお入れして", meaning: "오뎅 국물을 많이(넉넉히) 넣어 드리고" }],
            vocabulary: [{ word: "つゆ", meaning: "국물, 육수" }, { word: "多め(おおめ)に", meaning: "넉넉하게, 많이" }, { word: "閉める(しめる)", meaning: "닫다" }]
          }
        ]
      },
      {
        id: 8,
        title: "ATM 위치 및 해외 카드 출금 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、現金を引き出したいのですが、店内にATMはありますか？",
            translation: "실례합니다, 현금을 인출하고 싶은데요, 매장 안에 ATM이 있나요?",
            expressions: [{ phrase: "現金を引き出したいのですが", meaning: "현금을 인출(출금)하고 싶은데요" }],
            vocabulary: [{ word: "現金(げんきん)", meaning: "현금" }, { word: "引き出す(ひきだす)", meaning: "(돈을) 인출하다, 뽑다" }, { word: "店内(てんない)", meaning: "매장 내" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、あちらの雑誌コーナーのすぐ隣にATMがございます。",
            translation: "네, 저기 잡지 코너 바로 옆에 ATM이 있습니다.",
            expressions: [{ phrase: "雑誌コーナーのすぐ隣に", meaning: "잡지 진열 코너 바로 옆에" }],
            vocabulary: [{ word: "雑誌(ざっし)", meaning: "잡지" }, { word: "隣(となり)", meaning: "옆" }]
          },
          {
            role: "손님", side: "right",
            text: "海外で発行されたVISAやMastercardのデビットカードでも現金をおろせますか？",
            translation: "해외에서 발급된 비자나 마스터카드 체크카드로도 현금을 뽑을 수 있나요?",
            expressions: [{ phrase: "海外で発行された〜カードでも現金をおろせますか？", meaning: "해외 발급 카드로도 현금을 인출할 수 있나요?" }],
            vocabulary: [{ word: "海外(かいがい)", meaning: "해외" }, { word: "発行(はっこう)される", meaning: "발급되다" }, { word: "おろす", meaning: "(현금을) 인출하다, 찾다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、海外のカードにも対応しており、画面で韓国語や英語の表示に切り替えることができますよ！",
            translation: "네, 해외 카드도 지원하며 화면에서 한국어나 영어 표시로 전환하실 수 있습니다!",
            expressions: [{ phrase: "韓国語や英語の表示に切り替える", meaning: "화면 언어를 한국어나 영어 표시로 전환하다" }],
            vocabulary: [{ word: "対応(たいおう)する", meaning: "지원하다, 대응하다" }, { word: "韓国語(かんこくご)", meaning: "한국어" }, { word: "切り替える(きりかえる)", meaning: "전환하다, 바꾸다" }]
          },
          {
            role: "손님", side: "right",
            text: "1万円札ではなく、1,000円札で引き出すこともできますか？",
            translation: "1만 엔짜리 지폐 말고 1,000엔짜리 지폐로 인출할 수도 있나요?",
            expressions: [{ phrase: "1万円札ではなく、1,000円札で引き出す", meaning: "1만 엔권 지폐 대신 1,000엔권 지폐로 인출하다" }],
            vocabulary: [{ word: "1万円札(いちまんえんさつ)", meaning: "1만 엔권 지폐" }, { word: "1,000円札(せんえんさつ)", meaning: "1,000엔권 지폐" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、金額を入力する際に「10千円」のように千円単位を選べば、1,000円札10枚で出てきますよ！",
            translation: "네, 금액을 입력하실 때 '10천 엔'처럼 천 엔 단위를 선택하시면 1,000엔짜리 지폐 10장으로 나옵니다!",
            expressions: [{ phrase: "千円単位を選べば、1,000円札10枚で出てきます", meaning: "천 엔 단위를 고르면 1,000엔권 지폐 10장으로 출금됩니다 (세븐일레븐 ATM 등의 꿀팁)" }],
            vocabulary: [{ word: "金額(きんがく)", meaning: "금액" }, { word: "千円単位(せんえんたんい)", meaning: "천 엔 단위" }, { word: "10枚(じゅうまい)", meaning: "10장" }]
          }
        ]
      },
      {
        id: 9,
        title: "편의점 택배 발송 및 수하물 보내기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、このスーツケースを次の宿泊先のホテルへ宅急便で送りたいのですが、ここで手続きできますか？",
            translation: "실례합니다, 이 캐리어를 다음 숙박할 호텔로 택배를 보내고 싶은데요, 여기서 접수할 수 있나요?",
            expressions: [{ phrase: "次の宿泊先のホテルへ宅急便で送りたい", meaning: "다음 숙소 호텔로 택배(탁구빈)로 보내고 싶다" }],
            vocabulary: [{ word: "次(つぎ)の", meaning: "다음의" }, { word: "宿泊先(しゅくはくさき)", meaning: "숙박지, 숙소" }, { word: "宅急便(たっきゅうびん)", meaning: "택배" }, { word: "送る(おくる)", meaning: "보내다" }, { word: "手続き(てつづき)", meaning: "수속, 접수 절차" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、承っております！元払いの伝票をお持ちしますので、送り先のホテルのご住所と電話番号をご記入ください。",
            translation: "네, 접수하고 있습니다! 선불 운송장을 가져다드릴 테니 보내실 호텔 주소와 전화번호를 적어 주세요.",
            expressions: [{ phrase: "元払いの伝票", meaning: "선불 택배 운송장 (착불은 着払い(ちゃくばらい))" }],
            vocabulary: [{ word: "元払い(もとばらい)", meaning: "선불" }, { word: "伝票(でんぴょう)", meaning: "운송장, 전표" }, { word: "送り先(おくりさき)", meaning: "보내는 곳(수령지)" }, { word: "住所(じゅうしょ)", meaning: "주소" }, { word: "電話番号(でんわばんごう)", meaning: "전화번호" }]
          },
          {
            role: "손님", side: "right",
            text: "伝票を書きました。明日の午後にそのホテルへチェックインするのですが、明日中に届きますか？",
            translation: "운송장을 다 적었습니다. 내일 오후에 그 호텔에 체크인하는데 내일 중으로 도착할까요?",
            expressions: [{ phrase: "明日中に届きますか？", meaning: "내일 안으로 배달(도착)되나요?" }],
            vocabulary: [{ word: "書く(かく)", meaning: "적다, 쓰다" }, { word: "明日中(あしたじゅう)に", meaning: "내일 중으로" }, { word: "届く(とどく)", meaning: "도착하다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、本日の集荷締切時間前ですので、明日の午前中着指定でお送りできますよ！",
            translation: "네, 오늘 택배 수거 마감 시간 전이라서 내일 오전 중 도착 지정으로 보내드릴 수 있습니다!",
            expressions: [{ phrase: "本日の集荷締切時間前ですので", meaning: "오늘의 택배 수거 마감 시간 이전이므로" }, { phrase: "明日の午前中着指定で", meaning: "내일 오전 중 도착 시간 지정으로" }],
            vocabulary: [{ word: "集荷(しゅうか)", meaning: "택배 수거" }, { word: "締切時間(しめきりじかん)", meaning: "마감 시간" }, { word: "午前中着(ごぜんちゅうちゃく)", meaning: "오전 중 도착" }]
          },
          {
            role: "손님", side: "right",
            text: "それは助かります！送料はどのように計算されますか？",
            translation: "정말 다행이네요! 배송비는 어떻게 계산되나요?",
            expressions: [{ phrase: "送料はどのように計算されますか？", meaning: "배송 요금은 어떻게 계산되나요?" }],
            vocabulary: [{ word: "送料(そうりょう)", meaning: "배송비, 운임" }, { word: "計算(けいさん)される", meaning: "계산되다" }]
          },
          {
            role: "점원", side: "left",
            text: "メジャーでスーツケースの縦・横・高さの合計を測りますね…140サイズですので、送料は2,190円になります。こちらが控えです！",
            translation: "줄자로 캐리어의 가로·세로·높이 합계를 재보겠습니다... 140 사이즈여서 배송비는 2,190엔입니다. 여기 고객 보관용 영수증입니다!",
            expressions: [{ phrase: "縦・横・高さの合計を測ります", meaning: "세로·가로·높이 세 변의 합계를 측정합니다" }],
            vocabulary: [{ word: "縦(たて)", meaning: "세로" }, { word: "横(よこ)", meaning: "가로" }, { word: "高さ(たかさ)", meaning: "높이" }, { word: "測る(はかる)", meaning: "재다, 측정하다" }, { word: "控え(ひかえ)", meaning: "고객 보관용 영수증(송장 사본)" }]
          }
        ]
      },
      {
        id: 10,
        title: "우산 및 우비 위치 물어보기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、外で急に雨が降ってきたのですが、傘はどこにありますか？",
            translation: "실례합니다, 밖에 갑자기 비가 내리기 시작했는데 우산은 어디에 있나요?",
            expressions: [{ phrase: "外で急に雨が降ってきた", meaning: "밖에서 갑자기 비가 내리기 시작했다" }],
            vocabulary: [{ word: "急(きゅう)に", meaning: "갑자기" }, { word: "雨(あめ)が降る(ふる)", meaning: "비가 내리다" }, { word: "傘(かさ)", meaning: "우산" }]
          },
          {
            role: "점원", side: "left",
            text: "傘立ては入口のすぐ横にございます！透明のビニール傘と、コンパクトな折りたたみ傘がございます。",
            translation: "우산 진열대는 입구 바로 옆에 있습니다! 투명 비닐우산과 휴대하기 좋은 접이식 우산이 있어요.",
            expressions: [{ phrase: "透明のビニール傘と、コンパクトな折りたたみ傘", meaning: "투명 비닐우산과 작은 접이식 우산" }],
            vocabulary: [{ word: "傘立て(かさたて)", meaning: "우산꽂이, 우산 진열대" }, { word: "透明(とうめい)", meaning: "투명" }, { word: "ビニール傘(がさ)", meaning: "비닐우산" }, { word: "折りたたみ傘(おりたたみがさ)", meaning: "접이식 우산" }]
          },
          {
            role: "손님", side: "right",
            text: "子どもには傘よりレインコートを着せたいのですが、子ども用のレインコートやポンチョはありますか？",
            translation: "아이에게는 우산보다 우비를 입히고 싶은데요, 어린이용 우비나 판초 우의가 있나요?",
            expressions: [{ phrase: "子ども用のレインコートやポンチョ", meaning: "어린이용 비옷(우비)이나 판초형 우의" }],
            vocabulary: [{ word: "着せる(きせる)", meaning: "(옷을) 입히다" }, { word: "子ども用(こどもよう)", meaning: "어린이용" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、その棚の一番下の段に、大人用と子ども用のレインポンチョがございます！",
            translation: "네, 저 진열대 맨 아랫단에 성인용과 어린이용 레인 판초(우비)가 있습니다!",
            expressions: [{ phrase: "その棚の一番下の段に", meaning: "그 선반 맨 아래 칸에" }],
            vocabulary: [{ word: "一番下(いちばんした)", meaning: "맨 아래" }, { word: "段(だん)", meaning: "단, 칸" }, { word: "大人用(おとなよう)", meaning: "성인용" }]
          },
          {
            role: "손님", side: "right",
            text: "よかったです！ビニール傘を2本と子ども用のレインポンチョを1つください。すぐ使いたいのでタグを切っていただけますか？",
            translation: "다행이네요! 비닐우산 두 개와 어린이용 판초 우비 하나 주세요. 지금 바로 쓰고 나가고 싶은데 가격표 택을 잘라 주실 수 있나요?",
            expressions: [{ phrase: "すぐ使いたいのでタグを切っていただけますか？", meaning: "바로 사용하고 싶으니 상품 태그(가격표)를 잘라 주실 수 있나요?" }],
            vocabulary: [{ word: "2本(にほん)", meaning: "(우산 등) 두 개" }, { word: "使う(つかう)", meaning: "사용하다" }, { word: "切る(きる)", meaning: "자르다" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！傘のビニールと値札はハサミで外しておきましたので、そのままお持ちください。足元にお気をつけて！",
            translation: "알겠습니다! 우산 비닐 포장지와 가격표는 가위로 떼어 두었으니 그대로 쓰고 가시면 됩니다. 빗길 조심하세요!",
            expressions: [{ phrase: "足元にお気をつけて！", meaning: "빗길에 발밑(미끄러짐) 조심하세요!" }],
            vocabulary: [{ word: "値札(ねふだ)", meaning: "가격표" }, { word: "外す(はずす)", meaning: "떼어내다" }, { word: "足元(あしもと)", meaning: "발밑, 걸음" }]
          }
        ]
      },
      {
        id: 11,
        title: "스마트폰 충전 케이블/보조배터리 구매",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、スマホの充電が切れそうなのですが、充電ケーブルやモバイルバッテリーは売っていますか？",
            translation: "실례합니다, 스마트폰 배터리가 다 되어 가는데 충전 케이블이나 보조배터리를 판매하나요?",
            expressions: [{ phrase: "充電ケーブルやモバイルバッテリーは売っていますか？", meaning: "충전 케이블이나 보조배터리를 파나요?" }],
            vocabulary: [{ word: "充電(じゅうでん)が切れる(きれる)", meaning: "배터리가 다 되다(방전되다)" }, { word: "売る(うる)", meaning: "팔다, 판매하다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、1番通路のスマートフォン用品コーナーにございます！端子はType-Cですか？それともライトニングですか？",
            translation: "네, 1번 통로 스마트폰 용품 코너에 있습니다! 단자는 C타입인가요, 아니면 라이트닝(8핀)인가요?",
            expressions: [{ phrase: "端子はType-Cですか？", meaning: "충전 단자는 C타입인가요?" }],
            vocabulary: [{ word: "1番通路(いちばんつうろ)", meaning: "1번 통로" }, { word: "用品(ようひん)", meaning: "용품" }, { word: "端子(たんし)", meaning: "단자, 커넥터" }]
          },
          {
            role: "손님", side: "right",
            text: "Type-Cです。買って箱から出してすぐに使える、充電済みのモバイルバッテリーはありますか？",
            translation: "C타입입니다. 사서 상자에서 꺼내자마자 바로 쓸 수 있는, 미리 충전된 보조배터리가 있나요?",
            expressions: [{ phrase: "買って箱から出してすぐに使える、充電済みの〜", meaning: "구매해 상자에서 꺼내자마자 바로 쓸 수 있는 충전 완료된 ~" }],
            vocabulary: [{ word: "箱(はこ)", meaning: "상자" }, { word: "出す(だす)", meaning: "꺼내다" }, { word: "充電済み(じゅうでんずみ)", meaning: "사전 충전 완료" }]
          },
          {
            role: "점원", side: "left",
            text: "はい！こちらのバッテリーは最初から充電されており、Type-Cケーブルも本体に内蔵されているのでそのまま挿して使えますよ。",
            translation: "네! 이 보조배터리는 처음부터 충전되어 있고, C타입 케이블도 본체에 내장되어 있어서 그대로 꽂아 쓰실 수 있습니다.",
            expressions: [{ phrase: "ケーブルも本体に内蔵されているので", meaning: "충전선도 본체에 일체형으로 내장되어 있어서" }],
            vocabulary: [{ word: "最初(さいしょ)から", meaning: "처음부터" }, { word: "本体(ほんたい)", meaning: "본체" }, { word: "内蔵(ないぞう)される", meaning: "내장되다" }, { word: "挿す(さす)", meaning: "(플러그·단자를) 꽂다" }]
          },
          {
            role: "손님", side: "right",
            text: "それは便利ですね！ちなみに、入口にあるのはレンタル用のモバイルバッテリーですか？",
            translation: "그거 참 편리하네요! 그런데 입구에 있는 기기는 대여용 공유 보조배터리인가요?",
            expressions: [{ phrase: "レンタル用のモバイルバッテリー", meaning: "대여용 공유 보조배터리 (일본 편의점의 ChargeSPOT 등)" }],
            vocabulary: [{ word: "便利(べんり)", meaning: "편리함" }, { word: "入口(いりぐち)", meaning: "입구" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、あちらはアプリで借りて別のコンビニでも返却できるレンタル充電器です。購入される場合はこちらをレジへお持ちください！",
            translation: "네, 저건 앱으로 빌려서 다른 편의점에도 반납할 수 있는 대여 충전기입니다. 직접 구매하실 경우에는 이 제품을 계산대로 가져오시면 됩니다!",
            expressions: [{ phrase: "別のコンビニでも返却できる", meaning: "다른 편의점 지점에서도 반납할 수 있다" }],
            vocabulary: [{ word: "借りる(かりる)", meaning: "빌리다" }, { word: "返却(へんきゃく)する", meaning: "반납하다" }, { word: "購入(こうにゅう)する", meaning: "구매하다" }]
          }
        ]
      },
      {
        id: 12,
        title: "유심칩 핀이나 건전지 규격 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、子どものおもちゃの電池が切れてしまって、乾電池はどこにありますか？",
            translation: "실례합니다, 아이 장난감 건전지가 다 닳아서 그러는데 건전지는 어디에 있나요?",
            expressions: [{ phrase: "おもちゃの電池が切れてしまって", meaning: "장난감 배터리가 다 닳아서" }],
            vocabulary: [{ word: "電池(でんち)", meaning: "전지, 배터리" }, { word: "乾電池(かんでんち)", meaning: "건전지" }]
          },
          {
            role: "점원", side: "left",
            text: "乾電池はレジ前の棚にございます！サイズは「単3」と「単4」、それともボタン電池でしょうか？",
            translation: "건전지는 계산대 앞 진열대에 있습니다! 규격은 '단3(AA)'과 '단4(AAA)', 아니면 동전형 버튼 전지인가요?",
            expressions: [{ phrase: "サイズは「単3」と「単4」", meaning: "일본에서는 AA 건전지를 '単3(たんさん)', AAA 건전지를 '単4(たんよん)'라고 부름" }],
            vocabulary: [{ word: "単3(たんさん)", meaning: "AA 규격 건전지" }, { word: "単4(たんよん)", meaning: "AAA 규격 건전지" }, { word: "ボタン電池(でんち)", meaning: "단추형(동전형) 수은 건전지" }]
          },
          {
            role: "손님", side: "right",
            text: "細い方の「単4」のアルカリ電池を4本入り1パックお願いします。",
            translation: "가는 쪽인 '단4(AAA)' 알카라인 건전지 4개입 한 팩으로 부탁합니다.",
            expressions: [{ phrase: "細い方の「単4」のアルカリ電池", meaning: "두께가 가는 AAA(단4) 알카라인 건전지" }],
            vocabulary: [{ word: "細い(ほそい)", meaning: "가늘다, 얇다" }, { word: "4本入り(よんほんいり)", meaning: "4개입" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、こちらが単4電池の4本パックです！おもちゃの電池カバーを開けるのに小さいドライバーは使いますか？",
            translation: "네, 여기 단4(AAA) 건전지 4개입 팩입니다! 장난감 건전지 덮개를 여는 데 작은 드라이버가 필요하신가요?",
            expressions: [{ phrase: "電池カバーを開けるのに小さいドライバー", meaning: "건전지 덮개를 열기 위한 소형 십자드라이버" }],
            vocabulary: [{ word: "開ける(あける)", meaning: "열다" }, { word: "小さい(ちいさい)", meaning: "작다" }]
          },
          {
            role: "손님", side: "right",
            text: "ドライバーは大丈夫です、ありがとうございます！あの、スマホのSIMカードを入れ替えたいのですが、クリップかピンを少しだけ借りられますか？",
            translation: "드라이버는 괜찮습니다, 감사해요! 저기, 스마트폰 유심카드를 갈아 끼우고 싶은데 클립이나 유심 핀을 잠깐만 빌릴 수 있을까요?",
            expressions: [{ phrase: "クリップかピンを少しだけ借りられますか？", meaning: "종이 클립이나 유심 핀을 잠시만 빌릴 수 있을까요?" }],
            vocabulary: [{ word: "入れ替える(いれかえる)", meaning: "교체하다, 갈아 끼우다" }, { word: "借りる(かりる)", meaning: "빌리다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、レジの引き出しにゼムクリップがございますので、どうぞこちらでお使いください！",
            translation: "네, 계산대 서랍에 종이 클립이 있으니 편하게 여기서 바로 사용하세요!",
            expressions: [{ phrase: "レジの引き出しにゼムクリップがございます", meaning: "계산대 서랍에 클립(젬클립)이 있습니다" }],
            vocabulary: [{ word: "引き出し(ひきだし)", meaning: "서랍" }, { word: "ゼムクリップ", meaning: "종이 클립" }]
          }
        ]
      },
      {
        id: 13,
        title: "행사 상품(1+1, 2+1) 적용 확인하기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、棚に「1つ買うと1つ無料」と書いてあったこの緑茶を買いたいのですが、今2本持って行けばいいですか？",
            translation: "실례합니다, 진열대에 '하나 사면 하나 무료(1+1)'라고 적혀 있던 이 녹차를 사고 싶은데요, 지금 두 병을 가져가면 되나요?",
            expressions: [{ phrase: "「1つ買うと1つ無料」と書いてあった", meaning: "'1개 구매 시 1개 무료 증정'이라고 적혀 있었다" }],
            vocabulary: [{ word: "棚(たな)", meaning: "진열대, 선반" }, { word: "買う(かう)", meaning: "사다" }, { word: "無料(むりょう)", meaning: "무료" }, { word: "緑茶(りょくちゃ)", meaning: "녹차" }, { word: "2本(にほん)", meaning: "두 병" }]
          },
          {
            role: "점원", side: "left",
            text: "いいご質問ですね！日本のコンビニの「1つ買うと1つもらえる」キャンペーンは、まず今日1本買うと、レシートに無料引換券が印字される仕組みです。",
            translation: "좋은 질문이십니다! 일본 편의점의 '하나 사면 하나 증정(プライチ)' 행사는, 우선 오늘 1병을 사시면 영수증에 무료 교환권이 인쇄되는 방식입니다.",
            expressions: [{ phrase: "レシートに無料引換券が印字される仕組み", meaning: "영수증 하단에 다음 주부터 쓸 수 있는 무료 교환권 바코드가 인쇄되는 방식 (한국의 1+1과의 결정적 차이)" }],
            vocabulary: [{ word: "質問(しつもん)", meaning: "질문" }, { word: "無料引換券(むりょうひきかえけん)", meaning: "무료 교환권" }, { word: "印字(いんじ)される", meaning: "인쇄되다" }, { word: "仕組み(しくみ)", meaning: "시스템, 방식" }]
          },
          {
            role: "손님", side: "right",
            text: "あ、韓国のように今すぐ2本を1本分の値段で買うシステムではないのですね！",
            translation: "아, 한국처럼 지금 당장 두 병을 가져와서 한 병 가격으로 사는 시스템이 아니군요!",
            expressions: [{ phrase: "今すぐ2本を1本分の値段で買う", meaning: "지금 바로 2병을 1병 가격으로 구매하다" }],
            vocabulary: [{ word: "韓国(かんこく)", meaning: "한국" }, { word: "1本分(いっぽんぶん)", meaning: "한 병분" }, { word: "値段(ねだん)", meaning: "가격" }]
          },
          {
            role: "점원", side: "left",
            text: "そうなんです！その代わり、こちらのグミは「2個一緒に買うと50円引き」のセット割引が今すぐ適用されますよ。",
            translation: "그렇습니다! 대신 여기 있는 젤리는 '2개 함께 구매 시 50엔 할인'되는 세트 할인이 지금 바로 적용됩니다.",
            expressions: [{ phrase: "2個一緒に買うと50円引き", meaning: "2개를 함께 사면 50엔 즉시 할인" }],
            vocabulary: [{ word: "代わり(かわり)", meaning: "대신" }, { word: "2個(にこ)", meaning: "두 개" }, { word: "50円引き(ごじゅうえんびき)", meaning: "50엔 할인" }, { word: "適用(てきよう)される", meaning: "적용되다" }]
          },
          {
            role: "손님", side: "right",
            text: "なるほど！では、緑茶は1本だけにして、グミはブドウ味とリンゴ味の2個をください。",
            translation: "그렇군요! 그럼 녹차는 한 병만 사고, 젤리는 포도 맛과 사과 맛 두 개로 주세요.",
            expressions: [{ phrase: "緑茶は1本だけにして", meaning: "녹차는 1병만 하는 것으로 하고" }],
            vocabulary: [{ word: "ブドウ味(あじ)", meaning: "포도 맛" }, { word: "リンゴ味(あじ)", meaning: "사과 맛" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！レシートの下に付いている緑茶の無料引換券は、来週の火曜日から全国の店舗で引き換えられます。",
            translation: "알겠습니다! 영수증 아래쪽에 붙어 있는 녹차 무료 교환권은 다음 주 화요일부터 전국 매장에서 교환하실 수 있습니다.",
            expressions: [{ phrase: "全国の店舗で引き換えられます", meaning: "전국 어느 지점에서나 상품으로 교환할 수 있습니다" }],
            vocabulary: [{ word: "来週(らいしゅう)", meaning: "다음 주" }, { word: "火曜日(かようび)", meaning: "화요일" }, { word: "全国(ぜんこく)", meaning: "전국" }, { word: "店舗(てんぽ)", meaning: "매장, 점포" }, { word: "引き換える(ひきかえる)", meaning: "교환하다" }]
          }
        ]
      },
      {
        id: 14,
        title: "연령 확인 화면 터치 및 여권 제시",
        lines: [
          {
            role: "점원", side: "left",
            text: "いらっしゃいませ。生ビール2本とおつまみですね。お酒をご購入のため、年齢確認をお願いいたします。",
            translation: "어서 오세요. 생맥주 두 캔과 안주 말씀이시죠. 주류를 구매하셔서 연령 확인을 부탁드립니다.",
            expressions: [{ phrase: "お酒をご購入のため、年齢確認をお願いいたします", meaning: "주류 구매이므로 성인 연령 확인을 부탁드립니다" }],
            vocabulary: [{ word: "お酒(さけ)", meaning: "술, 주류" }, { word: "購入(こうにゅう)", meaning: "구매" }, { word: "年齢確認(ねんれいかくにん)", meaning: "연령 확인" }]
          },
          {
            role: "손님", side: "right",
            text: "はい、パスポートをお見せすればいいですか？それとも前の画面をタッチすればいいですか？",
            translation: "네, 여권을 보여드리면 되나요? 아니면 앞에 있는 화면을 터치하면 되나요?",
            expressions: [{ phrase: "前の画面をタッチすればいいですか？", meaning: "계산대 앞 고객용 화면을 터치하면 되나요?" }],
            vocabulary: [{ word: "見せる(みせる)", meaning: "보여주다" }, { word: "前(まえ)の画面(がめん)", meaning: "앞쪽 모니터 화면" }]
          },
          {
            role: "점원", side: "left",
            text: "お客様側の液晶画面に表示されている「20歳以上（はい）」のボタンをタッチしていただければ大丈夫です！",
            translation: "손님 쪽 액정 화면에 떠 있는 '만 20세 이상(예)' 버튼만 터치해 주시면 됩니다!",
            expressions: [{ phrase: "「20歳以上（はい）」のボタンをタッチ", meaning: "일본 편의점에서 술·담배 구매 시 고객 화면의 '20세 이상(はい)' 버튼을 직접 눌러야 바코드 결제가 넘어감" }],
            vocabulary: [{ word: "お客様側(きゃくさまがわ)", meaning: "손님 쪽" }, { word: "液晶画面(えきしょうがめん)", meaning: "액정 화면" }, { word: "20歳以上(はたちいじょう)", meaning: "만 20세 이상 (일본의 성인 주류 구매 기준 연령)" }]
          },
          {
            role: "손님", side: "right",
            text: "画面の「はい」をタッチしました！おつまみのチーズタラと枝豆も同じ袋に入れてください。",
            translation: "화면의 '예(はい)'를 터치했습니다! 안주로 산 치즈 대구포(치즈타라)와 풋콩(에다마메)도 같은 봉투에 넣어 주세요.",
            expressions: [{ phrase: "同じ袋に入れてください", meaning: "같은 봉투에 넣어 주세요" }],
            vocabulary: [{ word: "枝豆(えだまめ)", meaning: "풋콩 (삶은 대두 안주)" }, { word: "同じ(おなじ)", meaning: "같은" }, { word: "袋(ふくろ)", meaning: "봉투" }]
          },
          {
            role: "점원", side: "left",
            text: "ご協力ありがとうございます！枝豆は冷たいままお召し上がりですか？少し温めることもできますよ。",
            translation: "협조해 주셔서 감사합니다! 풋콩(에다마메)은 차가운 상태 그대로 드시나요? 살짝 데워 드릴 수도 있습니다.",
            expressions: [{ phrase: "冷たいままお召し上がりですか？", meaning: "차가운 상태 그대로 드시나요?" }],
            vocabulary: [{ word: "協力(きょうりょく)", meaning: "협조" }, { word: "冷たい(つめたい)まま", meaning: "차가운 그대로" }, { word: "温める(あたためる)", meaning: "데우다" }]
          },
          {
            role: "손님", side: "right",
            text: "あ、温められるんですね！では、枝豆だけ少し温めてください。ありがとうございます。",
            translation: "아, 데울 수도 있군요! 그럼 풋콩만 살짝 데워 주세요. 감사합니다.",
            expressions: [{ phrase: "枝豆だけ少し温めてください", meaning: "풋콩만 살짝 데워 주세요" }],
            vocabulary: [{ word: "少し(すこし)", meaning: "조금, 살짝" }]
          }
        ]
      },
      {
        id: 15,
        title: "현금 결제 후 잔돈/동전 교환 요청",
        lines: [
          {
            role: "점원", side: "left",
            text: "ミネラルウォーターとガムで、合計250円になります。",
            translation: "생수와 껌 해서 총 250엔입니다.",
            expressions: [{ phrase: "合計250円になります", meaning: "총합 250엔입니다" }],
            vocabulary: [{ word: "合計(ごうけい)", meaning: "합계, 총액" }, { word: "250円(にひゃくごじゅうえん)", meaning: "250엔" }]
          },
          {
            role: "손님", side: "right",
            text: "細かいお金がなくてすみません、1万円札しかなくてこれで払っても大丈夫ですか？",
            translation: "잔돈이 없어서 죄송합니다, 1만 엔짜리 지폐밖에 없는데 이걸로 내도 괜찮을까요?",
            expressions: [{ phrase: "細かいお金がなくてすみません", meaning: "잔돈(소액권)이 없어서 미안합니다" }, { phrase: "1万円札しかなくて", meaning: "1만 엔권 지폐밖에 없어서" }],
            vocabulary: [{ word: "細かい(こまかい)お金(かね)", meaning: "잔돈, 소액권" }, { word: "1万円札(いちまんえんさつ)", meaning: "1만 엔권 지폐" }, { word: "払う(はらう)", meaning: "지불하다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、全く問題ございません！自動釣銭機に1万円札をお入れください。9,750円のお返しです。",
            translation: "네, 전혀 문제없습니다! 자동 정산기에 1만 엔권 지폐를 넣어 주세요. 거스름돈은 9,750엔입니다.",
            expressions: [{ phrase: "自動釣銭機に1万円札をお入れください", meaning: "자동 입출금 정산기에 1만 엔 지폐를 넣어 주십시오 (일본 편의점 대부분에 도입된 현금 투입기)" }],
            vocabulary: [{ word: "問題(もんだい)", meaning: "문제" }, { word: "自動釣銭機(じどうつりせんき)", meaning: "자동 거스름돈 정산기" }, { word: "お返し(かえし)", meaning: "거스름돈 (お釣り(つり))" }]
          },
          {
            role: "손님", side: "right",
            text: "あの、ホテルのコインランドリーを使いたいのですが、お釣りの500円玉1枚を100円玉5枚に両替していただけますか？",
            translation: "저기, 호텔 코인 세탁기를 쓰려고 하는데요, 거스름돈으로 나온 500엔 동전 한 개를 100엔 동전 다섯 개로 바꿔 주실 수 있나요?",
            expressions: [{ phrase: "500円玉1枚を100円玉5枚に両替していただけますか？", meaning: "500엔 동전 1개를 100엔 동전 5개로 교환해 주실 수 있나요?" }],
            vocabulary: [{ word: "お釣り(つり)", meaning: "거스름돈" }, { word: "500円玉(ごひゃくえんだま)", meaning: "500엔짜리 동전" }, { word: "100円玉(ひゃくえんだま)", meaning: "100엔짜리 동전" }, { word: "両替(りょうがえ)する", meaning: "잔돈을 바꾸다, 환전하다" }]
          },
          {
            role: "점원", side: "left",
            text: "かしこまりました！お買い物をしていただいたお客様でしたら両替できますよ。こちらが100円玉5枚です。",
            translation: "알겠습니다! 물건을 구매하신 손님께는 잔돈 교환을 해 드릴 수 있습니다. 여기 100엔 동전 다섯 개입니다.",
            expressions: [{ phrase: "こちらが100円玉5枚です", meaning: "여기 100엔 동전 5개입니다" }],
            vocabulary: [{ word: "買い物(かいもの)", meaning: "물건 구매, 쇼핑" }, { word: "5枚(ごまい)", meaning: "(동전·지폐 등) 다섯 개, 다섯 장" }]
          },
          {
            role: "손님", side: "right",
            text: "コインランドリーで100円玉が必要だったので本当に助かりました。ありがとうございます！",
            translation: "코인 세탁기에서 100엔 동전이 꼭 필요했는데 정말 큰 도움이 되었습니다. 감사합니다!",
            expressions: [{ phrase: "本当に助かりました", meaning: "정말 큰 도움이 되었습니다" }],
            vocabulary: [{ word: "必要(ひつよう)", meaning: "필요" }, { word: "助かる(たすかる)", meaning: "도움이 되다" }]
          }
        ]
      },
      {
        id: 16,
        title: "모바일 바코드/QR 결제 요청하기",
        lines: [
          {
            role: "점원", side: "left",
            text: "お会計は合計で850円になります。お支払い方法はいかがなさいますか？",
            translation: "결제 금액은 총 850엔입니다. 결제 수단은 어떻게 하시겠어요?",
            expressions: [{ phrase: "お支払い方法はいかがなさいますか？", meaning: "결제 방법은 어떻게 하시겠습니까?" }],
            vocabulary: [{ word: "会計(かいけい)", meaning: "계산, 결제" }, { word: "支払い方法(しはらいほうほう)", meaning: "결제 방법(수단)" }]
          },
          {
            role: "손님", side: "right",
            text: "スマホのバーコード決済でお願いします。PayPayやAlipayプラスは使えますか？",
            translation: "스마트폰 바코드 결제로 부탁합니다. 페이페이(PayPay)나 알리페이 플러스를 쓸 수 있나요?",
            expressions: [{ phrase: "スマホのバーコード決済でお願いします", meaning: "스마트폰 바코드 결제로 부탁합니다 (일본 편의점에서 카카오페이·네이버페이 연동 시 'バーコード決済(바코드 결제)'라고 말하면 즉시 통함)" }],
            vocabulary: [{ word: "決済(けっさい)", meaning: "결제" }, { word: "使える(つかえる)", meaning: "사용할 수 있다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、使えますよ！お客様側のタッチパネルで「バーコード決済」のボタンを押してください。",
            translation: "네, 사용 가능합니다! 손님 쪽 터치패널 화면에서 '바코드 결제(バーコード決済)' 버튼을 눌러주세요.",
            expressions: [{ phrase: "タッチパネルで「バーコード決済」のボタンを押す", meaning: "터치스크린에서 '바코드 결제' 버튼을 누르다" }],
            vocabulary: [{ word: "押す(おす)", meaning: "누르다" }]
          },
          {
            role: "손님", side: "right",
            text: "ボタンを押しました。スマホのバーコード画面をスキャナーにかざせばいいですか？",
            translation: "버튼을 눌렀습니다. 스마트폰 바코드 화면을 스캐너에 보여드리면 되나요?",
            expressions: [{ phrase: "バーコード画面をスキャナーにかざす", meaning: "바코드 화면을 스캐너에 갖다 대다(보여주다)" }],
            vocabulary: [{ word: "画面(がめん)", meaning: "화면" }, { word: "かざす", meaning: "갖다 대다, 비추다" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、こちらの赤い光が出るリーダーに画面を向けてください。画面を少し明るくしていただくとすぐ読み取れます！",
            translation: "네, 여기 빨간 불빛이 나오는 리더기에 화면을 비춰 주세요. 화면을 조금 밝게 해 주시면 바로 인식됩니다!",
            expressions: [{ phrase: "画面を少し明るくしていただくと", meaning: "휴대폰 화면을 조금 밝게 해 주시면" }],
            vocabulary: [{ word: "赤い光(あかいひかり)", meaning: "빨간 불빛" }, { word: "向ける(むける)", meaning: "향하게 하다, 비추다" }, { word: "明るい(あかるい)", meaning: "밝다" }, { word: "読み取れる(よみとれる)", meaning: "(바코드를) 읽을 수 있다, 인식되다" }]
          },
          {
            role: "손님", side: "right",
            text: "「ペイペイ！」と音が鳴って決済できましたね。早くて便利です、ありがとうございます！",
            translation: "'페이페이!' 하고 소리가 나면서 결제가 완료되었네요. 빠르고 편리하네요, 감사합니다!",
            expressions: [{ phrase: "音が鳴って決済できました", meaning: "결제 완료음이 울리며 계산이 끝났습니다" }],
            vocabulary: [{ word: "早い(はやい)", meaning: "빠르다" }, { word: "便利(べんり)", meaning: "편리함" }]
          }
        ]
      },
      {
        id: 17,
        title: "얼음컵과 파우치 음료 조합해 사기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、このアイスティーを入れて飲む用の、氷が入ったプラカップはどこにありますか？",
            translation: "실례합니다, 이 아이스티를 부어서 마실 얼음 든 플라스틱 컵(얼음컵)은 어디에 있나요?",
            expressions: [{ phrase: "氷が入ったプラカップ", meaning: "얼음이 들어 있는 플라스틱 얼음컵 (일본에서는 カップ氷(こおり) 또는 ロックアイス라고 부름)" }],
            vocabulary: [{ word: "入れる(いれる)", meaning: "넣다, 붓다" }, { word: "飲む用(のむよう)", meaning: "마시기 위한 용도" }, { word: "氷(こおり)", meaning: "얼음" }]
          },
          {
            role: "점원", side: "left",
            text: "カップ入りのロックアイスは、アイスクリーム売り場のすぐ隣の冷凍ケースにございます！",
            translation: "컵에 든 얼음(록아이스)은 아이스크림 코너 바로 옆 냉동 진열대에 있습니다!",
            expressions: [{ phrase: "アイスクリーム売り場のすぐ隣の冷凍ケース", meaning: "아이스크림 코너 바로 옆 냉동고" }],
            vocabulary: [{ word: "売り場(うりば)", meaning: "매장 코너, 파는 곳" }, { word: "隣(となり)", meaning: "옆" }, { word: "冷凍(れいとう)ケース", meaning: "냉동 진열대" }]
          },
          {
            role: "손님", side: "right",
            text: "ありました！あと、冷凍ケースにあったこのイチゴとバナナのカップは、どうやって飲むのですか？",
            translation: "찾았습니다! 그리고 냉동고에 있던 이 냉동 딸기·바나나 컵은 어떻게 마시는 건가요?",
            expressions: [{ phrase: "どうやって飲むのですか？", meaning: "어떻게 해서 마시는 건가요?" }],
            vocabulary: [{ word: "イチゴ", meaning: "딸기" }]
          },
          {
            role: "점원", side: "left",
            text: "そちらは大人気の「お店で作るスムージー」です！お会計後に、コーヒーマシンの横にある専用マシンで作れますよ。",
            translation: "그건 인기가 아주 많은 '매장에서 만드는 즉석 스무디'입니다! 계산하신 후에 커피 머신 옆에 있는 전용 기계에서 만드실 수 있어요.",
            expressions: [{ phrase: "お店で作るスムージー", meaning: "세븐일레븐 등에서 큰 인기를 끄는 즉석 과일 스무디" }],
            vocabulary: [{ word: "大人気(だいにんき)", meaning: "대인기" }, { word: "作る(つくる)", meaning: "만들다" }, { word: "専用(せんよう)", meaning: "전용" }]
          },
          {
            role: "손님", side: "right",
            text: "子どもが喜びそうなので、このスムージーも1つ買います。マシンの使い方は簡単ですか？",
            translation: "아이가 좋아할 것 같아서 이 스무디도 하나 살게요. 기계 사용법은 간단한가요?",
            expressions: [{ phrase: "マシンの使い方は簡単ですか？", meaning: "기계 사용 방법은 간단한가요?" }],
            vocabulary: [{ word: "喜ぶ(よろこぶ)", meaning: "기뻐하다, 좋아하다" }, { word: "使い方(つかいかた)", meaning: "사용법" }, { word: "簡単(かんたん)", meaning: "간단함" }]
          },
          {
            role: "점원", side: "left",
            text: "とても簡単です！マシンのセンサーにフタのバーコードをかざすとドアが開くので、フタを取ってカップを入れるだけで70秒で完成します！",
            translation: "아주 간단합니다! 기계 센서에 뚜껑의 바코드를 갖다 대면 문이 열리는데, 비닐 뚜껑을 떼고 컵을 넣기만 하면 70초 만에 완성됩니다!",
            expressions: [{ phrase: "フタのバーコードをかざすとドアが開く", meaning: "컵 뚜껑의 바코드를 스캔하면 기계 문이 열린다" }],
            vocabulary: [{ word: "開く(あく)", meaning: "(문이) 열리다" }, { word: "取る(とる)", meaning: "(뚜껑을) 떼어내다" }, { word: "70秒(ななじゅうびょう)", meaning: "70초" }, { word: "完成(かんせい)する", meaning: "완성되다" }]
          }
        ]
      },
      {
        id: 18,
        title: "상비 의약품(소화제/밴드) 코너 찾기",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、夜遅くて近くの薬局が閉まっているのですが、コンビニに胃腸ドリンクや絆創膏はありますか？",
            translation: "실례합니다, 밤이 늦어서 근처 약국이 문을 닫았는데요, 편의점에 마시는 위장 드링크(소화제)나 일회용 밴드가 있나요?",
            expressions: [{ phrase: "近くの薬局が閉まっているのですが", meaning: "근처 약국이 문을 닫았는데요" }, { phrase: "胃腸ドリンクや絆創膏はありますか？", meaning: "마시는 소화제 드링크나 밴드가 있나요?" }],
            vocabulary: [{ word: "夜遅く(よるおそく)", meaning: "밤늦게" }, { word: "薬局(やっきょく)", meaning: "약국" }, { word: "閉まる(しまる)", meaning: "(문이) 닫히다" }, { word: "胃腸(いちょう)ドリンク", meaning: "마시는 소화제·위장 음료" }, { word: "絆創膏(ばんそうこう)", meaning: "일회용 밴드" }]
          },
          {
            role: "점원", side: "left",
            text: "はい！医薬品ではありませんが、指定医薬部外品の胃腸ドリンクと絆創膏のお取り扱いがございます。",
            translation: "네! 일반의약품은 아니지만 의약외품으로 나온 위장 소화 드링크와 일회용 밴드를 취급하고 있습니다.",
            expressions: [{ phrase: "指定医薬部外品の胃腸ドリンク", meaning: "편의점에서도 판매 가능한 지정의약외품 위장·소화 드링크" }],
            vocabulary: [{ word: "医薬品(いやくひん)", meaning: "의약품" }, { word: "指定医薬部外品(していいやくぶがいひん)", meaning: "지정의약외품" }, { word: "取り扱い(とりあつかい)", meaning: "취급, 판매" }]
          },
          {
            role: "손님", side: "right",
            text: "食べ過ぎて胃がもたれているのですが、その胃腸ドリンクはどこにありますか？",
            translation: "과식을 해서 속이 더부룩한데, 그 위장 드링크는 어디에 있나요?",
            expressions: [{ phrase: "食べ過ぎて胃がもたれている", meaning: "과식해서 속이 더부룩하다(체기가 있다)" }],
            vocabulary: [{ word: "食べ過ぎる(たべすぎる)", meaning: "과식하다, 너무 많이 먹다" }, { word: "胃(い)がもたれる", meaning: "속이 더부룩하다" }]
          },
          {
            role: "점원", side: "left",
            text: "栄養ドリンクの冷蔵ケースの下の段に、ウコンや生薬配合の胃腸ドリンク「ソルマック」がございます！",
            translation: "영양 드링크 냉장 진열대 아랫단에 강황(우콘)이나 생약 성분이 배합된 위장 소화 드링크 '솔맥(ソルマック)'이 있습니다!",
            expressions: [{ phrase: "生薬配合の胃腸ドリンク「ソルマック」", meaning: "생약 성분이 든 일본 편의점의 대표 액상 소화제 '솔맥'" }],
            vocabulary: [{ word: "栄養(えいよう)ドリンク", meaning: "영양 드링크, 박카스류 음료" }, { word: "ウコン", meaning: "울금, 강황" }, { word: "生薬配合(しょうやくはいごう)", meaning: "생약 성분 배합" }]
          },
          {
            role: "손님", side: "right",
            text: "ありがとうございます！あと、たくさん歩いてかかとに靴擦れができたのですが、クッション付きの絆創膏はありますか？",
            translation: "감사합니다! 그리고 너무 많이 걸어서 발뒤꿈치가 신발에 쓸려 까졌는데, 쿠션이 있는 밴드(습윤 패드)도 있나요?",
            expressions: [{ phrase: "かかとに靴擦れができた", meaning: "발뒤꿈치에 신발 쓸림 상처(물집)가 생겼다" }],
            vocabulary: [{ word: "歩く(あるく)", meaning: "걷다" }, { word: "かかと", meaning: "발뒤꿈치" }, { word: "靴擦れ(くつずれ)", meaning: "신발에 발이 쓸려 까짐" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、3番通路の衛生用品コーナーに、通常の絆創膏と、靴擦れ専用のハイドロコロイドパッドがございますよ。",
            translation: "네, 3번 통로 위생용품 코너에 일반 밴드와 신발 쓸림 전용 하이드로콜로이드 패드가 모두 있습니다.",
            expressions: [{ phrase: "靴擦れ専用のハイドロコロイドパッド", meaning: "발뒤꿈치 신발 쓸림 전용 하이드로콜로이드 습윤 밴드" }],
            vocabulary: [{ word: "衛生用品(えいせいようひん)", meaning: "위생용품" }, { word: "通常(つうじょう)", meaning: "일반, 보통" }]
          }
        ]
      },
      {
        id: 19,
        title: "공연/미술관 티켓 발권기 사용 문의",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、ネットで予約した美術館のチケットを発券したいのですが、店内の端末はどこですか？",
            translation: "실례합니다, 인터넷으로 예약한 미술관 티켓을 발권하고 싶은데요, 매장 내 무인 단말기는 어디에 있나요?",
            expressions: [{ phrase: "ネットで予約した美術館のチケットを発券したい", meaning: "온라인으로 예매한 미술관 티켓을 실물로 발권하고 싶다" }],
            vocabulary: [{ word: "美術館(びじゅつかん)", meaning: "미술관" }, { word: "発券(はっけん)する", meaning: "(티켓을) 발권하다" }, { word: "端末(たんまつ)", meaning: "단말기, 키오스크" }]
          },
          {
            role: "점원", side: "left",
            text: "チケットの発券ですね！コピー機の隣にあるこちらの赤い端末「Loppi」またはマルチコピー機をお使いください。",
            translation: "티켓 발권 말씀이시죠! 복사기 옆에 있는 이 빨간 단말기 '롯피(Loppi)' 또는 멀티복합기를 이용해 주세요.",
            expressions: [{ phrase: "コピー機の隣にある〜端末", meaning: "복사기 옆에 있는 무인 발권 단말기 (로손은 Loppi, 패밀리마트·세븐일레븐은 マルチコピー機 사용)" }],
            vocabulary: [{ word: "コピー機(き)", meaning: "복사기" }, { word: "隣(となり)", meaning: "옆" }, { word: "赤い(あかい)", meaning: "빨간" }]
          },
          {
            role: "손님", side: "right",
            text: "予約番号と電話番号を入力したら、端末からこの細長い紙が出てきたのですが、これがチケットですか？",
            translation: "예약 번호와 전화번호를 입력했더니 단말기에서 이 길쭉한 종이가 나왔는데, 이게 바로 티켓인가요?",
            expressions: [{ phrase: "端末からこの細長い紙が出てきた", meaning: "단말기에서 이 가늘고 긴 영수증(신청권)이 나왔다" }],
            vocabulary: [{ word: "予約番号(よやくばんごう)", meaning: "예약 번호" }, { word: "入力(にゅうりょく)する", meaning: "입력하다" }, { word: "細長い(ほそながい)", meaning: "가늘고 긴, 길쭉한" }, { word: "紙(かみ)", meaning: "종이" }]
          },
          {
            role: "점원", side: "left",
            text: "そちらは「申込券」ですので、30分以内にレジへお持ちいただければ、レジで本物の入場チケットを発券いたします！",
            translation: "그건 '발권 신청권(접수증)'이어서, 30분 이내에 계산대로 가져오시면 계산대에서 진짜 실물 입장 티켓을 출력해 드립니다!",
            expressions: [{ phrase: "レジで本物の入場チケットを発券いたします", meaning: "계산대에서 실제 입장권을 발권해 드립니다" }],
            vocabulary: [{ word: "申込券(もうしこみけん)", meaning: "신청권, 접수 전표" }, { word: "30分以内(さんじゅっぷんいない)", meaning: "30분 이내" }, { word: "本物(ほんもの)", meaning: "실물, 진짜" }, { word: "入場(にゅうじょう)チケット", meaning: "입장 티켓" }]
          },
          {
            role: "손님", side: "right",
            text: "なるほど！では、この申込券で発券をお願いします。チケット代はネットでカード決済済みです。",
            translation: "그렇군요! 그럼 이 신청권으로 발권 부탁합니다. 티켓 요금은 인터넷에서 이미 카드 결제를 마쳤습니다.",
            expressions: [{ phrase: "チケット代はネットでカード決済済みです", meaning: "티켓 대금은 온라인에서 카드로 이미 결제 완료되었습니다" }],
            vocabulary: [{ word: "決済済み(けっさいずみ)", meaning: "결제 완료" }]
          },
          {
            role: "점원", side: "left",
            text: "確認いたしました。発券手数料も決済済みですので、お支払いは0円です。こちらに受け取りのサインをお願いします。チケット3枚のお渡しです！",
            translation: "확인되었습니다. 발권 수수료도 이미 결제되어 있어서 내실 금액은 0원입니다. 여기에 수령 확인 서명을 부탁드립니다. 여기 티켓 세 장 드립니다!",
            expressions: [{ phrase: "こちらに受け取りのサインをお願いします", meaning: "여기에 티켓 수령 확인 서명을 부탁합니다" }],
            vocabulary: [{ word: "発券手数料(はっけんてすうりょう)", meaning: "발권 수수료" }, { word: "受け取り(うけとり)", meaning: "수령" }, { word: "3枚(さんまい)", meaning: "세 장" }]
          }
        ]
      },
      {
        id: 20,
        title: "세금 환급(Tax Free) 가능 여부 확인",
        lines: [
          {
            role: "손님", side: "right",
            text: "すみません、お土産のお菓子や化粧品をまとめて買いたいのですが、この店舗は免税に対応していますか？",
            translation: "실례합니다, 선물용 과자와 화장품을 한꺼번에 사고 싶은데요, 이 매장은 면세(Tax-Free)를 지원하나요?",
            expressions: [{ phrase: "この店舗は免税に対応していますか？", meaning: "이 매장은 면세(택스프리)가 가능한가요?" }],
            vocabulary: [{ word: "お土産(みやげ)", meaning: "선물, 기념품" }, { word: "お菓子(おかし)", meaning: "과자" }, { word: "化粧品(けしょうひん)", meaning: "화장품" }, { word: "まとめて", meaning: "한꺼번에, 모아서" }, { word: "免税(めんぜい)", meaning: "면세 (Tax-Free)" }]
          },
          {
            role: "점원", side: "left",
            text: "はい、当店は免税対応店舗です！税抜5,000円以上お買い上げで、パスポートをご提示いただければ免税でお会計できます。",
            translation: "네, 저희 가게는 면세 대응 매장입니다! 세전 금액으로 5,000엔 이상 구매하시고 여권을 제시해 주시면 면세가로 결제하실 수 있습니다.",
            expressions: [{ phrase: "税抜5,000円以上お買い上げで", meaning: "세전 5,000엔(세후 5,500엔) 이상 구매 시" }],
            vocabulary: [{ word: "当店(とうてん)", meaning: "저희 매장" }, { word: "税抜(ぜいぬき)", meaning: "세전, 세금 제외" }, { word: "提示(ていじ)する", meaning: "제시하다, 보여주다" }]
          },
          {
            role: "손님", side: "right",
            text: "全部で6,200円ほどあります。こちらが私のパスポートです。",
            translation: "전부 합쳐서 6,200엔 정도 됩니다. 여기 제 여권입니다.",
            expressions: [{ phrase: "全部で6,200円ほどあります", meaning: "모두 합쳐서 6,200엔 정도 됩니다" }],
            vocabulary: [{ word: "全部(ぜんぶ)で", meaning: "전부 합쳐서" }, { word: "私(わたし)", meaning: "저, 나" }]
          },
          {
            role: "점원", side: "left",
            text: "ありがとうございます。食品や化粧品などの消耗品は、日本を出国するまで開封できない専用の袋に密封しますが、日本滞在中に食べるものは入っておりませんか？",
            translation: "감사합니다. 식품이나 화장품 같은 소모품은 일본에서 출국하실 때까지 뜯을 수 없는 전용 봉투에 밀봉하는데, 일본에 머무시는 동안 드실 것은 들어 있지 않나요?",
            expressions: [{ phrase: "日本を出国するまで開封できない専用の袋に密封", meaning: "일본 출국 전까지 개봉할 수 없는 전용 보안 봉투에 밀봉" }],
            vocabulary: [{ word: "食品(しょくひん)", meaning: "식품" }, { word: "消耗品(しょうもうひん)", meaning: "소모품" }, { word: "出国(しゅっこく)する", meaning: "출국하다" }, { word: "開封(かいふう)する", meaning: "개봉하다" }, { word: "密封(みっぷう)する", meaning: "밀봉하다" }, { word: "滞在中(たいざいちゅう)", meaning: "체류 중" }]
          },
          {
            role: "손님", side: "right",
            text: "あ、このプリンと飲むヨーグルトは今夜ホテルで子どもが食べるものです！残りはすべて韓国へ持ち帰るお土産です。",
            translation: "아, 이 푸딩과 마시는 요구르트는 오늘 밤 호텔에서 아이가 먹을 거예요! 나머지는 전부 한국으로 가져갈 선물입니다.",
            expressions: [{ phrase: "残りはすべて韓国へ持ち帰るお土産です", meaning: "나머지는 전부 한국으로 가지고 돌아갈 기념품(선물)입니다" }],
            vocabulary: [{ word: "今夜(こんや)", meaning: "오늘 밤" }, { word: "残り(のこり)", meaning: "나머지" }, { word: "持ち帰る(もちかえる)", meaning: "가지고 돌아가다" }]
          },
          {
            role: "점원", side: "left",
            text: "お聞きしてよかったです！では、今夜召し上がるプリンとヨーグルトだけ別会計にして、残りのお土産5,600円分を免税でお会計いたしますね。",
            translation: "여쭤보길 잘했네요! 그럼 오늘 밤 드실 푸딩과 요구르트만 일반 결제로 따로 계산하고, 나머지 선물 5,600엔어치를 면세로 결제해 드리겠습니다.",
            expressions: [{ phrase: "今夜召し上がる〜だけ別会計にして", meaning: "오늘 밤 드실 품목만 별도 계산(일반 결제)으로 분리하고" }],
            vocabulary: [{ word: "聞く(きく)", meaning: "묻다, 여쭤보다" }, { word: "召し上がる(めしあがる)", meaning: "드시다 (먹다의 높임말)" }, { word: "別会計(べつかいけい)", meaning: "별도 계산" }]
          }
        ]
      }
    ]
  }
};

// 주제별 20개 시나리오 제목 목록
const TOPIC_SCENARIO_TITLES = {
  airport: [
    "체크인 및 좌석 배정 요청하기", "위탁 수하물 무게 초과 문의하기", "기내 반입 금지 물품 확인하기", "보안 검색대 통과 및 안내받기", "탑승구 위치 및 이동 시간 묻기",
    "항공편 지연 및 게이트 변경 확인", "면세점 구매 한도 및 탑승권 제시", "라운지 위치 및 이용 가능 여부 확인", "기내 좌석 변경 정중히 요청하기", "기내식 메뉴 선택 및 음료 요청",
    "기내 면세품 구매 및 입국신고서 요청", "환승 게이트 및 연결편 시간 문의", "입국 심사대에서 방문 목적 답하기", "체류 기간 및 숙소 주소 설명하기", "수하물 수취대 번호 확인하기",
    "분실 수하물 신고 및 특징 설명하기", "세관 신고서 제출 및 물품 검사", "공항 유심(SIM) 및 와이파이 수령", "공항 철도 및 리무진 버스 매표", "택시 승강장 위치 및 시내 요금 문의"
  ],
  cafe: [
    "아이스 아메리카노와 머핀 주문하기", "디카페인 원두 및 우유 변경하기", "시럽 양 조절 및 휘핑크림 빼기", "추천 디저트 및 시즌 음료 문의하기", "따뜻한 라떼 사이즈업 주문하기",
    "매장 와이파이 비밀번호 물어보기", "콘센트 있는 좌석 위치 문의하기", "주문한 음료가 잘못 나왔을 때 교환 요청", "텀블러 할인 및 개인 컵 사용 요청", "케이크 포크와 냅킨 추가 요청하기",
    "음료 캐리어와 빨대 챙겨 달라고 하기", "원두 종류(산미/고소함) 선택하기", "얼음 없이 차가운 음료 주문하기", "화장실 위치 및 비밀번호 물어보기", "테이블 위 흘린 음료 정리 도움 요청",
    "영수증 발급 및 분할 결제 요청하기", "브런치 세트 가능 시간 확인하기", "알레르기 유발 성분(견과류 등) 확인", "마감 시간 및 라스트 오더 시간 문의", "선물용 원두 분쇄도 지정해 구매하기"
  ],
  restaurant: [
    "예약 확인 및 인원수 말하기", "예약 없이 방문해 대기 시간 묻기", "창가 자리나 조용한 테이블 요청하기", "영어/사진 메뉴판 및 대표 메뉴 추천받기", "고수나 특정 재료 빼달라고 요청하기",
    "맵기 단계 조절 및 어린이 메뉴 문의", "스테이크 굽기 정도 선택하기", "물과 앞접시, 수저 추가로 요청하기", "음식이 너무 늦게 나올 때 확인 요청", "주문한 메뉴와 다른 음식이 나왔을 때",
    "사이드 메뉴와 음료 추가 주문하기", "생일/기념일 좌석 및 서비스 문의", "남은 음식 포장(투고 박스) 요청하기", "계산서 요청 및 테이블 결제 문의", "더치페이(개별 카드 결제) 요청하기",
    "계산서 내역 오류 정중히 확인하기", "팁 포함 여부 및 결제 방식 확인", "식재료 알레르기(갑각류/땅콩) 알리기", "비건·채식 옵션 메뉴 문의하기", "식사 후 근처 볼거리나 택시 호출 문의"
  ],
  hotel: [
    "프런트에서 예약자 확인 및 체크인", "얼리 체크인 가능 여부 문의하기", "체크인 전 캐리어 먼저 맡기기", "조식 시간 및 식당 위치 확인하기", "객실 와이파이 연결 및 안내받기",
    "객실 카드키 작동 불량으로 재발급", "수건, 생수, 어메니티 추가 요청하기", "에어컨/난방 작동 문제로 점검 요청", "조용한 고층 객실로 방 변경 요청하기", "룸서비스 주문 및 배달 시간 확인",
    "세탁 서비스 및 다리미 대여 문의", "수영장 및 피트니스 센터 이용 문의", "모닝콜(Wake-up call) 요청하기", "주변 맛집 추천 및 예약 대행 부탁", "객실 내 금고 잠김 해제 요청하기",
    "레이트 체크아웃 비용 및 가능 여부", "체크아웃 및 미니바·보증금 정산", "체크아웃 후 공항 가기 전까지 짐 보관", "호텔 공항 셔틀버스 예약하기", "객실에 두고 온 분실물 확인 요청"
  ],
  pharmacy: [
    "두통 및 발열로 진통해열제 구매하기", "목감기와 기침약 증상 설명해 고르기", "소화불량 및 위산 역류 약 요청하기", "물갈이 배탈 및 지사제 구매하기", "알레르기 비염 및 항히스타민제 찾기",
    "근육통 파스 및 바르는 소염제 구매", "상처 소독약과 방수 밴드 구매하기", "벌레 물린 데 바르는 연고 찾기", "인공눈물 및 안약 증상별 구매하기", "어린이용 해열 시럽 용량 문의하기",
    "복용 주기와 식전/식후 복용법 확인", "졸음 유발 성분 유무 확인하기", "기존 복용 중인 약과의 상호작용 문의", "임산부/수유부 복용 가능 여부 확인", "화상 연고 및 거즈 드레싱 구매하기",
    "멀미약(붙이는 패치/먹는 약) 구매", "구내염 연고 및 비타민 구매하기", "수면 보조제 및 시차 적응 도움 약 문의", "보험 청구용 상세 영수증 발급 요청", "기내 반입용 영문 약품 설명서 문의"
  ],
  convenience: [
    "도시락 구매 후 전자레인지 데우기", "젓가락, 숟가락, 물티슈 챙겨 받기", "교통카드 구매 및 현금 충전하기", "봉투 필요 여부 답하고 구매하기", "따뜻한 캔음료 및 즉석 커피 구매",
    "컵라면 구매 후 뜨거운 물 위치 묻기", "어묵·핫푸드 카운터에서 주문하기", "ATM 위치 및 해외 카드 출금 확인", "편의점 택배 발송 및 수하물 보내기", "우산 및 우비 위치 물어보기",
    "스마트폰 충전 케이블/보조배터리 구매", "유심칩 핀이나 건전지 규격 찾기", "행사 상품(1+1, 2+1) 적용 확인하기", "연령 확인 화면 터치 및 여권 제시", "현금 결제 후 잔돈/동전 교환 요청",
    "모바일 바코드/QR 결제 요청하기", "얼음컵과 파우치 음료 조합해 사기", "상비 의약품(소화제/밴드) 코너 찾기", "공연/미술관 티켓 발권기 사용 문의", "세금 환급(Tax Free) 가능 여부 확인"
  ]
};

// 기본 템플릿 생성 함수 (아직 직접 채우지 않은 번호도 20개 모두 정상 학습 가능하도록 구성)
function buildTopicLanguageDialogues(topicId, langId) {
  const customList = (RAW_DIALOGUES[topicId] && RAW_DIALOGUES[topicId][langId]) || [];
  const customMap = {};
  customList.forEach(item => { customMap[item.id] = item; });

  const titles = TOPIC_SCENARIO_TITLES[topicId] || [];
  const result = [];

  for (let i = 1; i <= 20; i++) {
    if (customMap[i]) {
      result.push(customMap[i]);
    } else {
      const scenarioTitle = titles[i - 1] || `실전 대화 상황 #${i}`;
      result.push(createDefaultScenario(topicId, langId, i, scenarioTitle));
    }
  }
  return result;
}

function createDefaultScenario(topicId, langId, index, title) {
  const rolePair = {
    airport: ["공항 직원", "승객"],
    cafe: ["직원", "손님"],
    restaurant: ["직원", "손님"],
    hotel: ["프런트 직원", "투숙객"],
    pharmacy: ["약사", "손님"],
    convenience: ["점원", "손님"]
  }[topicId] || ["직원", "손님"];

  const templates = {
    en: [
      {
        role: rolePair[0], side: "left",
        text: `Hello! Welcome. How can I help you with "${title}" today?`,
        translation: `안녕하세요! 어서 오세요. 오늘 '${title}' 관련해서 어떻게 도와드릴까요?`,
        expressions: [{ phrase: "How can I help you with ~?", meaning: "~와 관련해서 어떻게 도와드릴까요?" }],
        vocabulary: [{ word: "welcome", meaning: "환영합니다, 어서 오세요" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Hi! Excuse me, could you please check this for me?",
        translation: "안녕하세요! 실례지만 이것 좀 확인해 주시겠어요?",
        expressions: [{ phrase: "Could you please check this for me?", meaning: "이것 좀 확인해 주시겠어요?" }],
        vocabulary: [{ word: "excuse me", meaning: "실례합니다" }, { word: "check", meaning: "확인하다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "Of course! Let me take a look right away. Everything looks good.",
        translation: "물론이죠! 바로 확인해 드리겠습니다. 모든 것이 문제없어 보이네요.",
        expressions: [{ phrase: "Let me take a look", meaning: "제가 한번 살펴보겠습니다" }],
        vocabulary: [{ word: "right away", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Thank you so much for your help!",
        translation: "도와주셔서 정말 감사합니다!",
        expressions: [{ phrase: "Thank you so much for ~", meaning: "~해 주셔서 정말 감사합니다" }],
        vocabulary: [{ word: "help", meaning: "도움" }]
      }
    ],
    ja: [
      {
        role: rolePair[0], side: "left",
        text: "いらっしゃいませ。どのようなご用件でしょうか？",
        translation: "어서 오세요. 어떤 용건이신가요?",
        expressions: [{ phrase: "どのようなご用件でしょうか？", meaning: "어떤 용무(용건)이신가요? (정중한 응대)" }],
        vocabulary: [{ word: "用件(ようけん)", meaning: "용건, 볼일" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "すみません、こちらを確認していただけますか？",
        translation: "실례합니다, 이쪽을 확인해 주실 수 있나요?",
        expressions: [{ phrase: "〜していただけますか？", meaning: "~해 주실 수 있으신가요?" }],
        vocabulary: [{ word: "確認(かくにん)", meaning: "확인" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "かしこまりました。すぐにお調べいたします。",
        translation: "알겠습니다. 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "すぐにお調べいたします", meaning: "즉시 알아봐 드리겠습니다 (겸양 표현)" }],
        vocabulary: [{ word: "調べる(しらべる)", meaning: "조사하다, 확인하다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "ありがとうございます。助かりました。",
        translation: "감사합니다. 큰 도움이 되었습니다.",
        expressions: [{ phrase: "助かりました", meaning: "도움이 되었습니다, 덕분에 살았습니다" }],
        vocabulary: [{ word: "助かる(たすかる)", meaning: "도움이 되다" }]
      }
    ],
    zh: [
      {
        role: rolePair[0], side: "left",
        text: "您好！请问有什么可以帮您的吗？",
        translation: "안녕하세요! 무엇을 도와드릴까요?",
        expressions: [{ phrase: "有什么可以帮您的吗？", meaning: "도와드릴 일이 있을까요?" }],
        vocabulary: [{ word: "请问 (qǐngwèn)", meaning: "실례지만 여쭙겠습니다" }, { word: "帮 (bāng)", meaning: "돕다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "不好意思，可以帮我看一下这个吗？",
        translation: "실례합니다, 이것 좀 봐주실 수 있나요?",
        expressions: [{ phrase: "可以帮我看一下 ~ 吗？", meaning: "~을 좀 봐주실 수 있나요?" }],
        vocabulary: [{ word: "不好意思 (bù hǎoyìsi)", meaning: "실례합니다, 미안합니다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "没问题，我马上为您确认一下。",
        translation: "문제없습니다, 제가 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "马上为您确认", meaning: "즉시 확인해 드리다" }],
        vocabulary: [{ word: "马上 (mǎshàng)", meaning: "곧바로, 즉시" }, { word: "确认 (quèrèn)", meaning: "확인하다" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "太感谢您了！",
        translation: "정말 감사합니다!",
        expressions: [{ phrase: "太感谢您了", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "感谢 (gǎnxiè)", meaning: "감사하다" }]
      }
    ],
    vi: [
      {
        role: rolePair[0], side: "left",
        text: "Xin chào! Tôi có thể giúp gì cho quý khách ạ?",
        translation: "안녕하세요! 손님, 무엇을 도와드릴까요?",
        expressions: [{ phrase: "Tôi có thể giúp gì cho ~", meaning: "~에게 무엇을 도와드릴 수 있을까요?" }],
        vocabulary: [{ word: "giúp", meaning: "돕다" }, { word: "quý khách", meaning: "손님, 고객님" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Xin lỗi, bạn có thể kiểm tra giúp tôi cái này được không?",
        translation: "실례합니다, 이것 좀 확인해 주실 수 있나요?",
        expressions: [{ phrase: "kiểm tra giúp tôi", meaning: "저를 도와 확인해 주다" }],
        vocabulary: [{ word: "kiểm tra", meaning: "확인하다, 점검하다" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "Dạ vâng, để tôi kiểm tra ngay cho quý khách nhé.",
        translation: "네, 바로 확인해 드리겠습니다.",
        expressions: [{ phrase: "để tôi ~ ngay", meaning: "제가 즉시 ~하겠습니다" }],
        vocabulary: [{ word: "ngay", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "Cảm ơn bạn rất nhiều!",
        translation: "정말 감사합니다!",
        expressions: [{ phrase: "Cảm ơn ~ rất nhiều", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "rất nhiều", meaning: "매우 많이" }]
      }
    ],
    ar: [
      {
        role: rolePair[0], side: "left",
        text: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
        translation: "안녕하세요! 오늘 어떻게 도와드릴까요?",
        expressions: [{ phrase: "كيف يمكنني مساعدتك؟", meaning: "어떻게 도와드릴까요?" }],
        vocabulary: [{ word: "مساعدة (musā'ada)", meaning: "도움" }, { word: "اليوم (al-yawm)", meaning: "오늘" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "عفواً، هل يمكنك التحقق من هذا من فضلك؟",
        translation: "실례합니다, 이것 좀 확인해 주시겠어요?",
        expressions: [{ phrase: "هل يمكنك التحقق من ~؟", meaning: "~을 확인해 주실 수 있나요?" }],
        vocabulary: [{ word: "عفواً ('afwan)", meaning: "실례합니다" }, { word: "التحقق (at-tahaqquq)", meaning: "확인" }]
      },
      {
        role: rolePair[0], side: "left",
        text: "بكل سرور، دعني أتحقق من ذلك فوراً.",
        translation: "기꺼이 그러겠습니다, 바로 확인해 보겠습니다.",
        expressions: [{ phrase: "بكل سرور", meaning: "기꺼이, 즐거이" }],
        vocabulary: [{ word: "فوراً (fawran)", meaning: "즉시, 바로" }]
      },
      {
        role: rolePair[1], side: "right",
        text: "شكراً جزيلاً على مساعدتك!",
        translation: "도와주셔서 대단히 감사합니다!",
        expressions: [{ phrase: "شكراً جزيلاً", meaning: "대단히 감사합니다" }],
        vocabulary: [{ word: "جزيلاً (jazīlan)", meaning: "많이, 깊이" }]
      }
    ]
  };

  return {
    id: index,
    title: title,
    lines: templates[langId] || templates.en
  };
}

// 최종 DIALOGUE_DATA 객체 생성
const DIALOGUE_DATA = {};
TOPICS_META.forEach(topic => {
  DIALOGUE_DATA[topic.id] = {};
  LANGUAGES_META.forEach(lang => {
    DIALOGUE_DATA[topic.id][lang.id] = buildTopicLanguageDialogues(topic.id, lang.id);
  });
});
