function Binary (Tal) {
    binary = '';
    while( Tal > 0) {
        binary  = (tal % 2) + binary;
        Tal = Math.floor(Tal/2);
    }
    return binary;
}

