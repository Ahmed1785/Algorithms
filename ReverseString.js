function ReverseString(str) {
    for(var i = 0; i < str.length; i++){
        temp = str[i];
        str[i] = str([length-i]-1);
        str([length-i]-1) = temp;
    }
    return ReverseString;
}
ReverseString("Hello");