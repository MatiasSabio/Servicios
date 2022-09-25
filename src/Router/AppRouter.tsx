import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BackofficeRouter } from "./BackOfficeRouter";

export const AppRouter = () => {
	// const dispatch = useAppDispatch();

	// const { data: token } = useAppSelector((state) => state.login);
	// const { username } = useAppSelector((state) => state.usuario);

	// const {
	//     response,
	//     http: httpBuscarUsuario
	// } = useApiHttp( );

	// useEffect(() => {
	//     if(evaluarNullUndefined( token ) && !evaluarNullUndefined( username ) ){
	//         if( getInstitucionSessionStorage() !== null ){
	//             httpBuscarUsuario( _getUsuarioLogueado() )
	//         }
	//     }else{
	//         dispatch( login({token:getTokenSessionStorage()}))
	//     }
	// }, [token, username])

	// useEffect(() => {
	//   if( evaluarNullUndefined( response ) ) {
	//     if(response?.data.authorities[0].authority === 'SUPER_ADMIN' &&
	//         response?.data.institucion[0].nombre === 'alumnosinfo'){
	//             setUltimaPaginaSessionStorage(RedirigirRutaWeb.logintTool);
	//         }
	//     dispatch( usuarioLogueado( response?.data ))
	//   }
	// }, [response])

	// const AppPrivateRouter = lazy(() => import('./AppPrivateRouter').then(({ AppPrivateRouter }) => ({ default: AppPrivateRouter })),);

	return (
		<BrowserRouter>
			{/* <Suspense 
                fallback={
                    <Box className='grid grid-cols-1 h-screen '>
                        <CircularProgress  className='m-auto'/>
                    </Box>
                }
            > */}
			<Routes>
				{/* <Route path="/" 
                        element={ 
                            <AppPublicRouter>
                                <Login /> 
                            </AppPublicRouter>
                    } 
                    /> */}
				<Route
					path='/*'
					element={
						//<AppPrivateRouter>
						<BackofficeRouter />
						// </AppPrivateRouter>
					}
				/>
			</Routes>
			{/* </Suspense>           */}
		</BrowserRouter>
	);
};
