import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../../../../components/Links';
import Spinner from '../../../../components/Spinner';
import { IPost } from '../../../../contexts/PostsContext';
import { relativeDateFormatter } from '../../../../utils/formatter';
import { HeaderContainer } from './styles';

interface HeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export const PostHeader: React.FC<HeaderProps> = ({postData, isLoading}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <HeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <Link
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <Link
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </HeaderContainer>
  );
};