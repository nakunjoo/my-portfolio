import { useState } from 'react';
import { Icon } from '@iconify/react';
import '../styles/Project.scss';

type images = {
  id: string;
  src: string;
};

type contents = {
  id: string;
  str: string;
};

type tags = {
  id: string;
  name: string;
};

type gits = {
  type: string;
  url: string;
};

interface project {
  name: string;
  images: images[];
  content: contents[];
  tag: tags[];
  site: string | null;
  configure: string | null;
  git: gits[];
}

export default function Project({ data }: { data: project }) {
  const [imgNum, setImgNum] = useState<number>(0);

  return (
    <div className={'projectWrap'}>
      <div className={'container'}>
        <div className={'content'}>
          <div className={'imageBox'}>
            {data.images.map((img: images, index: number) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.id}
                className={`${imgNum === index ? 'active' : ''}`}
              />
            ))}
            <ul className={'circleBox'}>
              {data.images.map((img: images, index: number) => (
                <li
                  key={img.id}
                  className={`circle ${imgNum === index ? 'active' : ''}`}
                  onClick={() => {
                    setImgNum(index);
                  }}
                  onKeyDown={() => {
                    setImgNum(index);
                  }}
                />
              ))}
            </ul>
          </div>
          {/* <div className={'videoBox'}>
            <video controls muted loop>
              <source src={data.video} type={'video/mp4'} />
            </video>
          </div> */}
          <div className={'detailBox'}>
            <h3>{data.name}</h3>
            <ul>
              {data.content.map((value: contents) => (
                <li key={value.id}>{value.str}</li>
              ))}
            </ul>
            <p>
              {data.tag.map((tag: tags) => (
                <span key={tag.id}>
                  {'#'}
                  {tag.name}
                </span>
              ))}
            </p>
            {data.site ? (
              <a href={data.site} target={'_blank'} rel={'noreferrer'}>
                <Icon
                  icon={'clarity:house-solid'}
                  style={{ color: '#636363' }}
                />
                {data.configure ? (
                  <p className={'configure'}>{data.configure}</p>
                ) : (
                  <div />
                )}
              </a>
            ) : (
              <div />
            )}
            {data.git.map((value, index) => (
              <div className={'gitBox'} key={`product-${value.url}`}>
                <a href={value.url} target={'_blank'} rel={'noreferrer'}>
                  <Icon icon={'bi:github'} style={{ color: '#636363' }} />
                </a>
                <p>{value.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
