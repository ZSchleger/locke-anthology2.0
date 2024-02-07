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
    
    
    <xsl:template match="/">
        
        <xsl:for-each select="$Poems">
            <!--FOR EACH file in the Poems collection, output a new file that will go in your _source/_includes directory -->
            <!--You want to define filename variable that maybe reads from the filepath of the current file you're processing. The example below reads in the
       base filepath of the current file and grabs the last portion. You also need to cut off the .xml and change it .html -->
            <xsl:variable name="filename">
                <xsl:value-of
                    select="tokenize(base-uri(), '/')[last()] ! substring-before(., '.xml')"/>
            </xsl:variable>
            
            <xsl:result-document method="xhtml" html-version="5" omit-xml-declaration="yes" 
                include-content-type="no" href="source/_includes/poems/{$filename}.html">
                
                <!--Your code goes here for processing the poems. -->
                <xsl:apply-templates select="TEI"/>
              
                
            </xsl:result-document>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="TEI">

        
        <xsl:apply-templates select="descendant::div"/>
        
    </xsl:template>
   
    
    <xsl:template match="head">
        <h2><a id="{head}">
            <xsl:apply-templates/>
        </a></h2>
    </xsl:template>
    
    <xsl:template match="lg">
        <p class="stanza">
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <xsl:template match="l">
        
        <xsl:apply-templates/><br/>
        
    </xsl:template>
    
    
    <xsl:template match="byline">
        <div class="author">
            <xsl:apply-templates/>
            
        </div>
    </xsl:template>


    <xsl:template match="rs">       
        <span class ="{@type}" title="{@subtype}">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    
    <xsl:template match="rhyme">
        <span title="{@label}">
            <xsl:apply-templates/>
        </span>
    </xsl:template>
        
        
    
</xsl:stylesheet>