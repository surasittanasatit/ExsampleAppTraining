ThaiToArabic = word => {
    let keyNumber = word.length;
    for (let i = 0; i < keyNumber; i++) {
        word = word.replace("๐", "0").replace("๑", "1").replace("๒", "2").replace("๓", "3").replace("๔", "4").replace("๕", "5").replace("๖", "6").replace("๗", "7").replace("๘", "8").replace("๙", "9").trim();
    }
    return word;
}

ArabiciToThai = (word) => {
    let keyNumber = word.length;
    for (let i = 0; i < keyNumber; i++) {
        word = word.replace("0", "๐").replace("1", "๑").replace("2", "๒").replace("3", "๓").replace("4", "๔").replace("5", "๕").replace("6", "๖").replace("7", "๗").replace("8", "๘").replace("9", "๙").trim();
    }
    return word;
}

export default {
    ThaiToArabic,
    ArabiciToThai
};
