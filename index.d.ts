export function diff<T extends object>(originalObj: T, updatedObj: T): T

export function addedDiff<T extends object>(originalObj: T, updatedObj: T): T

export function deletedDiff<T extends object>(originalObj: T, updatedObj: T): T

export function updatedDiff<T extends object>(originalObj: T, updatedObj: T): T

export interface DetailedDiff<T extends object> {
    added: T
    deleted: T
    updated: T
}

export function detailedDiff<T extends object>(originalObj: T, updatedObj: T): DetailedDiff<T>
