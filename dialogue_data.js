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
    // 2. 일본어 (日本語) - 카페 1~3번
    // (원문은 후리가나 없이 깔끔하게 유지, 단어 정리에 한자 후리가나 표기)
    // ==========================================
    ja: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "いらっしゃいませ。ご注文はお決まりですか？",
            translation: "어서 오세요. 주문은 결정하셨나요?",
            expressions: [
              { phrase: "ご注文はお決まりですか？", meaning: "주문하실 메뉴를 정하셨나요? (카페·식당 직원의 기본 응대 표현)" }
            ],
            vocabulary: [
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "決まり(きまり)", meaning: "결정됨, 정해짐" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "アイスアメリカーノ1つと、ブルーベリーマフィンを1つお願いします。",
            translation: "아이스 아메리카노 한 잔과 블루베리 머핀 하나 부탁합니다.",
            expressions: [
              { phrase: "〜を1つお願いします", meaning: "~을 하나 부탁합니다" }
            ],
            vocabulary: [
              { word: "1つ(ひとつ)", meaning: "한 개, 하나" },
              { word: "お願い(おねがい)します", meaning: "부탁합니다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。アイスアメリカーノのサイズはどうなさいますか？",
            translation: "알겠습니다. 아이스 아메리카노 사이즈는 어떻게 하시겠습니까?",
            expressions: [
              { phrase: "どうなさいますか？", meaning: "어떻게 하시겠습니까? ('どうしますか'의 높임 표현)" }
            ],
            vocabulary: [
              { word: "かしこまりました", meaning: "알겠습니다 (정중한 표현)" },
              { word: "サイズ", meaning: "사이즈, 크기" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Mサイズでお願いします。あと、氷を少なめにしてもらえますか？",
            translation: "M 사이즈로 부탁합니다. 그리고 얼음을 조금만 넣어 주실 수 있나요?",
            expressions: [
              { phrase: "氷を少なめにしてもらえますか？", meaning: "얼음을 적게 해 주실 수 있나요?" }
            ],
            vocabulary: [
              { word: "氷(こおり)", meaning: "얼음" },
              { word: "少なめ(すくなめ)", meaning: "조금 적게, 소량" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "承知いたしました。店内でお召し上がりですか？それともお持ち帰りですか？",
            translation: "알겠습니다. 매장에서 드시나요? 아니면 포장해 가시나요?",
            expressions: [
              { phrase: "店内でお召し上がりですか？", meaning: "매장에서 드시고 가시나요?" },
              { phrase: "お持ち帰りですか？", meaning: "포장(테이크아웃)이신가요?" }
            ],
            vocabulary: [
              { word: "承知(しょうち)いたしました", meaning: "알겠습니다 (정중한 승낙)" },
              { word: "店内(てんない)", meaning: "매장 내" },
              { word: "召し上がり(めしあがり)", meaning: "드심 (먹다·마시다의 높임말 명사형)" },
              { word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "店内でお願いします。",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "店内でお願いします", meaning: "매장 이용으로 부탁드립니다" }
            ],
            vocabulary: [
              { word: "店内(てんない)", meaning: "가게 안, 매장 내부" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "合計で750円になります。こちらにカードをタッチしてください。商品はあちらのカウンターでお渡しします。",
            translation: "총 750엔입니다. 여기에 카드를 터치해 주세요. 상품은 저쪽 카운터에서 전달해 드리겠습니다.",
            expressions: [
              { phrase: "合計で〜円になります", meaning: "총 ~엔입니다" },
              { phrase: "カードをタッチしてください", meaning: "카드를 태그(터치)해 주세요" }
            ],
            vocabulary: [
              { word: "合計(ごうけい)", meaning: "합계, 총액" },
              { word: "円(えん)", meaning: "엔 (일본 화폐 단위)" },
              { word: "商品(しょうひん)", meaning: "상품, 주문 메뉴" },
              { word: "お渡し(おわたし)します", meaning: "건네드리다, 전달해 드리다" }
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
            text: "おはようございます。本日のお飲み物は何になさいますか？",
            translation: "좋은 아침입니다. 오늘 음료는 어떤 것으로 하시겠습니까?",
            expressions: [
              { phrase: "何になさいますか？", meaning: "무엇으로 하시겠습니까? ('何にしますか'의 존경어 표현)" }
            ],
            vocabulary: [
              { word: "本日(ほんじつ)", meaning: "오늘, 금일" },
              { word: "飲み物(のみもの)", meaning: "음료, 마실 것" },
              { word: "何(なに)", meaning: "무엇" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "ホットのバニララテをMサイズでお願いします。ディカフェに変更することはできますか？",
            translation: "따뜻한 바닐라 라떼 M 사이즈로 부탁합니다. 디카페인으로 변경할 수 있나요?",
            expressions: [
              { phrase: "〜に変更することはできますか？", meaning: "~으로 변경하는 것이 가능한가요?" }
            ],
            vocabulary: [
              { word: "ディカフェ", meaning: "디카페인 (일본에서는 カフェインレス라고도 자주 표현함)" },
              { word: "変更(へんこう)する", meaning: "변경하다, 바꾸다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "はい、プラス50円でディカフェに変更可能です。ミルクは通常の牛乳でよろしいですか？",
            translation: "네, 50엔 추가로 디카페인 변경이 가능합니다. 우유는 일반 우유로 해 드리면 될까요?",
            expressions: [
              { phrase: "プラス〜円で変更可能です", meaning: "~엔 추가로 변경 가능합니다" },
              { phrase: "〜でよろしいですか？", meaning: "~으로 괜찮으시겠습니까?" }
            ],
            vocabulary: [
              { word: "円(えん)", meaning: "엔 (화폐 단위)" },
              { word: "可能(かのう)", meaning: "가능" },
              { word: "通常(つうじょう)", meaning: "통상, 일반(기본)" },
              { word: "牛乳(ぎゅうにゅう)", meaning: "우유" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "牛乳ではなく、オーツミルクに変えていただけますか？",
            translation: "일반 우유 말고, 오트 밀크(귀리 우유)로 바꿔 주실 수 있나요?",
            expressions: [
              { phrase: "〜に変えていただけますか？", meaning: "~으로 바꿔 주실 수 있으신가요?" }
            ],
            vocabulary: [
              { word: "牛乳(ぎゅうにゅう)", meaning: "우유" },
              { word: "オーツミルク", meaning: "오트 밀크 (귀리 우유, 두유는 豆乳(とうにゅう))" },
              { word: "変える(かえる)", meaning: "바꾸다, 변경하다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。オーツミルクへの変更もプラス50円になりますが、よろしいでしょうか？",
            translation: "알겠습니다. 오트 밀크로 변경하는 것도 50엔이 추가되는데 괜찮으신가요?",
            expressions: [
              { phrase: "〜になりますが、よろしいでしょうか？", meaning: "~이 되는데 괜찮으시겠습니까?" }
            ],
            vocabulary: [
              { word: "変更(へんこう)", meaning: "변경" },
              { word: "円(えん)", meaning: "엔" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "はい、大丈夫です。支払いはクレジットカードでお願いします。",
            translation: "네, 괜찮습니다. 결제는 신용카드로 부탁합니다.",
            expressions: [
              { phrase: "支払いは〜でお願いします", meaning: "결제는 ~(수단)으로 부탁합니다" }
            ],
            vocabulary: [
              { word: "大丈夫(だいじょうぶ)", meaning: "괜찮음, 문제없음" },
              { word: "支払い(しはらい)", meaning: "지불, 결제" },
              { word: "クレジットカード", meaning: "신용카드" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "ありがとうございます。レシートの番号でお呼びしますので、少々お待ちください。",
            translation: "감사합니다. 영수증 번호로 불러 드릴 테니 잠시만 기다려 주세요.",
            expressions: [
              { phrase: "番号でお呼びします", meaning: "번호로 호명해 드리겠습니다" },
              { phrase: "少々お待ちください", meaning: "잠시만 기다려 주십시오" }
            ],
            vocabulary: [
              { word: "番号(ばんごう)", meaning: "번호" },
              { word: "呼ぶ(よぶ)", meaning: "부르다, 호명하다" },
              { word: "少々(しょうしょう)", meaning: "잠시, 조금" },
              { word: "待つ(まつ)", meaning: "기다리다" }
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
            text: "こんにちは！ご注文をお伺いいたします。",
            translation: "안녕하세요! 주문을 도와드리겠습니다.",
            expressions: [
              { phrase: "ご注文をお伺いいたします", meaning: "주문을 여쭙겠습니다 (점원이 주문을 받을 때 쓰는 정중한 겸양 표현)" }
            ],
            vocabulary: [
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "伺う(うかがう)", meaning: "여쭙다, 듣다 (겸양어)" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "アイスのカフェモカをお願いします。上にホイップクリームは乗っていますか？",
            translation: "아이스 카페모카 부탁합니다. 위에 휘핑크림이 올라가 있나요?",
            expressions: [
              { phrase: "上に〜は乗っていますか？", meaning: "위에 ~이 올라가(토핑되어) 있나요?" }
            ],
            vocabulary: [
              { word: "上(うえ)", meaning: "위" },
              { word: "ホイップクリーム", meaning: "휘핑크림" },
              { word: "乗る(のる)", meaning: "올라가다, 얹어지다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "はい、通常はホイップクリームとチョコレートソースが乗っております。",
            translation: "네, 기본적으로는 휘핑크림과 초콜릿 소스가 올라갑니다.",
            expressions: [
              { phrase: "通常は〜が乗っております", meaning: "기본적으로는 ~이 올라가 있습니다" }
            ],
            vocabulary: [
              { word: "通常(つうじょう)", meaning: "통상, 보통(기본)" },
              { word: "乗る(のる)", meaning: "(토핑 등이) 얹히다, 올라가다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "では、ホイップクリームは抜きでお願いします。あと、シロップも半分に減らせますか？",
            translation: "그럼 휘핑크림은 빼 주세요. 그리고 시럽도 절반으로 줄일 수 있나요?",
            expressions: [
              { phrase: "〜は抜きでお願いします", meaning: "~은 빼고 주세요 (고수, 와사비, 크림 등을 뺄 때 필수 표현)" },
              { phrase: "半分に減らせますか？", meaning: "절반으로 줄일 수 있나요?" }
            ],
            vocabulary: [
              { word: "抜き(ぬき)", meaning: "뺌, 제외함" },
              { word: "半分(はんぶん)", meaning: "절반, 반" },
              { word: "減らす(へらす)", meaning: "(양을) 줄이다, 덜다" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "承知いたしました。ホイップ抜き、シロップ少なめですね。サイズはいかがなさいますか？",
            translation: "알겠습니다. 휘핑크림 빼고 시럽 적게 말씀이시죠. 사이즈는 어떻게 하시겠습니까?",
            expressions: [
              { phrase: "サイズはいかがなさいますか？", meaning: "사이즈는 어떻게 하시겠습니까?" }
            ],
            vocabulary: [
              { word: "承知(しょうち)いたしました", meaning: "알겠습니다" },
              { word: "抜き(ぬき)", meaning: "제외, 뺌" },
              { word: "少なめ(すくなめ)", meaning: "적게, 소량" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Lサイズで、持ち帰りでお願いします。注文は以上です。",
            translation: "L 사이즈로 하고, 포장으로 부탁합니다. 주문은 이상입니다.",
            expressions: [
              { phrase: "注文は以上です", meaning: "주문은 이상(여기까지)입니다" }
            ],
            vocabulary: [
              { word: "持ち帰り(もちかえり)", meaning: "포장, 테이크아웃" },
              { word: "注文(ちゅうもん)", meaning: "주문" },
              { word: "以上(いじょう)", meaning: "이상, 끝" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "かしこまりました。お会計は620円になります。すぐにお作りいたしますね。",
            translation: "알겠습니다. 결제 금액은 620엔입니다. 바로 만들어 드리겠습니다.",
            expressions: [
              { phrase: "お会計は〜円になります", meaning: "계산(결제 금액)은 ~엔입니다" },
              { phrase: "すぐにお作りいたします", meaning: "바로 만들어 드리겠습니다" }
            ],
            vocabulary: [
              { word: "会計(かいけい)", meaning: "계산, 회계" },
              { word: "円(えん)", meaning: "엔" },
              { word: "作る(つくる)", meaning: "만들다, 제조하다" }
            ]
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
            text: "Xin chào! Cho tôi một ly latte ваni nóng cỡ vừa, và đổi sang cà phê không caffein được không?",
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
