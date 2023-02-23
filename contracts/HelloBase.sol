// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

struct Message {
    address sender;
    string message;
    uint timestamp;
}

contract HelloBase {
    event MessageSubmitted(
        address sender,
        string message,
        uint timestamp
    );

    Message[] public messages;

    function writeMessage(string memory _message) public {
        messages.push(Message(msg.sender, _message, block.timestamp));
        emit MessageSubmitted(msg.sender, _message, block.timestamp);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}
