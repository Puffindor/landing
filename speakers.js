const speakers = [
 {
  name: 'василь хайрутдинов',
  description: 'Основатель онлайн-игры и Бизнес-форума Виртуальная Россия',
  hiddenDescription:
   'Организатор онлайн-игры и Бизнес-форума «Виртуальная Россия» в Удмуртии',
  company: '«Виртуальная Россия»',
  img: 'speaker-1',
 },
 {
  name: 'Мария куликова',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Ed Tech',
  img: '',
 },
 {
  name: 'игорь артюхов',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Ed Tech',
  img: '',
 },
 {
  name: 'олег петров',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Журналистика',
  img: '',
 },
 {
  name: 'ольга иваненко',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Туризм',
  img: '',
 },
 {
  name: 'олег ланкинен',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Строительство',
  img: '',
 },
 {
  name: 'олег петров',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Журналистика',
  img: '',
 },
 {
  name: 'ольга иваненко',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Туризм',
  img: '',
 },
 {
  name: 'олег ланкинен',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Строительство',
  img: '',
 },
 {
  name: 'олег петров',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Журналистика',
  img: '',
 },
 {
  name: 'ольга иваненко',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Туризм',
  img: '',
 },
 {
  name: 'олег ланкинен',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Строительство',
  img: '',
 },
 {
  name: 'олег петров',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Журналистика',
  img: '',
 },
 {
  name: 'ольга иваненко',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Туризм',
  img: '',
 },
 {
  name: 'олег ланкинен',
  description: 'РАО ЕС, главный специалист',
  hiddenDescription:
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  company: 'Строительство',
  img: '',
 },
];

document.querySelector('.speakers__list').innerHTML = speakers
 .map(
  (speaker) =>
   `   
<li class="speakers__list__item"> 
        <div class='speakers__list__item__img-container'> 
            <img alt="speaker-photo" class="speakers__list__item__img" src="./assets/speakers/${
             speaker.img ? speaker.img : 'base-avatar'
            }.png"/>
            <div class="speakers__animated"> 
                <p class="speakers__list__item__company">${speaker.company}</p>
                <p class="hidden__description">${speaker.hiddenDescription}</p>
            </div>  
        </div>
        <div class="speakers__list__item__text"> 
            <h3 class="speakers__list__item__name">${speaker.name}</h3>
            <p class="speakers__list__item__description">${
             speaker.description
            }</p>
        </div>
    </li>
`
 )
 .join('');
