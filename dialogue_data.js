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
    ]
  }

,
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
    ]
  }

,
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
    ]
  }
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
