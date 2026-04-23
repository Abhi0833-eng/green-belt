#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype,
    Address, Env, Symbol, symbol_short,
};

#[contracttype]
pub enum DataKey {
    Balance(Address),
    Admin,
    TotalSupply,
}

#[contract]
pub struct RewardToken;

#[contractimpl]
impl RewardToken {
    pub fn initialize(env: Env, admin: Address) {
        admin.require_auth();
        env.storage().persistent().set(&DataKey::Admin, &admin);
        env.storage().persistent().set(&DataKey::TotalSupply, &0i128);
    }

    pub fn mint(env: Env, to: Address, amount: i128) {
        let admin: Address = env.storage().persistent().get(&DataKey::Admin).unwrap();
        admin.require_auth();

        let balance: i128 = env.storage().persistent().get(&DataKey::Balance(to.clone())).unwrap_or(0);
        env.storage().persistent().set(&DataKey::Balance(to.clone()), &(balance + amount));

        let supply: i128 = env.storage().persistent().get(&DataKey::TotalSupply).unwrap_or(0);
        env.storage().persistent().set(&DataKey::TotalSupply, &(supply + amount));

        env.events().publish((symbol_short!("mint"),), (to, amount));
    }

    pub fn balance(env: Env, addr: Address) -> i128 {
        env.storage().persistent().get(&DataKey::Balance(addr)).unwrap_or(0)
    }

    pub fn total_supply(env: Env) -> i128 {
        env.storage().persistent().get(&DataKey::TotalSupply).unwrap_or(0)
    }

    pub fn transfer(env: Env, from: Address, to: Address, amount: i128) {
        from.require_auth();
        let from_balance: i128 = env.storage().persistent().get(&DataKey::Balance(from.clone())).unwrap_or(0);
        if from_balance < amount {
            panic!("Insufficient balance");
        }
        env.storage().persistent().set(&DataKey::Balance(from), &(from_balance - amount));
        let to_balance: i128 = env.storage().persistent().get(&DataKey::Balance(to.clone())).unwrap_or(0);
        env.storage().persistent().set(&DataKey::Balance(to), &(to_balance + amount));
    }
}