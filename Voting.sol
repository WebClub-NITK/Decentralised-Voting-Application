pragma solidity ^0.4.18;


contract Voting {
    mapping(bytes32 => uint32) public votesReceived;
    bytes32[] public candidates;

    function Voting(bytes32[] cList) public {
        candidates = cList;
    }

    function totalVotesFor(bytes32 candidate)  public view returns (uint32) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }

    function voteforCandidate(bytes32 candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate] += 1;
    }

    function validCandidate(bytes32 candidate) public view returns (bool) {
        for (uint8 i = 0; i < candidates.length; i++) {
            if (candidates[i] == candidate)
                return true;
        }
        return false;
    }
}