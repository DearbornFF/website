import * as React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderStyled = styled.header`
  position:relative;
  padding: 0;
  background:rgba(255,255,255,0.75);
  @media screen and (min-width: 821px) {
    padding: var(--spacingVerticalXL) 0 0;
  }
`;
const FBLink = styled(Link)`
  position:absolute;
  padding:4px;
  top:0;
  right:0;
  z-index:2;
  svg{
    border-radius:18px;
    height:18px;
    width:18px;
    color: white;
    .bg{color: var(--colorNeutral2);}
    
  }
  &:hover{
    svg{
      .bg{color: var(--themeDark);}
    }
  }
  @media screen and (min-width: 640px) {
    padding:24px;
    svg{
      border-radius:24px;
      height:24px;
      width:24px;
      .bg{color: var(--colorNeutral3);}
    }
  }
`;
const NavStyled = styled.header`
    padding:0 var(--spacingHorizontalM) var(--spacingVerticalM);
    ul{
      margin:0;
      padding:0;
      width:100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      list-style:none;
    }
    li{
      margin:0;
      padding:0;
      text-align: center;
      flex: 1 1 160px;
    }
    li:nth-child(1) { 
      flex: 2 2 100%;
    }
    @media screen and (min-width: 821px) {
      padding:0 var(--spacingHorizontalM) var(--spacingVerticalXXL);
    }
    @media screen and (min-width: 1280px) {
      padding:0 var(--spacingHorizonalXXXL) var(--spacingVerticalXXL);
      ul{
        flex-direction: row wrap;
      }
      li{
        margin: 0 var(--spacingHorizonalXXXL);
      }
      li:nth-child(1) { 
        padding:0 72px;
        flex: 0 0 auto;
      }
      li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5){
        padding-top:78px;
        flex: 0 0 auto;
      }
      li:nth-child(1) { order: 3; }
      li:nth-child(2) { order: 1; }
      li:nth-child(3) { order: 2; }
      li:nth-child(4) { order: 4; }
      li:nth-child(5) { order: 5; }
    }
    a{
      display: inline-block;
      padding: var(--spacingVerticalXS) var(--spacingHorizontalS);
      color: var(--colorNeutral5);
      font-size: var(--fontSize500);
      letter-spacing: 0.05rem;
      cursor: pointer;
      text-decoration:none;
      @media screen and (min-width: 821px) {
        padding: var(--spacingVerticalM) var(--spacingHorizontalM);
      }
    }
    a:hover{
        color:var(--colorNeutral5);
        text-decoration:none;
    }
    a:visited{
      color:var(--colorNeutral5);
      text-decoration:none;
    }
    a:focus-visible{
      box-shadow: 0 0 0 1px var(--colorNeutral2);
    }
    a[aria-current="page"],
    a[aria-current="page"]:hover,
    a:hover{
      // color:var(--themeMedium);
      box-shadow: none;
      span{
        box-shadow: inset 0 var(--underlineLight) 0 0 var(--themeLight);
      }
      &:focus{
        box-shadow: 0 0 0 1px var(--colorNeutral2);
        span{
          box-shadow:none;
        }
      }
    }
    .logo{
      img{width:12rem;}
      a,a[aria-current="page"]{
        span{
          box-shadow:none;
        }
        &:focus{
          box-shadow: 0 0 0 1px var(--colorNeutral2);
        }
      }
      @media screen and (min-width: 821px) {
        img{width:18rem;}
      }
    }
`;

const Header = (props) => {
  const query = useStaticQuery(graphql`
    query HeaderQuery {
      logoImage: file(relativePath: { eq: "name.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  const logoImage = getImage(query.logoImage);
  return (
    <HeaderStyled>
        <NavStyled>
            <ul>
                <li className="logo"><Link to="/"><span>
                  <GatsbyImage image={logoImage} alt="Dearborn Family Farm" />
                </span></Link></li>
                <li><Link to="/about"><span>About the farm</span></Link></li>
                <li><Link to="/directions"><span>Contact & directions</span></Link></li>
                <li><Link to="/events"><span>Upcoming events</span></Link></li>
                <li><Link to="/education"><span>Education program</span></Link></li>
            </ul>
        </NavStyled>
        <FBLink to="https://www.facebook.com/profile.php?id=100087198810467" title="Facebook page">
          <svg viewBox="0 0 36 36" height="40" width="40" fill="currentColor"><path class="bg" d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path><path class="f" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path></svg>
        </FBLink>
    </HeaderStyled>
  )
}

export default Header