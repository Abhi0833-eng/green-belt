#![no_std]
use soroban_sdk::{
    contract, contractimpl, contracttype, symbol_short,
    Address, Env, Symbol, Map, Vec, String,
};

#[contracttype]
pub enum DataKey {
    Option(Symbol),
    TotalVotes,
    Voted(Address),
    Admin,
}

#[contract]
pub struct AdvancedPoll;

#[contractimpl]
impl AdvancedPoll {
    pub fn initialize(env: Env, admin: Address) {
        env.storage().persistent().set(&DataKey::Admin, &admin);
        env.storage().persistent().set(&DataKey::TotalVotes, &0u32);
    }

    pub fn vote(env: Env, voter: Address, option: Symbol) -> u32 {
        voter.require_auth();

        let voted_key = DataKey::Voted(voter.clone());
        if env.storage().persistent().has(&voted_key) {
            panic!("Already voted");
        }

        env.storage().persistent().set(&voted_key, &true);

        let key = DataKey::Option(option.clone());
        let count: u32 = env.storage().persistent().get(&key).unwrap_or(0);
        let new_count = count + 1;
        env.storage().persistent().set(&key, &new_count);

        let total: u32 = env.storage().persistent().get(&DataKey::TotalVotes).unwrap_or(0);
        env.storage().persistent().set(&DataKey::TotalVotes, &(total + 1));

        env.events().publish((symbol_short!("voted"),), (voter, option, new_count));

        new_count
    }

    pub fn get_votes(env: Env, option: Symbol) -> u32 {
        env.storage().persistent().get(&DataKey::Option(option)).unwrap_or(0)
    }

    pub fn get_total(env: Env) -> u32 {
        env.storage().persistent().get(&DataKey::TotalVotes).unwrap_or(0)
    }

    pub fn has_voted(env: Env, voter: Address) -> bool {
        env.storage().persistent().has(&DataKey::Voted(voter))
    }

    pub fn get_admin(env: Env) -> Address {
        env.storage().persistent().get(&DataKey::Admin).unwrap()
    }
}