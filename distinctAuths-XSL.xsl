<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet 
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    
    <xsl:variable name="Poems" as="document-node()+"
        select="collection('tei/?select=*.xml')"/>
    <!--Adapt the variable to wherever you choose to locate the directory of TEI poems. -->
    <xsl:variable name="distinctAuths" select="$Poems//titleStmt//author => distinct-values()"/>
    
    <xsl:template match="/">
        <ol>
            <xsl:for-each select="$distinctAuths">
                
                <li><xsl:value-of select="current()"/></li>
                
            </xsl:for-each>
        </ol>
        
        
       <!--  Used this to find the rogue files with duplicate authors starting with "By"
          <ol>
            <xsl:for-each select="$distinctAuths">
                
                <xsl:if test="starts-with(current(), 'By')">  
                    <li><xsl:value-of select="$Poems//titleStmt[author = current()]/base-uri() ! tokenize(., '/')[last()]"/></li>
                    
                </xsl:if>
                
            </xsl:for-each>
        </ol>-->
   
    </xsl:template>
    
 
        
        
    
</xsl:stylesheet>