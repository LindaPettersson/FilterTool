myApp.controller('summaryexceptionsController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){

	//Back to summary types
	$scope.goToSummaryTypes = function(){
		$location.path('/summarytypes');
	}
	
	
	//Display mock data in table	
		 var data = [
			  {id: "1", date: "2017-11-13 16:35:36", type: "IdSekretess", name: "IdSokning.java:149", logDate: "Tid: 2017-12-12 20.05.05;077",
			   logThread: "Tråd: [ACTIVE] ExecuteThread: '19' for queue: 'weblogic.kernel.Default (self-tuning)'",
			   logCallID: "AnropsID: u30216_15022.171113.163531781.160.72",
			   logException: "se.rsv.id.util.exception.IdSekretessException: Felkod:70 Sekretess",
			   logContent : "at se.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)\nat se.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)\nat se.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)\nat se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\nat se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\nat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\nat java.lang.reflect.Method.invoke(Method.java:597)\nat com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)\nat com.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)\nat se.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)\nat sun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)\nat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\nat java.lang.reflect.Method.invoke(Method.java:597)\nat com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\nat com.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\nat com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\nat com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\nat com.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)\nat weblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)\nat com.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\nat com.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\nat com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\nat com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\nat com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\nat com.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)\nat com.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)\nat se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)\nat weblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)\nat se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)\nat se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)\nat weblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)\nat weblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)\nat weblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)\nat weblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)\nat weblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)"},
//			  logContent: "at se.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)"
//					+ "at se.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)"
//				  	+ "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)"
//				  	+ "at java.lang.reflect.Method.invoke(Method.java:597)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)"
//				  	+ "at com.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)"
//				  	+ "at se.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)"
//				  	+ "at sun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)"
//				  	+ "at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)"
//				  	+ "at java.lang.reflect.Method.invoke(Method.java:597)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)"
//				  	+ "at com.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"
//				  	+ "at com.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)"
//				  	+ "at weblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)"
//				  	+ "at com.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)"
//				  	+ "at com.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)"
//				  	+ "at com.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)"},
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)"
//				  	+ "at weblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)"
//				  	+ "at se.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)"
//				  	+ "at weblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)"
//				  	+ "at weblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)"
//				  	+ "at weblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)"
//				  	+ "at weblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)"
//				  	+ "at weblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)"},
				{date: "2017-11-13 15:57:37", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:24:59", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:16:00", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:14:55", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:13:35", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:12:49", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:11:52", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:11:02", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:10:53", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 15:10:35", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:55", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:54", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:53", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:52:52", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:51:21", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:42:57", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:41:46", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:35:07", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-13 14:31:57", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-12 16:35:36", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-12 16:25:16", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:35:36", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:34:30", name: "IdSokning.java:149", details: "log header", content: "log content"},
				{date: "2017-11-11 12:25:36", name: "IdSokning.java:149", details: "log header", content: "log content"}
		    ];
		 $scope.tableParams = new NgTableParams({}, { dataset: data});
		 	$scope.expandSelected=function(log){
		 		data.forEach(function(val){
		 			if(data.id == log.id){
		 				val.expanded=false;
		 			}
		 		})
			    log.expanded=true;
			  }
  
}]);