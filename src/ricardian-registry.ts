import { BigInt } from "@graphprotocol/graph-ts"
import {
  RicardianRegistry,
  RicardianRegistered
} from "../generated/RicardianRegistry/RicardianRegistry"
import { Ricardian } from "../generated/schema"

export function handleRicardianRegistered(event: RicardianRegistered): void {
  const ricardianID = event.params.ricardian.toHexString()
  const ricardian = new Ricardian(ricardianID)
  
  ricardian.name = event.params.name
  ricardian.symbol = event.params.symbol
  ricardian.baseURI = event.params.baseURI
  ricardian.mintFee = event.params.mintFee
  ricardian.owner = event.params.owner
 
  ricardian.save()
}
