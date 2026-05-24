OVERSTATE MDT - VERSION SÉCURISÉE REALTIME DATABASE + FIREBASE AUTH

Mots de passe conseillés :
- Admin : overstate2026
- Utilisateur : overstateuser2026

IMPORTANT : cette version utilise Firebase Authentication.
Les utilisateurs ne peuvent plus modifier/supprimer les données depuis la base.
Ils peuvent seulement créer de nouvelles mises en détention / entrées.
Seul l’admin peut tout modifier/supprimer depuis le site.

INSTALLATION :
1. Firebase Console > Authentication > Commencer.
2. Active Email/Password.
3. Crée un utilisateur admin : admin@overstate.local avec le mot de passe admin.
4. Crée un utilisateur agent : user@overstate.local avec le mot de passe utilisateur.
5. Copie l’UID du compte admin.
6. Va dans Realtime Database > Données.
7. Crée : overstate/admins/UID_ADMIN = true
8. Dans firebase-config.js, remplace les valeurs REMPLACE_MOI par ta config Firebase.
9. Mets les fichiers sur Netlify.

RÈGLES REALTIME DATABASE À COLLER :

{
  "rules": {
    "overstate": {
      ".read": "auth != null",
      "admins": {
        "$uid": {
          ".read": "auth != null && auth.uid === $uid",
          ".write": false
        }
      },
      "settings": {
        ".write": "root.child('overstate/admins/' + auth.uid).val() === true"
      },
      "tabs": {
        ".write": "root.child('overstate/admins/' + auth.uid).val() === true"
      },
      "infractions": {
        ".write": "root.child('overstate/admins/' + auth.uid).val() === true"
      },
      "casiers": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "warnings": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "saisies": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "dispatch": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "bracelets": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "activity": {
        "$id": {
          ".write": "root.child('overstate/admins/' + auth.uid).val() === true || (auth != null && !data.exists() && newData.child('createdBy').val() === auth.uid)"
        }
      },
      "$other": {
        ".write": "root.child('overstate/admins/' + auth.uid).val() === true"
      }
    }
  }
}
