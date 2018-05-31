myApp.controller('summarystacktraceController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){

	//Back to Summary types
	$scope.goToSummaryTypes = function(){
		$location.path('/summarytypes');
	}
	
	
	//Display mock data in table	
		 var data = [
			  {id: "1", date: "2017-11-13 16:35:36", type: "IdSekretess", name: "IdSokning.java:149", logDate: "2017-11-13 16:35:36;077",
			  logThread: "Tråd: [ACTIVE] ExecuteThread: '19' for queue: 'weblogic.kernel.Default (self-tuning)'",
			  logCallID: "AnropsID: u30216_15022.171113.163531781.160.72",
			  logException: "se.rsv.id.util.exception.IdSekretessException: Felkod:70 Sekretess",
			  logContent: "atse.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)\natse.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)\natse.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)\natse.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\natse.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\natsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\natjava.lang.reflect.Method.invoke(Method.java:597)\natcom.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)\natcom.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)\natse.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)\natsun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)\natsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\natjava.lang.reflect.Method.invoke(Method.java:597)\natcom.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\natcom.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)\natweblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)\natcom.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)\natcom.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)\natweblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)\natweblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)\natweblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)\natweblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)\natweblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)\natweblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)"},

				/**** Needs to be a list in object *****/  
//				logContent: "at se.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)\n"
//					+ "at se.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)\n"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)\n"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\n"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\n"
//				  	+ "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n"
//				  	+ "at java.lang.reflect.Method.invoke(Method.java:597)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)\n"
//				  	+ "at com.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)\n"
//				  	+ "at se.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)\n"
//				  	+ "at sun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)\n"
//				  	+ "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n"
//				  	+ "at java.lang.reflect.Method.invoke(Method.java:597)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\n"
//				  	+ "at com.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\n"
//				  	+ "at com.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)\n"
//				  	+ "at weblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)\n"
//				  	+ "at com.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\n"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)\n"
//				  	+ "at com.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)\n"},
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)\n"
//				  	+ "at weblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)\n"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)\n"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)\n"
//				  	+ "at weblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)\n"
//				  	+ "at weblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)\n"
//				  	+ "at weblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)\n"
//				  	+ "at weblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)\n"
//				  	+ "at weblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)\n"},	  
				{id: "2", date: "2017-11-13 15:57:37", type: "IdSekretess", name: "IdSokning.java:149", logDate: "log date",
						  logThread: "Tråd: ",
						  logCallID: "AnropsID: ",
						  logException: "se.rsv.id.util.exception.IdSekretessException: Felkod:70 Sekretess",
						  logContent: "at se.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)...\n"},
				{id: "2", date: "2017-11-13 15:57:37", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "3", date: "2017-11-13 15:24:59", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "4", date: "2017-11-13 15:16:00", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "5", date: "2017-11-13 15:14:55", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "6", date: "2017-11-13 15:13:35", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "7", date: "2017-11-13 15:12:49", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "8", date: "2017-11-13 15:11:52", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "9", date: "2017-11-13 15:11:02", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "10", date: "2017-11-13 15:10:53", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "11", date: "2017-11-13 15:10:35", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "12", date: "2017-11-13 14:52:55", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "13", date: "2017-11-13 14:52:54", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "14", date: "2017-11-13 14:52:53", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "15", date: "2017-11-13 14:52:52", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "16", date: "2017-11-13 14:51:21", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "17", date: "2017-11-13 14:42:57", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "18", date: "2017-11-13 14:41:46", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "19", date: "2017-11-13 14:35:07", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "20", date: "2017-11-13 14:31:57", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "21", date: "2017-11-12 16:35:36", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "22", date: "2017-11-12 16:25:16", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "23", date: "2017-11-11 12:35:36", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "24", date: "2017-11-11 12:34:30", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{id: "25", date: "2017-11-11 12:25:36", type: "IdSekretess", name: "IdSokning.java:149", details: "log header", content: "log content"},
		    ];
		 $scope.tableParams = new NgTableParams({}, { dataset: data});
		 
		 /*** List of log content ***/
//		 var logContent = [
//			 {id: "1", line: "at se.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)"},	
//			 {id: "1", line: "at se.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)"},
//			 {id: "1", line: "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)"},
//			 {id: "1", line: "at java.lang.reflect.Method.invoke(Method.java:597)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)"},
//			 {id: "1", line: "at com.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)"},
//			 {id: "1", line: "at se.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)"},
//			 {id: "1", line: "at sun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)"},
//			 {id: "1", line: "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)"},
//			 {id: "1", line: "at java.lang.reflect.Method.invoke(Method.java:597)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)"},
//			 {id: "1", line: "at com.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"},
//			 {id: "1", line: "at com.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)"},
//			 {id: "1", line: "at weblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)"},
//			 {id: "1", line: "at com.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"},
//			 {id: "1", line: "at com.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)"},
//			 {id: "1", line: "at com.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)"},
//			 {id: "1", line: "at weblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)"},
//			 {id: "1", line: "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)"},
//			 {id: "1", line: "at weblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)"},
//			 {id: "1", line: "at weblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)"},
//			 {id: "1", line: "at weblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)"},
//			 {id: "1", line: "at weblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)"},
//			 {id: "1", line: "at weblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)"}
//		 ];
		 
		 	$scope.expandSelected=function(log){
		 	 data.forEach(function(val){
	 			if(data.id == log.id){
		 				val.expanded=false;
		 				//list of log content
		 			}
		 		})
			    log.expanded=true;
			  }
  
}]);