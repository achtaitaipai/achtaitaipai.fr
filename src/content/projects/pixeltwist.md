---
title: Pixel Twist
year: 2024
type: Outil
description: >
  Génération procédurale de sprites.
---

J'aime bien la création procédurale. On définit quelques règles un contexte et on obtient une infinité de résultats. Un peu comme si on travaillait par ensemble plutôt que par élément particulier. Et puis, il y a un quelque chose de sympa dans le fait de combiner le hasard et des règles strictes. Par exemple, mon petit générateur de son Pfxr utilise ce type de système pour générer des bruits d'explosions, de laser, de prouts, de sauts...

Ici, il s'agit de générer des images sur une petite grille, chaque case peut-être vide ou remplie par une couleur parmi une palette de 10. Les règles sont assez simples, on pourrait le faire à la main avec un dé. Chaque image est définie par ses dimensions et un `seed`.

Bien sûr, si on choisissait de façon complétement hasardeuse une option parmi les onze, on obtiendrait seulement une espèce de bruit et ça ne serait pas très intéressant.

Pour obtenir des résultats plus intéressants, la grille est parcourue de haut en bas et de gauche à droite. Les chances pour chaque cases d'être remplie ou vide dépendent de leurs positions. Pour les couleurs, on commence par choisir une couleur au hasard et à chaque case remplie, il y a une chance sur 100 d'en changer.

[Essayer en ligne](https://pixeltwist.achtaitaipai.fr/)
