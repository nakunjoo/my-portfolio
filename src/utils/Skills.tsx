import Elevator from '../components/Elevator';
import Images from './Images';

export const mySkills1 = () => (
  <div className={'content-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        <h2>{'FRONTEND'}</h2>
        <div className={'imgBox'}>
          <div>
            <p>{'Html'}</p>
            <img src={Images.HtmlImg} alt={'html'} />
          </div>
          <div>
            <p>{'Css'}</p>
            <img src={Images.CssImg} alt={'css'} />
          </div>
          <div>
            <p>{'JavaScript'}</p>
            <img src={Images.JsImg} alt={'js'} />
          </div>
          <div>
            <p>{'TypeScript'}</p>
            <img src={Images.TsImg} alt={'ts'} />
          </div>
          <div>
            <p>{'Scss'}</p>
            <img src={Images.ScssImg} alt={'scss'} />
          </div>
          <div>
            <p>{'TailwindCss'}</p>
            <img src={Images.TailWindImg} alt={'tailwind'} />
          </div>
          <div>
            <p>{'Vue'}</p>
            <img src={Images.VueImg} alt={'vue'} />
          </div>
          <div>
            <p>{'React'}</p>
            <img src={Images.ReactImg} alt={'react'} />
          </div>
          <div>
            <p>{'Redux'}</p>
            <img src={Images.ReduxImg} alt={'redux'} />
          </div>
          <div>
            <p>{'Next'}</p>
            <img src={Images.NextImg} alt={'next'} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const mySkills2 = () => (
  <div className={'content-wrap'}>
    <div className={'container'}>
      <div className={'content'}>
        <div className={'back'}>
          <h2>{'BACKEND'}</h2>
          <div className={'imgBox'}>
            <div>
              <p>{'Node'}</p>
              <img src={Images.NodeImg} alt={'node'} />
            </div>
            <div>
              <p>{'MySQL'}</p>
              <img src={Images.MysqlImg} alt={'mysql'} />
            </div>
            <div>
              <p>{'Sequelize'}</p>
              <img src={Images.Sequelize} alt={'sequelize'} />
            </div>
            <div>
              <p>{'TypeORM'}</p>
              <img src={Images.TypeormImg} alt={'typeorm'} />
            </div>
            <div>
              <p>{'Swagger'}</p>
              <img src={Images.SwaggerImg} alt={'swagger'} />
            </div>
            <div>
              <p>{'Nest'}</p>
              <img src={Images.NestImg} alt={'nest'} />
            </div>
          </div>
        </div>
        <div className={'etc'}>
          <h2>{'ETC'}</h2>
          <div className={'imgBox'}>
            <div>
              <p>{'Github'}</p>
              <img src={Images.GithubImg} alt={'github'} />
            </div>
            <div>
              <p>{'Gcloud'}</p>
              <img src={Images.GcloudImg} alt={'gcloud'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ElevatorFloorB2 = (arrow: string) => (
  <Elevator floor={'B2'} title={'Skills'} arrow={arrow} />
);
