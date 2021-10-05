Τα συγκεκριμένα αρχεία αποτελούν μέρος μιας εφαρμογής για Android συσκευές με σκοπό την αποστολή της τοποθεσίας του χρήστη, έπειτα από το πάτημα ενός κουμπιού (red panic button application). Το project είναι δομημένο με την χρήση Cordova (https://cordova.apache.org/), η οποία στοχέυει στην ανάπτυξη cross-platform εφαρμογών για κινητά και React (https://reactjs.org/), η οποία στοχεύει στην ανάπτυξη γραφικών διεπαφων χρήσης.

ΣΗΜΑΝΤΙΚΟ: ο αριθμός στον οποίο θα αποσταλεί το μήνυμα καθορίζεται στην μεταβλητή ΄number΄ του αρχείο ‘utils.js’. Χρειάζεται πριν από κάθε χρήση της εφαρμογής να προσαρμοστεί σε αριθμό της επιλογής σας η συγκεκριμένη μεταβλητή.

Απαραίτητα βήματα για να μπορέσει να λειτουργήσει το project:
Προαπαιτούμενη η εγκατάσταση της Node.js και npm.
1. Εγκατάσταση της Cordova ( npm install -g cordova ).
2. Δημιουργία του project της cordova στον επιθυμητό φάκελο ( cordova create <επιλεγμένο_’ονομα> ).
3. Προσθήκη της πλατφόρμας στην οποία είναι επιθυμητή η εκτέλεση του project. Στην συγκεκριμένη περίπτωση το Android ( cordova platform add Android ).

Development mode:
Η εφαρμογή μπορεί να εκτελεστεί σε browsers με σκοπό τον έλεγχό της.
Για να λειτουργήσει μόνο το σκέλος της React (χωρίς την λειτουργικότητα της εύρεσης της τοποθεσίας και της αποστολής του μηνύματος) υπάρχει η εντολή ( npm start ).
Αν σκοπός είναι η χρήση και του τμήματος της Cordova, τότε ( cordova run browser ). Επιβάλλεται η προήγηση της εντολής ( cordova platform add browser ). Σκοπός της συγκεκριμένης χρήσης κατά κύριο λόγο ο έλεγχος του project μέσω εργαλείου inspect.

Mobile mode:
Αν υπάρχει συνδεδεμένο κινητό στον υπολογιστή με ενεργοποιημένη την επιλογή USB debugging, η εκτέλεση της εντολής ( cordova run android –device ) είναι αρκετή για την δημιουργία της εφαρμογής και εγκατάστασής της στο κινητό.
Σε αντίθετη περίπτωση με την εντολή ( cordova build android ) εκτελείται μόνο το build της android εφαρμογής. Στον φάκελο ΄<θέση_φακέλου>\<όνομα_project>\platforms\android\app\build\outputs\apk\debug΄ δημιουργείται το αρχειο .apk το οποίο μπορεί να εγκατασταθεί χειροκίνητα στην κινητή συσκευή.
