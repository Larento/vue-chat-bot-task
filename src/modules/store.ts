import { reactive } from 'vue';

import {
    createMessage,
    getCommandLabel,
    getReplyLabel,
    type BotCommand,
    type Message,
    type MessageContent,
    type MessageSender,
} from '@/modules/chat';
import { BOT_COMMANDS, COMMAND_DICTIONARY, GREET } from '@/constants/bot';

interface Store {
    commandList: BotCommand[];
    currentCommand: BotCommand | null;
    messages: Message[];

    addMessage(sender: MessageSender, content: MessageContent): void;
    isPreviousMessageFromDifferentSender(messageIndex: number): boolean;
    setCommand(command: BotCommand): void;
    clearCommand(): void;
    postCommand(): void;
    executeCommand(): void;
    getCommandLabel(): string;
}

export const store = reactive<Store>({
    commandList: BOT_COMMANDS.filter((label) => label !== GREET),
    currentCommand: GREET,
    messages: [],

    addMessage(sender, content) {
        this.messages.push(createMessage(sender, content));
    },

    isPreviousMessageFromDifferentSender(messageIndex) {
        const currentMessage = this.messages[messageIndex];
        const previousMessageIndex = Math.max(0, messageIndex - 1);
        const previousMessage = this.messages[previousMessageIndex];
        return messageIndex === 0 || previousMessage.sender !== currentMessage.sender;
    },

    setCommand(command) {
        this.currentCommand = command;
    },

    clearCommand() {
        this.currentCommand = null;
    },

    postCommand() {
        const command = this.currentCommand;
        if (command) {
            this.addMessage('person', getCommandLabel(command));
        }
    },

    executeCommand() {
        const command = this.currentCommand;
        if (command) {
            this.addMessage('bot', getReplyLabel(command));
        }
    },

    getCommandLabel() {
        return this.currentCommand ? COMMAND_DICTIONARY[this.currentCommand] : '';
    },
});
