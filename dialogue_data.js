/**
 * dialogue_data.js
 * 주제별(6개) / 언어별(5개) 20개씩의 실전 여행 회화 데이터 구조
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

// 상세 예문 데이터베이스 (필요한 예문을 이 형식 그대로 추가/수정하시면 됩니다)
const RAW_DIALOGUES = {
  cafe: {
    en: [
      {
        id: 1,
        title: "아이스 아메리카노와 머핀 주문하기",
        lines: [
          {
            role: "직원",
            side: "left",
            text: "Hi there! Welcome in. What can I get started for you today?",
            translation: "안녕하세요! 어서 오세요. 오늘 어떤 메뉴로 준비해 드릴까요?",
            expressions: [
              { phrase: "What can I get started for you?", meaning: "어떤 메뉴로 준비해 드릴까요? (카페나 식당 직원이 주문을 받을 때 자주 쓰는 표현)" }
            ],
            vocabulary: [
              { word: "welcome in", meaning: "어서 오세요 (매장에 들어오는 손님을 반길 때)" },
              { word: "get started", meaning: "(주문·준비를) 시작하다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Hi! Could I get an iced Americano and a blueberry muffin, please?",
            translation: "안녕하세요! 아이스 아메리카노 한 잔이랑 블루베리 머핀 하나 주시겠어요?",
            expressions: [
              { phrase: "Could I get ~, please?", meaning: "~을 주시겠어요? (가장 자연스럽고 정중한 주문 표현)" }
            ],
            vocabulary: [
              { word: "iced Americano", meaning: "아이스 아메리카노 ('ice'가 아닌 'iced'로 발음 및 표기)" },
              { word: "blueberry muffin", meaning: "블루베리 머핀" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Sure thing. What size would you like for the iced Americano?",
            translation: "물론이죠. 아이스 아메리카노는 어떤 사이즈로 드릴까요?",
            expressions: [
              { phrase: "Sure thing.", meaning: "물론이죠, 문제없습니다. ('Sure'보다 친근하고 흔히 쓰이는 응답)" },
              { phrase: "What size would you like for ~?", meaning: "~은 어떤 사이즈로 하시겠어요?" }
            ],
            vocabulary: [
              { word: "size", meaning: "크기, 컵 사이즈" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "Medium, please. Oh, and could you go light on the ice?",
            translation: "미디엄 사이즈로 주세요. 아, 그리고 얼음은 조금만 넣어 주시겠어요?",
            expressions: [
              { phrase: "go light on the ice", meaning: "얼음을 적게 넣다 (반대로 얼음을 많이 달라고 할 때는 extra ice 사용)" }
            ],
            vocabulary: [
              { word: "medium", meaning: "중간 사이즈" },
              { word: "light on ~", meaning: "(양이나 재료를) 적게 넣은" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "No problem at all. Will that be for here or to go?",
            translation: "네, 문제없습니다. 매장에서 드시나요, 아니면 가져가시나요?",
            expressions: [
              { phrase: "for here or to go", meaning: "매장에서 먹고 갈지 포장해 갈지 묻는 표현 (영국·호주에서는 Eat in or takeaway 주로 사용)" }
            ],
            vocabulary: [
              { word: "no problem at all", meaning: "전혀 문제없습니다, 기꺼이 해드리겠습니다" }
            ]
          },
          {
            role: "손님",
            side: "right",
            text: "For here, please.",
            translation: "매장에서 먹고 갈게요.",
            expressions: [
              { phrase: "For here, please.", meaning: "매장에서 먹고 갈게요. (포장할 때는 'To go, please.')" }
            ],
            vocabulary: [
              { word: "for here", meaning: "매장 내 취식" }
            ]
          },
          {
            role: "직원",
            side: "left",
            text: "Great, your total comes to $7.50. You can tap your card right here, and your order will be ready at the pickup counter shortly!",
            translation: "좋습니다, 총 7달러 50센트입니다. 여기에 카드를 태그해 주시면 되고, 주문하신 메뉴는 곧 픽업대에서 준비될 예정입니다!",
            expressions: [
              { phrase: "Your total comes to ~", meaning: "총 결제 금액은 ~입니다" },
              { phrase: "tap your card", meaning: "카드를 단말기에 찍다(비접촉 태그하다)" }
            ],
            vocabulary: [
              { word: "total", meaning: "총액, 합계" },
              { word: "pickup counter", meaning: "음료 수령대 (픽업대)" },
              { word: "shortly", meaning: "곧, 잠시 후에" }
            ]
          }
        ]
      }
    ],
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
      }
    ],
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
      }
    ],
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
      }
    ],
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