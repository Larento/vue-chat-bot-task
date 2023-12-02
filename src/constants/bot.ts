export const GREET = Symbol();
export const ORDER_PIZZA = Symbol();
export const SET_ALARM = Symbol();
export const SHOW_WEATHER = Symbol();

export const BOT_COMMANDS = [GREET, ORDER_PIZZA, SET_ALARM, SHOW_WEATHER] as const;

export const COMMAND_DICTIONARY = {
    [GREET]: '',
    [ORDER_PIZZA]: 'Заказать пиццу',
    [SET_ALARM]: 'Установить будильник',
    [SHOW_WEATHER]: 'Вывести погоду',
};

export const REPLY_DICTIONARY = {
    [GREET]: 'Приветствую! Что я могу для вас сделать?',
    [ORDER_PIZZA]: 'Хорошо, я закажу пиццу. Что еще могу сделать?',
    [SET_ALARM]: 'Ок, я заведу будильник пораньше. Что еще могу сделать?',
    [SHOW_WEATHER]: 'Сейчас уточню прогноз погоды. Что еще могу сделать?',
};
