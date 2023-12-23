const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('wiersze.db');

// Utwórz tabelę Wiersze
db.run(`CREATE TABLE IF NOT EXISTS Wiersze (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tytul TEXT,
    autor TEXT,
    tresc TEXT
)`);

// Dodaj przykładowe wiersze
const przykladoweWiersze = [
    { tytul: 'Wiersz 1',
    autor: 'Autor 1',
    tresc: `Tak nakazał Pan
            Boskim wiatrem natchniona
            Polnego kwiatu
            Narcyzu Saronu
            
            Rozweseliła się pustynia I spalona ziemia
            Smagana ogniem piekielnych deszczy
            Wydały kwiaty dzikie łąki i królów ogrody
            Weseli się ziemia
            Kochanków wianki chłodzą twarz
            
            Narcyz
            Chortensja
            Róża
            Bańka
            Małże
            Otuleni w księgach
            Na spiżowym posłaniu
            
            Wystawili mi pomnik z marmuru
            I kamienną twarzą patrzę na owoce mojej krwii
            Zakwitłą śmierć miłości
            Tuż przed oczami
            
            Jestem narcyzem Saronu
            I wyrośl mojej krwi samozrodzona
            Z miłości zginęła
            Tonąc w niej
            I twarzą Boga
            Zza mętni chmur
            
            I stroicie mnie teraz kwiatów drogich girlandą
            Wonną ramką natury, pierwszym jej cudem
            Wbijając mi w oczy, pod twarzą, na tchnienie
            Włócznią sześć płatków
            Powolną agonię
            
            Błękitem, czerwienią i szarpanym kształtem
            Czy kulą idealną zerwaną z sukni wiosny
            To ja jestem wiosna
            A to jest mój syn
            
            I wabić mi chcecie tłum wielobarwny
            Podziwiać ma ziemską- tak łatwiej- koronę
            Jestem polnym kwiatem, żyję wśród traw
            Jestem polnym kwiatem usychającym na ołtarzu
            Pięknym kwiatem`
},{
    tytul: 'Wiersz 2', autor: 'Autor 2', tresc: 'Tekst wiersza 2' },
    // Dodaj więcej wierszy według potrzeb
];

const stmt = db.prepare('INSERT INTO Wiersze (tytul, autor, tresc) VALUES (?, ?, ?)');
przykladoweWiersze.forEach((wiersz) => {
    stmt.run(wiersz.tytul, wiersz.autor, wiersz.tresc);
});

stmt.finalize();

db.close();