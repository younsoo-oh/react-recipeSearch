# recipeSearch
英語で材料と料理名を検索すると、作り方のURLや写真など登場します。

Screenshots
------------------

<div>
  <img src="https://user-images.githubusercontent.com/59629974/101302632-759a9880-387f-11eb-92d9-1ad2dcc75285.png" width="200"></img>
  <img src="https://user-images.githubusercontent.com/59629974/101302713-b692ad00-387f-11eb-923e-6c0b1147168b.png" width="200"></img>
  <img src="https://user-images.githubusercontent.com/59629974/101302717-b8f50700-387f-11eb-86ba-eb5e30f4d980.png" width="200"></img>
</div>


LogBook
-----------------

外国のレシピAPIを連動して作りました。
http://www.recipepuppy.com/about/api/

#### 検索機能
左側には材料名（例、potato, eggなど）、右側には料理名（例、pizza, omeletなど）を入力すると、
APIからデイタをもらい、10個づつ見せるようにしました。
一番下のNext Pageを押すと、次の10個のデイタを呼び出します。

#### 説明機能
Picture + ingredientsを押すと、写真や食材全部を見せます。

#### 気に入り機能
検索したRecipeの👍をクリックすると、Favorite Recipeに追加します。
Favorite Recipeの❌をクリックすると、Favorite Recipeから削除します。
