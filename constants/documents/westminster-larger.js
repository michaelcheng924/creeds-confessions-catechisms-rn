const content = [
  {
    number: 1,
    question: "What is the chief and highest end of man?",
    answer: [
      "Man's chief and highest end is to glorify God,1 and fully to enjoy him forever.2",
    ],
  },

  // Rom. 11:36; 1 Cor. 10:31.
  // Psa. 73:24-28. John 17:21-23.
  {
    number: 2,
    question: "How doth it appear that there is a God?",
    answer: [
      "The very light of nature in man, and the works of God, declare plainly that there is a God;3 but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.4",
    ],
  },

  // Rom. 1:19-20. Psa. 19:1-3. Acts 17:28.
  // 1 Cor. 2:9-10. 2 Tim. 3:15-17. Isa. 59:21.
  {
    number: 3,
    question: "What is the Word of God?",
    answer: [
      "The holy Scriptures of the Old and New Testament are the Word of God,5 the only rule of faith and obedience.6",
    ],
  },

  // 2 Tim. 3:16. 2 Pet. 1:19-21.
  // Eph. 2:20. Rev.2 2:18-19. Isa. 8:20. Luke 16:29, 31. Gal. 1:8-9. 2 Tim. 3:15-16.
  {
    number: 4,
    question: "How doth it appear that the Scriptures are of the Word of God?",
    answer: [
      "The Scriptures manifest themselves to be the Word of God, by their majesty7 and purity;8 by the consent of all the parts,9 and the scope of the whole, which is to give all glory to God;10 by their light and power to convince and convert sinners, to comfort and build up believers unto salvation:11 but the Spirit of God bearing witness by and with the Scriptures in the heart of man, is alone able fully to persuade it that they are the very word of God.12",
    ],
  },

  // Hos. 8:12. 1 Cor. 2:6-7, 13. Psa.119:18, 129.
  // Psa. 12:6. Psa. 119:140.
  // Acts 10:43. Acts 26:22.
  // Rom. 3:19 ,27.
  // Acts 18:28. Heb. 4:12. James 1:18. Pss.19:7-9. Rom.15:4. Acts 20:32.
  // John 16:13-14. 1 John 2:20, 27. John 20:31.
  {
    number: 5,
    question: "What do the scriptures principally teach?",
    answer: [
      "The scriptures principally teach, what man is to believe concerning God, and what duty God requires of man.13",
    ],
  },

  // 2 Tim. 1:13.
  {
    number: 6,
    question: "What do the scriptures make known of God?",
    answer: [
      "The scriptures make known what God is,14 the persons in the Godhead, 15 his decrees,16 and the execution of his decrees.17",
    ],
  },

  // Heb. 11:6.
  // 1 John 5:17.
  // Acts 15:14-15, 18.
  // Acts 4:27-28.
  {
    number: 7,
    question: "What is God?",
    answer: [
      "God is a Spirit,18 in and of himself infinite in being,19 glory,20 blessedness,21 and perfection;22 all-sufficient,23 eternal,24 unchangeable,25 incomprehensible,26 every where present,27 almighty,28 knowing all things,29 most wise,30most holy,31 most just32, most merciful and gracious, long-suffering, and abundant in goodness and truth.33",
    ],
  },

  // John 4:24.
  // Exod. 3:14. Job 11:7-9.
  // Acts 7:2.
  // 1 Tim. 6:15.
  // Matt. 5:48.
  // Gen. 17:1.
  // Psa. 90:2
  // Mal. 3:6. James 1:17.
  // 1 Kings 8:27.
  // Psa. 139:1-13.
  // Rev. 4:8.
  // Heb. 4:13.
  // Rom. 16:27.
  // Isa. 6:3.
  // Deut. 32:4.
  // Exod. 34:6.
  {
    number: 8,
    question: "Are there more Gods than one?",
    answer: ["There is but one only, the living and true God.34"],
  },

  // Deut. 6:4. 1 Cor. 8:4, 6. Jer. 10:10.
  {
    number: 9,
    question: "How many persons are there in the Godhead?",
    answer: [
      "There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.35",
    ],
  },

  // 1 John 5:7. Matt. 3:16-17. Matt. 28:19. 2 Cor. 13:14. John 10:30.
  {
    number: 10,
    question:
      "What are the personal properties of the three persons in the Godhead?",
    answer: [
      "It is proper to the Father to beget the Son,36 and to the Son to be begotten of the Father,37 and to the Holy Ghost to proceed from the Father and the Son from all eternity.38",
    ],
  },

  // Heb. 1:5-6,8.
  // John 1:14, 18.
  // John 15:26. Gal. 4:6.
  {
    number: 11,
    question:
      "How doth it appear that the Son and the Holy Ghost are God equal with the Father?",
    answer: [
      "The scriptures manifest that the Son and the Holy Ghost are God equal with the Father, ascribing unto them such names,39 attributes,40 works,41 and worship,42 as are proper to God only.",
    ],
  },

  // Isa. 6:3, 5, 8. John 12:41. Acts 28:25. 1 John 5:20. Acts 5:3-4.
  // John 1:1. Isa. 9:6. John 2:24-25. 1 Cor. 2:10-11.
  // Col. 1:16. Gen. 1:2.
  // Matt. 28:19. 2 Cor. 8:14.
  {
    number: 12,
    question: "What are the decrees of God?",
    answer: [
      "God's decrees are the wise, free, and holy acts of the counsel of his will,43 whereby, from all eternity, he hath, for his own glory, unchangeably foreordained whatsoever comes to pass in time,44 especially concerning angels and men.",
    ],
  },

  // Eph. 1:11. Rom. 11:33. Rom. 9:14-15,18.
  // Eph. 1:4, 11. Rom.9:22-23. Psa. 33:11.
  {
    number: 13,
    question: "What hath God especially decreed concerning angels and men?",
    answer: [
      "God, by an eternal and immutable decree, out of his mere love, for the praise of his glorious grace, to be manifested in due time, hath elected some angels to glory;45 and in Christ hath chosen some men to eternal life, and the means thereof:46 and also, according to his sovereign power, and the unsearchable counsel of his own will, (whereby he extendeth or withholdeth favor as he pleaseth,) hath passed by and foreordained the rest to dishonor and wrath, to be for their sin inflicted, to the praise of the glory of his justice.47",
    ],
  },

  // 1 Tim. 5:21.
  // Eph. 1:4-6. 2 Thess. 2:13-14.
  // Rom. 9:17-18, 21-22. Matt. 11:25-26. 2 Tim.2:20. Jude 4. 1 Pet. 2:8.
  {
    number: 14,
    question: "How doth God execute his decrees?",
    answer: [
      "God executeth his decrees in the works of creation and providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will.48",
    ],
  },

  // Eph. 1:11.
  {
    number: 15,
    question: "What is the work of creation?",
    answer: [
      "The work of creation is that wherein God did in the beginning, by the word of his power, make of nothing the world, and all things therein, for himself, within the space of six days, and all very good.49",
    ],
  },

  // (Gen. Chapter 1.) Heb. 11:3. Prov. 16:4.
  {
    number: 16,
    question: "How did God create angels?",
    answer: [
      "God created all the angels50 spirits,51 immortal,52 holy,53 excelling in knowledge,54 mighty in power,55 to execute his commandments, and to praise his name,56 yet subject to change.57",
    ],
  },

  // Col. 1:16.
  // Psa. 104:4.
  // Matt. 22:30.
  // Matt. 25:31.
  // 2 Sam. 14:17. Matt. 24:36.
  // 2 Thess. 1:7.
  // Psa. 103:20-21.
  // 2 Pet. 2:4.
  {
    number: 17,
    question: "How did God create man?",
    answer: [
      "After God had made all other creatures, he created man male and female;58 formed the body of the man of the dust of the ground,59 and the woman of the rib of the man,60 endued them with living, reasonable, and immortal souls;61 made them after his own image,62 in knowledge,63 righteousness, and holiness;64 having the law of God written in their hearts,65 and power to fulfill it,66 and dominion over the creatures;67 yet subject to fall.68",
    ],
  },

  // Gen. 1:27.
  // Gen. 2:7.
  // Gen. 2:22.
  // Gen. 2:7. Job 35:11. Eccl. 12:7. Matt. 10:28. Luke 23:43.
  // Gen. 1:27.
  // Col. 3:10.
  // Eph. 4:24.
  // Rom. 2:14-15.
  // Eccl. 7:29.
  // Gen. 1:28.
  // Gen. 3:6.
  {
    number: 18,
    question: "What are God's works of providence?",
    answer: [
      "God's works of providence are his most holy,69 wise,70 and powerful preserving71 and governing72 all his creatures; ordering them, and all their actions, 73 to his own glory.74",
    ],
  },

  // Psa. 145:17.
  // Psa. 104:24. Isa. 28:29.
  // Heb. 1:3.
  // Psa. 103:19.
  // Matt.10:29-31. Gen. 45:7.
  // Rom. 11:36. Isa. 63:14.
  {
    number: 19,
    question: "What is God's providence towards the angels?",
    answer: [
      "God by his providence permitted some of the angels, willfully and irrecoverably, to fall into sin and damnation,75 limiting and ordering that, and all their sins, to his own glory;76 and established the rest in holiness and happiness;77 employing them all,78 at his pleasure, in the administrations of his power, mercy, and justice.79",
    ],
  },

  // Jude 6. 2 Pet. 2:4. Heb. 2:16. John 8:44.
  // Job 1:12. Matt. 8:31.
  // 1 Tim. 5:21. Mark 8:38. Heb. 12:22.
  // Psa. 104:4.
  // 2 Kings 19:35. Heb. 1:14.
  {
    number: 20,
    question:
      "What was the providence of God toward man in the estate in which he was created?",
    answer: [
      "The providence of God toward man in the estate in which he was created, was the placing him in paradise, appointing him to dress it, giving him liberty to eat of the fruit of the earth;80 putting the creatures under his dominion,81 and ordaining marriage for his help;82 affording him communion with himself;83 instituting the Sabbath;84 entering into a covenant of life with him, upon condition of personal, perfect, and perpetual obedience,85 of which the tree of life was a pledge;86 and forbidding to eat of the tree of knowledge of good and evil, upon the pain of death.87",
    ],
  },

  // Gen. 2:8, 15-16.
  // Gen. 1:28.
  // Gen. 2:18.
  // Gen. 1:26-29. Gen. 3:8.
  // Gen. 2:3.
  // Gal. 3:12. Rom .10:5.
  // Gen. 2:9.
  // Gen. 2:17.
  {
    number: 21,
    question:
      "Did man continue in that estate wherein God at first created him?",
    answer: [
      "Our first parents being left to the freedom of their own will, through the temptation of Satan, transgressed the commandment of God in eating the forbidden fruit; and thereby fell from the estate of innocency wherein they were created.88",
    ],
  },

  // Gen. 3:6-8, 13. Eccl. 7:29. 2 Cor. 11:3.
  {
    number: 22,
    question: "Did all mankind fall in that first transgression?",
    answer: [
      "The covenant being made with Adam as a public person, not for himself only, but for his posterity, all mankind descending from him by ordinary generation,89 sinned in him, and fell with him in that first transgression.90",
    ],
  },

  // Acts 17:26.
  // Gen. 2:16-17. Rom. 5:12-20. 1 Cor. 15:21-22.
  {
    number: 23,
    question: "Into what estate did the fall bring mankind?",
    answer: ["The fall brought mankind into an estate of sin and misery.91"],
  },

  // Rom. 5:12. Rom. 3:23.
  {
    number: 24,
    question: "What is sin?",
    answer: [
      "Sin is any want of conformity unto, or transgression of, any law of God, given as a rule to the reasonable creature.92",
    ],
  },

  // 1 John 3:4. Gal. 3:10, 12.
  {
    number: 25,
    question:
      "Wherein consisteth the sinfulness of that estate whereinto man fell?",
    answer: [
      "The sinfulness of that estate whereinto man fell, consisteth in the guilt of Adam's first sin,93 the want of that righteousness wherein he was created, and the corruption of his nature, whereby he is utterly indisposed, disabled, and made opposite unto all that is spiritually good, and wholly inclined to all evil, and that continually;94 which is commonly called Original Sin, and from which do proceed all actual transgressions.95",
    ],
  },

  // Rom. 5:12, 19.
  // Rom. 3:10-19. Eph. 2:1-3. Rom. 5:6. Rom. 8:7-8.
  // James 1:14-15. Matt. 15:19.
  {
    number: 26,
    question:
      "How is original sin conveyed from our first parents unto their posterity?",
    answer: [
      "Original sin is conveyed from our first parents unto their posterity by natural generation, so as all that proceed from them in that way are conceived and born in sin.96",
    ],
  },

  // Psa. 51:5. Job.14:4. Job.15:14. John 3:6.
  {
    number: 27,
    question: "What misery did the fall bring upon mankind?",
    answer: [
      "The fall brought upon mankind the loss of communion with God,97 his displeasure and curse; so as we are by nature children of wrath,98 bond slaves to Satan,99 and justly liable to all punishments in this world, and that which is to come.100",
    ],
  },

  // Gen. 3:8, 10, 24.
  // Eph. 2:2-3.
  // 2 Tim. 2:26.
  // Gen. 2:17. Lam. 3:39. Rom. 6:23. Matt. 25:41, 46. Jude 7.
  {
    number: 28,
    question: "What are the punishments of sin in this world?",
    answer: [
      "The punishments of sin in this world are either inward, as blindness of mind,101 a reprobate sense,102 strong delusions,103 hardness of heart,104 horror of conscience,105 and vile affections;106 or outward, as the curse of God upon the creatures of our sakes,107 and all other evils that befall us in our bodies, names, estates, relations, and employments;108 together with death itself.109",
    ],
  },

  // Eph. 4:18.
  // Rom. 1:28.
  // 2 Thess. 2:11.
  // Rom. 2:5.
  // Isa. 33:14. Gen. 4:13. Matt. 27:4.
  // Rom. 1:26.
  // Gen. 3:17.
  // Deut. 28:15-18.
  // Rom. 6:21, 23.
  {
    number: 29,
    question: "What are the punishments of sin in the world to come?",
    answer: [
      "The punishments of sin in the world to come, are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell-fire for ever.110",
    ],
  },

  // 2 Thess. 1:9. Mark 9:43-44, 46, 48. Luke 16:24.
  {
    number: 30,
    question:
      "Doth God leave all mankind to perish in the estate of sin and misery?",
    answer: [
      "God doth not leave all men to perish in the estate of sin and misery,111 into which they fell by the breach of the first covenant, commonly called the Covenant of Works;112 but of his mere love and mercy delivereth his elect out of it, and bringeth them into an estate of salvation by the second covenant, commonly called the Covenant of Grace.113",
    ],
  },

  // 1 Thess. 5:9.
  // Gal. 3:10, 12.
  // Tit. 3:4-7. Gal. 3:21. Rom.3:20, 8-9.
  {
    number: 31,
    question: "With whom was the covenant of grace made?",
    answer: [
      "The covenant of grace was made with Christ as the second Adam, and in him with all the elect as his seed.114",
    ],
  },

  // Gal. 3:16
  // Rom. 5:15-21.
  // Isa. 53:10-11
  {
    number: 32,
    question: "How is the grace of God manifested in the second covenant?",
    answer: [
      "The grace of God is manifested in the second covenant, in that he freely provideth and offereth to sinners a Mediator,115 and life and salvation by him;116 and requiring faith as the condition to interest them in him,117 promiseth and giveth his Holy Spirit118 to all his elect, to work in them that faith,119 with all other saving graces;120 and to enable them unto all holy obedience,121 as the evidence of the truth of their faith122 and thankfulness to God,123 and as the way which he hath appointed them to salvation.124",
    ],
  },

  // Gen. 3:15. Isa. 42:6. John 6:27.
  // 1 John 5:11-12.
  // John 3:16.
  // Prov. 1:23.
  // 2 Cor. 4:13.
  // Gal. 5:22-23.
  // Ezek. 36:27.
  // Jas. 2:18, 22.
  // 2 Cor. 5:14-15.
  // Eph. 2:18.
  {
    number: 33,
    question:
      "Was the covenant of grace always administered after one and the same manner?",
    answer: [
      "The covenant of grace was not always administered after the same manner, but the administrations of it under the Old Testament were different from those under the New.125",
    ],
  },

  // 2 Cor. 3:6-7, 21-22.
  {
    number: 34,
    question:
      "How was the covenant of grace administered under the Old Testament?",
    answer: [
      "The covenant of grace was administered under the Old Testament, by promises,126 prophecies,127 sacrifices,128 circumcision,129 the passover,130 and other types and ordinances, which did all fore-signify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised Messiah,131 by whom they then had full remission of sin, and eternal salvation.132",
    ],
  },

  // Rom. 15:8.
  // Acts 3:20, 24.
  // Heb. 10:1.
  // Rom. 4:11.
  // I Cor. 5:7.
  // Heb. Chapters 8-13.
  // Gal. 3:7-9, 14.
  {
    number: 35,
    question:
      "How is the covenant of grace administered under the New Testament?",
    answer: [
      "Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the word,133 and the administration of the sacraments of baptism134 and the Lord's supper;135 in which grace and salvation are held forth in more fulness, evidence, and efficacy, to all nations.136",
    ],
  },

  // Mark 16:15.
  // Matt. 28:19-20.
  // 1 Cor. 11:23-25.
  // 2 Cor. 3:6-9. Heb.8:6, 10-11. Matt. 28:19
  {
    number: 36,
    question: "Who is the Mediator of the covenant of grace?",
    answer: [
      "The only Mediator of the covenant of grace is the Lord Jesus Christ,137 who, being the eternal Son of God, of one substance and equal with the Father,138 in the fulness of time became man,139 and so was and continues to be God and man, in two entire distinct natures, and one person, for ever.140",
    ],
  },

  // 1 Tim. 2:5.
  // John 1:1, 14. 1 John 10:30. Phil. 2:6.
  // Gal. 4:4.
  // Luke 1:35. Rom. 9:5. Col. 2:9. Heb. 7:24-25.
  {
    number: 37,
    question: "How did Christ, being the Son of God, become man?",
    answer: [
      "Christ the Son of God became man, by taking to himself a true body, and a reasonable soul,141 being conceived by the power of the Holy Ghost in the womb of the Virgin Mary, of her substance, and born of her,142 yet without sin.143",
    ],
  },

  // John 1:14.
  // Luke 1:27, 31, 35, 42. Gal. 4:4.
  // Heb. 4:15. Heb. 7:26.
  {
    number: 38,
    question: "Why was it requisite that the Mediator should be God?",
    answer: [
      "It was requisite that the Mediator should be God, that he might sustain and keep the human nature from sinking under the infinite wrath of God, and the power of death,144 give worth and efficacy to his sufferings, obedience, and intercession;145 and to satisfy God's justice,146 procure his favor,147 purchase a peculiar people,148 give his Spirit to them,149 conquer all their enemies,150 and bring them to everlasting salvation.151",
    ],
  },

  // Acts 2:24-25. Rom. 1:4. Rom. 4:25. Heb. 9:14.
  // Acts 20:28. Heb. 9:14. Heb. 7:25-28.
  // Rom. 3:24-26.
  // Eph. 1:6. Matt. 3:17.
  // Tit. 2:13-14.
  // Gal. 4:6.
  // Luke 1:68-69, 71, 74.
  // Heb. 5:8-9. Heb. 9:11-15.
  {
    number: 39,
    question: "Why was it requisite that the Mediator should be man?",
    answer: [
      "It was requisite that the Mediator should be man, that he might advance our nature,152 perform obedience to the law,153 suffer and make intercession for us in our nature,154 have a fellow-feeling of our infirmities;155 that we might receive the adoption of sons,156 and have comfort and access with boldness unto the throne of grace.157",
    ],
  },

  // Heb. 2:16.
  // Gal. 4:4.
  // Heb. 2:14. Heb. 7:24-25.
  // Heb. 4:15.
  // Gal. 4:5.
  // Heb. 4:16.
  {
    number: 40,
    question:
      "Why was it requisite that the Mediator should be God and man in one person?",
    answer: [
      "It was requisite that the Mediator, who was to reconcile God and man, should himself be both God and man, and this in one person, that the proper works of each nature might be accepted of God for us,158 and relied on by us as the works of the whole person.159",
    ],
  },

  // Matt. 1:21, 23. Matt. 3:17. Heb. 9:14.
  // 1 Pet. 2:6
  {
    number: 41,
    question: "Why was our Mediator called Jesus?",
    answer: [
      "Our Mediator was called Jesus, because he saveth his people from their sins.160",
    ],
  },

  // Matt. 1:21.
  {
    number: 42,
    question: "Why was our Mediator called Christ?",
    answer: [
      "Our Mediator was called Christ, because he was anointed with the Holy Ghost above measure,161 and so set apart, and fully furnished with all authority and ability,162 to execute the offices of prophet,163 priest,164 and king of his church,165 in the estate both of his humiliation and exaltation.",
    ],
  },

  // John 3:34. Psa 45:7.
  // John 6:27. Matt. 28:18-20.
  // Acts 3:21-22. Luke 4:18, 21.
  // Heb. 5:5-7. Heb 4:14-15.
  // Psa 2:6. Matt. 21:5. Isa 9:6-7. Phil. 2:8-11.
  {
    number: 43,
    question: "How doth Christ execute the office of a prophet?",
    answer: [
      "Christ executeth the office of a prophet, in his revealing to the church,166 in all ages, by his Spirit and Word,167 in divers ways of administration,168 the whole will of God,169 in all things concerning their edification and salvation.170",
    ],
  },

  // John 1:18.
  // 1 Pet. 1:10-12.
  // Heb. 1:1-2.
  // John 15:15.
  // Acts 20:23. Eph. 4:11-13. John 20:31.
  {
    number: 44,
    question: "How doth Christ execute the office of a priest?",
    answer: [
      "Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God,171 to be reconciliation for the sins of his people;172 and in making continual intercession for them.173",
    ],
  },

  // Heb. 9:14, 28.
  // Heb. 2:17.
  // Heb. 7:25.
  {
    number: 45,
    question: "How doth Christ execute the office of a king?",
    answer: [
      "Christ executeth the office of a king, in calling out of the world a people to himself,174 and giving them officers,175 laws,176 and censures, by which he visibly governs them;177 in bestowing saving grace upon his elect,178 rewarding their obedience,179 and correcting them for their sins,180 preserving and supporting them under all their temptations and sufferings,181 restraining and overcoming all their enemies,182 and powerfully ordering all things for his own glory,183 and their good;184 and also in taking vengeance on the rest, who know not God, and obey not the gospel.185",
    ],
  },

  // Acts 15:14-16. Gen. 49:10.
  // Eph. 4:11-12. 1 Cor. 12:28.
  // Isa. 33:22.
  // Matt. 18:17-18. 1 Cor 5:4-5.
  // Acts 5:31.
  // Rev. 22:12. Rev. 2:10.
  // Rev. 3:19.
  // Isa. 63:9.
  // 1 Cor. 15:25. Psa. 110:1-2.
  // Rom. 14:10-11.
  // Rom. 8:28.
  // 2 Thess. 1:8-9. Psa. 2:8-9.
  {
    number: 46,
    question: "What was the estate of Christ's humiliation?",
    answer: [
      "The estate of Christ's humiliation was that low condition, wherein he for our sakes, emptying himself of his glory, took upon him the form of a servant, in his conception and birth, life, death, and after his death, until his resurrection.186",
    ],
  },

  // Phi. 2:6-8. Luke 1:31. 2 Cor. 8:9. Acts 2:24.
  {
    number: 47,
    question: "How did Christ humble himself in his conception and birth?",
    answer: [
      "Christ humbled himself in his conception and birth, in that, being from all eternity the Son of God, in the bosom of the Father, he was pleased in the fulness of time to become the son of man, made of a woman of low estate, and to be born of her; with divers circumstances of more than ordinary abasement.187",
    ],
  },

  // John 1:14, 18. Gal. 4:4. Luke 2:7.
  {
    number: 48,
    question: "How did Christ humble himself in his life?",
    answer: [
      "Christ humbled himself in his life, by subjecting himself to the law,188 which he perfectly fulfilled;189 and by conflicting with the indignities of the world,190 temptations of Satan,191 and infirmities in his flesh, whether common to the nature of man, or particularly accompanying that his low condition.192",
    ],
  },

  // Gal. 4:4.
  // Matt. 5:17. Rom. 5:19.
  // Psa. 22:6. Heb. 12:2-3.
  // Matt. 4:1-12. Luke 4:13.
  // Heb. 2:17-18. Heb. 4:15. Isa. 52:13-14.
  {
    number: 49,
    question: "How did Christ humble himself in his death?",
    answer: [
      "Christ humbled himself in his death, in that having been betrayed by Judas,193 forsaken by his disciples,194 scorned and rejected by the world,195 condemned by Pilate, and tormented by his persecutors;196 having also conflicted with the terrors of death, and the powers of darkness, felt and borne the weight of God's wrath,197 he laid down his life an offering for sin,198 enduring the painful, shameful, and cursed death of the cross.199",
    ],
  },

  // Matt. 27:4.
  // Matt. 26:56.
  // Isa. 53:2-3.
  // Matt. 27:26-50. John 19:34.
  // Luke 22:44. Matt. 27:46.
  // Isa. 53:10.
  // Phil. 2:8. Heb. 12:2. Gal. 3:13.
  {
    number: 50,
    question: "Wherein consisted Christ's humiliation after his death?",
    answer: [
      "Christ's humiliation after his death consisted in his being buried,200 and continuing in the state of the dead, and under the power of death till the third day;201 which hath been otherwise expressed in these words, He descended into hell.",
    ],
  },

  // 1 Cor. 15:3-4.
  // Psa. 16:10. Acts 2:24-27, 31. Matt. 12:40.
  {
    number: 51,
    question: "What was the estate of Christ's exaltation?",
    answer: [
      "The estate of Christ's exaltation comprehendeth his resurrection,202 ascension,203 sitting at the right hand of the Father,204 and his coming again to judge the world.205",
    ],
  },

  // 1 Cor. 15:4.
  // Mark 16:19.
  // Eph. 1:20.
  // Acts 1:11. Acts 17:31.
  {
    number: 52,
    question: "How was Christ exalted in his resurrection?",
    answer: [
      "Christ was exalted in his resurrection, in that, not having seen corruption in death, (of which it was not possible for him to be held,)206 and having the very same body in which he suffered, with the essential properties thereof,207 (but without mortality, and other common infirmities belonging to this life,) really united to his soul,208 he rose again from the dead the third day by his own power;209 whereby he declared himself to be the Son of God,210 to have satisfied divine justice,211 to have vanquished death, and him that had the power of it,212 and to be Lord of quick and dead:213 all which he did as a public person,214 the head of his church,215 for their justification,216 quickening in grace,217 support against enemies,218 and to assure them of their resurrection from the dead at the last day.219",
    ],
  },

  // Acts 2:24, 27.
  // Luke 24:39.
  // Rom. 6:9. Rev. 1:18.
  // John 10:18.
  // Rom. 1:4.
  // Rom. 8:34.
  // Heb. 2:14.
  // Rom. 14:9.
  // 1 Cor. 15:21-22.
  // Eph. 1:20-23. Col. 1:18.
  // Rom. 4:25.
  // Eph. 2:1, 5-6. Col. 2:12.
  // 1 Cor. 15:25-27.
  // 1 Cor. 15:20.
  {
    number: 53,
    question: "How was Christ exalted in his ascension?",
    answer: [
      "Christ was exalted in his ascension, in that having after his resurrection often appeared unto and conversed with his apostles, speaking to them of the things pertaining to the kingdom of God,220 and giving them commission to preach the gospel to all nations,221 forty days after his resurrection, he, in our nature, and as our head,222 triumphing over enemies,223 visibly went up into the highest heavens, there to receive gifts for men,224 to raise up our affections thither,225 and to prepare a place for us,226 where he himself is, and shall continue till his second coming at the end of the world.227",
    ],
  },

  // Acts 1:2-3.
  // Matt. 28:19-20.
  // Heb. 6:20.
  // Eph. 4:8.
  // Acts 1:9-11. Eph. 4:10. Psa. 68:18.
  // Col. 3:1-2
  // John 14:3.
  // Acts 3:21.
  {
    number: 54,
    question: "How is Christ exalted in his sitting at the right hand of God?",
    answer: [
      "Christ is exalted in his sitting at the right hand of God, in that as God-man he is advanced to the highest favour with God the Father,228 with all fulness of joy,229 glory,230 and power over all things in heaven and earth;231 and does gather and defend his church, and subdue their enemies; furnisheth his ministers and people with gifts and graces,232 and maketh intercession for them.233",
    ],
  },

  // Phil. 2:9.
  // Acts 2:28. Psa. 16:11.
  // John 17:5.
  // Eph. 1:22. 1 Pet. 3:22.
  // Eph. 4:10-12. Psa. 110:1.
  // Rom. 8:34.
  {
    number: 55,
    question: "How doeth Christ make intercession?",
    answer: [
      "Christ maketh intercession, by his appearing in our nature continually before the Father in heaven,234 in the merit of his obedience and sacrifice on earth,235 declaring his will to have it applied to all believers;236 answering all accusations against them,237 and procuring for them quiet of conscience, notwithstanding daily failings,238 access with boldness to the throne of grace,239 and acceptance of their persons240 and services.241",
    ],
  },

  // Heb. 9:12, 24.
  // Heb. 1:3.
  // John 3:16. John 17:9, 20, 24.
  // Rom. 8:33-34.
  // Rom. 5:1-2. 1 John 2:1-2.
  // Heb. 4:16.
  // Eph. 1:6.
  // 1 Pet. 2:5.
  {
    number: 56,
    question:
      "How is Christ to be exalted in his coming again to judge the world?",
    answer: [
      "Christ is to be exalted in his coming again to judge the world, in that he, who was unjustly judged and condemned by wicked men,242 shall come again at the last day in great power,243 and in the full manifestation of his own glory, and of his Father's, with all his holy angels,244 with a shout, with the voice of the archangel, and with the trumpet of God,245 to judge the world in righteousness.246",
    ],
  },

  // Acts 3:14-15.
  // Matt. 24:30.
  // Luke 9:26.
  // 1 Thess. 4:16.
  // Acts 17:31.
  {
    number: 57,
    question: "What benefits hath Christ procured by his mediation?",
    answer: [
      "Christ, by his mediation, hath procured redemption,247 with all other benefits of the covenant of grace.248",
    ],
  },

  // Heb. 9:12.
  // 2 Cor. 1:20.
  {
    number: 58,
    question:
      "How do we come to be made partakers of the benefits which Christ hath procured?",
    answer: [
      "We are made partakers of the benefits which Christ hath procured, by the application of them unto us,249 which is the work especially of God the Holy Ghost.250",
    ],
  },

  // John 1:11-12.
  // Tit. 3:5-6.
  {
    number: 59,
    question: "Who are made partakers of redemption through Christ?",
    answer: [
      "Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it;251 who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.252",
    ],
  },

  // Eph. 1:13-14. John 6:37, 39. John 10:15-16.
  // Eph. 2:8. 2 Cor. 4:13.
  {
    number: 60,
    question:
      "Can they who have never heard the gospel, and so know not Jesus Christ, nor believe in him, be saved by their living according to the light of nature?",
    answer: [
      "They who, having never heard the gospel,253 know not Jesus Christ,254 and believe not in him, cannot be saved,255 be they never so diligent to frame their lives according to the light of nature,256 or the laws of that religion which they profess;257 neither is there salvation in any other, but in Christ alone,258 who is the Savior only of his body the church.259",
    ],
  },

  // Rom. 10:14.
  // 2 Thess. 1:8-9. Eph. 2:12. John 1:10-12.
  // John 8:24. Mark 16:16.
  // 1 Cor. 1:20-24.
  // John 4:22. Rom. 9:31-32. Phil. 3:4-9.
  // Acts 4:12.
  // Eph. 5:23.
  {
    number: 61,
    question: "Are all they saved who hear the gospel, and live in the church?",
    answer: [
      "All that hear the gospel, and live in the visible church, are not saved; but they only who are true members of the church invisible.260",
    ],
  },

  // John 12:38-40. Rom. 9:6. Matt. 22:14. Matt. 7:21. Rom. 11:7.
  {
    number: 62,
    question: "What is the visible church?",
    answer: [
      "The visible church is a society made up of all such as in all ages and places of the world do profess the true religion,261 and of their children.262",
    ],
  },

  // 1 Cor. 1:2. 1 Cor. 12:13. Rom. 15:9-12. Rev. 7:9. Psa. 2:8. Psa. 22:27-31. Psa. 45:17. Matt. 28:19-20. Isa. 59:21.
  // 1 Cor. 7:14. Acts 2:39. Rom. 11:16. Gen. 17:7.
  {
    number: 63,
    question: "What are the special privileges of the visible church?",
    answer: [
      "The visible church hath the privilege of being under God's special care and government;263 of being protected and preserved in all ages, notwithstanding the opposition of all enemies;264 and of enjoying the communion of saints, the ordinary means of salvation,265 and offers of grace by Christ to all the members of it in the ministry of the gospel, testifying, that whosoever believes in him shall be saved,266 and excluding none that will come unto him.267",
    ],
  },

  // Isa. 9:5-6. 1 Tim. 4:10.
  // Psa. 115:1-2, 9. Isa. 31:4-5. Zech. 12:2-4, 8-9.
  // Acts 2:39, 42.
  // Psa. 147:19-20. Rom. 9:4. Eph. 4:11-12. Mark 16:15-16.
  // John 6:37.
  {
    number: 64,
    question: "What is the invisible church?",
    answer: [
      "The invisible church is the whole number of the elect, that have been, are, or shall be gathered into one under Christ the head.268",
    ],
  },

  // Psa. 115:1-2, 9. Isa. 31:4-5. Zech. 12:2-4, 8-9.
  {
    number: 65,
    question:
      "What special benefits do the members of the invisible church enjoy by Christ?",
    answer: [
      "The members of the invisible church by Christ enjoy union and communion with him in grace and glory.269",
    ],
  },

  // John 17:21. Eph 2:5-6
  {
    number: 66,
    question: "is that union which the elect have with Christ?",
    answer: [
      ".The union which the elect have with Christ is the work of God's grace,270 whereby they are spiritually and mystically, yet really and inseparably, joined to Christ as their head and husband;271 which is done in their effectual calling.272",
    ],
  },

  // Eph. 1:22. Eph. 2:6-7.
  // 1 Cor. 6:17. John 10:28. Eph. 5:23, 30.
  // 1 Pet. 5:10. 1 Cor. 1:9.
  {
    number: 67,
    question: "What is effectual calling?",
    answer: [
      "Effectual calling is the work of God's almighty power and grace,273 whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto)274 he doth, in his accepted time, invite and draw them to Jesus Christ, by his Word and Spirit;275 savingly enlightening their minds,276 renewing and powerfully determining their wills,277 so as they (although in themselves dead in sin) are hereby made willing and able freely to answer his call, and to accept and embrace the grace offered and conveyed therein.278",
    ],
  },

  // John 5:25. Eph. 1:18-20. 2 Tim. 1:8-9.
  // Tit. 3:4-5. Eph. 2:4-5, 7-9. Rom. 9:11.
  // 2 Cor. 5:20. 2 Cor. 6:1-2. John 6:44. 2 Thess. 2:13-14.
  // Acts 26:18. 1 Cor. 2:10, 12.
  // Ezek. 11:19. Ezek. 36:26-27. John 6:45.
  // Eph. 2:5. Phil. 2:13. Deut. 30:6.
  {
    number: 68,
    question: "Are the elect only effectually called?",
    answer: [
      "All the elect, and they only, are effectually called:[279] although others may be, and often are, outwardly called by the ministry of the Word,[280] and have some common operations of the Spirit;[281] who, for their wilful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.[282]",
    ],
  },

  // Acts 13:48.
  // Matt. 22:14.
  // Matt. 7:22. Heb. 6:4-6.
  // John 12:38-40. Acts 28:25-27. John 6:64-65. Psa. 81:11-12.
  {
    number: 69,
    question:
      "What is the communion in grace which the members of the invisible church have with Christ?",
    answer: [
      "The communion in grace which the members of the invisible church have with Christ, is their partaking of the virtue of his mediation, in their justification,283 adoption,284 sanctification, and whatever else, in this life, manifests their union with him.285",
    ],
  },

  // Rom. 8:30.
  // Eph. 1:5.
  // 1 Cor. 1:30.
  {
    number: 70,
    question: "What is justification?",
    answer: [
      "Justification is an act of God's free grace unto sinners286, in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight287; not for any thing wrought in them, or done by them288 but only for the perfect obedience and full satisfaction of Christ, by God imputed to them289, and received by faith alone.290",
    ],
  },

  // Rom 3:23-25. Rom. 4:5.
  // Jer. 23:6. Rom. 4:6-8. 2 Cor. 5:19, 21. Rom. 3:22, 24-28.
  // Tit. 3:5, 7. Eph. 1:7. Rom. 3:28.
  // Rom. 3:24-25. 5:17�19; 4:6�8.
  // Rom. 3:25-26. Rom. 5:1. Acts 10:43. Gal. 2:16. Phil. 3:9.
  {
    number: 71,
    question: "How is justification an act of God�s free grace?",
    answer: [
      "Although Christ, by his obedience and death, did make a proper, real, and full satisfaction to God's justice in the behalf of them that are justified;291 yet in as much as God accepteth the satisfaction from a surety, which he might have demanded of them, and did provide this surety, his own only Son,292 imputing his righteousness to them,293 and requiring nothing of them for their justification but faith,294 which also is his gift,295 their justification is to them of free grace.296",
    ],
  },

  // Rom. 5:8-10, 19.
  // 1 Tim. 2:5-6. Heb. 10:10. Matt. 20:28. Dan. 9:24, 26. Isa. 53:4-6, 10-12. Heb. 7:22. 1 Pet. 1:18-19.
  // 2 Cor. 5:21.
  // Rom. 3:24-25.
  // Eph. 2:8.
  // Eph. 1:17.
  {
    number: 72,
    question: "What is justifying faith?",
    answer: [
      "Justifying faith is a saving grace,297 wrought in the heart of a sinner by the Spirit298 and Word of God,299 whereby he, being convinced of his sin and misery, and of the disability in himself and all other creatures to recover him out of his lost condition,300 not only assenteth to the truth of the promise of the gospel,301 but receiveth and resteth upon Christ and his righteousness, therein held forth, for pardon of sin,302 and for the accepting and accounting of his person righteous in the sight of God for salvation.303",
    ],
  },

  // Heb. 10:39.
  // 2 Cor. 4:13. Eph. 1:17-19.
  // Rom. 10:14-17.
  // Acts 2:37. John 16:8-9. Rom. 6:6. Eph. 2:1. Acts 4:12.
  // Eph. 1:13.
  // John 1:12. Acts 16:31. Acts 10:43.
  // Phil. 3:9. Acts 15:11.
  {
    number: 73,
    question: "How doth faith justify a sinner in the sight of God?",
    answer: [
      "Faith justifies a sinner in the sight of God, not because of those other graces which do always accompany it, or of good works that are the fruits of it,304 nor as if the grace of faith, or any act thereof, were imputed to him for his justification;305 but only as it is an instrument by which he receiveth and applieth Christ and his righteousness.306",
    ],
  },

  // Gal. 3:11.
  // Rom. 4:5. Rom. 10:10.
  // John 1:12. Phil. 3:9. Gal. 1:16.
  {
    number: 74,
    question: "What is adoption?",
    answer: [
      "Adoption is an act of the free grace of God,307 in and for his only Son Jesus Christ,308 whereby all those that are justified are received into the number of his children,309 have his name put upon them,310 the Spirit of his Son given to them,311 are under his fatherly care and dispensations,312 admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow-heirs with Christ in glory.313",
    ],
  },

  // 1 John 3:1.
  // Eph. 1:5. Gal. 4:4-5.
  // John 1:12.
  // 2 Cor. 6:18. Rev. 3:12.
  // Ga. 4:6.
  // Psa. 103:13. Prov. 14:26. Matt. 6:32.
  // Heb. 6:12. Rom. 8:17.
  {
    number: 75,
    question: "What is sanctification?",
    answer: [
      "Sanctification is a work of God's grace, whereby they whom God hath, before the foundation of the world, chosen to be holy, are in time, through the powerful operation of his Spirit314 applying the death and resurrection of Christ unto them,315 renewed in their whole man after the image of God;316 having the seeds of repentance unto life, and all other saving graces, put into their hearts,317 and those graces so stirred up, increased, and strengthened,318 as that they more and more die unto sin, and rise unto newness of life.319",
    ],
  },

  // Eph. 1:4. 1 Cori 6:11. 2 Thess. 2:13.
  // Rom. 6:4-6.
  // Eph. 4:23-24.
  // Acts 11:18.
  // Jude 20. Heb. 6:11-12. Eph. 3:16-19. Col. 1:10-11.
  // Rom. 6:4, 6, 14. Gal. 5:24.
  {
    number: 76,
    question: "What is repentance unto life?",
    answer: [
      "Repentance unto life is a saving grace,320 wrought in the heart of a sinner by the Spirit321 and Word of God,322 whereby, out of the sight and sense, not only of the danger,323 but also of the filthiness and odiousness of his sins,324 and upon the apprehension of God's mercy in Christ to such as are penitent,325 he so grieves for326 and hates his sins,327 as that he turns from them all to God,328 purposing and endeavouring constantly to walk with him in all the ways of new obedience.329",
    ],
  },

  // 2 Tim. 2:25.
  // Zech. 12:10.
  // Acts 11:18, 20-21.
  // Ezek. 18:28, 30, 32. Luke 15:17-18. Hos. 2:6-7.
  // Ezek. 36:31. Isa. 30:22.
  // Joel 2:12-13.
  // Jer. 31:18-19.
  // 2 Cor. 7:11.
  // Acts 26:18. Ezek. 14:6. 1 Kings 8:47-48.
  // Psa. 119:6, 59, 128. Luke 1:6. 2 Kings 23:25.
  {
    number: 77,
    question: "Wherein do justification and sanctification differ?",
    answer: [
      "Although sanctification be inseparably joined with justification,330 yet they differ, in that God in justification imputeth the righteousness of Christ;331 in sanctification of his Spirit infuseth grace, and enableth to the exercise thereof;332 in the former, sin is pardoned;333 in the other, it is subdued:334 the one doth equally free all believers from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation335 the other is neither equal in all,336 nor in this life perfect in any,337 but growing up to perfection.338",
    ],
  },

  // 1 Cor. 6:11. 1 Co. 1:30.
  // Rom. 4:6, 8.
  // Ezek. 36:27.
  // Rom. 3:24-25.
  // Rom. 6:6, 14.
  // Rom. 8:33-34.
  // 1 John 2:12-14. Heb. 5:12-14.
  // 1 John 1:8, 10.
  // 2 Cor. 7:1. Phil. 3:12-14.
  {
    number: 78,
    question: "Whence ariseth the imperfection of sanctification in believers?",
    answer: [
      "The imperfection of sanctification in believers ariseth from the remnants of sin abiding in every part of them, and the perpetual lustings of the flesh against the spirit; whereby they are often foiled with temptations, and fall into many sins,339 are hindered in all their spiritual services,340 and their best works are imperfect and defiled in the sight of God.341",
    ],
  },

  // Rom. 7:18, 23. Mark 14:66. Gal. 2:11-12.
  // Heb. 12:1.
  // Isa. 64:6. Exod. 28:38.
  {
    number: 79,
    question:
      "May not true believers, by reason of their imperfections, and the many temptations and sins they are overtaken with, fall away from the state of grace?",
    answer: [
      "True believers, by reason of the unchangeable love of God,342 and his decree and covenant to give them perseverance,343 their inseparable union with Christ,344 his continual intercession for them,345 and the Spirit and seed of God abiding in them,346 can neither totally nor finally fall away from the state of grace,347 but are kept by the power of God through faith unto salvation.348",
    ],
  },

  // Jer. 31:3.
  // 2 Tim. 2:19. Heb. 13:20-21. 2 Sam. 23:5.
  // 1 Cor. 1:8-9.
  // Heb. 7:25. Luke 22:32.
  // 1 John 3:9. 1 John 2:27.
  // Jer. 32:40. John 10:28.
  // 1 Pet. 1:5.
  {
    number: 80,
    question:
      "Can true believers be infallibly assured that they are in the estate of grace, and that they shall persevere therein unto salvation?",
    answer: [
      "Such as truly believe in Christ, and endeavour to walk in all good conscience before him,349 may, without extraordinary revelation, by faith grounded upon the truth of God's promises, and by the Spirit enabling them to discern in themselves those graces to which the promises of life are made,350 and bearing witness with their spirits that they are the children of God,351 be infallibly assured that they are in the estate of grace, and shall persevere therein unto salvation.352",
    ],
  },

  // 1 John 2:3.
  // 1 Cor. 2:12. 1 John 3:14, 18-19, 21, 24. 1 John 4:13, 16. Heb. 6:11-12.
  // Rom. 8:16.
  // 1 John 5:13.
  {
    number: 81,
    question:
      "Are all true believers at all times assured of their present being in the estate of grace, and that they shall be saved?",
    answer: [
      "Assurance of grace and salvation not being of the essence of faith,353 true believers may wait long before they obtain it;354 and, after the enjoyment thereof, may have it weakened and intermitted, through manifold distempers, sins, temptations, and desertions;355 yet they are never left without such a presence and support of the Spirit of God as keeps them from sinking into utter despair.356",
    ],
  },

  // Eph. 1:13.
  // Isa. 50:10. Psa. 88:1-3, 6-7, 9-10, 13-15.
  // Psa. 77:1-12. SOS 5:2-3, 6. Psa 51:8, 12. Psa. 31:22. Psa. 22:1.
  // 1 John 3:9. Psa. 73:15, 23. Isa. 54:7-10.
  {
    number: 82,
    question:
      "What is the communion in glory which the members of the invisible church have with Christ?",
    answer: [
      "The communion in glory which the members of the invisible church have with Christ, is in this life,357 immediately after death,358 and at last perfected at the resurrection and day of judgment.359",
    ],
  },

  // 2 Cor. 3:18.
  // Luke 23:43.
  // 1 Thess. 4:17.
  {
    number: 83,
    question:
      "What is the communion in glory with Christ which the members of the invisible church enjoy in this life?",
    answer: [
      "The members of the invisible church have communicated to them in this life the firstfruits of glory with Christ, as they are members of him their head, and so in him are interested in that glory which he is fully possessed of;360 and, as an earnest thereof, enjoy the sense of God's love,361 peace of conscience, joy in the Holy Ghost, and hope of glory;362 as, on the contrary, sense of God's revenging wrath, horror of conscience, and a fearful expectation of judgment, are to the wicked the beginning of their torments which they shall endure after death.363",
    ],
  },

  // Eph. 2:5-6.
  // Rom. 5:5. 2 Cor. 1:22.
  // Rom. 5:1-2. Rom. 14:17.
  // Gen. 4:13. Matt. 27:4. Heb. 10:27. Rom. 2:9. Mark 9:44.
  {
    number: 84,
    question: "Shall all men die?",
    answer: [
      "Death being threatened as the wages of sin,364 it is appointed unto all men once to die;365 for that all have sinned.366",
    ],
  },

  // Rom. 6:23.
  // Heb. 9:27.
  // Rom. 5:12.
  {
    number: 85,
    question:
      "Death, being the wages of sin, why are not the righteous delivered from death, seeing all their sins are forgiven in Christ?",
    answer: [
      "The righteous shall be delivered from death itself at the last day, and even in death are delivered from the sting and curse of it;367 so that, although they die, yet it is out of God's love,368 to free them perfectly from sin and misery,369 and to make them capable of further communion with Christ in glory, which they then enter upon.370",
    ],
  },

  // 1 Cor. 15:26, 55-57. Heb. 2:15.
  // Isa. 57:1-2. 2 Kings 22:20.
  // Rev. 14:13. Eph. 5:27.
  // Luke 23:43. Phil. 1:23.
  {
    number: 86,
    question:
      "What is the communion in glory with Christ, which the members of the invisible church enjoy immediately after death?",
    answer: [
      "The communion in glory with Christ, which the members of the invisible church enjoy immediately after death is, in that their souls are then made perfect in holiness,371 and received into the highest heavens,372 where they behold the face of God in light and glory,373 waiting for the full redemption of their bodies,374 which even in death continue united to Christ,375 and rest in their graves as in their beds,376 till at the last day they be again united to their souls.377 Whereas the souls of the wicked are at their death cast into hell, where they remain in torments and utter darkness, and their bodies kept in their graves, as in their prisons, till the resurrection and judgment of the great day.378",
    ],
  },

  // Heb. 12:23.
  // 2 Cor. 5:1, 6, 8. Phil. 1:23. Acts 3:21. Eph. 4:10.
  // 1 John 3:2. 1 Cor. 13:12.
  // Rom. 8:23.
  // 1 Thess. 4:14.
  // Isa. 57:2.
  // Job 19:26-27.
  // Luke 16:23-24. Acts 1:25. Jude 6-7.
  {
    number: 87,
    question: "What are we to believe concerning the resurrection?",
    answer: [
      "We are to believe that at the last day there shall be a general resurrection of the dead, both of the just and unjust:379 when they that are then found alive shall in a moment be changed; and the selfsame bodies of the dead which were laid in the grave, being then again united to their souls forever, shall be raised up by the power of Christ.380 The bodies of the just, by the Spirit of Christ, and by virtue of his resurrection as their head, shall be raised in power, spiritual, incorruptible, and made like to his glorious body;381 and the bodies of the wicked shall be raised up in dishonour by him, as an offended judge.382",
    ],
  },

  // Acts 24:15.
  // 1 Cor. 15:51-53. 1 Thess. 4:15-17. John 5:28-29.
  // 1 Cor. 15:21-23, 42-44. Phil. 3:21.
  // John 5:27-29. Matt. 25:33.
  {
    number: 88,
    question: "What shall immediately follow after the resurrection?",
    answer: [
      "Immediately after the resurrection shall follow the general and final judgment of angels and men;383 the day and hour whereof no man knoweth, that all may watch and pray, and be ever ready for the coming of the Lord.384",
    ],
  },

  // 2 Pet. 2:4, 6-7, 14-15. Matt. 25:46.
  // Matt. 24:36, 42, 44.
  {
    number: 89,
    question: "What shall be done to the wicked at the day of judgment?",
    answer: [
      "At the day of judgment, the wicked shall be set on Christ's left hand,385 and, upon clear evidence, and full conviction of their own consciences,386 shall have the fearful but just sentence of condemnation pronounced against them;387 and thereupon shall be cast out from the favourable presence of God, and the glorious fellowship with Christ, his saints, and all his holy angels, into hell, to be punished with unspeakable torments, both of body and soul, with the devil and his angels forever.388",
    ],
  },

  // Matt. 25:33.
  // Rom. 2:15-16.
  // Matt. 25:41-43.
  // Luke 16:26. 2 Thess. 1:8-9.
  {
    number: 90,
    question: "What shall be done to the righteous at the day of judgment?",
    answer: [
      "At the day of judgment, the righteous, being caught up to Christ in the clouds,389 shall be set on his right hand, and there openly acknowledged and acquitted,390 shall join with him in the judging of reprobate angels and men,391 and shall be received into heaven,392 where they shall be fully and forever freed from all sin and misery;393 filled with inconceivable joys,394 made perfectly holy and happy both in body and soul, in the company of innumerable saints and holy angels,395 but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity.396 And this is the perfect and full communion, which the members of the invisible church shall enjoy with Christ in glory, at the resurrection and day of judgment.",
    ],
  },

  // 1 Thess. 4:17.
  // Matt. 25:33.
  // 1 Cor. 6:2-3.
  // Matt. 25:34, 46.
  // Eph. 5:27. Rev. 14:13.
  // Psa. 16:11.
  // Heb. 12:22-23.
  // 1 John 3:2. 1 Cor. 13:12. 1 Thess. 4:17-18.
  {
    number: 91,
    question: "What is the duty which God requireth of man?",
    answer: [
      "The duty which God requireth of man, is obedience to his revealed will.397",
    ],
  },

  // Rom. 12:1-2. Mic. 6:8.1 Sam. 15:22.
  {
    number: 92,
    question:
      "What did God at first reveal unto man as the rule of his obedience?",
    answer: [
      "The rule of obedience revealed to Adam in the estate of innocence, and to all mankind in him, besides a special command not to eat of the fruit of the tree knowledge of good and evil, was the moral law.398",
    ],
  },

  // Gen. 1:26-27. Rom. 2:14-15. Rom. 10:5. Gen. 2:17.
  {
    number: 93,
    question: "What is the moral law?",
    answer: [
      "The moral law is the declaration of the will of God to mankind, directing and binding every one to personal, perfect, and perpetual conformity and obedience thereunto, in the frame and disposition of the whole man, soul and body,399 and in performance of all those duties of holiness and righteousness which he oweth to God and man:400 promising life upon the fulfilling, and threatening death upon the breach of it.401",
    ],
  },

  // Deut. 5:1-3, 31, 33. Luke 10:26-27. 1 Thess. 5:23.
  // Luke 1:75. Acts 24:16.
  // Rom. 10:5. Gal. 3:10. Gal. 3:12.
  {
    number: 94,
    question: "Is there any use of the moral law to man since the fall?",
    answer: [
      "Although no man, since the fall, can attain to righteousness and life by the moral law:402 yet there is great use thereof, as well common to all men, as peculiar either to the unregenerate, or the regenerate.403",
    ],
  },

  // Rom. 8:3. Gal. 2:16.
  // 1 Tim. 1:8.
  {
    number: 95,
    question: "Of what use is the moral law to all men?",
    answer: [
      "The moral law is of use to all men, to inform them of the holy nature and the will of God,404 and of their duty, binding them to walk accordingly;405 to convince them of their disability to keep it, and of the sinful pollution of their nature, hearts, and lives:406 to humble them in the sense of their sin and misery,407 and thereby help them to a clearer sight of the need they have of Christ,408 and of the perfection of his obedience.409",
    ],
  },

  // Lev. 11:44-45. Lev. 20:7-8. Rom. 8:12.
  // Mic. 6:8. Jas. 2:10-11.
  // Psa. 19:11-12. Rom. 3:20. Rom. 7:7.
  // Rom. 3:9, 23.
  // Gal. 3:21-22.
  // Rom. 10:4.
  {
    number: 96,
    question:
      "What particular use is there of the moral law to unregenerate men?",
    answer: [
      "The moral law is of use to unregenerate men, to awaken their consciences to flee from wrath to come,410 and to drive them to Christ;411 or, upon their continuance in the estate and way of sin, to leave them inexcusable,412 and under the curse thereof.413",
    ],
  },

  // 1 Tim. 1:9-10.
  // Gal. 3:24
  // Rom. 1:20. Rom. 2:15.
  // Gal. 3:10.
  {
    number: 97,
    question: "What special use is there of the moral law to the regenerate?",
    answer: [
      "Although they that are regenerate, and believe in Christ, be delivered from the moral law as a covenant of works,414 so as thereby they are neither justified415 nor condemned;416 yet, besides the general uses thereof common to them with all men, it is of special use, to show them how much they are bound to Christ for his fulfilling it, and enduring the curse thereof in their stead, and for their good;417 and thereby to provoke them to more thankfulness,418 and to express the same in their greater care to conform themselves thereunto as the rule of their obedience.419",
    ],
  },

  // Rom. 6:14. Rom. 7:4, 6. Gal. 4:4-5.
  // Rom. 3:20.
  // Gal. 5:23. Rom. 8:1.
  // Rom. 7:24-25. Gal. 3:13-14. Rom. 8:3-4.
  // Luke 1:68-69, 74-75. Col. 1:12-14.
  // Rom. 7:22. Rom. 12:2. Tit. 2:11-14.
  {
    number: 98,
    question: "Where is the moral law summarily comprehended?",
    answer: [
      "The moral law is summarily comprehended in the ten commandments, which were delivered by the voice of God upon Mount Sinai, and written by him in two tables of stone;420 and are recorded in the twentieth chapter of Exodus. The four first commandments containing our duty to God, and the other six our duty to man.421",
    ],
  },

  // Deut. 10:4. Exod. 34:1-4.
  // Matt. 22:37-40.
  {
    number: 99,
    question:
      "What rules are to be observed for the right understanding of the ten commandments?",
    answer: [
      `For the right understanding of the ten commandments, these rules are to be observed:

  1. That the law is perfect, and bindeth everyone to full conformity in the whole man unto the righteousness thereof, and unto entire obedience forever; so as to require the utmost perfection of every duty, and to forbid the least degree of every sin.422

  2. That it is spiritual, and so reacheth the understanding, will, affections, and all other powers of the soul; as well as words, works, and gestures.423

  3. That one and the same thing, in divers respects, is required or forbidden in several commandments.424

  4. That as, where a duty is commanded, the contrary sin is forbidden;425 and, where a sin is forbidden, the contrary duty is commanded:426 so, where a promise is annexed, the contrary threatening is included;427 and, where a threatening is annexed, the contrary promise is included.428

  5. That what God forbids, is at no time to be done;429 what he commands, is always our duty;430 and yet every particular duty is not to be done at all times.431

  6. That under one sin or duty, all of the same kind are forbidden or commanded; together with all the causes, means, occasions, and appearances thereof, and provocations thereunto.432

  7. That what is forbidden or commanded to ourselves, we are bound, according to our places to endeavour that it may be avoided or performed by others, according to the duty of their places.433

  8. That in what is commanded to others, we are bound, according to our places and callings, to be helpful to them;434 and to take heed of partaking with others in what is forbidden them.435`,
    ],
  },

  // Psa. 19:7. Jas. 2:10. Matt. 5:21-22.
  // Rom. 7:14. Deut. 6:5. Matt. 22:37-39. Matt. 5:21-22, 27-28, 33-34, 37-39, 43-44.
  // Col. 3:5. Prov. 1:19. 1 Tim. 6:10.
  // Isa. 58:13. Deut. 6:13. Matt. 4:9-10. Matt. 15:4-6.
  // Matt. 5:21-25. Eph. 4:28.
  // Exod. 20:12. Prov. 30:17.
  // Jer. 18:7-8. Exod. 20:7. Psa. 15:1, 4-5. Psa. 24:4-5.
  // Job 13:7-8. Rom. 3:8. Heb. 11:25.
  // Deut. 4:8-9.
  // Matt. 12:7.
  // Matt. 5:21-22, 27-28. Matt. 15:4-6. Heb. 10:24-25. 1 Thess. 5:22. Jude 23. Gal. 5:26. Col. 3:21.
  // Exod. 20:10. Lev. 19:17. Gen. 18:19. Josh. 14:15. Deut. 6:6-7.
  // 2 Cor. 1:24.
  // 1 Tim. 5:22. Eph. 5:11.
  {
    number: 100,
    question: "What special things are we to consider in the ten commandments?",
    answer: [
      "We are to consider in the ten commandments, the preface, the substance of the commandments themselves, and several reasons annexed to some of them, the more to enforce them.",
    ],
  },

  {
    number: 101,
    question: "What is the preface to the ten commandments?",
    answer: [
      "The preface to the ten commandments is contained in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.436 Wherein God manifesteth his sovereignty, as being JEHOVAH, the eternal, immutable, and almighty God;437 having his being in and of himself,438 and giving being to all his words439 and works:440 and that he is a God in covenant, as with Israel of old, so with all his people;441 who, as he brought them out of their bondage in Egypt, so he delivereth us from our spiritual thralldom;442 and that therefore we are bound to take him for our God alone, and to keep all his commandments.443",
    ],
  },

  // Exod. 20:2.
  // Isa. 44:6.
  // Exod. 3:14.
  // Exod. 6:3.
  // Acts 17:24, 28.
  // Gen. 17:7.
  // Rom. 3:29.
  // Luke 1:74-75.
  // 1 Pet. 1:15, 17-18. Lev. 18:30. Lev. 19:37.
  {
    number: 102,
    question:
      "What is the sum of the four commandments which contain our duty to God?",
    answer: [
      "The sum of the four commandments containing our duty to God is, to love the Lord our God with all our heart, and with all our soul, and with all our strength, and with all our mind.444",
    ],
  },

  // Luke 10:27.
  {
    number: 103,
    question: "Which is the first commandment?",
    answer: [
      "The first commandment is, Thou shall have no other gods before me.445",
    ],
  },

  // Exodus 20:3.
  {
    number: 104,
    question: "What are the duties required in the first commandment?",
    answer: [
      "The duties required in the first commandment are, the knowing and acknowledging of God to be the only true God, and our God;446 and to worship and glorify him accordingly,447 by thinking,448 meditating,449 remembering,450 highly esteeming,451 honouring,452 adoring,453 choosing,454 loving,455 desiring,456 fearing of him;457 believing him;458 trusting459 hoping,460 delighting,461 rejoicing in him;462 being zealous for him;463 calling upon him, giving all praise and thanks,464 and yielding all obedience and submission to him with the whole man;465 being careful in all things to please him,466 and sorrowful when in any thing he is offended;467 and walking humbly with him.468",
    ],
  },

  // 1 Chron. 28:9. Deut. 26:7. Isa. 43:10. Jer. 14:22.
  // Psa. 95:6-7. Matt. 4:10. Psa. 29:2.
  // Mal. 3:16.
  // Psa. 63:6.
  // Eccl. 12:1.
  // Psa. 71:19.
  // Mal. 1:6.
  // Isa. 45:23.
  // Josh. 24:15, 22.
  // Deut. 6:5.
  // Psa. 73:25.
  // Isa. 8:13.
  // Exod. 14:31.
  // Isa. 26:4.
  // Psa. 130:7.
  // Psa. 37:4.
  // Psa. 32:11.
  // Rom. 12:11. Num. 25:11.
  // Phil. 4:6.
  // Jer. 7:23. Jas. 4:7.
  // 1 John 3:22.
  // Jer. 31:18. Psa. 119:136.
  // Mic. 6:8.
  {
    number: 105,
    question: "What are the sins forbidden in the first commandment?",
    answer: [
      "The sins forbidden in the first commandment are, atheism, in denying or not having a God;469 idolatry, in having or worshipping more gods than one, or any with or instead of the true God;470 the not having and avouching him for God, and our God;471 the omission or neglect of anything due to him, required in this commandment;472 ignorance,473 forgetfulness,474 misapprehensions,475 false opinions,476 unworthy and wicked thoughts of him;477 bold and curious searching into his secrets;478 all profaneness,479 hatred of God;480 self-love,481 self-seeking,482 and all other inordinate and immoderate setting of our mind, will, or affections upon other things, and taking them off from him in whole or in part;483 vain credulity,484 unbelief,485 heresy,486 misbelief,487 distrust,488 despair,489 incorrigibleness,490 and insensibleness under judgments,491 hardness of heart,492 pride,493 presumption,494 carnal security,495 tempting of God;496 using unlawful means,497 and trusting in lawful means;498 carnal delights and joys;499 corrupt, blind, and indiscreet zeal;500 lukewarmness,501 and deadness in the things of God;502 estranging ourselves, and apostatizing from God;503 praying, or giving any religious worship, to saints, angels, or any other creatures;504 all compacts and consulting with the devil,505 and hearkening to his suggestions;506 making men the lords of our faith and conscience;507 slighting and despising God and his commands;508 resisting and grieving of his Spirit,509 discontent and impatience at his dispensations, charging him foolishly for the evils he inflicts on us;510 and ascribing the praise of any good we either are, have or can do, to fortune,511 idols,512 ourselves,513 or any other creature.514",
    ],
  },

  // Psa. 14:1. Eph.
  // Jer. 2:27-28. 1 Thess. 1:9.
  // Psa. 81:11.
  // Isa. 43:2, 23-24.
  // Jer. 4:22. Hos. 4:1, 6.
  // Jer. 2:32.
  // Acts 17:23, 29.
  // Isa. 40:18.
  // Psa. 50:21.
  // Deut. 29:29.
  // Tit. 1:16. Heb. 12:16.
  // Rom. 1:30.
  // 2 Tim. 3:2.
  // Phil. 2:21.
  // 1 John 2:15-16. 1 Sam.2:29. Col. 2:2, 5.
  // 1 John 4:1.
  // Heb. 3:12.
  // Gal. 5:20. Titus 3:10.
  // Acts 26:9.
  // Psa. 78:22.
  // Gen. 4:13.
  // Jer. 5:3.
  // Isa. 42:25.
  // Rom. 2:5.
  // Jer. 13:15.
  // Psa. 10:13.
  // Zeph. 1:12.
  // Matt. 4:7.
  // Rom. 3:8.
  // Jer. 17:5.
  // 2 Tim. 3:4.
  // Gal. 4:17. John 16:2. Rom. 10:2. Luke 9:54-55.
  // Rev. 3:16.
  // Rev. 2:1.
  // Ezek. 14:5. Isa. 1:4-5.
  // Rom. 10:13-14. Hos. 4:12. Acts 10:25-26. Rev. 19:10. Matt. 4:10. Col. 2:18. Rom. 1:25.
  // Lev. 20:6. 1 Sam. 28:7, 11. 1 Chron. 10:13-14.
  // Acts 5:3.
  // 2 Cor. 1:24. Matt. 23:9.
  // Deut. 32:15. 2 Sam. 12:9. Prov. 13:13.
  // Acts 7:51. Eph. 4:30.
  // Psa. 73:2-3, 13-15, 22. Job 1:22.
  // 1 Sam. 6:7-9.
  // Dan. 5:23.
  // Deut. 8:17. Dan. 4:30.
  // Hab. 1:16.
  {
    number: 106,
    question:
      "What are we specially taught by these words before me in the first commandment?",
    answer: [
      "These words before me or before my face, in the first commandment, teach us, that God, who seeth all things, taketh special notice of, and is much displeased with, the sin of having any other God: that so it may be an argument to dissuade from it, and to aggravate it as a most impudent provocation:515 as also to persuade us to do as in his sight, whatever we do in his service.516",
    ],
  },

  // Ezek. 8:5-6. Psa. 44:20-21.
  // 1 Chron. 28:9.
  {
    number: 107,
    question: "Which is the second commandment?",
    answer: [
      "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth. Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments.517",
    ],
  },

  // Exod. 20:4-6.
  {
    number: 108,
    question: "What are the duties required in the second commandment?",
    answer: [
      "The duties required in the second commandment are, the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath instituted in his Word;518 particularly prayer and thanksgiving in the name of Christ;519 the reading, preaching, and hearing of the Word;520 the administration and receiving of the sacraments;521 church government and discipline;522 the ministry and maintainance thereof;523 religious fasting;524 swearing by the name of God;525 and vowing unto him;526 as also the disapproving, detesting, opposing all false worship;527 and, according to each one—s place and calling, removing it, and all monuments of idolatry.528",
    ],
  },

  // Deut. 32:46-47. Matt. 28:20. Acts 2:42. 1 Tim. 6:13-14.
  // Phil. 4:6. Eph. 5:20.
  // Deut. 17:18-19. Acts 15:21. 2 Tim. 4:2. Jas. 1:21-22. Acts 10:33.
  // Matt. 28:19. 1 Cor. 11:23-30.
  // Matt. 18:15-17. Matt. 16:19. 1 Cor. 5 (entire). 1 Cor. 12:28.
  // Eph. 4:11-12. 1 Tim. 5:17-18. 1 Cor. 9:7-15.
  // Joel 2:12, 18. 1 Cor. 7:5.
  // Deut. 6:13.
  // Psa. 76:11.
  // Acts 17:16-17. Psa. 16:4.
  // Deut. 7:5. Isa. 30:22.
  {
    number: 109,
    question: "What are the sins forbidden in the second commandment?",
    answer: [
      "The sins forbidden in the second commandment are, all devising,529 counseling,530 commanding,531 using,532 and anywise approving, any religious worship not instituted by God himself;533 tolerating a false religion; the making any representation of God, of all or of any of the three persons, either inwardly in our mind, or outwardly in any kind of image or likeness of any creature whatsoever;534 all worshipping of it,535 or God in it or by it;536 the making of any representation of feigned deities,537 and all worship of them, or service belonging to them,538 all superstitious devices,539 corrupting the worship of God,540 adding to it, or taking from it,541 whether invented and taken up of ourselves,542 or received by tradition from others,543 though under the title of antiquity,544 custom,545 devotion,546 good intent, or any other pretence whatsoever;547 simony;548 sacrilege;549 all neglect,550 contempt,551 hindering,552]and opposing the worship and ordinances which God hath appointed.553",
    ],
  },

  // Num. 15:39.
  // Deut. 13:6-8.
  // Hos. 5:11. Mic. 6:16.
  // 1 Kings 11:33. 1 Kings 12:33.
  // Deut. 12:30-32.
  // Deut. 4:15-19. Acts 17:29. Rom. 1:21-23, 25.
  // Dan. 3:18. Gal. 4:8.
  // Exod. 32:5.
  // Exod. 32:8.
  // 1 Kings 18:26, 28. Isa. 65:11.
  // Acts 17:22. Col. 2:21-23
  // Mal. 1:7-8, 14.
  // Deut. 4:2.
  // Psa. 106:39.
  // Matt. 15:9.
  // 1 Pet. 1:18.
  // Jer. 44:17.
  // Isa. 65:3-5. Ga. 1:13-14.
  // 1 Sam. 13:11-12. 1 Sam. 15:21.
  // Acts 8:18.
  // Rom. 2:22. Mal. 3:8.
  // Exod. 4:24-26.
  // Matt. 22:5. Mal. 1:7, 13.
  // Matt. 23:13.
  // Acts 13:44-45. 1 Thess. 2:15-16.
  {
    number: 110,
    question:
      "What are the reasons annexed to the second commandment, the more to enforce it?",
    answer: [
      "The reasons annexed to the second commandment, the more to enforce it, contained in these words, For I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments;554 are, besides God—s sovereignty over us, and propriety in us,555 his fervent zeal for his own worship,556 and his revengeful indignation against all false worship, as being a spiritual whoredom;557 accounting the breakers of this commandment such as hate him, and threatening to punish them unto divers generations;558 and esteeming the observers of it such as love him and keep his commandments, and promising mercy to them unto many generations.559",
    ],
  },

  // Exod. 20:5-6.
  // Psa. 45:11. Rev. 15:3-4.
  // Exod. 34:13-14.
  // 1 Cor. 10:20-22. Deut. 32:16-20.
  // Hos. 2:2-4.
  // Deut. 5:29.
  {
    number: 111,
    question: "Which is the third commandment?",
    answer: [
      "The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.560",
    ],
  },

  // Exod. 20:7.
  {
    number: 112,
    question: "What is required in the third commandment?",
    answer: [
      "The third commandment requires, That the name of God, his titles, attributes,561 ordinances,562 the Word,563 sacraments,564 prayer,565 oaths,566 vows,567 lots,568 his works,569 and whatsoever else there is whereby he makes himself known, be holily and reverently used in thought,570 meditation,571 word,572 and writing;573 by an holy profession,574 and answerable conversation,575 to the glory of God,576 and the good of ourselves,577 and others.578",
    ],
  },

  // Matt. 11:9. Deut. 28:58. Psa. 29:2. Psa. 68:4. Rev. 15:3-4.
  // Mal. 1:14. Eccl. 5:1.
  // Psa. 138:2.
  // 1 Cor. 11:24-25, 28-29.
  // 1 Tim. 2:8.
  // Jer. 4:2.
  // Eccl.5:2, 4-6.
  // Acts 1:24, 26.
  // Job 36:24.
  // Mal. 3:16.
  // Psa. 8:1, 3-4, 9.
  // Col. 3:17. Psa. 105:2, 5.
  // Psa. 102:18.
  // 1 Pet. 3:15. Mic. 4:5.
  // Phil. 1:27.
  // 1 Cor. 10:31.
  // Jer. 32:39.
  // 1 Pet. 2:12.
  {
    number: 113,
    question: "What are the sins forbidden in the third commandment?",
    answer: [
      "The sins forbidden in the third commandment are, the not using of God's name as is required;579 and the abuse of it in an ignorant,580 vain,581 irreverent, profane,582 superstitious583 or wicked mentioning or otherwise using his titles, attributes,584 ordinances,585 or works,586 by blasphemy,587 perjury;588 all sinful cursings,589 oaths,590 vows,591 and lots;592 violating of our oaths and vows, if lawful;593 and fulfilling them, if of things unlawful;594 murmuring and quarrelling at,595 curious prying into,596 and misapplying of God—s decrees597 and providences;598 misinterpreting,599 misapplying,600 or any way perverting the Word, or any part of it;601 to profane jests,602 curious or unprofitable questions, vain janglings, or the maintaining of false doctrines;603 abusing it, the creatures, or anything contained under the name of God, to charms,604 or sinful lusts and practices;605 the maligning,606 scorning,607 reviling,608 or any wise opposing of God's truth, grace, and ways;609 making profession of religion in hypocrisy, or for sinister ends;610 being ashamed of it,611 or a shame to it, by unconformable,612 unwise,613 unfruitful,614 and offensive walking,615 or backsliding from it.616",
    ],
  },

  // Mal. 2:2.
  // Acts 17:23.
  // Prov. 30:9.
  // Mal. 1:6-7, 12. Mal. 3:14.
  // 1 Sam. 4:3-5. Jer. 7:4, 9-10, 14, 31. Col. 2:20-22.
  // 2 Kings 18:30, 35. Exod. 5:2. Psa. 139:20.
  // Psa. 50:16-17.
  // Isa. 5:12.
  // 2 Kings 19:22. Lev. 24:11.
  // Zech. 5:4. Zech. 8:17.
  // 1 Sam. 17:43. 2 Sam. 16:5.
  // Jer. 5:7. Jer. 23:10.
  // Deut. 23:18. Acts 23:12, 14.
  // Esther 3:7. Esther 9:24. Psa. 22:18.
  // Psa. 24:4. Ezek. 17:16, 18-19.
  // Mark 6:26. 1 Sam. 25:22, 32-34.
  // Rom. 9:14, 19-20.
  // Deut. 29:29.
  // Rom. 3:5, 7. Rom. 6:1.
  // Eccl. 8:11. Eccl. 9:3. Psa. 39.
  // Matt. 5:21-22.
  // Ezek. 13:22.
  // 2 Pet. 3:16. Matt. 22:24-31. Matt. 25:28-30.
  // Isa. 22:13. Jer. 23:34, 36, 38.
  // 1 Tim. 1:4, 6-7. 1 Tim. 6:4-5, 20. 2 Tim. 2:14. Tit. 3:9.
  // Deut. 18:10-14. Acts 19:13.
  // 2 Tim. 4:3-4. Rom. 13:13-14. 1 Kings 21:9-10. Jude 4.
  // Acts 13:45. 1 John 3:12.
  // Psa. 1:1. 2 Pet. 3:3.
  // 1 Pet. 4:4.
  // Acts 13:45-46, 50. Acts 4:18. Acts 19:9. 1 Thess. 2:16. Heb. 10:29.
  // 2 Tim. 3:5. Matt. 23:14. Matt. 6:1-2, 5, 16.
  // Mark 8:38.
  // Psa. 73:14-15.
  // 1 Cor. 6:5-6. Eph. 5:15-17.
  // Isa. 5:4. 2 Pet. 1:8-9.
  // Rom. 2:23-24.
  // Gal. 3:1, 3. Heb. 6:6.
  {
    number: 114,
    question: "What reasons are annexed to the third commandment?",
    answer: [
      "The reasons annexed to the third commandment, in these words, The Lord thy God, and, For the Lord will not hold him guiltless that taketh his name in vain,617 are, because he is the Lord and our God, therefore his name is not to be profaned, or any way abused by us;618 especially because he will be so far from acquitting and sparing the transgressors of this commandment, as that he will not suffer them to escape his righteous judgment;619 albeit many such escape the censures and punishments of men.620",
    ],
  },

  // Exod. 20:7.
  // Lev. 19:12.
  // Ezek. 36:21-23. Deut. 28:58-59. Zech. 5:2-4.
  // 1 Sam. 2:12, 17, 22, 24. 1 Sam. 3:13
  {
    number: 115,
    question: "Which is the fourth commandment?",
    answer: [
      "The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work; but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates. For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested in the seventh day: wherefore the Lord blessed the sabbath-day and hallowed it.621",
    ],
  },

  // Exod. 20:8-11.
  {
    number: 116,
    question: "What is required in the fourth commandment?",
    answer: [
      "The fourth commandment requireth of all men the sanctifying or keeping holy to God such set times as he hath appointed in his Word, expressly one whole day in seven; which was the seventh from the beginning of the world to the resurrection of Christ, and the first day of the week ever since, and so to continue to the end of the world; which is the Christian sabbath,622 and in the New Testament called The Lord's day.623",
    ],
  },

  // Deut. 5:12-14. Gen. 2:2-3. 1 Cor. 16:1-2. Matt. 5:17-18. Isa. 56:2, 4, 6-7.
  // Rev. 1:10.
  {
    number: 117,
    question: "How is the sabbath or the Lord�s day to be sanctified?",
    answer: [
      "The sabbath or Lord's day is to be sanctified by an holy resting all the day,624 not only from such works as are at all times sinful, but even from such worldly employments and recreations as are on other days lawful;625 and making it our delight to spend the whole time (except so much of it as is to be taken up in works of necessity and mercy)626 in the public and private exercises of God's worship:627 and, to that end, we are to prepare our hearts, and with such foresight, diligence, and moderation, to dispose and seasonably dispatch our worldly business, that we may be the more free and fit for the duties of that day.628",
    ],
  },

  // Exod. 20:8, 10.
  // Exod. 16:25-28. Neh. 13:15-22. Jer. 17:21-22.
  // Matt. 12:1-13.
  // Isa. 58:13. Luke 4:16. Acts 20:7. 1 Cor. 16:1-2. Psa. 92 (title: A psalm or song for the sabbath-day). Isa. 66:23. Lev. 23:3.
  // Exod. 20:8. Luke 23:54, 56. Exod. 16:22, 25-26, 29. Neh. 13:19.
  {
    number: 118,
    question:
      "Why is the charge of keeping the sabbath more specially directed to governors of families, and other superiors?",
    answer: [
      "The charge of keeping the sabbath is more specially directed to governors of families, and other superiors, because they are bound not only to keep it themselves, but to see that it be observed by all those that are under their charge; and because they are prone ofttimes to hinder them by employments of their own.629",
    ],
  },

  // Exod. 20:10. Josh. 24:15. Neh. 13:15, 17. Jer. 17:20-22. Exod. 23:12.
  {
    number: 119,
    question: "What are the sins forbidden in the fourth commandment?",
    answer: [
      "The sins forbidden in the fourth commandment are, all omissions of the duties required,630 all careless, negligent, and unprofitable performing of them, and being weary of them;631 all profaning the day by idleness, and doing that which is in itself sinful;632 and by all needless works, words, and thoughts, about our worldly employments and recreations.633",
    ],
  },

  // Ezek. 22:26.
  // Acts 20:7, 9. Ezek. 33:30-32. Amos 8:5. Mal. 1:13.
  // Ezek. 23:38.
  // Jer. 17:24, 27. Isa. 58:13.
  {
    number: 120,
    question:
      "What are the reasons annexed to the fourth commandment, the more to enforce it?",
    answer: [
      "The reasons annexed to the fourth commandment, the more to enforce it, are taken from the equity of it, God allowing us six days of seven for our own affairs, and reserving but one for himself in these words, Six days shalt thou labour, and do all thy work:634 from God's challenging a special propriety in that day, The seventh day is the sabbath of the Lord thy God:635 from the example of God, who in six days made heaven and earth, the sea, and all that in them is, and rested the seventh day: and from that blessing which God put upon that day, not only in sanctifying it to be a day for his service, but in ordaining it to be a means of blessing to us in our sanctifying it; Wherefore the Lord blessed the sabbath day, and hallowed it.636",
    ],
  },

  // Exod. 20:9.
  // Exod. 20:10.
  // Exod. 20:11.
  {
    number: 121,
    question:
      "Why is the word Remember set in the beginning of the fourth commandment?",
    answer: [
      "The word Remember is set in the beginning of the fourth commandment,637 partly, because of the great benefit of remembering it, we being thereby helped in our preparation to keep it,638 and, in keeping it, better to keep all the rest of the commandments,639 and to continue a thankful remembrance of the two great benefits of creation and redemption, which contain a short abridgment of religion;640 and partly, because we are very ready to forget it,641 for that there is less light of nature for it,642 and yet it restraineth our natural liberty in things at other times lawful;643 that it cometh but once in seven days, and many worldly businesses come between, and too often take off our minds from thinking of it, either to prepare for it, or to sanctify it;644 and that Satan with his instruments labours much to blot out the glory, and even the memory of it, to bring in all irreligion and impiety.645",
    ],
  },

  // Exod. 20:8.
  // Exod. 16:23. Luke 23:54, 56. Mark 15:42. Neh. 13:19.
  // Psa. 92 (title: A psalm or song for the sabbath-day). Psa 92:7, 13-14. Ezek. 20:12, 19-20.
  // Gen. 2:2-3. Psa. 118:22, 24. Acts 4:10-11. Rev. 1:10.
  // Ezek. 22:26.
  // Neh. 9:14.
  // Exod. 34:21.
  // Deut. 5:14-15. Amos 8:5.
  // Lam. 1:7. Jer. 17:21-23. Neh. 13:15-22.
  {
    number: 122,
    question:
      "What is the sum of the six commandments which contain our duty to man?",
    answer: [
      "The sum of the six commandments which contain our duty to man, is, to love our neighbour as ourselves,646 and to do to others what we would have them to do to us.647",
    ],
  },

  // Matt. 22:39.
  // Matt. 7:12.
  {
    number: 123,
    question: "Which is the fifth commandment?",
    answer: [
      "The fifth commandment is, Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.648",
    ],
  },

  // Exod. 20:12.
  {
    number: 124,
    question: "Who are meant by father and mother in the fifth commandment?",
    answer: [
      "By father and mother, in the fifth commandment, are meant, not only natural parents,649 but all superiors in age650 and gifts;651 and especially such as, by God's ordinance, are over us in place of authority, whether in family,652 church,653 or commonwealth.654",
    ],
  },

  // Prov. 23:22, 25. Eph. 6:1-2.
  // 1 Tim. 5:1-2.
  // Gen. 4:20-22. Gen. 45:8.
  // 2 Kings 5:13.
  // 2 Kings 2:12. 2 Kings 13:14. Gal. 4:19.
  // Isa. 49:23.
  {
    number: 125,
    question: "Why are superiors styled father and mother?",
    answer: [
      "Superiors are styled father and mother, both to teach them in all duties toward their inferiors, like natural parents, to express love and tenderness to them, according to their several relations;655 and to work inferiors to a greater willingness and cheerfulness in performing their duties to their superiors, as to their parents.656",
    ],
  },

  // Eph. 6:4. 2 Cor. 12:14. 1 Thess, 2:7-8, 11. Num. 11:11-12.
  // 1 Cor. 4:14-16. 2 Kings 5:13.
  {
    number: 126,
    question: "What is the general scope of the fifth commandment?",
    answer: [
      "The general scope of the fifth commandment is, the performance of those duties which we mutually owe in our several relations, as inferiors, superiors, or equals.657",
    ],
  },

  // Eph. 5:21. 1 Pet. 2:17. Rom. 12:10.
  {
    number: 127,
    question: "What is the honour that inferiors owe to their superiors?",
    answer: [
      "The honour which inferiors owe to their superiors is, all due reverence in heart,658 word,659 and behavior;660 prayer and thanksgiving for them;661 imitation of their virtues and graces;662 willing obedience to their lawful commands and counsels;663 due submission to their corrections;664 fidelity to,665 defense,666 and maintenance of their persons and authority, according to their several ranks, and the nature of their places;667 bearing with their infirmities, and covering them in love,668 that so they may be an honour to them and to their government.669",
    ],
  },

  // Mal. 1:6. Lev. 19:3.
  // Prov. 31:28. 1 Pet. 3:6.
  // Lev. 19:32. 1 Kings 2:19.
  // 1 Tim. 2:1-2.
  // Heb. 13:7. Phil. 3:17.
  // Eph. 6:1-2, 6-7. 1 Pet. 2:13-14. Rom. 13:1-5. Heb. 13:17. Prov. 4:3-4. Prov. 23:22. Exod. 18:19, 24.
  // Heb. 12:9. 1 Pet. 2:18-20
  // Tit. 2:9-10.
  // 1 Sam. 26:15-16. 2 Sam. 18:3. Esther 6:2.
  // Matt. 22:21. Rom. 13:6-7. 1 Tim. 5:17-18. Gal. 6:6. Gen. 45:11. Gen. 47:12.
  // 1 Pet. 2:18. Prov. 23:22. Gen. 9:23.
  // Psa. 127:3-5. Prov. 31:23.
  {
    number: 128,
    question: "What are the sins of inferiors against their superiors?",
    answer: [
      "The sins of inferiors against their superiors are, all neglect of the duties required toward them;670 envying at,671 contempt of,672 and rebellion673 against, their persons674 and places,675 in their lawful counsels,676 commands, and corrections;677 cursing, mocking678 and all such refractory and scandalous carriage, as proves a shame and dishonour to them and their government.679",
    ],
  },

  // Matt. 15:4-6.
  // Num. 11:28-29.
  // 1 Sam. 8:7. Isa. 3:5.
  // 2 Sam. 15:1-12.
  // Exod. 21:15.
  // 1 Sam. 10:27.
  // 1 Sam. 2:25.
  // Deut. 21:18-21.
  // Prov. 30:11, 17.
  // Prov. 19:26.
  {
    number: 129,
    question: "What is required of superiors towards their inferiors?",
    answer: [
      "It is required of superiors, according to that power they receive from God, and that relation wherein they stand, to love,680 pray for,681 and bless their inferiors;682 to instruct,683 counsel, and admonish them;684 countenancing,685 commending,686 and rewarding such as do well;687 and discountenancing,688 reproving, and chastising such as do ill;689 protecting,690 and providing for them all things necessary for soul691 and body:692 and by grave, wise, holy, and exemplary carriage, to procure glory to God,693 honour to themselves,694 and so to preserve that authority which God hath put upon them.695",
    ],
  },

  // Col. 3:19. Tit. 2:4.
  // 1 Sam. 12:23. Job 1:5.
  // 1 Kings 8:55-56. Heb. 7:7. Gen. 49:28.
  // Deut. 6:6-7.
  // Eph. 6:4.
  // 1 Pet. 3:7.
  // 1 Pet. 2:14. Rom. 13:3.
  // Esther 6:3.
  // Rom. 13:3-4.
  // Prov. 29:15. 1 Pet. 2:14.
  // Job 29:13-16. Isa. 1:10, 17.
  // Eph. 6:4.
  // 1 Tim. 5:8.
  // 1 Tim. 4:12. Tit. 2:3-5.
  // 1 Kings 3:28.
  // Tit. 2:15.
  {
    number: 130,
    question: "What are the sins of superiors?",
    answer: [
      "The sins of superiors are, besides the neglect of the duties required of them,696 and inordinate seeking of themselves,697 their own glory,698 ease, profit, or pleasure;699 commanding things unlawful,700 or not in the power of inferiors to perform;701 counseling,702 encouraging,703 or favouring them in that which is evil;704 dissuading, discouraging, or discountenancing them in that which is good;705 correcting them unduly;706 careless exposing, or leaving them to wrong, temptation, and danger;707 provoking them to wrath;708 or any way dishonouring themselves, or lessening their authority, by an unjust, indiscreet, rigorous, or remiss behaviour.709",
    ],
  },

  // Ezek. 34:2-4.
  // Phil. 2:21.
  // John 5:44. John 7:18.
  // Isa. 56:10-11. Deut. 17:17.
  // Dan. 3:4-6. Acts 4:17-18.
  // Exod. 5:10-18. Matt. 23:2, 4.
  // Matt. 14:8. Mark 6:24.
  // 2 Sam. 13:28.
  // 1 Sam. 3:13.
  // John 7:46-49. Col. 3:21. Exod. 5:17.
  // 1 Pet. 2:18-20. Heb. 12:10. Deut. 25:3.
  // Gen. 38:11, 26. Acts 18:17.
  // Eph. 6:4.
  // Gen. 9:21. 1 Kings 12:13-16. 1 Kings 1:6. 1 Sam. 2:29-31.
  {
    number: 131,
    question: "What are the duties of equals?",
    answer: [
      "The duties of equals are, to regard the dignity and worth of each other,710 in giving honour to go one before another;711 and to rejoice in each others' gifts and advancement, as their own.712",
    ],
  },

  // 1 Pet. 2:17.
  // Rom. 12:10.
  // Rom. 12:15-16. Phil. 2:3-4.
  {
    number: 132,
    question: "What are the sins of equals?",
    answer: [
      "The sins of equals are, besides the neglect of the duties required,713 the undervaluing of the worth,714 envying the gifts,715 grieving at the advancement of prosperity one of another;716 and usurping pre-eminence one over another.717",
    ],
  },

  // Rom. 13:8.
  // 2 Tim. 3:3.
  // Acts 7:9. Gal. 5:26.
  // Num. 12:2. Esther 6:12-13.
  // 3 John 9. Luke 22:24.
  {
    number: 133,
    question:
      "What is the reason annexed to the fifth commandment, the more to enforce it?",
    answer: [
      "The reason annexed to the fifth commandment, in these words, That thy days may be long upon the land which the Lord thy God giveth thee,718 is an express promise of long life and prosperity, as far as it shall serve for God's glory and their own good, to all such as keep this commandment.719",
    ],
  },

  // Exod. 20:12.
  // Deut. 5:16. 1 Kings 8:25. Eph. 6:2-3.
  {
    number: 134,
    question: "Which is the sixth commandment?",
    answer: ["The sixth commandment is, Thou shalt not kill.720"],
  },

  // Exod. 20:13.
  {
    number: 135,
    question: "What are the duties required in the sixth commandment?",
    answer: [
      "The duties required in the sixth commandment are all careful studies, and lawful endeavors, to preserve the life of ourselves721 and others722 by resisting all thoughts and purposes,723 subduing all passions,724 and avoiding all occasions,725 temptations,726 and practices, which tend to the unjust taking away the life of any;727 by just defence thereof against violence,728 patient bearing of the hand of God,729 quietness of mind,730 cheerfulness of spirit;731 a sober use of meat,732 drink,733 physic,734 sleep,735 labour,736 and recreations;737 by charitable thoughts,738 love,739 compassion,740 meekness, gentleness, kindness;741 peaceable,742 mild and courteous speeches and behaviour;743 forbearance, readiness to be reconciled, patient bearing and forgiving of injuries, and requiting good for evil;744 comforting and succouring the distressed and protecting and defending the innocent.745",
    ],
  },

  // Eph. 5:28-29.
  // 1 Kings 18:4.
  // Jer. 26:15-16. Acts 23:12, 16-17, 21, 27.
  // Eph. 4:26-27.
  // 2 Sam. 2:22. Deut. 22:8.
  // Matt. 4:6-7. Prov. 1:10-11, 15-16.
  // 1 Sam. 24:12. 1 Sam. 26:9-11. Gen. 37:21-22.
  // Psa. 82:4. Prov. 24:11-12. 1 Sam. 14:45.
  // Jas. 5:7-11. Heb. 12:9.
  // 1 Thess. 4:11. 1 Pet. 3:3-4. Psa. 37:8-11.
  // Prov. 17:22.
  // Prov. 25:16, 27.
  // 1 Tim. 5:23.
  // Isa. 38:21.
  // Psa. 127:2.
  // Eccl. 5:12. 2 Thess. 3:10, 12. Prov. 16:20.
  // Eccl. 3:4, 11.
  // 1 Sam. 19:4-5. 1 Sam. 22:13-14.
  // Rom. 13:10.
  // Luke 10:33-34.
  // Col. 3:12-13.
  // Jas. 3:17.
  // 1 Pet. 3:8-11. Prov. 15:1. Judg. 8:1-3.
  // Matt. 5:24. Eph. 5:2, 32. Rom. 12:17.
  // 1 Thess. 5:14. Job 31:19-20. Matt. 25:35-36. Prov. 31:8-9.
  {
    number: 136,
    question: "What are the sins forbidden in the sixth commandment?",
    answer: [
      "The sins forbidden in the sixth commandment are, all taking away the life of ourselves,746 or of others,747 except in case of public justice,748 lawful war,749 or necessary defence;750 the neglecting or withdrawing the lawful and necessary means of preservation of life;751 sinful anger,752 hatred,753 envy,754 desire of revenge;755 all excessive passions,756 distracting cares;757 immoderate use of meat, drink,758 labor,759 and recreations;760 provoking words,761 oppression,762 quarreling,763 striking, wounding,764 and whatsoever else tends to the destruction of the life of any.765",
    ],
  },

  // Acts 16:28.
  // Gen. 9:6.
  // Num. 35:31, 33.
  // Jer. 48:10. Deut. 20:1.
  // Exod. 22:2-3.
  // Matt.25:42-43. Jas. 2:15-16. Eccl. 6:1-2.
  // Matt. 5:22.
  // 1 John 3:15. Lev. 19:17.
  // Prov. 14:30.
  // Rom. 12:19.
  // Eph. 4:31.
  // Matt. 6:31, 34.
  // Luke 21:34. Rom. 13:13.
  // Eccl. 12:12. Eccl. 2:22-23.
  // Isa. 5:12.
  // Prov. 15:1. Prov. 12:18.
  // Ezek. 18:18. Exod. 1:14.
  // Gal. 5:15. Prov. 23:29.
  // Num. 35:16-18, 21.
  // Exod. 21:18-36.
  {
    number: 137,
    question: "Which is the seventh commandment?",
    answer: ["The seventh commandment is, Thou shalt not commit adultery.766"],
  },

  // Exod. 20:14.
  {
    number: 138,
    question: "What are the duties required in the seventh commandment?",
    answer: [
      "The duties required in the seventh commandment are, chastity in body, mind, affections,767 words,768 and behavior;769 and the preservation of it in ourselves and others;770 watchfulness over the eyes and all the senses;771 temperance,772 keeping of chaste company,773 modesty in apparel;774 marriage by those that have not the gift of continency,775 conjugal love,776 and cohabitation;777 diligent labor in our callings;778 shunning all occasions of uncleanness, and resisting temptations thereunto.779",
    ],
  },

  // 1 Thess. 4:4. Job 31:1. 1 Cor. 7:34.
  // Col. 4:6.
  // 1 Pet. 3:2.
  // 1 Cor. 7:2, 35-36.
  // Job 31:1.
  // Acts 24:24-25.
  // Prov. 2:16-20.
  // 1 Tim. 2:9.
  // 1 Cor. 7:2, 9.
  // Prov. 5:19-20.
  // 1 Pet. 3:7.
  // Prov. 31:11, 27-28.
  // Prov. 5:8. Gen. 39:8-10.
  {
    number: 139,
    question: "What are the sins forbidden in the seventh commandment?",
    answer: [
      "The sins forbidden in the seventh commandment, besides the neglect of the duties required,780 are, adultery, fornication,781 rape, incest,782 sodomy, and all unnatural lusts;783 all unclean imaginations, thoughts, purposes, and affections;784 all corrupt or filthy communications, or listening thereunto;785 wanton looks,786 impudent or light behaviour, immodest apparel;787 prohibiting of lawful,788 and dispensing with unlawful marriages;789 allowing, tolerating, keeping of stews, and resorting to them;790 entangling vows of single life,791 undue delay of marriage,792 having more wives or husbands than one at the same time;793 unjust divorce,794 or desertion;795 idleness, gluttony, drunkenness,796 unchaste company;797 lascivious songs, books, pictures, dancings, stage plays;798 and all other provocations to, or acts of uncleanness, either in ourselves or others.799",
    ],
  },

  // Prov. 5:7.
  // Heb. 13:4. Gal. 5:19.
  // 2 Sam. 13:14. 1 Cor. 5:1
  // Rom. 1:24, 26-27. Lev. 20:15-16.
  // Matt. 5:28. Matt. 15:19. Col.3:5.
  // Eph. 5:3-4. Prov. 7:5, 21-22.
  // Isa. 3:16. 2 Pet. 2:14.
  // Prov. 7:10, 13.
  // 1 Tim. 4:3.
  // Lev. 18:1-21. Mark 6:18. Mal. 2:11-12.
  // 1 Kings 15:12. 2 Kings 23:7. Deut. 23:17-18. Lev. 19:29. Jer. 5:7. Prov. 7:24-27.
  // Matt. 19:10-11.
  // 1 Cor. 7:7-9. Gen. 38:26.
  // Mal. 2:14-15. Matt. 19:5.
  // Mal. 2:16. Matt. 5:32.
  // 1 Cor. 7:12-13.
  // Ezek. 16:49. Prov. 23:30-33.
  // Gen. 39:19.
  // Eph. 5:4. Ezek. 23:14-16. Isa. 23:15-17. Isa. 3:16. Mark 6:22. Rom. 13:13. 1 Pet. 4:3.
  // 2 Kings 9:30. Jer. 4:30. Exes 23:40.
  {
    number: 140,
    question: "Which is the eighth commandment?",
    answer: ["The eighth commandment is, Thou shalt not steal.800"],
  },

  // Exod. 20:15.
  {
    number: 141,
    question: "What are the duties required in the eighth commandment?",
    answer: [
      "The duties required in the eighth commandment are, truth, faithfulness, and justice in contracts and commerce between man and man;801 rendering to everyone his due; restitution of goods unlawfully detained from the right owners thereof;802 giving and lending freely, according to our abilities, and the necessities of others;803 moderation of our judgments, wills, and affections concerning worldly goods;804 a provident care and study to get,805 keep, use, and dispose these things which are necessary and convenient for the sustentation of our nature, and suitable to our condition;806 a lawful calling,807 and diligence in it;808 frugality;809 avoiding unnecessary lawsuits,810 and suretiship, or other like engagements;811 and an endeavor, by all just and lawful means, to procure, preserve, and further the wealth and outward estate of others, as well as our own.812",
    ],
  },

  // Psa. 15:2, 4. Zech. 7:4, 10. Zech. 8:16-17.
  // Lev. 6:2-5. Luke 19:8.
  // Luke 6:30, 38. 1 John 3:17. Eph. 4:28. Gal. 6:10.
  // 1 Tim. 6:6-9. Gal. 6:14.
  // 1 Tim. 5:8.
  // Prov. 27:23-27. Eccl. 2:24. Eccl. 3:12-13. 1 Tim. 6:17-18. Isa. 38:1. Matt. 11:8.
  // 1 Cor. 7:20. Gen. 2:15. Gen. 3:19.
  // Eph. 4:28. Prov. 10:4.
  // John 6:12. Prov. 21:20.
  // 1 Cor. 6:1-9.
  // Prov. 6:1-6. Prov. 11:15.
  // Lev. 25:35. Deut. 22:1-4. Exod. 23:4-5. Gen. 47:14, 20. Phil. 2:4. Matt. 22:39.
  {
    number: 142,
    question: "What are the sins forbidden in the eighth commandment?",
    answer: [
      "The sins forbidden in the eighth commandment, besides the neglect of the duties required,813 are, theft,814 robbery,815 man-stealing,816 and receiving any thing that is stolen;817 fraudulent dealing,818 false weights and measures,819 removing landmarks,820 injustice and unfaithfulness in contracts between man and man,821 or in matters of trust;822 oppression,823 extortion,824] usury,825 bribery,826 vexatious lawsuits,827 unjust inclosures and depopulations;828 ingrossing commodities to enhance the price;829 unlawful callings,830 and all other unjust or sinful ways of taking or withholding from our neighbour what belongs to him, or of enriching ourselves;831 covetousness;832 inordinate prizing and affecting worldly goods;833 distrustful and distracting cares and studies in getting, keeping, and using them;834 envying at the prosperity of others;835 as likewise idleness,836 prodigality, wasteful gaming; and all other ways whereby we do unduly prejudice our own outward estate,837 and defrauding ourselves of the due use and comfort of that estate which God hath given us.838",
    ],
  },

  // Jas. 2:15-16. 1 John 3:17.
  // Eph. 4:28.
  // Psa. 62:10.
  // 1 Tim. 1:10.
  // Prov. 29:24. Psa. 50:18.
  // 1 Thess. 4:6.
  // Prov. 11:1. Prov. 20:10.
  // Deut. 19:14. Prov. 23:10.
  // Amos 8:5. Psa. 37:21.
  // Luke 16:10-12.
  // Ezek. 22:29. Lev. 25:17.
  // Matt. 23:25. Ezek. 22:12.
  // Psa. 15:5.
  // Job 15:34.
  // 1 Cor. 6:6-8. Prov. 3:29-30.
  // Isa. 5:8. Mic. 2:2.
  // Prov. 11:26.
  // Acts 19:19, 24-25.
  // Job 20:19. Jas. 5:4. Prov. 21:6.
  // Luke 12:15.
  // 1 Tim. 6:5. Col. 3:2. Prov. 23:5. Psa. 62:10.
  // Matt. 6:25, 31, 34. Eccl. 5:12.
  // Psa. 73:3. Psa. 37:1, 7.
  // 2 Thess. 3:11. Prov. 18:9.
  // Prov. 21:17. Prov. 23:20-21. Prov. 28:19.
  // Eccl. 4:8. Eccl. 6:2. 1 Tim. 5:8.
  {
    number: 143,
    question: "Which is the ninth commandment?",
    answer: [
      "The ninth commandment is, Thou shalt not bear false witness against thy neighbor.839",
    ],
  },

  // Exod. 20:16.
  {
    number: 144,
    question: "What are the duties required in the ninth commandment?",
    answer: [
      "The duties required in the ninth commandment are, the preserving and promoting of truth between man and man,840 and the good name of our neighbour, as well as our own;841 appearing and standing for the truth;842 and from the heart,843 sincerely,844 freely,845 clearly,846 and fully,847 speaking the truth, and only the truth, in matters of judgment and justice,848 and in all other things whatsoever;849 a charitable esteem of our neighbours;850 loving, desiring, and rejoicing in their good name;851 sorrowing for,852 and covering of their infirmities;853 freely acknowledging of their gifts and graces,854 defending their innocency;855 a ready receiving of a good report,856 and unwillingness to admit of an evil report,857 concerning them; discouraging tale-bearers,858 flatterers,859 and slanderers;860 love and care of our own good name, and defending it when need requireth;861 keeping of lawful promises;862 studying and practicing of whatsoever things are true, honest, lovely, and of good report.863",
    ],
  },

  // Zech. 8:16.
  // 3 John 12.
  // Prov. 31:8-9.
  // Psa. 15:2.
  // 2 Chron. 19:9.
  // 1 Sam. 19:4-5.
  // Josh. 7:19.
  // 2 Sam. 14:18-20.
  // Lev. 19:15.
  // 2 Cor. 1:17-18. Eph. 4:25.
  // Heb. 6:9. 1 Cor. 13:7.
  // Rom. 1:8. 2 John 4. 3 John 3-4.
  // 2 Cor. 2:4. 2 Cor. 12:21.
  // Prov. 17:9. 1 Pet. 4:8.
  // 1 Cor. 1:4-5, 7. 2 Tim. 1:4-5.
  // 1 Sam. 22:14.
  // 1 Cor. 13:6-7.
  // Psa. 15:3.
  // Prov. 25:23.
  // Prov. 26:24-25.
  // Psa. 101:5.
  // Prov. 22:1. John 8:49.
  // Psa. 15:4.
  // Phil. 4:8.
  {
    number: 145,
    question: "What are the sins forbidden in the ninth commandment?",
    answer: [
      "The sins forbidden in the ninth commandment are, all prejudicing the truth, and the good name of our neighbours, as well as our own,864 especially in public judicature;865 giving false evidence,866 suborning false witnesses,867 wittingly appearing and pleading for an evil cause, outfacing and overbearing the truth;868 passing unjust sentence,869 calling evil good, and good evil; rewarding the wicked according to the work of the righteous, and the righteous according to the work of the wicked;870 forgery,871 concealing the truth, undue silence in a just cause,872 and holding our peace when iniquity calleth for either a reproof from ourselves,873 or complaint to others;874 speaking the truth unseasonably,875 or maliciously to a wrong end,876 or perverting it to a wrong meaning,877 or in doubtful and equivocal expressions, to the prejudice of truth or justice;878 speaking untruth,879 lying,880 slandering,881 backbiting,882 detracting, tale bearing,883 whispering,884 scoffing,885 reviling,886 rash,887 harsh,888 and partial censuring;889 misconstructing intentions, words, and actions;890 flattering,89] vain-glorious boasting;892 thinking or speaking too highly or too meanly of ourselves or others;893 denying the gifts and graces of God;894 aggravating smaller faults;895 hiding, excusing, or extenuating of sins, when called to a free confession;896 unnecessary discovering of infirmities;897 raising false rumors,898 receiving and countenancing evil reports,899 and stopping our ears against just defense;900 evil suspicion;901 envying or grieving at the deserved credit of any,902 endeavoring or desiring to impair it,903 rejoicing in their disgrace and infamy;904 scornful contempt,905 fond admiration;906 breach of lawful promises;907 neglecting such things as are of good report,908 and practicing, or not avoiding ourselves, or not hindering what we can in others, such things as procure an ill name.909",
    ],
  },

  // 1 Sam. 17:28. 2 Sam. 16:3. 2 Sam. 1:9-10, 15-16.
  // Lev. 19:15. Hab. 1:4.
  // Prov. 19:5. Prov. 6:16, 19.
  // Acts 6:13.
  // Jer. 9:3, 5. Acts 24:2, 5. Psa. 12:3-4. Psa. 52:1-4.
  // Prov. 17:15. 1 Kings 21:9-14.
  // Isa. 5:23.
  // Psa. 119:69. Luke 19:8. Luke 16:5-7.
  // Lev. 5:1. Deut. 13:8. Acts 5:3, 8-9. 2 Tim. 4:6.
  // 1 Kings 1:6. Lev. 19:17.
  // Isa. 59:4.
  // Prov. 29:11.
  // 1 Sam. 22:9-10. Psa. 52:1-5.
  // Psa. 56:5. John 2:19. Matt. 26:60-61.
  // Gen. 3:5. Gen. 26:7, 9.
  // Isa. 59:13.
  // Lev. 19:11. Col. 3:9.
  // Psa. 50:20.
  // Jas. 4:11. Jer. 38:4.
  // Lev. 19:19.
  // Rom. 1:29-30.
  // Gen. 21:9. Gal. 4:29.
  // 1 Cor. 6:10.
  // Matt. 7:1.
  // Acts 28:4.
  // Gen. 38:24. Rom. 2:1.
  // Neh. 6:6-8. Rom. 3:8. Psa. 69:10. 1 Sam. 1:13-15. 2 Sam. 10:3.
  // Psa. 12:2-3.
  // 2 Tim. 3:2.
  // Luke 18:9, 11. Rom. 12:16. 1 Cor. 4:6. Acts 12:22. Exod. 4:10-14.
  // Job 27:5-6.
  // Matt. 7:3-5.
  // Prov. 28:13. Prov. 30:20. Gen. 3:12-13. Jer. 2:35. 2 Kings 5:25. Gen. 4:9.
  // Gen. 9:22. Prov. 25:9-10.
  // Exod. 23:1.
  // Prov. 29:12.
  // Acts 7:56-57. Job 31:13-14.
  // 1 Cor. 13:5. 1 Tim. 6:4.
  // Num. 11:29. Matt. 21:15.
  // Ezra 4:12-13.
  // Jer. 48:27.
  // Psa. 35:15-16, 21. Matt. 27:28-29.
  // Jude 16. Acts 12:22.
  // Rom. 1:31. 2 Tim. 3:3.
  // 1 Sam. 2:24.
  // 2 Sam. 13:12-13. Prov. 5:8-9. Prov. 6:33.
  {
    number: 146,
    question: "Which is the tenth commandment?",
    answer: [
      "The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shall not covet they neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor any thing that is thy neighbor's.910",
    ],
  },

  // Exod. 20:17.
  {
    number: 147,
    question: "What are the duties required in the tenth commandment?",
    answer: [
      "The duties required in the tenth commandment are, such a full contentment with our own condition,911 and such a charitable frame of the whole soul toward our neighbour, as that all our inward motions and affections touching him, tend unto, and further all that good which is his.912",
    ],
  },

  // Heb. 13:5. 1 Tim. 6:6.
  // Job 31:29. Rom. 12:15. Psa. 122:7-9. 1 Tim. 1:5. Esther 10:3. 1 Cor. 13:4-7.
  {
    number: 148,
    question: "What are the sins forbidden in the tenth commandment?",
    answer: [
      "The sins forbidden in the tenth commandment are, discontentment with our own estate;913 envying914 and grieving at the good of our neighbor,915 together with all inordinate motions and affections to anything that is his.916",
    ],
  },

  // 1 Kings 21:4. Esther 5:13. 1 Cor. 10:10.
  // Gal. 5:26 Jas. 3:14, 16.
  // Psa. 112:9-10. Neh. 2:10.
  // Rom. 7:7-8. Rom. 13:9. Col. 3:5. Deut. 5:21
  {
    number: 149,
    question: "Is any man able perfectly to keep the commandments of God?",
    answer: [
      "No man is able, either of himself,917 or by any grace received in this life, perfectly to keep the commandments of God;918 but doth daily break them in thought,919 word, and deed.920",
    ],
  },

  // Jas. 3:2. John 15:5. Rom. 8:3.
  // Eccl. 7:20. 1 John 1:8, 10. Gal. 5:17. Rom. 7:18-19.
  // Gen. 6:5. Gen. 8:21.
  // Rom. 3:9-19. Jas. 3:2-13.
  {
    number: 150,
    question:
      "Are all transgressions of the law of God equally heinous in themselves, and in the sight of God?",
    answer: [
      "All transgressions of the law of God are not equally heinous; but some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.921",
    ],
  },

  // John 19:11. Ezek. 8:6, 13, 15. 1 John 5:16. Psa. 78:17, 32, 56.
  {
    number: 151,
    question:
      "What are those aggravations that make some sins more heinous than others?",
    answer: [
      `Sins receive their aggravations,
  1. From the persons offending922 if they be of riper age,923 greater experience or grace,924 eminent for profession,925 gifts,926 place,927 office,928 guides to others,929 and whose example is likely to be followed by others.930

  2. From the parties offended:931 if immediately against God,932 his attributes,933 and worship;934 against Christ, and his grace;935 the Holy Spirit,936 his witness,937 and workings938 against superiors, men of eminency,939 and such as we stand especially related and engaged unto;940 against any of the saints,941 particularly weak brethren,942 the souls of them, or any other,943 and the common good of all or many.944

  3. From the nature and quality of the offense:945 if it be against the express letter of the law,946 break many commandments, contain in it many sins:947 if not only conceived in the heart, but breaks forth in words and actions,948 scandalize others,949 and admit of no reparation:950 if against means,951 mercies,952 judgments,953 light of nature,954 conviction of conscience,955 public or private admonition,956 censures of the church,957 civil punishments;958 and our prayers, purposes, promises,959 vows,960 covenants,961 and engagements to God or men:962 if done deliberately,963 wilfully,964 presumptuously,965 impudently,966 boastingly,967 maliciously,968 frequently,969 obstinately,970 with delight,971 continuance,972 or relapsing after repentance.973

  4. From circumstances of time974 and place:975 if on the Lord—s day,976 or other times of divine worship;977 or immediately before978 or after these,979 or other helps to prevent or remedy such miscarriages;980 if in public, or in the presence of others, who are thereby likely to be provoked or defiled.981
  `,
    ],
  },

  // Jer. 2:8.
  // Job 32:7, 9.
  // 1 Kings 11:4, 9.
  // 2 Sam. 12:14.
  // Jas. 4:17. Luke 12:47-48.
  // Jer. 5:4-5.
  // 2 Sam. 12:7-9. Ezek. 8:11-12.
  // Rom. 2:17-24.
  // Gal. 2:11-14.
  // Matt. 21:38-39.
  // 1 Sam. 2:25. Acts 5:4. Psa. 5:4.
  // Rom. 2:4.
  // Mal. 1:8. Mal. 1:14.
  // Heb. 2:2-3. Heb. 7:25.
  // Heb. 10:29. Matt. 12:31-32.
  // Eph. 4:30.
  // Heb. 6:4-6.
  // Jude 8. Num. 12:8-9. Isa. 3:5.
  // Prov. 30:17. 2 Cor. 12:15. Psa. 55:12-15.
  // Zeph. 2:8, 10-11. Matt. 18:6. 1 Cor. 6:8. Rev. 17:6.
  // 1 Cor. 8:11-12. Rom. 14:13, 15, 21.
  // Ezek. 13:19. 1 Cor. 8:12. Rev. 18:12-13. Matt. 23:15.
  // 1 Thess. 2:15-16. Josh. 22:20.
  // Prov. 6:30-33.
  // Ezra 9:10-12. 1 Kings 11:9-10.
  // Col. 3:5. 1 Tim. 6:10. Prov. 5:8-12. Prov. 6:32-33. Josh. 7:21.
  // Jas. 1:14-15. Matt. 5:22. Mic. 2:1.
  // Matt. 18:7. Rom. 2:23-24.
  // Deut. 22:22, 28-29. Prov. 6:32-35.
  // Matt. 11:21-24. John 15:22.
  // Isa. 1:3. Deut. 32:6.
  // Amos 4:8-11. Jer. 5:3.
  // Rom. 1:26-27.
  // Rom. 1:32. Dan. 5:22. Tit. 3:10-11.
  // Prov. 29:1.
  // Tit. 3:10. Matt. 18:17.
  // Prov. 27:22. Prov. 23:35.
  // Psa. 78:34-37. Jer. 2:20. Jer. 13:5-6, 20-21
  // Eccl. 5:4-6. Prov. 20:25.
  // Lev. 26:25.
  // Prov. 2:17. Ezek. 7:18-19.
  // Psa. 36:4.
  // Jer. 6:16.
  // Num. 15:30. Exod. 21:14.
  // Jer. 3:3. Prov. 7:13.
  // Psa. 52:1.
  // 3 John 10.
  // Num. 14:22.
  // Zech. 7:11-12.
  // Prov. 2:14.
  // Isa. 57:17.
  // Jer. 34:8-11. 2 Pet. 2:20-22.
  // 2 Kings 5:26.
  // Jer. 7:10. Isa. 26:10.
  // Ezek. 23:37-39.
  // Isa. 58:3-5. Num. 25:6-7.
  // 1 Cor. 11:20-21.
  // Jer. 7:8-10. Prov. 7:14-15. John 13:27, 30.
  // Ezra 9:13-14.
  // 2 Sam. 16:22. 1 Sam. 2:22-24.
  {
    number: 152,
    question: "What doth every sin deserve at the hands of God?",
    answer: [
      "Every sin, even the least, being against the sovereignty,982 goodness,983 and holiness of God,984 and against his righteous law,985 deserveth his wrath and curse,986 both in this life,987 and that which is to come;988 and cannot be expiated but by the blood of Christ.989",
    ],
  },

  // Jas. 2:10-11.
  // Exod. 20:1-2.
  // Hab.1:13. Lev. 10:3. Lev. 11:44-45.
  // 1 John 3:4. Rom. 7:12.
  // Eph. 5:6. Gal. 3:10.
  // Lam. 3:39. Deut. 28:15-18.
  // Matt. 25:41.
  // Heb. 9:22. 1 Pet. 1:18-19.
  {
    number: 153,
    question:
      "What doth God require of us, that we may escape his wrath and curse due to us by reason of the transgression of the law?",
    answer: [
      "That we may escape the wrath and curse of God due to us by reason of the transgression of the law, he requireth of us repentance toward God, and faith toward our Lord Jesus Christ,990 and the diligent use of the outward means whereby Christ communicates to us the benefits of his mediation.991",
    ],
  },

  // Acts 20:21. Matt. 3:7-8. Luke 13:3, 5. Acts 16:30-31. John 3:16, 18.
  // Prov. 2:1-5. Prov. 8:33-36.
  {
    number: 154,
    question:
      "What are the outward means whereby Christ communicates to us the benefits of his mediation?",
    answer: [
      "The outward and ordinary means whereby Christ communicates to his church the benefits of his mediation, are all his ordinances; especially the Word, sacraments, and prayer; all which are made effectual to the elect for their salvation.992",
    ],
  },

  // Matt. 28:19-20. Acts 2:42, 46-47.
  {
    number: 155,
    question: "How is the Word made effectual to salvation?",
    answer: [
      "The Spirit of God maketh the reading, but especially the preaching of the Word, an effectual means of enlightening,993 convincing, and humbling sinners;994 of driving them out of themselves, and drawing them unto Christ;995 of conforming them to his image,996 and subduing them to his will;997 of strengthening them against temptations and corruptions;998 of building them up in grace,999 and establishing their hearts in holiness and comfort through faith unto salvation.1000",
    ],
  },

  // Neh. 8:8. Acts 26:18. Psa. 19:8.
  // 1 Cor. 14:24-25. 2 Chron. 34:18-19 26-28.
  // Acts 2:37, 41. Acts 8:27-30, 35-38.
  // 2 Cor. 3:18.
  // 2 Cor. 10:4-6. Rom. 6:17.
  // Matt. 4:4, 7, 10. Eph. 6:16-17. Psa. 19:11. 1 Cor. 10:11.
  // Acts 20:32. 2 Tim. 3:15-17.
  // Rom. 16:25. 1 Thess. 3:2, 10-11, 13. Rom. 15:4. Rom. 10:13-17. Rom. 1:16.
  {
    number: 156,
    question: "Is the Word of God to be read by all?",
    answer: [
      "Although all are not to be permitted to read the Word publicly to the congregation,1001 yet all sorts of people are bound to read it apart by themselves,1002 and with their families:1003 to which end, the holy scriptures are to be translated out of the original into vulgar languages.1004",
    ],
  },

  // Deut. 31:9, 11-13. Neh. 8:2-3. Neh. 9:3-5.
  // Deut. 17:19. Rev. 1:3. John 5:39. Isa. 34:16.
  // Deut. 6:6-9. Gen. 18:17. Psa. 78:5-7.
  // 1 Cor. 14:6, 9, 11-12, 15-16, 24, 27-28.
  {
    number: 157,
    question: "How is the Word of God to be read?",
    answer: [
      "The holy Scriptures are to be read with an high and reverent esteem of them;1005 with a firm persuasion that they are the very Word of God,1006 and that he only can enable us to understand them;1007 with desire to know, believe, and obey the will of God revealed in them;1008 with diligence,1009 and attention to the matter and scope of them;1010 with meditation,1011 application,1012 self-denial,1013 and prayer.1014",
    ],
  },

  // Psa. 19:10. Neh. 8:3-6, 10. Exod. 24:7. 2 Chron. 34:27. Isa. 66:2.
  // 2 Pet. 1:19-21.
  // Luke 24:45. 2 Cor. 3:13-16.
  // Deut. 17:10, 20.
  // Acts 17:11.
  // Acts 8:30, 34. Luke 10:26-28.
  // Psa. 1:2 Psa. 119:97.
  // 2 Chron. 34:21.
  // Prov. 3:5.
  // Prov. 2:1-6. Psa. 119:18. Neh. 7:6, 8.
  {
    number: 158,
    question: "By whom is the Word of God to be preached?",
    answer: [
      "The Word of God is to be preached only by such as are sufficiently gifted,1015 and also duly approved and called to that office.1016",
    ],
  },

  // 1 Tim. 3:2, 6. Eph. 4:8-11. Hos. 4:6. Mal. 2:7. 2 Cor. 3:6.
  // Jer. 14:15. Rom. 10:15. Heb. 5:4. 1 Cor. 12:28-29. 1 Tim.y 3:10. 1 Tim. 4:14. 1 Tim. 5:22.
  {
    number: 159,
    question:
      "How is the Word of God to be preached by those that are called thereunto?",
    answer: [
      "They that are called to labour in the ministry of the Word, are to preach sound doctrine,1017 diligently,1018 in season and out of season;1019 plainly,1020 not in the enticing words of man's wisdom, but in demonstration of the Spirit, and of power;1021 faithfully,1022 making known the whole counsel of God;1023 wisely,1024 applying themselves to the necessities and capacities of the hearers;1025 zealously,1026 with fervent love to God1027 and the souls of his people;1028 sincerely,1029 aiming at his glory,1030 and their conversion,1031 edification,1032 and salvation.1033",
    ],
  },

  // Tit. 2:1, 8.
  // Acts 18:25.
  // 2 Tim. 4:2.
  // 1 Cor. 14:19.
  // 1 Cor. 2:4.
  // Jer. 23:28. 1 Cor. 4:1-2.
  // Acts 20:27.
  // Col. 1:28. 2 Tim. 2:15.
  // 1 Cor. 3:2. Heb. 5:12-14. Luke 12:42.
  // Acts 18:25.
  // 2 Cor. 5:13-14. Phil. 1:15-17.
  // Col. 4:12. 2 Cor. 12:15.
  // 2 Cor. 2:17. 2 Cor. 4:2.
  // 1 Thess. 2:4-6. John 7:18.
  // 1 Cor. 9:19-22.
  // 2 Cor. 12:19. Eph. 4:12.
  // 1 Tim. 4:16. Acts 26:16-18.
  {
    number: 160,
    question: "What is required of those that hear the Word preached?",
    answer: [
      "It is required of those that hear the Word preached, that they attend upon it with diligence,1034 preparation,1035 and prayer;1036 examine what they hear by the Scriptures;1037 receive the truth with faith,1038 love,1039 meekness,1040 and readiness of mind,1041 as the Word of God;1042 meditate,1043 and confer of it;1044 hide it in their hearts,1045 and bring forth the fruit of it in their lives.1046",
    ],
  },

  // Prov. 8:34.
  // 1 Pet. 2:1-2. Luke 8:18.
  // Psa. 119:18. Eph. 6:18-19.
  // Acts 17:11.
  // Heb. 4:2.
  // 2 Thess. 2:10.
  // Jas. 1:21.
  // Acts 17:11.
  // 1 Thess. 2:13.
  // Luke 9:44. Heb. 2:1.
  // Luke 24:14. Deut. 6:6-7.
  // Prov. 2:1. Psa. 119:11.
  // Luke 8:15. Jas. 1:25.
  {
    number: 161,
    question: "How do the sacraments become effectual means of salvation?",
    answer: [
      "The sacraments become effectual means of salvation, not by any power in themselves, or any virtue derived from the piety or intention of him by whom they are administered, but only by the working of the Holy Ghost, and the blessing of Christ, by whom they are instituted.1047",
    ],
  },

  // 1 Pet. 3:21. Acts 8:13, 23. 1 Cor. 3:6-7. 1 Cor. 12:13.
  {
    number: 162,
    question: "What is a sacrament?",
    answer: [
      "A sacrament is an holy ordinance instituted by Christ in his church,1048 to signify, seal, and exhibit1049 unto those that are within the covenant of grace,1050 the benefits of his mediation;1051 to strengthen and increase their faith, and all other graces;1052 to oblige them to obedience;1053 to testify and cherish their love and communion one with another;1054 and to distinguish them from those that are without.1055",
    ],
  },

  // Gen. 17:7, 10. Exod. 12. Matt. 28:19. Matt. 26:26-28.
  // Rom. 4:11. 1 Cor. 11:24-25.
  // Rom. 15:8. Exod. 12:48.
  // Acts 2:38. 1 Cor. 10:16.
  // Rom. 4:11. Gal. 3:27.
  // Rom. 6:3-4. 1 Cor. 10:21.
  // Eph. 4:2-5. 1 Cor. 12:13.
  // Eph. 2:11-12. Gen. 34:14.
  {
    number: 163,
    question: "What are the parts of a sacrament?",
    answer: [
      "The parts of the sacrament are two; the one an outward and sensible sign, used according to Christ's own appointment; the other an inward and spiritual grace thereby signified.1056",
    ],
  },

  // Matt. 3:11. 1 Pet. 3:21. Rom. 2:28-29.
  {
    number: 164,
    question:
      "How many sacraments hath Christ instituted in his church under the New Testament?",
    answer: [
      "Under the New Testament Christ hath instituted in his church only two sacraments, baptism and the Lord's supper.1057",
    ],
  },

  // Matt. 28:19. 1 Cor. 11:20, 23. Matt. 26:26-28.
  {
    number: 165,
    question: "What is baptism?",
    answer: [
      "Baptism is a sacrament of the New Testament, wherein Christ hath ordained the washing with water in the name of the Father, and of the Son, and of the Holy Ghost,1058 to be a sign and seal of ingrafting into himself,1059 of remission of sins by his blood,1060 and regeneration by his Spirit;1061 of adoption,1062 and resurrection unto everlasting life;1063 and whereby the parties baptized are solemnly admitted into the visible church,1064 and enter into an open and professed engagement to be wholly and only the Lord's.1065",
    ],
  },

  // Matt. 28:19.
  // Gal. 3:27.
  // Mark 1:4. Rev. 1:5.
  // Tit. 3:5. Eph. 5:26.
  // Gal. 3:26-27.
  // 1 Cor. 15:29. Rom. 6:5.
  // 1 Cor. 12:13.
  // Rom.6:4.
  {
    number: 166,
    question: "Unto whom is baptism to be administered?",
    answer: [
      "Baptism is not to be administered to any that are out of the visible church, and so strangers from the covenant of promise, till they profess their faith in Christ, and obedience to him,1066 but infants descending from parents, either both, or but one of them, professing faith in Christ, and obedience to him, are in that respect within the covenant, and to be baptized.1067",
    ],
  },

  // Acts 8:36-37. Acts 2:38.
  // Gen. 17:7, 9. Gal. 3:9, 14. Col. 2:11-12. Acts 2:38-39. Rom. 4:11-12. 1 Cor. 7:14. Matt. 28:19. Luke 18:15-16. Rom. 11:16.
  {
    number: 167,
    question: "How is our baptism to be improved by us?",
    answer: [
      "The needful but much neglected duty of improving our baptism, is to be performed by us all our life long, especially in the time of temptation, and when we are present at the administration of it to others;1068 by serious and thankful consideration of the nature of it, and of the ends for which Christ instituted it, the privileges and benefits conferred and sealed thereby, and our solemn vow made therein;1069 by being humbled for our sinful defilement, our falling short of, and walking contrary to, the grace of baptism, and our engagements;1070 by growing up to assurance of pardon of sin, and of all other blessings sealed to us in that sacrament;1071 by drawing strength from the death and resurrection of Christ, into whom we are baptized, for the mortifying of sin, and quickening of grace;1072 and by endeavoring to live by faith,1073 to have our conversation in holiness and righteousness,1074 as those that have therein given up their names to Christ;1075 and to walk in brotherly love, as being baptized by the same Spirit into one body.1076",
    ],
  },

  // Col. 2:11-12. Rom. 6:4, 6, 11.
  // Rom. 6:3-5.
  // 1 Cor. 1:11-13. Rom. 6:2-3.
  // Rom. 4:11-12. 1 Pet. 3:21.
  // Rom. 6:3-5.
  // Gal. 3:26-27.
  // Rom. 6:22.
  // Acts 2:38.
  // 1 Cor. 12:13, 25.
  {
    number: 168,
    question: "What is the Lord�s supper?",
    answer: [
      "The Lord's supper is a sacrament of the New Testament,1077 wherein, by giving and receiving bread and wine according to the appointment of Jesus Christ, his death is showed forth; and they that worthily communicate feed upon his body and blood, to their spiritual nourishment and growth in grace;1078 have their union and communion with him confirmed;1079 testify and renew their thankfulness,1080 and engagement to God,1081 and their mutual love and fellowship each with the other, as members of the same mystical body.1082",
    ],
  },

  // Luke 22:20.
  // Matt. 26:26-28. 1 Cor. 11:23-26. F
  // 1 Cor. 10:16.
  // 1 Cor. 11:24.
  // 1 Cor. 10:14-16, 21.
  // 1 Cor. 10:17.
  {
    number: 169,
    question:
      "How hath Christ appointed bread and wine to be given and received in the sacrament of the Lord's supper?",
    answer: [
      "Christ hath appointed the ministers of his Word, in the administration of this sacrament of the Lord's supper, to set apart the bread and wine from common use, by the word of institution, thanksgiving, and prayer; to take and break the bread, and to give both the bread and the wine to the communicants: who are, by the same appointment, to take and eat the bread, and to drink the wine, in thankful remembrance that the body of Christ was broken and given, and his blood shed, for them.1083",
    ],
  },

  // 1 Cor. 11:23-24. Matt. 26:26-28. Mark 14:22-24. Luke 22:19-20.
  {
    number: 170,
    question:
      "How do they that worthily communicate in the Lord's supper feed upon the body and blood of Christ therein?",
    answer: [
      "As the body and blood of Christ are not corporally or carnally present in, with, or under the bread and wine in the Lord's supper,1084 and yet are spiritually present to the faith of the receiver, no less truly and really than the elements themselves are to their outward senses;1085 so they that worthily communicate in the sacrament of the Lord's supper, do therein feed upon the body and blood of Christ, not after a corporal and carnal, but in a spiritual manner; yet truly and really,1086 while by faith they receive and apply unto themselves Christ crucified, and all the benefits of his death.1087",
    ],
  },

  // Acts 3:21.
  // Matt. 26:26, 28.
  // 1 Cor. 11:24-29.
  // 1 Cor. 10:16.
  {
    number: 171,
    question:
      "How are they that receive the sacrament of the Lord�s supper to prepare themselves before they come unto it?",
    answer: [
      "They that receive the sacrament of the Lord's supper are, before they come, to prepare themselves thereunto, by examining themselves1088 of their being in Christ,1089 of their sins and wants;1090 of the truth and measure of their knowledge,1091 faith,1092 repentance;1093 love to God and the brethren,1094 charity to all men,1095 forgiving those that have done them wrong;1096 of their desires after Christ,1097 and of their new obedience;1098 and by renewing the exercise of these graces,1099 by serious meditation,1100 and fervent prayer.1101^",
    ],
  },

  // 1 Cor. 11:28.
  // 2 Cor. 13:5.
  // 1 Cor. 5:7. Exod. 12:15.
  // 1 Cor. 11:29.
  // 1 Cor. 13:5. Matt. 26:28.
  // Zech. 12:10. 1 Cor. 11:31.
  // 1 Cor. 10:16-17. Acts 2:46-47.
  // 1 Cor. 5:8. 1 Cor. 11:18, 20.
  // Matt. 5:23-24.
  // Isa. 55:1. John 7:37.
  // 1 Cor. 5:7-8.
  // 1 Cor. 11:25-26, 28. Heb. 10:21-22. Heb. 10:24. Psa. 26:6.
  // 1 Cor. 11:24-25.
  // 2 Chron. 30:18-19. Matt. 26:26.
  {
    number: 172,
    question:
      "May one who doubteth of his being in Christ, or of his due preparation, come to the Lord's supper?",
    answer: [
      "One who doubteth of his being in Christ, or of his due preparation to the sacrament of the Lord's supper, may have true interest in Christ, though he be not yet assured thereof;1102 and in God's account hath it, if he be duly affected with the apprehension of the want of it,1103 and unfeignedly desires to be found in Christ,1104 and to depart from iniquity:1105 in which case (because promises are made, and this sacrament is appointed, for the relief even of weak and doubting Christians1106) he is to bewail his unbelief,1107 and labor to have his doubts resolved;1108 and, so doing, he may and ought to come to the Lord's supper, that he may be further strengthened.1109",
    ],
  },

  // Isa. 50:10. 1 John 5:13. Psa. 88. Psa. 77:1-4, 7-10. Jonah 2:4.
  // Isa. 54:7-10. Matt. 5:3-4. Psa. 31:22. Psa. 73:13, 22-23.
  // Phil. 3:8-9. Psa. 10:17. Psa. 42:1-2, 5, 11.
  // 2 Tim. 2:19. Isa. 50:10. Psa. 66:18-20.
  // Isa. 40:11, 29, 31. Matt. 11:28. Matt. 12:20. Matt. 26:28.
  // Mark 9:24.
  // Acts 2:37. Acts 16:30.
  // Rom. 4:11. 1 Cor. 11:28.
  {
    number: 173,
    question:
      "May any who profess the faith, and desire to come to the Lord�s supper, be kept from it?",
    answer: [
      "Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith, and desire to come to the Lord's supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church,1110 until they receive instruction, and manifest their reformation.1111",
    ],
  },

  // 1 Cor. 11:27-34. Matt. 7:6. Jude 23. 1 Tim. 5:22.
  // 2 Cor. 2:7.
  {
    number: 174,
    question:
      "What is required of them that receive the sacrament of the Lord's supper in the time of the administration of it?",
    answer: [
      "It is required of them that receive the sacrament of the Lord's supper, that, during the time of the administration of it, with all holy reverence and attention they wait upon God in that ordinance,1112 diligently observe the sacramental elements and actions,1113 heedfully discern the Lord's body,1114 and affectionately meditate on his death and sufferings,1115 and thereby stir up themselves to a vigorous exercise of their graces;1116 in judging themselves,1117 and sorrowing for sin;1118 in earnest hungering and thirsting after Christ,1119 feeding on him by faith,1120 receiving of his fullness,1121 trusting in his merits,1122 rejoicing in his love,1123 giving thanks for his grace;1124 in renewing of their covenant with God,1125 and love to all the saints.1126",
    ],
  },

  // Lev. 10:3. Heb. 12:28. Psa. 5:7. 1 Cor. 11:17, 26-27.
  // Exod. 24:8. Matt. 26:28.
  // 1 Cor. 11:29.
  // Luke 22:19.
  // 1 Cor. 11:26. 1 Cor. 10:3-5, 11, 14.
  // 1 Cor. 11:31.
  // Zech. 12:10.
  // Rev. 22:17.
  // John 6:35.
  // John 1:16.
  // Phil. 1:16.
  // Psa. 58:4-5. 2 Chron. 30:21.
  // Psa. 22:26.
  // Jer. 50:5. Psa. 50:5.
  // Acts 2:42.
  {
    number: 175,
    question:
      "What is the duty of Christians, after they have received the sacrament of the Lord's supper?",
    answer: [
      "The duty of Christians, after they have received the sacrament of the Lord's supper, is seriously to consider how they have behaved themselves therein, and with what success;1127 if they find quickening and comfort, to bless God for it,1128 beg the continuance of it,1129 watch against relapses,1130 fulfill their vows,1131 and encourage themselves to a frequent attendance on that ordinance:1132 but if they find no present benefit, more exactly to review their preparation to, and carriage at, the sacrament;1133 in both which, if they can approve themselves to God and their own consciences, they are to wait for the fruit of it in due time:1134 but, if they see they have failed in either, they are to be humbled,1135 and to attend upon it afterwards with more care and diligence.1136",
    ],
  },

  // Psa. 28:7. Psa. 85:8. 1 Cor. 11:7, 30-31.
  // 2 Chron. 30:21-23, 25-26. Acts 2:42, 46-47.
  // Psa. 36:10. Song 3:4. 1 Chron. 29:18.
  // 1 Cor. 10:3-5, 12.
  // Psa. 50:14.
  // 1 Cor. 11:25-26. Acts 2:42, 46.
  // Song 5:1-6.
  // Psa. 123:1-2. Psa. 42:5, 8. Psa. 43:3-5.
  // 2 Chron. 30:18-19.
  // 2 Cor. 7:11. 1 Chron. 15:12-14.
  {
    number: 176,
    question:
      "Wherein do the sacraments of baptism and the Lord's supper agree?",
    answer: [
      "The sacraments of baptism and the Lord—s supper agree, in that the author of both is God;1137 the spiritual part of both is Christ and his benefits;1138 both are seals of the same covenant,1139 are to be dispensed by ministers of the gospel, and by none other;1140 and to be continued in the church of Christ until his second coming.1141",
    ],
  },

  // Matt. 28:19. 1 Cor. 11:23.
  // Rom. 6:3-4. 1 Cor. 10:16.
  // Rom. 4:11. Col. 2:12. Matt. 26:27-28.
  // John 1:33. Matt. 28:19. 1 Cor. 11:23. 1 Cor. 4:1.
  // Matt. 28:19-20. 1 Cor. 11:26.
  {
    number: 177,
    question:
      "Wherein do the sacraments of baptism and the Lord's supper differ?",
    answer: [
      "The sacraments of baptism and the Lord's supper differ, in that baptism is to be administered but once, with water, to be a sign and seal of our regeneration and ingrafting into Christ,1142 and that even to infants;1143 whereas the Lord's supper is to be administered often, in the elements of bread and wine, to represent and exhibit Christ as spiritual nourishment to the soul,1144 and to confirm our continuance and growth in him,1145 and that only to such as are of years and ability to examine themselves.1146",
    ],
  },

  // Matt. 3:11. Tit. 3:5. Gal. 3:27.
  // Gen. 17:7, 9. Acts 2:38-39. 1 Cor. 7:14.
  // 1 Cor. 11:23-26.
  // 1 Cor. 10:16.
  // 1 Cor. 11:28-29.
  {
    number: 178,
    question: "What is prayer?",
    answer: [
      "Prayer is an offering up of our desires unto God,1147 in the name of Christ,1148 by the help of his Spirit;1149 with confession of our sins,1150 and thankful acknowledgment of his mercies.1151",
    ],
  },

  // Psa. 62:8.
  // John 16:23.
  // Rom. 8:26.
  // Psa. 32:5-6. Dan. 9:4.
  // Phil. 4:6.
  {
    number: 179,
    question: "Are we to pray unto God only?",
    answer: [
      "God only being able to search the hearts,1152 hear the requests,1153 pardon the sins,1154 and fulfill the desires of all;1155 and only to be believed in,1156 and worshipped with religious worship;1157 prayer, which is a special part thereof,1158 is to be made by all to him alone,1159 and to none other.1160",
    ],
  },

  // 1 Kings 8:39. Acts 1:24. Rom. 8:27.
  // Psa. 65:2.
  // Micah 7:18.
  // Psa. 145:18.
  // Rom. 10:14.
  // Matt. 4:10.
  // 1 Cor. 1:2.
  // Psa. 50:15.
  // Rom. 10:14.
  {
    number: 180,
    question: "What is it to pray in the name of Christ?",
    answer: [
      "To pray in the name of Christ is, in obedience to his command, and in confidence on his promises, to ask mercy for his sake;1161 not by bare mentioning of his name,1162 but by drawing our encouragement to pray, and our boldness, strength, and hope of acceptance in prayer, from Christ and his mediation.1163",
    ],
  },

  // John 14:13-14. John 16:24. Dan. 9:17.
  // Matt. 7:21.
  // Heb. 4:14-16. 1 John 5:13-15.
  {
    number: 181,
    question: "Why are we to pray in the name of Christ?",
    answer: [
      "The sinfulness of man, and his distance from God by reason thereof, being so great, as that we can have no access into his presence without a mediator;1164 and there being none in heaven or earth appointed to, or fit for, that glorious work but Christ alone,1165 we are to pray in no other name but his only.1166",
    ],
  },

  // John 14:6. Isa. 59:2. Eph. 3:12.
  // John 6:27. Heb. 7:25-27. 1 Tim. 2:5.
  // Col. 3:17. Heb. 13:15.
  {
    number: 182,
    question: "How doth the Spirit help us to pray?",
    answer: [
      "We not knowing what to pray for as we ought, the Spirit helpeth our infirmities, by enabling us to understand both for whom, and what, and how prayer is to be made; and by working and quickening in our hearts (although not in all persons, nor at all times, in the same measure) those apprehensions, affections, and graces which are requisite for the right performance of that duty.1167",
    ],
  },

  // Rom. 8:26-27. Psa. 10:17. Zech. 12:10.
  {
    number: 183,
    question: "For whom are we to pray?",
    answer: [
      "We are to pray for the whole church of Christ upon earth;1168 for magistrates,1169 and ministers;1170 for ourselves,1171 our brethren,1172 yea, our enemies;1173 and for all sorts of men living,1174 or that shall live hereafter;1175 but not for the dead,1176 nor for those that are known to have sinned the sin unto death.1177",
    ],
  },

  // Eph. 6:18. Psa. 28:9.
  // 1 Tim. 2:1-2.
  // Col. 4:3.
  // Gen. 32:11.
  // Jas. 5:16.
  // Matt. 5:44.
  // 1 Tim. 2:1-2.
  // John 17:20. 2 Sam. 7:29.
  // 2 Sam. 12:21-23.
  // 1 John 5:16.
  {
    number: 184,
    question: "For what things are we to pray?",
    answer: [
      "We are to pray for all things tending to the glory of God,1178 the welfare of the church,1179 our own1180 or others, good;1181 but not for anything that is unlawful.1182",
    ],
  },

  // Matt. 6:9.
  // Psa. 51:18. Psa. 122:6.
  // Matt. 7:11.
  // Psa. 125:4.
  // 1 John 5:14.
  {
    number: 185,
    question: "How are we to pray?",
    answer: [
      "We are to pray with an awful apprehension of the majesty of God,1183 and deep sense of our own unworthiness,1184 necessities,1185 and sins;1186 with penitent,1187 thankful,1188 and enlarged hearts;1189 with understanding,1190 faith,1191 sincerity,1192 fervency,1193 love,1194 and perseverance,1195 waiting upon him,1196 with humble submission to his will.1197",
    ],
  },

  // Eccl. 5:1.
  // Gen. 18:27. Gen. 32:10.
  // Luke 15:17-19.
  // Luke 18:13-14.
  // Psa. 51:17.
  // Phil. 4:6.
  // 1 Sam. 1:15. 1 Sam. 2:1.
  // 1 Cor. 14:15.
  // Mark 11:24. Jas. 1:6.
  // Psa. 145:18. Psa. 17:1.
  // Jas. 5:16.
  // 1 Tim. 2:8.
  // Eph. 6:18.
  // Micah 7:7.
  // Matt. 26:39.
  {
    number: 186,
    question:
      "What rule hath God given for our direction in the duty of prayer?",
    answer: [
      "The whole Word of God is of use to direct us in the duty of prayer;1198 but the special rule of direction is that form of prayer which our Savior Christ taught his disciples, commonly called The Lord's Prayer.1199",
    ],
  },

  // 1 John 5:14.
  // Matt. 6:9-13. Luke 11:2-4.
  {
    number: 187,
    question: "How is the Lord's Prayer to be used?",
    answer: [
      "The Lord's Prayer is not only for direction, as a pattern, according to which we are to make other prayers; but may also be used as a prayer, so that it be done with understanding, faith, reverence, and other graces necessary to the right performance of the duty of prayer.1200",
    ],
  },

  // Matt. 6:9. Luke 11:2.
  {
    number: 188,
    question: "Of how many parts doth the Lord's Prayer consist?",
    answer: [
      "The Lord's Prayer consists of three parts; a preface, petitions, and a conclusion.",
    ],
  },

  {
    number: 189,
    question: "What doth the preface of the Lord's Prayer teach us?",
    answer: [
      "The preface of the Lord's Prayer (contained in these words, Our Father which art in heaven,1201 teacheth us, when we pray, to draw near to God with confidence of his fatherly goodness, and our interest therein;1202 with reverence, and all other childlike dispositions,1203 heavenly affections,1204 and due apprehensions of his sovereign power, majesty, and gracious condescension:1205 as also, to pray with and for others.1206",
    ],
  },

  // Matt. 6:9.
  // Luke 11:13. Rom. 8:15.
  // Isa. 64:9.
  // Psa. 123:1. Lam. 3:41.
  // Isa. 63:15-16. Neh. 1:4-6.
  // Acts 12:5.
  {
    number: 190,
    question: "What do we pray for in the first petition?",
    answer: [
      "In the first petition, (which is, Hallowed by thy name,1207) acknowledging the utter inability and indisposition that is in ourselves and all men to honor God aright,1208 we pray, that God would by his grace enable and incline us and others to know, to acknowledge, and highly to esteem him,1209 his titles,1210 attributes,1211 ordinances, Word,1212 works, and whatsoever he is pleased to make himself known by;1213 and to glorify him in thought, word,1214 and deed:1215 that he would prevent and remove atheism,1216 ignorance,1217 idolatry,1218 profaneness,1219 and whatsoever is dishonorable to him;1220 and, by his over-ruling providence, direct and dispose of all things to his own glory.1221",
    ],
  },

  // Matt. 6:9.
  // 2 Cor. 3:5. Psa. 51:15.
  // Psa. 67:2-3.
  // Psa. 83:18.
  // Psa. 86:10-13, 15.
  // 2 Thess. 3:1. Psa. 147:19-20. Psa. 138:1-3. 2 Cor. 2:14-15.
  // Psa. 145.
  // Psa. 103:1. Psa. 19:14.
  // Phil. 1:9, 11.
  // Psa. 67:1-4.
  // Eph. 1:17-18.
  // Psa. 97:7.
  // Psa. 74:18, 22-23.
  // 2 Kings 19:15-16.
  // 2 Chron. 20:6, 10-12. Psa. 83. Psa. 140:4, 8.
  {
    number: 191,
    question: "What do we pray for in the second petition?",
    answer: [
      "In the second petition, (which is, Thy kingdom come,1222) acknowledging ourselves and all mankind to be by nature under the dominion of sin and Satan,1223 we pray, that the kingdom of sin and Satan may be destroyed,1224 the gospel propagated throughout the world,1225 the Jews called,1226 the fullness of the Gentiles brought in;1227 the church furnished with all gospel-officers and ordinances,1228 purged from corruption,1229 countenanced and maintained by the civil magistrate:1230 that the ordinances of Christ may be purely dispensed, and made effectual to the converting of those that are yet in their sins, and the confirming, comforting, and building up of those that are already converted:1231 that Christ would rule in our hearts here,1232 and hasten the time of his second coming, and our reigning with him forever:1233 and that he would be pleased so to exercise the kingdom of his power in all the world, as may best conduce to these ends.1234",
    ],
  },

  // Matt. 6:10.
  // Eph. 2:2-3.
  // Psa. 68:1. Rev. 12:10-11.
  // 2 Thess. 3:1.
  // Rom. 10:1.
  // John 17:9, 20. Rom. 11:25-26. Psa. 67.
  // Matt. 9:38. 2 Thess. 3:1.
  // Mal. 1:11. Zeph. 3:9.
  // 1 Tim. 2:1-2.
  // Acts 4:29-30. Eph. 6:18-20. Rom. 15:29-30, 32. 2 Thess. 1:11. 2 Thess. 2:16-17.
  // Eph.3:14-20.
  // Rev. 22:20.
  // Isa. 64:1-2. Rev. 4:8-11.
  {
    number: 192,
    question: "What do we pray for in the third petition?",
    answer: [
      "In the third petition, (which is, Thy will be done in earth as it is in heaven,1235) acknowledging, that by nature we and all men are not only utterly unable and unwilling to know and do the will of God,1236 but prone to rebel against his Word,1237 to repine and murmur against his providence,1238 and wholly inclined to do the will of the flesh, and of the devil:1239 we pray, that God would by his Spirit take away from ourselves and others all blindness,1240 weakness,1241 indisposedness,1242 and perverseness of heart;1243 and by his grace make us able and willing to know, do, and submit to his will in all things,1244 with the like humility,1245 cheerfulness,1246 faithfulness,1247 diligence,1248 zeal,1249 sincerity,1250 and constancy,1251 as the angels do in heaven.1252",
    ],
  },

  // Matt. 6:10.
  // Rom. 7:18. Job 21:14. 1 Cor. 2:14.
  // Rom. 8:7.
  // Exod. 17:7. Num. 14:2.
  // Eph. 2:2.
  // Eph. 1:17-18.
  // Eph. 3:16.
  // Matt. 26:40-41.
  // Jer. 31:18-19.
  // Psa. 119:1, 8, 35-36. Acts 21:14.
  // Micah 6:8.
  // Psa. 100:2. Job 1:21. 2 Sam. 15:25-26.
  // Isa. 38:3.
  // Psa. 119:4-5.
  // Rom. 12:11.
  // Psa. 119:80.
  // Psa. 119:112.
  // Isa. 6:2-3. Psa. 103:20-21. Matt. 18:10.
  {
    number: 193,
    question: "What do we pray for in the fourth petition?",
    answer: [
      "In the fourth petition,(which is, Give us this day our daily bread,1253) acknowledging, that in Adam, and by our own sin, we have forfeited our right to all the outward blessings of this life, and deserve to be wholly deprived of them by God, and to have them cursed to us in the use of them;1254 and that neither they of themselves are able to sustain us,1255 nor we to merit,1256 or by our own industry to procure them;1257 but prone to desire,1258 get,1259 and use them unlawfully:1260 we pray for ourselves and others, that both they and we, waiting upon the providence of God from day to day in the use of lawful means, may, of his free gift, and as to his fatherly wisdom shall seem best, enjoy a competent portion of them;1261 and have the same continued and blessed unto us in our holy and comfortable use of them,1262 and contentment in them;1263 and be kept from all things that are contrary to our temporal support and comfort.1264",
    ],
  },

  // Matt. 6:11.
  // Gen. 2:17. Gen. 3:17. Rom. 8:20-22. Jer. 5:25. Deut. 28:15-17.
  // Deut. 8:3.
  // Gen. 32:10.
  // Deut. 8:17-18.
  // Jer. 6:13. Mark 7:21-22.
  // Hos. 12:7.
  // Jas. 4:3.
  // Gen. 43:12-14. Gen. 28:20. Eph. 4:28. 2 Thess. 3:11-12. Phil. 4:6.
  // 1 Tim. 4:3-5.
  // 1 Tim. 6:6-8.
  // Prov. 30:8-9.
  {
    number: 194,
    question: "What do we pray for in the fifth petition?",
    answer: [
      "In the fifth petition, (which is, Forgive us our debts, as we forgive our debtors,1265) acknowledging, that we and all others are guilty both of original and actual sin, and thereby become debtors to the justice of God; and that neither we, nor any other creature, can make the least satisfaction for that debt:1266 we pray for ourselves and others, that God of his free grace would, through the obedience and satisfaction of Christ, apprehended and applied by faith, acquit us both from the guilt and punishment of sin,1267 accept us in his Beloved;1268 continue his favour and grace to us,1269 pardon our daily failings,1270 and fill us with peace and joy, in giving us daily more and more assurance of forgiveness;1271 which we are the rather emboldened to ask, and encouraged to expect, when we have this testimony in ourselves, that we from the heart forgive others their offenses.1272",
    ],
  },

  // Matt. 6:12.
  // Rom. 3:9-22. Matt. 18:24-25. Psa. 130:3-4.
  // Rom. 3:24-26. Heb. 9:22.
  // Eph. 1:6-7.
  // 2 Pet. 1:2.
  // Hos. 14:2. Jer. 14:7.
  // Rom. 15:13. Psa. 51:7-10, 12.
  // Luke 11:4. Matt. 6:14-15. Matt. 18:35.
  {
    number: 195,
    question: "What do we pray for in the sixth petition?",
    answer: [
      "In the sixth petition, (which is, And lead us not into temptation, but deliver us from evil,1273) acknowledging, that the most wise, righteous, and gracious God, for divers holy and just ends, may so order things, that we may be assaulted, foiled, and for a time led captive by temptations;1274 that Satan,1275 the world,1276 and the flesh, are ready powerfully to draw us aside, and ensnare us;1277 and that we, even after the pardon of our sins, by reason of our corruption,1278 weakness, and want of watchfulness,1279 are not only subject to be tempted, and forward to expose ourselves unto temptations,1280 but also of ourselves unable and unwilling to resist them, to recover out of them, and to improve them;1281 and worthy to be left under the power of them:1282 we pray, that God would so overrule the world and all in it,1283 subdue the flesh,1284 and restrain Satan,1285 order all things,1286 bestow and bless all means of grace,1287 and quicken us to watchfulness in the use of them, that we and all his people may by his providence be kept from being tempted to sin;1288 or, if tempted, that by his Spirit we may be powerfully supported and enabled to stand in the hour of temptation;1289 or when fallen, raised again and recovered out of it,1290 and have a sanctified use and improvement thereof:1291 that our sanctification and salvation may be perfected,1292 Satan trodden under our feet,1293 and we fully freed from sin, temptation, and all evil, forever.1294",
    ],
  },

  // Matt. 6:13.
  // 2 Chron. 32:31.
  // 1 Chron. 21:1.
  // Luke 21:34. Mark 4:19.
  // Jas. 1:14.
  // Gal. 5:17.
  // Matt. 26:41.
  // Matt. 26:69-72. Gal. 2:11-14. 2 Chron. 18:3. 2 Chron. 19:2.
  // Rom. 7:23-24. 1 Chron. 21:1-4. 2 Chron. 16:7-10.
  // Psa. 81:11-12.
  // John 17:15.
  // Psa. 51:10. Psa. 119:133.
  // 2 Cor. 12:7-8.
  // 1 Cor. 10:12-13.
  // Heb. 13:20-21.
  // Matt. 26:41. Psa. 19:13.
  // Eph. 3:14-17. 1 Thess. 3:13. Jude 24.
  // Psa. 51:12.
  // 1 Pet. 5:8-10.
  // 2 Cor. 13:7, 9.
  // Rom. 16:20. Luke 22:31-32.
  // John 17:15. 1 Thess. 5:23.
  {
    number: 196,
    question: "What doth the conclusion of the Lord's Prayer teach us?",
    answer: [
      "The conclusion of the Lord's Prayer, (which is, For thine is the kingdom, and the power, and the glory, for ever. Amen.1295) teacheth us to enforce our petitions with arguments,1296 which are to be taken, not from any worthiness in ourselves, or in any other creature, but from God;1297 and with our prayers to join praises,1298 ascribing to God alone eternal sovereignty, omnipotency, and glorious excellency;1299 in regard whereof, as he is able and willing to help us,1300 so we by faith are emboldened to plead with him that he would,1301 and quietly to rely upon him, that he will fulfil our requests.1302 And, to testify this our desire and assurance, we say, Amen.1303",
    ],
  },

  // Matt. 6:13.
  // Rom. 15:30.
  // Dan. 9:4, 7-9, 16-19.
  // Phil. 4:6.
  // 1 Chron. 29:10-13.
  // Eph. 3:20-21. Luke 11:13.
  // 2 Chron. 20:6, 11.
  // 2 Chron. 14:11.
  // 1 Cor. 14:16. Rev. 22:20-21.
];

const westminsterLarger = {
  slug: "westminster-larger",
  title: "Westminster Larger Catechism",
  // image: require("../../assets/images/westminster-larger.jpg"),
  date: "1647",
  dateNum: 1647,
};

export default westminsterLarger;
