import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.type = 'error'; // Тип уведомления. 'notice', 'info', 'success', или 'error'
defaults.title = false; //    Название уведомления. Может быть строкой, элементом или falseбез заголовка.
defaults.titleTrusted = false; //    Следует ли доверять заголовку или избегать его содержания. (Не разрешать HTML.)
defaults.text = false; //    Текст уведомления. Может быть строкой, элементом или falseбез текста.
defaults.textTrusted = false; //    Следует ли доверять тексту или избегать его содержимого. (Не разрешать HTML.)
defaults.styling = 'brighttheme'; //    Какие классы стилей использовать. (Может быть «яркой темой», «материалом», другой строкой, предоставленной модулем, или объектом стиля.)
defaults.icons = 'brighttheme'; //    Какие классы значков использовать (может быть «brighttheme», «material», другая строка, предоставляемая модулем, или объект значка.)
defaults.mode = 'no-preference'; //    Светлая или темная версия темы, если поддерживается стиль. Это переопределяет медиа-запрос CSS, когда задано предпочтение. (Может быть «без предпочтений», «светлый» или «темный».)
// defaults.addClass = ''; //    Дополнительные классы будут добавлены в примечание. (Для индивидуального стиля.)
// defaults.addModalClass = ''; //    Дополнительные классы должны быть добавлены к уведомлению, только в модальном режиме.
// defaults.addModelessClass = ''; //    Дополнительные классы должны быть добавлены к уведомлению, только в немодальном режиме.
defaults.autoOpen = true; //    Открывайте уведомление сразу после его создания.
defaults.width = '360px'; //    Ширина объявления.
defaults.minHeight = '16px'; //    Минимальная высота объявления. Он будет расширяться, чтобы соответствовать содержимому.
defaults.maxTextHeight = null; //Максимальная высота текстового контейнера. Если текст выходит за эту высоту, появятся полосы прокрутки. Используйте null, чтобы снять это ограничение.
defaults.icon = true; //    Задайте для icon значение true, чтобы использовать значок по умолчанию для выбранного стиля / типа, false, если значок отсутствует, или строку для вашего собственного класса значков.
defaults.animation = 'fade'; //    Анимация, используемая при отображении и скрытии уведомления. 'none' и 'fade' поддерживаются через CSS. Остальные поддерживаются через модуль Animate и Animate.css.
defaults.animateSpeed = 'normal'; //    Скорость, с которой уведомление появляется и исчезает. "медленно", "нормально" или "быстро". Соответственно 400 мс, 250 мс, 100 мс.
defaults.shadow = true; //    Отобразите падающую тень.
defaults.hide = true; //    После задержки закройте уведомление.
defaults.delay = 5000; //    Задержка в миллисекундах до удаления уведомления. Если установлено значение Infinity, уведомление не закроется, но не будет считаться прикрепленным, поэтому оно будет закрыто вместе со всеми незакрепленными уведомлениями, если щелкнуть модальный фон.
defaults.mouseReset = false; //    Сбросьте таймер скрытия, если мышь наведется на уведомление.
defaults.closer = true; //    Предоставьте пользователю кнопку для закрытия уведомления вручную.
defaults.closerHover = false; //    Показывать кнопку закрытия только при наведении курсора.
defaults.sticker = false; //    Предоставьте пользователю кнопку, чтобы пользователь мог вручную прикрепить уведомление.
defaults.stickerHover = false; //    Показывать кнопку с наклейкой только при наведении курсора.
// defaults.labels = { close: 'Close', stick: 'Pin', unstick: 'Unpin' }; //    Разнообразный отображаемый текст помогает облегчить интернационализацию.
defaults.remove = true; //    Удалите элементы уведомления из DOM после его закрытия.
defaults.destroy = true; //    Следует ли удалять уведомление из стека (и, следовательно, из истории стека), когда оно закрыто.
