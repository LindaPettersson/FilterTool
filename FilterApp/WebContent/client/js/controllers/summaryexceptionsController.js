myApp.controller('summaryexceptionsController', ['$scope', '$location', 'NgTableParams', function($scope, $location, NgTableParams){

	//Back to summary types
	$scope.goToSummaryTypes = function(){
		$location.path('/summarytypes');
	}
	
	/* TODO
	 * Get summary for exceptions from FileHandler class
	 * Replace mock data
	 */
	
	//Display mock data in table	
		 var data = [
			  {id: "1", date: "2017-11-13 16:35:36", type: "IdSekretess", name: "IdSokning.java:149", logDate: "Tid: 2017-11-13 16:35:36;077",
			   logThread: "Tråd: [ACTIVE] ExecuteThread: '19' for queue: 'weblogic.kernel.Default (self-tuning)'",
			   logCallID: "AnropsID: u30216_15022.171113.163531781.160.72",
			   logException: "se.rsv.id.util.exception.IdSekretessException: Felkod:70 Sekretess",
			   logContent : "atse.rsv.id.sok.IdSokning.konverteraTAnsokningarVO(IdSokning.java:149)\natse.rsv.id.sok.IdSokning.visaArendenKort(IdSokning.java:78)\natse.rsv.id.tjanst.IdArendeTOImpl.visaAnsokningar(IdArendeTOImpl.java:116)\natse.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\natse.rsv.id.tjanst.IdArendeTOEJB.visaAnsokningar(IdArendeTOEJB.java:50)\natsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\natjava.lang.reflect.Method.invoke(Method.java:597)\natcom.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:182)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:149)\natcom.oracle.pitchfork.intercept.MethodInvocationInvocationContext.proceed(MethodInvocationInvocationContext.java:103)\natse.rsv.zi.ejb.ZiHeaderInterceptor.checkHeader(ZiHeaderInterceptor.java:121)\natsun.reflect.GeneratedMethodAccessor163.invoke(Unknown Source)\natsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\natjava.lang.reflect.Method.invoke(Method.java:597)\natcom.bea.core.repackaged.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:310)\natcom.oracle.pitchfork.intercept.JeeInterceptorInterceptor.invoke(JeeInterceptorInterceptor.java:68)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.oracle.pitchfork.spi.MethodInvocationVisitorImpl.visit(MethodInvocationVisitorImpl.java:34)\natweblogic.ejb.container.injection.EnvironmentInterceptorCallbackImpl.callback(EnvironmentInterceptorCallbackImpl.java:54)\natcom.oracle.pitchfork.spi.EnvironmentInterceptor.invoke(EnvironmentInterceptor.java:42)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.doProceed(DelegatingIntroductionInterceptor.java:131)\natcom.bea.core.repackaged.springframework.aop.support.DelegatingIntroductionInterceptor.invoke(DelegatingIntroductionInterceptor.java:119)\natcom.bea.core.repackaged.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:171)\natcom.bea.core.repackaged.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:204)\natcom.sun.proxy.$Proxy66.visaAnsokningar(Unknown Source)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.__WL_invoke(Unknown Source)\natweblogic.ejb.container.internal.SessionRemoteMethodInvoker.invoke(SessionRemoteMethodInvoker.java:40)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl.visaAnsokningar(Unknown Source)\natse.rsv.id.tjanst.IdArendeTOEJB_bh16jx_IdArendeTORemoteImpl_WLSkel.invoke(Unknown Source)\natweblogic.rmi.internal.BasicServerRef.invoke(BasicServerRef.java:667)\natweblogic.rmi.cluster.ClusterableServerRef.invoke(ClusterableServerRef.java:230)\natweblogic.rmi.internal.BasicServerRef$1.run(BasicServerRef.java:522)\natweblogic.security.acl.internal.AuthenticatedSubject.doAs(AuthenticatedSubject.java:363)\natweblogic.security.service.SecurityManager.runAs(SecurityManager.java:146)"},
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
		 
		 //Display log content in expanded table row
		 $scope.expandSelected=function(log){
			 data.forEach(function(val){
				 if(data.id == log.id){
					 val.expanded=false;
		 		 }
		 	 })
			 log.expanded=true;
		 }
  
}]);


