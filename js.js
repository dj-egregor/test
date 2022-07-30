const animals = [
  "icon-sea_reptile_ocean_animal_turtle_icon_209440",
  "icon-divingscubaoceansea_109733",
  "icon-life_sea_ocean_underwater_oyster_icon_209447",
  "icon-life_shrimp_seafood_sea_prawn_icon_209439",
  "icon-life_sea_seafood_flounder_flatfish_fish_icon_209437-1",
  "icon-life_animal_squid_sea_octopus_icon_209390",
  "icon-life_sea_seafood_flounder_flatfish_fish_icon_209437",
  "icon-fish_ocean_sea_seafood_labster_icon_212587",
  "icon-sea_ocean_fish_star_icon_225042",
  "icon-ocean_nautical_marine_fish_dolphin_icon_209522",
  "icon-pets_ocean_marine_manta_fish_animals_icon_209454",
  "icon-pet-animal-pets-fish-gold_108547",
  "icon-dog_animal_pet_bulldog_icon_124662",
  "icon-pet_animal_badge_paw_pawprint_icon_124631",
  "icon-pet-animal-pets-paw-dog-cat-paws_108559",
  "icon-clownfish_animal_pet_creature_animals_icon_182998-1",
  "icon-household_chores_feeding_pet_feed_dog_food_icon_133393",
  "icon-clownfish_animal_pet_creature_animals_icon_182998",
  "icon-dog_animal_pet_creature_animals_icon_183002",
  "icon-animal-dog_115245-1",
  "icon-animal-dog_115245",
  "icon-85241",
  "icon-artboard-10_89054",
];

// <svg width="16" height="12" class="hdr-cont-icon">
//   <use href="./images/icons.svg#icon-envelope"></use>
// </svg>;

console.log(animals);

let select = document.createElement("div");
select.classList.add("collection");

for (let i = 111; i <= 310; i++) {
  let option = document.createElement("div");
  const randomIndex = Math.floor(Math.random() * (animals.length - 1)); // генерируем случайный индекс в допустимом диапазоне
  const result = animals[randomIndex]; // извлекаем значение под случайным индексом

  option.classList.add("plitka");

  option.innerHTML = '<svg width="70" height="70" class="sprites"><use href="./sprite-animals.svg#' + result + '"></use></svg>';
  //option.innerText = Math.floor(Math.random() * 101);
  //option.value = i;
  //option.innerText = i;
  //option.appendChild(document.createElement("svg"));

  select.appendChild(option);
}

document.getElementById("container").appendChild(select);
