import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";
export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
  return (
    <Container
      className="flex"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Container>
  );
}

const Container = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  color: white;
  border-radius: 0.5rem;
  background-color: rgba(63, 63, 63, 0.5);
  &:focus {
    outline: none;
  }
`;