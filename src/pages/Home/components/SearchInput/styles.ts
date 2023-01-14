import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;
    h3 {
      font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
    span {
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  div {
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      background: ${({ theme }) => theme.colors["base-input"]};
      border: 1px solid ${({ theme }) => theme.colors["base-border"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      transition: 0.4s;
      &:focus {
        border-color: ${({ theme }) => theme.colors["brand-blue"]};
        outline: none;
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      padding: 1rem;
      background: ${({ theme }) => theme.colors["base-profile"]};
      border: 1px solid ${({ theme }) => theme.colors["base-border"]};
      color: ${({ theme }) => theme.colors["base-text"]};
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["base-post"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
