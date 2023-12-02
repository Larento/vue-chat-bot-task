import { BOT_COMMANDS, COMMAND_DICTIONARY, REPLY_DICTIONARY } from '@/constants/bot';

export type MessageSender = 'bot' | 'person';
export type MessageContent = string;
export type Message = {
    sender: MessageSender;
    content: MessageContent;
};

export function createMessage(sender: MessageSender, content: MessageContent): Message {
    return {
        sender,
        content,
    };
}

export type BotCommand = (typeof BOT_COMMANDS)[number];

export function getCommandLabel(command: BotCommand): MessageContent {
    return COMMAND_DICTIONARY[command];
}

export function getReplyLabel(command: BotCommand): MessageContent {
    return REPLY_DICTIONARY[command];
}
