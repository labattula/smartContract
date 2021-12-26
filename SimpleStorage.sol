// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.11;

contract SimpleStorage {
    uint256 x;

    function get() public view returns (uint256) {
        return x;
    }

    function set(uint256 y) public {
        x = y;
    }

}