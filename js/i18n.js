(() => {
  "use strict";

  const STORAGE_KEY = "arabylead_lang";
  const SUPPORTED_LANGS = ["en", "ar"];

  const TRANSLATIONS = {
    en: {
      common: {
        brandAria: "ARABYLEAD LLC home",
        primaryNavAria: "Primary",
        footerNavAria: "Footer navigation",
        socialAria: "Social links",
        instagramAria: "Instagram",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        backToTop: "Back to top",
        langGroupAria: "Language selection",
        switchToEn: "EN — English",
        switchToAr: "AR — العربية",
        navHome: "Home",
        navServices: "Services",
        navOutcomes: "Outcomes",
        navAbout: "About",
        navContact: "Contact",
        navCta: "Work With Us",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerRefund: "Refund Policy",
        copyright: "© {year} ARABYLEAD LLC. All rights reserved.",
        countryUs: "United States"
      },
      home: {
        metaTitle: "ARABYLEAD | Turn Your Audience Into Revenue",
        metaDescription: "ARABYLEAD helps creators, coaches, and experts monetize their audience and grow their digital product businesses through strategic offers, sales systems, and growth solutions.",
        ogLocale: "en_US",
        heroEyebrow: "TURN YOUR AUDIENCE INTO CUSTOMERS",
        heroTitle: "Helping Creators Turn Their Audience Into Revenue",
        heroCopy: "We help creators, coaches, and experts monetize their audience by turning their knowledge into digital products people want to buy — and building the systems that help those products sell.",
        heroCtaPrimary: "Start a Conversation",
        heroCtaSecondary: "Our Services",
        heroMetricsAria: "Core creator outcomes",
        heroMetric1Title: "Profitable Offers",
        heroMetric1Sub: "Packaged around what your audience wants to buy",
        heroMetric2Title: "Customer Conversion",
        heroMetric2Sub: "Turning attention and trust into paying customers",
        heroMetric3Title: "Consistent Sales",
        heroMetric3Sub: "Systems built to grow your digital product business",
        heroVisualAria: "Creator monetization and digital product growth illustration",
        servicesEyebrow: "Services",
        servicesTitle: "Solutions that turn attention into digital product sales",
        servicesSubtitle: "From packaging your expertise into an irresistible offer to creating a smooth buying experience, every solution is designed to help you monetize your audience.",
        service1Title: "Irresistible Offers",
        service1Desc: "Package your knowledge into high-value digital offers with sharp positioning, strategic pricing, compelling bonuses, and perceived value that makes your audience want to buy.",
        service2Title: "Sales Funnels",
        service2Desc: "Turn interested followers and visitors into paying customers through strategic customer journeys designed to convert attention into consistent sales.",
        service3Title: "Payment Solutions",
        service3Desc: "Make buying your digital products simple, smooth, and secure with reliable checkout and payment experiences that remove friction between interest and purchase.",
        service4Title: "Conversion Optimization",
        service4Desc: "Improve your buying experience and sales performance so more interested visitors take action, complete their purchase, and become paying customers.",
        service5Title: "Marketing",
        service5Desc: "Reach the right audience, attract qualified buyers, and create ongoing opportunities to sell and grow your digital products.",
        whoEyebrow: "WHO WE WORK WITH",
        whoTitle: "Built for Creators & Digital Product Businesses",
        whoSubtitle: "We partner with content creators, coaches, consultants, educators, and experts who want to monetize their knowledge, expertise, and audience through digital products.",
        who1Title: "Online Courses",
        who1Desc: "Turn your expertise into structured learning products that deliver real value to your audience and generate consistent sales.",
        who2Title: "Coaching Programs",
        who2Desc: "Package high-value coaching into compelling offers with a clear, confident path from interest to enrollment.",
        who3Title: "Digital Templates",
        who3Desc: "Monetize practical templates, toolkits, and resources that give your audience immediate value and a reason to buy.",
        who4Title: "Memberships",
        who4Desc: "Create recurring revenue opportunities around digital communities, content libraries, and ongoing member value.",
        who5Title: "E-books & Guides",
        who5Desc: "Transform your insights into accessible digital guides and playbooks that turn followers into paying customers.",
        who6Title: "Digital Services",
        who6Desc: "Package your specialized expertise into clear, scalable digital offers built to attract and convert ideal clients.",
        outcomesEyebrow: "Outcomes",
        outcomesTitle: "From Audience to Revenue",
        outcomesSubtitle: "Your audience already represents an opportunity. We help you turn that attention into a digital product business with the right offer, a clear buying experience, and a system designed to generate sales.",
        outcome1Title: "Existing Attention",
        outcome1Desc: "You've already built trust with your followers. We help you unlock the commercial value inside the audience you have today.",
        outcome2Title: "A Profitable Offer",
        outcome2Desc: "Your knowledge is packaged into a clear, valuable digital product offer designed around what your audience genuinely wants to buy.",
        outcome3Title: "Customers Who Buy",
        outcome3Desc: "Interested followers move naturally from content to checkout through a smooth, persuasive buying experience.",
        outcome4Title: "Consistent Growth",
        outcome4Desc: "A reliable sales system that helps you sell your digital products consistently and grow your business over time.",
        aboutEyebrow: "About ARABYLEAD",
        aboutTitle: "We Believe Every Audience Has Potential.",
        aboutP1: "Creators spend years building trust, sharing knowledge, and growing their communities. We believe that audience can become more than views, followers, and engagement.",
        aboutP2: "ARABYLEAD helps creators turn their knowledge, influence, and audience into digital product businesses — creating new revenue opportunities from what they already know and the community they have built.",
        aboutStat1Title: "Creator Monetization",
        aboutStat1Sub: "Turning audience trust and attention into paying customers",
        aboutStat2Title: "Digital Products Only",
        aboutStat2Sub: "Exclusively focused on courses, coaching, guides, and digital offers",
        aboutStat3Title: "Built for Consistent Sales",
        aboutStat3Sub: "Offers and buying experiences designed for long-term growth",
        whyEyebrow: "Why ARABYLEAD",
        whyTitle: "Focused on the outcomes that grow your digital product business",
        why1Title: "Monetization-Focused Thinking",
        why1Desc: "Every decision centers on helping you turn audience trust and expertise into real digital product revenue opportunities.",
        why2Title: "Digital Product Specialization",
        why2Desc: "We work exclusively with creators, coaches, and experts selling digital products — never physical inventory.",
        why3Title: "Attention Into Sales",
        why3Desc: "We bridge the gap between views, followers, and engagement and a clear path to becoming a paying customer.",
        why4Title: "Strategic Offers",
        why4Desc: "Positioning, pricing, and packaging designed to make your digital products compelling and easy to say yes to.",
        why5Title: "Conversion-Focused Experiences",
        why5Desc: "Clear customer journeys and friction-free checkout experiences built to help more visitors become buyers.",
        why6Title: "Systems Designed for Growth",
        why6Desc: "Foundations built so you can sell your digital products consistently and scale your creator business with confidence.",
        faqEyebrow: "FAQ",
        faqTitle: "Common questions",
        faq1Q: "Who is ARABYLEAD best suited for?",
        faq1A: "We partner with content creators, coaches, educators, and experts who have built an audience or specialized knowledge and want to monetize it by selling digital products.",
        faq2Q: "What if I don't have a digital product offer yet?",
        faq2A: "We help you turn what you already know into a clear, valuable digital product offer — including positioning, pricing, packaging, and bonuses — so your audience has a strong reason to buy.",
        faq3Q: "Can you help if I already sell digital products?",
        faq3A: "Yes. If you already have a digital product but want more consistent sales, we help strengthen your offer, customer journey, buying experience, and marketing to unlock more conversion opportunities.",
        faq4Q: "How do we get started?",
        faq4A: "Send us a message through the contact form below with a bit about your audience, expertise, and goals. We'll start a conversation to explore how you can turn your audience into digital product revenue.",
        contactEyebrow: "Contact",
        contactTitle: "Ready to Turn Your Audience Into Revenue?",
        contactCopy: "Let's explore how you can turn your audience, knowledge, and expertise into a digital product that creates new revenue opportunities.",
        formNameLabel: "Name",
        formNamePlaceholder: "Your full name",
        formEmailLabel: "Email",
        formEmailPlaceholder: "you@example.com",
        formBusinessLabel: "Business",
        formBusinessPlaceholder: "Your brand, channel, or niche",
        formMessageLabel: "Message",
        formMessagePlaceholder: "Tell us about your audience, digital product idea, or goals...",
        formSubmit: "Let's Talk",
        errRequiredName: "Please enter your name.",
        errRequiredEmail: "Please enter your email address.",
        errInvalidEmail: "Please enter a valid email address.",
        errRequiredBusiness: "Please tell us your brand, channel, or business.",
        errRequiredMessage: "Please share a short message about your goals.",
        formErrorSummary: "Please review the highlighted fields before sending your message.",
        formSuccess: "Your email app is opening with your message to contact@arabylead.com. If it did not open, please email us directly at contact@arabylead.com.",
        formMailSubject: "Digital Product Inquiry from {name} ({business})"
      },
      privacy: {
        metaTitle: "Privacy Policy | ARABYLEAD LLC",
        metaDescription: "Read the ARABYLEAD LLC Privacy Policy, including how we collect, use, protect, and share information related to digital services, contact forms, analytics, cookies, and payments.",
        ogLocale: "en_US",
        eyebrow: "Legal",
        title: "Privacy Policy",
        lead: "Last updated: July 31, 2026. This Privacy Policy explains how ARABYLEAD LLC collects, uses, protects, and shares information when you visit our website, contact us, purchase digital products, or use our services.",
        contentAria: "Privacy Policy content",
        summaryAria: "Privacy Policy summary",
        s1Title: "Overview",
        s1P1: "ARABYLEAD LLC (\"ARABYLEAD,\" \"we,\" \"us,\" or \"our\") respects your privacy. This policy applies to information collected through our website, contact forms, consultations, service delivery, digital product transactions, and related communications.",
        s1P2: "By using our website or services, you agree to the practices described in this Privacy Policy.",
        s2Title: "Information Collected",
        s2P1: "We may collect contact details, including name, email address, business name, and message content. We may also collect business information needed to evaluate or deliver funnel, payment, automation, and marketing services.",
        s2P2: "We may collect transaction details related to purchases, invoices, service orders, or digital product access, along with website usage information such as pages viewed, referring URLs, browser type, device type, approximate location, and interaction data.",
        s3Title: "Cookies",
        s3P1: "Our website may use cookies and similar technologies to support basic website functionality, remember preferences, understand usage patterns, and improve performance. You can control cookies through your browser settings, but disabling cookies may affect some website features.",
        s4Title: "Analytics",
        s4P1: "We may use analytics tools to understand traffic, page performance, conversions, and visitor behavior. Analytics data is used to improve our website, marketing, and service experience.",
        s5Title: "Contact Forms",
        s5P1: "When you submit a contact form, request a consultation, or email us, we use the information you provide to respond, evaluate your needs, prepare proposals, provide services, and maintain business records.",
        s6Title: "Payment Information",
        s6P1: "Payments may be processed by third-party payment providers such as Stripe, PayPal, or other checkout platforms. We do not intentionally store full credit card numbers on our website. Payment providers process payment data according to their own privacy and security policies.",
        s7Title: "Third-Party Services",
        s7P1: "We may use third-party tools for payment processing, email delivery, analytics, scheduling, customer relationship management, hosting, automation, and service delivery. These providers may process information only as needed to provide their services to us or to you.",
        s8Title: "Data Protection",
        s8P1: "We use reasonable administrative, technical, and organizational safeguards to protect personal information. No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security.",
        s8P2: "We retain information for as long as reasonably necessary to provide services, comply with legal obligations, resolve disputes, enforce agreements, and maintain legitimate business records.",
        s9Title: "User Rights",
        s9P1: "Depending on your location, you may have rights to request access, correction, deletion, restriction, portability, or objection to certain processing of your personal information. You may also request that we stop sending marketing communications.",
        s9P2: "To exercise privacy rights, contact us using the information below. We may need to verify your identity before responding to certain requests.",
        s10Title: "Contact Information",
        sum1Title: "Privacy",
        sum1Sub: "Information use and protection",
        sum2Title: "Data",
        sum2Sub: "Contact forms, analytics, and payments",
        sum3Title: "Rights",
        sum3Sub: "Access, correction, deletion, and opt-out requests"
      },
      terms: {
        metaTitle: "Terms of Service | ARABYLEAD LLC",
        metaDescription: "Read the ARABYLEAD LLC Terms of Service for digital services, digital products, payments, intellectual property, user responsibilities, liability, and governing law.",
        ogLocale: "en_US",
        eyebrow: "Legal",
        title: "Terms of Service",
        lead: "Last updated: July 31, 2026. These Terms of Service govern your use of ARABYLEAD LLC websites, digital products, consulting services, funnel development, payment integrations, automation work, and related digital marketing services.",
        contentAria: "Terms of Service content",
        summaryAria: "Terms summary",
        s1Title: "Acceptance of Terms",
        s1P1: "By accessing our website, purchasing a digital product, requesting a consultation, or engaging ARABYLEAD LLC for services, you agree to these Terms of Service and any written agreement, proposal, statement of work, invoice, or order form that applies to your purchase.",
        s1P2: "If you do not agree with these terms, you should not use our website, purchase our products, or engage our services.",
        s2Title: "Services Offered",
        s2P1: "ARABYLEAD LLC helps digital creators sell and scale digital products through sales funnel development, payment gateway integration, conversion optimization, marketing automation, email marketing, and digital growth consulting.",
        s2P2: "Project scope, deliverables, timelines, revision limits, and responsibilities may be defined in a separate written agreement or proposal. If a separate written agreement conflicts with these Terms, the specific written agreement controls for that project.",
        s3Title: "Payments",
        s3P1: "You agree to pay all fees listed in the applicable checkout, invoice, proposal, or service agreement. Unless otherwise stated, payments are due according to the payment schedule provided at purchase or project approval.",
        s3P2: "Late payments may delay project work, delivery, access, support, or launch timelines. You are responsible for providing accurate billing information and for any taxes, bank fees, or payment processing fees that apply to your transaction.",
        s4Title: "Intellectual Property",
        s4P1: "Unless otherwise agreed in writing, ARABYLEAD LLC retains ownership of pre-existing materials, frameworks, templates, methods, internal processes, know-how, and reusable components used to provide services.",
        s4P2: "After full payment is received, you receive the rights stated in the applicable agreement or, if no separate agreement exists, a limited right to use final delivered materials for your own business purposes. You may not resell, redistribute, sublicense, or claim ownership of ARABYLEAD LLC proprietary materials unless expressly permitted in writing.",
        s5Title: "User Responsibilities",
        s5P1: "You are responsible for providing accurate information, timely feedback, required account access, brand assets, legal approvals, product information, and any content needed for project delivery.",
        s5P2: "You agree not to use our services or deliverables for unlawful, misleading, abusive, infringing, or deceptive activities. You are responsible for ensuring your offers, marketing claims, customer communications, and business practices comply with applicable laws and platform rules.",
        s6Title: "Limitation of Liability",
        s6P1: "To the fullest extent permitted by law, ARABYLEAD LLC will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including lost profits, lost revenue, lost data, business interruption, or reputational harm.",
        s6P2: "Our total liability for any claim related to the website, products, or services will not exceed the amount you paid to ARABYLEAD LLC for the specific product or service giving rise to the claim.",
        s7Title: "Account Termination and Service Refusal",
        s7P1: "We may suspend or terminate access to services, digital products, communications, or project work if you violate these Terms, fail to make required payments, misuse our materials, provide false information, or engage in conduct that creates legal, operational, or reputational risk.",
        s7P2: "We may refuse service where we reasonably determine that a requested project is unlawful, misleading, unethical, outside our capabilities, or inconsistent with our business standards.",
        s8Title: "Governing Law",
        s8P1: "These Terms are governed by the laws of the State of New Mexico, United States, without regard to conflict of law principles. Any disputes will be handled in the appropriate courts located in New Mexico unless another venue is required by applicable law.",
        s9Title: "Contact Information",
        sum1Title: "Scope",
        sum1Sub: "Services, products, and website use",
        sum2Title: "Payment",
        sum2Sub: "Invoices, checkouts, and project schedules",
        sum3Title: "Rights",
        sum3Sub: "Ownership, licensing, and responsibilities"
      },
      refund: {
        metaTitle: "Refund Policy | ARABYLEAD LLC",
        metaDescription: "Read the ARABYLEAD LLC Refund Policy for digital products, digital services, project work, technical delivery issues, and chargeback communication.",
        ogLocale: "en_US",
        eyebrow: "Legal",
        title: "Refund Policy",
        lead: "Last updated: July 31, 2026. This Refund Policy explains how ARABYLEAD LLC handles refund requests for digital products, digital services, consulting, funnel development, payment integrations, and automation work.",
        contentAria: "Refund Policy content",
        summaryAria: "Refund summary",
        s1Title: "General Policy",
        s1P1: "Because ARABYLEAD LLC provides digital products, digital services, strategy, consulting, technical implementation, and custom project work, refund eligibility depends on the type of purchase, delivery status, project stage, and any written agreement that applies.",
        s1P2: "We review refund requests professionally and in good faith, but payment for completed work, delivered digital products, and used services is generally non-refundable unless required by law or expressly stated in writing.",
        s2Title: "Digital Products",
        s2P1: "Digital products are generally non-refundable once delivered, accessed, downloaded, emailed, or otherwise made available to the customer. This includes templates, guides, documents, training materials, digital files, and similar downloadable or online-access products.",
        s2P2: "If you experience a technical issue that prevents access to a digital product, contact us so we can help restore access, resend files, troubleshoot the issue, or provide an appropriate remedy.",
        s3Title: "Digital Services",
        s3P1: "Service refunds are evaluated on a case-by-case basis. We consider the project scope, work completed, time spent, resources allocated, deliverables produced, communications, expenses, and the terms of any signed agreement, invoice, proposal, or statement of work.",
        s3P2: "Fees for completed services, strategy sessions, consulting calls, audits, implementation work, and delivered project milestones are generally non-refundable.",
        s4Title: "Work Not Yet Started",
        s4P1: "If work has not started and no project resources have been allocated, refunds may be available. Any approved refund may exclude payment processing fees, administrative costs, third-party fees, or non-refundable expenses already incurred.",
        s5Title: "Technical Delivery Issues",
        s5P1: "If a technical issue prevents delivery of a purchased digital product or service deliverable, we will work with you to resolve the issue. When we cannot reasonably deliver the purchased item or provide a suitable alternative, we may issue a refund when appropriate.",
        s6Title: "Chargebacks",
        s6P1: "Please contact us before requesting a chargeback. Most billing, delivery, access, or project concerns can be resolved faster through direct communication. Unresolved chargebacks may delay service delivery, suspend access, or require us to provide documentation to the payment processor.",
        s7Title: "How to Request a Refund",
        s7P1: "To request a refund review, contact us with your name, email address, order or invoice details, purchase date, and a clear explanation of the issue. We may request additional information to evaluate the request.",
        s7P2: "Approved refunds are typically returned to the original payment method, subject to payment processor timelines and policies.",
        s8Title: "Contact Information",
        sum1Title: "Digital Products",
        sum1Sub: "Generally non-refundable once delivered",
        sum2Title: "Services",
        sum2Sub: "Reviewed case by case",
        sum3Title: "Support First",
        sum3Sub: "Contact us before chargebacks"
      }
    },
    ar: {
      common: {
        brandAria: "الصفحة الرئيسية لـ ARABYLEAD LLC",
        primaryNavAria: "التنقل الرئيسي",
        footerNavAria: "روابط التذييل",
        socialAria: "حسابات التواصل الاجتماعي",
        instagramAria: "إنستغرام",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة",
        backToTop: "العودة إلى الأعلى",
        langGroupAria: "اختيار اللغة",
        switchToEn: "EN — الإنجليزية",
        switchToAr: "AR — العربية",
        navHome: "الرئيسية",
        navServices: "الخدمات",
        navOutcomes: "النتائج",
        navAbout: "من نحن",
        navContact: "تواصل معنا",
        navCta: "اعمل معنا",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerRefund: "سياسة الاسترجاع",
        copyright: "© {year} ARABYLEAD LLC. جميع الحقوق محفوظة.",
        countryUs: "الولايات المتحدة الأمريكية"
      },
      home: {
        metaTitle: "ARABYLEAD | حوّل جمهورك إلى مصدر دخل",
        metaDescription: "تساعد ARABYLEAD صناع المحتوى والمدربين والخبراء على تحقيق الدخل من جمهورهم وبيع المنتجات الرقمية عبر عروض استراتيجية وأنظمة مبيعات وحلول نمو فعّالة.",
        ogLocale: "ar_AR",
        heroEyebrow: "حوّل جمهورك إلى عملاء",
        heroTitle: "نساعد صناع المحتوى على تحويل جمهورهم إلى مصدر دخل",
        heroCopy: "نساعد صناع المحتوى والمدربين والخبراء على تحقيق الدخل من جمهورهم عبر تحويل خبراتهم ومعرفتهم إلى منتجات رقمية قابلة للبيع يطلبها الجمهور، وبناء الأنظمة التي تدفعها نحو البيع باستمرار.",
        heroCtaPrimary: "ابدأ محادثة معنا",
        heroCtaSecondary: "استكشف خدماتنا",
        heroMetricsAria: "أبرز نتائج صناع المحتوى",
        heroMetric1Title: "عروض قابلة للبيع",
        heroMetric1Sub: "مصاغة بناءً على ما يرغب جمهورك في شرائه",
        heroMetric2Title: "تحويل المتابعين لعملاء",
        heroMetric2Sub: "تحويل الانتباه والثقة إلى مبيعات حقيقية",
        heroMetric3Title: "مبيعات مستدامة",
        heroMetric3Sub: "أنظمة مصممة لتنمية أعمالك في المنتجات الرقمية",
        heroVisualAria: "رسم توضيحي لتحقيق الدخل من الجمهور ونمو المنتجات الرقمية",
        servicesEyebrow: "خدماتنا",
        servicesTitle: "حلول تحوّل اهتمام جمهورك إلى مبيعات لمنتجاتك الرقمية",
        servicesSubtitle: "بدءاً من صياغة خبرتك في عرض رقمي جذاب وصولاً إلى تجربة شراء سلسة، صُمّم كل حل لمساعدتك على تحقيق الدخل من جمهورك وزيادة فرص المبيعات.",
        service1Title: "عروض لا تُقاوم",
        service1Desc: "حوّل خبرتك ومعرفتك إلى عروض رقمية عالية القيمة من خلال تموضع واضح، وتسعير مدروس، ومكافآت ذكية ترفع القيمة المُدركة وتجعل جمهورك راغباً في الشراء.",
        service2Title: "مسارات المبيعات",
        service2Desc: "حوّل المتابعين والزوار المهتمين إلى عملاء فعليين عبر رحلة شراء استراتيجية مصممة لتحويل الانتباه إلى مبيعات مستمرة.",
        service3Title: "حلول الدفع",
        service3Desc: "اجعل شراء منتجاتك الرقمية بسيطاً وسلساً وآمناً عبر تجارب دفع موثوقة تزيل أي عوائق بين اهتمام العميل وإتمام الشراء.",
        service4Title: "تحسين معدل التحويل",
        service4Desc: "طوّر تجربة الشراء وأداء المبيعات ليتمكن عدد أكبر من الزوار المهتمين من اتخاذ القرار وإتمام الشراء والتحول إلى عملاء.",
        service5Title: "التسويق",
        service5Desc: "صل إلى الجمهور المناسب، واجذب المشترين المؤهلين، واصنع فرصاً متجددة لبيع منتجاتك الرقمية وتنمية حضورك.",
        whoEyebrow: "من نخدم",
        whoTitle: "مصمّم لصناع المحتوى وأعمال المنتجات الرقمية",
        whoSubtitle: "نعمل مع صناع المحتوى والمدربين والمستشارين والمعلمين والخبراء ورواد الأعمال الرقميين الراغبين في تحويل معرفتهم وجمهورهم إلى مصدر دخل من المنتجات الرقمية.",
        who1Title: "الدورات التدريبية",
        who1Desc: "حوّل خبرتك إلى دورات تعليمية متكاملة عبر الإنترنت تقدّم قيمة حقيقية لجمهورك وتولّد فرص مبيعات مستمرة.",
        who2Title: "برامج التدريب",
        who2Desc: "قدّم برامجك التدريبية والاستشارية في صورة عروض واضحة تمنح عملاءك مساراً واثقاً من الاهتمام إلى الاشتراك.",
        who3Title: "القوالب الرقمية",
        who3Desc: "استثمر في القوالب والأدوات الجاهزة والموارد العملية التي تمنح جمهورك فائدة فورية ودافعاً واضحاً للشراء.",
        who4Title: "العضويات الرقمية",
        who4Desc: "ابنِ فرص دخل متكررة حول مجتمعات رقمية ومكتبات محتوى حصرية تقدّم قيمة متواصلة للأعضاء.",
        who5Title: "الكتب والأدلة الإلكترونية",
        who5Desc: "حوّل أفكارك وخبراتك إلى أدلة عملية وكتب إلكترونية سهلة الاقتناء تساعدك على تحويل المتابعين إلى عملاء.",
        who6Title: "الخدمات الرقمية",
        who6Desc: "صِغ خبرتك المتخصصة في عروض رقمية واضحة وقابلة للتوسع تجذب العملاء المناسبين وتحفّزهم على الشراء.",
        outcomesEyebrow: "النتائج",
        outcomesTitle: "من الجمهور إلى العوائد",
        outcomesSubtitle: "جمهورك الحالي يمثّل فرصة حقيقية بحد ذاته. نساعدك على تحويل هذا الانتباه إلى مشروع منتجات رقمية متكامل، عبر العرض المناسب وتجربة الشراء الواضحة والنظام المصمم لتوليد المبيعات.",
        outcome1Title: "اهتمام وثقة قائمة",
        outcome1Desc: "لقد بنيت ثقة حقيقية مع متابعيك بالفعل، ونحن نساعدك على تفعيل القيمة التجارية الكامنة في الجمهور الذي تمتلكه اليوم.",
        outcome2Title: "عرض رقمي مربح",
        outcome2Desc: "تُصاغ خبرتك ومعرفتك في عرض منتج رقمي واضح وجذاب، مصمم حول ما يبحث عنه جمهورك ويرغب في شرائه فعلاً.",
        outcome3Title: "عملاء يشترون بثقة",
        outcome3Desc: "ينتقل المتابعون المهتمون بانسيابية من متابعة محتواك إلى إتمام الطلب عبر تجربة شراء واضحة ومقنعة.",
        outcome4Title: "نمو مستدام في المبيعات",
        outcome4Desc: "نظام مبيعات موثوق يساعدك على بيع منتجاتك الرقمية باستمرار وتنمية مصدر دخلك الرقمي على المدى الطويل.",
        aboutEyebrow: "عن ARABYLEAD",
        aboutTitle: "نؤمن بأن كل جمهور يحمل إمكانات حقيقية.",
        aboutP1: "يقضي صناع المحتوى سنوات في بناء الثقة ومشاركة المعرفة وتنمية مجتمعاتهم. ونحن نؤمن بأن هذا الجمهور قادر على أن يصبح أكثر من مجرد مشاهدات ومتابعين وتفاعل.",
        aboutP2: "تساعد ARABYLEAD صناع المحتوى على تحويل معرفتهم وتأثيرهم وجمهورهم إلى مشاريع منتجات رقمية، لخلق فرص دخل جديدة انطلاقاً مما يعرفونه بالفعل والمجتمع الذي بنوه.",
        aboutStat1Title: "تحقيق الدخل من الجمهور",
        aboutStat1Sub: "تحويل ثقة الجمهور وتفاعله إلى عملاء ومبيعات حقيقية",
        aboutStat2Title: "منتجات رقمية فقط",
        aboutStat2Sub: "تركيز حصري على الدورات والتدريب والأدلة والعروض الرقمية",
        aboutStat3Title: "مصمّم لمبيعات مستمرة",
        aboutStat3Sub: "عروض وتجارب شراء تهدف لبناء نمو طويل الأمد",
        whyEyebrow: "لماذا ARABYLEAD",
        whyTitle: "تركيز كامل على النتائج التي تنمّي أعمالك في المنتجات الرقمية",
        why1Title: "تفكير يركز على تحقيق الدخل",
        why1Desc: "كل خطوة تتمحور حول مساعدتك على تحويل ثقة جمهورك وخبرتك إلى فرص دخل حقيقية من المنتجات الرقمية.",
        why2Title: "تخصص في المنتجات الرقمية",
        why2Desc: "نعمل حصرياً مع صناع المحتوى والمدربين والخبراء في المنتجات الرقمية، ولا نستهدف تجارة المنتجات المادية.",
        why3Title: "تحويل الانتباه إلى مبيعات",
        why3Desc: "نربط بين المشاهدات والمتابعة والتفاعل وبين مسار واضح يهيّئ المتابع ليصبح عميلاً.",
        why4Title: "عروض استراتيجية",
        why4Desc: "تموضع وتسعير وتقديم مدروس يجعل منتجاتك الرقمية مقنعة وواضحة وسهلة الاختيار.",
        why5Title: "تجارب تركز على التحويل",
        why5Desc: "رحلات عملاء واضحة وتجارب دفع خالية من التعقيد تساعد عدداً أكبر من الزوار على إتمام الشراء.",
        why6Title: "أنظمة مصممة للنمو",
        why6Desc: "أسس متينة تمكّنك من بيع منتجاتك الرقمية باستمرار وتطوير نشاطك الرقمي بثقة.",
        faqEyebrow: "الأسئلة الشائعة",
        faqTitle: "أسئلة متكررة",
        faq1Q: "لمن تناسب خدمات ARABYLEAD؟",
        faq1A: "نعمل مع صناع المحتوى والمدربين والمعلمين والخبراء الذين بنوا جمهوراً أو يمتلكون معرفة متخصصة ويرغبون في تحقيق الدخل منها عبر بيع المنتجات الرقمية.",
        faq2Q: "ماذا لو لم يكن لدي عرض منتج رقمي جاهز بعد؟",
        faq2A: "نساعدك على تحويل خبرتك ومعرفتك الحالية إلى عرض منتج رقمي واضح وعالي القيمة — يشمل التموضع والتسعير والمزايا الإضافية — ليمنح جمهورك سبباً قوياً للشراء.",
        faq3Q: "هل يمكنكم المساعدة إذا كنت أبيع منتجات رقمية بالفعل؟",
        faq3A: "نعم. إذا كان لديك منتج رقمي حالي وتطمح إلى مبيعات أكثر استقراراً، نساعدك على تطوير العرض ورحلة العميل وتجربة الشراء والتسويق لزيادة فرص التحويل والمبيعات.",
        faq4Q: "كيف نبدأ العمل معاً؟",
        faq4A: "أرسل لنا رسالة عبر نموذج التواصل أدناه مع نبذة عن جمهورك وخبرتك وأهدافك، وسنبدأ معك محادثة لاستكشاف أفضل طريقة لتحويل جمهورك إلى دخل من المنتجات الرقمية.",
        contactEyebrow: "تواصل معنا",
        contactTitle: "هل أنت مستعد لتحويل جمهورك إلى مصدر دخل؟",
        contactCopy: "دعنا نستكشف كيف يمكنك تحويل جمهورك ومعرفتك وخبرتك إلى منتج رقمي يفتح لك فرص مبيعات ودخل جديدة.",
        formNameLabel: "الاسم",
        formNamePlaceholder: "الاسم الكامل",
        formEmailLabel: "البريد الإلكتروني",
        formEmailPlaceholder: "name@example.com",
        formBusinessLabel: "المشروع أو القناة",
        formBusinessPlaceholder: "اسم علامتك التجارية أو حسابك أو مجالك",
        formMessageLabel: "الرسالة",
        formMessagePlaceholder: "أخبرنا باختصار عن جمهورك أو فكرة منتجك الرقمي أو أهدافك...",
        formSubmit: "ابدأ المحادثة",
        errRequiredName: "يرجى إدخال اسمك.",
        errRequiredEmail: "يرجى إدخال بريدك الإلكتروني.",
        errInvalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
        errRequiredBusiness: "يرجى إدخال اسم مشروعك أو علامتك التجارية.",
        errRequiredMessage: "يرجى كتابة رسالة مختصرة حول أهدافك.",
        formErrorSummary: "يرجى مراجعة الحقول الموضّحة قبل إرسال الرسالة.",
        formSuccess: "يتم الآن فتح تطبيق البريد الإلكتروني لإرسال رسالتك إلى contact@arabylead.com. إذا لم يفتح تلقائياً، يمكنك مراسلتنا مباشرة على contact@arabylead.com.",
        formMailSubject: "استفسار حول المنتجات الرقمية من {name} ({business})"
      },
      privacy: {
        metaTitle: "سياسة الخصوصية | ARABYLEAD LLC",
        metaDescription: "اطلع على سياسة الخصوصية الخاصة بشركة ARABYLEAD LLC، بما في ذلك كيفية جمع المعلومات واستخدامها وحمايتها فيما يتعلق بالخدمات الرقمية ونماذج التواصل والتحليلات والمدفوعات.",
        ogLocale: "ar_AR",
        eyebrow: "قانوني",
        title: "سياسة الخصوصية",
        lead: "آخر تحديث: 31 يوليو 2026. توضح سياسة الخصوصية هذه كيفية قيام شركة ARABYLEAD LLC بجمع المعلومات واستخدامها وحمايتها ومشاركتها عند زيارتك لموقعنا الإلكتروني أو تواصلك معنا أو شرائك منتجات رقمية أو استخدام خدماتنا.",
        contentAria: "محتوى سياسة الخصوصية",
        summaryAria: "ملخص سياسة الخصوصية",
        s1Title: "نظرة عامة",
        s1P1: "تحترم شركة ARABYLEAD LLC (\"ARABYLEAD\" أو \"نحن\") خصوصيتك. تنطبق هذه السياسة على المعلومات التي يتم جمعها عبر موقعنا الإلكتروني، ونماذج التواصل، والاستشارات، وتقديم الخدمات، ومعاملات المنتجات الرقمية، والمراسلات ذات الصلة.",
        s1P2: "باستخدامك لموقعنا الإلكتروني أو خدماتنا، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه.",
        s2Title: "المعلومات التي نجمعها",
        s2P1: "قد نجمع بيانات التواصل، بما في ذلك الاسم، وعنوان البريد الإلكتروني، واسم النشاط التجاري، ومحتوى الرسالة. كما قد نجمع معلومات العمل اللازمة لتقييم أو تقديم خدمات المبيعات الرقمية والتسويق.",
        s2P2: "قد نجمع تفاصيل المعاملات المتعلقة بالمشتريات أو الفواتير أو طلبات الخدمة أو الوصول إلى المنتجات الرقمية، إلى جانب معلومات استخدام الموقع مثل الصفحات التي تمت زيارتها، وعناوين الإحالة، ونوع المتصفح، ونوع الجهاز، والموقع التقريبي، وبيانات التفاعل.",
        s3Title: "ملفات تعريف الارتباط",
        s3P1: "قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة لدعم الوظائف الأساسية للموقع، وتذكر التفضيلات، وفهم أنماط الاستخدام، وتحسين الأداء. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح، مع ملاحظة أن تعطيلها قد يؤثر على بعض ميزات الموقع.",
        s4Title: "التحليلات",
        s4P1: "قد نستخدم أدوات تحليل لفهم حركة الزوار، وأداء الصفحات، ومعدلات التحويل، وسلوك المستخدمين. تُستخدم بيانات التحليلات لتحسين موقعنا وتجربة الخدمات والتسويق.",
        s5Title: "نماذج التواصل",
        s5P1: "عند إرسالك نموذج تواصل أو طلب استشارة أو مراسلتنا عبر البريد الإلكتروني، نستخدم المعلومات التي تقدمها للرد عليك، وتقييم احتياجاتك، وإعداد المقترحات، وتقديم الخدمات، وحفظ سجلات العمل.",
        s6Title: "معلومات الدفع",
        s6P1: "قد تتم معالجة المدفوعات عبر مزودي دفع خارجيين مثل Stripe أو PayPal أو منصات دفع أخرى. لا نقوم عن قصد بتخزين أرقام بطاقات الائتمان الكاملة على موقعنا، ويعالج مزودو الدفع البيانات وفقاً لسياسات الخصوصية والأمان الخاصة بهم.",
        s7Title: "خدمات الطرف الثالث",
        s7P1: "قد نستخدم أدوات خارجية لمعالجة المدفوعات، وإرسال البريد الإلكتروني، والتحليلات، والجدولة، وإدارة علاقات العملاء، والاستضافة، وتقديم الخدمات. ولا يعالج هؤلاء المزودون المعلومات إلا بالقدر اللازم لتقديم خدماتهم لنا أو لك.",
        s8Title: "حماية البيانات",
        s8P1: "نعتمد تدابير إدارية وتقنية وتنظيمية معقولة لحماية المعلومات الشخصية. ومع ذلك، لا توجد وسيلة نقل أو تخزين إلكتروني آمنة تماماً، لذا لا يمكننا ضمان الأمان المطلق.",
        s8P2: "نحتفظ بالمعلومات للمدة اللازمة بشكل معقول لتقديم الخدمات، والامتثال للالتزامات القانونية، وحل النزاعات، وإنفاذ الاتفاقيات، والاحتفاظ بالسجلات التجارية المشروعة.",
        s9Title: "حقوق المستخدم",
        s9P1: "وفقاً لموقعك الجغرافي، قد يحق لك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها أو تقييد معالجتها أو نقلها أو الاعتراض على بعض أوجه معالجتها، كما يمكنك طلب إيقاف الرسائل التسويقية.",
        s9P2: "لممارسة حقوق الخصوصية، تواصل معنا عبر البيانات أدناه. قد نحتاج إلى التحقق من هويتك قبل الاستجابة لبعض الطلبات.",
        s10Title: "معلومات التواصل",
        sum1Title: "الخصوصية",
        sum1Sub: "استخدام المعلومات وحمايتها",
        sum2Title: "البيانات",
        sum2Sub: "نماذج التواصل والتحليلات والمدفوعات",
        sum3Title: "الحقوق",
        sum3Sub: "طلبات الوصول والتصحيح والحذف وإلغاء الاشتراك"
      },
      terms: {
        metaTitle: "شروط الخدمة | ARABYLEAD LLC",
        metaDescription: "اقرأ شروط الخدمة الخاصة بشركة ARABYLEAD LLC للخدمات الرقمية والمنتجات الرقمية والمدفوعات والملكية الفكرية ومسؤوليات المستخدم والحدود القانونية.",
        ogLocale: "ar_AR",
        eyebrow: "قانوني",
        title: "شروط الخدمة",
        lead: "آخر تحديث: 31 يوليو 2026. تحكم شروط الخدمة هذه استخدامك لمواقع شركة ARABYLEAD LLC ومنتجاتها الرقمية وخدماتها الاستشارية وحلول المبيعات الرقمية والتسويق ذات الصلة.",
        contentAria: "محتوى شروط الخدمة",
        summaryAria: "ملخص الشروط",
        s1Title: "قبول الشروط",
        s1P1: "من خلال الوصول إلى موقعنا الإلكتروني، أو شراء منتج رقمي، أو طلب استشارة، أو التعاقد مع ARABYLEAD LLC للحصول على خدمات، فإنك توافق على شروط الخدمة هذه وأي اتفاقية مكتوبة أو عرض سعر أو بيان عمل أو فاتورة تنطبق على عملية الشراء.",
        s1P2: "إذا كنت لا توافق على هذه الشروط، فيجب عليك عدم استخدام موقعنا أو شراء منتجاتنا أو طلب خدماتنا.",
        s2Title: "الخدمات المقدمة",
        s2P1: "تساعد ARABYLEAD LLC صناع المحتوى على بيع وتنمية منتجاتهم الرقمية من خلال تطوير العروض ومسارات المبيعات وحلول الدفع وتحسين التحويل والتسويق الرقمي.",
        s2P2: "قد يتم تحديد نطاق المشروع والمخرجات والجداول الزمنية وحدود التعديلات والمسؤوليات في اتفاقية أو عرض مكتوب منفصل. وفي حال تعارض أي اتفاقية مكتوبة منفصلة مع هذه الشروط، تسود الاتفاقية المحددة لذلك المشروع.",
        s3Title: "المدفوعات",
        s3P1: "توافق على سداد جميع الرسوم الموضحة في صفحة الدفع أو الفاتورة أو العرض أو اتفاقية الخدمة المعتمدة. وما لم يُنص على خلاف ذلك، تستحق المدفوعات وفق الجدول الزمني المحدد عند الشراء أو اعتماد المشروع.",
        s3P2: "قد يؤدي التأخر في السداد إلى تأخير العمل أو التسليم أو الوصول أو الدعم أو مواعيد الإطلاق. وتتحمل مسؤولية تقديم بيانات فوترة دقيقة وسداد أي ضرائب أو رسوم بنكية أو رسوم معالجة دفع تنطبق على معاملتك.",
        s4Title: "الملكية الفكرية",
        s4P1: "ما لم يُتفق على خلاف ذلك كتابياً، تحتفظ ARABYLEAD LLC بملكية المواد والأطر والقوالب والأساليب والمعرفة والعمليات والمكونات القابلة لإعادة الاستخدام المعدة مسبقاً لتقديم الخدمات.",
        s4P2: "بعد سداد كامل المستحقات، تحصل على الحقوق المحددة في الاتفاقية السارية، أو في حال عدم وجود اتفاقية منفصلة، على حق محدود لاستخدام المخرجات النهائية المُسلّمة لأغراض عملك الخاص. ولا يجوز لك إعادة بيع أو توزيع أو ترخيص أو ادعاء ملكية المواد الخاصة بشركة ARABYLEAD LLC إلا بإذن كتابي صريح.",
        s5Title: "مسؤوليات المستخدم",
        s5P1: "أنت مسؤول عن تقديم معلومات دقيقة، وملاحظات في الوقت المناسب، وصلاحيات الحسابات المطلوبة، وأصول العلامة التجارية، والموافقات القانونية، ومعلومات المنتج، وأي محتوى لازم لتنفيذ المشروع.",
        s5P2: "توافق على عدم استخدام خدماتنا أو مخرجاتنا في أي أنشطة غير قانونية أو مضللة أو مسيئة أو منتهكة للحقوق. كما تتحمل مسؤولية ضمان امتثال عروضك وادعاءاتك التسويقية ومراسلاتك مع العملاء للقوانين المعمول بها وقواعد المنصات.",
        s6Title: "تحديد المسؤولية",
        s6P1: "إلى أقصى حد يسمح به القانون، لن تكون ARABYLEAD LLC مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك خسارة الأرباح أو الإيرادات أو البيانات أو تعطل الأعمال أو الضرر بالسمعة.",
        s6P2: "لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بالموقع أو المنتجات أو الخدمات المبلغ الذي دفعته فعلياً إلى ARABYLEAD LLC مقابل المنتج أو الخدمة المحددة موضوع المطالبة.",
        s7Title: "إنهاء الخدمة أو رفضها",
        s7P1: "يجوز لنا تعليق أو إنهاء الوصول إلى الخدمات أو المنتجات الرقمية أو المراسلات أو أعمال المشروع إذا انتهكت هذه الشروط، أو تخلفت عن سداد المستحقات، أو أسأت استخدام موادنا، أو قدمت معلومات غير صحيحة، أو قمت بسلوك يرتب مخاطر قانونية أو تشغيلية أو تتعلق بالسمعة.",
        s7P2: "يجوز لنا رفض تقديم الخدمة متى تبين لنا بشكل معقول أن المشروع المطلوب غير قانوني أو مضلل أو غير أخلاقي أو خارج نطاق قدراتنا أو يتعارض مع معايير عملنا.",
        s8Title: "القانون الحاكم",
        s8P1: "تخضع هذه الشروط لقوانين ولاية نيو مكسيكو في الولايات المتحدة الأمريكية، دون النظر إلى مبادئ تنازع القوانين. وتُحال أي نزاعات إلى المحاكم المختصة في نيو مكسيكو ما لم يفرض القانون المعمول به اختصاصاً آخر.",
        s9Title: "معلومات التواصل",
        sum1Title: "النطاق",
        sum1Sub: "الخدمات والمنتجات واستخدام الموقع",
        sum2Title: "الدفع",
        sum2Sub: "الفواتير والمدفوعات وجداول المشاريع",
        sum3Title: "الحقوق",
        sum3Sub: "الملكية والترخيص والمسؤوليات"
      },
      refund: {
        metaTitle: "سياسة الاسترجاع | ARABYLEAD LLC",
        metaDescription: "اطلع على سياسة الاسترجاع لشركة ARABYLEAD LLC للمنتجات الرقمية والخدمات الرقمية ومشاكل التسليم التقني والتواصل قبل الاعتراضات المالية.",
        ogLocale: "ar_AR",
        eyebrow: "قانوني",
        title: "سياسة الاسترجاع",
        lead: "آخر تحديث: 31 يوليو 2026. توضح سياسة الاسترجاع هذه كيفية تعامل شركة ARABYLEAD LLC مع طلبات الاسترجاع الخاصة بالمنتجات الرقمية والخدمات الرقمية والاستشارات وأعمال المبيعات الرقمية.",
        contentAria: "محتوى سياسة الاسترجاع",
        summaryAria: "ملخص سياسة الاسترجاع",
        s1Title: "السياسة العامة",
        s1P1: "نظراً لأن ARABYLEAD LLC تقدّم منتجات رقمية وخدمات رقمية واستشارات واستراتيجيات وأعمال مشاريع مخصصة، فإن أهلية الاسترجاع تعتمد على نوع الشراء وحالة التسليم ومرحلة المشروع وأي اتفاقية مكتوبة سارية.",
        s1P2: "نراجع طلبات الاسترجاع بمهنية وحسن نية، غير أن المبالغ المدفوعة مقابل الأعمال المنجزة والمنتجات الرقمية المُسلّمة والخدمات المستخدمة تكون غير قابلة للاسترجاع بشكل عام ما لم يفرض القانون خلاف ذلك أو يُنص عليه كتابياً.",
        s2Title: "المنتجات الرقمية",
        s2P1: "المنتجات الرقمية غير قابلة للاسترجاع بشكل عام بمجرد تسليمها أو الوصول إليها أو تنزيلها أو إرسالها بالبريد الإلكتروني أو إتاحتها للعميل، ويشمل ذلك القوالب والأدلة والمستندات والمواد التدريبية والملفات الرقمية المشابهة.",
        s2P2: "إذا واجهت مشكلة تقنية تمنعك من الوصول إلى منتج رقمي، تواصل معنا لنساعدك في استعادة الوصول أو إعادة إرسال الملفات أو معالجة المشكلة أو تقديم حل مناسب.",
        s3Title: "الخدمات الرقمية",
        s3P1: "تُقيّم طلبات استرجاع الخدمات على أساس كل حالة على حدة، مع مراعاة نطاق المشروع والعمل المنجز والوقت المستغرق والموارد المخصصة والمخرجات المُنتجة والمراسلات والمصروفات وشروط أي اتفاقية أو فاتورة أو عرض موقع.",
        s3P2: "الرسوم الخاصة بالخدمات المكتملة وجلسات الاستراتيجية والمكالمات الاستشارية وعمليات التدقيق والمراحل المُسلّمة من المشروع تكون غير قابلة للاسترجاع بشكل عام.",
        s4Title: "الأعمال التي لم تبدأ بعد",
        s4P1: "إذا لم يبدأ العمل ولم تُخصّص موارد للمشروع بعد، فقد يكون الاسترجاع متاحاً. وقد يُستثنى من أي استرجاع معتمد رسوم معالجة الدفع أو التكاليف الإدارية أو رسوم الأطراف الثالثة أو المصروفات غير القابلة للاسترداد المتكبدة بالفعل.",
        s5Title: "مشاكل التسليم التقني",
        s5P1: "إذا حالت مشكلة تقنية دون تسليم منتج رقمي مشترى أو مخرج خدمة، فسنعمل معك على حل المشكلة. وعند تعذر تسليم العنصر المشترى بشكل معقول أو تقديم بديل مناسب، قد نقوم بإصدار استرجاع عند الاقتضاء.",
        s6Title: "الاعتراضات المالية (Chargebacks)",
        s6P1: "يرجى التواصل معنا قبل تقديم اعتراض مالي لدى البنك أو مزود الدفع، إذ يمكن حل معظم مسائل الفوترة أو التسليم أو الوصول بشكل أسرع عبر التواصل المباشر. وقد تؤدي الاعتراضات غير المحلولة إلى تأخير تقديم الخدمة أو تعليق الوصول.",
        s7Title: "كيفية طلب الاسترجاع",
        s7P1: "لطلب مراجعة استرجاع، تواصل معنا مع تزويدنا باسمك وبريدك الإلكتروني وتفاصيل الطلب أو الفاتورة وتاريخ الشراء وشرح واضح للمشكلة. وقد نطلب معلومات إضافية لتقييم الطلب.",
        s7P2: "عادةً ما تُعاد المبالغ الموافق على استرجاعها إلى وسيلة الدفع الأصلية، وفقاً للمدة الزمنية وسياسات مزود الدفع.",
        s8Title: "معلومات التواصل",
        sum1Title: "المنتجات الرقمية",
        sum1Sub: "غير قابلة للاسترجاع عادةً بعد التسليم",
        sum2Title: "الخدمات",
        sum2Sub: "تُراجع كل حالة على حدة",
        sum3Title: "تواصل معنا أولاً",
        sum3Sub: "تواصل معنا قبل الاعتراضات المالية"
      }
    }
  };

  const getInitialLang = () => {
    try {
      const urlLang = new URLSearchParams(window.location.search).get("lang");
      if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch (_) {
      // Ignore storage/URL errors in restricted contexts
    }
    return "en";
  };

  const getValue = (dict, keyPath) => {
    const parts = keyPath.split(".");
    let cur = dict;
    for (const part of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, part)) {
        cur = cur[part];
      } else {
        return undefined;
      }
    }
    return cur;
  };

  const lookup = (lang, key) => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const direct = getValue(dict, key);
    if (direct !== undefined) return direct;
    const fallback = getValue(TRANSLATIONS.en, key);
    return fallback !== undefined ? fallback : "";
  };

  let currentLang = getInitialLang();
  const listeners = new Set();

  const applyTranslations = (lang) => {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
    const root = document.documentElement;
    root.lang = currentLang;
    root.dir = currentLang === "ar" ? "rtl" : "ltr";

    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (_) {
      // Ignore storage errors
    }

    const pageKey = document.body?.dataset?.page || "home";
    const year = String(new Date().getFullYear());

    // Update text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      let text = lookup(currentLang, key);
      if (typeof text === "string") {
        text = text.replace(/\{year\}/g, year);
        el.textContent = text;
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const text = lookup(currentLang, key);
      if (typeof text === "string") el.setAttribute("placeholder", text);
    });

    // Update aria-label attributes
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      const text = lookup(currentLang, key);
      if (typeof text === "string") el.setAttribute("aria-label", text);
    });

    // Update page SEO metadata
    const title = lookup(currentLang, `${pageKey}.metaTitle`);
    const desc = lookup(currentLang, `${pageKey}.metaDescription`);
    const ogLocale = lookup(currentLang, `${pageKey}.ogLocale`);

    if (title) {
      document.title = title;
      document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    }
    if (desc) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    }
    if (ogLocale) {
      let localeMeta = document.querySelector('meta[property="og:locale"]');
      if (!localeMeta) {
        localeMeta = document.createElement("meta");
        localeMeta.setAttribute("property", "og:locale");
        document.head.appendChild(localeMeta);
      }
      localeMeta.setAttribute("content", ogLocale);
    }

    // Update switcher buttons
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang-btn");
      const active = btnLang === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    listeners.forEach((fn) => {
      try {
        fn(currentLang);
      } catch (_) {
        // Prevent listener failure from breaking switch
      }
    });
  };

  window.ARABYLEAD_I18N = {
    getLang: () => currentLang,
    setLang: (lang) => applyTranslations(lang),
    t: (key) => lookup(currentLang, key),
    onChange: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };

  // Wire up switcher click handlers
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang-btn");
      if (next && next !== currentLang) {
        applyTranslations(next);
      }
    });
  });

  // Apply immediately at defer time before paint/reveal
  try {
    applyTranslations(currentLang);
  } finally {
    document.documentElement.removeAttribute("data-lang-loading");
  }
})();
