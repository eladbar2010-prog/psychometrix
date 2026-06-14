const allQuestions = [
    {
        topic: "אלגברה - שורשים", category: "algebra",
        question: "כמה שווה הביטוי הבא?<br><strong>$\\sqrt{12} + \\sqrt{27} = \\,?$</strong>",
        options: ["$5\\sqrt{3}$", "$\\sqrt{39}$", "$\\sqrt{15}$", "$13\\sqrt{3}$"],
        correct: 0,
        explanation: `<p><strong>דרך הפתרון:</strong></p>
            <p>$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$</p>
            <p>$\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$</p>
            <p>$2\\sqrt{3} + 3\\sqrt{3} = \\mathbf{5\\sqrt{3}}$.</p>
            <p>💡 לחבר שורשים — פרקו לשורש משותף.</p>`
    },
    {
        topic: "בעיות קצב ותנועה", category: "motion",
        question: "נמרוד אפה עוגיות בקצב קבוע של 25 עוגיות בשעה. הוא התחיל לאפות בשעה 8:00 בבוקר וסיים בשעה 12:00 בצהריים.<br>בשעה 9:00 בבוקר החל ספי לאכול את העוגיות שאפה נמרוד, בקצב קבוע של 15 עוגיות בשעה.<br><strong>באיזו שעה סיים ספי לאכול את כל העוגיות שאפה נמרוד?</strong>",
        options: ["13:40", "14:20", "15:40", "16:20"],
        correct: 2,
        explanation: `<p>4 שעות × 25 = 100 עוגיות. 100 ÷ 15 = 6⅔ שעות. 9:00 + 6:40 = <strong>15:40</strong>.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "ריצפו אולם ששטחו 625 מ\"ר. מחיר ריצוף 40% משטח האולם היה 500 שקלים.<br><strong>מה מחירו (בשקלים) של ריצוף 1 מ\"ר?</strong>",
        options: ["5", "2", "3", "4"],
        correct: 1,
        explanation: `<p>40% × 625 = 250 מ"ר. 500 ÷ 250 = <strong>2 ₪</strong>.</p>`
    },
    {
        topic: "תכונות מספרים", category: "algebra",
        question: "a ו-b הם מספרים שלמים.<br>נתון: 2a מתחלק ב-6, ו-2b מתחלק ב-2.<br><strong>איזו מהטענות הבאות נכונה בהכרח?</strong>",
        options: ["ab מתחלק ב-12","ab מתחלק ב-6, אך לא בהכרח ב-12","2ab מתחלק ב-8","2ab מתחלק ב-4, אך לא בהכרח ב-8"],
        correct: 1,
        explanation: `<p>a מתחלק ב-3. דוגמה: a=3, b=2 ⟹ ab=6 מתחלק ב-6 אך לא ב-12.</p>`
    },
    {
        topic: "בעיות גיל", category: "algebra",
        question: "במשפחת ארזי בנים ובנות. סכום הגילים של הבנים שווה לסכום גילי הבנות.<br>בעוד שנתיים יהיה סכום גילי הבנים גדול ב-6 מסכום גילי הבנות.<br><strong>מה ההפרש בין מספר הבנים לבין מספר הבנות?</strong>",
        options: ["0", "2", "3", "5"],
        correct: 2,
        explanation: `<p>$2n_1 - 2n_2 = 6 \\Rightarrow n_1 - n_2 = \\mathbf{3}$.</p>`
    },
    {
        topic: "אלגברה - משוואה לינארית", category: "algebra",
        question: "פתרו את המשוואה:<br><strong>$3(x - 4) = 2x + 5$</strong>",
        options: ["$x = 17$", "$x = 7$", "$x = -7$", "$x = 11$"],
        correct: 0,
        explanation: `<p>$3x-12=2x+5 \\Rightarrow x=\\mathbf{17}$.</p>`
    },
    {
        topic: "אחוזים - הנחה", category: "algebra",
        question: "מחיר מקורי של נעליים הוא 360 ₪. הנעליים עלו ב-20% ואחר כך הורדו ב-20%.<br><strong>מה מחיר הנעליים אחרי שתי הפעולות?</strong>",
        options: ["360 ₪", "345.60 ₪", "324 ₪", "288 ₪"],
        correct: 1,
        explanation: `<p>360 × 1.2 × 0.8 = 360 × 0.96 = <strong>345.60 ₪</strong>.</p>`
    },
    {
        topic: "גיאומטריה - שטח משולש", category: "geometry",
        question: "משולש ישר-זווית שאורך ניצביו 6 ס\"מ ו-8 ס\"מ.<br><strong>מה היקפו (בס\"מ)?</strong>",
        options: ["14", "24", "48", "28"],
        correct: 1,
        explanation: `<p>$c=\\sqrt{36+64}=10$. היקף = 6+8+10 = <strong>24</strong>.</p>`
    },
    {
        topic: "בעיות תנועה - מפגש", category: "motion",
        question: "שתי ערים מרוחקות 300 ק\"מ. רכב א' יוצא מעיר א' במהירות 60 קמ\"ש ורכב ב' מעיר ב' במהירות 90 קמ\"ש, בו-זמנית.<br><strong>כמה ק\"מ עבר רכב א' עד המפגש?</strong>",
        options: ["180 ק\"מ", "120 ק\"מ", "150 ק\"מ", "100 ק\"מ"],
        correct: 1,
        explanation: `<p>זמן = 300÷150=2 שעות. רכב א': 60×2 = <strong>120 ק"מ</strong>.</p>`
    },
    {
        topic: "תכונות מספרים - חלוקה עם שארית", category: "algebra",
        question: "מספר שלם חיובי N בחלוקה ב-7 משאיר שארית 3. מה השארית כשמחלקים $2N$ ב-7?",
        options: ["6", "1", "3", "5"],
        correct: 0,
        explanation: `<p>$2N=14k+6=7(2k)+6$. שארית: <strong>6</strong>.</p>`
    },
    {
        topic: "בעיות גיל", category: "algebra",
        question: "גיל אמיר כפול גיל בתו. בעוד 6 שנים יהיה גילו פי 1.5 מגיל בתו.<br><strong>מה גיל אמיר כיום?</strong>",
        options: ["30", "24", "12", "18"],
        correct: 2,
        explanation: `<p>$b=6$, אמיר = $2×6=\\mathbf{12}$.</p>`
    },
    {
        topic: "אלגברה - פירוק לגורמים", category: "algebra",
        question: "מה הפתרונות של $x^2 - 5x + 6 = 0$?",
        options: ["$x=2$ או $x=3$", "$x=-2$ או $x=-3$", "$x=1$ או $x=6$", "$x=2$ או $x=-3$"],
        correct: 0,
        explanation: `<p>$(x-2)(x-3)=0 \\Rightarrow x=2$ או $x=3$.</p>`
    },
    {
        topic: "גיאומטריה - היקף", category: "geometry",
        question: "לפרלוגרם בסיס 12 ס\"מ וצלע נטויה פי 1.3 מהבסיס.<br><strong>מה היקפו (בס\"מ)?</strong>",
        options: ["48.8", "56.4", "55.2", "62.4"],
        correct: 2,
        explanation: `<p>צלע נטויה = 15.6. היקף = 2×(12+15.6) = <strong>55.2</strong>.</p>`
    },
    {
        topic: "אחוזים - עלייה מצטברת", category: "algebra",
        question: "מחיר מוצר עלה ב-10% בינואר ועוד 10% בפברואר.<br><strong>באיזה אחוז עלה הכולל?</strong>",
        options: ["20%", "21%", "22%", "19%"],
        correct: 1,
        explanation: `<p>$1.1×1.1=1.21 \\Rightarrow \\mathbf{21\\%}$.</p>`
    },
    {
        topic: "בעיות מהירות - מרחק ממוצע", category: "motion",
        question: "אנה נסעה 60 ק\"מ במהירות 60 קמ\"ש וחזרה במהירות 40 קמ\"ש.<br><strong>מה מהירותה הממוצעת לכל הנסיעה (קמ\"ש)?</strong>",
        options: ["50", "48", "52", "45"],
        correct: 1,
        explanation: `<p>$\\frac{120}{1+1.5}=\\frac{120}{2.5}=\\mathbf{48}$ קמ"ש.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "מחשב הוזל ב-20%, ואחר כך עוד ב-10%.<br><strong>מה אחוז ההנחה הכולל?</strong>",
        options: ["28%", "30%", "32%", "70%"],
        correct: 0,
        explanation: `<p>$100×0.8×0.9=72 \\Rightarrow$ הנחה <strong>28%</strong>.</p>`
    },
    {
        topic: "אלגברה - משוואות", category: "algebra",
        question: "מספר אחד גדול ב-12 ממספר אחר. שלוש פעמים הקטן שווה פעמיים הגדול.<br><strong>מה סכום שני המספרים?</strong>",
        options: ["48", "60", "72", "84"],
        correct: 1,
        explanation: `<p>$3x=2(x+12) \\Rightarrow x=24$. סכום = $24+36=\\mathbf{60}$.</p>`
    },
    {
        topic: "אלגברה - שורשים", category: "algebra",
        question: "מה שווה $\\sqrt{50} - \\sqrt{8}$?",
        options: ["$3\\sqrt{2}$", "$\\sqrt{42}$", "$7\\sqrt{2}$", "$3\\sqrt{6}$"],
        correct: 0,
        explanation: `<p>$5\\sqrt{2}-2\\sqrt{2}=\\mathbf{3\\sqrt{2}}$.</p>`
    },
    {
        topic: "תכונות מספרים", category: "algebra",
        question: "a טבעי ו-$3a$ מתחלק ב-9.<br><strong>מה נכון בהכרח?</strong>",
        options: ["a מתחלק ב-3", "a מתחלק ב-9", "a מתחלק ב-6", "a זוגי"],
        correct: 0,
        explanation: `<p>$a=3k$, לכן a מתחלק ב-<strong>3</strong>.</p>`
    },
    {
        topic: "גיאומטריה - שטחים", category: "geometry",
        question: "אורך מלבן הוגדל ב-50%, רוחב הוקטן ב-20%.<br><strong>כיצד השתנה השטח?</strong>",
        options: ["גדל ב-20%", "גדל ב-30%", "קטן ב-10%", "לא השתנה"],
        correct: 0,
        explanation: `<p>$1.5×0.8=1.2 \\Rightarrow$ גדל ב-<strong>20%</strong>.</p>`
    },
    {
        topic: "גיאומטריה - יחס שטחים", category: "geometry",
        question: "צלע ריבוע א' גדולה פי 3 מצלע ריבוע ב'.<br><strong>פי כמה גדול שטח א' מב'?</strong>",
        options: ["3", "6", "9", "12"],
        correct: 2,
        explanation: `<p>$(3x)^2 / x^2 = \\mathbf{9}$.</p>`
    },
    {
        topic: "גיאומטריה - היקף ושטח", category: "geometry",
        question: "שטח מלבן 96 סמ\"ר, אורכו פי 1.5 מרוחבו.<br><strong>מה היקפו (ס\"מ)?</strong>",
        options: ["32", "36", "40", "44"],
        correct: 2,
        explanation: `<p>$w=8, l=12$. היקף = $2(8+12)=\\mathbf{40}$.</p>`
    },
    {
        topic: "גיאומטריה - נפח", category: "geometry",
        question: "צלע קוביה הוכפלה.<br><strong>פי כמה גדל נפחה?</strong>",
        options: ["2", "4", "6", "8"],
        correct: 3,
        explanation: `<p>$(2a)^3=8a^3 \\Rightarrow$ פי <strong>8</strong>.</p>`
    },
    {
        topic: "בעיות תנועה", category: "motion",
        question: "שני רוכבים מרוחקים 90 ק\"מ רוכבים זה לעבר זה במהירויות 20 ו-25 קמ\"ש.<br><strong>כעבור כמה שעות יפגשו?</strong>",
        options: ["1.5", "2", "2.5", "3"],
        correct: 1,
        explanation: `<p>$90÷(20+25)=90÷45=\\mathbf{2}$ שעות.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "מכונה א' ממלאת מכל ב-6 שעות, מכונה ב' ב-3 שעות.<br><strong>יחד כמה זמן?</strong>",
        options: ["1.5", "2", "2.5", "4.5"],
        correct: 1,
        explanation: `<p>$\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{2}$. זמן = <strong>2</strong> שעות.</p>`
    },
    {
        topic: "בעיות הספק - מילוי וריקון", category: "motion",
        question: "ברז ממלא בריכה ב-4 שעות, ניקוז מרוקן ב-12 שעות.<br><strong>שניהם פתוחים — כמה זמן למילוי?</strong>",
        options: ["3", "4", "6", "8"],
        correct: 2,
        explanation: `<p>$\\frac{1}{4}-\\frac{1}{12}=\\frac{1}{6}$. זמן = <strong>6</strong> שעות.</p>`
    },
    {
        topic: "בעיות מהירות ממוצעת", category: "motion",
        question: "מכונית הלכה במהירות 60 קמ\"ש וחזרה ב-40 קמ\"ש.<br><strong>מהירות ממוצעת (קמ\"ש)?</strong>",
        options: ["48", "50", "52", "55"],
        correct: 0,
        explanation: `<p>$\\frac{2d}{d/60+d/40}=\\mathbf{48}$ קמ"ש.</p>`
    },
    {
        topic: "ממוצעים משוקללים", category: "algebra",
        question: "12 בנים ממוצע 80, 8 בנות ממוצע 90.<br><strong>ממוצע הכיתה?</strong>",
        options: ["83", "84", "85", "86"],
        correct: 1,
        explanation: `<p>$(960+720)÷20=\\mathbf{84}$.</p>`
    },
    {
        topic: "יחס ופרופורציה", category: "algebra",
        question: "יחס אנגלית:צרפתית:ספרדית = 5:3:2. ספרדית = 18 תלמידים.<br><strong>כמה לומדים אנגלית?</strong>",
        options: ["40", "45", "50", "54"],
        correct: 1,
        explanation: `<p>חלק = 9. אנגלית = $5×9=\\mathbf{45}$.</p>`
    },
    {
        topic: "סדרות מספרים", category: "algebra",
        question: "בסדרה $2, 5, 11, 23, 47, \\ldots$ כל איבר = קודם×2+1.<br><strong>האיבר הבא?</strong>",
        options: ["89", "94", "95", "96"],
        correct: 2,
        explanation: `<p>$47×2+1=\\mathbf{95}$.</p>`
    },
    {
        topic: "גיאומטריה - עיגולים", category: "geometry",
        question: "רדיוס עיגול הוכפל.<br><strong>באיזה אחוז גדל השטח?</strong>",
        options: ["100%", "200%", "300%", "400%"],
        correct: 2,
        explanation: `<p>$\\pi(2r)^2=4\\pi r^2 \\Rightarrow$ גדל ב-<strong>300%</strong>.</p>`
    },
    {
        topic: "גיאומטריה - משולשים דומים", category: "geometry",
        question: "שני משולשים דומים, צלעות הקטן מחצית הגדול. שטח הקטן = 8 סמ\"ר.<br><strong>שטח הגדול?</strong>",
        options: ["16", "24", "32", "40"],
        correct: 2,
        explanation: `<p>$8×2^2=\\mathbf{32}$.</p>`
    },
    {
        topic: "גיאומטריה - חלוקת מלבן", category: "geometry",
        question: "מלבן 20×12 חולק לשני חצאים שווים לאורך.<br><strong>היקף כל מלבן קטן (ס\"מ)?</strong>",
        options: ["32", "36", "40", "44"],
        correct: 3,
        explanation: `<p>10×12. היקף = $2(10+12)=\\mathbf{44}$.</p>`
    },
    {
        topic: "בעיות מרחק - התרחקות", category: "motion",
        question: "שני רצים רצים באותו כיוון: 10 ו-14 קמ\"ש.<br><strong>כעבור כמה שעות יהיה ביניהם 6 ק\"מ?</strong>",
        options: ["1", "1.5", "2", "2.5"],
        correct: 1,
        explanation: `<p>$6÷(14-10)=6÷4=\\mathbf{1.5}$ שעות.</p>`
    },
    {
        topic: "מהירות וזמן - שינוי יחסי", category: "motion",
        question: "מהירות מכונית גדלה ב-25%.<br><strong>באיזה אחוז יקטן זמן הנסיעה?</strong>",
        options: ["20%", "25%", "30%", "33.3%"],
        correct: 0,
        explanation: `<p>$1/1.25=0.8 \\Rightarrow$ ירידה של <strong>20%</strong>.</p>`
    },
    {
        topic: "בעיות הספק - שלושה עובדים", category: "motion",
        question: "עובד א' מסיים ב-4 שעות, ב' ב-6, ג' ב-12.<br><strong>שלושתם יחד — כמה זמן?</strong>",
        options: ["1.5", "2", "2.5", "3"],
        correct: 1,
        explanation: `<p>$\\frac{1}{4}+\\frac{1}{6}+\\frac{1}{12}=\\frac{1}{2}$. זמן = <strong>2</strong> שעות.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "קצב רוני פי 3 מקצב דנה. יחד אכלו $\\frac{1}{5}$ פיצה ב-8 דקות.<br><strong>דנה לבד — כמה דקות לפיצה שלמה?</strong>",
        options: ["120", "140", "160", "180"],
        correct: 2,
        explanation: `<p>$4x=\\frac{1}{40} \\Rightarrow x=\\frac{1}{160}$. זמן = <strong>160</strong> דקות.</p>`
    },
    {
        topic: "תכונות מספרים - ראשוניים", category: "algebra",
        question: "כמה מספרים דו-ספרתיים שסכום ספרותיהם 8 הם ראשוניים?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: `<p>17, 53, 71 — <strong>3</strong> מספרים.</p>`
    },
    {
        topic: "אחוזים - תערובת", category: "algebra",
        question: "150 כדורים (60% אדום, 40% כחול). הוסיפו 50 אדומים.<br><strong>אחוז הכחולים כעת?</strong>",
        options: ["20%", "25%", "30%", "33.3%"],
        correct: 2,
        explanation: `<p>$60÷200=\\mathbf{30\\%}$.</p>`
    },
    {
        topic: "אלגברה - בעיית ספורט", category: "algebra",
        question: "שתי קבוצות קלעו 24 סלים. שחקן קלע מחצית סלי קבוצתו, וקטן ב-3 מהיריבה.<br><strong>כמה סלים קלעה קבוצתו?</strong>",
        options: ["12", "14", "16", "18"],
        correct: 1,
        explanation: `<p>$\\frac{T}{2}=21-T \\Rightarrow T=\\mathbf{14}$.</p>`
    },
    {
        topic: "גיאומטריה - זוויות במצולעים", category: "geometry",
        question: "מה ההפרש בין סכום הזוויות של מצולע 19 צלעות למצולע 13 צלעות?",
        options: ["360°", "720°", "1080°", "1440°"],
        correct: 2,
        explanation: `<p>$(19-13)×180°=\\mathbf{1080°}$.</p>`
    },
    {
        topic: "תכונות מספרים - ערך מוחלט", category: "algebra",
        question: "a שלילי. מה שווה $|a| \\times a$?",
        options: ["$a^2$", "$-a^2$", "$a$", "$-a$"],
        correct: 1,
        explanation: `<p>$|a|=-a \\Rightarrow (-a)×a=\\mathbf{-a^2}$.</p>`
    },
    {
        topic: "לוגיקה - מפתחות ודלתות", category: "algebra",
        question: "לנועה 4 דלתות ו-4 מפתחות. מה מספר הניסיונות המקסימלי עד פתיחת כולן?",
        options: ["7", "8", "9", "10"],
        correct: 3,
        explanation: `<p>$4+3+2+1=\\mathbf{10}$.</p>`
    },
    {
        topic: "עצרת (פקטוריאל)", category: "algebra",
        question: "$(2k)!$ שווה למכפלת כל המספרים ה-:",
        options: ["השלמים מ-1 עד $2k$", "הזוגיים מ-2 עד $2k$", "השלמים מ-1 עד $k!$", "הזוגיים מ-2 עד $k!$"],
        correct: 0,
        explanation: `<p>עצרת = מכפלת כל השלמים מ-1 עד $2k$.</p>`
    },
    {
        topic: "ספרות ומספרים", category: "algebra",
        question: "$AB - BA = 27$. מה שווה $A-B$?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: `<p>$9(A-B)=27 \\Rightarrow A-B=\\mathbf{3}$.</p>`
    },
    {
        topic: "פעולה מוגדרת", category: "algebra",
        question: "$\\$(x)=x^2+1$. מה שווה $\\$(\\$(1))$?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: `<p>$\\$(1)=2$. $\\$(2)=4+1=\\mathbf{5}$.</p>`
    },
    {
        topic: "חוקי חזקות", category: "algebra",
        question: "נתון $2^{x+1}=32$. מה שווה $x$?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: `<p>$2^5=32 \\Rightarrow x+1=5 \\Rightarrow x=\\mathbf{4}$.</p>`
    },
    {
        topic: "חוקי חזקות - שני משתנים", category: "algebra",
        question: "$3^a=81$ ו-$2^b=64$. מה $a-b$?",
        options: ["-2", "-1", "1", "2"],
        correct: 0,
        explanation: `<p>$a=4, b=6$. $4-6=\\mathbf{-2}$.</p>`
    },
    {
        topic: "משוואה ריבועית - הפרש ריבועים", category: "algebra",
        question: "מה סכום פתרונות $x^2-9=0$?",
        options: ["0", "3", "6", "9"],
        correct: 0,
        explanation: `<p>$x=3$ או $x=-3$. סכום = <strong>0</strong>.</p>`
    },
    {
        topic: "משוואה ריבועית - ריבוע סכום", category: "algebra",
        question: "מה סכום פתרונות $(x-2)^2=16$?",
        options: ["0", "2", "4", "6"],
        correct: 2,
        explanation: `<p>$x=6$ או $x=-2$. סכום = <strong>4</strong>.</p>`
    },
    {
        topic: "אי-שוויונות", category: "algebra",
        question: "נתון $2<x<5$. מה נכון בהכרח?",
        options: ["$x>4$", "$x<4$", "$x>1$", "$x=3$"],
        correct: 2,
        explanation: `<p>$x>2>1 \\Rightarrow x>\\mathbf{1}$.</p>`
    },
    {
        topic: "חוקי חזקות - שילוב", category: "algebra",
        question: "מה שווה $\\dfrac{a^5 \\cdot a^{-2}}{a^{-1}}$?",
        options: ["$a^2$", "$a^3$", "$a^4$", "$a^6$"],
        correct: 2,
        explanation: `<p>$a^{5-2-(-1)}=a^{\\mathbf{4}}$.</p>`
    },
    {
        topic: "חוקי שורשים - שורש שלישי", category: "algebra",
        question: "מה שווה $\\sqrt[3]{8} + \\sqrt{16}$?",
        options: ["6", "8", "10", "12"],
        correct: 0,
        explanation: `<p>$2+4=\\mathbf{6}$.</p>`
    },
    {
        topic: "פישוט שבר אלגברי", category: "algebra",
        question: "מה שווה $\\dfrac{x^2-4}{x+2}$ (עבור $x \\neq -2$)?",
        options: ["$x-2$", "$x+2$", "$x^2-2$", "$2x$"],
        correct: 0,
        explanation: `<p>$(x-2)(x+2)/(x+2)=\\mathbf{x-2}$.</p>`
    },
    {
        topic: "מערכת משוואות", category: "algebra",
        question: "$x+y=10$ ו-$x-y=4$. מה שווה $x \\cdot y$?",
        options: ["18", "21", "24", "28"],
        correct: 1,
        explanation: `<p>$x=7, y=3$. $7×3=\\mathbf{21}$.</p>`
    },
    {
        topic: "סדרה הנדסית", category: "algebra",
        question: "סדרה הנדסית $a_1=3$, $q=2$. מה $a_5$?",
        options: ["24", "36", "48", "96"],
        correct: 2,
        explanation: `<p>$3×2^4=3×16=\\mathbf{48}$.</p>`
    },
    {
        topic: "סדרה חשבונית - סכום", category: "algebra",
        question: "סדרה חשבונית $a_1=2$, $d=3$. מה $S_{10}$?",
        options: ["145", "150", "155", "160"],
        correct: 2,
        explanation: `<p>$S_{10}=5[4+27]=\\mathbf{155}$.</p>`
    },
    {
        topic: "אחוזים - משוואה הפוכה", category: "algebra",
        question: "מספר לאחר הגדלה ב-50% נותן 60. מה המספר המקורי?",
        options: ["30", "35", "40", "45"],
        correct: 2,
        explanation: `<p>$60÷1.5=\\mathbf{40}$.</p>`
    },
    {
        topic: "חזקות ושברים", category: "algebra",
        question: "מה שווה $\\left(\\dfrac{2}{5}\\right)^{-1} \\times \\left(\\dfrac{1}{2}\\right)^2$?",
        options: ["$\\dfrac{5}{8}$", "$\\dfrac{5}{2}$", "$\\dfrac{2}{5}$", "$\\dfrac{8}{5}$"],
        correct: 0,
        explanation: `<p>$\\frac{5}{2}×\\frac{1}{4}=\\mathbf{\\frac{5}{8}}$.</p>`
    },
    {
        topic: "גיאומטריה - פיתגורס", category: "geometry",
        question: `בסרטוט שלפניכם משולש ישר זווית, אורכי שני הניצבים הם 3 ס"מ ו-4 ס"מ.<br>
<svg viewBox="0 0 170 145" xmlns="http://www.w3.org/2000/svg">
  <polygon points="25,120 25,15 125,120" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <polyline points="35,120 35,110 25,110" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="6" y="73" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="600" text-anchor="middle">3</text>
  <text x="75" y="140" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="600" text-anchor="middle">4</text>
</svg>
<strong>מה אורך היתר (בס"מ)?</strong>`,
        options: ["5", "6", "7", "12"],
        correct: 0,
        explanation: `<p>$3^2+4^2=25 \\Rightarrow c=\\mathbf{5}$.</p>`
    },
    {
        topic: "גיאומטריה - זוויות במשולש", category: "geometry",
        question: `בסרטוט שלפניכם משולש, שתי זוויותיו 50° ו-70°.<br>
<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,115 180,115 100,15" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="28" y="108" font-size="13" fill="currentColor" font-family="sans-serif" font-weight="600">50°</text>
  <text x="136" y="108" font-size="13" fill="currentColor" font-family="sans-serif" font-weight="600">70°</text>
  <text x="93" y="11" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="700" text-anchor="middle">x</text>
</svg>
<strong>מה שווה הזווית $x$?</strong>`,
        options: ["50°", "60°", "70°", "80°"],
        correct: 1,
        explanation: `<p>$180°-50°-70°=\\mathbf{60°}$.</p>`
    },
    {
        topic: "גיאומטריה - מעגל", category: "geometry",
        question: `בסרטוט שלפניכם עיגול שרדיוסו 10 ס"מ.<br>
<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="75" cy="75" r="60" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="75" y1="75" x2="135" y2="75" stroke="currentColor" stroke-width="2"/>
  <circle cx="75" cy="75" r="3.5" fill="currentColor"/>
  <text x="98" y="68" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="600" text-anchor="middle">10</text>
</svg>
<strong>מה היקף העיגול (בס"מ)? ($\pi \approx 3.14$)</strong>`,
        options: ["31.4", "62.8", "100", "314"],
        correct: 1,
        explanation: `<p>$2×3.14×10=\\mathbf{62.8}$.</p>`
    },
    {
        topic: "גיאומטריה - אלכסון מלבן", category: "geometry",
        question: `בסרטוט שלפניכם מלבן שאורכו 12 ורוחבו 5.<br>
<svg viewBox="0 0 195 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="22" width="140" height="55" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <line x1="20" y1="22" x2="160" y2="77" stroke="currentColor" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="90" y="16" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="600" text-anchor="middle">12</text>
  <text x="170" y="54" font-size="15" fill="currentColor" font-family="sans-serif" font-weight="600" text-anchor="middle">5</text>
</svg>
<strong>מה אורך האלכסון המסומן?</strong>`,
        options: ["12", "13", "14", "17"],
        correct: 1,
        explanation: `<p>$\\sqrt{144+25}=\\sqrt{169}=\\mathbf{13}$.</p>`
    },

    // ══════════════════════════════════════
    // אלגברה — 10 שאלות
    // ══════════════════════════════════════
    {
        topic: "חוקי חזקות", category: "algebra",
        question: "מה שווה $\\dfrac{3^8}{3^5 \\cdot 3}$?",
        options: ["$3$", "$9$", "$27$", "$81$"],
        correct: 1,
        explanation: `<p>$3^5\\cdot3=3^6$. $\\dfrac{3^8}{3^6}=3^{8-6}=3^2=\\mathbf{9}$.</p>`
    },
    {
        topic: "חוקי חזקות", category: "algebra",
        question: "נתון $4^x = 64$. מה שווה $4^{x-1}$?",
        options: ["4", "8", "16", "32"],
        correct: 2,
        explanation: `<p>$64=4^3 \\Rightarrow x=3$. $4^{x-1}=4^2=\\mathbf{16}$.</p>`
    },
    {
        topic: "חוקי חזקות", category: "algebra",
        question: "מה שווה $\\dfrac{(2^3)^4}{2^{10}}$?",
        options: ["$2$", "$4$", "$8$", "$16$"],
        correct: 1,
        explanation: `<p>$(2^3)^4=2^{12}$. $\\dfrac{2^{12}}{2^{10}}=2^{12-10}=2^2=\\mathbf{4}$.</p>`
    },
    {
        topic: "חוקי חזקות", category: "algebra",
        question: "מה שווה $5^0 + 5^1 + 5^{-1}$?",
        options: ["$6$", "$6.2$", "$6\\dfrac{1}{5}$", "$7$"],
        correct: 1,
        explanation: `<p>$5^0=1,\\;5^1=5,\\;5^{-1}=\\dfrac{1}{5}$. סכום: $1+5+0.2=\\mathbf{6.2}$.</p>`
    },
    {
        topic: "חוקי שורשים", category: "algebra",
        question: "מה שווה $\\sqrt{75} - \\sqrt{48}$?",
        options: ["$\\sqrt{3}$", "$2\\sqrt{3}$", "$3\\sqrt{3}$", "$\\sqrt{27}$"],
        correct: 0,
        explanation: `<p>$\\sqrt{75}=5\\sqrt{3},\\;\\sqrt{48}=4\\sqrt{3}$. $5\\sqrt{3}-4\\sqrt{3}=\\mathbf{\\sqrt{3}}$.</p>`
    },
    {
        topic: "חוקי שורשים", category: "algebra",
        question: "מה שווה $\\dfrac{\\sqrt{98}}{\\sqrt{2}}$?",
        options: ["$5$", "$6$", "$7$", "$8$"],
        correct: 2,
        explanation: `<p>$\\dfrac{\\sqrt{98}}{\\sqrt{2}}=\\sqrt{\\dfrac{98}{2}}=\\sqrt{49}=\\mathbf{7}$.</p>`
    },
    {
        topic: "נוסחאות כפל מקוצר", category: "algebra",
        question: "מה שווה $\\dfrac{x^2-25}{x-5}$ עבור $x\\neq5$?",
        options: ["$x-5$", "$x+5$", "$x^2+5$", "$5x$"],
        correct: 1,
        explanation: `<p>$x^2-25=(x-5)(x+5)$. $\\dfrac{(x-5)(x+5)}{x-5}=\\mathbf{x+5}$.</p>`
    },
    {
        topic: "נוסחאות כפל מקוצר", category: "algebra",
        question: "מה שווה $49^2 - 51^2$?",
        options: ["-100", "-200", "-400", "-500"],
        correct: 1,
        explanation: `<p>$(49-51)(49+51)=(-2)(100)=\\mathbf{-200}$.</p><p>💡 $a^2-b^2=(a-b)(a+b)$ — הרבה מהיר מחישוב ישיר.</p>`
    },
    {
        topic: "מערכת משוואות", category: "algebra",
        question: "נתון: $2x+y=11$ וגם $x+2y=10$. מה שווה $x+y$?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: `<p>נחבר: $3x+3y=21 \\Rightarrow x+y=\\mathbf{7}$.</p><p>💡 לא תמיד צריך לפתור — לפעמים חיבור ישיר של המשוואות מספיק.</p>`
    },
    {
        topic: "סדרה חשבונית", category: "algebra",
        question: "סכום 20 האיברים הראשונים של סדרה חשבונית הוא 400. מה הממוצע שלהם?",
        options: ["10", "15", "20", "25"],
        correct: 2,
        explanation: `<p>ממוצע $=\\dfrac{S_n}{n}=\\dfrac{400}{20}=\\mathbf{20}$.</p>`
    },

    // ══════════════════════════════════════
    // אחוזים ויחסים — 10 שאלות
    // ══════════════════════════════════════
    {
        topic: "אחוזים", category: "algebra",
        question: "מחיר מוצר עלה ב-20% ולאחר מכן ירד ב-20%. מה השינוי הכולל?",
        options: ["ירד ב-4%", "לא השתנה", "עלה ב-4%", "ירד ב-2%"],
        correct: 0,
        explanation: `<p>$100\\times1.2\\times0.8=96 \\Rightarrow$ ירידה של $\\mathbf{4\\%}$.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "18 הוא כמה אחוז מ-72?",
        options: ["20%", "25%", "30%", "40%"],
        correct: 1,
        explanation: `<p>$\\dfrac{18}{72}\\times100=\\dfrac{1}{4}\\times100=\\mathbf{25\\%}$.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "מספר גדל ב-40% ואז שוב ב-40%. כמה אחוז גדל בסך הכל?",
        options: ["80%", "96%", "100%", "116%"],
        correct: 1,
        explanation: `<p>$100\\times1.4\\times1.4=196 \\Rightarrow$ גידול של $\\mathbf{96\\%}$.</p>`
    },
    {
        topic: "יחס ופרופורציה", category: "algebra",
        question: "היחס בין $a$ ל-$b$ הוא $3:5$. מה שווה $\\dfrac{2a+b}{a+2b}$?",
        options: ["$\\dfrac{11}{13}$", "$\\dfrac{9}{11}$", "$\\dfrac{7}{9}$", "$\\dfrac{5}{7}$"],
        correct: 0,
        explanation: `<p>נציב $a=3k, b=5k$: $\\dfrac{6k+5k}{3k+10k}=\\dfrac{11k}{13k}=\\mathbf{\\dfrac{11}{13}}$.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "קנינו מוצר ב-340 ₪ לאחר הנחה של 15%. מה היה המחיר המקורי?",
        options: ["380 ₪", "390 ₪", "400 ₪", "410 ₪"],
        correct: 2,
        explanation: `<p>$x\\times0.85=340 \\Rightarrow x=\\dfrac{340}{0.85}=\\mathbf{400}$ ₪.</p><p>💡 אל תוסיפו 15% ל-340 — חלקו ב-0.85.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "בחנות A מחיר מוצר 500 ₪ עם הנחה 30%. בחנות B אותו מוצר 380 ₪. בכמה זול יותר בחנות A?",
        options: ["20 ₪", "25 ₪", "30 ₪", "35 ₪"],
        correct: 2,
        explanation: `<p>חנות A: $500\\times0.7=350$ ₪. הפרש: $380-350=\\mathbf{30}$ ₪.</p>`
    },
    {
        topic: "יחס ופרופורציה", category: "algebra",
        question: "8 פועלים מסיימים עבודה ב-15 ימים. כמה ימים יידרשו ל-12 פועלים?",
        options: ["8", "9", "10", "12"],
        correct: 2,
        explanation: `<p>יחידות עבודה: $8\\times15=120$. ל-12 פועלים: $\\dfrac{120}{12}=\\mathbf{10}$ ימים.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "ציון עלה מ-60 ל-75. כמה אחוז עלה?",
        options: ["20%", "25%", "30%", "15%"],
        correct: 1,
        explanation: `<p>$\\dfrac{75-60}{60}\\times100=\\dfrac{15}{60}\\times100=\\mathbf{25\\%}$.</p>`
    },
    {
        topic: "אחוזים", category: "algebra",
        question: "בכיתה 40% בנים. אחרי שהצטרפו 5 בנים נוספים, הבנים הם 50% מהכיתה. כמה תלמידים היו בהתחלה?",
        options: ["20", "25", "30", "40"],
        correct: 1,
        explanation: `<p>$0.4n+5=0.5(n+5) \\Rightarrow 0.4n+5=0.5n+2.5 \\Rightarrow 0.1n=2.5 \\Rightarrow n=\\mathbf{25}$.</p>`
    },
    {
        topic: "יחס ופרופורציה", category: "algebra",
        question: "תערובת מים ואלכוהול ביחס $3:1$. כמה ליטר אלכוהול יש ב-20 ליטר תערובת?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: `<p>$\\dfrac{1}{4}\\times20=\\mathbf{5}$ ליטר.</p>`
    },

    // ══════════════════════════════════════
    // תנועה והספק — 10 שאלות
    // ══════════════════════════════════════
    {
        topic: "בעיות תנועה", category: "motion",
        question: "רכבת מ-A ל-B במהירות 80 קמ\"ש ורכבת שנייה מ-B ל-A במהירות 120 קמ\"ש, יוצאות בו-זמנית. מרחק: 400 ק\"מ. כעבור כמה שעות ייפגשו?",
        options: ["1.5", "2", "2.5", "3"],
        correct: 1,
        explanation: `<p>מהירות התקרבות: $80+120=200$ קמ"ש. זמן: $\\dfrac{400}{200}=\\mathbf{2}$ שעות.</p>`
    },
    {
        topic: "בעיות תנועה", category: "motion",
        question: "אדם נסע $\\dfrac{1}{2}$ מהמרחק במהירות 60 קמ\"ש ואת שארית המרחק במהירות 40 קמ\"ש. הנסיעה ארכה שעה אחת. מה המרחק הכולל (בק\"מ)?",
        options: ["36", "40", "48", "60"],
        correct: 2,
        explanation: `<p>$\\dfrac{d/2}{60}+\\dfrac{d/2}{40}=1 \\Rightarrow \\dfrac{d}{120}+\\dfrac{d}{80}=\\dfrac{2d+3d}{240}=\\dfrac{5d}{240}=1 \\Rightarrow d=\\mathbf{48}$ ק"מ.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "ברז א' ממלא בריכה ב-3 שעות, ברז ב' ב-6 שעות. כמה זמן יידרש למלאה יחד?",
        options: ["1.5", "2", "2.5", "3"],
        correct: 1,
        explanation: `<p>$\\dfrac{1}{3}+\\dfrac{1}{6}=\\dfrac{1}{2}$. זמן: $\\mathbf{2}$ שעות.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "5 מכונות מייצרות 100 יחידות ב-4 שעות. כמה מכונות ייצרו 200 יחידות ב-2 שעות?",
        options: ["10", "15", "20", "25"],
        correct: 2,
        explanation: `<p>קצב מכונה: $\\dfrac{100}{5\\times4}=5$ יחידות/שעה. נדרש: $\\dfrac{200}{2}=100$ יחידות/שעה. $\\dfrac{100}{5}=\\mathbf{20}$ מכונות.</p>`
    },
    {
        topic: "בעיות תנועה", category: "motion",
        question: "אופניים עשו 10 ק\"מ מ-A ל-B ב-30 דקות וחזרו ב-20 דקות. מה המהירות הממוצעת לכל הנסיעה (קמ\"ש)?",
        options: ["20", "24", "25", "30"],
        correct: 1,
        explanation: `<p>זמן כולל: $50$ דקות $=\\dfrac{5}{6}$ שעה. מרחק: $20$ ק"מ. מהירות: $\\dfrac{20}{5/6}=\\mathbf{24}$ קמ"ש.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "עובד א' מסיים ב-8 ימים, ב' ב-12 ימים. עבדו יחד 2 ימים ואז א' עזב. כמה ימים נוספים נדרשים ל-ב' לסיים?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: `<p>קצב משולב: $\\frac{1}{8}+\\frac{1}{12}=\\frac{5}{24}$. אחרי 2 ימים בוצע: $\\frac{10}{24}=\\frac{5}{12}$. נותר: $\\frac{7}{12}$. ב' לבד: $\\frac{7/12}{1/12}=\\mathbf{7}$ ימים.</p>`
    },
    {
        topic: "בעיות תנועה", category: "motion",
        question: "מכונית נוסעת 120 ק\"מ. אילו נסעה מהר ב-20 קמ\"ש, הייתה חוסכת שעה. מה המהירות המקורית (קמ\"ש)?",
        options: ["30", "40", "50", "60"],
        correct: 1,
        explanation: `<p>$\\dfrac{120}{v}-\\dfrac{120}{v+20}=1 \\Rightarrow 2400=v^2+20v \\Rightarrow v^2+20v-2400=0 \\Rightarrow (v+60)(v-40)=0 \\Rightarrow v=\\mathbf{40}$ קמ"ש.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "ברז ממלא בריכה ב-4 שעות. ניקוז מרוקן ב-6 שעות. פתחו שניהם כשהבריכה מלאה ב-$\\dfrac{3}{4}$. כמה שעות עד מילוי מלא?",
        options: ["3", "4.5", "6", "9"],
        correct: 0,
        explanation: `<p>קצב נטו: $\\frac{1}{4}-\\frac{1}{6}=\\frac{1}{12}$ לשעה. נותר: $\\frac{1}{4}$. זמן: $\\dfrac{1/4}{1/12}=\\mathbf{3}$ שעות.</p>`
    },
    {
        topic: "בעיות תנועה", category: "motion",
        question: "שני אנשים הולכים לקראת זה זה. A הולך 6 קמ\"ש ו-B הולך 4 קמ\"ש. נפגשו אחרי 30 דקות. מה המרחק ההתחלתי (בק\"מ)?",
        options: ["4", "5", "5.5", "6"],
        correct: 1,
        explanation: `<p>מהירות התקרבות: $6+4=10$ קמ"ש. 30 דקות $=\\frac{1}{2}$ שעה. מרחק: $10\\times\\frac{1}{2}=\\mathbf{5}$ ק"מ.</p>`
    },
    {
        topic: "בעיות הספק", category: "motion",
        question: "א' מסיים עבודה ב-6 שעות, ב' ב-4 שעות, ג' ב-3 שעות. כמה שעות יידרשו לשלושתם יחד?",
        options: ["$\\dfrac{3}{4}$", "$1$", "$\\dfrac{4}{3}$", "$\\dfrac{3}{2}$"],
        correct: 2,
        explanation: `<p>$\\frac{1}{6}+\\frac{1}{4}+\\frac{1}{3}=\\frac{2+3+4}{12}=\\frac{9}{12}=\\frac{3}{4}$. זמן: $\\dfrac{1}{3/4}=\\mathbf{\\dfrac{4}{3}}$ שעות.</p>`
    },

    // ══════════════════════════════════════
    // גיאומטריה — 10 שאלות
    // ══════════════════════════════════════
    {
        topic: "גיאומטריה - שטחים", category: "geometry",
        question: "שטח ריבוע הוא 144 סמ\"ר. מה ההיקף שלו (בס\"מ)?",
        options: ["36", "40", "44", "48"],
        correct: 3,
        explanation: `<p>צלע: $\\sqrt{144}=12$. היקף: $4\\times12=\\mathbf{48}$ ס"מ.</p>`
    },
    {
        topic: "גיאומטריה - עיגולים", category: "geometry",
        question: "שטח עיגול הוא $36\\pi$ סמ\"ר. מה היקפו?",
        options: ["$6\\pi$", "$9\\pi$", "$12\\pi$", "$18\\pi$"],
        correct: 2,
        explanation: `<p>$\\pi r^2=36\\pi \\Rightarrow r=6$. היקף: $2\\pi\\times6=\\mathbf{12\\pi}$.</p>`
    },
    {
        topic: "גיאומטריה - נפח", category: "geometry",
        question: "גליל שרדיוסו 3 ס\"מ וגובהו 5 ס\"מ. מה נפחו?",
        options: ["$30\\pi$", "$45\\pi$", "$60\\pi$", "$90\\pi$"],
        correct: 1,
        explanation: `<p>$V=\\pi r^2 h=\\pi\\times9\\times5=\\mathbf{45\\pi}$ סמ"ק.</p>`
    },
    {
        topic: "גיאומטריה - משולשים", category: "geometry",
        question: "משולש שווה-שוקיים שבסיסו 10 ס\"מ ושטחו 60 סמ\"ר. מה אורך כל שוקיים (בס\"מ)?",
        options: ["10", "11", "12", "13"],
        correct: 3,
        explanation: `<p>$\\frac{1}{2}\\times10\\times h=60 \\Rightarrow h=12$. שוקיים: $\\sqrt{5^2+12^2}=\\sqrt{169}=\\mathbf{13}$.</p>`
    },
    {
        topic: "גיאומטריה - זוויות", category: "geometry",
        question: "במצולע משוכלל בעל 10 צלעות, מה גודל כל זווית פנימית?",
        options: ["120°", "135°", "140°", "144°"],
        correct: 3,
        explanation: `<p>$(10-2)\\times180°=1440°$. כל זווית: $\\dfrac{1440}{10}=\\mathbf{144°}$.</p>`
    },
    {
        topic: "גיאומטריה - שטח טרפז", category: "geometry",
        question: "טרפז שבסיסיו 6 ס\"מ ו-10 ס\"מ, גובהו 4 ס\"מ. מה שטחו?",
        options: ["28", "32", "36", "40"],
        correct: 1,
        explanation: `<p>$S=\\dfrac{(6+10)}{2}\\times4=8\\times4=\\mathbf{32}$ סמ"ר.</p>`
    },
    {
        topic: "גיאומטריה - נפח", category: "geometry",
        question: "רדיוס כדור הוכפל. פי כמה גדל הנפח?",
        options: ["2", "4", "6", "8"],
        correct: 3,
        explanation: `<p>$V=\\frac{4}{3}\\pi r^3$. $(2r)^3/r^3=2^3=\\mathbf{8}$.</p>`
    },
    {
        topic: "גיאומטריה - עיגולים", category: "geometry",
        question: "גזרת מעגל שזווית ראשה 90° ורדיוסה 8 ס\"מ. מה שטחה?",
        options: ["$8\\pi$", "$16\\pi$", "$32\\pi$", "$64\\pi$"],
        correct: 1,
        explanation: `<p>$S=\\dfrac{90}{360}\\times\\pi\\times8^2=\\dfrac{1}{4}\\times64\\pi=\\mathbf{16\\pi}$.</p>`
    },
    {
        topic: "גיאומטריה - שטחים", category: "geometry",
        question: "אורך מלבן פי 3 מרוחבו, היקפו 48 ס\"מ. מה שטחו?",
        options: ["96", "108", "120", "135"],
        correct: 1,
        explanation: `<p>$2(w+3w)=48 \\Rightarrow w=6$. שטח: $6\\times18=\\mathbf{108}$ סמ"ר.</p>`
    },
    {
        topic: "גיאומטריה - פיתגורס", category: "geometry",
        question: "במשולש ישר-זווית, ניצב אחד פי 2 מהשני. היתר: $\\sqrt{180}$ ס\"מ. מה הניצב הקצר?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: `<p>$x^2+(2x)^2=180 \\Rightarrow 5x^2=180 \\Rightarrow x^2=36 \\Rightarrow x=\\mathbf{6}$.</p>`
    }
];

// ══════════════════════════════════════════
//  localStorage
// ══════════════════════════════════════════
const LS_DATE='psychometrix_date', LS_DAILY='psychometrix_daily_answered',
      LS_TOTAL='psychometrix_total_answered', LS_CORRECT='psychometrix_total_correct',
      LS_POINTS='psychometrix_points', LS_NAME='user_name', LS_GOAL='user_goal';
const DAILY_GOAL=10, POINTS_GOAL=750, POINTS_RIGHT=10, QUIZ_SIZE=5;

function todayStr() { return new Date().toISOString().slice(0,10); }

function loadStorage() {
    if (localStorage.getItem(LS_DATE) !== todayStr()) {
        localStorage.setItem(LS_DATE, todayStr());
        localStorage.setItem(LS_DAILY, '0');
    }
    return {
        daily:   parseInt(localStorage.getItem(LS_DAILY)   ||'0',10),
        total:   parseInt(localStorage.getItem(LS_TOTAL)   ||'0',10),
        correct: parseInt(localStorage.getItem(LS_CORRECT) ||'0',10),
        points:  parseInt(localStorage.getItem(LS_POINTS)  ||'0',10),
    };
}

function addAnswered(wasCorrect) {
    const d = loadStorage();
    localStorage.setItem(LS_DAILY,   String(d.daily+1));
    localStorage.setItem(LS_TOTAL,   String(d.total+1));
    localStorage.setItem(LS_CORRECT, String(d.correct+(wasCorrect?1:0)));
    localStorage.setItem(LS_POINTS,  String(d.points+(wasCorrect?POINTS_RIGHT:0)));
}

function loadProfile() {
    return { name: localStorage.getItem(LS_NAME)||'', goal: localStorage.getItem(LS_GOAL)||'' };
}

function saveProfile(name, goal) {
    localStorage.setItem(LS_NAME, name);
    localStorage.setItem(LS_GOAL, goal);
}

let _selectedGoal = '';
let _onboardEditMode = false;

function selectGoal(btn) {
    document.querySelectorAll('.onboard-goal-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    _selectedGoal = btn.dataset.goal;
    validateOnboarding();
}

function validateOnboarding() {
    const name = (document.getElementById('onboard-name').value||'').trim();
    const btn = document.getElementById('onboard-start-btn');
    btn.disabled = !(name.length >= 2 && _selectedGoal);
}

function submitOnboarding() {
    const name = (document.getElementById('onboard-name').value||'').trim();
    if (!name || !_selectedGoal) return;
    saveProfile(name, _selectedGoal);
    _setNavVisible(true);
    if (_onboardEditMode) {
        showProfile();
    } else {
        showScreen('home-screen');
        setActiveNav('nav-home');
    }
    updateHomeUI();
}

function _setNavVisible(visible) {
    const nav = document.querySelector('.bottom-nav');
    if (nav) nav.style.display = visible ? '' : 'none';
}

function initApp() {
    const profile = loadProfile();
    if (!profile.name || !profile.goal) {
        _onboardEditMode = false;
        _selectedGoal = '';
        document.getElementById('onboard-name').value = '';
        document.querySelectorAll('.onboard-goal-btn').forEach(b => b.classList.remove('selected'));
        const startBtn = document.getElementById('onboard-start-btn');
        startBtn.textContent = 'יאללה נתחיל! 🚀';
        startBtn.disabled = true;
        _setNavVisible(false);
        showScreen('onboarding-screen');
        setActiveNav(null);
    } else {
        _setNavVisible(true);
        showScreen('home-screen');
        setActiveNav('nav-home');
        updateHomeUI();
    }
}

function showProfile() {
    const profile = loadProfile();
    const initial = profile.name ? profile.name[0].toUpperCase() : '?';
    document.getElementById('profile-avatar').textContent = initial;
    document.getElementById('profile-name-display').textContent = profile.name || '—';
    document.getElementById('profile-goal-display').textContent = profile.goal ? `ציון יעד: ${profile.goal} 🏆` : '—';
    showScreen('profile-screen');
    setActiveNav('nav-profile');
}

function openProfileEdit() {
    const profile = loadProfile();
    _onboardEditMode = true;
    _selectedGoal = profile.goal || '';
    document.getElementById('onboard-name').value = profile.name || '';
    document.querySelectorAll('.onboard-goal-btn').forEach(b => {
        b.classList.toggle('selected', b.dataset.goal === _selectedGoal);
    });
    const btn = document.getElementById('onboard-start-btn');
    btn.textContent = 'שמור שינויים ✅';
    validateOnboarding();
    _setNavVisible(false);
    showScreen('onboarding-screen');
    setActiveNav(null);
}

function updateHomeUI() {
    const d = loadStorage();
    const cap = Math.min(d.daily, DAILY_GOAL);
    document.getElementById('daily-progress-label').textContent = `התקדמות יומית: ${cap}/${DAILY_GOAL} שאלות 🎯`;
    document.getElementById('daily-bar-fill').style.width = `${(cap/DAILY_GOAL)*100}%`;
    document.getElementById('goal-value').textContent = `${d.points} 🏆`;
    ['algebra','geometry','motion'].forEach(cat => {
        const el = document.getElementById(`${cat}-count`);
        if (el) el.textContent = `${allQuestions.filter(q=>q.category===cat).length} שאלות`;
    });
    const profile = loadProfile();
    const name = profile.name;
    const greet = document.getElementById('greeting-text');
    if (greet) greet.textContent = name ? `היי ${name} 👋` : 'היי 👋';
    const avatarEl = document.getElementById('user-avatar');
    if (avatarEl) avatarEl.textContent = name ? name[0].toUpperCase() : '?';
}

// ══════════════════════════════════════════
//  מצב quiz
// ══════════════════════════════════════════
let currentQuizQuestions=[], currentIndex=0, score=0,
    answered=false, timerInterval=null, quizNoTimer=false;
const TOTAL_TIME=60;

function shuffleArray(arr) {
    const a=arr.slice();
    for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
    return a;
}
function pickQuestions(n){ return shuffleArray(allQuestions).slice(0,n); }

function showScreen(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function goHome(){
    clearInterval(timerInterval); updateHomeUI();
    showScreen('home-screen'); setActiveNav('nav-home');
}
function setActiveNav(id){
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    if(id){ const b=document.getElementById(id); if(b) b.classList.add('active'); }
}

function showStats(){
    const d=loadStorage();
    document.getElementById('stat-points').textContent  = d.points;
    document.getElementById('stat-total').textContent   = d.total;
    document.getElementById('stat-correct').textContent = d.correct;
    const pct = d.total>0 ? Math.round((d.correct/d.total)*100) : null;
    document.getElementById('stat-pct').textContent = pct!==null ? `${pct}%` : '—';
    const pp = Math.min(Math.round((d.points/POINTS_GOAL)*100),100);
    document.getElementById('stat-points-bar').style.width = `${pp}%`;
    document.getElementById('stat-points-label').textContent = `${d.points} / ${POINTS_GOAL} נקודות ליעד`;
    showScreen('stats-screen'); setActiveNav('nav-stats');
}

function confirmReset(){
    if(confirm('האם אתה בטוח שברצונך למחוק את כל הנתונים?')){
        [LS_DATE,LS_DAILY,LS_TOTAL,LS_CORRECT,LS_POINTS].forEach(k=>localStorage.removeItem(k));
        showStats(); updateHomeUI();
    }
}

function showComingSoon(area){
    document.getElementById('toast-text').textContent =
        area ? `מסך ה${area} ייפתח בקרוב! בינתיים בוא נתאמן! 🚀`
             : 'האימון הממוקד ייפתח בקרוב! 🚀';
    document.getElementById('toast-overlay').classList.add('show');
}
function closeToast(){ document.getElementById('toast-overlay').classList.remove('show'); }

const CATEGORY_LABELS = { algebra:'אלגברה ואחוזים 🔢', geometry:'גיאומטריה 📐', motion:'תנועה והספק 🏎️' };

function startQuiz(category){
    if(category){ showCategoryBooklet(category); return; }
    const genPool=[
        ...generateFromCategory('algebra',5),
        ...generateFromCategory('motion',5),
        ...generateFromCategory('geometry',5),
    ];
    const pool=shuffleArray([...allQuestions,...genPool]);
    currentIndex=0; score=0; quizNoTimer=false;
    currentQuizQuestions=pool.slice(0,QUIZ_SIZE);
    currentQuizQuestions._categoryLabel=null;
    showScreen('quiz-screen'); setActiveNav(null); loadQuestion(0);
}

function renderQuestionCard(q, i, list) {
    const card=document.createElement('div');
    card.className='cat-q-card';
    const badge=q.fromGen?` <span class="gen-badge">🎲</span>`:'';
    const optHtml=q.options.map((opt,idx)=>
        `<button class="option-btn" onclick="checkCategoryAnswer(this,${idx===q.correct},${q.correct},this.closest('.cat-q-card'))">(${idx+1})&nbsp;&nbsp;${opt}</button>`
    ).join('');
    card.innerHTML=`
        <div class="cat-q-header">
            <span class="cat-q-num">שאלה ${i+1}</span>
            <span class="cat-q-topic">${q.topic}${badge}</span>
        </div>
        <div class="question-box">${q.question}</div>
        <div class="options-list">${optHtml}</div>
        <div>
            <button class="explain-toggle-btn" onclick="toggleExplanation(this)">💡 הסבר</button>
            <div class="explanation-box" style="display:none"><div>${q.explanation}</div></div>
        </div>`;
    list.appendChild(card);
    return card;
}

let _bookletCategory='';

function showCategoryBooklet(category){
    _bookletCategory=category;
    const qs=shuffleArray(allQuestions.filter(q=>q.category===category));
    document.getElementById('category-screen-title').textContent = CATEGORY_LABELS[category];
    document.getElementById('category-screen-sub').textContent   = `${qs.length} שאלות — ענה בקצב שלך, אין טיימר`;
    const list=document.getElementById('category-questions-list');
    list.innerHTML='';
    qs.forEach((q,i)=>renderQuestionCard(q,i,list));
    _appendGenMoreBtn(list);
    showScreen('category-screen'); setActiveNav(null); typesetMath([list]);
}

function _appendGenMoreBtn(list) {
    const btn=document.createElement('button');
    btn.className='gen-more-btn';
    btn.textContent='🎲 צור 5 שאלות נוספות';
    btn.onclick=()=>_loadMoreGenerated();
    list.appendChild(btn);
}

function _loadMoreGenerated() {
    const list=document.getElementById('category-questions-list');
    const startIdx=list.querySelectorAll('.cat-q-card').length;
    list.querySelector('.gen-more-btn')?.remove();
    const generated=generateFromCategory(_bookletCategory,5);
    const newCards=generated.map((q,i)=>renderQuestionCard(q,startIdx+i,list));
    _appendGenMoreBtn(list);
    typesetMath(newCards);
    newCards[0]?.scrollIntoView({behavior:'smooth',block:'start'});
}

function checkCategoryAnswer(btn,isCorrect,correctIdx,card){
    if(card.dataset.answered) return;
    card.dataset.answered='1'; addAnswered(isCorrect); updateHomeUI();
    const all=card.querySelectorAll('.option-btn');
    all.forEach(b=>b.disabled=true);
    if(isCorrect){ btn.classList.add('correct'); }
    else { btn.classList.add('wrong'); all[correctIdx].classList.add('correct'); }
}

function toggleExplanation(btn){
    const box=btn.nextElementSibling;
    const open=box.style.display!=='none';
    box.style.display=open?'none':'block';
    btn.textContent=open?'💡 הסבר':'🔼 סגור הסבר';
    if(!open) typesetMath([box]);
}

function typesetMath(elements){
    if(window.MathJax && MathJax.typesetPromise){
        MathJax.typesetPromise(elements).catch(e=>console.error(e));
    } else if(window.MathJax && MathJax.startup && MathJax.startup.promise){
        MathJax.startup.promise.then(()=>MathJax.typesetPromise(elements).catch(e=>console.error(e)));
    }
}

function loadQuestion(index){
    answered=false;
    const q=currentQuizQuestions[index], total=currentQuizQuestions.length;
    document.getElementById('q-topic-label').textContent = currentQuizQuestions._categoryLabel || q.topic;
    document.getElementById('q-counter').textContent     = `${index+1} / ${total}`;
    document.getElementById('progress-fill').style.width = `${(index/total)*100}%`;
    const qEl=document.getElementById('question-text');
    qEl.innerHTML=q.question;
    const con=document.getElementById('options-container');
    con.innerHTML='';
    q.options.forEach((opt,i)=>{
        const btn=document.createElement('button');
        btn.className='option-btn';
        btn.innerHTML=`(${i+1})&nbsp;&nbsp;${opt}`;
        btn.onclick=()=>checkAnswer(btn,i===q.correct,i);
        con.appendChild(btn);
    });
    document.getElementById('explanation').style.display='none';
    document.getElementById('next-btn').style.display='none';
    document.getElementById('next-btn').textContent=(index===total-1)?'סיום ←':'השאלה הבאה ←';
    document.querySelector('.timer-row').style.display=quizNoTimer?'none':'flex';
    typesetMath([qEl,con]);
    if(!quizNoTimer) startTimer();
}

function startTimer(){
    clearInterval(timerInterval);
    let left=TOTAL_TIME; updateTimerUI(left);
    timerInterval=setInterval(()=>{
        left--; updateTimerUI(left);
        if(left<=0){ clearInterval(timerInterval); if(!answered) forceReveal(); }
    },1000);
}

function updateTimerUI(left){
    const pct=(left/TOTAL_TIME)*100;
    const bar=document.getElementById('timer-bar'), txt=document.getElementById('timer-text');
    bar.style.width=pct+'%';
    bar.style.background=left<=15?'#FB923C':'var(--wrong)';
    txt.style.color=left<=15?'#FB923C':'var(--wrong)';
    txt.textContent=left>0?`0:${left<10?'0':''}${left}`:'נגמר!';
}

function forceReveal(){
    answered=true; addAnswered(false);
    const q=currentQuizQuestions[currentIndex];
    const btns=document.querySelectorAll('.option-btn');
    btns.forEach(b=>b.disabled=true);
    btns[q.correct].classList.add('correct');
    showExplanation('⏰ נגמר הזמן!','#E67E22',q.explanation);
}

function checkAnswer(button,isCorrect){
    if(answered) return;
    answered=true; clearInterval(timerInterval); addAnswered(isCorrect);
    const q=currentQuizQuestions[currentIndex];
    const btns=document.querySelectorAll('.option-btn');
    btns.forEach(b=>b.disabled=true);
    if(isCorrect){ button.classList.add('correct'); score++; showExplanation('✅ תשובה נכונה!','#16A34A',q.explanation); }
    else { button.classList.add('wrong'); btns[q.correct].classList.add('correct'); showExplanation('❌ לא מדויק — הנה הפתרון:','#DC2626',q.explanation); }
}

function showExplanation(title,color,body){
    const t=document.getElementById('result-title');
    t.textContent=title; t.style.color=color;
    const b=document.getElementById('explanation-body');
    b.innerHTML=body;
    document.getElementById('explanation').style.display='block';
    document.getElementById('next-btn').style.display='block';
    typesetMath([b]);
}

function loadNextQuestion(){
    currentIndex++;
    if(currentIndex>=currentQuizQuestions.length) showFinish();
    else loadQuestion(currentIndex);
}

function showFinish(){
    clearInterval(timerInterval); showScreen('finish-screen'); updateHomeUI();
    const total=currentQuizQuestions.length;
    document.getElementById('final-score-num').textContent   = score;
    document.getElementById('final-score-denom').textContent = `מתוך ${total}`;
    const r=score/total;
    let icon,msg;
    if(r===1)       { icon='🏆'; msg='מושלם לחלוטין! ענית נכון על הכל 🎉'; }
    else if(r>=0.78){ icon='⭐'; msg='עבודה מצוינת! ממש קרוב לשלמות 😎'; }
    else if(r>=0.55){ icon='💪'; msg='לא רע! עוד קצת תרגול ואתה שם 🔥'; }
    else            { icon='📚'; msg='יש מה לשפר — קרא את ההסברים וחזור שוב! 🌱'; }
    document.getElementById('finish-icon').textContent=icon;
    document.getElementById('final-msg').textContent=msg;
}

function restartQuiz(){ quizNoTimer=false; startQuiz(); }

// ══════════════════════════════════════════
//  שיעורים — עזרים גנריים לג'נרטורים
// ══════════════════════════════════════════
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildOptions(correctValue, distractors) {
    const unique = new Set([correctValue]);
    const opts   = [correctValue];
    for (const d of distractors) {
        if (!unique.has(d) && opts.length < 4) { unique.add(d); opts.push(d); }
    }
    let safety = 0;
    while (opts.length < 4 && safety++ < 30) {
        const delta = randInt(1, 5) * (randInt(0, 1) ? 1 : 10);
        const extra = correctValue + (randInt(0, 1) ? delta : -delta);
        if (!unique.has(extra) && extra > 0) { unique.add(extra); opts.push(extra); }
    }
    const shuffled = shuffleArray(opts);
    return { labels: shuffled.map(String), correctIndex: shuffled.indexOf(correctValue) };
}

function generatePowerExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const a = [2,3,5][randInt(0,2)], n = randInt(1,4), m = randInt(1,3);
            const correct = Math.pow(a, n+m);
            const {labels, correctIndex} = buildOptions(correct, [Math.pow(a,n+m+1), Math.pow(a,n+m-1), Math.pow(a,n*m)]);
            return {
                question: `מה שווה $${a}^{${n}} \\times ${a}^{${m}}$?`,
                options: labels, correct: correctIndex,
                explanation: `מחברים מעריכים: $${a}^{${n}}\\times ${a}^{${m}}=${a}^{${n+m}}=${correct}$`
            };
        }
        case 2: {
            const a = [2,3,5][randInt(0,2)], m = randInt(1,2), n = m + randInt(1,3);
            const correct = Math.pow(a, n-m);
            const {labels, correctIndex} = buildOptions(correct, [Math.pow(a,n-m+1), Math.pow(a,n+m), Math.pow(a,Math.max(1,n-m-1))]);
            return {
                question: `מה שווה $\\dfrac{${a}^{${n}}}{${a}^{${m}}}$?`,
                options: labels, correct: correctIndex,
                explanation: `מחסרים מעריכים: $\\dfrac{${a}^{${n}}}{${a}^{${m}}}=${a}^{${n}-${m}}=${a}^{${n-m}}=${correct}$`
            };
        }
        case 3: {
            const a = [2,3][randInt(0,1)], n = randInt(2,3), m = randInt(2,3);
            const correct = Math.pow(a, n*m);
            const {labels, correctIndex} = buildOptions(correct, [Math.pow(a,n+m), Math.pow(a,n*m+1), Math.pow(a,n*m-1)]);
            return {
                question: `מה שווה $(${a}^{${n}})^{${m}}$?`,
                options: labels, correct: correctIndex,
                explanation: `מכפילים מעריכים: $(${a}^{${n}})^{${m}}=${a}^{${n}\\times${m}}=${a}^{${n*m}}=${correct}$`
            };
        }
        case 4: {
            const a = [2,3,4,5][randInt(0,3)], n = randInt(1,2);
            const denom = Math.pow(a, n);
            const correct = `$\\frac{1}{${denom}}$`;
            const distractors = [`$-\\frac{1}{${denom}}$`, `$${denom}$`, `$\\frac{1}{${denom*a}}$`];
            const allOpts = shuffleArray([correct, ...distractors]);
            return {
                question: `מה שווה $${a}^{-${n}}$?`,
                options: allOpts, correct: allOpts.indexOf(correct),
                explanation: `מעריך שלילי הופך לשבר: $${a}^{-${n}}=\\dfrac{1}{${a}^{${n}}}=\\dfrac{1}{${denom}}$`
            };
        }
        case 5: {
            const a = [2,3,5,7][randInt(0,3)], k = randInt(2,9);
            const {labels, correctIndex} = buildOptions(k, [k*a, k+a, Math.max(1,k-1)]);
            return {
                question: `מה שווה $${k} \\times ${a}^{0}$?`,
                options: labels, correct: correctIndex,
                explanation: `כל מספר (פרט ל-0) בחזקת אפס שווה 1: $${a}^0=1$, לכן $${k}\\times1=${k}$`
            };
        }
    }
}

// ── שלבי שיעור חוקי חזקות ──
const powerLessonSteps = [
    { ruleNumber:1, title:"כפל — מחברים מעריכים",
      theory:`$a^n \\times a^m = a^{n+m}$<br>לדוגמה: $2^3 \\times 2^2 = 2^{3+2}=2^5=32$`,
      generator: ()=>generatePowerExercise(1) },
    { ruleNumber:2, title:"חילוק — מחסרים מעריכים",
      theory:`$\\dfrac{a^n}{a^m}=a^{n-m}$<br>לדוגמה: $\\dfrac{5^4}{5^2}=5^{4-2}=5^2=25$`,
      generator: ()=>generatePowerExercise(2) },
    { ruleNumber:3, title:"חזקה של חזקה — מכפילים",
      theory:`$(a^n)^m=a^{n\\times m}$<br>לדוגמה: $(3^2)^2=3^{2\\times2}=3^4=81$`,
      generator: ()=>generatePowerExercise(3) },
    { ruleNumber:4, title:"מעריך שלילי",
      theory:`$a^{-n}=\\dfrac{1}{a^n}$<br>לדוגמה: $2^{-2}=\\dfrac{1}{2^2}=\\dfrac{1}{4}$`,
      generator: ()=>generatePowerExercise(4) },
    { ruleNumber:5, title:"חזקת אפס",
      theory:`$a^0=1$ (עבור $a \\neq 0$)<br>לדוגמה: $5\\times2^0=5\\times1=5$`,
      generator: ()=>generatePowerExercise(5) }
];

// ── שלבי שיעור חוקי שורשים ──
function generateRootExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const squares=[4,9,16,25], primes=[2,3,5,7];
            const a=squares[randInt(0,3)], b=primes[randInt(0,3)];
            const sqA=Math.sqrt(a);
            const correct=`$${sqA}\\sqrt{${b}}$`;
            const opts=shuffleArray([correct,`$${sqA+1}\\sqrt{${b}}$`,`$${sqA}\\sqrt{${b+1}}$`,`$${sqA>1?sqA-1:sqA+2}\\sqrt{${b}}$`]);
            return { question:`מה שווה $\\sqrt{${a*b}}$?`, options:opts, correct:opts.indexOf(correct),
                explanation:`$\\sqrt{${a*b}}=\\sqrt{${a}\\times${b}}=\\sqrt{${a}}\\times\\sqrt{${b}}=${sqA}\\sqrt{${b}}$` };
        }
        case 2: {
            const pairs=[[16,4],[36,4],[36,9],[9,4],[25,9]];
            const [a,b]=pairs[randInt(0,pairs.length-1)];
            const sqA=Math.sqrt(a), sqB=Math.sqrt(b);
            const correct=`$\\dfrac{${sqA}}{${sqB}}$`;
            const opts=shuffleArray([correct,`$\\dfrac{${sqA+1}}{${sqB}}$`,`$\\dfrac{${sqA}}{${sqB+1}}$`,`$\\dfrac{${sqA-1}}{${sqB}}$`]);
            return { question:`מה שווה $\\sqrt{\\dfrac{${a}}{${b}}}$?`, options:opts, correct:opts.indexOf(correct),
                explanation:`$\\sqrt{\\dfrac{${a}}{${b}}}=\\dfrac{\\sqrt{${a}}}{\\sqrt{${b}}}=\\dfrac{${sqA}}{${sqB}}$` };
        }
        case 3: {
            const kVals=[2,3,4,5], bVals=[2,3,5,7];
            const k=kVals[randInt(0,3)], b=bVals[randInt(0,3)];
            const correct=`$${k}\\sqrt{${b}}$`;
            const opts=shuffleArray([correct,`$${k+1}\\sqrt{${b}}$`,`$${k-1}\\sqrt{${b}}$`,`$${k}\\sqrt{${b+1}}$`]);
            return { question:`מה שווה $\\sqrt{${k*k*b}}$?`, options:opts, correct:opts.indexOf(correct),
                explanation:`$\\sqrt{${k*k*b}}=\\sqrt{${k*k}\\times${b}}=${k}\\sqrt{${b}}$` };
        }
        case 4: {
            const pairs=[[2,18],[3,12],[5,20],[2,50],[4,9]];
            const [a,b]=pairs[randInt(0,pairs.length-1)];
            const result=Math.sqrt(a*b);
            const {labels,correctIndex}=buildOptions(result,[result+1,result-1,result*2]);
            return { question:`מה שווה $\\sqrt{${a}}\\times\\sqrt{${b}}$?`, options:labels, correct:correctIndex,
                explanation:`$\\sqrt{${a}}\\times\\sqrt{${b}}=\\sqrt{${a*b}}=${result}$` };
        }
        case 5: {
            const ks=[2,3,5], k=ks[randInt(0,2)], m=randInt(2,4), n=randInt(1,3);
            const sum=m+n;
            const {labels,correctIndex}=buildOptions(sum,[sum+1,sum>1?sum-1:sum+2,m*n!==sum?m*n:sum+3]);
            return { question:`מה שווה $${m}\\sqrt{${k}}+${n}\\sqrt{${k}}$?`,
                options:labels.map(l=>`$${l}\\sqrt{${k}}$`), correct:correctIndex,
                explanation:`$${m}\\sqrt{${k}}+${n}\\sqrt{${k}}=(${m}+${n})\\sqrt{${k}}=${sum}\\sqrt{${k}}$` };
        }
    }
}
const rootLessonSteps = [
    { ruleNumber:1, title:"שורש של מכפלה",
      theory:`$\\sqrt{a \\times b}=\\sqrt{a}\\times\\sqrt{b}$<br>לדוגמה: $\\sqrt{12}=\\sqrt{4\\times3}=2\\sqrt{3}$`,
      generator:()=>generateRootExercise(1) },
    { ruleNumber:2, title:"שורש של מנה",
      theory:`$\\sqrt{\\dfrac{a}{b}}=\\dfrac{\\sqrt{a}}{\\sqrt{b}}$<br>לדוגמה: $\\sqrt{\\dfrac{16}{4}}=\\dfrac{4}{2}=2$`,
      generator:()=>generateRootExercise(2) },
    { ruleNumber:3, title:"פישוט שורש — הוצאה מחוץ לשורש",
      theory:`$\\sqrt{a^2\\cdot b}=a\\sqrt{b}$<br>לדוגמה: $\\sqrt{18}=\\sqrt{9\\times2}=3\\sqrt{2}$`,
      generator:()=>generateRootExercise(3) },
    { ruleNumber:4, title:"כפל שורשים",
      theory:`$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{a\\times b}$<br>לדוגמה: $\\sqrt{3}\\times\\sqrt{12}=\\sqrt{36}=6$`,
      generator:()=>generateRootExercise(4) },
    { ruleNumber:5, title:"חיבור וחיסור שורשים",
      theory:`$m\\sqrt{k}+n\\sqrt{k}=(m+n)\\sqrt{k}$<br>לדוגמה: $2\\sqrt{3}+3\\sqrt{3}=5\\sqrt{3}$`,
      generator:()=>generateRootExercise(5) }
];

// ── שלבי שיעור נוסחאות כפל מקוצר ──
function generateShortMultExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const as=[10,20,30,50,100], bs=[1,2,3,4,5];
            const a=as[randInt(0,as.length-1)], b=bs[randInt(0,bs.length-1)];
            const correct=(a+b)*(a+b);
            const {labels,correctIndex}=buildOptions(correct,[a*a+b*b,correct+a*b,correct-b*b]);
            return { question:`מה שווה $(${a}+${b})^2$?`, options:labels, correct:correctIndex,
                explanation:`$(${a}+${b})^2=${a}^2+2\\times${a}\\times${b}+${b}^2=${a*a}+${2*a*b}+${b*b}=${correct}$` };
        }
        case 2: {
            const as=[10,20,50,100], bs=[1,2,3,4];
            const a=as[randInt(0,as.length-1)], b=bs[randInt(0,bs.length-1)];
            const correct=(a-b)*(a-b);
            const {labels,correctIndex}=buildOptions(correct,[a*a+b*b,correct+b,correct-b>0?correct-b:correct+b+1]);
            return { question:`מה שווה $(${a}-${b})^2$?`, options:labels, correct:correctIndex,
                explanation:`$(${a}-${b})^2=${a}^2-2\\times${a}\\times${b}+${b}^2=${a*a}-${2*a*b}+${b*b}=${correct}$` };
        }
        case 3: {
            const as=[10,20,50,100], bs=[1,2,3,4,5];
            const a=as[randInt(0,as.length-1)], b=bs[randInt(0,bs.length-1)];
            const correct=a*a-b*b;
            const {labels,correctIndex}=buildOptions(correct,[a*a+b*b,(a+b)*(a+b),correct+b]);
            return { question:`מה שווה $${a+b}\\times${a-b}$?`, options:labels, correct:correctIndex,
                explanation:`$${a+b}\\times${a-b}=(${a}+${b})(${a}-${b})=${a}^2-${b}^2=${a*a}-${b*b}=${correct}$` };
        }
    }
}
const shortMultLessonSteps = [
    { ruleNumber:1, title:"ריבוע סכום",
      theory:`$(a+b)^2=a^2+2ab+b^2$<br>לדוגמה: $(10+3)^2=100+60+9=169$`,
      generator:()=>generateShortMultExercise(1) },
    { ruleNumber:2, title:"ריבוע הפרש",
      theory:`$(a-b)^2=a^2-2ab+b^2$<br>לדוגמה: $(10-3)^2=100-60+9=49$`,
      generator:()=>generateShortMultExercise(2) },
    { ruleNumber:3, title:"הפרש ריבועים",
      theory:`$(a+b)(a-b)=a^2-b^2$<br>לדוגמה: $103\\times97=(100+3)(100-3)=10000-9=9991$`,
      generator:()=>generateShortMultExercise(3) }
];

// ── שלבי שיעור אחוזים ──
function generatePercentExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const xs=[100,200,400,500,1000], ps=[10,20,25,30,50];
            const x=xs[randInt(0,xs.length-1)], p=ps[randInt(0,ps.length-1)];
            const correct=p/100*x;
            const {labels,correctIndex}=buildOptions(correct,[correct+x*0.1,correct-x*0.1,p*x]);
            return { question:`מה הוא ${p}% מ-${x}?`, options:labels, correct:correctIndex,
                explanation:`$\\dfrac{${p}}{100}\\times${x}=${correct}$` };
        }
        case 2: {
            const pairs=[[10,50],[15,75],[20,80],[25,100],[30,150]];
            const [A,B]=pairs[randInt(0,pairs.length-1)];
            const correct=A/B*100;
            const {labels,correctIndex}=buildOptions(correct,[correct+5,correct-5,correct*2]);
            return { question:`${A} הוא כמה אחוז מ-${B}?`,
                options:labels.map(l=>l+'%'), correct:correctIndex,
                explanation:`$\\dfrac{${A}}{${B}}\\times100=${correct}\\%$` };
        }
        case 3: {
            const xs=[200,300,400,500], ps=[10,20,25,50];
            const x=xs[randInt(0,xs.length-1)], p=ps[randInt(0,ps.length-1)];
            const correct=x*(1+p/100);
            const {labels,correctIndex}=buildOptions(correct,[x,correct+x*p/100,correct-x*p/200]);
            return { question:`מחיר של ${x} ₪ הוגדל ב-${p}%. מה המחיר החדש?`,
                options:labels, correct:correctIndex,
                explanation:`$${x}\\times(1+\\dfrac{${p}}{100})=${x}\\times${1+p/100}=${correct}$ ₪` };
        }
        case 4: {
            const ps=[10,20], qs=[10,20];
            const p=ps[randInt(0,1)], q=qs[randInt(0,1)];
            const correct=Math.round(100*(1-p/100)*(1-q/100)*100)/100;
            const wrong1=100*(1-(p+q)/100);
            const {labels,correctIndex}=buildOptions(correct,[wrong1,correct+2,correct-2]);
            return { question:`מחיר של 100 ₪ הוזל ב-${p}% ואחר כך ב-${q}% נוספים. מה המחיר הסופי?`,
                options:labels, correct:correctIndex,
                explanation:`$100\\times${1-p/100}\\times${1-q/100}=${correct}$ ₪ (לא פשוט מחסרים ${p+q}%!)` };
        }
    }
}
const percentLessonSteps = [
    { ruleNumber:1, title:"חישוב אחוז מכמות",
      theory:`$p\\%$ מ-$x$ הוא $\\dfrac{p}{100}\\times x$<br>לדוגמה: 20% מ-150 = $\\dfrac{20}{100}\\times150=30$`,
      generator:()=>generatePercentExercise(1) },
    { ruleNumber:2, title:"מציאת האחוז",
      theory:`כמה אחוז A מתוך B: $\\dfrac{A}{B}\\times100$<br>לדוגמה: 30 מתוך 120 = $\\dfrac{30}{120}\\times100=25\\%$`,
      generator:()=>generatePercentExercise(2) },
    { ruleNumber:3, title:"עלייה באחוז",
      theory:`הגדלה ב-p%: $x\\times(1+\\dfrac{p}{100})$<br>לדוגמה: 200 ₪ +10% = $200\\times1.1=220$ ₪`,
      generator:()=>generatePercentExercise(3) },
    { ruleNumber:4, title:"ירידה והנחות כפולות",
      theory:`הנחה כפולה: $x\\times(1-\\dfrac{p}{100})\\times(1-\\dfrac{q}{100})$<br>לא $x\\times(1-\\dfrac{p+q}{100})$!`,
      generator:()=>generatePercentExercise(4) }
];

// ── שלבי שיעור מערכות משוואות ──
function generateSystemsExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const xs=[2,3,4,5], ys=[3,5,6,7];
            const x=xs[randInt(0,3)], y=ys[randInt(0,3)];
            const {labels,correctIndex}=buildOptions(y,[y+1,y>1?y-1:y+2,x!==y?x:y+3]);
            return { question:`נתון $x+y=${x+y}$ וגם $x=${x}$. מה שווה $y$?`,
                options:labels, correct:correctIndex,
                explanation:`$y=${x+y}-x=${x+y}-${x}=${y}$` };
        }
        case 2: {
            const xs=[3,4,5,6,7], ys=[1,2,3,4];
            const x=xs[randInt(0,4)], y=ys[randInt(0,3)];
            const correct=x*y;
            const {labels,correctIndex}=buildOptions(correct,[x+y,x*x-y*y,correct+y]);
            return { question:`נתון $x+y=${x+y}$ וגם $x-y=${x-y}$. מה שווה $x\\cdot y$?`,
                options:labels, correct:correctIndex,
                explanation:`מחיבור: $2x=${(x+y)+(x-y)} \\Rightarrow x=${x}$. מחיסור: $2y=${(x+y)-(x-y)} \\Rightarrow y=${y}$. מכפלה: $${x}\\times${y}=${correct}$` };
        }
        case 3: {
            const as=[5,6,7,8,9], bs=[1,2,3,4];
            const a=as[randInt(0,4)], b=bs[randInt(0,3)];
            const correct=a*b;
            const {labels,correctIndex}=buildOptions(correct,[a+b,(a+b)*(a-b),correct+b]);
            return { question:`סכום שני מספרים הוא ${a+b} והפרשם הוא ${a-b}. מה מכפלתם?`,
                options:labels, correct:correctIndex,
                explanation:`הגדול: $\\dfrac{${a+b}+${a-b}}{2}=${a}$. הקטן: $\\dfrac{${a+b}-${a-b}}{2}=${b}$. מכפלה: $${a}\\times${b}=${correct}$` };
        }
    }
}
const systemsLessonSteps = [
    { ruleNumber:1, title:"שיטת הצבה",
      theory:`בודדים משתנה אחד ומציבים בשנייה<br>דוגמה: $x+y=10,\\ x=3 \\Rightarrow y=10-3=7$`,
      generator:()=>generateSystemsExercise(1) },
    { ruleNumber:2, title:"שיטת החיבור — ביטול משתנה",
      theory:`מחברים משוואות לביטול משתנה<br>דוגמה: $x+y=10,\\ x-y=4 \\Rightarrow 2x=14 \\Rightarrow x=7$`,
      generator:()=>generateSystemsExercise(2) },
    { ruleNumber:3, title:"סכום והפרש — מציאת מכפלה",
      theory:`אם סכום $=S$ והפרש $=D$: גדול $=\\dfrac{S+D}{2}$, קטן $=\\dfrac{S-D}{2}$`,
      generator:()=>generateSystemsExercise(3) }
];

// ── גנרטור בעיות תנועה והספק ──
function generateMotionExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const cases = [
                {d:200,v1:80,v2:120,t:1},{d:300,v1:60,v2:90,t:2},
                {d:400,v1:80,v2:120,t:2},{d:150,v1:60,v2:90,t:1},
            ];
            const {d,v1,v2,t} = cases[randInt(0,cases.length-1)];
            const {labels,correctIndex} = buildOptions(t,[t+1,t===1?t+2:t-1,Math.round(d/v1)]);
            return {
                topic:'בעיות תנועה', category:'motion',
                question:`שתי רכבות יוצאות לקראת זו בו-זמנית. A במהירות ${v1} קמ"ש, B במהירות ${v2} קמ"ש. מרחק: ${d} ק"מ. כמה שעות עד הפגישה?`,
                options:labels.map(String), correct:correctIndex,
                explanation:`<p>מהירות התקרבות: $${v1}+${v2}=${v1+v2}$ קמ"ש. $t=\\dfrac{${d}}{${v1+v2}}=${t}$.</p>`
            };
        }
        case 2: {
            const cases = [{a:3,b:6,t:2},{a:4,b:12,t:3},{a:6,b:12,t:4},{a:8,b:24,t:6}];
            const {a,b,t} = cases[randInt(0,cases.length-1)];
            const {labels,correctIndex} = buildOptions(t,[a,b,t+1]);
            return {
                topic:'בעיות הספק', category:'motion',
                question:`ברז א' ממלא בריכה ב-${a} שעות, ברז ב' ב-${b} שעות. כמה שעות יידרשו יחד?`,
                options:labels.map(String), correct:correctIndex,
                explanation:`<p>$\\dfrac{1}{${a}}+\\dfrac{1}{${b}}=\\dfrac{${a+b}}{${a*b}}=\\dfrac{1}{${t}}$, לכן $${t}$ שעות.</p>`
            };
        }
        case 3: {
            const cases = [{v1:60,v2:40,avg:48},{v1:60,v2:30,avg:40},{v1:60,v2:90,avg:72}];
            const {v1,v2,avg} = cases[randInt(0,cases.length-1)];
            const wrongAvg = Math.round((v1+v2)/2);
            const {labels,correctIndex} = buildOptions(avg,[wrongAvg,v1,v2]);
            return {
                topic:'בעיות תנועה', category:'motion',
                question:`אדם נסע מרחק שווה בהלוך ב-${v1} קמ"ש ובחזרה ב-${v2} קמ"ש. מה המהירות הממוצעת?`,
                options:labels.map(String), correct:correctIndex,
                explanation:`<p>ממוצע הרמוני: $\\dfrac{2\\cdot${v1}\\cdot${v2}}{${v1}+${v2}}=\\dfrac{${2*v1*v2}}{${v1+v2}}=${avg}$ קמ"ש.</p><p>💡 לא הממוצע הפשוט (${wrongAvg})!</p>`
            };
        }
    }
}

// ── גנרטור גיאומטריה ──
function generateGeometryExercise(ruleId) {
    switch (ruleId) {
        case 1: {
            const cases = [
                {ratio:2,P:24,w:4,l:8,A:32},
                {ratio:2,P:36,w:6,l:12,A:72},
                {ratio:3,P:32,w:4,l:12,A:48},
                {ratio:4,P:40,w:4,l:16,A:64},
            ];
            const {ratio,P,w,l,A} = cases[randInt(0,cases.length-1)];
            const {labels,correctIndex} = buildOptions(A,[A+l,A-w>0?A-w:A+w,l*l]);
            return {
                topic:'גיאומטריה - שטחים', category:'geometry',
                question:`היקף מלבן הוא ${P} ס"מ ואורכו פי ${ratio} מרוחבו. מה שטחו?`,
                options:labels.map(String), correct:correctIndex,
                explanation:`<p>$2(${ratio}w+w)=${P} \\Rightarrow w=${w},\\ l=${l}$. שטח: $${l}\\times${w}=${A}$ סמ"ר.</p>`
            };
        }
        case 2: {
            const triples = [[3,4,5],[5,12,13],[6,8,10],[9,12,15],[8,15,17]];
            const [a,b,c] = triples[randInt(0,triples.length-1)];
            const findHyp = randInt(0,1)===0;
            if (findHyp) {
                const {labels,correctIndex} = buildOptions(c,[a+b,c+1,c-1>0?c-1:c+2]);
                return {
                    topic:'גיאומטריה - פיתגורס', category:'geometry',
                    question:`במשולש ישר-זווית הניצבים ${a} ו-${b} ס"מ. מה אורך היתר?`,
                    options:labels.map(String), correct:correctIndex,
                    explanation:`<p>$\\sqrt{${a}^2+${b}^2}=\\sqrt{${a*a+b*b}}=${c}$ ס"מ.</p>`
                };
            } else {
                const {labels,correctIndex} = buildOptions(a,[c-b,b,a+1]);
                return {
                    topic:'גיאומטריה - פיתגורס', category:'geometry',
                    question:`במשולש ישר-זווית היתר ${c} ס"מ וניצב אחד ${b} ס"מ. מה הניצב השני?`,
                    options:labels.map(String), correct:correctIndex,
                    explanation:`<p>$\\sqrt{${c}^2-${b}^2}=\\sqrt{${c*c-b*b}}=${a}$ ס"מ.</p>`
                };
            }
        }
        case 3: {
            const ns = [5,6,8,10,12];
            const n = ns[randInt(0,ns.length-1)];
            const angle = (n-2)*180/n;
            const {labels,correctIndex} = buildOptions(angle,[angle+10,angle>10?angle-10:angle+20,(n-1)*180/n]);
            return {
                topic:'גיאומטריה - זוויות', category:'geometry',
                question:`מה גודל כל זווית פנימית במצולע משוכלל בעל ${n} צלעות?`,
                options:labels.map(l=>l+'°'), correct:correctIndex,
                explanation:`<p>$\\dfrac{(${n}-2)\\times180}{${n}}=\\dfrac{${(n-2)*180}}{${n}}=${angle}°$.</p>`
            };
        }
        case 4: {
            const sides = [5,6,7,8,9,10];
            const s = sides[randInt(0,sides.length-1)];
            const area = s*s, perim = 4*s;
            const {labels,correctIndex} = buildOptions(perim,[perim+4,perim-4,area]);
            return {
                topic:'גיאומטריה - שטחים', category:'geometry',
                question:`שטח ריבוע הוא ${area} סמ"ר. מה היקפו?`,
                options:labels.map(String), correct:correctIndex,
                explanation:`<p>צלע: $\\sqrt{${area}}=${s}$. היקף: $4\\times${s}=${perim}$ ס"מ.</p>`
            };
        }
    }
}

// ── מיפוי קטגוריה → גנרטורים ──
const CATEGORY_GENERATORS = {
    algebra:  [
        () => generatePowerExercise(randInt(1,5)),
        () => generateRootExercise(randInt(1,5)),
        () => generateShortMultExercise(randInt(1,3)),
        () => generatePercentExercise(randInt(1,4)),
        () => generateSystemsExercise(randInt(1,3)),
    ],
    motion:   [() => generateMotionExercise(randInt(1,3))],
    geometry: [() => generateGeometryExercise(randInt(1,4))],
};

const CAT_TOPIC_DEFAULT = {algebra:'אלגברה', motion:'תנועה והספק', geometry:'גיאומטריה'};

function generateFromCategory(category, count) {
    const gens = CATEGORY_GENERATORS[category];
    if (!gens || !gens.length) return [];
    const out = [];
    let safety = 0;
    while (out.length < count && safety++ < count * 4) {
        const ex = gens[randInt(0, gens.length-1)]();
        if (ex) out.push({
            topic: ex.topic || CAT_TOPIC_DEFAULT[category],
            category: ex.category || category,
            question: ex.question, options: ex.options,
            correct: ex.correct, explanation: ex.explanation,
            fromGen: true
        });
    }
    return out;
}

// ══════════════════════════════════════════
//  דף נוסחאות
// ══════════════════════════════════════════
const formulaCategories = [
    {
        title:"חזקות ושורשים", icon:"⚡", color:"blue",
        formulas:[
            {name:"כפל חזקות",    formula:"$a^n \\times a^m = a^{n+m}$"},
            {name:"חילוק חזקות",   formula:"$\\dfrac{a^n}{a^m} = a^{n-m}$"},
            {name:"חזקה של חזקה", formula:"$(a^n)^m = a^{n \\times m}$"},
            {name:"מעריך שלילי",  formula:"$a^{-n} = \\dfrac{1}{a^n}$"},
            {name:"חזקת אפס",     formula:"$a^0 = 1 \\;(a \\neq 0)$"},
            {name:"כפל שורשים",   formula:"$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}$"},
            {name:"חילוק שורשים", formula:"$\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$"}
        ]
    },
    {
        title:"כפל מקוצר", icon:"✖️", color:"pink",
        formulas:[
            {name:"ריבוע סכום",    formula:"$(a+b)^2 = a^2 + 2ab + b^2$"},
            {name:"ריבוע הפרש",    formula:"$(a-b)^2 = a^2 - 2ab + b^2$"},
            {name:"הפרש ריבועים", formula:"$(a+b)(a-b) = a^2 - b^2$"}
        ]
    },
    {
        title:"אחוזים ויחסים", icon:"％", color:"orange",
        formulas:[
            {name:"חישוב אחוז",   formula:"$p\\%$ מ-$x$ הוא $\\dfrac{p}{100} \\times x$"},
            {name:"אחוז שינוי",   formula:"$\\dfrac{\\text{ערך חדש} - \\text{ערך ישן}}{\\text{ערך ישן}} \\times 100$"},
            {name:"עלייה באחוז",  formula:"$x \\times (1 + \\dfrac{p}{100})$"},
            {name:"ירידה באחוז",  formula:"$x \\times (1 - \\dfrac{p}{100})$"}
        ]
    },
    {
        title:"בעיות דרך והספק", icon:"🏎️", color:"green",
        formulas:[
            {name:"נוסחת דרך",      formula:"$\\text{מרחק} = \\text{מהירות} \\times \\text{זמן}$"},
            {name:"הספק",           formula:"$\\text{הספק} = \\dfrac{\\text{כמות עבודה}}{\\text{זמן}}$"},
            {name:"עבודה משותפת",  formula:"$\\dfrac{1}{t_1} + \\dfrac{1}{t_2} = \\dfrac{1}{t_{\\text{יחד}}}$"},
            {name:"מהירות ממוצעת", formula:"$v_{\\text{ממוצע}} = \\dfrac{\\text{מרחק כולל}}{\\text{זמן כולל}}$"}
        ]
    },
    {
        title:"משולש", icon:"📐", color:"blue",
        formulas:[
            {name:"שטח משולש",    formula:"$S = \\dfrac{\\text{בסיס} \\times \\text{גובה}}{2}$"},
            {name:"פיתגורס",      formula:"$a^2 + b^2 = c^2$"},
            {name:"30-60-90",     formula:"ניצב מול 30° = $\\dfrac{\\text{יתר}}{2}$"},
            {name:"סכום זוויות", formula:"$\\alpha + \\beta + \\gamma = 180°$"}
        ]
    },
    {
        title:"מרובעים", icon:"⬜", color:"orange",
        formulas:[
            {name:"שטח מלבן",   formula:"$S = a \\times b$"},
            {name:"היקף מלבן",  formula:"$P = 2(a + b)$"},
            {name:"שטח ריבוע",  formula:"$S = a^2$"},
            {name:"שטח טרפז",   formula:"$S = \\dfrac{(a+b) \\times h}{2}$"},
            {name:"שטח מעוין",  formula:"$S = \\dfrac{d_1 \\times d_2}{2}$"}
        ]
    },
    {
        title:"מעגל ועיגול", icon:"⭕", color:"pink",
        formulas:[
            {name:"היקף מעגל",      formula:"$P = 2\\pi r$"},
            {name:"שטח עיגול",      formula:"$S = \\pi r^2$"},
            {name:"שטח גזרה",      formula:"$S = \\dfrac{x°}{360°} \\times \\pi r^2$"},
            {name:"אורך קשת",      formula:"$L = \\dfrac{x°}{360°} \\times 2\\pi r$"}
        ]
    },
    {
        title:"גופים תלת-ממדיים", icon:"📦", color:"green",
        formulas:[
            {name:"נפח תיבה",            formula:"$V = a \\times b \\times c$"},
            {name:"שטח פנים תיבה",       formula:"$S = 2(ab + bc + ac)$"},
            {name:"נפח גליל",             formula:"$V = \\pi r^2 h$"},
            {name:"שטח מעטפת גליל",      formula:"$S = 2\\pi r h$"},
            {name:"נפח חרוט",             formula:"$V = \\dfrac{1}{3}\\pi r^2 h$"},
            {name:"נפח פירמידה",          formula:"$V = \\dfrac{1}{3} \\times S_{\\text{בסיס}} \\times h$"}
        ]
    },
    {
        title:"מצולעים", icon:"🔷", color:"blue",
        formulas:[
            {name:"סכום זוויות פנימיות",      formula:"$(n-2) \\times 180°$"},
            {name:"זווית פנימית במשוכלל",     formula:"$\\dfrac{(n-2) \\times 180°}{n}$"},
            {name:"זווית חיצונית במשוכלל",    formula:"$\\dfrac{360°}{n}$"}
        ]
    },
    {
        title:"סדרות", icon:"🔢", color:"orange",
        formulas:[
            {name:"איבר n — חשבונית",  formula:"$a_n = a_1 + (n-1)d$"},
            {name:"סכום — חשבונית",    formula:"$S_n = \\dfrac{n(a_1+a_n)}{2}$"},
            {name:"איבר n — הנדסית",   formula:"$a_n = a_1 \\times q^{n-1}$"}
        ]
    }
];

// ══════════════════════════════════════════
//  שיעורי גיאומטריה — תת-נושאים
// ══════════════════════════════════════════
const geometryTopics = [
    {
        id:"triangle", title:"משולשים ופיתגורס", icon:"📐", color:"blue",
        examTopicFilter:"גיאומטריה - משולשים",
        steps:[
            {
                title:"שטח משולש",
                theory:`$S = \\dfrac{\\text{בסיס} \\times \\text{גובה}}{2}$<br><br>
<svg viewBox="0 0 160 120" style="max-width:160px;display:block;margin:12px auto;">
  <polygon points="80,10 10,110 150,110" fill="rgba(139,92,246,0.1)" stroke="#8B5CF6" stroke-width="2.5"/>
  <line x1="80" y1="10" x2="80" y2="110" stroke="#F472B6" stroke-width="2" stroke-dasharray="5"/>
  <text x="85" y="65" font-size="13" fill="#F472B6" font-weight="bold">h</text>
  <text x="75" y="125" font-size="13" fill="#8B5CF6" font-weight="bold">a</text>
</svg>`,
                generator:()=>{
                    const bases=[6,8,10,12,14], heights=[4,5,6,8,10];
                    const b=bases[randInt(0,4)], h=heights[randInt(0,4)];
                    const correct=(b*h)/2;
                    const {labels,correctIndex}=buildOptions(correct,[b*h, correct+b, correct>2?correct-2:correct+3]);
                    return { question:`משולש שבסיסו $${b}$ ס"מ וגובהו $${h}$ ס"מ. מה שטחו?`,
                        options:labels, correct:correctIndex,
                        explanation:`$S=\\dfrac{${b}\\times${h}}{2}=${correct}$ סמ"ר` };
                }
            },
            {
                title:"משפט פיתגורס",
                theory:`$a^2 + b^2 = c^2$<br><br>
<svg viewBox="0 0 150 130" style="max-width:150px;display:block;margin:12px auto;">
  <polygon points="10,120 10,20 120,120" fill="rgba(139,92,246,0.1)" stroke="#8B5CF6" stroke-width="2.5"/>
  <rect x="10" y="110" width="10" height="10" fill="none" stroke="#8B5CF6" stroke-width="2"/>
  <text x="0" y="72" font-size="13" fill="#F472B6" font-weight="bold">a</text>
  <text x="58" y="128" font-size="13" fill="#F472B6" font-weight="bold">b</text>
  <text x="68" y="62" font-size="13" fill="#8B5CF6" font-weight="bold">c</text>
</svg>`,
                generator:()=>{
                    const triples=[[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
                    const t=triples[randInt(0,3)];
                    const missing=randInt(0,2);
                    const names=['a','b','c'];
                    const correct=t[missing];
                    const given=t.filter((_,i)=>i!==missing);
                    const {labels,correctIndex}=buildOptions(correct,[correct+1,correct>1?correct-1:correct+2,correct+2]);
                    return {
                        question:`במשולש ישר-זווית: ${names.filter((_,i)=>i!==missing).map((n,i)=>`$${n}=${given[i]}$`).join(', ')}. מה שווה $${names[missing]}$?`,
                        options:labels, correct:correctIndex,
                        explanation:`$${t[0]}^2+${t[1]}^2=${t[0]**2}+${t[1]**2}=${t[0]**2+t[1]**2}=${t[2]}^2$ ✓`
                    };
                }
            },
            {
                title:"זוויות במשולש",
                theory:`$\\alpha+\\beta+\\gamma=180°$<br><br>
<svg viewBox="0 0 160 120" style="max-width:160px;display:block;margin:12px auto;">
  <polygon points="80,10 10,110 150,110" fill="rgba(139,92,246,0.1)" stroke="#8B5CF6" stroke-width="2.5"/>
  <text x="72" y="30" font-size="13" fill="#8B5CF6" font-weight="bold">α</text>
  <text x="18" y="105" font-size="13" fill="#8B5CF6" font-weight="bold">β</text>
  <text x="132" y="105" font-size="13" fill="#8B5CF6" font-weight="bold">γ</text>
</svg>`,
                generator:()=>{
                    const a=randInt(30,80), b=randInt(20,150-a), c=180-a-b;
                    const missing=randInt(0,2);
                    const angles=[a,b,c], names=['α','β','γ'];
                    const correct=angles[missing];
                    const {labels,correctIndex}=buildOptions(correct,[correct+10,correct>10?correct-10:correct+20,correct+20]);
                    const given=names.filter((_,i)=>i!==missing).map((n,i)=>`$${n}=${angles.filter((_,j)=>j!==missing)[i]}°$`);
                    return {
                        question:`במשולש: ${given.join(', ')}. מה שווה $${names[missing]}$?`,
                        options:labels.map(l=>l+'°'), correct:correctIndex,
                        explanation:`$${a}°+${b}°+${c}°=180°$. לכן $${names[missing]}=${correct}°$`
                    };
                }
            }
        ]
    },
    {
        id:"circle", title:"מעגל ועיגול", icon:"⭕", color:"pink",
        examTopicFilter:"גיאומטריה - עיגולים",
        steps:[
            {
                title:"היקף ושטח עיגול",
                theory:`היקף: $P=2\\pi r$ | שטח: $S=\\pi r^2$<br><br>
<svg viewBox="0 0 140 140" style="max-width:140px;display:block;margin:12px auto;">
  <circle cx="70" cy="70" r="55" fill="rgba(244,114,182,0.1)" stroke="#F472B6" stroke-width="2.5"/>
  <line x1="70" y1="70" x2="125" y2="70" stroke="#8B5CF6" stroke-width="2"/>
  <circle cx="70" cy="70" r="3" fill="#8B5CF6"/>
  <text x="88" y="63" font-size="13" fill="#8B5CF6" font-weight="bold">r</text>
</svg>`,
                generator:()=>{
                    const r=[3,4,5,6,7][randInt(0,4)];
                    const type=randInt(0,1);
                    if(type===0){
                        const correct=2*r;
                        const {labels,correctIndex}=buildOptions(correct,[r,correct+2,correct*2]);
                        return { question:`עיגול שרדיוסו $${r}$ ס"מ. מה היקפו בכפולות $\\pi$?`,
                            options:labels.map(l=>`$${l}\\pi$`), correct:correctIndex,
                            explanation:`$P=2\\pi r=2\\pi\\times${r}=${correct}\\pi$` };
                    } else {
                        const correct=r*r;
                        const {labels,correctIndex}=buildOptions(correct,[2*r,correct+r,correct-r>0?correct-r:correct+r+1]);
                        return { question:`עיגול שרדיוסו $${r}$ ס"מ. מה שטחו בכפולות $\\pi$?`,
                            options:labels.map(l=>`$${l}\\pi$`), correct:correctIndex,
                            explanation:`$S=\\pi r^2=\\pi\\times${r}^2=${correct}\\pi$` };
                    }
                }
            },
            {
                title:"גזרת מעגל",
                theory:`שטח גזרה: $S=\\dfrac{x°}{360°}\\times\\pi r^2$<br><br>
<svg viewBox="0 0 140 140" style="max-width:140px;display:block;margin:12px auto;">
  <circle cx="70" cy="70" r="55" fill="none" stroke="#8B5CF6" stroke-width="2" opacity="0.4"/>
  <path d="M70,70 L125,70 A55,55 0 0,0 70,15 Z" fill="rgba(139,92,246,0.25)" stroke="#8B5CF6" stroke-width="2.5"/>
  <text x="88" y="55" font-size="12" fill="#8B5CF6" font-weight="bold">90°</text>
  <circle cx="70" cy="70" r="3" fill="#8B5CF6"/>
</svg>`,
                generator:()=>{
                    const cleanCases=[
                        {x:90,r:4,correct:4},{x:90,r:6,correct:9},{x:90,r:8,correct:16},
                        {x:120,r:6,correct:12},{x:60,r:6,correct:6},
                        {x:180,r:6,correct:18},{x:180,r:8,correct:32},
                        {x:45,r:4,correct:2},{x:45,r:8,correct:8}
                    ];
                    const {x,r,correct}=cleanCases[randInt(0,cleanCases.length-1)];
                    const {labels,correctIndex}=buildOptions(correct,[r*r,correct*2,correct>2?correct-2:correct+3]);
                    return { question:`גזרת מעגל שרדיוסה $${r}$ ס"מ וזווית ראשה $${x}°$. מה שטחה בכפולות $\\pi$?`,
                        options:labels.map(l=>`$${l}\\pi$`), correct:correctIndex,
                        explanation:`$S=\\dfrac{${x}}{360}\\times\\pi\\times${r}^2=${correct}\\pi$ סמ"ר` };
                }
            }
        ]
    },
    {
        id:"quadrilateral", title:"מרובעים", icon:"⬜", color:"orange",
        examTopicFilter:"גיאומטריה - שטחים",
        steps:[
            {
                title:"שטח והיקף מלבן",
                theory:`שטח: $S=a\\times b$ | היקף: $P=2(a+b)$<br><br>
<svg viewBox="0 0 170 110" style="max-width:170px;display:block;margin:12px auto;">
  <rect x="15" y="20" width="140" height="70" fill="rgba(251,146,60,0.1)" stroke="#FB923C" stroke-width="2.5" rx="3"/>
  <text x="75" y="14" font-size="13" fill="#FB923C" font-weight="bold">a</text>
  <text x="160" y="60" font-size="13" fill="#FB923C" font-weight="bold">b</text>
</svg>`,
                generator:()=>{
                    const a=randInt(4,15), b=randInt(3,12), type=randInt(0,1);
                    if(type===0){
                        const correct=a*b;
                        const {labels,correctIndex}=buildOptions(correct,[2*(a+b),correct+a,correct-b>0?correct-b:correct+b]);
                        return { question:`מלבן שאורכו $${a}$ ס"מ ורוחבו $${b}$ ס"מ. מה שטחו?`,
                            options:labels, correct:correctIndex,
                            explanation:`$S=${a}\\times${b}=${correct}$ סמ"ר` };
                    } else {
                        const correct=2*(a+b);
                        const {labels,correctIndex}=buildOptions(correct,[a*b,correct+2,correct-4>0?correct-4:correct+4]);
                        return { question:`מלבן שאורכו $${a}$ ס"מ ורוחבו $${b}$ ס"מ. מה היקפו?`,
                            options:labels, correct:correctIndex,
                            explanation:`$P=2(${a}+${b})=2\\times${a+b}=${correct}$ ס"מ` };
                    }
                }
            },
            {
                title:"שטח טרפז",
                theory:`$S=\\dfrac{(a+b)\\times h}{2}$<br><br>
<svg viewBox="0 0 170 110" style="max-width:170px;display:block;margin:12px auto;">
  <polygon points="40,90 130,90 110,20 60,20" fill="rgba(251,146,60,0.1)" stroke="#FB923C" stroke-width="2.5"/>
  <line x1="85" y1="20" x2="85" y2="90" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4"/>
  <text x="88" y="60" font-size="13" fill="#8B5CF6" font-weight="bold">h</text>
  <text x="75" y="14" font-size="12" fill="#FB923C" font-weight="bold">a</text>
  <text x="75" y="106" font-size="12" fill="#FB923C" font-weight="bold">b</text>
</svg>`,
                generator:()=>{
                    const a=randInt(4,10), b=randInt(a+2,a+10), h=randInt(3,10);
                    const correct=(a+b)*h/2;
                    const {labels,correctIndex}=buildOptions(correct,[(a+b)*h,correct+h,a*h]);
                    return { question:`טרפז שבסיסיו $${a}$ ס"מ ו-$${b}$ ס"מ, גובהו $${h}$ ס"מ. מה שטחו?`,
                        options:labels, correct:correctIndex,
                        explanation:`$S=\\dfrac{(${a}+${b})\\times${h}}{2}=${correct}$ סמ"ר` };
                }
            }
        ]
    },
    {
        id:"solid", title:"גופים תלת-ממדיים", icon:"📦", color:"green",
        examTopicFilter:"גיאומטריה - נפח",
        steps:[
            {
                title:"נפח תיבה וקובייה",
                theory:`$V=a\\times b\\times c$ | קובייה: $V=a^3$<br><br>
<svg viewBox="0 0 160 130" style="max-width:150px;display:block;margin:12px auto;">
  <polygon points="30,100 110,100 110,30 30,30" fill="rgba(52,211,153,0.1)" stroke="#34D399" stroke-width="2"/>
  <polygon points="30,30 60,10 140,10 110,30" fill="rgba(52,211,153,0.15)" stroke="#34D399" stroke-width="2"/>
  <line x1="110" y1="100" x2="140" y2="80" stroke="#34D399" stroke-width="2"/>
  <line x1="140" y1="10" x2="140" y2="80" stroke="#34D399" stroke-width="2"/>
  <line x1="110" y1="30" x2="140" y2="10" stroke="#34D399" stroke-width="2"/>
  <text x="60" y="120" font-size="12" fill="#34D399" font-weight="bold">a</text>
  <text x="112" y="70" font-size="12" fill="#34D399" font-weight="bold">b</text>
  <text x="118" y="40" font-size="12" fill="#34D399" font-weight="bold">c</text>
</svg>`,
                generator:()=>{
                    const type=randInt(0,1);
                    if(type===0){
                        const a=randInt(2,8),b=randInt(2,8),c=randInt(2,8);
                        const correct=a*b*c;
                        const {labels,correctIndex}=buildOptions(correct,[2*(a*b+b*c+a*c),correct+a,a*b]);
                        return { question:`תיבה שמידותיה $${a}$, $${b}$, $${c}$ ס"מ. מה נפחה?`,
                            options:labels, correct:correctIndex,
                            explanation:`$V=${a}\\times${b}\\times${c}=${correct}$ סמ"ק` };
                    } else {
                        const a=randInt(2,7);
                        const correct=a**3;
                        const {labels,correctIndex}=buildOptions(correct,[a**2,6*a**2,correct+a]);
                        return { question:`קובייה שצלעה $${a}$ ס"מ. מה נפחה?`,
                            options:labels, correct:correctIndex,
                            explanation:`$V=${a}^3=${correct}$ סמ"ק` };
                    }
                }
            },
            {
                title:"נפח גליל",
                theory:`$V=\\pi r^2 h$<br><br>
<svg viewBox="0 0 140 140" style="max-width:140px;display:block;margin:12px auto;">
  <ellipse cx="70" cy="110" rx="50" ry="15" fill="rgba(52,211,153,0.15)" stroke="#34D399" stroke-width="2"/>
  <ellipse cx="70" cy="35"  rx="50" ry="15" fill="rgba(52,211,153,0.2)"  stroke="#34D399" stroke-width="2"/>
  <line x1="20" y1="35" x2="20"  y2="110" stroke="#34D399" stroke-width="2"/>
  <line x1="120" y1="35" x2="120" y2="110" stroke="#34D399" stroke-width="2"/>
  <line x1="70" y1="35" x2="120"  y2="35"  stroke="#8B5CF6" stroke-width="2"/>
  <text x="85" y="30" font-size="12" fill="#8B5CF6" font-weight="bold">r</text>
  <text x="3"  y="78" font-size="12" fill="#34D399" font-weight="bold">h</text>
</svg>`,
                generator:()=>{
                    const r=[2,3,4,5][randInt(0,3)], h=randInt(3,12);
                    const correct=r*r*h;
                    const {labels,correctIndex}=buildOptions(correct,[2*r*h,correct+r,r*h]);
                    return { question:`גליל שרדיוסו $${r}$ ס"מ וגובהו $${h}$ ס"מ. מה נפחו בכפולות $\\pi$?`,
                        options:labels.map(l=>`$${l}\\pi$`), correct:correctIndex,
                        explanation:`$V=\\pi\\times${r}^2\\times${h}=${correct}\\pi$ סמ"ק` };
                }
            }
        ]
    },
    {
        id:"polygon", title:"מצולעים וזוויות", icon:"🔷", color:"blue",
        examTopicFilter:"גיאומטריה - זוויות",
        steps:[
            {
                title:"סכום זוויות מצולע",
                theory:`זוויות פנימיות: $(n-2)\\times180°$ | חיצונית: $\\dfrac{360°}{n}$`,
                generator:()=>{
                    const n=randInt(5,10), type=randInt(0,1);
                    if(type===0){
                        const correct=(n-2)*180;
                        const {labels,correctIndex}=buildOptions(correct,[n*180,(n-1)*180,correct+180]);
                        return { question:`מה סכום הזוויות הפנימיות במצולע בעל $${n}$ צלעות?`,
                            options:labels.map(l=>l+'°'), correct:correctIndex,
                            explanation:`$(${n}-2)\\times180°=${n-2}\\times180°=${correct}°$` };
                    } else {
                        const correct=360/n;
                        const {labels,correctIndex}=buildOptions(correct,[180/n,correct+10,correct>10?correct-10:correct+20]);
                        return { question:`מצולע משוכלל בעל $${n}$ צלעות. מה גודל כל זווית חיצונית?`,
                            options:labels.map(l=>l+'°'), correct:correctIndex,
                            explanation:`$\\dfrac{360°}{${n}}=${correct}°$` };
                    }
                }
            }
        ]
    }
];

// ══════════════════════════════════════════
//  רשימת שיעורים — גנרי ומורחב בקלות
// ══════════════════════════════════════════
const lessons = [
    { id:"powers",    title:"חוקי חזקות",         icon:"⚡",  color:"blue",
      steps:powerLessonSteps, examTopicFilter:"חוקי חזקות" },
    { id:"roots",     title:"חוקי שורשים",         icon:"√",   color:"green",
      steps:rootLessonSteps, examTopicFilter:"חוקי שורשים" },
    { id:"shortmult", title:"נוסחאות כפל מקוצר",   icon:"✖️",  color:"pink",
      steps:shortMultLessonSteps, examTopicFilter:"נוסחאות כפל מקוצר" },
    { id:"percent",   title:"אחוזים",              icon:"％",  color:"orange",
      steps:percentLessonSteps, examTopicFilter:"אחוזים" },
    { id:"systems",   title:"מערכות משוואות",       icon:"🧮",  color:"pink",
      steps:systemsLessonSteps, examTopicFilter:"מערכת משוואות" },
    { id:"geometry-b", title:"גיאומטריה",           icon:"📐",  color:"blue",  useSubTopics:true },
];

let currentLessonObj=null, currentStepIdx=0, lessonStepUnlocked=false, currentStepEx=null;

function getDayOfYear(){
    const now=new Date();
    return Math.floor((now-new Date(now.getFullYear(),0,0))/86400000);
}

function showLessons(){
    const todayIdx=getDayOfYear()%lessons.length;
    const list=document.getElementById('lessons-list');
    list.innerHTML='';
    lessons.forEach((lesson,i)=>{
        const isToday=(i===todayIdx);
        const btn=document.createElement('button');
        btn.className='lesson-list-item';
        const subLabel=lesson.comingSoon?'בקרוב...':lesson.useSubTopics?'בחר תת-נושא 📐':'תיאוריה · תרגול · מבחן';
        btn.innerHTML=`
            <div class="lesson-item-icon tile-icon-wrap ${lesson.color}">${lesson.icon}</div>
            <div style="flex:1">
                <div class="lesson-item-title">${lesson.title}</div>
                <div class="lesson-item-sub">${subLabel}</div>
            </div>
            ${isToday?'<span class="lesson-today-badge">מומלץ להיום ⭐</span>':''}
            ${(!isToday&&lesson.comingSoon)?'<span class="lesson-coming-badge">בקרוב</span>':''}`;
        btn.onclick=()=>lesson.comingSoon?showComingSoon(lesson.title):lesson.useSubTopics?showGeometryTopics():showLesson(lesson);
        list.appendChild(btn);
    });
    showScreen('lessons-screen'); setActiveNav(null);
}

let _lessonBackFn=null;
function lessonBack(){ (_lessonBackFn||showLessons)(); }

function showLesson(lesson, backFn, backLabel){
    currentLessonObj=lesson; currentStepIdx=0; lessonStepUnlocked=false;
    _lessonBackFn=backFn||null;
    const backBtn=document.getElementById('lesson-back-btn');
    if(backBtn) backBtn.textContent='→ '+(backLabel||'חזרה לשיעורים');
    showScreen('lesson-screen'); setActiveNav(null); renderLessonStep();
}

function showFormulas(){
    const container=document.getElementById('formulas-list');
    container.innerHTML='';
    document.getElementById('formula-search').value='';
    formulaCategories.forEach(cat=>{
        const card=document.createElement('div');
        card.className='formula-category-card';
        const rowsHtml=cat.formulas.map(f=>
            `<div class="formula-row" data-name="${f.name}" data-formula="${f.formula}">
                <span class="formula-name">${f.name}</span>
                <span class="formula-math">${f.formula}</span>
            </div>`
        ).join('');
        card.innerHTML=`
            <div class="formula-cat-header ${cat.color}">
                <span class="formula-cat-icon">${cat.icon}</span>
                <span class="formula-cat-title">${cat.title}</span>
            </div>
            ${rowsHtml}`;
        container.appendChild(card);
    });
    showScreen('formulas-screen'); setActiveNav(null);
    typesetMath([container]);
}

function filterFormulas(query){
    const q=query.trim().toLowerCase();
    document.querySelectorAll('.formula-category-card').forEach(card=>{
        const rows=card.querySelectorAll('.formula-row');
        let visible=0;
        rows.forEach(row=>{
            const match=!q||row.dataset.name.toLowerCase().includes(q)||row.dataset.formula.toLowerCase().includes(q);
            row.style.display=match?'':'none';
            if(match) visible++;
        });
        card.style.display=visible?'':'none';
    });
}

function showGeometryTopics(){
    const list=document.getElementById('geometry-topics-list');
    list.innerHTML='';
    geometryTopics.forEach(topic=>{
        const btn=document.createElement('button');
        btn.className='lesson-list-item';
        btn.innerHTML=`
            <div class="lesson-item-icon tile-icon-wrap ${topic.color}">${topic.icon}</div>
            <div style="flex:1">
                <div class="lesson-item-title">${topic.title}</div>
                <div class="lesson-item-sub">${topic.steps.length} שלבים · תיאוריה + תרגול</div>
            </div>`;
        btn.onclick=()=>showLesson(topic, showGeometryTopics, 'חזרה לגיאומטריה');
        list.appendChild(btn);
    });
    showScreen('geometry-topics-screen'); setActiveNav(null);
}

function renderLessonStep(){
    const lesson=currentLessonObj;
    const totalSteps=lesson.steps.length+1;
    const stepNum=currentStepIdx+1;
    const isExam=currentStepIdx===lesson.steps.length;
    const pct=Math.round((stepNum/totalSteps)*100);

    const progressHtml=`
        <div class="step-progress-wrap">
            <div class="step-progress-label">
                <span>שלב ${stepNum} / ${totalSteps}</span>
                <span>${isExam?'🏆 מבחן סיום':`שלב ${lesson.steps[currentStepIdx].ruleNumber||currentStepIdx+1} מתוך ${lesson.steps.length}`}</span>
            </div>
            <div class="step-progress-bg"><div class="step-progress-fill" style="width:${pct}%"></div></div>
        </div>`;

    let bodyHtml;
    if(isExam){
        bodyHtml=`
            <div class="lesson-section">
                <div class="lesson-section-title">🏆 מבחן סיום</div>
                <div class="exam-step-icon">📝</div>
                <p class="exam-step-desc">
                    עברת על כל ${lesson.steps.length} החוקים — עכשיו הגיע הזמן לבחן את עצמך!<br>
                    שאלות ברמת הפסיכומטרי בנושא "${lesson.title}" — ללא טיימר, בקצב שלך.
                </p>
                <button class="exam-btn" onclick="startExamQuiz('${lesson.examTopicFilter}','${lesson.title}')">
                    📝 להתחיל מבחן סיום
                </button>
            </div>
            <div class="step-nav-row" style="margin-top:16px">
                <button class="step-nav-prev" style="flex:1" onclick="goPrevStep()">← הקודם</button>
            </div>`;
    } else {
        const step=lesson.steps[currentStepIdx];
        currentStepEx=step.generator();
        const ex=currentStepEx;
        const isFirst=currentStepIdx===0;
        const isLast=currentStepIdx===lesson.steps.length-1;
        const optsHtml=ex.options.map((opt,i)=>
            `<button class="option-btn" onclick="checkStepAnswer(this,${i===ex.correct},${ex.correct})">(${i+1})&nbsp;&nbsp;${opt}</button>`
        ).join('');
        bodyHtml=`
            <div class="step-theory-card">
                <div class="step-rule-badge">${step.ruleNumber!=null?`חוק ${step.ruleNumber}`:`שלב ${currentStepIdx+1}`} מתוך ${lesson.steps.length}</div>
                <div class="step-title">${step.title}</div>
                <div style="margin-top:10px">${step.theory}</div>
            </div>
            <div class="step-practice-section" id="step-practice">
                <div class="step-practice-label">✏️ תרגול</div>
                <div class="question-box" style="margin-bottom:14px">${ex.question}</div>
                <div class="options-list">${optsHtml}</div>
                <div class="step-explanation" id="step-exp"></div>
                <button class="practice-again-btn" id="practice-again-btn" onclick="newStepExercise()">🔄 תרגל עוד</button>
            </div>
            <div class="step-nav-row">
                ${!isFirst?`<button class="step-nav-prev" onclick="goPrevStep()">← הקודם</button>`:''}
                <button class="step-nav-next" id="step-next-btn" onclick="goNextStep()"
                    ${lessonStepUnlocked?'':'disabled'}
                    style="${isFirst?'flex:1':''}">
                    ${isLast?'למבחן סיום 🏆':'לשלב הבא →'}
                </button>
            </div>`;
    }

    const content=document.getElementById('lesson-content');
    content.innerHTML=`
        <div class="category-screen-title" style="margin-bottom:6px">${lesson.icon} ${lesson.title}</div>
        ${progressHtml}
        ${bodyHtml}`;
    typesetMath([content]);
}

function checkStepAnswer(btn, isCorrect, correctIdx){
    const section=document.getElementById('step-practice');
    if(!section||section.dataset.answered) return;
    section.dataset.answered='1'; lessonStepUnlocked=true;
    const allBtns=section.querySelectorAll('.option-btn');
    allBtns.forEach(b=>b.disabled=true);
    if(isCorrect){ btn.classList.add('correct'); }
    else { btn.classList.add('wrong'); allBtns[correctIdx].classList.add('correct'); }
    const expEl=document.getElementById('step-exp');
    if(expEl&&currentStepEx){
        expEl.innerHTML=(isCorrect?'✅ ':'❌ ')+currentStepEx.explanation;
        expEl.className='step-explanation'+(isCorrect?'':' wrong-exp');
        expEl.style.display='block'; typesetMath([expEl]);
    }
    const againBtn=document.getElementById('practice-again-btn');
    if(againBtn) againBtn.style.display='block';
    const nextBtn=document.getElementById('step-next-btn');
    if(nextBtn) nextBtn.removeAttribute('disabled');
}

function newStepExercise(){ renderLessonStep(); }

function goNextStep(){
    currentStepIdx++; lessonStepUnlocked=false; renderLessonStep(); window.scrollTo(0,0);
}

function goPrevStep(){
    if(currentStepIdx<=0) return;
    currentStepIdx--; lessonStepUnlocked=true; renderLessonStep(); window.scrollTo(0,0);
}

function startExamQuiz(topicFilter, title){
    const EXAM_SIZE=10;
    let pool=shuffleArray(allQuestions.filter(q=>q.topic.startsWith(topicFilter)));
    if(pool.length < EXAM_SIZE && currentLessonObj && currentLessonObj.steps){
        const generators=currentLessonObj.steps.filter(s=>s.generator).map(s=>s.generator);
        const catForGen=topicFilter.startsWith('גיאומטריה')?'geometry':topicFilter.startsWith('בעיות')?'motion':'algebra';
        if(generators.length > 0){
            let i=0, safety=0;
            while(pool.length < EXAM_SIZE && safety++ < 50){
                const ex=generators[i++ % generators.length]();
                pool.push({ topic:topicFilter, category:catForGen,
                    question:ex.question, options:ex.options, correct:ex.correct, explanation:ex.explanation });
            }
        } else {
            const extra=shuffleArray(allQuestions.filter(q=>q.category===catForGen));
            pool=pool.concat(extra).slice(0,EXAM_SIZE);
        }
    }
    pool=pool.slice(0,EXAM_SIZE);
    if(pool.length===0){ showComingSoon(title); return; }
    currentIndex=0; score=0; quizNoTimer=true;
    currentQuizQuestions=pool;
    currentQuizQuestions._categoryLabel=title+' — מבחן סיום';
    showScreen('quiz-screen'); setActiveNav(null); loadQuestion(0);
}

initApp();
