import { Command } from './command';
import Hello from './commands/hello';
import Discounts from './commands/discounts';

export const Commands: Command[] = [Hello, Discounts];