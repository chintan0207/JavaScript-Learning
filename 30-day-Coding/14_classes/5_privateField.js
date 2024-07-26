class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }
}

// Creating an instance and testing deposit and withdraw methods
const account = new Account(100);
account.deposit(50);       // Outputs: Deposited: 50. New balance: 150
account.withdraw(30);      // Outputs: Withdrew: 30. New balance: 120
console.log(account.getBalance());  // Outputs: 120
